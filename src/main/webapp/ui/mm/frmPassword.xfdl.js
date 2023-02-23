(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MM_Employee");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1550,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"CHAR\" size=\"6\"/><Column id=\"SA_GB1\" type=\"CHAR\" size=\"1\"/><Column id=\"SA_GB2\" type=\"CHAR\" size=\"1\"/><Column id=\"IPSADT\" type=\"CHAR\" size=\"8\"/><Column id=\"SOOENDDATE\" type=\"CHAR\" size=\"8\"/><Column id=\"IPSADT_CH\" type=\"CHAR\" size=\"8\"/><Column id=\"BUSECD\" type=\"CHAR\" size=\"5\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"50\"/><Column id=\"JIKWICD\" type=\"CHAR\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/><Column id=\"HANJA\" type=\"STRING\" size=\"10\"/><Column id=\"ENG\" type=\"STRING\" size=\"30\"/><Column id=\"JUMIN1\" type=\"CHAR\" size=\"6\"/><Column id=\"BIRTH_DT\" type=\"CHAR\" size=\"8\"/><Column id=\"HONIN_GB\" type=\"CHAR\" size=\"1\"/><Column id=\"TEL1\" type=\"STRING\" size=\"15\"/><Column id=\"TEL2\" type=\"STRING\" size=\"15\"/><Column id=\"TEL3\" type=\"STRING\" size=\"15\"/><Column id=\"KYEENDDATE\" type=\"CHAR\" size=\"8\"/><Column id=\"TOISADT\" type=\"CHAR\" size=\"8\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"100\"/><Column id=\"ZIP1\" type=\"CHAR\" size=\"6\"/><Column id=\"BON_ZIP\" type=\"CHAR\" size=\"6\"/><Column id=\"BON_ADDR\" type=\"STRING\" size=\"100\"/><Column id=\"BONGUAN\" type=\"STRING\" size=\"10\"/><Column id=\"CHUIMI\" type=\"STRING\" size=\"20\"/><Column id=\"TUKGI\" type=\"STRING\" size=\"30\"/><Column id=\"HYUL\" type=\"CHAR\" size=\"1\"/><Column id=\"JONGGYO\" type=\"CHAR\" size=\"1\"/><Column id=\"GUNBYUL\" type=\"CHAR\" size=\"1\"/><Column id=\"BYUNGKWA\" type=\"STRING\" size=\"20\"/><Column id=\"GEAGUB\" type=\"CHAR\" size=\"2\"/><Column id=\"BOKMUDT1\" type=\"CHAR\" size=\"8\"/><Column id=\"BOKMUDT2\" type=\"CHAR\" size=\"8\"/><Column id=\"JSAU\" type=\"STRING\" size=\"20\"/><Column id=\"MSAU\" type=\"STRING\" size=\"20\"/><Column id=\"JUGB\" type=\"CHAR\" size=\"1\"/><Column id=\"EYE1\" type=\"STRING\" size=\"5\"/><Column id=\"EYE2\" type=\"STRING\" size=\"5\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"5\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"5\"/><Column id=\"JIBYUNG\" type=\"STRING\" size=\"20\"/><Column id=\"JUMIN2\" type=\"CHAR\" size=\"7\"/><Column id=\"DT_GB\" type=\"CHAR\" size=\"1\"/><Column id=\"SCH_GB\" type=\"CHAR\" size=\"2\"/><Column id=\"ETC\" type=\"STRING\" size=\"100\"/><Column id=\"IMG_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"INC_JUMIN\" type=\"STRING\" size=\"20\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"2\"/><Column id=\"LEVEL_YEAR\" type=\"STRING\" size=\"2\"/><Column id=\"JIKWI_YEAR\" type=\"STRING\" size=\"2\"/><Column id=\"RETIRE_TALK\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_DTGB", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"1\"/><Column id=\"name\" type=\"STRING\" size=\"5\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">양</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_Level", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"name\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">-</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">R</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">M</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">E</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">S</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_HyulGB", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"1\"/><Column id=\"name\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">A</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">B</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">AB</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">O</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">RH- A</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"name\">RH- B</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"name\">RH- AB</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"name\">RH- O</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_JongGB", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"1\"/><Column id=\"name\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">불교</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">기독교</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">천주교</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">천도교</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">이슬람교</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"name\">무교</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"name\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_WdGB", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"1\"/><Column id=\"name\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">기혼</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">미혼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_JuGB", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"1\"/><Column id=\"name\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">자택</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">전세</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">월세</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">하숙</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"name\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_Family", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/><Column id=\"GUAN\" type=\"STRING\" size=\"2\"/><Column id=\"YMD\" type=\"STRING\" size=\"8\"/><Column id=\"SCH_GB\" type=\"STRING\" size=\"2\"/><Column id=\"JIKUP\" type=\"STRING\" size=\"20\"/><Column id=\"BIGO\" type=\"STRING\" size=\"40\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"12\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SchGB", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"name\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">미취학</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">초등학교졸업</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">초등학교재학</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">초등학교중퇴</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"name\">검정고시(초졸)</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"name\">중학교졸업</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"name\">중학교재학</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"name\">중학교중퇴</Col></Row><Row><Col id=\"code\">29</Col><Col id=\"name\">검정고시(중졸)</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"name\">고등학교졸업</Col></Row><Row><Col id=\"code\">31</Col><Col id=\"name\">고등학교재학</Col></Row><Row><Col id=\"code\">33</Col><Col id=\"name\">고등학교중퇴</Col></Row><Row><Col id=\"code\">39</Col><Col id=\"name\">검정고시(고졸)</Col></Row><Row><Col id=\"code\">40</Col><Col id=\"name\">전문대졸업</Col></Row><Row><Col id=\"code\">41</Col><Col id=\"name\">전문대재학</Col></Row><Row><Col id=\"code\">43</Col><Col id=\"name\">전문대중퇴</Col></Row><Row><Col id=\"code\">50</Col><Col id=\"name\">대학교졸업</Col></Row><Row><Col id=\"code\">51</Col><Col id=\"name\">대학교재학</Col></Row><Row><Col id=\"code\">53</Col><Col id=\"name\">대학교중퇴</Col></Row><Row><Col id=\"code\">54</Col><Col id=\"name\">대학교수료</Col></Row><Row><Col id=\"code\">58</Col><Col id=\"name\">학사고시</Col></Row><Row><Col id=\"code\">60</Col><Col id=\"name\">대학원졸업</Col></Row><Row><Col id=\"code\">61</Col><Col id=\"name\">대학원재학</Col></Row><Row><Col id=\"code\">63</Col><Col id=\"name\">대학원중퇴</Col></Row><Row><Col id=\"code\">64</Col><Col id=\"name\">대학원수료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_Fam_relation", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"name\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_BIRTHDAY", this);
            obj._setContents("<ColumnInfo><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DT_GB\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_Sign", this);
            obj._setContents("<ColumnInfo><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_Passwd", this);
            obj._setContents("<ColumnInfo><Column id=\"US_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"US_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"US_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileD", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_00_00_00_00","10","265","13.61%","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","10","231","13.61%","35",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00_00","10","231","92.90%","35",null,null,"900",null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static_cerAddr","10","231","6.52%","35",null,null,"100",null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_text("주소(등본)");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit_cerAddr","Static_cerAddr:2","234","5.10%","29",null,null,"50",null,null,null,this);
            obj.set_taborder("17");
            obj.set_displaynulltext("_____");
            obj.set_type("string");
            obj.set_format("#####");
            obj.set_trimtype("both");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zip_cerAddr","MaskEdit_cerAddr:4","231","4.97%","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("검색");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cerAddr","btn_zip_cerAddr:3","234",null,"29","7%",null,"650",null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","10","191","92.90%","35",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            obj.set_padding("10px 10px 10px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","10","157","92.90%","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static_mobile","119","191","10.00%","35",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_text("생일");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_rank","119","157","10.00%","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_text("직급");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_rank","Static_rank:2","160","12.52%","29",null,null,"100",null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("Ds_Level");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button_rankHelp","combo_rank:9","160","6.52%","29",null,null,"100",null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("직급안내");
            this.addChild(obj.name, obj);

            obj = new Static("Static_birth","Button_rankHelp:7","157","8.13%","35",null,null,"80",null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_text("핸드폰");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_mobile","Static_birth:7","160","18.84%","29",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_birth","Static_mobile:2","194","12.52%","29",null,null,"100",null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio_birth","Calendar_birth:10","195","6.52%","29",null,null,"100",null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("Ds_DTGB");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_direction("vertical");
            obj.set_text("양");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static_enName","Radio_birth:6","191","8.13%","35",null,null,"80",null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("#ffffff");
            obj.set_text("영문");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","173","56","49","17",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00","10","265","92.90%","35",null,null,"900",null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            obj.set_padding("0px 100px 0px 100px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","118","92.90%","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","85","92.90%","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00","Edit_mobile:6","157","8.00%","35",null,null,"80",null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_text("집전화");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_homeTel","Static03_01_00:5.65%","160",null,"29","7%",null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Button("btn_signId","Static02_00_00:-1","167","89","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서명업로드");
            this.addChild(obj.name, obj);

            obj = new Static("Static_koName","120","85","10.00%","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_text("성명");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_koName","Static_koName:2","88","19.55%","29",null,null,"215",null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","edt_koName:7","85","8.13%","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj.set_text("사번");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","Static03_00:6","88","18.84%","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","edt_sabun:6","85","8.13%","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_text("부서");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","Static03_01:6","88",null,"29","7%",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static_ext","120","119","10.00%","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_text("내선번호");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ext","Static_ext:2","122","12.52%","29",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","edt_ext:71","127","34.71%","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("※ 내선번호 변동 또는 변경 시 수정하여 주시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static_realAddr","10","265","Static02_00_00_01_00_00:7.02%","35",null,null,"100",null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_text("주소(실거주)");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit_realAddr","Static_realAddr:2","268","5.10%","29",null,null,"50",null,null,null,this);
            obj.set_taborder("24");
            obj.set_maskchar("_");
            obj.set_type("string");
            obj.set_format("#####");
            obj.set_trimtype("both");
            obj.set_displaynulltext("_____");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zip_realAddr","MaskEdit_realAddr:4","265","4.97%","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("검색");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_realAddr","btn_zip_realAddr:3","268",null,"29","7%",null,"650",null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","324","92.84%","157",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("신상명세");
            obj.set_border("1px solid darkgray");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","9","38","99.03%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","9","67","99.03%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_border("1px solid darkgray");
            obj.set_background("#f0eeee");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","9","9","99.03%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_background("#f0eeee");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_famClan","9","10","7.2%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_text("본관");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_chronic","9","39","7.2%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_text("지병");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00_01","9","68","7.2%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_text("주거");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_famClan","Static_famClan:2","13","11.41%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_hobby","edt_famClan:3","10","7.2%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_text("취미");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_chronic","Static_chronic:2","42","11.41%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_special","edt_chronic:3","39","7.2%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_text("특기");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_hobby","Static_hobby:5","13","13.29%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_height","edt_hobby:3","10","7.2%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_text("신장");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_height","Static_height:4","13","5.98%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","edt_height:4","16","21","19",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("Cm");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_blood","Static01:6","10","9.97%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj.set_text("혈액형");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo_blood","Static_blood:4","13","10.63%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_innerdataset("Ds_HyulGB");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_religion","Combo_blood:3","9","8.14%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_text("종교");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_special","Static_special:5","42","13.29%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_weight","edt_special:3","39","7.2%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_text("체중");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_weight","Static_weight:4","42","5.98%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00","edt_weight:8","47","21","19",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("Kg");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_eye","Static01_00:2","39","9.97%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_background("#ffffff");
            obj.set_text("시력(좌)(우)");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_leftEye","Static_eye:4","42","5.2%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_rightEye","edt_leftEye:2","42","5.22%","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static_marriage","edt_rightEye:4","38","8.14%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_text("결혼유무");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo_religion","Static_religion:5","13",null,"24","1%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_innerdataset("Ds_JongGB");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo_marriage","Static_marriage:5","42",null,"24","1%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_innerdataset("Ds_WdGB");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Cmb_Home","Static03_02_00_00_01:3","73","19.60%","21",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_innerdataset("Ds_JuGB");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("가족사항");
            obj.set_border("1px solid darkgray");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","14","4","85.71%","21",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("※ 가족사항은 추가만 가능하며, 기존내용 수정은 인사관리부로 문의바랍니다.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","28","89.26%","73",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_binddataset("Ds_Family");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"관계\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"학력\"/><Cell col=\"4\" text=\"직업\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:GUAN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"Ds_Fam_relation\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:YMD\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:SCH_GB\" combodataset=\"DS_SchGB\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:JIKUP\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:BIGO\" edittype=\"normal\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00","Static00:-45","4","6.09%","21",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Div("Div_rank","291","234","768","150",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_text("직급 설명");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","696","121","58","23",null,null,null,null,null,null,this.Div_rank.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.Div_rank.addChild(obj.name, obj);

            obj = new ImageViewer("img_rankhelp","12","10","742","105",null,null,null,null,null,null,this.Div_rank.form);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::mm_help_level.png\')");
            obj.set_stretch("none");
            this.Div_rank.addChild(obj.name, obj);

            obj = new ImageViewer("img_sign","Static02:-1","85","89","82",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_border("1px solid darkgoldenrod");
            obj.set_boxShadow("0px 0px 0px #cfb986");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_passwdUpdate","1370","54",null,"26","img_sign:-13",null,"100","120",null,null,this);
            obj.set_taborder("32");
            obj.set_text("비밀번호 수정");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_passwdUpdate:4.40%","54","73","26",null,null,null,"100",null,null,this);
            obj.set_taborder("33");
            obj.set_text("저장");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_pic","10","86","110","140",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_boxShadow("0px 0px 0px #cfb986");
            obj.set_border("1px solid darkgoldenrod");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_enName","Static_enName:7","194","18.84%","29",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static_cChar","Edit_enName:6","191","8.00%","35",null,null,"80",null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("#ffffff");
            obj.set_text("한문");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_cChar","Static_cChar:5.65%","194",null,"29","7%",null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Div("div_pass","510","206","344","134",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static_nowPasswd","71","16","96","29",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("0");
            obj.set_text("현재비밀번호");
            obj.set_color("#7f7f7f");
            this.div_pass.addChild(obj.name, obj);

            obj = new Static("Static_newPasswd","55","47","96","29",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("1");
            obj.set_text("새로운 비밀번호");
            obj.set_color("#7f7f7f");
            this.div_pass.addChild(obj.name, obj);

            obj = new Static("Static_newPasswdCf","27","77","128","29",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("2");
            obj.set_text("새로운 비밀번호 확인");
            obj.set_color("#7f7f7f");
            this.div_pass.addChild(obj.name, obj);

            obj = new Edit("edt_nowPasswd","156","21","176","21",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("3");
            obj.set_password("true");
            this.div_pass.addChild(obj.name, obj);

            obj = new Edit("edt_newPasswd","156","51","176","21",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("4");
            obj.set_password("true");
            this.div_pass.addChild(obj.name, obj);

            obj = new Edit("edt_newPasswdCf","156","81","176","21",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("5");
            obj.set_password("true");
            this.div_pass.addChild(obj.name, obj);

            obj = new Button("btn_passwdUpdate","157","111","84","20",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호 수정");
            this.div_pass.addChild(obj.name, obj);

            obj = new Button("btn_passwdCancel","247","111","84","20",null,null,null,null,null,null,this.div_pass.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.div_pass.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1550,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_koName","value","ds_employee","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_sabun","value","ds_employee","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_dept","value","ds_employee","BUSENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_ext","value","ds_employee","TEL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","combo_rank","value","ds_employee","LEVEL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Radio_birth","value","ds_employee","DT_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Calendar_birth","value","ds_employee","BIRTH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_homeTel","value","ds_employee","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","MaskEdit_cerAddr","value","ds_employee","BON_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_cerAddr","value","ds_employee","BON_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_realAddr","value","ds_employee","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Tab00.Tabpage1.form.edt_famClan","value","ds_employee","BONGUAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Tab00.Tabpage1.form.edt_hobby","value","ds_employee","CHUIMI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Tab00.Tabpage1.form.edt_special","value","ds_employee","TUKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Tab00.Tabpage1.form.edt_chronic","value","ds_employee","JIBYUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Tab00.Tabpage1.form.edt_height","value","ds_employee","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Tab00.Tabpage1.form.edt_weight","value","ds_employee","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Tab00.Tabpage1.form.edt_leftEye","value","ds_employee","EYE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Tab00.Tabpage1.form.edt_rightEye","value","ds_employee","EYE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Tab00.Tabpage1.form.Combo_blood","value","ds_employee","HYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Tab00.Tabpage1.form.Combo_religion","value","ds_employee","JONGGYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Tab00.Tabpage1.form.Combo_marriage","value","ds_employee","HONIN_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","MaskEdit_realAddr","value","ds_employee","ZIP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Tab00.Tabpage1.form.Cmb_Home","value","ds_employee","JUGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Edit_mobile","value","ds_employee","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Edit_enName","value","ds_employee","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Edit_cChar","value","ds_employee","HANJA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmPassword.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("frmPassword.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("frmPassword.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("frmPassword.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var urlSave = nexacro.getApplication().gv_urlNext + "/jsp";
        var signUrl = nexacro.getApplication().gv_urlNext + "/gw/sign/";
        var pictureUrl = nexacro.getApplication().gv_urlNext + "/hr/picture/";

        var edt_newPasswd = "";
        var sReturnValue = "N";
        var emp_sabun = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));

        this.frmPassword_Onload = function(obj,e)
        {
        	var str_arg = "emp_sabun=" + emp_sabun;
        	var in_ds = "";
        	var out_ds = "";
        	var str_url =  "";

        	//직원 정보 호출
        	str_url = "JSP/mm/SQL_MM_employee.jsp";
        	in_ds = "ds_employee=ds_employee";
        	out_ds = "ds_employee=ds_employee";
        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);

        	//직원 가족 정보 호출
        	str_url = "JSP/mm/SQL_MM_employee_family.jsp";
        	in_ds = "Ds_Family=Ds_Family";
        	out_ds = "Ds_Family=Ds_Family";
        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);

        	//가족 관계 리스트 호출
        	str_url = "JSP/mm/Ds_Fam_relation.jsp";
        	in_ds = "Ds_Fam_relation=Ds_Fam_relation";
        	out_ds = "Ds_Fam_relation=Ds_Fam_relation";
        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);

        	//도장 보여주기
        	str_url = "JSP/mm/SQL_MM_employee_sign.jsp";
        	in_ds = "Ds_Sign=Ds_Sign";
        	out_ds = "Ds_Sign=Ds_Sign";
        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Tr_Callback_onload", false, "P", false, this);
        }

        //직원 정보 및 직원 가족 정보 호출 콜백
        this.Callback_sign = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		alert(ErrorMsg);
        		return false;
        	}

        	else if(Trid == "birthday_update")
        	{
        		alert("수정완료");
        	}
        	else
        	{
        		alert("비밀번호 변경이 정상적으로 처리 되었습니다!");
        		this.div_pass.set_visible(false);
        		this.div_pass.form.edt_nowPasswd.set_value('');
        		this.div_pass.form.edt_newPasswd.set_value('');
        		this.div_pass.form.edt_newPasswdCf.set_value('');
        	}
        }

        //도장 보여주기 콜백
        this.Tr_Callback_onload = function(Trid, ErrorCode, ErrorMsg)
        {
        	var return_code = this.Ds_Sign.getColumn(0,"KS_SIGN");   // 도장
        	var return_code2 = this.Ds_Sign.getColumn(0,"IMG_NAME"); // 증명사진

        	if( ErrorCode != 0 )
        	{
        		alert("오류가 발생했습니다! 시스템개발팀으로 문의하세요");
        		alert(errMsg);
         	}
        	else
        	{
        		this.img_pic.set_image("URL('" + pictureUrl + return_code2 +"')" ); //증명사진
        		this.img_sign.set_image("URL('" + signUrl + return_code +"')" ); //도장
        	}
        }

        // 패스워드 변경 div 오픈
        this.btn_passwdUpdate_divOpen_onclick = function(obj,e)
        {
        	this.div_pass.set_visible(true);
        	this.div_pass.form.edt_nowPasswd.set_value('');
        	this.div_pass.form.edt_newPasswd.set_value('');
        	this.div_pass.form.edt_newPasswdCf.set_value('');

        	var str_arg = "emp_sabun=" + emp_sabun;
        	var str_url = "JSP/mm/SQL_MM_employee_info_pw.jsp";

        	//pw 정보 호출
        	var in_ds = "Ds_Passwd=Ds_Passwd";
        	var out_ds = "Ds_Passwd=Ds_Passwd";
        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);

        }

        //패스워드변경
        this.btn_passwdUpdate_onclick = function(obj,e)
        {
        	var str_arg = "emp_sabun=" + emp_sabun;
        	var in_ds = "";
        	var out_ds = "";
        	var str_url =  "";

        	if (this.div_pass.form.edt_nowPasswd.text == "" )
        	{
        		alert("현재 비밀번호를 입력해주세요.");
        		return false;
        	}

        	if (this.div_pass.form.edt_newPasswd.text != this.div_pass.form.edt_newPasswdCf.text )
        	{
        		alert("변경할 비밀번호를 다시한번 확인해주세요!");
        		return false;
        	}

        	if (this.div_pass.form.edt_nowPasswd.text != this.Ds_Passwd.getColumn(0,"US_PASSWD") )
        	{
        		alert("비밀번호가 잘못되었습니다! 확인해주세요!");
        		return false;
        	}

        	edt_newPasswd = this.div_pass.form.edt_newPasswd.value;
         	this.checkPWD(edt_newPasswd);

         	if ( sReturnValue == "N" )
         	{
         		alert("비밀번호는 숫자+영문 조합 10자리 이상 설정해주시기 바랍니다!");
        		return false;
         	}

         	if (this.div_pass.form.edt_nowPasswd.text == this.div_pass.form.edt_newPasswdCf.text)
         	{
         		alert("새로운 비밀번호가 기존과 동일합니다. 다시한번 확인해주세요!");
        		return false;
         	}

        	//패스워드 수정
        	str_url = "JSP/mm/SQL_MM_employee_pw_save.jsp";
        	in_ds = "";
        	out_ds = "";
        	str_arg  = " emp_sabun=" + emp_sabun;
        	str_arg += " emp_id=" + this.Ds_Passwd.getColumn(0,"US_ID");
        	str_arg += " emp_passwd=" + this.div_pass.form.edt_newPasswdCf.text;

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_sign", false, "P", false, this);

        }

        this.checkPWD = function(edt_newPasswd)
        {
        	var objRegExp = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/
        	var objResult = objRegExp.exec(edt_newPasswd);

        	if( objResult == null ){
        		sReturnValue = "N";
        	}
        	else
        	{
        		if ( ( objResult.index == 0 ) && ( edt_newPasswd.length >= 10 ) ) {
        			sReturnValue = "Y";
        		}
        		else
        		{
        			sReturnValue = "N";
        		}
        	}
        	//trace("결과=>"+sReturnValue);

        	return sReturnValue;
        }

        this.div_pass_ed_newpasswd_oninput = function(obj,e)
        {
        	var nTxt = this.div_pass.form.edt_newPasswd.text;
        	//trace("nTxt : " + nTxt);
        	for(var i=0;i<=nTxt.length; i++)
        	{
        	  if(nTxt[i] == "%" || nTxt[i] == "?" || nTxt[i] == "=" ||
        		 nTxt[i] == "+" || nTxt[i] == "#")
        	  {
        		alert("비밀번호에 '%, ?, =, +, #' 문자는 사용할수 없습니다.\n다시입력하여주세요.");
        		this.div_pass.form.edt_newPasswd.set_value('');
        		break;
        	  }
        	}
        };

        this.btn_passwdCancel_onclick = function(obj,e)
        {
        	this.div_pass.set_visible(false);
        	this.div_pass.form.edt_nowPasswd.set_value('');
        	this.div_pass.form.edt_newPasswd.set_value('');
        	this.div_pass.form.edt_newPasswdCf.set_value('');
        }

        //직급 보기
        this.rankhelp_onclick = function(obj,e)
        {
        	this.Div_rank.set_visible(true);
        }

        //직급 보기 닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.Div_rank.set_visible(false);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	//직원 정보 수정
         	str_url = "JSP/mm/SQL_MM_employee_info_update.jsp";
         	in_ds = "ds_employee=ds_employee:U";
         	out_ds = "";
         	str_arg  = " emp_sabun=" + emp_sabun;  //사번 - 글로벌에서 불러오는 사번

         	this.gfn_TransactionP("update", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);

        	//사진 저장 호출
        	this.update_save();
        	//trace(this.ds_employee.saveXML());
        };

        //사진업로드
        this.btn_signId_onclick = function(obj,e)
        {
        	var vFileSubUrl = "sign/";
        	this.lfn_FileUpload(this.fileD, this.fileUpTrans, this.ds_file, vFileSubUrl);
        };

        //사진 저장
        this.update_save = function()
        {
        	var str_arg, in_ds, out_ds, str_url;

        	//사진이 업로드되면 이곳에서 DB에 저장될 사진이름 가공
        	this.ds_file.getColumn(0,"F_NAME");
        	var splitFile = this.ds_file.getColumn(0,"F_NAME").toString().split(".");
        	var splitFileName = splitFile[1];
        	var signFileName = nexacro.replaceAll(emp_sabun, '"', "" )+"."+splitFileName;

        	//파일 업로드
        	this.fileUpTrans.upload(urlSave + '/fileUpload.jsp?fileFolder=gw/sign/');

        	//사진 파일 이름 DB 저장
        	str_url = "JSP/mm/SQL_MM_employee_sign_update.jsp";
        	in_ds = "";
        	out_ds = "";
        	str_arg  = " emp_sabun=" + emp_sabun;
        	str_arg += " emp_signFileName=" + signFileName;

        	this.gfn_TransactionP("Update", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);


        };

        this.btn_zip_cerAddr_onclick = function(obj,e)
        {
        	var objnum = obj.id;
        	var objParam = {p_objnum : objnum};

        	this.lfn_showModal("zipPopup", objParam, "mm::frmzipcodefive_daum.xfdl", '', this, '', '', 632, 624);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmPassword_Onload,this);
            this.addEventHandler("onclick",this.MM_Employee_onclick,this);
            this.btn_zip_cerAddr.addEventHandler("onclick",this.btn_zip_cerAddr_onclick,this);
            this.Button_rankHelp.addEventHandler("onclick",this.rankhelp_onclick,this);
            this.Static03_01_00.addEventHandler("onclick",this.Static03_01_00_onclick,this);
            this.btn_signId.addEventHandler("onclick",this.btn_signId_onclick,this);
            this.edt_koName.addEventHandler("onchanged",this.edt_koName_onchanged,this);
            this.btn_zip_realAddr.addEventHandler("onclick",this.btn_zip_cerAddr_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Div_rank.form.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_passwdUpdate.addEventHandler("onclick",this.btn_passwdUpdate_divOpen_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_pass.form.edt_newPasswd.addEventHandler("oninput",this.div_pass_ed_newpasswd_oninput,this);
            this.div_pass.form.btn_passwdUpdate.addEventHandler("onclick",this.btn_passwdUpdate_onclick,this);
            this.div_pass.form.btn_passwdCancel.addEventHandler("onclick",this.btn_passwdCancel_onclick,this);
            this.fileD.addEventHandler("onclose",this.fileD_onclose,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.signUp_onsuccess,this);
        };
        this.loadIncludeScript("frmPassword.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
