(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED121F");
            this.set_titletext("저자소득자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1350,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"STRING\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthor", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"13\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"13\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_AUTHORGB\" type=\"STRING\" size=\"1\"/><Column id=\"ATHR_JOBKIND\" type=\"STRING\" size=\"1\"/><Column id=\"ATHR_ABODEGB\" type=\"STRING\" size=\"1\"/><Column id=\"ATHR_NATIVEGB\" type=\"STRING\" size=\"1\"/><Column id=\"ATHR_CLASSGB\" type=\"STRING\" size=\"3\"/><Column id=\"ATHR_HOMETEL\" type=\"STRING\" size=\"20\"/><Column id=\"ATHR_HP\" type=\"STRING\" size=\"20\"/><Column id=\"ATHR_EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"ATHR_HOMEZIP\" type=\"STRING\" size=\"6\"/><Column id=\"ATHR_HOMEADDR\" type=\"STRING\" size=\"100\"/><Column id=\"ATHR_COMNAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_COMTEL\" type=\"STRING\" size=\"20\"/><Column id=\"ATHR_COMFAX\" type=\"STRING\" size=\"20\"/><Column id=\"ATHR_COMZIP\" type=\"STRING\" size=\"6\"/><Column id=\"ATHR_COMADDR\" type=\"STRING\" size=\"100\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"UNIV_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"UNIV_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_UNIVSTUDY\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"ATHR_ACNTNO\" type=\"STRING\" size=\"20\"/><Column id=\"ATHR_RECOMMANDER\" type=\"STRING\" size=\"20\"/><Column id=\"ATHR_RECOMMAND\" type=\"STRING\" size=\"40\"/><Column id=\"ATHR_CLOSEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ATHRPRMT_REGISTER\" type=\"STRING\" size=\"20\"/><Column id=\"ATHRPRMT_PERMITER\" type=\"STRING\" size=\"20\"/><Column id=\"ATHRPRMT_PERMITE\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ATHR_PERMITE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ATHR_PERMITE_SECTION\" type=\"STRING\" size=\"5\"/><Column id=\"ATHR_PERMITE_EMPLOYEE\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniversity", this);
            obj._setContents("<ColumnInfo><Column id=\"UNIV_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"UNIV_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"UNIV_REMARK\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthorKind", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"1\"/><Column id=\"Name\" type=\"STRING\" size=\"6\"/></ColumnInfo><Rows><Row><Col id=\"No\">0</Col><Col id=\"Name\">저자</Col></Row><Row><Col id=\"No\">1</Col><Col id=\"Name\">외주자</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"Name\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobKind", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"1\"/><Column id=\"Name\" type=\"STRING\" size=\"6\"/></ColumnInfo><Rows><Row><Col id=\"No\">0</Col><Col id=\"Name\">교사</Col></Row><Row><Col id=\"No\">1</Col><Col id=\"Name\">강사</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"Name\">프리랜서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJob", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNative", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"1\"/><Column id=\"Name\" type=\"STRING\" size=\"6\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"Name\">내국인</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"Name\">외국인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsABODE", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"1\"/><Column id=\"Name\" type=\"STRING\" size=\"6\"/></ColumnInfo><Rows><Row><Col id=\"No\">0</Col><Col id=\"Name\">거주자</Col></Row><Row><Col id=\"No\">1</Col><Col id=\"Name\">비거주자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAthrWithHold", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"WITHHOLDDTL_WORKCONTENT\" type=\"STRING\" size=\"30\"/><Column id=\"WITHHOLDDTL_BOOKNAME\" type=\"STRING\" size=\"50\"/><Column id=\"WITHHOLDDTL_QTY\" type=\"INT\" size=\"6\"/><Column id=\"WITHHOLDDTL_UNITCOST\" type=\"STRING\" size=\"9\"/><Column id=\"WITHHOLDDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"WORK_NO\" type=\"STRING\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAthrJobHis", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHRJOBHIS_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ATHRJOBHIS_SDATE\" type=\"STRING\" size=\"6\"/><Column id=\"ATHRJOBHIS_EDATE\" type=\"STRING\" size=\"6\"/><Column id=\"ATHRJOBHIS_COMNAME\" type=\"STRING\" size=\"20\"/><Column id=\"ATHRJOBHIS_REMARK\" type=\"STRING\" size=\"40\"/><Column id=\"DATACHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAthrWrtHis", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHRWRTHIS_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ATHRWRTHIS_BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"DATACHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthorAttend", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"ATHRATTEND_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"ATHRATTEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompany", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row><Col id=\"COMPANY_CODE\">C</Col><Col id=\"COMPANY_NAME\">천재교육</Col></Row><Row><Col id=\"COMPANY_CODE\">T</Col><Col id=\"COMPANY_NAME\">천재교과서</Col></Row><Row><Col id=\"COMPANY_CODE\">H</Col><Col id=\"COMPANY_NAME\">해법에듀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static10","295","272","7.41%","85",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("회사");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_address2","Static10:5","315","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주소찾기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comZip","btn_address2:4","315","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comAddr","edt_comZip:3","315","47.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","15","10","97%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","63","25","241",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","63","25","172",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","104",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","36",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_attend",null,"7","79","25","320",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("계약관리");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","16","53","269","667",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsAuthor");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"143\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"주민번호\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_NAME\"/><Cell col=\"1\" text=\"bind:ATHR_JUMINNO2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_univ","Grid00:10","361","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("졸업학교");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_univ","btn_univ:4","360","29.70%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("테스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","Grid00:10","55","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저자/\r\n작업구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("Cb_AUTHORGB","Static00:5","55","13%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsAuthorKind");
            obj.set_codecolumn("No");
            obj.set_datacolumn("Name");
            this.addChild(obj.name, obj);

            obj = new Combo("Cb_JOBKIND","Cb_AUTHORGB:2","55","12.96%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsJobKind");
            obj.set_codecolumn("No");
            obj.set_datacolumn("Name");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","Grid00:10","406","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("직종");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","Grid00:10","449","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("관련부서");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("Cb_Job","Static15:5","404","15%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("dsJob");
            obj.set_codecolumn("JOB_CODE");
            obj.set_datacolumn("JOB_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Cb_Section","Static18:5","449","15%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","edt_univ:6","360","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전공");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subject","Static14:5","360","31.63%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("테스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Cb_JOBKIND:3","54","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학년구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_1","Static01:87","60","6.15%","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("유치");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_2","chk_1:8","60","6.52%","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("초등");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_3","chk_2:5","58","6.52%","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("중고등");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","Cb_Job:3","404","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("은행명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("Cb_Bank","Static16:3","404","15%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("dsBank");
            obj.set_codecolumn("BANK_CODE");
            obj.set_datacolumn("BANK_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","Static01:3","55","35.56%","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","Grid00:10","99","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("내/외국인");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","Grid00:10","183","7.41%","85",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("자택");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","Static10:5","272","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("직장명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","Static06:5","185","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("전화");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_address1","Static06:5","227","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("주소찾기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_homeZip","btn_address1:4","227","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_homeAddr","edt_homeZip:3","227","47.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_homeTel","Static07:4","185","18.4%","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","edt_homeTel:3","185","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("핸드폰");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hp","Static08:6","185","13.48%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","edt_hp:4","184","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("이메일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","Static09:4","183","13.85%","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comName","Static11:3","271","18.52%","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","edt_comName:2","271","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("전화");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comTel","Static12:4","271","13.48%","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","edt_comTel:6","271","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("팩스");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comFax","Static13:2","271","13.93%","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","Static02:5","99","26.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("1px solid lightgray");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","51","9","217","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsNative");
            obj.set_codecolumn("No");
            obj.set_datacolumn("Name");
            obj.set_direction("vertical");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static03","Div01_00:4","99","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("거주구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","Static03:4","99","35.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_border("1px solid lightgray");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","92","9","234","20",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsABODE");
            obj.set_codecolumn("No");
            obj.set_datacolumn("Name");
            obj.set_direction("vertical");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static17","Cb_Bank:4","404","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("계좌번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_acntNo","Static17:4","404","23.63%","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","Cb_Section:3","449","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("추천인");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_recommander","Static19:2","449","15%","40",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","edt_recommander:5","450","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("추천사유");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_recommand","Static20:5","449","23.63%","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","Grid00:10","141","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("성명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","Static04:5","141","26.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_readonly("false");
            obj.set_text("bind:");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","edt_name:4","141","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("주민번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","Static05:4","141","13.48%","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_format("###### - #######");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03_03_00_00","medt_juminNo:5","141","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("저자코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","Static00_00_03_03_00_00:3","141","14.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_permite","Grid00:13","495","7.11%","35",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("승인");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("st_register","ck_permite:8","491","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("승인부서");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_register","st_register:3","492","14.96%","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Static("st_permiter","edt_register:3","491","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("승인자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_permiter","st_permiter:3","492","14.96%","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","edt_permiter:3","492","7.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("약정만료일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_closeDate","Static20_00:4","491","16.22%","40",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","Grid00:20","540","76.30%","180",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("1.원고료 현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","1","100.10%","150",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAthrWithHold");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"지급일자\"/><Cell col=\"1\" text=\"관리카드번호\"/><Cell col=\"2\" text=\"소득사항\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:PAYDATE\"/><Cell col=\"1\" text=\"bind:WORK_NO\"/><Cell col=\"2\" text=\"bind:WITHHOLDDTL_BOOKNAME\"/><Cell col=\"3\" text=\"bind:WITHHOLDDTL_QTY\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:WITHHOLDDTL_UNITCOST\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:WITHHOLDDTL_AMOUNT\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:SECTION_NAME\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("2.경력사항");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","1","99.9%","160",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAthrJobHis");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"102\"/><Column size=\"198\"/><Column size=\"254\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"근무기간\"/><Cell col=\"2\" rowspan=\"2\" text=\"근무처\"/><Cell col=\"3\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" text=\"입사월\"/><Cell row=\"1\" col=\"1\" text=\"퇴사월\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_IDENTITY\"/><Cell col=\"1\" text=\"bind:ATHRJOBHIS_SEQ\"/><Cell col=\"2\" text=\"bind:ATHRJOBHIS_SDATE\"/><Cell col=\"3\" text=\"bind:ATHRJOBHIS_EDATE\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("3.저서현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","0","99.9%","160",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAthrWrtHis");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"631\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHRWRTHIS_BOOKNAME\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("4.계약현황");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","2","0","99.8%","160",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAuthorAttend");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"115\"/><Column size=\"119\"/><Column size=\"129\"/><Column size=\"124\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소속\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" colspan=\"2\" text=\"계약기간\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_NM\" combodataset=\"dsCompany\" combocodecol=\"COMPANY_CODE\" combodatacol=\"COMPANY_NAME\"/><Cell col=\"1\" text=\"bind:SECTION_NM\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NM\"/><Cell col=\"3\" text=\"bind:WORK_SDATE\"/><Cell col=\"4\" text=\"bind:WORK_EDATE\"/></Band></Format></Formats>");
            this.Tab00.Tabpage5.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1350,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","dsAuthor","ATHR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_code","value","dsAuthor","ATHR_IDENTITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_homeTel","value","dsAuthor","ATHR_HOMETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_hp","value","dsAuthor","ATHR_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_email","value","dsAuthor","ATHR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_homeZip","value","dsAuthor","ATHR_HOMEZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_homeAddr","value","dsAuthor","ATHR_HOMEADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_comName","value","dsAuthor","ATHR_COMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_comTel","value","dsAuthor","ATHR_COMTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_comFax","value","dsAuthor","ATHR_COMFAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_comZip","value","dsAuthor","ATHR_COMZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_comAddr","value","dsAuthor","ATHR_COMADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_univ","value","dsAuthor","UNIV_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_subject","value","dsAuthor","ATHR_UNIVSTUDY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Cb_Job","value","dsAuthor","JOB_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Cb_Bank","value","dsAuthor","BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_acntNo","value","dsAuthor","ATHR_ACNTNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Cb_Section","value","dsAuthor","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_recommander","value","dsAuthor","ATHR_RECOMMANDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_recommand","value","dsAuthor","ATHR_RECOMMAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Cb_AUTHORGB","value","dsAuthor","ATHR_AUTHORGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Cb_JOBKIND","value","dsAuthor","ATHR_JOBKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","medt_juminNo","value","dsAuthor","ATHR_JUMINNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div01_00.form.Radio00","value","dsAuthor","ATHR_NATIVEGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div01_00_00.form.Radio00","value","dsAuthor","ATHR_ABODEGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cal_closeDate","value","dsAuthor","ATHR_CLOSEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_permiter","value","dsAuthor","ATHRPRMT_PERMITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edt_register","value","dsAuthor","ATHRPRMT_REGISTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","ck_permite","value","dsAuthor","ATHRPRMT_PERMITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED121F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED121F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED121F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var sUserCompetence1 = "1";   // 일반사용자
        var sUserCompetence2 = "2";   // 부서승인권자
        var sUserCompetence3 = "3";   // 부서장
        var sUserCompetence4 = "4";   // 일반승인권자
        var sUserCompetence5 = "5";   // 승인1차권한
        var sUserCompetence6 = "6";   // 승인2차권한

        var sSelect;

        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.ED121F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_01_101");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	//일반 사용자일 경우 안보이게
        	var value = sSelect > sUserCompetence1;
        	this.ck_permite.set_visible(value);
        	this.st_permiter.set_visible(value);
        	this.edt_permiter.set_visible(value);
        	this.st_register.set_visible(value);
        	this.edt_register.set_visible(value);

        	this.gfn_TransactionP("select","JSP/ed/section_select.jsp", "dsSection=dsSection", "dsSection=dsSection", "", "", false, "P", false, this);	//부서
        	this.gfn_TransactionP("select","JSP/ed/job_select.jsp", "dsJob=dsJob", "dsJob=dsJob", "", "", false, "P", false, this);	//직종
        	this.gfn_TransactionP("select","JSP/ed/bank_select.jsp", "dsBank=dsBank", "dsBank=dsBank", "", "", false, "P", false, this);	//은행
        	this.gfn_TransactionP("select","JSP/ed/univ_select.jsp", "dsUniversity=dsUniversity", "dsUniversity=dsUniversity", "", "", true, "P", false, this);	//대학교

        };

        //주소찾기 (자택)
        this.btn_address1_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupAddress", "", "common::Address.xfdl", "popupAddress1CallBack", this, 10, 58, 500, 550);
        };

        this.popupAddress1CallBack = function (svcId, rtValue)
        {
        	var addData = rtValue.split(":");
        	this.edt_homeZip.set_value(addData[0]);
            this.edt_homeAddr.set_value(addData[1] + addData[2]);
        };

        //주소찾기 (회사)
        this.btn_address_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupAddress", "", "common::Address.xfdl", "popupAddress2CallBack", this, 10, 58, 500, 550);
        };

        this.popupAddress2CallBack = function (svcId, rtValue)
        {
        	var addData = rtValue.split(":");
        	this.edt_comZip.set_value(addData[0]);
            this.edt_comAddr.set_value(addData[1] + addData[2]);
        };

        //저자 조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsSection,
        					dsParam2:this.dsAuthor}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupSearch", objParam, "ed::ED121_SearchF.xfdl", "popupCallBack", this, 10, 58, 350, 250);
        };

        //학교찾기
        this.btn_search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsUniversity}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popuppUniversity", objParam, "ed::EDUniv_SearchF.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.fnisNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        //신규
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	if(this.dsAuthor.rowcount > 0)
        		this.Div00_btn_save_onclick(obj);
        	this.dsAuthor.addRow();
        };

        //tab page data
        this.dsAuthor_onrowposchanged = function(obj,e)
        {
        	if(this.dsAuthor.getRowType(e.row) != 2 && this.dsAuthor.rowcount != 0) // rowtype = 2 : insert
        	{
        		this.chk_1.set_value((this.dsAuthor.getColumn(e.row, "ATHR_CLASSGB")).substring(0, 1));
        		this.chk_2.set_value((this.dsAuthor.getColumn(e.row, "ATHR_CLASSGB")).substring(1, 1));
        		this.chk_3.set_value((this.dsAuthor.getColumn(e.row, "ATHR_CLASSGB")).substring(2, 1));

        		var strArg = "ATHR_IDENTITY=" + this.dsAuthor.getColumn(e.row,"ATHR_IDENTITY");
        		var inds = "";
        		var outds="";

        		//원고료현황
        		inds = "dsAthrWithHold=dsAthrWithHold";
        		outds = "dsAthrWithHold=dsAthrWithHold";
        		this.gfn_TransactionP("search","JSP/ed/athrwithhold_select.jsp", inds, outds, strArg, "Callback_search", false, "P", false, this);

        		//경력사항
        		inds = "dsAthrJobHis=dsAthrJobHis";
        		outds = "dsAthrJobHis=dsAthrJobHis";
        		this.gfn_TransactionP("search","JSP/ed/athrjobhis_select.jsp", inds, outds, strArg, "Callback_search", false, "P", false, this);

        		//저서현황
        		inds = "dsAthrWrtHis=dsAthrWrtHis";
        		outds = "dsAthrWrtHis=dsAthrWrtHis";
        		this.gfn_TransactionP("search","JSP/ed/athrwrthis_select.jsp", inds, outds, strArg, "Callback_search", false, "P", false, this);

        		//계약현황
        		var strArg2 = "ATHR_JUMINNO=" + this.dsAuthor.getColumn(e.row,"ATHR_JUMINNO");
        		inds = "dsAuthorAttend=dsAuthorAttend";
        		outds = "dsAuthorAttend=dsAuthorAttend";
        		this.gfn_TransactionP("search","JSP/ed/ed121f_athrattend.jsp", inds, outds, strArg2, "Callback_search", false, "P", false, this);
        	}else
        	{
        		this.dsAthrWithHold.clearData();
        		this.dsAthrJobHis.clearData();
        		this.dsAthrWithHold.clearData();
        		this.dsAthrFile.clearData();
        		this.dsAuthorAttend.clearData();

        	}
        };

        //저장
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	if(this.fn_chkRecord(this.dsAuthor.row))
        	{
        		inds = "dsAuthor=dsAuthor:U";
        		this.gfn_TransactionP("search","JSP/ed/ed121f_author_dml.jsp", inds, "", "", "Callback_search", false, "P", false, this);
        	}
        };

        //입력값 확인
        this.fn_chkRecord = function(nRow)
        {
        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_AUTHORGB")))
        	{
        		this.alert("저자구분을 선택하세요");
        		this.Cb_AUTHORGB.setFocus();
        		return false;
        	}
        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_JOBKIND")))
        	{
        		this.alert("직업구분을 선택하세요");
        		this.Cb_JOBKIND.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_NAME")))
        	{
        		this.alert("성명을 정확히 입력하세요.");
        		this.edt_name.setFocus();
        		return false;
        	}

        	if((this.dsAuthor.getColumn(nRow, "ATHR_JUMINNO")).length < 13)
        	{
        		this.alert("주민등록번호를 정확히 입력해주세요.");
        		this.medt_juminNo.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_HP")))
        	{
        		this.alert("핸드폰번호를 입력해주세요.");
        		this.edt_hp.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_EMAIL")))
        	{
        		this.alert("이메일 주소를 입력해주세요.");
        		this.edt_email.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_HOMEADDR")))
        	{
        		this.alert("자택주소를 입력해주세요.");
        		this.edt_homeZip.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_COMNAME")))
        	{
        		this.alert("직장명을 입력해주세요.");
        		this.edt_comName.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "UNIV_NAME")))
        	{
        		this.alert("졸업학교를 선택해주세요.");
        		this.edt_comName.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_UNIVSTUDY")))
        	{
        		this.alert("전공을 입력해주세요.");
        		this.edt_subject.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "JOB_CODE")))
        	{
        		this.alert("직종을 선택해주세요.");
        		this.edt_comName.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "BANK_CODE")))
        	{
        		this.alert("은행명을 선택해주세요.");
        		this.Cb_Bank.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "ATHR_ACNTNO")))
        	{
        		this.alert("계좌번호를 입력해주세요.");
        		this.edt_acntNo.setFocus();
        		return false;
        	}

        	if(this.fnisNull(this.dsAuthor.getColumn(nRow, "SECTION_CODE")))
        	{
        		this.alert("관련부서를 선택해주세요.");
        		this.Cb_Section.setFocus();
        		return false;
        	}

        	return true;
        }

        this.Div00_btn_attend_onclick = function(obj,e)
        {
        	var varIdentity = this.dsAuthor.getColumn(this.dsAuthor.row, "ATHR_IDENTITY");
        	var varJuminNo = this.medt_juminNo.value;
        	var objParam = {identity:varIdentity,
        					juminNo:varJuminNo,
        					param1:this.dsAuthorAttend,
        					param2:this.dsSection,
        					param3:this.dsCompany }; //popup 화면으로 전달할 값

        	if( varIdentity == null || varJuminNo == null )
        	{
        		alert("저자 조회 및 선택 후 사용 가능합니다.");
        	}else
        	{
        		this.lfn_showModal("popupSearch", objParam, "ed::EDAuthor_Attendance.xfdl", "popupCallBack", this, 10, 58, 600, 500);
        	}
        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var nRow = this.dsAuthor.rowposition;
        	var iAthr_Identity = this.dsAuthor.getColumn(nRow, "ATHR_IDENTITY");

        	if(iAthr_Identity != null)
        	{
        		this.Div00_btn_save_onclick(obj);

        		var rdUrl, rdParam;

        		rdUrl = gv_urlMrd + "/ed/ED121.mrd";

        		rdParam  = "/rp [" + iAthr_Identity + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);

        	}else
        	{
        		alert("조회된 항목이 없습니다");
        	}

        };


        this.ED121F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED121F_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.Tab00.Tabpage1.form.Grid00);
        	this.lfn_grdAutofit(this.Tab00.Tabpage2.form.Grid00);
        	this.lfn_grdAutofit(this.Tab00.Tabpage3.form.Grid00);
        	this.lfn_grdAutofit(this.Tab00.Tabpage5.form.Grid00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED121F_onload,this);
            this.addEventHandler("onsize",this.ED121F_onsize,this);
            this.addEventHandler("ontimer",this.ED121F_ontimer,this);
            this.Static10.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_address2.addEventHandler("onclick",this.btn_address_onclick,this);
            this.edt_comAddr.addEventHandler("onchanged",this.edtAddress1_onchanged,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_attend.addEventHandler("onclick",this.Div00_btn_attend_onclick,this);
            this.btn_univ.addEventHandler("onclick",this.btn_search_onclick,this);
            this.edt_univ.addEventHandler("onchanged",this.edt_univ_onchanged,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static15.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static14.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_subject.addEventHandler("onchanged",this.edt_univ_onchanged,this);
            this.Static01.addEventHandler("onclick",this.Static00_onclick,this);
            this.chk_1.addEventHandler("onclick",this.CheckBox_onclick,this);
            this.chk_2.addEventHandler("onclick",this.CheckBox_onclick,this);
            this.Static16.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_address1.addEventHandler("onclick",this.btn_address1_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div01_00.form.Radio00.addEventHandler("onitemchanged",this.Div01_00_Radio00_onitemchanged,this);
            this.Static03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_name.addEventHandler("onchanged",this.edt_name_onchanged,this);
            this.Static05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_03_03_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_register.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_permiter.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static20_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.dsAuthor.addEventHandler("onrowposchanged",this.dsAuthor_onrowposchanged,this);
        };
        this.loadIncludeScript("ED121F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
