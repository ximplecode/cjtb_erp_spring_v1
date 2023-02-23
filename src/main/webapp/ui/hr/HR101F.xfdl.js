(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Sagb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">정규직</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">계약직</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">인턴직</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">무기계약직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Level", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">-</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">R</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">M</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">E</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">S</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nick", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_401", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"POSITION_NAME\">본사</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"POSITION_NAME\">R&amp;D</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"POSITION_NAME\">스타벨리</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"POSITION_NAME\">리더스타워</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"POSITION_NAME\">인천</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"POSITION_NAME\">삼지전자건물</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"POSITION_NAME\">SK트윈타워</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"POSITION_NAME\">테라타워</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"POSITION_NAME\">AP타워</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"POSITION_NAME\">한산IT타워</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("db_dtgb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">양</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">미취학</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">초등학교졸업</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">초등학교재학</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">초등학교중퇴</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">검정고시(초졸)</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">중학교졸업</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">중학교재학</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">중학교중퇴</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">검정고시(중졸)</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">고등학교졸업</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">고등학교재학</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">고등학교중퇴</Col></Row><Row><Col id=\"CODE\">39</Col><Col id=\"NAME\">검정고시(고졸)</Col></Row><Row><Col id=\"CODE\">40</Col><Col id=\"NAME\">전문대졸업</Col></Row><Row><Col id=\"CODE\">41</Col><Col id=\"NAME\">전문대재학</Col></Row><Row><Col id=\"CODE\">43</Col><Col id=\"NAME\">전문대중퇴</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">대학교졸업</Col></Row><Row><Col id=\"CODE\">51</Col><Col id=\"NAME\">대학교재학</Col></Row><Row><Col id=\"CODE\">53</Col><Col id=\"NAME\">대학교중퇴</Col></Row><Row><Col id=\"CODE\">54</Col><Col id=\"NAME\">대학교수료</Col></Row><Row><Col id=\"CODE\">58</Col><Col id=\"NAME\">학사고시</Col></Row><Row><Col id=\"CODE\">60</Col><Col id=\"NAME\">대학원졸업</Col></Row><Row><Col id=\"CODE\">61</Col><Col id=\"NAME\">대학원재학</Col></Row><Row><Col id=\"CODE\">63</Col><Col id=\"NAME\">대학원중퇴</Col></Row><Row><Col id=\"CODE\">64</Col><Col id=\"NAME\">대학원수료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wdgb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">기혼</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">미혼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">무</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">유</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB2\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"SOOENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT_CH\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HANJA\" type=\"STRING\" size=\"256\"/><Column id=\"ENG\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HONIN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"KYEENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP1\" type=\"STRING\" size=\"256\"/><Column id=\"BON_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"BON_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BONGUAN\" type=\"STRING\" size=\"256\"/><Column id=\"CHUIMI\" type=\"STRING\" size=\"256\"/><Column id=\"TUKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HYUL\" type=\"STRING\" size=\"256\"/><Column id=\"JONGGYO\" type=\"STRING\" size=\"256\"/><Column id=\"GUNBYUL\" type=\"STRING\" size=\"256\"/><Column id=\"BYUNGKWA\" type=\"STRING\" size=\"256\"/><Column id=\"GEAGUB\" type=\"STRING\" size=\"256\"/><Column id=\"BOKMUDT1\" type=\"STRING\" size=\"256\"/><Column id=\"BOKMUDT2\" type=\"STRING\" size=\"256\"/><Column id=\"JSAU\" type=\"STRING\" size=\"256\"/><Column id=\"MSAU\" type=\"STRING\" size=\"256\"/><Column id=\"JUGB\" type=\"STRING\" size=\"256\"/><Column id=\"EYE1\" type=\"STRING\" size=\"256\"/><Column id=\"EYE2\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"JIBYUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_GB\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INC_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_TALK\" type=\"STRING\" size=\"256\"/><Column id=\"NICK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NICK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPAIRMENT\" type=\"STRING\" size=\"256\"/><Column id=\"MERIT\" type=\"STRING\" size=\"256\"/><Column id=\"IYMD\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_family", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GUAN\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JIKUP\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_school", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SUNGJUK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_career", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YMD1\" type=\"STRING\" size=\"256\"/><Column id=\"YMD2\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJANG\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_PER\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU\" type=\"STRING\" size=\"256\"/><Column id=\"TSAYOO\" type=\"STRING\" size=\"256\"/><Column id=\"YPAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insaBal", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU\" type=\"STRING\" size=\"256\"/><Column id=\"GITA\" type=\"STRING\" size=\"256\"/><Column id=\"BAL_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_edu", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YMD1\" type=\"STRING\" size=\"256\"/><Column id=\"YMD2\" type=\"STRING\" size=\"256\"/><Column id=\"GIGUAN\" type=\"STRING\" size=\"256\"/><Column id=\"NAEYONG\" type=\"STRING\" size=\"256\"/><Column id=\"CHUI\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_license", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"JONGRYU\" type=\"STRING\" size=\"256\"/><Column id=\"GIGUAN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_foreign", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"EXNM\" type=\"STRING\" size=\"256\"/><Column id=\"EXRE\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jikwi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileD", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_sabun","225","53","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","sta_sabun:0","53",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","5","296","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입사지원서 조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_insa","3","Static02:3","217","240",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ipsadt","80%","53","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("정규직전환일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt","38.40%","53","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("입사일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sagb1","img_insa:5","sta_sabun:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사원구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","sta_sagb1:0","Static01:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sagb1_00","img_insa:5","113","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("부   서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","sta_sagb1_00:0","113",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00","img_insa:5","sta_sagb1_00:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성   명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ipChaDay00_00","sta_re_ipsadt:0","113","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("직    급");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","sta_buse00_00:0","sta_ipChaDay00_00:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sooEnd","60%","53","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("재입사&중전산일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse","60%","sta_sooEnd:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("계약기간만료일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_kyeEnd","80%","sta_ipsadt:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("퇴 사 일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ipChaDay00","sta_buse:0","Static01_01:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("호    칭");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00_00","38.4%","Static01_01_00:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("한    문");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00_00_00","60%","Static01_01_00:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("영    문");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00_01","img_insa:5","sta_buse00_00:3","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("주민번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_buse00_00_01:0","Static01_01_00_01:3",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt00","38.40%","Static01_01_00_01:3","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("생년월일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt00_00","60.00%","176","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("전화번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt00_00_00","80.00%","Static01_01_00_01:3","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("HP");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt00_00_00_00","80.00%","Static01_01_00:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("근무위치");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00_01_00","img_insa:5","sta_buse00_00_01:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("최종학력");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","sta_buse00_00_01_00:0","Static01_00:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt00_01","38.40%","206","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("결혼유무");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt00_01_00","60.00%","206","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("장    애");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt00_01_00_00","80.00%","206","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("보훈대상");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00_01_01","img_insa:5","sta_buse00_00_01_00:3","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("본    적");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","sta_buse00_00_01_01:0","Static01_00_00:3",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00_01_01_00","img_insa:5","sta_buse00_00_01_01:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("주    소");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","sta_buse00_00_01_01_00:0","269",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_insa","3","350",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_tabindex("0");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_insa);
            obj.set_text("신상명세");
            obj.set_background("transparent");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_insa);
            obj.set_text("가족사항");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_insa);
            obj.set_text("학력사항");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab_insa);
            obj.set_text("경력사항");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab_insa);
            obj.set_text("인사발령");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.tab_insa);
            obj.set_text("교육사항");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.tab_insa);
            obj.set_text("자격/면허");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.tab_insa);
            obj.set_text("외국어");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage11",this.tab_insa);
            obj.set_text("퇴직면담");
            this.tab_insa.addChild(obj.name, obj);

            obj = new Div("div_detail","3","tab_insa:-2",null,null,"3","5",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_border("1px solid #10aea9");
            obj.set_url("hr::HR101F_SUB01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","sta_sabun:0","58",null,"20","sta_re_ipsadt:0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ipsadt","sta_re_ipsadt:0","58",null,"20","sta_sooEnd:0",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_iymd","sta_sooEnd:0","58",null,"20","sta_ipsadt:0",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_IpchDay","sta_ipsadt:0","58",null,"20","3",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_kyeEnd","sta_buse:0","88",null,"20","sta_kyeEnd:0",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_toisadt","sta_kyeEnd:0","88",null,"20","3",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_cd","sta_sagb1_00:0","118","6.8%","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_buse",null,"118","21","20","sta_ipChaDay00_00:2",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_nm","edt_buse_cd:0","118",null,"20","btn_Search_buse:2",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_level","sta_ipChaDay00_00:0","118","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_Level");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"113","35","30","sta_ipChaDay00:0",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("년차");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_level_yy","cb_level:2","118",null,"20","Static00:2",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwi_cd","sta_ipChaDay00:0","118","4.80%","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_nick",null,"118","70","20","4",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_nick");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_jikwi",null,"118","21","20","cb_nick:3",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwi_nm","edt_jikwi_cd:0","118",null,"20","btn_search_jikwi:2",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","sta_buse00_00:0","148",null,"20","sta_buse00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_han_name","sta_buse00_00_00:0","148",null,"20","sta_buse00_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eng_name","sta_buse00_00_00_00:0","148",null,"20","sta_re_ipsadt00_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_location","sta_re_ipsadt00_00_00_00:0","148",null,"20","4",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_401");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("POSITION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_jumin_num","sta_buse00_00_01:0","176",null,"30","sta_re_ipsadt00:0",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@@@@@-@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_birth","sta_re_ipsadt00:0","176","6.4%","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@@@-@@-@@");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_birthGB","medt_birth:0","176",null,"30","sta_re_ipsadt00_00:0",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_innerdataset("db_dtgb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_fittocontents("none");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tel","sta_re_ipsadt00_00:0","176",null,"30","sta_re_ipsadt00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hp","sta_re_ipsadt00_00_00:0","176",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_schGB","sta_buse00_00_01_00:0","206",null,"30","sta_re_ipsadt00_01:0",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_schGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_marryGB","sta_re_ipsadt00_01:0","206",null,"30","sta_re_ipsadt00_01_00:0",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_innerdataset("ds_wdgb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_fittocontents("none");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_impairment","sta_re_ipsadt00_01_00:0","206",null,"30","sta_re_ipsadt00_01_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_fittocontents("none");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_merit","sta_re_ipsadt00_01_00_00:0","206",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_bonZip","sta_buse00_00_01_01:0","239","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@@@@");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_bonAddr","medt_bonZip:0","245","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bonAddr","btn_search_bonAddr:0","239",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_Zip","sta_buse00_00_01_01_00:0","269","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@@@@");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_Addr","medt_Zip:0","274","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Addr","btn_search_Addr:0","269",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse00_00_01_01_00_00","225","sta_buse00_00_01_01_00:3","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("입사경로");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","sta_buse00_00_01_01_00_00:0","302",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_re_ipsadt01","38.40%","83","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("수습만료일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("clad_sooEnd","sta_re_ipsadt01:0","88",null,"20","sta_buse:0",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_sagb","sta_sagb1:0","88",null,"20","sta_re_ipsadt01:0",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_Sagb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"16","120","22","530",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","120","22","400",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_etc","sta_buse00_00_01_01_00_00:0","302",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","120","22","270",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgUpload","4","img_insa:9","216","30",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("사진업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest",null,"18","120","22","675",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser","62","118","360","229",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_sabun","value","ds_insa","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cald_ipsadt","value","ds_insa","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cald_iymd","value","ds_insa","IYMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cald_IpchDay","value","ds_insa","IPSADT_CH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cb_sagb","value","ds_insa","SA_GB1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","clad_sooEnd","value","ds_insa","SOOENDDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cald_kyeEnd","value","ds_insa","KYEENDDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cald_toisadt","value","ds_insa","TOISADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_buse_cd","value","ds_insa","BUSECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_buse_nm","value","ds_insa","BUSENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cb_level","value","ds_insa","LEVEL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_level_yy","value","ds_insa","LEVEL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_jikwi_cd","value","ds_insa","JIKWICD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_jikwi_nm","value","ds_insa","JIKWINM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cb_nick","value","ds_insa","NICK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_name","value","ds_insa","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_han_name","value","ds_insa","HANJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_eng_name","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cb_location","value","ds_insa","POSITION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","medt_jumin_num","value","ds_insa","JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","medt_birth","value","ds_insa","BIRTH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","rd_birthGB","value","ds_insa","DT_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_tel","value","ds_insa","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt_hp","value","ds_insa","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cb_schGB","value","ds_insa","SCH_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","rd_marryGB","value","ds_insa","HONIN_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","rd_impairment","value","ds_insa","IMPAIRMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edt_merit","value","ds_insa","MERIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","medt_bonZip","value","ds_insa","BON_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edt_bonAddr","value","ds_insa","BON_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","medt_Zip","value","ds_insa","ZIP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_Addr","value","ds_insa","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_etc","value","ds_insa","ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","hr::HR101F_SUB01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HR101F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR101F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var arr_rt;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.Tab00_onchanged = function(obj,e)
        {

        	this.setTapData(e.postindex);
        };

        this.Edit00_00_onchanged = function(obj,e)
        {

        };

        this.Radio00_onitemchanged = function(obj,e)
        {

        };

        this.HR101F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        	this.getData_etc();
        };

        this.getData_etc = function()
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_hr101_etcAll.jsp";
        	in_ds = "ds_nick=ds_nick ds_buse=ds_buse ds_jikwi=ds_jikwi";
        	out_ds = "ds_nick=ds_nick ds_buse=ds_buse ds_jikwi=ds_jikwi";
        	str_arg = "";
        	this.gfn_TransactionP("select_nick", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);

        }

        this.btn_search_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sInsa",0,0,237,440,null,null,"common::Insa.xfdl");
        		this.addChild("sInsa",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_insa);
        };

        this.fn_Callback_insa = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.setData_clearData();
        		this.getData_insa101(arr_rt[0]);
        	}
        	this.removeChild("sInsa");

        };

        this.btn_new_onclick = function(obj,e)
        {
        	this.ds_insa.clearData();
        	this.ds_insa.addRow();
        	this.setData_clearData();

        	str_url = "JSP/hr/getData_new_sabun.jsp";
        	in_ds = "";
        	out_ds = "";
        	str_arg = "";
        	this.gfn_TransactionP("select_new_sabun", str_url, in_ds, out_ds, str_arg, "Callback_select_newSabun", true, "P", false, this);

        };

        this.Callback_select_newSabun = function(Trid,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode !== -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.ds_insa.setColumn(0,"SABUN",nexacro.getApplication().gv_rt_value);
        }

        this.setData_clearData = function()
        {
        	this.ds_family.clearData();
        	this.ds_school.clearData();
        	this.ds_career.clearData();
        	this.ds_edu.clearData();
        	this.ds_foreign.clearData();
        	this.ds_license.clearData();
        	this.img_insa.set_image("");
        }

        this.getData_insa101 = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/SQL_HR101_01S.jsp";
        	in_ds = "ds_insa=ds_insa";
        	out_ds = "ds_insa=ds_insa";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_insa101", str_url, in_ds, out_ds, str_arg, "Callback_select_insa101", true, "S", false, this);
        }

        this.Callback_select_insa101 = function(Trid, ErrorCode, ErrorMsg)
        {
        	var img_url;
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        	img_url = "https://cj-erp.chunjae.co.kr/erp-next/hr/img/"+this.ds_insa.getColumn(0,"IMG_NAME");
        	this.setTapData(this.tab_insa.getIndex());
        	this.img_insa.set_image(img_url);

        	trace(this.img_insa.image);
        }

        this.btn_Search_buse_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Buse.xfdl");
        		this.addChild("sBuse",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sBuse",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_buse);
        };

        this.fn_Callback_buse = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.ds_insa.setColumn(0,"BUSECD",arr_rt[0]);
        		this.ds_insa.setColumn(0,"BUSENM",arr_rt[1]);
        	}

        	this.removeChild("sBuse");
        };


        this.btn_search_jikwi_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sJikwi",0,0,237,440,null,null,"common::Jikwi.xfdl");
        		this.addChild("sJikwi",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sJikwi",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_jikwi);
        };

        this.fn_Callback_jikwi = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.ds_insa.setColumn(0,"JIKWICD",arr_rt[0]);
        		this.ds_insa.setColumn(0,"JIKWINM",arr_rt[1]);
        	}

        	this.removeChild("sJikwi");
        };

        this.btn_search_bonAddr_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sAddress",0,0,237,440,null,null,"common::Address.xfdl");
        		this.addChild("sAddress",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sAddress",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_Address_bon);
        };

        this.fn_Callback_Address_bon= function(strID, vArgu)
        {
        	arr_rt = vArgu.split(":");
        	this.ds_insa.setColumn(0,"BON_ZIP",arr_rt[0]);
        	this.ds_insa.setColumn(0,"BON_ADDR",arr_rt[1]);

        	this.removeChild("sAddress");
        };

        this.btn_search_Addr_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sAddress",0,0,237,440,null,null,"common::Address.xfdl");
        		this.addChild("sAddress",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sAddress",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_Address);
        };

        this.fn_Callback_Address_bon= function(strID, vArgu)
        {
        	arr_rt = vArgu.split(":");
        	this.ds_insa.setColumn(0,"ZIP1",arr_rt[0]);
        	this.ds_insa.setColumn(0,"ADDR1",arr_rt[1]);

        	this.removeChild("sAddress");
        };

        this.setTapData = function(tapIndex)
        {
        	switch (tapIndex)
        	{
        		case 0 :
        			this.div_detail.set_url("hr::HR101F_SUB01.xfdl");
        			break;
        		case 1 :
        			this.div_detail.set_url("hr::HR101F_SUB02.xfdl");
        			if (this.ds_family.getRowCount() == 0)
        			{
        				if (this.ds_insa.getRowCount() > 0)
        				{
        					this.getData_family(this.ds_insa.getColumn(0,"SABUN"));
        				}
        			}
        			break;
        		case 2 :
        			this.div_detail.set_url("hr::HR101F_SUB03.xfdl");
        			if (this.ds_school.getRowCount() == 0)
        			{
        				if (this.ds_insa.getRowCount() > 0)
        				{
        					this.getData_school(this.ds_insa.getColumn(0,"SABUN"));
        				}
        			}
        			break;
        		case 3 :
        			this.div_detail.set_url("hr::HR101F_SUB04.xfdl");
        			if (this.ds_career.getRowCount() == 0)
        			{
        				if (this.ds_insa.getRowCount() > 0)
        				{
        					this.getData_career(this.ds_insa.getColumn(0,"SABUN"));
        				}
        			}
        			break;
        		case 4 :
        			this.div_detail.set_url("hr::HR101F_SUB05.xfdl");
        			if (this.ds_insaBal.getRowCount() == 0)
        			{
        				if (this.ds_insa.getRowCount() > 0)
        				{
        					this.getData_insaBal(this.ds_insa.getColumn(0,"SABUN"));
        				}
        			}
        			break;
        		case 5 :
        			this.div_detail.set_url("hr::HR101F_SUB06.xfdl");
        			if (this.ds_edu.getRowCount() == 0)
        			{
        				if (this.ds_insa.getRowCount() > 0)
        				{
        					this.getData_Edu(this.ds_insa.getColumn(0,"SABUN"));
        				}
        			}
        			break;
        		case 6 :
        			this.div_detail.set_url("hr::HR101F_SUB07.xfdl");
        			if (this.ds_license.getRowCount() == 0)
        			{
        				if (this.ds_insa.getRowCount() > 0)
        				{
        					this.getData_License(this.ds_insa.getColumn(0,"SABUN"));
        				}
        			}
        			break;
        		case 7 :
        			this.div_detail.set_url("hr::HR101F_SUB08.xfdl");
        			if (this.ds_foreign.getRowCount() == 0)
        			{
        				if (this.ds_insa.getRowCount() > 0)
        				{
        					this.getData_Foreign(this.ds_insa.getColumn(0,"SABUN"));
        				}
        			}
        			break;
        		case 8 :
        			this.div_detail.set_url("hr::HR101F_SUB09.xfdl");
        			break;
        	}

        }

        this.getData_family = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_family.jsp";
        	in_ds = "ds_family=ds_family";
        	out_ds = "ds_family=ds_family";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_family", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);
        }

        this.Callback_select_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        }

        this.getData_school = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_school.jsp";
        	in_ds = "ds_school=ds_school";
        	out_ds = "ds_school=ds_school";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_school", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);
        }

        this.getData_career = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_career.jsp";
        	in_ds = "ds_career=ds_career";
        	out_ds = "ds_career=ds_career";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_school", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);
        }

        this.ds_career_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "YMD1" || e.columnid == "YMD2" || e.columnid =="DEST_PER")
        	{
        		this.setData_workDay(e.row);
        	}
        };

        this.setData_workDay = function(nRow)
        {
        	var diff = new Array;
        	var yy, mm, ym, work_day;

        	if (this.ds_career.getColumn( nRow, "YMD1" ) < this.ds_career.getColumn(nRow, "YMD2") )
        	{
        		diff = Eco.date.getDiffTime(this.ds_career.getColumn( nRow, "YMD1" ) + "000000", this.ds_career.getColumn( nRow, "YMD2" ) + "000000");
        		yy =  nexacro.floor( diff[0] / 365 );
        		mm =  nexacro.floor((diff[0] - (nexacro.floor( diff[0] / 365 ) * 365))/30);
        		//Eco.number.getMaskFormatString(yy,"00");
        		ym = Eco.number.getMaskFormatString(yy,"00") + "." + Eco.number.getMaskFormatString(mm,"00");
        		this.ds_career.setColumn(nRow, "YEAR", ym);

        		if ( Eco.isEmpty(this.ds_career.getColumn(nRow,"DEST_PER")) == false )
        		{
        			work_day = nexacro.floor( nexacro.toNumber(this.ds_career.getColumn(nRow,"DEST_PER")) / 100 * diff[0] );
        		}
        		else
        		{
        			work_day = 0;
        		}

        		this.ds_career.setColumn(nRow, "WORK_DAY", work_day);
        		yy = nexacro.floor( work_day / 365 );
        		mm = nexacro.floor((work_day - (nexacro.floor( work_day / 365 ) * 365))/30);
        		ym = Eco.number.getMaskFormatString(yy,"00") + "." + Eco.number.getMaskFormatString(mm,"00");
        		this.ds_career.setColumn(nRow,"WORK_YEAR",ym);
        	}
        	else
        	{
        		this.ds_career.setColumn(nRow, "YEAR", "00.00");
        		this.ds_career.setColumn(nRow, "WORK_YEAR", "00.00");
        	}
        }

        this.getData_insaBal = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_insaBal.jsp";
        	in_ds = "ds_insaBal=ds_insaBal";
        	out_ds = "ds_insaBal=ds_insaBal";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_insaBal", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);
        }

        this.getData_Edu = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_Edu.jsp";
        	in_ds = "ds_edu=ds_edu";
        	out_ds = "ds_edu=ds_edu";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_Edu", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);
        }

        this.getData_License = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_License.jsp";
        	in_ds = "ds_license=ds_license";
        	out_ds = "ds_license=ds_license";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_license", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);
        }

        this.getData_Foreign = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_Foreign.jsp";
        	in_ds = "ds_foreign=ds_foreign";
        	out_ds = "ds_foreign=ds_foreign";
        	str_arg = "sabun='" + sabun + "'";
        	this.gfn_TransactionP("select_license", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "P", false, this);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_buse_cd.value) == true)
        	{
        		this.alert("부서명이 입력되지 않았습니다..!!");
        		return false;
        	}

        	if (Eco.isEmpty(this.edt_jikwi_cd.value) == true)
        	{
        		this.alert("직책이 입력되지 않았습니다..!!");
        		return false;
        	}

        	if (Eco.isEmpty(this.edt_name.value) == true)
        	{
        		this.alert("성명 입력되지 않았습니다..!!");
        		return false;
        	}

        	if (Eco.isEmpty(this.cald_ipsadt.value) == true)
        	{
        		this.alert("입사일이 입력되지 않았습니다..!!");
        		return false;
        	}

        	if (Eco.isEmpty(this.medt_jumin_num.value) == true)
        	{
        		this.alert("주민등록번호가 입력되지 않았습니다..!!");
        		return false;
        	}

        	if (Eco.isEmpty(this.cb_schGB.value) == true)
        	{
        		this.alert("최종학력이 입력되지 않았습니다..!!");
        		return false;
        	}


        	str_url = "JSP/hr/SQL_HR101_01U.jsp";
        	in_ds = "ds_insa=ds_insa:U ds_family=ds_family:U ds_school=ds_school:U ds_career=ds_career:U ds_insaBal=ds_insaBal:U ds_edu=ds_edu:U ds_license=ds_license:U ds_foreign=ds_foreign:U";
        	out_ds = "ds_insa=ds_insa ds_family=ds_family ds_school=ds_school ds_career=ds_career ds_insaBal=ds_insaBal ds_edu=ds_edu ds_license=ds_license ds_foreign=ds_foreign";
        	str_arg = "update_id='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") + "'";
        	this.gfn_TransactionP("insa_dml", str_url, in_ds, out_ds, str_arg, "Callback_select_none", true, "U", false, this);
        };


        this.btn_imgUpload_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_sabun.value) == true)
        	{
        		return false;
        	}

        	this.FileD.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.FileD_onclose = function(obj,e)
        {
        	this.FileUpTransfer.clearFileList();
        	var filelist = e.virtualfiles;

        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
        		var extension = vFile.filename.substr((vFile.filename).lastIndexOf('.'), (vFile.filename).length);
        		//var r_name = date + gv_sabun + extension;
        		var ImgFile = this.edt_sabun.value + extension; // 저장할 사진 파일 이름

        		vFile.name = ImgFile;
                vFile.addEventHandler("onsuccess", this.fn_FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.fn_FileList_onerror , this);
                vFile.open(null, 1);
            }
        };

        this.fn_FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
        			this.FileUpTransfer.addFile(obj.name, obj);
        			this.img_insa.set_image("file://"+obj.fullpath);
        			this.FileUpTransfer.upload(nexacro.getApplication().gv_urlNext + '/JSP/fileUpload.jsp?fileFolder=hr/img');
        			this.ds_insa.setColumn(0,"IMG_NAME",obj.name);
        			break;
            }
        };

        this.fn_FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };

        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	if(e.message != "Success")
        	{
        		alert("사진정보가 정상적으로 저장되지 않았습니다.");
        	}
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_sabun.value) == true)
        	{
        		return false;
        	}
        	var objApp = nexacro.getApplication();

        	var confirm_result = objApp.confirm("삭제된 데이터는 복원하실수 없습니다.\n" + this.edt_name.value + "님의 자료를 정말 삭제하게요..?","삭제","warning");

        	if (confirm_result == true)
        	{
        		str_url = "JSP/hr/setData_delete_hr101.jsp";
        		in_ds = "";
        		out_ds = "";
        		str_arg = "sabun='" + this.edt_sabun.value + "'";
        		this.gfn_TransactionP("insa_delete", str_url, in_ds, out_ds, str_arg, "Callback_delete", true, "D", false, this);
        	}
        };

        this.Callback_delete = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != 0)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        	this.ds_insa.clearData();
        	this.setData_clearData();
        };

        this.btn_print_onclick = function(obj,e)
        {


        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var rdUrl = gv_svcUrl + "rpt/hr/HR101P.mrd";
            var rdParam = "/rp [" + this.edt_sabun.value + "]";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,100,100,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("인사카드");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        };

        this.tab_insa_canchange = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_sabun.value) == true)
        	{
        		return false;
        	}
        };

        this.btnTest_onclick = function(obj,e)
        {
        	this.WebBrowser.set_url("http://www.naver.com");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR101F_onload,this);
            this.tab_insa.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.tab_insa.addEventHandler("canchange",this.tab_insa_canchange,this);
            this.edt_buse_cd.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.btn_Search_buse.addEventHandler("onclick",this.btn_Search_buse_onclick,this);
            this.edt_level_yy.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.edt_jikwi_cd.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.btn_search_jikwi.addEventHandler("onclick",this.btn_search_jikwi_onclick,this);
            this.rd_birthGB.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.rd_marryGB.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.rd_impairment.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.btn_search_bonAddr.addEventHandler("onclick",this.btn_search_bonAddr_onclick,this);
            this.btn_search_Addr.addEventHandler("onclick",this.btn_search_Addr_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_imgUpload.addEventHandler("onclick",this.btn_imgUpload_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btnTest.addEventHandler("onclick",this.btnTest_onclick,this);
            this.ds_career.addEventHandler("oncolumnchanged",this.ds_career_oncolumnchanged,this);
            this.FileD.addEventHandler("onclose",this.FileD_onclose,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
        };
        this.loadIncludeScript("HR101F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
