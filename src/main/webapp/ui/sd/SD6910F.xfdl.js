(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6910F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
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
            obj._setContents("<ColumnInfo><Column id=\"IDX\" type=\"STRING\" size=\"2\"/><Column id=\"SHEETNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">국어</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">영어</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">수학</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">사회</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">과학</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">초등</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">중등</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">고등</Col></Row></Rows>");
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


            obj = new Dataset("dsMRKT_RSRCH_MST", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_OPEN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EXPRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PRSNL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ELMNT\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMRKT_RSRCH_DTL", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND1\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND2\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND3\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND4\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsSelectData", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_KIND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EXPRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_OPEN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PRSNL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ELMNT\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SBJCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND1\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND2\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND3\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND4\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND5\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND5_MEMO\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0.65%","9.61%",null,null,"1.23%","86.18%",null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_text("검색조건");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","0.65%","Static01:5%",null,"4.1%","46.63%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","0.65%","Static03_01:-5%",null,"4.1%","46.63%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","Static03_02:-100%","Static03_02:-100%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("학교/학원명");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static03_02:-56.05%","Static03_02:-100%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("모집채널");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_schoolyear","0.6%","Static03_02:-6%",null,"4.3%","46.5%",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","0.12%","2.86%","99.54%","98.00%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("13");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new Static("Static04_01","0.12%","2.86%","15.5%","98.00%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("12");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("자녀학년");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","17.36%","22.86%","5.70%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("0");
            obj.set_text("초1");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","23.15%","22.86%","5.70%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("1");
            obj.set_text("초2");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","28.94%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("2");
            obj.set_text("초3");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_04","34.72%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("3");
            obj.set_text("초4");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_05","40.51%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("4");
            obj.set_text("초5");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_06","46.3%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("5");
            obj.set_text("초6");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_07","55.56%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("6");
            obj.set_text("중1");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_08","61.34%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("7");
            obj.set_text("중2");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_09","67.13%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("8");
            obj.set_text("중3");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_10","76.39%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("9");
            obj.set_text("고1");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_11","82.18%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("10");
            obj.set_text("고2");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new CheckBox("chk_12","87.96%","22.86%","5.7%","60%",null,null,null,null,null,null,this.div_schoolyear.form);
            obj.set_taborder("11");
            obj.set_text("고3");
            this.div_schoolyear.addChild(obj.name, obj);

            obj = new Div("div_career","0.60%","div_schoolyear:-8.57%","52.94%","4.30%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","0.12%","2.86%","99.77%","98%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("5");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            this.div_career.addChild(obj.name, obj);

            obj = new Static("Static06_02","27.38%","2.86%","9.98%","98%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("6");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("성별");
            obj.set_font("13px/normal \"Gulim\"");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.div_career.addChild(obj.name, obj);

            obj = new Static("Static06_01","0.12%","2.86%","15.43%","98%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("7");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("경력");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_career.addChild(obj.name, obj);

            obj = new Static("Static06_03","47.8%","2.86%","9.98%","98%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("8");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("생년");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_career.addChild(obj.name, obj);

            obj = new Combo("cbo_01","37.94%","14.29%","9.4%","71.43%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsSex");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_career.addChild(obj.name, obj);

            obj = new Combo("cbo_02","85.03%","14.29%","9.05%","71.43%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsUpdown");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_career.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static06_01:5%","14.29%","8.12%","71.43%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("0");
            this.div_career.addChild(obj.name, obj);

            obj = new Static("Static06_05","edt_01:1%","20%","3.2%","60%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("9");
            obj.set_text("년");
            obj.set_textAlign("center");
            this.div_career.addChild(obj.name, obj);

            obj = new MaskEdit("edt_02","58.47%","14.29%","7.77%","71.43%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("2");
            obj.set_format("@@@@");
            this.div_career.addChild(obj.name, obj);

            obj = new Edit("edt_03","77.49%","14.29%","6.73%","71.43%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("3");
            this.div_career.addChild(obj.name, obj);

            obj = new Static("Static06_04","66.82%","2.86%","9.98%","98%",null,null,null,null,null,null,this.div_career.form);
            obj.set_taborder("10");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("나이");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_career.addChild(obj.name, obj);

            obj = new Static("Static03_03","0.65%","div_career:-7%","27.38%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_04","0.65%","Static03_03:-5%","27.38%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_05","0.65%","Static03_04:-5%","27.38%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","Static03_01:-100%","Static03_01:-100%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_text("직업구분");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_job","Static01_01:5%","Static03_01:-86.5%","1.9%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_job","edt_job:-3%","Static03_01:-86.50%","8.59%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsEvltnKind4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_displaynulltext("선택해주세요");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind6_cd","Static01_04:5%","Static03_02:-86.50%","1.9%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_padding("0px");
            obj.set_rtl("false");
            obj.set_maskchar("_");
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_kind6","edt_kind6_cd:-3%","Static03_02:-86.50%","8.59%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsEvltnKind7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_displaynulltext("선택해주세요");
            obj.set_text("선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_schoolname","Static01_03:5%","Static03_02:-86.50%","14.36%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static03_01:-0.15%","Static01:5%",null,"31.8%","43.50%",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("참여\r\n교재");
            obj.set_wordWrap("char");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_kind6","Static02_04:-2%","Static01:5%",null,"31.8%","38.04%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("dsEvltnKind6");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("summary");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"38\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" padding=\"0px\"/><Cell col=\"1\" text=\"코드\" padding=\"0px\"/><Cell col=\"2\" text=\"구분\" padding=\"0px\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\" padding=\"0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_kind2","grd_kind6:-2%","Static01:5%",null,"31.8%","31.47%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsEvltnKind1");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("summary");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"54\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" padding=\"0px\"/><Cell col=\"1\" text=\"코드\" padding=\"0px\"/><Cell col=\"2\" text=\"구분\" padding=\"0px\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\" padding=\"0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_kind3","grd_kind2:-2%","Static01:5%",null,"31.8%","17.12%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("dsEvltnKind2");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("summary");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" padding=\"0px\"/><Cell col=\"1\" text=\"코드\" padding=\"0px\"/><Cell col=\"2\" text=\"구분\" padding=\"0px\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"left\" padding=\"0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_kind4","grd_kind3:-2%","Static01:5%",null,"31.8%","8.16%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsEvltnKind3");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("summary");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"34\"/><Column size=\"87\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" textAlign=\"center\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_test_level","grd_kind4:-2%","Static01:5%",null,"31.8%","1.23%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsTestLevel");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("summary");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_06","0.65%","Static03_05:-5%","27.38%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.25%","1.06%",null,null,"70.19%","89.76%",null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("시장조사 DB조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static03_01:-56.05%","Static03_01:-100%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("학교/학원형태");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kinds","Static01_02:5%","Static03_01:-86.50%","1.9%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_kinds","edt_kinds:-3%","Static03_01:-86.50%","8.59%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind5");
            obj.set_text("선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","Static03_03:-0.3%","div_career:-7%","3.19%","16%",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("강의\r\n구분");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_year","Static02_01:-1%","div_career:-7%","9.63%","16%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsSchoolYear");
            obj.set_autosizingtype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"0\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","grd_year:-1%","div_career:-7%","3.19%","16%",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("강의\r\n과목");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_subject","Static02_02:-1%","div_career:-7%","9.69%","16%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsSubject");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"과목\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\" padding=\"0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_09","Static03_06:-100.00%","Static03_06:-100.00%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("비고항목");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bigo","Static01_09:5%","Static03_06:-88%","18.53%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","Static03_03:-100%","Static03_03:-100%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("시장조사 참여기간");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_start1","Static01_05:5%","Static03_03:-84.85%","6.75%","2.90%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_10","cald_start1:5%","Static03_03:-80%","1.84%","2.5%",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("부터");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_end1","Static01_05:117.3%","Static03_03:-84.85%","6.75%","2.90%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_11","cald_end1:5%","Static03_03:-80%","1.84%","2.5%",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("까지");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","Static03_04:-100%","Static03_04:-103.03%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("제3자 정보동의");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_start2","Static01_06:5%","Static03_04:-87.88%","6.75%","2.9%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_12","cald_start2:5.00%","Static03_04:-80%","1.84%","2.5%",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("부터");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_end2","Static01_06:117.30%","Static03_04:-87.88%","6.75%","2.90%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_13","cald_end2:5%","Static03_04:-80%","1.84%","2.5%",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("까지");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","Static03_05:-100%","Static03_05:-100%","8.16%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("성명");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","Static01_07:5%","Static03_05:-85.71%","5.64%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","edt_name:6.6%","Static03_05:-100%","5.28%","4.1%",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8ca5d0");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("핸드폰");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","Static01_08:6%","Static03_05:-85.71%","6.81%","3.01%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_kind3","26","905","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind3_cd","4","905","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_kind5","26","932","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_visible("false");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind5_cd","4","932","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_kind2","191","878","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_visible("false");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind2_cd","169","878","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_kind4","191","905","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_visible("false");
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsEvltnKind4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind4_cd","169","905","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_kind1","26","878","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_visible("false");
            obj.set_innerdataset("dsEvltnKind1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_displaynulltext("선택해주세요");
            obj.set_text("선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_kind1_cd","4","878","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_scale","0.6%","Static03_02:-6%",null,"4.3%","46.5%",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0.12%","2.86%","99.54%","98.00%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("7");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_01","0.12%","2.86%","15.5%","98.00%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("6");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("학원 원생 규모");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_scale.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static03_01:5%","18%","4.98%","66%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("0");
            obj.set_padding("2px");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_05","21.3%","20%","2%","60%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("8");
            obj.set_text("명");
            obj.set_textAlign("center");
            obj.set_tooltiptype("hover");
            this.div_scale.addChild(obj.name, obj);

            obj = new Combo("cbo_01","23.61%","18.00%","9.03%","66%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("1");
            obj.set_font("10px/normal \"Gulim\"");
            obj.set_innerdataset("dsUpdown");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_02","33.22%","2.86%","9.95%","98.00%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("9");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("초등");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_scale.addChild(obj.name, obj);

            obj = new Edit("edt_02","Static03_02:5%","18.00%","4.98%","66%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("2");
            obj.set_padding("2px");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_06","edt_02:13%","31.43%","1.74%","40%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("10");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_03","51.74%","2.86%","9.95%","98.00%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("11");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("중등");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_scale.addChild(obj.name, obj);

            obj = new Edit("edt_03","Static03_03:5%","18.00%","4.98%","66%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("3");
            obj.set_padding("2px");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_07","edt_03:13%","31.43%","1.74%","40%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("12");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_04","70.14%","2.86%","9.95%","98.00%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("13");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("고등");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_scale.addChild(obj.name, obj);

            obj = new Edit("edt_04","Static03_04:5%","18.00%","4.98%","66%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("4");
            obj.set_padding("2px");
            this.div_scale.addChild(obj.name, obj);

            obj = new Static("Static03_08","edt_04:13%","31.43%","1.74%","40%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("14");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.div_scale.addChild(obj.name, obj);

            obj = new Combo("cbo_02","88.19%","18.00%","9.03%","66%",null,null,null,null,null,null,this.div_scale.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsUpdown");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_scale.addChild(obj.name, obj);

            obj = new Div("div_grade","0.61%","Static03_02:-6%","53.06%","4.3%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0.12%","2.86%","99.54%","98%",null,null,null,null,null,null,this.div_grade.form);
            obj.set_taborder("2");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.div_grade.addChild(obj.name, obj);

            obj = new Static("Static05_01","0.12%","2.86%","15.5%","98%",null,null,null,null,null,null,this.div_grade.form);
            obj.set_taborder("1");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("학년");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_border("1px solid #10aea9");
            this.div_grade.addChild(obj.name, obj);

            obj = new Combo("cbo_01","Static05_01:5%","14.29%","19.44%","71.43%",null,null,null,null,null,null,this.div_grade.form);
            obj.set_displaynulltext("선택해주세요");
            obj.set_innerdataset("dsGrade");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_index("-1");
            this.div_grade.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5%","4.7%","4.3%","1.34%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"5%","4.7%","4.3%","btn_search:10%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_select_data","0.61%","Static02_04:0.83%",null,"52.63%","1.23%",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_binddataset("dsSelectData");
            obj.set_cellsizingtype("col");
            obj.set_autosizebandtype("summary");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"115\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"직업구분\"/><Cell col=\"1\" text=\"학교/학원명\"/><Cell col=\"2\" text=\"형태\"/><Cell col=\"3\" text=\"규모\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"핸드폰\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"학년구분\"/><Cell col=\"8\" text=\"과목\"/><Cell col=\"9\" text=\"모집채널\"/><Cell col=\"10\" text=\"참여일\"/><Cell col=\"11\" text=\"참여교재&#13;&#10;학제\"/><Cell col=\"12\" text=\"참여교제&#13;&#10;과목\"/><Cell col=\"13\" text=\"참여교재\"/><Cell col=\"14\" text=\"시장조사&#13;&#10;형태\"/><Cell col=\"15\" text=\"등급\"/><Cell col=\"16\" text=\"등록자\"/><Cell col=\"17\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:MRKT_JOB_NM\"/><Cell col=\"1\" text=\"bind:MRKT_JOB_NAME\"/><Cell col=\"2\" text=\"bind:MRKT_KIND_NM\"/><Cell col=\"3\" text=\"bind:MRKT_PRSNL\"/><Cell col=\"4\" text=\"bind:MRKT_NAME\"/><Cell col=\"5\" text=\"bind:MRKT_PHONE\"/><Cell col=\"6\" text=\"bind:MRKT_ADDR\"/><Cell col=\"7\" text=\"bind:SCH_NM\"/><Cell col=\"8\" text=\"bind:SBJCT_NM\"/><Cell col=\"9\" text=\"bind:EVLTN_KIND7\"/><Cell col=\"10\" text=\"bind:MRKT_OPEN_DATE\"/><Cell col=\"11\" text=\"bind:EVLTN_KIND1\"/><Cell col=\"12\" text=\"bind:EVLTN_KIND2\"/><Cell col=\"13\" text=\"bind:EVLTN_KIND3\"/><Cell col=\"14\" text=\"bind:EVLTN_KIND4\"/><Cell col=\"15\" text=\"bind:EVLTN_KIND5\"/><Cell col=\"16\" text=\"bind:NAME_ID\"/><Cell col=\"17\" text=\"bind:EVLTN_KIND_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6910F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6910F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6910F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");

        // DataSet 불러오기
        this.SD6910F_onload = function(obj,e)
        {
        	this.div_schoolyear.set_visible(false);
        	this.div_grade.set_visible(false);
        	//MRD로 조회할 시 사용
        	//this.WebBrowser00.set_url(urlMrd+"/html/html/ie8/sample.html");
        	this.fnMstitemClear();

        	var strUrl, strDs, strArg;
        	strArg = "";

        	strUrl   = "JSP/sd/sd6920_select_info.jsp";
        	strDs =  "dsEvltnKind1=dsEvltnKind1 dsEvltnKind2=dsEvltnKind2 dsEvltnKind3=dsEvltnKind3  dsEvltnKind4=dsEvltnKind4 dsEvltnKind5=dsEvltnKind5 dsEvltnKind6=dsEvltnKind6 dsEvltnKind7=dsEvltnKind7 dsEvltnPath=dsEvltnPath";

        	this.gfn_TransactionP("mst_select", strUrl, strDs, strDs, strArg, "fnSearchCallback", true, "P", false, this);
        };
        this.fnSearchCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        }
        this.fnMstitemClear = function()
        {
        	this.edt_job.set_value("");
        	this.edt_kinds.set_value("");
        	this.edt_schoolname.set_value("");
        	this.edt_kind1_cd.set_value("");
        	this.edt_kind2_cd.set_value("");
        	this.edt_kind3_cd.set_value("");
        	this.edt_kind4_cd.set_value("");
        	this.edt_kind5_cd.set_value("");
        	this.edt_kind6_cd.set_value("");
        	this.cald_start1.set_value("");
        	this.cald_end1.set_value("");
        	this.cald_start2.set_value("");
        	this.cald_end2.set_value("");
        	this.edt_name.set_value("");
        	this.edt_phone.set_value("");
        	this.edt_bigo.set_value("");

        	this.cbo_job.set_index(-1);
        	this.cbo_kinds.set_index(-1);
        	this.cbo_kind1.set_index(-1);
        	this.cbo_kind2.set_index(-1);
        	this.cbo_kind3.set_index(-1);
        	this.cbo_kind4.set_index(-1);
        	this.cbo_kind5.set_index(-1);
        	this.cbo_kind6.set_index(-1);

        	this.div_scale.form.edt_01.set_value("");
        	this.div_scale.form.edt_02.set_value("");
        	this.div_scale.form.edt_03.set_value("");
        	this.div_scale.form.edt_04.set_value("");
        	this.div_scale.form.cbo_01.set_index(-1);
        	this.div_scale.form.cbo_02.set_index(-1);

        	this.div_schoolyear.form.chk_01.set_value(false);
        	this.div_schoolyear.form.chk_02.set_value(false);
        	this.div_schoolyear.form.chk_03.set_value(false);
        	this.div_schoolyear.form.chk_04.set_value(false);
        	this.div_schoolyear.form.chk_05.set_value(false);
        	this.div_schoolyear.form.chk_06.set_value(false);
        	this.div_schoolyear.form.chk_07.set_value(false);
        	this.div_schoolyear.form.chk_08.set_value(false);
        	this.div_schoolyear.form.chk_09.set_value(false);
        	this.div_schoolyear.form.chk_10.set_value(false);
        	this.div_schoolyear.form.chk_11.set_value(false);
        	this.div_schoolyear.form.chk_12.set_value(false);

        	this.div_grade.form.cbo_01.set_index(-1);

        	this.div_career.form.edt_01.set_value("");
        	this.div_career.form.edt_02.set_value("");
        	this.div_career.form.cbo_01.set_index(-1);
        	this.div_career.form.cbo_02.set_index(-1);

        	for (var i=0; i<this.dsSchoolYear.rowcount; i++)
        			if (this.dsSchoolYear.getColumn(i,"CHK")==1)
        				this.dsSchoolYear.setColumn(i,'CHK',0);
        	for (var i=0; i<this.dsSubject.rowcount; i++)
        			if (this.dsSubject.getColumn(i,"CHK")==1)
        				this.dsSubject.setColumn(i,'CHK',0);
        	for (var i=0; i<this.dsEvltnKind6.rowcount; i++)
        			if (this.dsEvltnKind6.getColumn(i,"CHK")==1)
        				this.dsEvltnKind6.setColumn(i,'CHK',0);
        	for (var i=0; i<this.dsEvltnKind1.rowcount; i++)
        			if (this.dsEvltnKind1.getColumn(i,"CHK")==1)
        				this.dsEvltnKind1.setColumn(i,'CHK',0);
        	for (var i=0; i<this.dsEvltnKind2.rowcount; i++)
        			if (this.dsEvltnKind2.getColumn(i,"CHK")==1)
        				this.dsEvltnKind2.setColumn(i,'CHK',0);
        	for (var i=0; i<this.dsEvltnKind3.rowcount; i++)
        			if (this.dsEvltnKind3.getColumn(i,"CHK")==1)
        				this.dsEvltnKind3.setColumn(i,'CHK',0);
        	for (var i=0; i<this.dsTestLevel.rowcount; i++)
        			if (this.dsTestLevel.getColumn(i,"CHK")==1)
        				this.dsTestLevel.setColumn(i,'CHK',0);
        }
        // 조회버튼 클릭 시
        this.btn_search_onclick = function(obj,e)
        {
        	var pChk1,pChk2,pChk3,pChk4,pChk5,pChk6,pChk7,pChk8,pChk9,pChk10,pChk11,pChk12;
        	var pgrade, pCareer, psex, page;
        	var pCareersql, psexsql, pagesql;

        	//강의구분 체크확인
        	var pSchool_year = "";
        	for (var i=0; i < this.dsSchoolYear.rowcount; i++)
        		if(this.dsSchoolYear.getColumn(i,"CHK")==1)
        			pSchool_year = pSchool_year + " " + this.dsSchoolYear.getColumn(i,"CODE") + ",";
        	pSchool_year = pSchool_year.substr(0, pSchool_year.length -1);

        	//강의과목 체크확인
        	var pSubject = "";
        	for (var i=0; i<this.dsSubject.rowcount; i++)
        			if (this.dsSubject.getColumn(i,"CHK")==1)
        				pSubject = pSubject +" "+this.dsSubject.getColumn(i,"CODE")+",";
        	pSubject = pSubject.substr(0,pSubject.length -1);

        	trace(this.dsSubject.saveXML());

        	//참여교재_학년체크확인
        	var pEvltn_kind1 = "";
        	for (var i=0; i<this.dsEvltnKind6.rowcount; i++)
        			if (this.dsEvltnKind6.getColumn(i,"CHK")==1)
        				pEvltn_kind1 = pEvltn_kind1 +" "+this.dsEvltnKind6.getColumn(i,"CODE")+",";
        	pEvltn_kind1 = pEvltn_kind1.substr(0, pEvltn_kind1.length -1);

        	//참여교재_과목체크확인
        	var pEvltn_kind2 = "";
        	for (var i=0; i<this.dsEvltnKind1.rowcount; i++)
        			if (this.dsEvltnKind1.getColumn(i,"CHK")==1)
        				pEvltn_kind2 = pEvltn_kind2 +" "+ this.dsEvltnKind1.getColumn(i,"CODE")+",";
        	pEvltn_kind2 = pEvltn_kind2.substr(0,pEvltn_kind2.length -1);

        	//참여교재_브랜드체크확인
        	var pEvltn_kind3 = "";
        	for (var i=0; i<this.dsEvltnKind2.rowcount; i++)
        			if (this.dsEvltnKind2.getColumn(i,"CHK")==1)
        				pEvltn_kind3 = pEvltn_kind3 +" "+this.dsEvltnKind2.getColumn(i,"CODE")+",";
        	pEvltn_kind3 = pEvltn_kind3.substr(0,pEvltn_kind3.length -1);

        	//참여교재_조사형태체크확인
        	var pEvltn_kind4 = "";
        	for (var i=0; i<this.dsEvltnKind3.rowcount; i++)
        			if (this.dsEvltnKind3.getColumn(i,"CHK")==1)
        				pEvltn_kind4 = pEvltn_kind4 +" "+this.dsEvltnKind3.getColumn(i,"CODE")+",";
        	pEvltn_kind4 = pEvltn_kind4.substr(0,pEvltn_kind4.length -1);

        	//역량평가체크확인
        	var pEvltn_kind5 = "";
        	for (var i=0; i<this.dsTestLevel.rowcount; i++)
        			if (this.dsTestLevel.getColumn(i,"CHK")==1)
        				pEvltn_kind5 = pEvltn_kind5 +" "+this.dsTestLevel.getColumn(i,"CODE")+",";
        	pEvltn_kind5 = pEvltn_kind5.substr(0,pEvltn_kind5.length -1);

        	//원생
        	var pMRKT_PRSNL;
        	if(this.div_scale.form.edt_01.value != null && this.div_scale.form.edt_01.value != "")
        	{
        		if (this.div_scale.form.cbo_01.value == "01") pMRKT_PRSNL = " > "+this.div_scale.form.edt_01.value;
        		else if (this.div_scale.form.cbo_01.value == "02") pMRKT_PRSNL = " < "+this.div_scale.form.edt_01.value;
        		else pMRKT_PRSNL = "";
        	}
        	//비고
        	var pBigo;
        	pBigo = "";
        	if (this.edt_bigo.value != null && nexacro.trimRight(this.edt_bigo.value) != "") pBigo = " AND D.EVLTN_KIND5_MEMO LIKE '%"+nexacro.trimRight(this.edt_bigo.value)+"%' ";

        	//초등중등고등 원생 율
        	//(A.MRKT_ELMNT $5 OR A.MRKT_MIDDLE $5 OR A.MRKT_HIGH $5)
        	var MRKT_ELMNT;
        	if (this.div_scale.form.cbo_02.value == "01")
        	{
        		if (this.div_scale.form.edt_02.text != "") MRKT_ELMNT = "A.MRKT_ELMNT > " +this.div_scale.form.edt_02.text;
        		else if (this.div_scale.form.edt_03.text != "") MRKT_ELMNT = "A.MRKT_MIDDLE > "+this.div_scale.form.edt_03.text;
        		else if (this.div_scale.form.edt_04.text != "") MRKT_ELMNT = "A.MRKT_HIGH > "+this.div_scale.form.edt_04.text;
        	}
        	else if (this.div_scale.form.cbo_02.value == "02")
        	{
        		if (this.div_scale.form.edt_02.text != "") MRKT_ELMNT = "A.MRKT_ELMNT < "+this.div_scale.form.edt_02.text;
        		else if (this.div_scale.form.edt_03.text != "") MRKT_ELMNT = "A.MRKT_MIDDLE < "+this.div_scale.form.edt_03.text;
        		else if (this.div_scale.form.edt_04.text != "") MRKT_ELMNT = "A.MRKT_HIGH < "+this.div_scale.form.edt_04.text;
        	}
        	else MRKT_ELMNT = "";

        	var pTemp1, pTemp2, pTemp3;
        	//학교명
        	if (this.edt_schoolname.text == "") pTemp1 = "";
        	else pTemp1 = "'%"+this.edt_schoolname.text+"%'";
            //이름8
        	if (this.edt_name.text == "") pTemp2 = "";
        	else pTemp2 = "'%"+this.edt_name.text+"%'";
        	//핸드폰9
        	if (this.edt_phone.text == "") pTemp3 = "";
        	else pTemp3 = "'%"+this.edt_phone.text+"%'";

        	if (this.div_schoolyear.form.chk_01.value == true) pChk1 = "1"; else pChk1 = "";
        	if (this.div_schoolyear.form.chk_02.value == true) pChk2 = "1"; else pChk2 = "";
        	if (this.div_schoolyear.form.chk_03.value == true) pChk3 = "1"; else pChk3 = "";
        	if (this.div_schoolyear.form.chk_04.value == true) pChk4 = "1"; else pChk4 = "";
        	if (this.div_schoolyear.form.chk_05.value == true) pChk5 = "1"; else pChk5 = "";
        	if (this.div_schoolyear.form.chk_06.value == true) pChk6 = "1"; else pChk6 = "";
        	if (this.div_schoolyear.form.chk_07.value == true) pChk7 = "1"; else pChk7 = "";
        	if (this.div_schoolyear.form.chk_08.value == true) pChk8 = "1"; else pChk8 = "";
        	if (this.div_schoolyear.form.chk_09.value == true) pChk9 = "1"; else pChk9 = "";
        	if (this.div_schoolyear.form.chk_10.value == true) pChk10 = "1"; else pChk10 = "";
        	if (this.div_schoolyear.form.chk_11.value == true) pChk11 = "1"; else pChk11 = "";
        	if (this.div_schoolyear.form.chk_12.value == true) pChk12 = "1"; else pChk12 = "";

        	if (this.div_grade.form.cbo_01.index < 0) pgrade = "";
        	else pgrade = this.div_grade.form.cbo_01.value;

        	pCareer = this.div_career.form.edt_01.text;

        	if (this.div_career.form.cbo_01.index < 0) psex = "";
        	else psex = this.div_career.form.cbo_01.value;

        	page = this.div_career.form.edt_02.text;

        	if (this.div_career.form.cbo_02.value == "01")
        	{
        		if (pCareer != null && pCareer != "") pCareersql = "AND A.MRKT_CAREER > "+pCareer; else pCareersql = "";
        		if (page != null && page != "") pagesql = "AND A.MRKT_AGE > "+page; else pagesql = "";
        	}else
        	{
        		if (pCareer != "") pCareersql = "AND A.MRKT_CAREER < "+pCareer; else pCareersql = "";
        		if (page != "") pagesql = "AND A.MRKT_AGE < "+page; else pagesql = "";
        	}

        	var strArg = " MRKT_JOB="       + nexacro.wrapQuote(this.edt_job.value);  //직업구분1
        	strArg += " MRKT_KIND="      	+ nexacro.wrapQuote(this.edt_kinds.value); //학교형태2
        	strArg += " MRKT_JOB_NAME="		+ nexacro.wrapQuote(pTemp1); //학교명3, '%변수%' 형태로 되어있음(LIKE처리)
        	strArg += " MRKT_PRSNL="       	+ nexacro.wrapQuote(pMRKT_PRSNL); //원생4, '> 변수' 형태로 되어있음
        	strArg += " MRKT_ELMNT="       	+ nexacro.wrapQuote(MRKT_ELMNT); //초등중등고등 원생 율5, 'A.MRKT_ELMNT > 변수' 형태로 되어있음
        	strArg += " MRKT_OPEN_DATE="    + nexacro.wrapQuote(this.cald_start1.value); // 기간시작6
        	strArg += " MRKT_CLOSE_DATE="    + nexacro.wrapQuote(this.cald_end1.value); // 기간종료7
        	strArg += " MRKT_NAME="       	+ nexacro.wrapQuote(pTemp2); // 이름8, '%변수%' 형태로 되어있음(LIKE처리)
        	strArg += " MRKT_PHONE="       	+ nexacro.wrapQuote(pTemp3); // 핸드폰9, '%변수%' 형태로 되어있음(LIKE처리)
        	strArg += " EVLTN_KIND1="       + nexacro.wrapQuote(this.edt_kind1_cd.value); // 참여교재1 10
        	strArg += " EVLTN_KIND2="       + nexacro.wrapQuote(this.edt_kind2_cd.value); // 참여교재2 11
        	strArg += " EVLTN_KIND3="       + nexacro.wrapQuote(this.edt_kind3_cd.value); // 참여교재3 12
        	strArg += " EVLTN_KIND4="       + nexacro.wrapQuote(this.edt_kind4_cd.value); // 참여교재4 13
        	strArg += " P_EVLTN_KIND5="     + nexacro.wrapQuote(pEvltn_kind5); // 역량 14, '변수, 변수...' 형태로 되어있음 (기존 역량16, 이후 모두 -2(14, 15가 제일 밑으로 빠짐))
        	strArg += " P_EVLTN_KIND1="     + nexacro.wrapQuote(pEvltn_kind1); // 역량 15, '변수, 변수...' 형태로 되어있음
        	strArg += " P_EVLTN_KIND2="     + nexacro.wrapQuote(pEvltn_kind2); // 역량 16, '변수, 변수...' 형태로 되어있음
        	strArg += " P_EVLTN_KIND3="     + nexacro.wrapQuote(pEvltn_kind3); // 역량 17, '변수, 변수...' 형태로 되어있음
        	strArg += " P_EVLTN_KIND4="     + nexacro.wrapQuote(pEvltn_kind4); // 역량 18, '변수, 변수...' 형태로 되어있음
        	strArg += " MRKT_CHANNEL="      + nexacro.wrapQuote(this.edt_kind6_cd.value); // 모집채널 19
        	strArg += " MRKT_LV1="       	+ nexacro.wrapQuote(pChk1); // 초등1 20
        	strArg += " MRKT_LV2="       	+ nexacro.wrapQuote(pChk2); // 초등2 21
        	strArg += " MRKT_LV3="       	+ nexacro.wrapQuote(pChk3); // 초등3 22
        	strArg += " MRKT_LV4="       	+ nexacro.wrapQuote(pChk4); // 초등4 23
        	strArg += " MRKT_LV5="       	+ nexacro.wrapQuote(pChk5); // 초등5 24
        	strArg += " MRKT_LV6="       	+ nexacro.wrapQuote(pChk6); // 초등6 25
        	strArg += " MRKT_LV7="       	+ nexacro.wrapQuote(pChk7); // 중등1 26
        	strArg += " MRKT_LV8="       	+ nexacro.wrapQuote(pChk8); // 중등2 27
        	strArg += " MRKT_LV9="       	+ nexacro.wrapQuote(pChk9); // 중등3 28
        	strArg += " MRKT_LV10="       	+ nexacro.wrapQuote(pChk10); // 고등1 29
        	strArg += " MRKT_LV11="       	+ nexacro.wrapQuote(pChk11); // 고등2 30
        	strArg += " MRKT_LV12="       	+ nexacro.wrapQuote(pChk12); // 고등3 31
        	strArg += " MRKT_SCHOOL="       + nexacro.wrapQuote(pgrade); // 학년 32
        	strArg += " CAREER_SQL="   		+ nexacro.wrapQuote(pCareersql); // 경력 SQL문 33
        	strArg += " MRKT_SEX="       	+ nexacro.wrapQuote(psex); // 경력 성별 34
        	strArg += " AGE_SQL="       	+ nexacro.wrapQuote(pagesql); // 경력 나이 SQL문35
        	strArg += " BIGO_SQL="       	+ nexacro.wrapQuote(pBigo); // 비고 SQL문 36
        	strArg += " MRKT_THIRD_DATE="   + nexacro.wrapQuote(this.cald_start2.value); // 제3자 정보동의 시작일 37
        	strArg += " P_MRKT_OPEN_DATE="  + nexacro.wrapQuote(this.cald_end2.value); // 제3자 정보동의 종료일 38
        	strArg += " SCH_MRKT_RSRCH_ID=" + nexacro.wrapQuote(pSchool_year); // 강의구분 39
        	strArg += " SBJ_MRKT_RSRCH_ID=" + nexacro.wrapQuote(pSubject); // 과목40

        	var strUrl, strDs;

        	strUrl   = "JSP/sd/SQL_SD6910_SELECT.jsp";
        	strDs =  "dsSelectData=dsSelectData";

        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnSelectCallback", true, "P", false, this);

        	/*	MRD로 가져 올 경우 사용
        	var rdfile = gv_svraddr + "sd/rpt/SD6910.mrd";
        	var rdopt  = "/rp ["+this.edt_job.value+"]"+ //직업구분1
        	                 "["+this.edt_kinds.value+"]"+ //학교형태2
        	                 "["+pTemp1+"]"+ //학교명 3
        	                 "["+pMRKT_PRSNL+"]"+ //원생4
        	                 "["+MRKT_ELMNT+"]"+ //초등중등고등 원생 율5
        	                 "["+this.cald_start1.value+"]"+ //기간시작6
        	                 "["+this.cald_end1.value+"]"+ //기간종료7

        	                 "["+pTemp2+"]"+ //이름8
        	                 "["+pTemp3+"]"+ //핸드폰9
        	                 "["+this.edt_kind1_cd.value+"]"+ //참여교재1 10
        	                 "["+this.edt_kind2_cd.value+"]"+ //참여교재2 11
        	                 "["+this.edt_kind3_cd.value+"]"+ //참여교재3 12
        	                 "["+this.edt_kind4_cd.value+"]"+ //참여교재4 13

        	                 "["+pSchool_year+"]"+ //강의구분 14 	// sql 순서 제일 끝
        	                 "["+pSubject+"]"+ //과목 15    		// sql 순서 제일 끝
        	                 "["+pEvltn_kind5+"]"+ //역량 16
        	                 "["+pEvltn_kind1+"]"+ //역량 17
        	                 "["+pEvltn_kind2+"]"+ //역량 18
        	                 "["+pEvltn_kind3+"]"+ //역량 19
        	                 "["+pEvltn_kind4+"]"+ //역량 20
        	                 "["+this.edt_kind6_cd.value+"]"+ //모집채널 21
        	                 "["+pChk1+"]"+ //초등1 22
        	                 "["+pChk2+"]"+ //초등1 23
        	                 "["+pChk3+"]"+ //초등1 24
        	                 "["+pChk4+"]"+ //초등1 25
        	                 "["+pChk5+"]"+ //초등1 26
        	                 "["+pChk6+"]"+ //초등1 27
        	                 "["+pChk7+"]"+ //초등1 28
        	                 "["+pChk8+"]"+ //초등1 29
        	                 "["+pChk9+"]"+ //초등1 30
        	                 "["+pChk10+"]"+ //초등1 31
        	                 "["+pChk11+"]"+ //초등1 32
        	                 "["+pChk12+"]"+ //초등1 33
        	                 "["+pgrade+"]"+ //초등1 34
        	                 "["+pCareersql+"]"+ //초등1 35
        	                 "["+psex+"]"+ //초등1 36
        	                 "["+pagesql+"]"+ //초등1 37
        	                 "["+pBigo+"]"+ //비고항목 38
        	                 "["+this.cald_start2.value+"]"+ //제3자 정보동의 39
        	                 "["+this.cald_end2.value+"]"; //제3자 정보동의 40
        	var sUrl = "https://cj-erp.chunjae.co.kr:9294/service";
        	var sId = "crownix-viewer";
        	this.WebBrowser00.callMethod("_crownix_createViewer",sUrl,sId,rdfile,rdopt+" /rdebugmode [1]");
        	*/
        };

        this.fnSelectCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        }

        this.cbo_kind_onitemchanged = function(obj,e)
        {
        	if (obj.name == "cbo_kind1") this.edt_kind1_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind2") this.edt_kind2_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind3") this.edt_kind3_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind4") this.edt_kind4_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind5") this.edt_kind5_cd.set_value(obj.value);
        	else if (obj.name == "cbo_kind6") this.edt_kind6_cd.set_value(obj.value);
        };

        this.cbo_job_onitemchanged = function(obj,e)
        {
        	if(obj.name == "cbo_job") this.edt_job.set_value(obj.value);
        	else if(obj.name == "cbo_kinds") { this.edt_kinds.set_value(obj.value); return; }

        	this.edt_kinds.set_enable(true);
        	this.cbo_kinds.set_enable(true);
        	this.edt_schoolname.set_enable(true);
        	this.div_scale.set_visible(false);
        	this.div_career.set_visible(false);
        	this.div_schoolyear.set_visible(false);
        	this.div_grade.set_visible(false);
        	this.grd_year.set_enable(true);
        	this.grd_subject.set_enable(true);
        	trace(obj.value);

        	if (obj.value == "01"){
        	//교사
        		this.div_scale.set_visible(false);
        		this.div_career.set_visible(true);
        		this.dsEvltnKind5.filter("");
        		this.dsEvltnKind5.filter("CODE == '01' || CODE == '09'");
        	}else if (obj.value == "02"){
        	    //강사
        		this.div_scale.set_visible(true);
        		this.div_career.set_visible(true);
        		this.dsEvltnKind5.filter("");
        		this.dsEvltnKind5.filter("CODE != '01'");
        	}else if (obj.value == "03"){
        		//학부모
        		this.div_schoolyear.set_visible(true);
        		this.div_scale.set_visible(false);
        		this.edt_schoolname.set_enable(false);
        		this.grd_year.set_enable(false);
        		this.grd_subject.set_enable(false);
        	}
        	else
        	{
        		//학생
        		this.div_grade.set_visible(true);
        		this.edt_schoolname.set_enable(false);
        		this.dsEvltnKind5.filter("");
        		this.dsEvltnKind5.filter("CODE == '09'");
        		this.div_grade.form.cbo_01.set_value("");
        	}
        };
        /* // 닫기버튼 클릭 시
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
        this.btn_can_onclick = function(obj,e)
        {
        	this.fnMstitemClear();
        };

        this.dsEvltnKind6_oncolumnchanged = function(obj,e)
        {
        	var pTemp1, pTemp2, sumTemp, pTemp3, pCount1, pCount2, pCount3;

        	pTemp1 = "";
        	pCount1 = 0;
        	for (var i=0; i<this.dsEvltnKind6.rowcount; i++)
        	{
        		if (this.dsEvltnKind6.getColumn(i,"CHK") == "1")
        		{
        			if(pCount1 == 0)
        				pTemp1 += "CODE3 == '"+this.dsEvltnKind6.getColumn(i,"CODE")+"' ";
        			else
        				pTemp1 += " || CODE3 == '"+this.dsEvltnKind6.getColumn(i,"CODE")+"' ";
        			pCount1 += 1;
        		}
        	}

        	pTemp2 = "";
        	pCount2 = 0;
        	for (var i=0; i<this.dsEvltnKind1.rowcount; i++)
        	{
        		if (this.dsEvltnKind1.getColumn(i,"CHK") == "1")
        		{
        			if(pCount2 == 0)
        				pTemp2 += "CODE1 == '"+this.dsEvltnKind1.getColumn(i,"CODE")+"' ";
        			else
        				pTemp2 += " || CODE1 == '"+this.dsEvltnKind1.getColumn(i,"CODE")+"' ";
        			pCount2 += 1;
        		}
        	}
        	trace(pTemp1);
        	trace(pTemp2);
        	sumTemp = "";
        	if (pTemp1 != "")
        	{
        		if (sumTemp == "")
        			sumTemp += "(" + pTemp1 + ")";
        		else
        			sumTemp += " && " + pTemp1;
        	}
        	if (pTemp2 != "")
        	{
        		if (sumTemp == "")
        			sumTemp += "(" + pTemp2 + ")";
        		else
        			sumTemp += " && " + pTemp2;
        	}
        	this.dsEvltnPath.filter("");
        	this.dsEvltnPath.filter(sumTemp);

        	pTemp3 = "";
        	pCount3 = 0;
        	for (var i=0; i<this.dsEvltnPath.rowcount; i++)
        	{
        		if(pCount3 == 0)
        			pTemp3 += "CODE == '"+this.dsEvltnPath.getColumn(i,"CODE2")+"' ";
        		else
        			pTemp3 += " || CODE == '"+this.dsEvltnPath.getColumn(i,"CODE2")+"' ";
        		pCount3 += 1;
        	}
        	var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");
        	this.dsEvltnKind2.filter("");
        	//trace("CODE == '' "+pTemp1);
        	this.dsEvltnKind2.filter(pTemp3);
        };

        this.SD6910F_onsize = function(obj,e)
        {
        	if (this.width <= 1270 || this.height < 570)
        	{
        		this.Static00.set_font('bold 34px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 12px/normal "Gulim"');
        		this.Static01_01.set_font('normal 11px/normal "Gulim"');
        		this.Static01_02.set_font('normal 11px/normal "Gulim"');
        		this.Static01_03.set_font('normal 11px/normal "Gulim"');
        		this.Static01_04.set_font('normal 11px/normal "Gulim"');
        		this.Static01_05.set_font('normal 11px/normal "Gulim"');
        		this.Static01_06.set_font('normal 11px/normal "Gulim"');
        		this.Static01_07.set_font('normal 11px/normal "Gulim"');
        		this.Static01_08.set_font('normal 11px/normal "Gulim"');
        		this.Static01_09.set_font('normal 11px/normal "Gulim"');
        		this.Static02_01.set_font('normal 11px/normal "Gulim"');
        		this.Static02_02.set_font('normal 11px/normal "Gulim"');
        		this.Static02_04.set_font('normal 11px/normal "Gulim"');

        		this.btn_can.set_font('normal 10px/normal "Gulim"');
        		this.btn_search.set_font('normal 10px/normal "Gulim"');
        		this.Static01_10.set_font('normal 10px/normal "Gulim"');
        		this.Static01_11.set_font('normal 10px/normal "Gulim"');
        		this.Static01_12.set_font('normal 10px/normal "Gulim"');
        		this.Static01_13.set_font('normal 10px/normal "Gulim"');
        		this.edt_job.set_font('normal 10px/normal "Gulim"');
        		this.cbo_job.set_font('normal 10px/normal "Gulim"');
        		this.edt_kinds.set_font('normal 10px/normal "Gulim"');
        		this.cbo_kinds.set_font('normal 10px/normal "Gulim"');
        		this.cbo_job.set_font('normal 10px/normal "Gulim"');
        		this.edt_schoolname.set_font('normal 10px/normal "Gulim"');
        		this.edt_kind6_cd.set_font('normal 10px/normal "Gulim"');
        		this.cbo_kind6.set_font('normal 10px/normal "Gulim"');
        		this.cald_start1.set_font('normal 10px/normal "Gulim"');
        		this.cald_end1.set_font('normal 10px/normal "Gulim"');
        		this.cald_start2.set_font('normal 10px/normal "Gulim"');
        		this.cald_end2.set_font('normal 10px/normal "Gulim"');
        		this.edt_name.set_font('normal 10px/normal "Gulim"');
        		this.edt_phone.set_font('normal 10px/normal "Gulim"');
        		this.edt_bigo.set_font('normal 10px/normal "Gulim"');

        		this.div_grade.form.Static05_01.set_font('normal 11px/normal "Gulim"');
        		this.div_grade.form.cbo_01.set_font('normal 10px/normal "Gulim"');

        		this.div_scale.form.Static03_01.set_font('normal 11px/normal "Gulim"');
        		this.div_scale.form.Static03_02.set_font('normal 11px/normal "Gulim"');
        		this.div_scale.form.Static03_03.set_font('normal 11px/normal "Gulim"');
        		this.div_scale.form.Static03_04.set_font('normal 11px/normal "Gulim"');

        		this.div_scale.form.Static03_05.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.Static03_06.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.Static03_07.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.Static03_08.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.edt_01.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.edt_02.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.edt_03.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.edt_04.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.cbo_01.set_font('normal 10px/normal "Gulim"');
        		this.div_scale.form.cbo_02.set_font('normal 10px/normal "Gulim"');

        		this.div_schoolyear.form.Static04_01.set_font('normal 11px/normal "Gulim"');

        		this.div_schoolyear.form.chk_01.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_02.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_03.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_04.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_05.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_06.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_07.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_08.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_09.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_10.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_11.set_font('normal 10px/normal "Gulim"');
        		this.div_schoolyear.form.chk_12.set_font('normal 10px/normal "Gulim"');

        		this.div_career.form.Static06_01.set_font('normal 11px/normal "Gulim"');
        		this.div_career.form.Static06_02.set_font('normal 11px/normal "Gulim"');
        		this.div_career.form.Static06_03.set_font('normal 11px/normal "Gulim"');
        		this.div_career.form.Static06_04.set_font('normal 11px/normal "Gulim"');

        		this.div_career.form.Static06_04.set_font('normal 10px/normal "Gulim"');
        		this.div_career.form.edt_01.set_font('normal 10px/normal "Gulim"');
        		this.div_career.form.edt_02.set_font('normal 10px/normal "Gulim"');
        		this.div_career.form.edt_03.set_font('normal 10px/normal "Gulim"');
        		this.div_career.form.cbo_01.set_font('normal 10px/normal "Gulim"');
        		this.div_career.form.cbo_02.set_font('normal 10px/normal "Gulim"');
        	}
        	else
        	{
        		this.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 14px/normal "Gulim"');
        		this.Static01_01.set_font('normal 13px/normal "Gulim"');
        		this.Static01_02.set_font('normal 13px/normal "Gulim"');
        		this.Static01_03.set_font('normal 13px/normal "Gulim"');
        		this.Static01_04.set_font('normal 13px/normal "Gulim"');
        		this.Static01_05.set_font('normal 13px/normal "Gulim"');
        		this.Static01_06.set_font('normal 13px/normal "Gulim"');
        		this.Static01_07.set_font('normal 13px/normal "Gulim"');
        		this.Static01_08.set_font('normal 13px/normal "Gulim"');
        		this.Static01_09.set_font('normal 13px/normal "Gulim"');
        		this.Static02_01.set_font('normal 13px/normal "Gulim"');
        		this.Static02_02.set_font('normal 13px/normal "Gulim"');
        		this.Static02_04.set_font('normal 13px/normal "Gulim"');

        		this.btn_can.set_font('normal 12px/normal "Gulim"');
        		this.btn_search.set_font('normal 12px/normal "Gulim"');
        		this.Static01_10.set_font('normal 12px/normal "Gulim"');
        		this.Static01_11.set_font('normal 12px/normal "Gulim"');
        		this.Static01_12.set_font('normal 12px/normal "Gulim"');
        		this.Static01_13.set_font('normal 12px/normal "Gulim"');
        		this.edt_job.set_font('normal 12px/normal "Gulim"');
        		this.cbo_job.set_font('normal 12px/normal "Gulim"');
        		this.edt_kinds.set_font('normal 12px/normal "Gulim"');
        		this.cbo_kinds.set_font('normal 12px/normal "Gulim"');
        		this.cbo_job.set_font('normal 12px/normal "Gulim"');
        		this.edt_schoolname.set_font('normal 12px/normal "Gulim"');
        		this.edt_kind6_cd.set_font('normal 12px/normal "Gulim"');
        		this.cbo_kind6.set_font('normal 12px/normal "Gulim"');
        		this.cald_start1.set_font('normal 12px/normal "Gulim"');
        		this.cald_end1.set_font('normal 12px/normal "Gulim"');
        		this.cald_start2.set_font('normal 12px/normal "Gulim"');
        		this.cald_end2.set_font('normal 12px/normal "Gulim"');
        		this.edt_name.set_font('normal 12px/normal "Gulim"');
        		this.edt_phone.set_font('normal 12px/normal "Gulim"');
        		this.edt_bigo.set_font('normal 12px/normal "Gulim"');

        		this.div_grade.form.Static05_01.set_font('normal 13px/normal "Gulim"');
        		this.div_grade.form.cbo_01.set_font('normal 12px/normal "Gulim"');

        		this.div_scale.form.Static03_01.set_font('normal 13px/normal "Gulim"');
        		this.div_scale.form.Static03_02.set_font('normal 13px/normal "Gulim"');
        		this.div_scale.form.Static03_03.set_font('normal 13px/normal "Gulim"');
        		this.div_scale.form.Static03_04.set_font('normal 13px/normal "Gulim"');

        		this.div_scale.form.Static03_05.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.Static03_06.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.Static03_07.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.Static03_08.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.edt_01.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.edt_02.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.edt_03.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.edt_04.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.cbo_01.set_font('normal 12px/normal "Gulim"');
        		this.div_scale.form.cbo_02.set_font('normal 12px/normal "Gulim"');

        		this.div_schoolyear.form.Static04_01.set_font('normal 13px/normal "Gulim"');

        		this.div_schoolyear.form.chk_01.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_02.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_03.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_04.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_05.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_06.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_07.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_08.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_09.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_10.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_11.set_font('normal 12px/normal "Gulim"');
        		this.div_schoolyear.form.chk_12.set_font('normal 12px/normal "Gulim"');

        		this.div_career.form.Static06_01.set_font('normal 13px/normal "Gulim"');
        		this.div_career.form.Static06_02.set_font('normal 13px/normal "Gulim"');
        		this.div_career.form.Static06_03.set_font('normal 13px/normal "Gulim"');
        		this.div_career.form.Static06_04.set_font('normal 13px/normal "Gulim"');

        		this.div_career.form.Static06_04.set_font('normal 12px/normal "Gulim"');
        		this.div_career.form.edt_01.set_font('normal 12px/normal "Gulim"');
        		this.div_career.form.edt_02.set_font('normal 12px/normal "Gulim"');
        		this.div_career.form.edt_03.set_font('normal 12px/normal "Gulim"');
        		this.div_career.form.cbo_01.set_font('normal 12px/normal "Gulim"');
        		this.div_career.form.cbo_02.set_font('normal 12px/normal "Gulim"');
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6910F_onload,this);
            this.addEventHandler("onsize",this.SD6910F_onsize,this);
            this.cbo_job.addEventHandler("onitemchanged",this.cbo_job_onitemchanged,this);
            this.cbo_kind6.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.cbo_kinds.addEventHandler("onitemchanged",this.cbo_job_onitemchanged,this);
            this.cbo_kind3.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.cbo_kind5.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.cbo_kind2.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.cbo_kind4.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.cbo_kind1.addEventHandler("onitemchanged",this.cbo_kind_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.dsEvltnKind1.addEventHandler("oncolumnchanged",this.dsEvltnKind6_oncolumnchanged,this);
            this.dsEvltnKind6.addEventHandler("oncolumnchanged",this.dsEvltnKind6_oncolumnchanged,this);
        };
        this.loadIncludeScript("SD6910F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
