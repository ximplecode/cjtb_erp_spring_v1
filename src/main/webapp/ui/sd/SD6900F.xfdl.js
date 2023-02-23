(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6900F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMstSeqno", this);
            obj._setContents("<ColumnInfo><Column id=\"MAXNUMBER\" type=\"STRING\" size=\"12\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SHI_ZONE\" type=\"STRING\" size=\"5\"/><Column id=\"SHI_ZONE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHI_SCHOOL_LEVEL\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_DIVISION\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_CUST_GB\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_CUST_CD\" type=\"STRING\" size=\"4\"/><Column id=\"SHI_CUST_RESUME\" type=\"STRING\" size=\"256\"/><Column id=\"SHI_BRANCH\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_STATUS\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_FOUNDATION\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_SYSTEM\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_ZIPCODE\" type=\"STRING\" size=\"6\"/><Column id=\"SHI_SALES_CD\" type=\"STRING\" size=\"6\"/><Column id=\"SHI_SALES_NAEM\" type=\"STRING\" size=\"256\"/><Column id=\"SHI_ID\" type=\"STRING\" size=\"7\"/><Column id=\"SHI_PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"SHI_FAX\" type=\"STRING\" size=\"20\"/><Column id=\"SHI_ADDRESS\" type=\"STRING\" size=\"200\"/><Column id=\"SHI_HOMEPAGE\" type=\"STRING\" size=\"200\"/><Column id=\"SHI_NAME\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolStudent", this);
            obj._setContents("<ColumnInfo><Column id=\"SHI_ID\" type=\"STRING\" size=\"7\"/><Column id=\"SHS_ELEMENTARY1\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_ELEMENTARY2\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_ELEMENTARY3\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_ELEMENTARY4\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_ELEMENTARY5\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_ELEMENTARY6\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_MIDDLE1\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_MIDDLE2\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_MIDDLE3\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_HIGH1\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_HIGH2\" type=\"STRING\" size=\"5\"/><Column id=\"SHS_HIGH3\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolTeacher", this);
            obj._setContents("<ColumnInfo><Column id=\"SHI_ID\" type=\"STRING\" size=\"7\"/><Column id=\"SHT_ET\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_01\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_02\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_03\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_04\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_05\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_06\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_07\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_08\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_09\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_10\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_11\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_12\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_13\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_14\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_15\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_16\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_17\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_18\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_19\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_MT_20\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_01\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_02\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_03\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_04\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_05\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_06\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_07\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_08\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_09\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_10\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_11\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_12\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_13\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_14\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_15\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_16\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_17\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_18\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_19\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_20\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_21\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_22\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_23\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_24\" type=\"STRING\" size=\"5\"/><Column id=\"SHT_HT_25\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolLevel", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">초등학교</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">중학교</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">고등학교</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDivision", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">인문</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">실업</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">특수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">본교</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">분교</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">기존교</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">신설교</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">폐교</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFoundation", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">공립</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">국립</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">사립</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSystem", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">일반고</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">자율고</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">특성화고(대안)</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">특성화고(직업)</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">특수목적고</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">특수학교</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXlsSheetName", this);
            obj._setContents("<ColumnInfo><Column id=\"number\" type=\"STRING\" size=\"2\"/><Column id=\"sheetname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"number\">1</Col><Col id=\"sheetname\">학부모</Col></Row><Row><Col id=\"number\">2</Col><Col id=\"sheetname\">학생</Col></Row><Row><Col id=\"number\">3</Col><Col id=\"sheetname\">교사</Col></Row><Row><Col id=\"number\">4</Col><Col id=\"sheetname\">강사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelLoad", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCell", this);
            obj._setContents("<ColumnInfo><Column id=\"Column\" type=\"STRING\" size=\"256\"/><Column id=\"CellText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEducationOffice", this);
            obj._setContents("<ColumnInfo><Column id=\"SHE_CITIES_CD\" type=\"STRING\" size=\"2\"/><Column id=\"SHE_EDO_CD\" type=\"STRING\" size=\"4\"/><Column id=\"SHE_CITIES_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"SHE_DEO_NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolEducationOfficeZone", this);
            obj._setContents("<ColumnInfo><Column id=\"SHE_CITIES_CD\" type=\"STRING\" size=\"2\"/><Column id=\"SHI_ZONE\" type=\"STRING\" size=\"5\"/><Column id=\"SHI_ZONE_NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubject", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SBJCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SBJCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SBJCT_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MR_SBJCT_CODE\">01</Col><Col id=\"MR_SBJCT_NAME\">국어</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">02</Col><Col id=\"MR_SBJCT_NAME\">영어</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">03</Col><Col id=\"MR_SBJCT_NAME\">수학</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">04</Col><Col id=\"MR_SBJCT_NAME\">사회</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">05</Col><Col id=\"MR_SBJCT_NAME\">과학</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">99</Col><Col id=\"MR_SBJCT_NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolYear", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SCHOOL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SCHOOL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SCHOOL_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MR_SCHOOL_CODE\">01</Col><Col id=\"MR_SCHOOL_NAME\">초등</Col></Row><Row><Col id=\"MR_SCHOOL_CODE\">02</Col><Col id=\"MR_SCHOOL_NAME\">중등</Col></Row><Row><Col id=\"MR_SCHOOL_CODE\">03</Col><Col id=\"MR_SCHOOL_NAME\">고등</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind3", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestLevel", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">A</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">B</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">C</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MRKT_RSRCH_MST", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EXPRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PRSNL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ELMNT\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_CHANNEL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EXPRT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_CAREER\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV1\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV2\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV3\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV4\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV5\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV6\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV7\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV8\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV9\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV10\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV11\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MRKT_RSRCH_DTL", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND1\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND2\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND3\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND4\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND5\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_OPEN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"EVLTN_KIND5_MEMO\" type=\"STRING\" size=\"1000\"/><Column id=\"MRKT_THIRD_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdown", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">이상</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">이하</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind7", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnPath", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"CODE3\" type=\"STRING\" size=\"256\"/><Column id=\"NAME3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSex", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">남</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">여</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">초등학교 1학년</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">초등학교 2학년</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">초등학교 3학년</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">초등학교 4학년</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">초등학교 5학년</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">초등학교 6학년</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">중학교 1학년</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">중학교 2학년</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">중학교 3학년</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">고등학교 1학년</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">고등학교 2학년</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">고등학교 3학년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind6", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind4", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind5", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">1년</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">3년</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">5년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_sabun","0","770","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("cbo_mrd_seq","117","770","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("@@@@@@@@@@@@");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","10","0","1150","720",null,null,"870",null,"450",null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3.48%","0.83%","51.91%","11.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("시장조사 대상자 DB등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_06","35.04%","34.03%","64.26%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_13","35.05%","38.62%","64.27%","15.56%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_01","0.87%","10.42%","98.44%","4.8%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_03","0.87%","15.28%","5.22%","38.89%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("기\r\n본\r\n정\r\n보");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_02","Static00_03:1.7%","Static09_01:2.95%","93.14%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #8ca5d0");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_03","Static00_03:1.7%","Static09_02:-3.03%","93.14%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_04","Static00_03:1.7%","Static09_03:-3.03%","93.14%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_subject","24.00%","Static09_04:0.00%","11.14%","25%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsSubject");
            obj.set_autofittype("col");
            obj.set_border("1px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"36\"/><Column size=\"66\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"과목\"/></Band><Band id=\"body\"><Cell text=\"bind:MR_SBJCT_CHECK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MR_SBJCT_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MR_SBJCT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_05","grd_subject:-0.78%","Static09_04:-2.95%","64.26%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_01","Static09_01:-100%","Static09_01:-100%","6.96%","4.8%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("관리번호");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_04","Static09_02:-100.00%","Static09_02:-100.00%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("직업구분");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_05","Static09_03:-100.00%","Static09_03:-100.00%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("학교/학원형태");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_06","Static09_04:-100.00%","Static09_04:-100.00%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("성명");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_07","Static00_03:1.67%","Static09_04:-2.95%","3.48%","25.14%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("강의\r\n구분");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_year","Static00_07:-2.5%","Static00_06:0%","11.14%","25%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_binddataset("dsSchoolYear");
            obj.set_autofittype("col");
            obj.set_border("1px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"35\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:MR_SCHOOL_CHECK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MR_SCHOOL_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MR_SCHOOL_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_08","grd_year:-0.79%","Static09_04:-2.95%","3.48%","25.14%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("강의\r\n과목");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_16","grd_subject:-0.79%","Static09_05:-100%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("정보 보유 기간");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_18","grd_subject:-0.79%","Static09_06:-100%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("시장조사 참여일");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_name","Static00_06:5.27%","Static09_04:-88%","16%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_14","edt_name:4.35%","Static09_04:-100%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("핸드폰");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kinds","Static00_05:5.27%","Static09_03:-88.00%","3.12%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_kinds","edt_kinds:0%","Static09_03:-88%","12.96%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_10","cbo_kinds:5.4%","Static09_03:-100%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("학원 원생 규모");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_20","Static09_13:-100%","Static09_13:-100%","11.57%","15.56%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("조사내용");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_RSRCH_id","Static00_01:6.25%","Static09_01:-88%","8.87%","3.33%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("76");
            obj.set_format("@@@@@@@@@@@@");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_02","edt_RSRCH_id:5.88%","Static09_01:-100%","6.52%","4.8%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("등록자");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_job","Static00_04:5.27%","Static09_02:-88%","3.12%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_job","edt_job:0%","Static09_02:-88%","12.96%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_09","cbo_job:5.37%","Static09_02:-100.00%","11.57%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_textAlign("center");
            obj.set_text("학교/학원명");
            obj.set_font("normal 13px/normal \"Gulim\"");
            obj.set_color("#01656f");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cald_hold","53.22%","Static09_05:-88%","11.74%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("82");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_17","cald_hold:5.19%","Static09_05:-100%","6.43%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("이메일");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_phone","Static00_14:3.76%","Static09_04:-88%","11.74%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_15","edt_phone:3.7%","Static09_04:-100%","6.43%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("주소");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_01","52.35%","Static09_03:-88%","2%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_text("명");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_11","Static01_01:21.74%","Static09_03:-100%","6.43%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("초등");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_02","66.52%","Static09_03:-88%","2%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_12","Static01_02:21.74%","Static09_03:-100%","6.43%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("중등");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_03","80.61%","Static09_03:-88%","2%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_13","Static01_03:21.74%","Static09_03:-100%","6.43%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("고등");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cald_date","Static00_18:3.76%","Static09_06:-88%","11.74%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("63");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_19","cald_date:3.7%","Static09_06:-100.00%","6.43%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("제3자");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cald_third","Static00_19:9.59%","Static09_06:-88%","11.74%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("58");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_14","cald_third:40.75%","Static09_06:-100%","16.7%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_22","Static00_20:3.01%","Static09_13:-33.93%","11.91%","4.72%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("역량평가");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00_21","Static00_20:3.01%","Static09_13:-96.43%","11.91%","9.44%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("참여교재");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_07","Static09_13:-62.33%","Static09_13:-95.54%","19.31%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #8ca5d0");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_09","Static09_13:-62.33%","Static09_13:-66.08%","19.3%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #8ca5d0");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_11","Static09_13:-62.33%","Static09_13:-33.93%","19.3%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #8ca5d0");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_10","Static09_13:-32.52%","Static09_13:-66.08%","19.3%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #8ca5d0");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_08","Static09_13:-32.52%","Static09_13:-95.54%","19.3%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #8ca5d0");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static09_12","Static09_13:-32.52%","Static09_13:-33.93%","19.3%","4.73%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #8ca5d0");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_title","Static00_02:12.16%","Static09_01:-88%","9.57%","3.33%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_addr","Static00_15:10.96%","Static09_04:-88%","30%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_scale","Static00_10:3.76%","Static09_03:-88%","4.96%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_scale_elem","Static00_11:8.22%","Static09_03:-88%","4.43%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_scale_mid","Static00_12:9.59%","Static09_03:-88%","4.35%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_scale_high","Static00_13:6","Static09_03:-88%","4.09%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_04","edt_scale_high:10.64%","Static09_03:-88%","2%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_hold","Static00_16:3.76%","Static09_05:-88%","6%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsYearCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_mst","0.78%","54.72%","54.35%","43.61%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_binddataset("ds_MRKT_RSRCH_MST");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("head");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"218\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관리번호\"/><Cell col=\"1\" text=\"등록자\"/><Cell col=\"2\" text=\"직업구분\"/><Cell col=\"3\" text=\"학교명\"/><Cell col=\"4\" text=\"학원형태\"/><Cell col=\"5\" text=\"규모\"/><Cell col=\"6\" text=\"초등\"/><Cell col=\"7\" text=\"중등\"/><Cell col=\"8\" text=\"고등\"/></Band><Band id=\"body\"><Cell text=\"bind:MRKT_RSRCH_ID\"/><Cell col=\"1\" text=\"bind:MRKT_SABUN\"/><Cell col=\"2\" text=\"bind:MRKT_JOB\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsEvltnKind4\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:MRKT_JOB_NAME\"/><Cell col=\"4\" text=\"bind:MRKT_KIND\"/><Cell col=\"5\" text=\"bind:MRKT_PRSNL\"/><Cell col=\"6\" text=\"bind:MRKT_ELMNT\"/><Cell col=\"7\" text=\"bind:MRKT_MIDDLE\"/><Cell col=\"8\" text=\"bind:MRKT_HIGH\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","55.39%","54.72%","43.74%","43.61%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("57");
            obj.set_binddataset("ds_MRKT_RSRCH_DTL");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("head");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"212\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"과목\"/><Cell col=\"3\" text=\"브랜드\"/><Cell col=\"4\" text=\"조사형태\"/><Cell col=\"5\" text=\"역량평가\" edittype=\"combo\" displaytype=\"combotext\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EVLTN_KIND1\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsEvltnKind6\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:EVLTN_KIND2\" combodataset=\"dsEvltnKind1\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:EVLTN_KIND3\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsEvltnKind2\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"4\" text=\"bind:EVLTN_KIND4\" combodataset=\"dsEvltnKind3\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:EVLTN_KIND5\" combodataset=\"dsTestLevel\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\" edittype=\"combo\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_email","Static00_17:8.22%","Static09_05:-88%","26.35%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("59");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_in_new","Static09_14:-93.23%","Static09_14:-90%","4.52%","3.50%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("60");
            obj.set_text("추가");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_in_save","Static09_14:-63.02%","Static09_14:-90%","4.52%","3.50%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("61");
            obj.set_text("저장");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_in_del","Static09_14:-32.81%","Static09_14:-90%","4.52%","3.5%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("62");
            obj.set_text("삭제");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind1_cd","Static09_07:-97.75%","Static09_07:-85.30%","3.48%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("65");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_kind1","edt_kind1_cd:5%","Static09_07:-85.30%","14.52%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("64");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind3_cd","Static09_09:-97.74%","Static09_09:-85.30%","3.48%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("67");
            obj.set_textAlign("center");
            obj.set_format("@@@");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_kind3","edt_kind3_cd:5%","Static09_09:-85.30%","14.52%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("66");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_kind2","Static09_08:-78.29%","Static09_08:-85.30%","14.52%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("68");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind2_cd","Static09_08:-97.29%","Static09_08:-85.30%","3.48%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("69");
            obj.set_textAlign("center");
            obj.set_format("@@");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind4_cd","Static09_10:-97.29%","Static09_10:-85.30%","3.48%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("70");
            obj.set_textAlign("center");
            obj.set_format("@@");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_kind4","Static09_10:-78.29%","Static09_10:-85.30%","14.52%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("71");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind5_cd","Static09_11:-97.74%","Static09_11:-85.30%","3.48%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("72");
            obj.set_textAlign("center");
            obj.set_format("@@");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_kind5","edt_kind5_cd:5%","Static09_11:-85.30%","14.52%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("73");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsTestLevel");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_kind5_memo","Static09_12:-97.29%","Static09_12:-85.30%","18.17%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("74");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_career","edt_title:7.24%","Static09_01:-103%","64.61%","5.28%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("75");
            obj.set_visible("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_00","0.14%","3%","99.5%","90%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("1");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Static("Static02_02","0.14%","2.70%","18%","90.00%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("모집채널");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Static("Static02_01","0.14%","2.7%","18.0%","90%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("경력");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new MaskEdit("edt_02","Static02_02:3.76%","15.79%","4.71%","63.16%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("3");
            obj.set_padding("0px");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Combo("cbo_01","edt_02:0%","15.79%","18.03%","63.16%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind7");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static02_01:3.76%","15.79%","7.67%","63.16%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("5");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Static("Static02_06","edt_01:10.71%","15.79%","23","24",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("6");
            obj.set_text("년");
            obj.set_textAlign("center");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Static("Static02_03","Static02_01:135.34%","2.7%","9.96%","90%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("성별");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Combo("cbo_02","Static02_03:6.76%","15.79%","10.23%","63.16%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsSex");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Static("Static02_04","cbo_02:6.58%","2.7%","9.96%","90%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("생년");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new MaskEdit("edt_03","Static02_04:6.76%","15.79%","6.73%","63.16%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("10");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Static("Static02_05","edt_03:10%","2.7%","9.96%","90%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("나이(만)");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new MaskEdit("edt_04","Static02_05:8.11%","15.79%","6.19%","63.16%",null,null,null,null,null,null,this.div_main.form.div_career.form);
            obj.set_taborder("12");
            this.div_main.form.div_career.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5%","6.61%","4.5%","8",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("77");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5%","6.61%","4.5%","btn_del:11.76%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("78");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"5%","6.61%","4.5%","btn_save:11.76%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("79");
            obj.set_text("신규");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5%","6.61%","4.50%","btn_can:11.76%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("80");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_xlsfind",null,"5%","8.35%","4.50%","btn_search:12.96%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("81");
            obj.set_text("가져오기");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_schoolname","Static00_09:3.8%","Static09_02:-88%","21.74%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("83");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_searchpostnumber","edt_addr:1.45%","Static09_04:-88%","2.09%","3.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("84");
            obj.set_background("url(\'Img::btn_TF_src.png\') no-repeat center center");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_schoolyear","edt_title:7.2%","15.14%","64.52%","5.15%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("85");
            obj.set_visible("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static04_00","0.14%","3%","99.80%","94.45%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("1");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new Static("Static04_01","0.14%","2.78%","17.95%","94.45%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("자녀학년");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","Static04_01:6.02%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("2");
            obj.set_text("초1");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","chk_01:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("3");
            obj.set_text("초2");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","chk_02:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("4");
            obj.set_text("초3");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_04","chk_03:1","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("5");
            obj.set_text("초4");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_05","chk_04:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("6");
            obj.set_text("초5");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_06","chk_05:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("7");
            obj.set_text("초6");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_07","chk_06:12.5%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("8");
            obj.set_text("중1");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_08","chk_07:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("9");
            obj.set_text("중2");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_09","chk_08:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("10");
            obj.set_text("중3");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_10","chk_09:12.5%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("11");
            obj.set_text("고1");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_11","chk_10:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("12");
            obj.set_text("고2");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_12","chk_11:2.08%","19.45%","6.6%","63.89%",null,null,null,null,null,null,this.div_main.form.div_schoolyear.form);
            obj.set_taborder("13");
            obj.set_text("고3");
            this.div_main.form.div_schoolyear.addChild(obj.name, obj);

            obj = new Div("div_grade","edt_title:7.24%","15.2%","34.70%","5.15%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("86");
            obj.set_visible("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_00","0.27%","2.78%","97.9%","94.45%",null,null,null,null,null,null,this.div_main.form.div_grade.form);
            obj.set_taborder("1");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_main.form.div_grade.addChild(obj.name, obj);

            obj = new Static("Static03_01","0.14%","2.78%","33.34%","94.45%",null,null,null,null,null,null,this.div_main.form.div_grade.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("학년");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.div_main.form.div_grade.addChild(obj.name, obj);

            obj = new Combo("cbo_01","Static03_01:4.51%","16.67%","37.34%","66.67%",null,null,null,null,null,null,this.div_main.form.div_grade.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsGrade");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.div_main.form.div_grade.addChild(obj.name, obj);

            obj = new Div("div_exceldata","2","837","648","363",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid dimgray");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5.73%","1.13%",null,null,"24.46%","83.56%",null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("0");
            obj.set_text("Excel Data Upload");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Button("btn_close","583","29","52","22",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Static("Static00_04","311","97","83","35",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("normal 13px/normal \"Gulim\"");
            obj.set_text("적용년도");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Static("Static09_02","393","97","242","35",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("3");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new MaskEdit("edt_year","399","103","85","24",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("4");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_format("@@@@");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Grid("grd_excel_load","11","136","624","216",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsExcel");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("both");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"/><Format id=\"format_init\"/></Formats>");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Button("btn_errchk","499","104","72","22",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("6");
            obj.set_text("오류검사");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Button("btn_apply","576","104","52","22",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("7");
            obj.set_text("적용");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","12","97","83","35",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("normal 13px/normal \"Gulim\"");
            obj.set_text("시트이름");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Static("Static09_02_00","94","97","218","35",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("9");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Button("btn_xlsfind","223","104","72","22",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("10");
            obj.set_text("가져오기");
            this.div_exceldata.addChild(obj.name, obj);

            obj = new Combo("cbo_sheetname","100","103","105","24",null,null,null,null,null,null,this.div_exceldata.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsXlsSheetName");
            obj.set_codecolumn("number");
            obj.set_datacolumn("sheetname");
            obj.set_text("학부모");
            obj.set_value("1");
            obj.set_index("0");
            this.div_exceldata.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item38","edt_sabun","value","ds_MRKT_RSRCH_MST","MRKT_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_main.form.edt_title","value","ds_MRKT_RSRCH_MST","MRKT_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.edt_job","value","ds_MRKT_RSRCH_MST","MRKT_JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.edt_kinds","value","ds_MRKT_RSRCH_MST","MRKT_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.edt_name","value","ds_MRKT_RSRCH_MST","MRKT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.edt_phone","value","ds_MRKT_RSRCH_MST","MRKT_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.edt_addr","value","ds_MRKT_RSRCH_MST","MRKT_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.edt_scale","value","ds_MRKT_RSRCH_MST","MRKT_PRSNL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_scale_elem","value","ds_MRKT_RSRCH_MST","MRKT_ELMNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_scale_mid","value","ds_MRKT_RSRCH_MST","MRKT_MIDDLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_scale_high","value","ds_MRKT_RSRCH_MST","MRKT_HIGH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.edt_scale_elem","value","ds_MRKT_RSRCH_MST","MRKT_ELMNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.edt_scale_mid","value","ds_MRKT_RSRCH_MST","MRKT_MIDDLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.edt_scale_high","value","ds_MRKT_RSRCH_MST","MRKT_HIGH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.cbo_hold","value","ds_MRKT_RSRCH_MST","MRKT_EXPRT_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.cald_third","value","ds_MRKT_RSRCH_DTL","MRKT_THIRD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.edt_email","value","ds_MRKT_RSRCH_MST","MRKT_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.cald_date","value","ds_MRKT_RSRCH_DTL","MRKT_OPEN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.edt_kind1_cd","value","ds_MRKT_RSRCH_DTL","EVLTN_KIND1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.edt_kind3_cd","value","ds_MRKT_RSRCH_DTL","EVLTN_KIND3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.edt_kind2_cd","value","ds_MRKT_RSRCH_DTL","EVLTN_KIND2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.edt_kind4_cd","value","ds_MRKT_RSRCH_DTL","EVLTN_KIND4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.edt_kind5_cd","value","ds_MRKT_RSRCH_DTL","EVLTN_KIND5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.edt_kind5_memo","value","ds_MRKT_RSRCH_DTL","EVLTN_KIND5_MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.div_career.form.edt_01","value","ds_MRKT_RSRCH_MST","MRKT_CAREER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.div_career.form.edt_02","value","ds_MRKT_RSRCH_MST","MRKT_CHANNEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.div_career.form.cbo_02","value","ds_MRKT_RSRCH_MST","MRKT_SEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.div_career.form.edt_03","value","ds_MRKT_RSRCH_MST","MRKT_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.edt_RSRCH_id","value","ds_MRKT_RSRCH_MST","MRKT_RSRCH_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.cald_hold","value","ds_MRKT_RSRCH_MST","MRKT_EXPRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.div_schoolyear.form.chk_01","value","ds_MRKT_RSRCH_MST","MRKT_LV1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_main.form.div_schoolyear.form.chk_02","value","ds_MRKT_RSRCH_MST","MRKT_LV2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_main.form.div_schoolyear.form.chk_03","value","ds_MRKT_RSRCH_MST","MRKT_LV3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_main.form.div_schoolyear.form.chk_04","value","ds_MRKT_RSRCH_MST","MRKT_LV4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_main.form.div_schoolyear.form.chk_05","value","ds_MRKT_RSRCH_MST","MRKT_LV5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_main.form.div_schoolyear.form.chk_06","value","ds_MRKT_RSRCH_MST","MRKT_LV6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_main.form.div_schoolyear.form.chk_07","value","ds_MRKT_RSRCH_MST","MRKT_LV7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_main.form.div_schoolyear.form.chk_08","value","ds_MRKT_RSRCH_MST","MRKT_LV8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_main.form.div_schoolyear.form.chk_09","value","ds_MRKT_RSRCH_MST","MRKT_LV9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_main.form.div_schoolyear.form.chk_10","value","ds_MRKT_RSRCH_MST","MRKT_LV10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_main.form.div_schoolyear.form.chk_11","value","ds_MRKT_RSRCH_MST","MRKT_LV11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_main.form.div_schoolyear.form.chk_12","value","ds_MRKT_RSRCH_MST","MRKT_LV12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.div_grade.form.cbo_01","value","ds_MRKT_RSRCH_MST","MRKT_SCHOOL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6900F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6900F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6900F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var err_chk = "";
        var pMRKT_RSRCH_ID = "";
        var pMRD_SEQ = "";

        var Fv_HeadChk = 0;

        this.SD6900F_onload = function(obj,e)
        {
        	var strUrl, strDs, strArg;

        	strUrl = "JSP/sd/sd6920_select_info.jsp";
        	strDs = "dsEvltnKind1=dsEvltnKind1 dsEvltnKind2=dsEvltnKind2 dsEvltnKind3=dsEvltnKind3  dsEvltnKind4=dsEvltnKind4 dsEvltnKind5=dsEvltnKind5 dsEvltnKind6=dsEvltnKind6 dsEvltnKind7=dsEvltnKind7 dsEvltnPath=dsEvltnPath";
        	strArg = "";

        	this.gfn_TransactionP("mst_select", strUrl, strDs, strDs, strArg, "fnSearchCallback", false, "P", false, this);
        };

        this.fnMstitemClear = function()
        {
        	this.div_main.form.cbo_job.set_index(-1);
        	this.div_main.form.cbo_kinds.set_index(-1);
        	this.fnDtlitemClear();
        }

        this.fnDtlitemClear = function()
        {
        	this.div_main.form.cbo_kind1.set_index(-1);
        	this.div_main.form.cbo_kind2.set_index(-1);
        	this.div_main.form.cbo_kind3.set_index(-1);
        	this.div_main.form.cbo_kind4.set_index(-1);
        	this.div_main.form.cbo_kind5.set_index(-1);
        }

        this.btn_can_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "새로운 관리카드를 생성합니다.\n 정말 등록하시겠습니까? " , "신규카드등록", "warning" ))
        	{
        		this.fnMstitemClear();
        		this.div_main.form.div_career.form.edt_04.set_value("");
        		this.ds_MRKT_RSRCH_MST.clearData();
        		this.ds_MRKT_RSRCH_MST.addRow();
        		this.ds_MRKT_RSRCH_DTL.clearData();
        		this.ds_MRKT_RSRCH_DTL.addRow();
        	}
        };

        this.btn_xlsfind_onclick = function(obj,e)
        {
        	var vtop = (this.height / 2) - (this.div_exceldata.height / 2);
        	var vleft = (this.div_main.form.Static09_01.width / 2) - (this.div_exceldata.width / 2);
        	this.div_exceldata.set_top(vtop);
        	this.div_exceldata.set_left(vleft);
        	this.div_exceldata.set_visible(true);
        	alert('시트이름을 맞춰주시기 바랍니다.');
        };

        this.div_exceldata_btn_close_onclick = function(obj,e)
        {
        	this.div_exceldata.set_visible(false);
        	this.dsExcel.clear();
        	this.div_exceldata.form.cbo_sheetname.set_index(0);
        	this.div_exceldata.form.edt_year.set_value("");
        };

        this.div_exceldata_btn_xlsfind_onclick = function(obj,e)
        {
        	this.importObj = new ExcelImportObject("Import00",this);
            this.importObj.addEventHandler("onsuccess", this.Import_onsuccess, this);
        	this.importObj.addEventHandler("onerror", this.Import_onerror, this);
            this.importObj.set_importurl(gv_urlXeni);
        	var strArg = "[Output=ds;Body="+this.div_exceldata.form.cbo_sheetname.text+"!A:AS]";
            var ret = this.importObj.importData("", strArg, "dsCopy=ds");
        	if(!ret){
        		this.alert("업로드에 실패하셨습니다.");
        		return;
        	}
        };
        this.Import_onerror = function()
        {
        	alert('해당 이름의 시트가 존재하지 않습니다.');
        }
        this.Import_onsuccess = function()
        {
        	this.dsExcel.clearData();
        	this.dsExcel.copyData(this.dsCopy);
        	this.dsCopy.clearData();
        	this.div_exceldata.form.grd_excel_load.deleteContentsRow("head",0);
        	for(var i=0; i < this.div_exceldata.form.grd_excel_load.getFormatColCount(); i++)
        		this.div_exceldata.form.grd_excel_load.deleteContentsCol("body",0);
        	for(var i=0; i < this.div_exceldata.form.grd_excel_load.rowcount; i++)
        		this.div_exceldata.form.grd_excel_load.deleteContentsRow("body",0);

        	for(var i=0; i<2; i++)
        		this.dsExcel.deleteRow(0);
        	this.dsExcel.addColumn("CHK","string");
        	this.div_exceldata.form.grd_excel_load.setBindDataset(this.dsExcel);
        	this.div_exceldata.form.grd_excel_load.appendContentsRow("head");
        	this.div_exceldata.form.grd_excel_load.appendContentsRow("body");
        	this.div_exceldata.form.grd_excel_load.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        	this.div_exceldata.form.grd_excel_load.setCellProperty("head", 0, "edittype", "checkbox");
        	for(var i=0; i<this.dsExcel.colcount-1; i++)
        	{
        		this.div_exceldata.form.grd_excel_load.appendContentsCol("body");
        		this.div_exceldata.form.grd_excel_load.setCellProperty("head", i+1, "text", this.dsExcel.getColumn(0,i));
        		this.div_exceldata.form.grd_excel_load.setCellProperty("row", i+1, "text", "bind:Column"+i)
        	}
        	this.div_exceldata.form.grd_excel_load.setCellProperty("row", 0, "displaytype", "checkboxcontrol");
        	this.div_exceldata.form.grd_excel_load.setCellProperty("row", 0, "edittype", "checkbox");
        	this.div_exceldata.form.grd_excel_load.setCellProperty("row", 0, "text", "bind:CHK");
        	this.dsExcel.deleteRow(0);
        	err_chk = "";
        }

        this.div_exceldata_grd_sheet_oncelldblclick = function(obj,e)
        {
        	if(obj.rowcount <= 0)
        		return;

        	this.importObj = new ExcelImportObject("Import01",this);
            this.importObj.addEventHandler("onsuccess", this.Import_onsuccess, this);
            this.importObj.set_importurl(gv_urlXeni);
            var ret = this.importObj.importData("","output=ds", "dsExcel=ds");
        	if(!ret){
        		this.alert("업로드에 실패하셨습니다.");
        		return;
        	}
        };


        this.div_exceldata_btn_errchk_onclick = function(obj,e)
        {
        	var sErrList = "";
        	var iErrCnt = 0;

        	for (var i = 0; i < this.dsExcel.rowcount; i++)
        	{
        		if (this.dsExcel.getColumn(i, "CHK") == "1")
        		{
        			var pTemp1_cd, pTemp2_cd, pTemp3_cd, pTemp4_cd, pTemp5_cd, pTemp6_cd;

        			var pTemp1 = this.dsExcel.getColumn(i, 0); //직업구분
        			var pTemp2 = this.dsExcel.getColumn(i, 1); //학교/학원명
        			var pTemp3 = this.dsExcel.getColumn(i, 2); //학교/학원형태
        			var pTemp4 = this.dsExcel.getColumn(i, 3); //원생규모(명)
        			var pTemp5 = this.dsExcel.getColumn(i, 4); //초등
        			var pTemp6 = this.dsExcel.getColumn(i, 5); //중등
        			var pTemp7 = this.dsExcel.getColumn(i, 6); //고등
        			var pTemp8 = this.dsExcel.getColumn(i, 7); //성명
        			var pTemp9 = this.dsExcel.getColumn(i, 8); //핸드폰
        			var pTemp10 = this.dsExcel.getColumn(i, 9); //주소
        			var pTemp11 = this.dsExcel.getColumn(i, 10); //이메일
        			var pTemp12 = this.dsExcel.getColumn(i, 11); //강의구분(초등)
        			var pTemp13 = this.dsExcel.getColumn(i, 12); //강의구분(중등)
        			var pTemp14 = this.dsExcel.getColumn(i, 13); //강의구분(고등)
        			var pTemp15 = this.dsExcel.getColumn(i, 14); //강의과목(국어)
        			var pTemp16 = this.dsExcel.getColumn(i, 15); //영어
        			var pTemp17 = this.dsExcel.getColumn(i, 16); //수학
        			var pTemp18 = this.dsExcel.getColumn(i, 17); //사회
        			var pTemp19 = this.dsExcel.getColumn(i, 18); //과학
        			var pTemp20 = this.dsExcel.getColumn(i, 19); //기타
        			var pTemp21 = this.dsExcel.getColumn(i, 20); //참여교재(초중고)
        			var pTemp22 = this.dsExcel.getColumn(i, 21); //과목
        			var pTemp23 = this.dsExcel.getColumn(i, 22); //브랜드
        			var pTemp24 = this.dsExcel.getColumn(i, 23); //조사형태
        			var pTemp25 = this.dsExcel.getColumn(i, 24); //역량평가

        			var pTemp26 = this.dsExcel.getColumn(i, 25); //역량평가 비고
        			var pTemp27 = this.dsExcel.getColumn(i, 26); //시장조사 참여일 26
        			var pTemp28 = this.dsExcel.getColumn(i, 27); //종료일	27

        			var pTemp29 = this.dsExcel.getColumn(i, 28); //경력
        			var pTemp30 = this.dsExcel.getColumn(i, 29); //성별
        			var pTemp31 = this.dsExcel.getColumn(i, 30); //생년
        			var pTemp32 = this.dsExcel.getColumn(i, 31); //모집채널

        			var pTemp33 = this.dsExcel.getColumn(i, 32); //학생학년
        			var pTemp34 = this.dsExcel.getColumn(i, 33); //학생학년
        			var pTemp35 = this.dsExcel.getColumn(i, 34); //학생학년
        			var pTemp36 = this.dsExcel.getColumn(i, 35); //학생학년
        			var pTemp37 = this.dsExcel.getColumn(i, 36); //학생학년
        			var pTemp38 = this.dsExcel.getColumn(i, 37); //학생학년
        			var pTemp39 = this.dsExcel.getColumn(i, 38); //학생학년
        			var pTemp40 = this.dsExcel.getColumn(i, 39); //학생학년
        			var pTemp41 = this.dsExcel.getColumn(i, 40); //학생학년
        			var pTemp42 = this.dsExcel.getColumn(i, 41); //학생학년
        			var pTemp43 = this.dsExcel.getColumn(i, 42); //학생학년
        			var pTemp44 = this.dsExcel.getColumn(i, 43); //학생학년
        			var pTemp45 = this.dsExcel.getColumn(i, 44); //학생학년

        			if ((this.dsExcel.getColumn(i, 0) != null))
        			{
        				this.dsEvltnKind4.filter("NAME == '"+pTemp1+"'");
        				pTemp1_cd = this.dsEvltnKind4.getColumn(0,"CODE");
        				//trace(ds_education_office.SaveXML());
        				this.dsEvltnKind4.filter("");

        				if (pTemp1_cd == null)
        				{
        					//dsExcelLoad.SelectRow(i);
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 직업구분 코드 오류 ** " + "\r\n";
        					trace(i + "row : ** 직업구분 코드 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 직업구분 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 직업구분 데이터 없음 **");
        			}
        			//학교/학원형태
        			if ((this.dsExcel.getColumn(i, 2) != null))
        			{

        				this.dsEvltnKind5.filter("NAME == '"+pTemp3+"'");
        				pTemp3_cd = this.dsEvltnKind5.getColumn(0,"CODE");
        				this.dsEvltnKind5.filter("");

        				if (pTemp3_cd == null)
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 학교/학원형태 코드 오류 ** " + "\r\n";
        					trace(i + "row : ** 학교/학원형태 코드 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 학교/학원형태 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 학교/학원형태 데이터 없음 **");
        			}
        			var a = this.dsExcel.getColumn(i, 20);
        			//참여교재
        			if ((this.dsExcel.getColumn(i, 20) != null))
        			{
        				this.dsEvltnKind6.filter("NAME == '"+pTemp21+"'");
        				pTemp21_cd = this.dsEvltnKind6.getColumn(0,"CODE");
        				this.dsEvltnKind6.filter("");

        				if (pTemp21_cd == null)
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 참여교재(초중고) 코드 오류 ** " + "\r\n";
        					trace(i + "row : ** 참여교재(초중고) 코드 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 참여교재(초중고) 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 참여교재(초중고) 데이터 없음 **");
        			}
        			//과목
        			if ((this.dsExcel.getColumn(i, 21) != null))
        			{
        				this.dsEvltnKind1.filter("NAME == '"+pTemp22+"'");
        				pTemp22_cd = this.dsEvltnKind1.getColumn(0,"CODE");
        				this.dsEvltnKind1.filter("");

        				if (pTemp22_cd == null)
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 과목 코드 오류 ** " + "\r\n";
        					trace(i + "row : ** 과목 코드 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 과목 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 과목 데이터 없음 **");
        			}
        			//브랜드
        			if ((this.dsExcel.getColumn(i, 22) != null))
        			{

        				this.dsEvltnKind2.filter("NAME == '"+pTemp23+"'");
        				pTemp23_cd = this.dsEvltnKind2.getColumn(0,"CODE");
        				this.dsEvltnKind2.filter("");

        				if (pTemp23_cd == null)
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 브랜드 코드 오류 ** " + "\r\n";
        					trace(i + "row : ** 브랜드 코드 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 브랜드 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 브랜드 데이터 없음 **");
        			}
        			//조사형태
        			if ((this.dsExcel.getColumn(i, 23) != null))
        			{
        				this.dsEvltnKind3.filter("NAME == '"+pTemp24+"'");
        				pTemp24_cd = this.dsEvltnKind2.getColumn(0,"CODE");
        				this.dsEvltnKind3.filter("");

        				if (pTemp24_cd == null)
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 조사형태 코드 오류 ** " + "\r\n";
        					trace(i + "row : ** 조사형태 코드 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 조사형태 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 조사형태 데이터 없음 **");
        			}
        			//시장조사 참여일
        			if ((this.dsExcel.getColumn(i, 26) != null))
        			{
        				if (pTemp27.length != 8)
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 시장조사 참여일 오류 ** " + "\r\n";
        					trace(i + "row : ** 시장조사 참여일 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 시장조사 참여일 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 시장조사 참여일 데이터 없음 **");
        			}

        			//핸드폰유효성검사
        			if ( this.dsExcel.getColumn(i, 8) != null )
        			{
        				if ( pTemp9.length < 10 )
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 핸드폰 번호 오류 ** " + "\r\n";
        					trace(i + "row : ** 핸드폰 번호 오류 **");
        				}
        			}
        			//시장조사 종료일
        			if ((this.dsExcel.getColumn(i, 27) != null))
        			{
        				if (pTemp28.length != 8)
        				{
        					iErrCnt = (iErrCnt + 1);

        					sErrList += iErrCnt + " ( " + i + " ) : "
        					           + this.dsExcel.getColumn(i, 0) + " ["
        							   + this.dsExcel.getColumn(i, 1) + "] "
        							   + this.dsExcel.getColumn(i, 2) + " : ** 시장조사 만료일 오류 ** " + "\r\n";
        					trace(i + "row : ** 시장조사 만료일 오류 **");
        				}
        			}
        			else
        			{
        				iErrCnt = (iErrCnt + 1);
        				sErrList += iErrCnt + " ( " + i + " ) : "
        						   + this.dsExcel.getColumn(i, 0) + " ["
        						   + this.dsExcel.getColumn(i, 1) + "] "
        						   + this.dsExcel.getColumn(i, 2) + " : ** 시장조사 만료일 데이터 없음 ** " + "\r\n";
        				trace(i + "row : ** 시장조사 만료일 데이터 없음 **");
        			}
        		}
        	}

        	if (iErrCnt > 0)
        	{
        		alert(iErrCnt + "개의 에러가 발생했습니다.");
        		alert(sErrList);
        	}
        	else
        		alert("에러가 없습니다.");
        	err_chk = "OK";
        };

        this.div_exceldata_btn_apply_onclick = function(obj,e)
        {
        	if (this.dsExcel.rowcount <= 0)
        	{
        		alert("변환 할 데이타가 없습니다.");
        		return;
        	}

        	if (err_chk != "OK")
        	{
        		alert("오류 검사 과정을 진행해주세요!");
        		return;
        	}

        	this.ds_MRKT_RSRCH_MST.clearData();
        	this.ds_MRKT_RSRCH_DTL.clearData();

        	for(var i=0; i < this.dsExcel.rowcount; i++)
            {
        		if (this.dsExcel.getColumn(i, "CHK") == "1")
        		{
        			this.fnImportSend(i);
        		}
        	}
        	alert("처리되었습니다!");
        };

        this.fnImportSend = function(pSetCount)
        {
        	var pTemp1_cd, pTemp2_cd, pTemp3_cd, pTemp4_cd, pTemp5_cd, pTemp6_cd, pTemp7_cd, pTemp8_cd;
        	var pTemp1 = this.dsExcel.getColumn(pSetCount, 0);
        	this.dsEvltnKind4.filter("NAME == '"+pTemp1+"'");
        	pTemp1_cd = this.dsEvltnKind4.getColumn(0,"CODE");
        	this.dsEvltnKind4.filter("");

        	var pTemp3 = this.dsExcel.getColumn(pSetCount, 2);
        	this.dsEvltnKind5.filter("NAME == '"+pTemp3+"'");
        	pTemp2_cd = this.dsEvltnKind5.getColumn(0,"CODE");
        	this.dsEvltnKind5.filter("");

        	var pRow = this.ds_MRKT_RSRCH_MST.addRow();
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_JOB", pTemp1_cd);
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_JOB_NAME", this.dsExcel.getColumn(pSetCount, 1));
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_KIND", pTemp2_cd);
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_PRSNL", this.dsExcel.getColumn(pSetCount, 3));
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_ELMNT", this.dsExcel.getColumn(pSetCount, 4));
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_MIDDLE", this.dsExcel.getColumn(pSetCount, 5));
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_HIGH", this.dsExcel.getColumn(pSetCount, 6));

        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_NAME", this.dsExcel.getColumn(pSetCount, 7));
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_PHONE", this.dsExcel.getColumn(pSetCount, 8));
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_ADDR", this.dsExcel.getColumn(pSetCount, 9));
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_EMAIL", this.dsExcel.getColumn(pSetCount, 10));

        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_EXPRT_DATE", this.dsExcel.getColumn(pSetCount, 27));

        	var exprt = this.dsExcel.getColumn(pSetCount, 28); //경력
        	if(exprt != null)
        		this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_CAREER", nexacro.trim(exprt));

        	var gender = this.dsExcel.getColumn(pSetCount, 29); //성별

        	if(nexacro.trim(gender) == "남자"){
        		this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SEX", "0");
        	}else if(nexacro.trim(gender) == "여자"){
        		this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SEX", "1");
        	}

        	var pTemp31 = this.dsExcel.getColumn(pSetCount, 30); //생년
        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_AGE", pTemp31);

        	var pTemp21 = this.dsExcel.getColumn(pSetCount, 20);
        	this.dsEvltnKind6.filter("NAME == '"+pTemp21+"'");
        	pTemp3_cd = this.dsEvltnKind6.getColumn(0,"CODE");
        	this.dsEvltnKind6.filter("");

        	var pTemp22 = this.dsExcel.getColumn(pSetCount, 21);
        	this.dsEvltnKind1.filter("NAME == '"+pTemp22+"'");
        	pTemp4_cd = this.dsEvltnKind1.getColumn(0,"CODE");
        	this.dsEvltnKind1.filter("");

        	var pTemp23 = this.dsExcel.getColumn(pSetCount, 22);
        	this.dsEvltnKind2.filter("NAME == '"+pTemp23+"'");
        	pTemp5_cd = this.dsEvltnKind2.getColumn(0,"CODE");
        	this.dsEvltnKind2.filter("");

        	var pTemp24 = this.dsExcel.getColumn(pSetCount, 23);
        	this.dsEvltnKind3.filter("NAME == '"+pTemp24+"'");
        	pTemp6_cd = this.dsEvltnKind3.getColumn(0,"CODE");
        	this.dsEvltnKind3.filter("");

        	var pTemp25 = this.dsExcel.getColumn(pSetCount, 24);
        	this.dsTestLevel.filter("NAME == '"+pTemp25+"'");
        	pTemp7_cd = this.dsTestLevel.getColumn(0,"CODE");
        	this.dsTestLevel.filter("");

        	var pTemp32 = this.dsExcel.getColumn(pSetCount, 31);
        	this.dsEvltnKind7.filter("NAME == '"+pTemp32+"'");
        	pTemp8_cd = this.dsEvltnKind7.getColumn(0,"CODE");
        	this.dsEvltnKind7.filter("");

        	this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_CHANNEL", pTemp8_cd);

        	var grade = this.dsExcel.getColumn(pSetCount, 32); //학생학년
        	if (grade != null)
        	{
        		if (nexacro.trim(grade) == "초1")         this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 1);
        		else if (nexacro.trim(grade) == "초2")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 2);
        		else if (nexacro.trim(grade) == "초3")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 3);
        		else if (nexacro.trim(grade) == "초4")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 4);
        		else if (nexacro.trim(grade) == "초5")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 5);
        		else if (nexacro.trim(grade) == "초6")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 6);

        		else if (nexacro.trim(grade) == "중1")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 7);
        		else if (nexacro.trim(grade) == "중2")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 8);
        		else if (nexacro.trim(grade) == "중3")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 9);

        		else if (nexacro.trim(grade) == "고1")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 10);
        		else if (nexacro.trim(grade) == "고2")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 11);
        		else if (nexacro.trim(grade) == "고3")    this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_SCHOOL", 12);
        	}
        	var pTemp32 = this.dsExcel.getColumn(pSetCount, 33); //초1
        	var pTemp33 = this.dsExcel.getColumn(pSetCount, 34); //초2
        	var pTemp34 = this.dsExcel.getColumn(pSetCount, 35); //초3
        	var pTemp35 = this.dsExcel.getColumn(pSetCount, 36); //초4
        	var pTemp36 = this.dsExcel.getColumn(pSetCount, 37); //초5
        	var pTemp37 = this.dsExcel.getColumn(pSetCount, 38); //초6

        	var pTemp38 = this.dsExcel.getColumn(pSetCount, 39); //중1
        	var pTemp39 = this.dsExcel.getColumn(pSetCount, 40); //중2
        	var pTemp40 = this.dsExcel.getColumn(pSetCount, 41); //중3

        	var pTemp41 = this.dsExcel.getColumn(pSetCount, 42); //고1
        	var pTemp42 = this.dsExcel.getColumn(pSetCount, 43); //고2
        	var pTemp43 = this.dsExcel.getColumn(pSetCount, 44); //고3

        	if (pTemp32 != null && (nexacro.trim(pTemp32)).length == "1")      this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV1", "1");
        	if (pTemp33 != null && (nexacro.trim(pTemp33)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV2", "1");
        	if (pTemp34 != null && (nexacro.trim(pTemp34)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV3", "1");
        	if (pTemp35 != null && (nexacro.trim(pTemp35)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV4", "1");
        	if (pTemp36 != null && (nexacro.trim(pTemp36)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV5", "1");
        	if (pTemp37 != null && (nexacro.trim(pTemp37)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV6", "1");

        	if (pTemp38 != null && (nexacro.trim(pTemp38)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV7", "1");
        	if (pTemp39 != null && (nexacro.trim(pTemp39)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV8", "1");
        	if (pTemp40 != null && (nexacro.trim(pTemp40)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV9", "1");

        	if (pTemp41 != null && (nexacro.trim(pTemp41)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV10", "1");
        	if (pTemp42 != null && (nexacro.trim(pTemp42)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV11", "1");
        	if (pTemp43 != null && (nexacro.trim(pTemp43)).length == "1") this.ds_MRKT_RSRCH_MST.setColumn(pRow,"MRKT_LV12", "1");

        	var pRow = this.ds_MRKT_RSRCH_DTL.addRow();
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"EVLTN_KIND1", pTemp3_cd);
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"EVLTN_KIND2", pTemp4_cd);
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"EVLTN_KIND3", pTemp5_cd);
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"EVLTN_KIND4", pTemp6_cd);
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"EVLTN_KIND5", pTemp7_cd);
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"MRKT_OPEN_DATE", this.dsExcel.getColumn(pSetCount, 26));
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"MRKT_THIRD_DATE", "");
        	this.ds_MRKT_RSRCH_DTL.setColumn(pRow,"EVLTN_KIND5_MEMO", this.dsExcel.getColumn(pSetCount, 25));

        	//this.dsSchoolYear
        	var pTemp12 = this.dsExcel.getColumn(pSetCount, 11); //강의구분(초등)
        	var pTemp13 = this.dsExcel.getColumn(pSetCount, 12); //강의구분(중등)
        	var pTemp14 = this.dsExcel.getColumn(pSetCount, 13); //강의구분(고등)

        	if (pTemp12 != null) this.dsSchoolYear.setColumn(0, "MR_SCHOOL_CHECK", "1");
        	else this.dsSchoolYear.setColumn(0, "MR_SCHOOL_CHECK", "0");

        	if (pTemp13 != null) this.dsSchoolYear.setColumn(1, "MR_SCHOOL_CHECK", "1");
        	else this.dsSchoolYear.setColumn(1, "MR_SCHOOL_CHECK", "0");

        	if (pTemp14 != null) this.dsSchoolYear.setColumn(2, "MR_SCHOOL_CHECK", "1");
        	else this.dsSchoolYear.setColumn(2, "MR_SCHOOL_CHECK", "0");

        	//ds_subject
        	var pTemp15 = this.dsExcel.getColumn(pSetCount, 14); //강의과목(국어)
        	var pTemp16 = this.dsExcel.getColumn(pSetCount, 15); //강의과목(영어)
        	var pTemp17 = this.dsExcel.getColumn(pSetCount, 16); //강의과목(수학)
        	var pTemp18 = this.dsExcel.getColumn(pSetCount, 17); //강의과목(사회
        	var pTemp19 = this.dsExcel.getColumn(pSetCount, 18); //강의과목(과학)
        	var pTemp20 = this.dsExcel.getColumn(pSetCount, 19); //강의과목(기타)

        	if (pTemp15!= null && (nexacro.trim(pTemp15)).length != 0) this.dsSubject.setColumn(0, "MR_SBJCT_CHECK", "1");
        	else this.dsSubject.setColumn(0, "MR_SBJCT_CHECK", "0");

        	if (pTemp15!= null && (nexacro.trim(pTemp16)).length != 0) this.dsSubject.setColumn(1, "MR_SBJCT_CHECK", "1");
        	else this.dsSubject.setColumn(1, "MR_SBJCT_CHECK", "0");

        	if (pTemp15!= null && (nexacro.trim(pTemp17)).length != 0) this.dsSubject.setColumn(2, "MR_SBJCT_CHECK", "1");
        	else this.dsSubject.setColumn(2, "MR_SBJCT_CHECK", "0");

        	if (pTemp15!= null && (nexacro.trim(pTemp18)).length != 0) this.dsSubject.setColumn(3, "MR_SBJCT_CHECK", "1");
        	else this.dsSubject.setColumn(3, "MR_SBJCT_CHECK", "0");

        	if (pTemp15!= null && (nexacro.trim(pTemp19)).length != 0) this.dsSubject.setColumn(4, "MR_SBJCT_CHECK", "1");
        	else this.dsSubject.setColumn(4, "MR_SBJCT_CHECK", "0");

        	if (pTemp15!= null && (nexacro.trim(pTemp20)).length != 0) this.dsSubject.setColumn(5, "MR_SBJCT_CHECK", "1");
        	else this.dsSubject.setColumn(5, "MR_SBJCT_CHECK", "0");

        	var strUrl = "JSP/sd/sd6900_mst_tr.jsp";
        	var inDs 	= "ds_MRKT_RSRCH_MST=ds_MRKT_RSRCH_MST:u ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL:u dsSchoolYear=dsSchoolYear:u dsSubject=dsSubject:u ";
        	var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("save_excel", strUrl, inDs, "", strArg, "fnSaveExcel", false, "P", false, this);
        }

        this.fnSaveExcel = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode == -1){
        		alert(ErrorMsg);
        		return;
        	}
        	else if( ErrorCode != 0)
        		this.ds_MRKT_RSRCH_DTL.setColumn(this.ds_MRKT_RSRCH_DTL.rowposition, "MRD_SEQ", ErrorCode);
        	if (ErrorMsg != "FAILED")
        		this.ds_MRKT_RSRCH_MST.setColumn(this.ds_MRKT_RSRCH_MST.rowposition, "MRKT_RSRCH_ID", ErrorMsg);
        }
        this.btn_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("select", {gv_sabun:gv_sabun}, "sd::SD6911F.xfdl", "fnSD6911FCallback", this, 0, 0, 800, 480);
        };

        this.fnSD6911FCallback = function(strID, ret)
        {
        	if(ret != null && nexacro.trim(ret) != "cancel")
        	{
        		var mst_rowstatus = "update";

        		var strUrl, strDs, strArg;

        		strUrl   = "JSP/sd/sd6900_select_info.jsp";
        		strDs =  "ds_MRKT_RSRCH_MST=ds_MRKT_RSRCH_MST ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL dsSchoolYear=dsSchoolYear dsSubject=dsSubject";
        		strArg   =  "values0="+ nexacro.wrapQuote(ret);

        		this.gfn_TransactionP("mst_select", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        	}
        }
        this.div_exceldata_grd_excel_load_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk == 0)
        			Fv_HeadChk = 1;
        		else
        			Fv_HeadChk = 0;

        		this.div_exceldata.form.grd_excel_load.setCellProperty("head", 0, "text", Fv_HeadChk);
        		for(var i = 0; i < this.dsExcel.rowcount; i++)
        		{
        			this.dsExcel.setColumn(i, "CHK", Fv_HeadChk);
        		}
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_job.text == "")
        	{
        		alert("작업구분을 선택하세요!");
        		return;
        	}
        	if (this.div_main.form.edt_kinds.text == "")
        	{
        		alert("학교/학원형태를 선택하세요!");
        		return;
        	}
        	if (this.div_main.form.edt_name.text == "") {
        		alert("성명이 누락되었습니다.");
        		return;
        	}
        	if (this.div_main.form.cald_date.value == null) {
        		alert("시상조사 참여일이 누락되었습니다.");
        		return;
        	}
        	if (this.div_main.form.cald_hold.value == null) {
        		alert("시상조사 만료일이 누락되었습니다.");
        		return;
        	}
        	if (this.div_main.form.edt_phone.text != null && (nexacro.trim(this.div_main.form.edt_phone.text)).length < 11 ) {
        		alert("핸드폰 번호에 오류가 있습니다. 핸드폰 번호는 10자리이상으로 입력하셔야합니다.");
        		return;
        	}
        	if (nexacro.toNumber(nexacro.toNumber(this.div_main.form.edt_scale_elem.text)+nexacro.toNumber(this.div_main.form.edt_scale_mid.text)+nexacro.toNumber(this.div_main.form.edt_scale_high.text)) < 100 ){
        		if (nexacro.toNumber(nexacro.toNumber(this.div_main.form.edt_scale_elem.text)+nexacro.toNumber(this.div_main.form.edt_scale_mid.text)+nexacro.toNumber(this.div_main.form.edt_scale_high.text)) > 0 )
        		{
        			var objApp = nexacro.getApplication();
        			if(!(msg_result = objApp.confirm( "원생 규모가 100% 미만입니다.\n정말 등록하시겠습니까? " , "원생규모 확인", "warning" )))
        				return;
        		}
        	}
        	var strUrl = "JSP/sd/sd6900_mst_tr.jsp";
        	var inDs = "ds_MRKT_RSRCH_MST=ds_MRKT_RSRCH_MST:u ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL:u dsSchoolYear=dsSchoolYear:u dsSubject=dsSubject:u";
        	var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("save", strUrl, inDs, "", strArg, "fnCallback", true, "P", false, this);
        };

        this.cbo_kind_onitemchanged = function(obj,e)
        {
        	var pCnt, pTemp0, pTemp1, pTemp2, pTemp3, pTemp4, pTemp5, pTemp6, pTemp7, pTemp8, pTemp9, pTemp10;

        	if (obj.name == "cbo_kind1")
        		this.div_main.form.edt_kind1_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind2")
        		this.div_main.form.edt_kind2_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind3")
        		this.div_main.form.edt_kind3_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind4")
        		this.div_main.form.edt_kind4_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind5")
        		this.div_main.form.edt_kind5_cd.set_value(obj.value);
        	else if (obj.name == "cbo_01")
        		this.div_main.form.div_career.form.edt_02.set_value(obj.value);

        	if  (obj.id == "cbo_kind1" || obj.id == "cbo_kind2")
        	{
        		pTemp1 = "";
        		//trace("CODE1 == '"+cb_kind1_cd.Text+"' && CODE3 == '"+cb_kind2_cd.Text+"' ");
        		this.dsEvltnPath.filter("");
        		if(this.div_main.form.edt_kind1_cd.text == "")
        			this.dsEvltnPath.filter("CODE1 == '"+this.div_main.form.edt_kind2_cd.text+"'");
        		else if(this.div_main.form.edt_kind2_cd.text == "")
        			this.dsEvltnPath.filter("CODE3 == '"+this.div_main.form.edt_kind1_cd.text+"' ");
        		else
        			this.dsEvltnPath.filter("CODE1 == '"+this.div_main.form.edt_kind2_cd.text+"' && CODE3 == '"+this.div_main.form.edt_kind1_cd.text+"' ");

        		for (var i=0; i<this.dsEvltnPath.rowcount; i++)
        		{
        			pTemp1 += " || CODE == '"+this.dsEvltnPath.getColumn(i,"CODE2")+"' ";
        		}

        		this.dsEvltnKind2.filter("");
        		//trace("CODE == '' "+pTemp1);
        		this.dsEvltnKind2.filter("CODE == '' "+pTemp1);
        	}
        };

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        	else if (trid != null)
        	{
        		trid = trid.split("|");
        		trid = trid[0]
        	}
        	if (trid == "save")
        	{
        			if (this.div_main.form.edt_RSRCH_id.value == null) this.div_main.form.edt_RSRCH_id.set_value(ErrorMsg);
        			if (this.cbo_mrd_seq.value == null) this.cbo_mrd_seq.set_value(ErrorCode);
        			this.ds_MRKT_RSRCH_DTL.setColumn(this.ds_MRKT_RSRCH_DTL.rowposition, "MRKT_RSRCH_ID", ErrorMsg);
        			for (var i = 0 ; i <= this.dsSchoolYear.rowposition; i++)
        			{
        				this.dsSchoolYear.setColumn(i, "MRKT_RSRCH_ID", ErrorMsg);
        			}
        			for (var i = 0 ; i <= this.dsSubject.rowposition; i++)
        			{
        				this.dsSubject.setColumn(i, "MRKT_RSRCH_ID", ErrorMsg);
        			}

        		alert("정상적으로 처리되었습니다!");
        	}
        	else if (trid == "mst_select")
        	{
        		this.div_main.form.cbo_job.set_value(this.div_main.form.edt_job.value);

        		this.div_main.form.cbo_kinds.set_value(this.div_main.form.edt_kinds.value);

        		this.div_main.form.cbo_kind1.set_value(this.div_main.form.edt_kind1_cd.value);
        		this.div_main.form.cbo_kind2.set_value(this.div_main.form.edt_kind2_cd.value);
        		this.div_main.form.cbo_kind3.set_value(this.div_main.form.edt_kind3_cd.value);
        		this.div_main.form.cbo_kind4.set_value(this.div_main.form.edt_kind4_cd.value);
        		this.div_main.form.cbo_kind5.set_value(this.div_main.form.edt_kind5_cd.value);

        		this.cbo_common_onitemchanged(this.div_main.form.cbo_job, nexacro.ItemChangeEventInfo);
        		this.cbo_common_onitemchanged(this.div_main.form.cbo_kinds, nexacro.ItemChangeEventInfo);
        		this.cbo_kind_onitemchanged(this.div_main.form.cbo_kind1, nexacro.ItemChangeEventInfo);
        		this.cbo_kind_onitemchanged(this.div_main.form.cbo_kind2, nexacro.ItemChangeEventInfo);
        		this.cbo_kind_onitemchanged(this.div_main.form.cbo_kind3, nexacro.ItemChangeEventInfo);
        		this.cbo_kind_onitemchanged(this.div_main.form.cbo_kind4, nexacro.ItemChangeEventInfo);
        		this.cbo_kind_onitemchanged(this.div_main.form.cbo_kind5, nexacro.ItemChangeEventInfo);

        		if (this.div_main.form.div_career.form.edt_03.value != null && (this.div_main.form.div_career.form.edt_03.value).length == 4)
        		{
        			var objDate = new nexacro.Date();
        			var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        			this.div_main.form.div_career.form.edt_04.set_value((nexacro.toNumber(f_date) - nexacro.toNumber(this.div_main.form.div_career.form.edt_03.value)).toString());
        		}
        	}
        }
        this.cbo_common_onitemchanged = function(obj,e)
        {
        	if (obj.name == "cbo_job") this.div_main.form.edt_job.set_value(obj.value);
        	else if (obj.name == "cbo_kinds")
        	{
        		this.div_main.form.edt_kinds.set_value(obj.value);
        		return;
        	}
        	this.div_main.form.edt_scale.set_enable(true);
        	this.div_main.form.edt_scale_elem.set_enable(true);
        	this.div_main.form.edt_scale_mid.set_enable(true);
        	this.div_main.form.edt_scale_high.set_enable(true);
        	this.div_main.form.div_career.set_visible(true);
        	this.div_main.form.div_schoolyear.set_visible(false);
        	this.div_main.form.div_grade.set_visible(false);
        	this.div_main.form.edt_kinds.set_value("");
        	this.div_main.form.cbo_kinds.set_index(-1);

        	//직업구분에서 교사 선택시 학교/학원형태 메뉴에서 학교와 기타만 뜨도록 부탁드립니다.
        	if (obj.value == "01"){
        	    //교사
        		this.dsEvltnKind5.filter("");
        		this.dsEvltnKind5.filter("CODE == '01' || CODE == '09'");

        		this.div_main.form.edt_scale.set_enable(false);
        		this.div_main.form.edt_scale_elem.set_enable(false);
        		this.div_main.form.edt_scale_mid.set_enable(false);
        		this.div_main.form.edt_scale_high.set_enable(false);
        		this.div_main.form.edt_schoolname.set_visible(true);
        		this.div_main.form.div_career.set_visible(true);
        		this.div_main.form.div_career.form.Static02_01.set_visible(true);
        		this.div_main.form.div_career.form.Static02_02.set_visible(false);
        		this.div_main.form.div_career.form.edt_02.set_visible(false);
        		this.div_main.form.div_career.form.cbo_01.set_visible(false);
        		this.div_main.form.div_career.form.edt_01.set_visible(true);
        		this.div_main.form.div_career.form.Static02_06.set_visible(true);

        	}else if (obj.value == "02"){
        	    //강사
        		this.dsEvltnKind5.filter();
        		this.dsEvltnKind5.filter("CODE != '01'");
        		this.div_main.form.div_career.set_visible(true);
        		this.div_main.form.edt_schoolname.set_visible(true);
        		this.div_main.form.div_career.form.Static02_01.set_visible(true);
        		this.div_main.form.div_career.form.Static02_02.set_visible(false);
        		this.div_main.form.div_career.form.edt_02.set_visible(false);
        		this.div_main.form.div_career.form.cbo_01.set_visible(false);
        		this.div_main.form.div_career.form.edt_01.set_visible(true);
        		this.div_main.form.div_career.form.Static02_06.set_visible(true);
        	}else if (obj.value == "03"){
        		//학부모
        		this.div_main.form.div_schoolyear.set_visible(true);
        		this.div_main.form.edt_schoolname.set_visible(false);
        		this.div_main.form.div_career.form.Static02_01.set_visible(false);
        		this.div_main.form.div_career.form.Static02_02.set_visible(true);
        		this.div_main.form.div_career.form.edt_02.set_visible(true);
        		this.div_main.form.div_career.form.cbo_01.set_visible(true);
        		this.div_main.form.div_career.form.edt_01.set_visible(false);
        		this.div_main.form.div_career.form.Static02_06.set_visible(false);
        	}
        	else
        	{
        		//학생
        		this.dsEvltnKind5.filter();
        		this.dsEvltnKind5.filter("CODE == '09'");
        		this.div_main.form.div_grade.set_visible(true);
        		this.div_main.form.edt_schoolname.set_visible(false);
        		this.div_main.form.div_career.form.Static02_01.set_visible(false);
        		this.div_main.form.div_career.form.Static02_02.set_visible(true);
        		this.div_main.form.div_career.form.edt_02.set_visible(true);
        		this.div_main.form.div_career.form.cbo_01.set_visible(true);
        		this.div_main.form.div_career.form.edt_01.set_visible(false);
        		this.div_main.form.div_career.form.Static02_06.set_visible(false);
        	}
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	if (this.div_main.form.edt_RSRCH_id.value == null)
        	{
        		alert("선택된 데이터가 없습니다.! \n 데이터 선택후 다시 삭제하세요! ");
        		return;
        	}
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
        	{
        		this.ds_MRKT_RSRCH_MST.deleteRow(this.ds_MRKT_RSRCH_MST.rowposition);
        		this.ds_MRKT_RSRCH_DTL.clearData();

        		var strUrl = "JSP/sd/sd6900_mst_tr.jsp";
        		var inDs 	= "ds_MRKT_RSRCH_MST=ds_MRKT_RSRCH_MST:u ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL:u dsSchoolYear=dsSchoolYear:u dsSubject=dsSubject:u";// ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL:u";
        		var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);

        		this.gfn_TransactionP("save", strUrl, inDs, "", strArg, "fnCallback", true, "P", false, this);
        	}
        };

        this.div_career_edt_03_onkillfocus = function(obj,e)
        {
        	if (this.div_main.form.div_career.form.edt_03.value != null && (this.div_main.form.div_career.form.edt_03.value).length == 4)
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        		this.div_main.form.div_career.form.edt_04.set_value((nexacro.toNumber(f_date) - nexacro.toNumber(this.div_main.form.div_career.form.edt_03.value)).toString());
        	}
        };
        /* //닫기버튼 클릭 시
        this.btn_close_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	if(this.parent.parent.name == "WorkDetail"){
        		var nRow = this.parent.parent.ds_selectMenu.findRow("selectMenu_Div_id",this.parent.name);
        		var bClose_id = this.parent.parent.ds_selectMenu.getColumn(nRow,"selectButton_Div_id");
        		this.parent.parent.div_selectMenu.form.all[bClose_id].form.CloseButton.click();
        	}
        	else
        		this.close();
        };
        */
        this.cbo_hold_onitemchanged = function(obj,e)
        {
        	if (this.div_main.form.cald_date.value == null)
        	{
        		alert( "시장조사 등록일을 먼저 넣어주세요 " ) ;
        		return;
        	}
        	if (obj.index == 0) this.div_main.form.cald_hold.set_value(Eco.date.addDate(this.div_main.form.cald_date.value, 365));
        	else if (obj.index == 1) this.div_main.form.cald_hold.set_value(Eco.date.addDate(this.div_main.form.cald_date.value, 1095));
        	else if (obj.index == 2) this.div_main.form.cald_hold.set_value(Eco.date.addDate(this.div_main.form.cald_date.value, 1825));
        };
        this.btn_in_new_onclick = function(obj,e)
        {
        	var msg_result, idsIdx;

        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "조사내용을 계속 추가 하시겠습니까? " , "조사내용", "warning" ))
        	{
        		this.fnDtlitemClear();
        		idsIdx = this.ds_MRKT_RSRCH_DTL.addRow();
        		if (this.div_main.form.edt_RSRCH_id.value != null)
        		{
        			this.ds_MRKT_RSRCH_DTL.setColumn(idsIdx, "MRKT_RSRCH_ID", this.div_main.form.edt_RSRCH_id.value);
        		}
        		trace(this.div_main.form.edt_RSRCH_id.value);
        	}
        };

        this.btn_in_del_onclick = function(obj,e)
        {
        	if (this.cbo_mrd_seq.value == null)
        	{
        		alert ( "선택된 데이터가 없습니다.! \n 데이터 선택후 다시 삭제하세요! " ) ;
        		return;
        	}

        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
        	{
        		var strUrl = "JSP/sd/sd6900_mst_tr";
        		var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        		    strArg += " delete_MRKT_RSRCH_ID="  + nexacro.wrapQuote(this.div_main.form.edt_RSRCH_id.value);
        		    strArg += " delete_MRD_SEQ="  + nexacro.wrapQuote(this.cbo_mrd_seq.value);

        		this.ds_MRKT_RSRCH_DTL.deleteRow(this.ds_MRKT_RSRCH_DTL.rowposition);
        		var inDs 	= "ds_MRKT_RSRCH_MST=ds_MRKT_RSRCH_MST:u ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL:u dsSchoolYear=dsSchoolYear:u dsSubject=dsSubject:u";

        		this.gfn_TransactionP("save", strUrl, inDs, "", strArg, "fnCallback", true, "P", false, this);
        	}
        };

        this.grd_dtl_oncellclick = function(obj,e)
        {
        	var strUrl, strDs, strArg;

        	strUrl   = "JSP/sd/sd6350_select_info_sub.jsp";
        	strDs =  "dsSchoolStudent=dsSchoolStudent dsSchoolTeacher=dsSchoolTeacher";
        	strArg   =  "education_id="+ nexacro.wrapQuote(this.div_main.form.edt_RSRCH_id.value);

        	this.gfn_TransactionP("mst_select", strUrl, strDs, strDs, strArg, "fnInorder_search_callback", true, "P", false, this);
        };

        this.fnInorder_search_callback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}

        }
        this.btn_searchpostnumber_onclick = function(obj,e)
        {
        	this.lfn_showModal("post_search", "", "mm::frmzipcodefive_daum.xfdl", "fnBtnSearchPostNumberCallback", this, 0, 0, 640, 750);
        };

        this.fnBtnSearchPostNumberCallback = function(strID, ret)
        {
        	var re_data = ret.split("^");
        	if(re_data.length != 0)
        	{
        		this.ds_MRKT_RSRCH_MST.setColumn(this.ds_MRKT_RSRCH_MST.rowposition, "MRKT_ADDR", re_data[1]);
        		this.div_main.form.edt_addr.setFocus();
        	}
        }
        this.SD6900F_onsize = function(obj,e)
        {
        	if(this.width < 1170 || this.width > 1650)
        		this.div_main.set_width(this.width - 20)
        	else
        		this.div_main.set_width(1170);

        	if(this.height < 740)
        		this.div_main.set_height(this.height - 20)
        	else
        		this.div_main.set_height(740);

        	if(this.height < 480 || this.width < 730)
        		this.div_main.form.Static00.set_font('bold 32px/normal "함초롬바탕 확장B"');
        	else
        		this.div_main.form.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6900F_onload,this);
            this.addEventHandler("onsize",this.SD6900F_onsize,this);
            this.div_main.form.cbo_kinds.addEventHandler("onitemchanged",this.cbo_common_onitemchanged,this);
            this.div_main.form.cbo_job.addEventHandler("onitemchanged",this.cbo_common_onitemchanged,this);
            this.div_main.form.cbo_hold.addEventHandler("onitemchanged",this.cbo_hold_onitemchanged,this);
            this.div_main.form.grd_mst.addEventHandler("oncellclick",this.grd_dtl_oncellclick,this);
            this.div_main.form.grd_dtl.addEventHandler("oncellclick",this.grd_dtl_oncellclick,this);
            this.div_main.form.btn_in_new.addEventHandler("onclick",this.btn_in_new_onclick,this);
            this.div_main.form.btn_in_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_main.form.btn_in_del.addEventHandler("onclick",this.btn_in_del_onclick,this);
            this.div_main.form.cbo_kind1.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.div_main.form.cbo_kind3.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.div_main.form.cbo_kind2.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.div_main.form.cbo_kind4.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.div_main.form.cbo_kind5.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.div_main.form.div_career.form.cbo_01.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.div_main.form.div_career.form.edt_03.addEventHandler("onkillfocus",this.div_career_edt_03_onkillfocus,this);
            this.div_main.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div_main.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_main.form.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.div_main.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_main.form.btn_xlsfind.addEventHandler("onclick",this.btn_xlsfind_onclick,this);
            this.div_main.form.btn_searchpostnumber.addEventHandler("onclick",this.btn_searchpostnumber_onclick,this);
            this.div_exceldata.form.btn_close.addEventHandler("onclick",this.div_exceldata_btn_close_onclick,this);
            this.div_exceldata.form.grd_excel_load.addEventHandler("onheadclick",this.div_exceldata_grd_excel_load_onheadclick,this);
            this.div_exceldata.form.btn_errchk.addEventHandler("onclick",this.div_exceldata_btn_errchk_onclick,this);
            this.div_exceldata.form.btn_apply.addEventHandler("onclick",this.div_exceldata_btn_apply_onclick,this);
            this.div_exceldata.form.btn_xlsfind.addEventHandler("onclick",this.div_exceldata_btn_xlsfind_onclick,this);
            this.dsEvltnKind1.addEventHandler("oncolumnchanged",this.dsEvltnKind6_oncolumnchanged,this);
            this.dsEvltnKind6.addEventHandler("oncolumnchanged",this.dsEvltnKind6_oncolumnchanged,this);
        };
        this.loadIncludeScript("SD6900F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
