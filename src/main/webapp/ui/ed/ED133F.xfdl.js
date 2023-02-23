(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED133F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_K", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_H", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_C", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_D", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOSCMst", this);
            obj._setContents("<ColumnInfo><Column id=\"OSCMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"OSCMST_CONTRACTNO\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_SCONTRACTYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_ECONTRACTYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_ADDDOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_ADDPROMISE\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_PERMITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_PERMITEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_PERMITE\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OSCMST_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOSCDtl1", this);
            obj._setContents("<ColumnInfo><Column id=\"OSCMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"OSCDTL1_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OSCDTL1_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"OSCDTL1_MNSCRIPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOSCDtl2", this);
            obj._setContents("<ColumnInfo><Column id=\"OSCMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"OSCDTL2_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"256\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OSCDTL2_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"OSCDTL2_ECS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnscript", this);
            obj._setContents("<ColumnInfo><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_SORT\" type=\"INT\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNSCRIPT_CODE\">02</Col><Col id=\"MNSCRIPT_NAME\">교정</Col><Col id=\"MNSCRIPT_SORT\">1</Col></Row><Row><Col id=\"MNSCRIPT_CODE\">27</Col><Col id=\"MNSCRIPT_NAME\">내용검토</Col><Col id=\"MNSCRIPT_SORT\">2</Col></Row><Row><Col id=\"MNSCRIPT_CODE\">22</Col><Col id=\"MNSCRIPT_NAME\">최종검답</Col><Col id=\"MNSCRIPT_SORT\">3</Col></Row><Row><Col id=\"MNSCRIPT_CODE\">03</Col><Col id=\"MNSCRIPT_NAME\">디자인</Col><Col id=\"MNSCRIPT_SORT\">4</Col></Row><Row><Col id=\"MNSCRIPT_CODE\">04</Col><Col id=\"MNSCRIPT_NAME\">삽화</Col><Col id=\"MNSCRIPT_SORT\">5</Col></Row><Row><Col id=\"MNSCRIPT_CODE\">07</Col><Col id=\"MNSCRIPT_NAME\">컷</Col><Col id=\"MNSCRIPT_SORT\">6</Col></Row><Row><Col id=\"MNSCRIPT_CODE\">05</Col><Col id=\"MNSCRIPT_NAME\">사진</Col><Col id=\"MNSCRIPT_SORT\">7</Col></Row><Row><Col id=\"MNSCRIPT_CODE\">00</Col><Col id=\"MNSCRIPT_NAME\">기타</Col><Col id=\"MNSCRIPT_SORT\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","98%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","172",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","242",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","105",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"7","63","25","38",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("ck_open","156","12","78","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("부서공유");
            obj.set_value("true");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","75","25","606",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("내용추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","75","25","686",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("신규카드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"7","90","25","767",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("결재라인설정");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ed_contractNo","118","60","14.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","ed_contractNo:4","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관련부서");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","102","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작업구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02",null,"59","100","40","ed_contractNo:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계약서 번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","15","145","100","140",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가 약정사항");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_addPromise","Static00_06:3","144","36.48%","140",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","txa_addPromise:4","145","7.81%","140",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("첨부서류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:3","60","14.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_jumin","cb_section:4","58","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주민번호");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","btn_jumin:6","59","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_format("###### - #@@@@@#");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","medt_juminNo:5","59","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저자");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_mnscript","Static00_00:3","102","16.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnscriptName","cb_mnscript:1","102","16.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_00","edt_mnscriptName:2","102","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("계약기간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_satrtDate","Static00_07_00:3","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","cal_satrtDate:9","107","1.41%","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","Static01:-1","103","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","cal_endDate:4","102","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전자계약여부");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_ecs","Static00_13:12","103","5.78%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전자계약");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_addDocument","Static00_07:5","144","36.48%","140",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","btn_name:3","60","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","14","304","98%","100",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_tabindex("0");
            obj.set_border("1px none lightgray");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("리스트검색");
            obj.set_border("1px solid lightgray");
            obj.set_formscrollbartype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","46","18","47","33",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","Static00:20","19","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","cal_sDate:19","23","1.92%","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","Static01:3","18","10.38%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","cal_eDate:36","18","4.07%","31",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("관련부서");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static02:9","18","15.97%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","cb_section:140","21","7.19%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","415","330","305",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsOSCMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관리카드 번호\"/><Cell col=\"1\" text=\"담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:OSCMST_CONTRACTNO\"/><Cell col=\"1\" text=\"bind:EMPLOYEE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","Grid00:30","414","430","306",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("dsOSCDtl2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주민번호\"/><Cell col=\"1\" text=\"저자명\"/><Cell col=\"2\" text=\"전자계약여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_JUMINNO2\"/><Cell col=\"1\" text=\"bind:ATHR_NAME\"/><Cell col=\"2\" text=\"bind:OSCDTL2_ECS\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gd_mnscript","Static00_06:3","142","16.80%","218",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("dsMnscript");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"82\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" colspan=\"2\" text=\"bind:MNSCRIPT_NAME\"/></Band><Band id=\"summary\"><Cell background=\"#ffffff\" border=\"1px solid #dbdee2\"/><Cell col=\"1\" background=\"#ffffff\" text=\"선택적용\" border=\"1px solid #dbdee2\"/><Cell col=\"2\" background=\"#ffffff\" text=\"선택취소\" border=\"1px solid #dbdee2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.ck_open","value","dsSCMst","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ck_ecs","value","dsSCDtl","SCDTL_ECS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cb_section","value","dsOSCMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ed_contractNo","value","dsOSCMst","OSCMST_CONTRACTNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","txa_addPromise","value","dsOSCMst","OSCMST_ADDPROMISE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","txa_addDocument","value","dsOSCMst","OSCMST_ADDDOCUMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medt_juminNo","value","dsOSCDtl2","ATHR_JUMINNO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_name","value","dsOSCDtl2","ATHR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_satrtDate","value","dsOSCMst","OSCMST_SCONTRACTYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_endDate","value","dsOSCMst","OSCMST_ECONTRACTYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_mnscriptName","value","dsOSCDtl1","OSCDTL1_MNSCRIPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED133F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED133F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED133F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED133F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");

        var sSelect, iI_Folw_id;

        this.ED133F_onload = function(obj,e)
        {
        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_02_103");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=" + Eco.decode(sSelect, "1", "P", "2", "P", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//부서

        	this.dsOSCMst.addRow();

        };

        this.fnSectionCallback = function(svcid, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(svcid + "::" + errMsg);
        	else
        		this.dsSection.rowposition = this.dsSection.findRow("SECTION_CODE", sSection_Code);
        };

        //초기화
        this.dsOSCMst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		obj.setColumn(e.row, "OSCMST_DATE", today);
        		obj.setColumn(e.row, "SECTION_CODE", sSection_Code );
        		obj.setColumn(e.row, "SECTION_SHORTCODE", sSection_ShortCode );
        		obj.setColumn(e.row, "OSCMST_SCONTRACTYEAR", null);
        		obj.setColumn(e.row, "OSCMST_ECONTRACTYEAR", null);
        		obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        		obj.setColumn(e.row, "EMPLOYEE_NAME", sName);
        		obj.setColumn(e.row, "OSCMST_PERMITEDATE", null);
        		obj.setColumn(e.row, "OSCMST_PERMITE", 0);
        		obj.setColumn(e.row, "OSCMST_ADDDOCUMENT", null);
        		obj.setColumn(e.row, "OSCMST_ADDPROMISE", null);
        		obj.setColumn(e.row, "OSCMST_PERMITEUSER", null);
        		obj.setColumn(e.row, "OSCMST_DELETE", " ");
        		obj.setColumn(e.row, "I_FLOW_ID", null);
        		obj.setColumn(e.row, "OPEN_CHECK", "1");
        		//obj.setColumn(e.row, "OSCMST_CONTRACTNO", sSection_ShortName + "-" + today.substr(2,4) + "-" + this.dsOSCMst.getColumn(e.row, "SCMST_NO"));

        		this.ed_contractNo.text = sSection_ShortName + "-" + today.substr(2,4) + "-" + obj.getColumn(e.row, "SCMST_NO")
        		//this.dsOSCDtl1.clearData();
        		//this.dsOSCDtl2.clearData();

        		//결재라인 가져오기
        		this.lfn_I_FLOW_ORDER_LOAD("01", 72, sSabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);

        		this.cb_mnscript.text = "";
        		iI_Folw_id = "";

        		this.dsOSCDtl1.addRow();
        		this.dsOSCDtl2.addRow();
        	}
        };

        this.dsOSCDtl1_onrowsetchanged = function(obj,e)
        {
        	obj.setColumn(e.row, "OSCDTL1_SEQ", ((e.row + 1).toString()).padLeft(2, "0"));
        	obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        	obj.setColumn(e.row, "OSCDTL1_DELETE", " ");
        };

        this.dsOSCDtl2_onrowsetchanged = function(obj,e)
        {
        	obj.setColumn(e.row, "OSCDTL2_SEQ", ((obj.rowcount + 1).toString()).padLeft(3, "0"));
        	obj.setColumn(e.row, "ATHR_IDENTITY", null);
        	obj.setColumn(e.row, "ATHR_JUMINNO2", null);
        	obj.setColumn(e.row, "ATHR_NAME", null);
        	obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        	obj.setColumn(e.row, "OSCDTL2_DELETE", " ");
        	obj.setColumn(e.row, "OSCDTL2_ECS", "1");
        };


        //결재라인 설정
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.dsOSCMst.getColumn(this.dsOSCMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("본인이 올린 서류만 결재라인을 설정할 수 있습니다.");
        		return false;
        	}

        	var objParam = {p_fnum : 72,
        					p_ffnum : 7,
        					p_DS_GW_K : this.DS_GW_K,
        					p_DS_GW_H : this.DS_GW_H,
        					p_DS_GW_C : this.DS_GW_C,
        					p_DS_GW_D : this.DS_GW_D};

        	this.lfn_showModal("popupTemp", objParam, "gw::GW120.xfdl", "", this, '', '', 670, 750);
        };

        //결재라인 확인
        this.fn_approval_chk = function()
        {
        	var chkRow = this.dsApproval.findRow("SABUN", sSabun); //자신의 결재라인 체크

        	//결재라인이 설정 되어 있는데 작성자와 사용자가 다르거나 결재라인에 없거나 다음 결재자가 승인한 경우
        	if( (this.dsApproval.rowcount >0 ) && ( (this.dsOSCMst.getColumn(this.dsOSCMst.rowposition, "EMPLOYEE_ID") != sSabun) || (chkRow == -1) || (this.dsApproval.getColumn(chkRow+1, "STATUS") == 1) ) )
        		return false;
        	else
        		return true;
        }

        //신규카드
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	//if(this.dsOSCMst.rowcount > 0)
        	//	this.Div00_btn_save_onclick();

        	this.cb_mnscript.set_text("");
        	for(var i=0; i<this.gd_mnscript.rowcount; i++)
        		this.dsMnscript.setColumn(i, "CHK", false);

        	this.dsApproval.clearData();
        	this.dsOSCMst.clearData();
        	this.dsOSCDtl1.clearData();
        	this.dsOSCDtl2.clearData();

        	this.dsOSCMst.addRow();
        	this.cb_mnscript.setFocus();
        };

        //내용추가
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	if(this.dsOSCMst.getColumn(this.dsOSCMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("본인이 올린 서류만 수정할 수 있습니다.");
        		return false;
        	}
        	//mst 저장 됐을때
        	this.dsOSCDtl2.addRow();
        	this.medt_juminNo.setFocus();
        };

        //조회
        this.Tab00_Tabpage1_btn_search_onclick = function(obj,e)
        {
        	var inds = "dsOSCMst=dsOSCMst";
        	var outds = "dsOSCMst=dsOSCMst";
        	var strArg = "OSCMST_SDATE=" + this.Tab00.Tabpage1.form.cal_sDate.value +
        			     " OSCMST_EDATE=" + this.Tab00.Tabpage1.form.cal_eDate.value +
        				 " SECTION_CODE=" + this.Tab00.Tabpage1.form.cb_section.value +
        				 " EMPLOYEE_ID=" + sSabun +
        				 " SET_OPTION=1" +
        				 " I_FLOW_ID=" + iI_Folw_id +
        				 " COMPETENCE=" + sSelect;

        	this.gfn_TransactionP("search","JSP/ed/ed133f_osc_mst.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
        };

        this.fnSearchCallback = function(svcId, errCode, errMsg)
        {
        	this.Grid00_oncellclick(this.Grid00,this.dsOSCMst.rowposition);
        }

        //세부내역 가져오기
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(this.dsOSCMst.rowcount > 0)
        	{
        		if(this.dsOSCMst.getRowType(e.row) != 2)
        		{
        			var strArg = "OSCMST_ID=" + this.dsOSCMst.getColumn(e.row, "OSCMST_ID");

        			this.gfn_TransactionP("search","JSP/ed/ed133f_osc_dtl1.jsp", "dsOSCDtl1=dsOSCDtl1", "dsOSCDtl1=dsOSCDtl1", strArg, "fnDtl1Callback", false, "P", false, this);
        			this.gfn_TransactionP("search","JSP/ed/ed133f_osc_dtl2.jsp", "dsOSCDtl2=dsOSCDtl2", "dsOSCDtl2=dsOSCDtl2", strArg, "fnDtl2Callback", false, "P", false, this);

        			iI_Flow_id = this.dsOSCMst.getColumn(e.row, "I_FLOW_ID");

        			if(iI_Flow_id != null)
        				this.lfn_Approval_Select(iI_Flow_id, this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//결재라인 가져오기
        		}
        	}
        	else
        	{
        		this.dsOSCDtl1.clearData();
        		this.dsOSCDtl2.clearData();
        	}
        };

        this.fnDtl1Callback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMSg);
        	else
        	{
        		this.dsOSCDtl1.filter("OSCDTL1_DELETE!='D'");
        		this.cb_mnscript.set_value("");

        		if(this.dsOSCDtl1.rowcount > 0)
        		{
        			var strValue = "";

        			//작업구분 초기화
        			for(var i=0; i<this.dsMnscript.rowcount; i++)
        				this.dsMnscript.setColumn(i, "CHK", "0");

        			//작업구분 넣기
        			for(var j=0; j<this.dsOSCDtl1.rowcount; j++)
        			{
        				for(var z=0; z<this.dsMnscript.rowcount; z++)
        				{
        					if(this.dsOSCDtl1.getColumn(j, "MNSCRIPT_CODE") == this.dsMnscript.getColumn(z, "MNSCRIPT_CODE"))
        					{
        						this.dsMnscript.setColumn(z, "CHK", "1");
        						strValue += this.dsMnscript.getColumn(z, "MNSCRIPT_NAME") + ",";
        					}
        				}
        			}
        			this.cb_mnscript.set_text(strValue.substr(0,strValue.length-1));
        		}
        	}
        }

        this.fnDtl2Callback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.dsOSCDtl2.filter("OSCDTL2_DELETE!='D'");
        }

        //저장
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	var rowType = this.dsOSCMst.getRowType(this.dsOSCMst.rowposition);

        	if(this.fn_approval_chk())
        	{
        		if(rowType == 2 || rowType == 4) //insert || update
        		{
        			if(this.fn_mst_save(rowType))
        			{
        				this.fn_dtl1_save();
        				this.fn_dtl2_save();
        			}
        		}
        		else
        		{
        			this.fn_dtl1_save();
        			this.fn_dtl2_save();
        		}
        	}
        	else
        		alert("본인이 작성하지 않았거나 결재진행 중인 문서는 수정 및 삭제 할 수 없습니다.");
        };

        //MST 저장
        this.fn_mst_save = function(rowType)
        {
        	var setSave = true;

        	if( (rowType != "delete") && (this.fn_mst_checkRow(this.dsOSCMst.rowposition) == false) )
        	{
        		setSave = false;
        		return false;
        	}

        	if(setSave)
        	{
        		var strUrl = "JSP/ed/ed133f_osc_mst_dml.jsp";
        		var inds = "dsOSCMst=dsOSCMst:U";

        		this.gfn_TransactionP(rowType, strUrl, inds, "", "", "fnMstSaveCallback", false, "P", false, this);

        		return true;
        	}
        }

        this.fnMstSaveCallback = function(svcId, errCode, errMsg, gv_rt_mst_id, gv_rt_mst_no, gv_rt_i_flow_id )
        {
        	var open_i_flow_id, strArg;
        	var nRow = this.dsOSCMst.rowposition;

        	if(errCode != 0)
        		alert(errMsg);
        	else if(svcId != "delete");
        	{
        		if(svcId == 2)	//insert
        		{
        			var rt_OSCMST_ID =nexacro.getApplication().gv_rt_mst_id;
        			var rt_OSCMST_NO = nexacro.getApplication().gv_rt_mst_no;
        			open_i_flow_id = nexacro.getApplication().gv_rt_i_flow_id;

        			trace(rt_OSCMST_ID + "; "  + rt_OSCMST_NO + "; " + open_i_flow_id);

        			this.dsOSCMst.setColumn(nRow, "OSCMST_ID", rt_OSCMST_ID);
        			this.dsOSCMst.setColumn(nRow, "OSCMST_NO", rt_OSCMST_NO);
        			this.dsOSCMst.setColumn(nRow, "I_FLOW_ID", open_i_flow_id);

        			this.dsOSCMst.setColumn(nRow, "OSCMST_CONTRACTNO",
        									sSection_ShortName + "-" +
        									this.dsOSCMst.getColumn(nRow, "OSCMST_DATE").substr(2,4) + "-" +
        									this.dsOSCMst.getColumn(nRow, "OSCMST_NO") );

        			this.dsOSCMst.setRowType(nRow, 1);
        		}
        		else if(svcId == 4)	//update
        		{
        			open_i_flow_id = this.dsOSCMst.getColumn(nRow, "I_FLOW_ID");
        		}

        		if(this.Div00.form.ck_open.visible == true)
        		{
        			if(this.Div00.form.ck_open.value == true)
        				strArg = "i_flow_id=" + open_i_flow_id  + " open_check=1";
        			else
        				strArg = "i_flow_id=" + open_i_flow_id  + " open_check=0";

        			this.gfn_TransactionP("open_chk", "JSP/gw/SQL_GW110_OPEN_CHECK.jsp", "", "", strArg, "", false, "P", false, this);
        		}
        		this.lfn_I_FLOW_ORDER_SAVE(open_i_flow_id, this.ds_flow_order, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D); //결재라인 저장
        	}
        }

        this.fn_mst_checkRow = function(nRow)
        {
        	if(nRow == -1)
        		return false;

        	if(this.dsOSCMst.getColumn(nRow, "SECTION_CODE") == null)
        	{
        		alert("부서를 선택해주세요");
        		this.cb_section.setFocus();
        		return false;
        	}

        	if(this.dsOSCMst.getColumn(nRow, "OSCMST_SCONTRACTYEAR") == null)
        	{
        		alert("계약기간을 선택해주세요");
        		this.cal_satrtDate.setFocus();
        		return false;
        	}

        	if(this.dsOSCMst.getColumn(nRow, "OSCMST_ECONTRACTYEAR") == null)
        	{
        		alert("계약기간을 선택해주세요");
        		this.cal_endDate.setFocus();
        		return false;
        	}

        	if( (this.dsApproval.rowcount <= 0) && (this.DS_GW_K.rowcount <= 0)  )
        	{
        		alert("결재라인을 선택해주세요");
        		this.Div00_btn_tempchk_onclick();
        		return false;
        	}
        }

        this.fn_dtl1_save = function()
        {
        	var nRow = this.dsOSCDtl1.rowposition;
        	var setSave = true;

        	if(this.fn_dtl1_checkRow() == false)
        	{
        		setSave = false;
        		return false;
        	}

        	for(var i=0; i< this.dsOSCDtl1.rowcount; i++)
        	{
        		this.dsOSCDtl1.setColumn(i, "OSCMST_ID", this.dsOSCMst.getColumn(this.dsOSCMst.rowposition, "OSCMST_ID"));
        	}

        	if(setSave)
        	{
        		var strUrl = "JSP/ed/ed133f_osc_dtl1_dml.jsp"
        		var inds = "dsOSCDtl1=dsOSCDtl1:U";

        		this.gfn_TransactionP("save", strUrl, inds, "", "", "", false, "P", false, this);
        	}

        }

        this.fn_dtl1_checkRow = function()
        {
        	var chk = false;

        	for(var i=0; i<this.dsMnscript.rowcount; i++)
        	{
        		if(this.dsMnscript.getColumn(i, "CHK") == "1")
        			chk = true;
        	}

        	if(chk == false)
        	{
        		alert("선택된 작업이 없습니다. 해당작업구분을 선택해주세요.");
        		return chk;
        	}

        	return chk;
        }

        this.fn_dtl2_save = function()
        {
        	var setSave = true;
        	var nRow = this.dsOSCDtl2.rowposition;

        	for(var i=0; i<this.dsOSCDtl2.rowcount; i++)
        	{
        		this.dsOSCDtl2.setColumn(i, "OSCMST_ID", this.dsOSCMst.getColumn(this.dsOSCMst.rowposition, "OSCMST_ID"));

        		if(this.fn_dtl2_checkRow(i) == false)
        		{
        			setSave = false;
        			return false;
        		}
        	}

        	if(setSave)
        	{
        		var strUrl = "JSP/ed/ed133f_osc_dtl2_dml.jsp"
        		var inds = "dsOSCDtl2=dsOSCDtl2:U";

        		this.gfn_TransactionP("save", strUrl, inds, "", "", "", false, "P", false, this);
        	}
        }

        this.fn_dtl2_checkRow = function(nRow)
        {
        	if(nRow = -1)
        		return true;

        	if(this.dsOSCDtl2.getColumn(nRow, "ATHR_IDENTITY") == null)
        	{
        		alert("저자를 선택해주세요");
        		this.btn_name_onclick();
        		return false;
        	}
        	return true;
        }

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {
        	if(this.fn_approval_chk())
        	{
        		alert("전체삭제를 할 경우 복원할 수 없습니다.\n\n" +
        			  "새로운 내용을 추가하실 경우는 삭제하지 마시고 신규버튼을 눌러 작업해 주십시요.");
        		this.lfn_showModal("popupDelete", "", "ed::EDMstDtlCancel_ConformF.xfdl", "popupDeleteCallBack", this, 10, 58, 280, 100);
        	}
        	else
        		alert("본인이 작성하지 않았거나 결재진행 중인 문서는 수정 및 삭제 할 수 없습니다.");
        };

        this.popupDeleteCallBack = function(svcId, rt_value)
        {
        	if(rt_value == "전체")
        	{
        		this.dsOSCMst.deleteRow(this.dsOSCMst.rowposition);
        		this.fn_mst_save("delete");
        		this.dsOSCDtl1.clearData();
        		this.dsOSCDtl2.clearData();
        	}
        	else if(rt_value == "내용")
        	{
        		this.dsOSCDtl2.setColumn(this.dsOSCDtl2.rowposition, "OSCDTL2_DELETE", "D");
        		this.dsOSCDtl2.filter("OSCDTL2_DELETE!='D'");
        		this.fn_dtl2_save();
        	}
        }

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupPtrint", "", "ed::ED133_Print_ConformF.xfdl", "popupPrintCallBack", this, 10, 58, 190, 220);
        };

        this.popupPrintCallBack = function(svcId, rt_value)
        {
        	var nRow = this.dsOSCMst.rowposition;
        	var nOSCMST_ID = this.dsOSCMst.getColumn(nRow, "OSCMST_ID");
        	var i_flow_id = this.dsOSCMst.getColumn(nRow, "I_FLOW_ID");
        	var rdUrl, rdParam;

        	if( nOSCMST_ID != null)
        	{
        		if(rt_value == "편집외주약정품의서")
        		{
        			rdUrl = urlMrd + "/ed/ED133_0.mrd";
        			rdParam  = "/rp [1]["+ i_flow_id + "]";

        			this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        		}
        		else if(rt_value == "외주약정서 (공동)")
        		{
        			rdUrl = gv_urlMrd + "/ed/ED133_1.mrd";
        			rdParam  = "/rp ["+ nOSCMST_ID + "]["
        							+ this.dsOSCDtl2.getColumn(this.dsOSCDtl2.rowposition, "OSCDTL2_SEQ") + "][A]";

        			this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        		}
        		else if(rt_value == "외주약정서 (개별)")
        		{
        			rdUrl = gv_urlMrd + "/ed/ED133_1.mrd";
        			rdParam  = "/rp ["+ nOSCMST_ID + "]["
        							+ this.dsOSCDtl2.getColumn(this.dsOSCDtl2.rowposition, "OSCDTL2_SEQ") + "][P]";

        			this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        		}
        		else if(rt_value == "전자계약서 보기")
        		{
        			//C99995 (법무) 계정의 경우 부서코드를 못가져와서 setColumn 해줌
        			var sRow = this.dsApproval.findRow("SABUN", "C99995");
        			this.dsApproval.setColumn(sRow, "SECTION_CODE", "96600");

        			if(this.dsApproval.getColumn(sRow, "STATUS") == "1")
        			{
        				if(this.dsOSCDtl2.getMax("OSCDTL2_ECS") == "1")
        				{
        					var Url = "https://ecs.chunjae.co.kr/loginSave.do?loginGb=login&scmst_Id=" +
        					this.dsOSCMst.getColumn(this.dsOSCMst.rowposition, "OSCMST_ID") + "&mode=save";
        					system.execBrowser(Url);
        				}else
        					alert("전자계약을 확정한 저자가 없습니다.");
        			}else
        				alert("결재완료된 약정서가 아닙니다. 최종결재 후 전자계약서를 볼 수 있습니다");
        		}

        	}else
        		alert("조회된 항목이 없습니다");
        }

        //저자 착기
        this.btn_name_onclick = function(obj,e)
        {
        	this.lfn_showModal("popuppAuthor", "", "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        };

        //찾은 저자 데이터 넣어주기
        this.fn_setAuthorValue = function(rtArray)
        {
        	var nRow = this.dsOSCDtl2.rowposition;

        	this.dsOSCDtl2.setColumn(nRow, "ATHR_NAME", rtArray[0]);
        	this.dsOSCDtl2.setColumn(nRow, "ATHR_IDENTITY", rtArray[10]);
        	this.dsOSCDtl2.setColumn(nRow, "ATHR_JUMINNO2", rtArray[6]);
        }

        //멀티콤보구현
        this.cb_mnscript_ondropdown = function(obj,e)
        {
        	if(this.gd_mnscript.visible == false)
        		this.gd_mnscript.set_visible(true);
        	else
        	{
        		this.gd_mnscript.set_visible(false);
        		this.fn_comboEdit_set();
        	}
        };

        this.gd_mnscript_onsummaryclick = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		this.gd_mnscript.set_visible(false);
        		this.fn_comboEdit_set();
        	}
        	else if(e.cell == 2)
        	{
        		for(var i=0; i<obj.rowcount; i++)
        			this.dsMnscript.setColumn(i, "CHK", false);
        	}
        };

        this.fn_comboEdit_set = function()
        {
        	var strTxt = "";
        	var script_name = "";

        	for(var i=0; i<this.dsOSCDtl1.rowcount; i++)
        	{
        		if(this.dsOSCDtl1.getColumn(i, "MNSCRIPT_CODE") == "00")
        			script_name	= this.dsOSCDtl1.getColumn(i, "OSCDTL1_MNSCRIPT");
        	}

        	this.dsOSCDtl1.clearData();

        	for(var i=0; i<this.dsMnscript.rowcount; i++)
        	{
        		if(this.dsMnscript.getColumn(i, "CHK") == 1)
        		{
        			var nRow = this.dsOSCDtl1.addRow();
        			this.dsOSCDtl1.setColumn(nRow, "MNSCRIPT_CODE", this.dsMnscript.getColumn(i, "MNSCRIPT_CODE"));

        			strTxt += this.dsMnscript.getColumn(i, "MNSCRIPT_NAME") + ",";

        			//작업내용을 기타로 선택시 내용 넣을 수 있도록 활성화
        			if(this.dsMnscript.getColumn(i, "MNSCRIPT_CODE") == "00")
        			{
        				this.dsOSCDtl1.setColumn(nRow, "OSCDTL1_MNSCRIPT", script_name);
        				this.edt_mnscriptName.set_enable(true);
        			}
        		}
        		else
        			this.edt_mnscriptName.set_enable(false);
        	}

        	this.cb_mnscript.set_text(strTxt.substr(0,strTxt.length-1));
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED133F_onload,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_06.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_jumin.addEventHandler("onclick",this.btn_name_onclick,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
            this.cb_mnscript.addEventHandler("ondropdown",this.cb_mnscript_ondropdown,this);
            this.Static00_07_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_13.addEventHandler("onclick",this.Static00_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btn_search.addEventHandler("onclick",this.Tab00_Tabpage1_btn_search_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.gd_mnscript.addEventHandler("oncellclick",this.gd_mnscript_oncellclick,this);
            this.gd_mnscript.addEventHandler("onsummaryclick",this.gd_mnscript_onsummaryclick,this);
            this.dsOSCMst.addEventHandler("onrowsetchanged",this.dsOSCMst_onrowsetchanged,this);
            this.dsOSCMst.addEventHandler("onrowposchanged",this.dsOSCMst_onrowposchanged,this);
            this.dsOSCDtl1.addEventHandler("onrowsetchanged",this.dsOSCDtl1_onrowsetchanged,this);
            this.dsOSCDtl2.addEventHandler("onrowsetchanged",this.dsOSCDtl2_onrowsetchanged,this);
        };
        this.loadIncludeScript("ED133F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
