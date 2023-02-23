(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW551");
            this.set_titletext("New Form");
            this.set_color("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(810,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_flow_header", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"F_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SECURITY\" type=\"STRING\" size=\"256\"/><Column id=\"DURING\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"FILES\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FINAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAMES\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_KYULNO", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_header", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILES\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"OVERCHK\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_FLOW_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RDTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/><Column id=\"MI_CO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_damdang", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user_info", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GW_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PURPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"INS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","25","12","245","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시스템 계정 신청서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_open","355","34","83","18",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("부서공유");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_value("true");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"30","63","25","228",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,"30","63","25","158",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("발송");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempsave",null,"30","63","25","90",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("임시저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"30","63","25","24",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static","15","60","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("문서제목");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("결재자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","210","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("합의자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","403","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("최종 결재자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","599","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("담당자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","107","60","589","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_color("#000000");
            obj.set_text("[시스템 계정 신청서]");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"63","90","25","22",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("임시결재라인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","107","93","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","107","118","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","107","142","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","107","167","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03","107","193","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_K","128","93","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("DS_GW_K");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","303","94","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","303","119","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","303","143","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","303","168","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_00","303","194","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_H","324","94","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("DS_GW_H");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_05","496","92","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","496","117","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","496","141","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_01","496","166","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_01","496","192","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_C","517","92","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("DS_GW_C");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_06","694","93","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","694","118","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","694","142","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_02","694","167","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_02","694","193","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_D","717","93","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("DS_GW_D");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15","222","777","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("신 청 정 보");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","15","291","777","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("신 청 내 역");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","209","253","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("부서");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","407","253","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("사번");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_02","605","253","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("내선번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03","15","323","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("신청ID");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_00","412","324","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("사용시스템");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_01","15","357","85","60",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("사용목적\r\n(상세히 작성)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","14","427","780","112",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_border("3px solid #7fb39d");
            obj.set_value("▣참고사항▣   \n  - 작성된 사용 목적으로 라이선스를 신규 발급할지 이관할지 판단이 되므로 상세히 기술 바랍니다.   \n  - 최종 결재 완결 후 다음날부터 Groupware, ERP 사용 가능합니다.  \n  - 생성된 ID의 초기패스워드는 \'chunjae12#$\'로 등록 됩니다. 최초 로그인 후 패스워드 변경 바랍니다.  \n  - 사원을 부여받은 직원만 계정 신청이 가능합니다.      \n   (파견, 아르바이트, 단기 계약직 등 특수근로형태의 직원 계정은 신청 불가) ");
            obj.set_color("#000000");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","16","253","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("성명");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","97","253","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse","295","253","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","493","253","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_gw","503","325","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("Groupware(천재오피스)");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_erp","661","325","139","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("ERP(통합관리시스템)");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","101","324","245","29",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_color("#000000");
            obj.set_text("영문자+숫자 5자이상 (특수문자X)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chk","348","323","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("중복검사");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","101","357","689","60",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("chk_result","46","300","229","18",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_color("#cd0808");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            obj.set_text("▣영문자 + 숫자 5자이상 (특수문자X)▣");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tel","691","253","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",810,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_id","value","ds_user_info","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_tel","value","ds_user_info","TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_sabun","value","ds_user_info","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_buse","value","ds_user_info","SECTION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_name","value","ds_user_info","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","TextArea01","value","ds_user_info","USE_PURPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","chk_gw","value","ds_user_info","GW_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","chk_erp","value","ds_user_info","ERP_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_title","value","ds_user_info","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","chk_open","value","ds_flow_header","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW551.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW551.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW551.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW551.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var MD;
        var saveChk = "";
        var rtSave_yn = "N";

        var gubun;
        var f_num;
        var f_fnum;
        var f_name;

        var rt_i_flow_id;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_buseNm = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSENM");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var gv_shortNm = nexacro.getApplication().gds_userinfo.getColumn(0,"SHORTNAME");
        var gv_jikwiNm = nexacro.getApplication().gds_userinfo.getColumn(0,"JIKWINM");

        var d = new Date();
        var today = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        this.GW551_onload = function(obj,e)
        {
        	//GW200 에서 넘겨준 값
        	gubun = this.parent.p_gubun;
        	f_num = this.parent.p_fnum;
        	f_fnum = this.parent.p_ffnum;
        	f_name = this.parent.p_fname;

        	//GW130 에서 넘겨준 값
        	this.DS_GW_KYULNO.copyData(this.parent.dsParam1);
        	this.ds_select_header.copyData(this.parent.dsParam2);

        	//결재라인 초기화
        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();
        	this.DS_GW_U.clearData();

        	if(this.DS_GW_KYULNO.rowcount > 0 ) //수정시
        	{
        		this.btn_delete.set_visible(true);
        		this.btn_ok.set_visible(true);
        		this.btn_tempsave.set_visible(true);
        		this.edt_id.set_enable(false);

        		MD = '1';
        	}

        	if(MD == '1')	//수정, 재기안일 경우
        	{
        		rt_i_flow_id = this.DS_GW_KYULNO.getColumn(0,"I_FLOW_ID");

        		var strUrl = "JSP/gw/SQL_GW551_SELECT.jsp";
        		var inds = "ds_user_info=ds_user_info";
        		var outds = "ds_user_info=ds_user_info";
        		var strArg = "i_flow_id="+nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);

        		var str_url = "JSP/gw/SQL_GW110_02M_new.jsp";
        		var in_ds = "ds_flow_header=ds_flow_header";
        		var out_ds = "ds_flow_header=ds_flow_header";
        		var str_arg = "gubun=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"GUBUN"));
        			str_arg += " i_flow_id =" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnSelectHeaderCallback", false, "P", false, this);

        	}else	//개인결재라인 가져오기 (개인결재라인 X -> 관리자가 설정해놓은 결재라인 가져옴)
        	{
        		this.edt_title.set_value("[시스템 계정 신청서]");

        		this.ds_user_info.addRow();
        		this.ds_user_info.setColumn(this.ds_user_info.rowposition, "INS_SABUN", gv_sabun);
        		this.ds_user_info.setColumn(this.ds_user_info.rowposition, "GW_USE_YN", "Y");
        		this.ds_user_info.setColumn(this.ds_user_info.rowposition, "ERP_USE_YN", "Y");

        		this.lfn_I_FLOW_ORDER_LOAD('01', f_num, gv_sabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        	}
        };

        this.fnSelectHeaderCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.chk_open.set_value(this.ds_flow_header.getColumn(0, "OPEN_CHECK"));

        		var strUrl   = "JSP/gw/SQL_GW110_02MO.jsp";
        		var inds = "ds_flow_order=ds_flow_order"
        			     + " ds_damdang=ds_damdang";
        		var outds = "ds_flow_order=ds_flow_order"
        			      + " ds_damdang=ds_damdang";
        		var strArg  = "GUBUN=01" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"GUBUN"));
        			strArg += " I_FLOW_ID=" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectOrderCallback", false, "P", false, this);

        	}
        }

        this.fnSelectOrderCallback = function (svcId, errCode, errMsg)
        {
        	//this.fn_compEnable();

        	if(this.ds_flow_order.rowcount != 0)
        	{
        		for(var iRow=0; iRow <this.ds_flow_order.rowcount; iRow++)
        		{
        			if(this.ds_flow_order.getColumn(iRow,"KIND") == "0")
        			{
        				this.DS_GW_U.addRow();

        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "GUBUN", this.ds_flow_header.getColumn(0, "GUBUN"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "NO", "0");
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "BUSECD", "");
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "BUSE", this.ds_flow_order.getColumn(iRow,"BUSOR"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "JIKWI", this.ds_flow_order.getColumn(iRow,"JIKCHAK"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "SABUN", this.ds_flow_order.getColumn(iRow,"SABUN"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "NAME", this.ds_flow_order.getColumn(iRow,"F_NAME"));
        			}

        			if(this.ds_flow_order.getColumn(iRow,"KIND") == "1")
        			{
        				this.DS_GW_K.addRow();

        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "NO", "1");
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "BUSECD", "");
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "BUSE", this.ds_flow_order.getColumn(iRow,"BUSOR"));
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "JIKWI", this.ds_flow_order.getColumn(iRow,"JIKCHAK"));
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "SABUN", this.ds_flow_order.getColumn(iRow,"SABUN"));
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "NAME", this.ds_flow_order.getColumn(iRow,"F_NAME"));
        			}

        			if(this.ds_flow_order.getColumn(iRow,"KIND") == "2")
        			{
        				this.DS_GW_H.addRow();

        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "NO", "2");
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "BUSECD", "");
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "BUSE", this.ds_flow_order.getColumn(iRow,"BUSOR"));
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "JIKWI", this.ds_flow_order.getColumn(iRow,"JIKCHAK"));
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "SABUN", this.ds_flow_order.getColumn(iRow,"SABUN"));
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "NAME", this.ds_flow_order.getColumn(iRow,"F_NAME"));
        			}

        			if(this.ds_flow_order.getColumn(iRow,"KIND") == "3")
        			{
        				this.DS_GW_C.addRow();

        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "NO", "3");
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "BUSECD", "");
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "BUSE", this.ds_flow_order.getColumn(iRow,"BUSOR"));
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "JIKWI", this.ds_flow_order.getColumn(iRow,"JIKCHAK"));
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "SABUN", this.ds_flow_order.getColumn(iRow,"SABUN"));
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "NAME", this.ds_flow_order.getColumn(iRow,"F_NAME"));
        			}

        			if(this.ds_flow_order.getColumn(iRow,"KIND") == "4")
        			{
        				this.DS_GW_D.addRow();

        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NO", "4");
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSECD", "");
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSE", this.ds_flow_order.getColumn(iRow,"BUSOR"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "JIKWI", this.ds_flow_order.getColumn(iRow,"JIKCHAK"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "SABUN", this.ds_flow_order.getColumn(iRow,"SABUN"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NAME", this.ds_flow_order.getColumn(iRow,"F_NAME"));
        			}
        		}

        		//수정 or 임시저장 폼 로드시 담당자가 있으면 호출
        		if(this.ds_damdang.rowcount != 0)
        		{
        			this.DS_GW_D.addRow();

        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NO", "4");
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSECD", "");
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSE", this.ds_damdang.getColumn(iRow,"BUSOR"));
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "JIKWI", this.ds_damdang.getColumn(iRow,"JIKCHAK"));
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "SABUN", this.ds_damdang.getColumn(iRow,"SABUN"));
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NAME", this.ds_damdang.getColumn(iRow,"F_NAME"));
        		}
        	}
        };


        //초기화
        this.fnClear = function()
        {
        	this.ds_flow_header.clearData();
        	this.ds_flow_header.addRow();
        	this.ds_flow_order.clearData();
        	this.ds_flow_order.addRow();

        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();

        	this.DS_GW_KYULNO.clearData();
        	this.ds_damdang.clearData();

        }

        //사원찾기
        this.btn_name_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupSearch", "", "pd::PD202_HRSearchF.xfdl", "popupCallBack", this, '', '', 350, 360);
        };

        //ID 중복검사
        this.btn_chk_onclick = function(obj,e)
        {
        	if(this.ds_user_info.getColumn(this.ds_user_info.rowposition, "ID") == null)
        	{
        		alert("ID를 입력 후 중복체크 하시길 바랍니다.");
        		return false;
        	}

        	var str_url = "JSP/gw/SQL_GW_USER_ACCOUNT_CHK.jsp";

        	var str_arg = "ID =" + nexacro.wrapQuote(this.ds_user_info.getColumn(0,"ID"));
        		str_arg += " SABUN =" + nexacro.wrapQuote(this.ds_user_info.getColumn(0,"SABUN"));
        		str_arg += " I_FLOW_ID =" + nexacro.wrapQuote(rt_i_flow_id);

        	this.gfn_TransactionP("select", str_url, "", "", str_arg, "fnchkCallback", false, "P", false, this);

        };

        this.fnchkCallback = function (svcId, errCode, errMsg, gv_rt_value)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		var rt_chkValue =nexacro.getApplication().gv_rt_value;

        		if(rt_chkValue == 0)
        		{
        			alert("사용하실 수 있는 ID입니다");
        			rtSave_yn = "Y";
        			this.edt_id.set_border("2px solid #63ce75");
        		}
        		else if(rt_chkValue == 9)
        		{
        			alert("이미 계정을 신청했습니다");
        			rtSave_yn = "N";
        			this.edt_id.set_border("2px solid #cd0808");
        			this.edt_id.setFocus();
        		}
        		else
        		{
        			alert("중복된 ID입니다. 다시 조회 하세요");
        			rtSave_yn = "N";
        			this.edt_id.set_border("2px solid #cd0808");
        			this.edt_id.setFocus();
        		}
        	}
        };

        this.edt_id_onsetfocus = function(obj,e)
        {
        	if(this.edt_id.text == "")
        		rtSave_yn = "N";
        };

        this.edt_id_onchanged = function(obj,e)
        {
        	var pStr = e.posttext;
        	var chkStr = "`~!@#$%^&*+()_=[]{}:;'\|<>?/,.-";

	for(var i=0; i<pStr.length;i++)
        	{
        		var iStr = pStr.substr(i,1);
        		if(chkStr.indexOf(iStr) > 0)
        		{
        			alert("ID에 특수문자를 사용할수 없습니다.\n다시입력하여주세요.");
        			this.edt_id.set_value("");
        			break;
        		}
        	}
        };

        //삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	var strUrl   = "JSP/gw/SQL_GW_DEL.jsp";
        	var strArg = "status=" + nexacro.wrapQuote("update")
        			   + " gubun1=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0, "GUBUN"))
        			   + " i_flow_id=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID"))
        			   + " owner=" + nexacro.wrapQuote(this.ds_select_header.getColumn(0, "OWNER"))
        			   + " tablename=" + nexacro.wrapQuote(this.ds_select_header.getColumn(0, "TABLENAME"))
        			   + " col_name=" + nexacro.wrapQuote(this.ds_select_header.getColumn(0, "COL_NAME"));

        	this.gfn_TransactionP("delete", strUrl, "", "", strArg, "fnDeleteHeaderCallback", false, "P", false, this);
        };

        this.fnDeleteHeaderCallback =function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		var strUrl   = "JSP/gw/SQL_GW_DEL_ID_REQUEST.jsp";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0, "i_flow_id"));
        		this.gfn_TransactionP("delete", strUrl, "", "", strArg, "fnDeleteCallback", false, "P", false, this);
        	}
        }

        this.fnDeleteCallback = function(svcId, errCode, errMsg)
        {
        	MD = "";
        	alert("삭제가 완료되었습니다.");
        	this.fnClear();
        	this.btn_close_onclick();
        }

        //발송
        this.btn_ok_onclick = function(obj,e)
        {
        	if(this.DS_GW_K.rowcount < 1)
        	{
        		alert("결재라인을 선택해주세요.");
        		this.btn_tempchk_onclick();
        		return false;
        	}

        	saveChk = "1";
        	this.fn_save();
        };

        //임시저장
        this.btn_tempsave_onclick = function(obj,e)
        {
        	saveChk = "0";
        	this.fn_save();
        };

        //I_FLOW_HEADER 저장
        this.fn_save = function ()
        {
        	if ( this.edt_title.value == "" )
        	{
        		alert("문서 제목을 꼭 입력하셔야 합니다.");
        		return false;
        	}

        	if ( this.edt_name.value == "" )
        	{
        		alert("이름을 선택해주세요.");
        		return false;
        	}

        	if ( this.edt_id.value == "" )
        	{
        		alert("ID를 입력하고, 중복검사까지 해야 합니다.");
        		return false;
        	}

        	if ( rtSave_yn == "N")
        	{
        		alert("ID 중복검사를 해주세요.");
        		return false;
        	}

        	if(MD != "1") //신규건이면
        		this.ds_flow_header.addRow();

        	this.ds_flow_header.setColumn(0, "GUBUN", "01");
        	this.ds_flow_header.setColumn(0, "SABUN", gv_sabun);
        	this.ds_flow_header.setColumn(0, "WDATE", today);
        	this.ds_flow_header.setColumn(0, "TITLE", nexacro.trim(this.edt_title.value)+ " " + nexacro.trim(gv_buseNm) + " " + nexacro.trim(gv_sabun) + " " + nexacro.trim(gv_name));
        	this.ds_flow_header.setColumn(0, "SECURITY", "0");
        	this.ds_flow_header.setColumn(0, "DURING", "5");
        	this.ds_flow_header.setColumn(0, "FILES", "0");
        	this.ds_flow_header.setColumn(0, "F_TYPE", f_num);
        	this.ds_flow_header.setColumn(0, "STORE", "0");
        	this.ds_flow_header.setColumn(0, "CO_SEQ", gv_shortNm + "-" + today.substr(2,4) + "-");
        	this.ds_flow_header.setColumn(0, "REF_NO", "N");
        	this.ds_flow_header.setColumn(0, "FINAL_COUNT", "1");
        	this.ds_flow_header.setColumn(0, "SAVE", saveChk);
        	this.ds_flow_header.setColumn(0, "STATUS", "");
        	this.ds_flow_header.setColumn(0, "F_PATH", "");
        	this.ds_flow_header.setColumn(0, "F_NAME", "");

        	var strUrl   = "JSP/gw/SQL_GW551_header.jsp";
        	var inds = "ds_flow_header=ds_flow_header:A";

        	this.gfn_TransactionP("save", strUrl, inds, "", "", "fnSaveHeaderCallback", false, "P", false, this);
        };

        //부서공유 및 시스템계정신청서 데이터 저장
        this.fnSaveHeaderCallback = function (svcId, errCode, errMsg, gv_rt_i_flow_id)
        {
        	if(errCode !=0)
        		alert(errMsg)
        	else
        	{
        		rt_i_flow_id =nexacro.getApplication().gv_rt_i_flow_id;

        		var open_chk;
        		if(this.chk_open.value == true)
        			open_chk = "1";
        		else
        			open_chk = "0"

        		var strUrl   = "JSP/gw/SQL_GW110_OPEN_CHECK.jsp";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id)
        					+ " open_check=" + nexacro.wrapQuote(open_chk);

        		this.gfn_TransactionP("save", strUrl, "", "", strArg, "", false, "P", false, this);

        		strUrl   = "JSP/gw/SQL_GW551_DML.jsp";
        		strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id);
        		var inds = "ds_user_info=ds_user_info";
        		var outds = "ds_user_info=ds_user_info";

        		this.gfn_TransactionP("save", strUrl, inds, outds, strArg, "fnDMLCallback", false, "P", false, this);
        	}
        };

        //I_FLOW_ORDER 저장
        this.fnDMLCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg)
        	else
        	{
        		var seqCnt, nRow;

        		this.ds_flow_order.clearData();
        		this.ds_flow_order.addRow();

        		this.ds_flow_order.setColumn(0, "KIND", "0");
        		this.ds_flow_order.setColumn(0, "SEQ", "1");
        		this.ds_flow_order.setColumn(0, "SABUN", gv_sabun);
        		this.ds_flow_order.setColumn(0, "F_COMMENT", "");
        		this.ds_flow_order.setColumn(0, "F_NEXT", "");
        		this.ds_flow_order.setColumn(0, "STATUS", "1");
        		this.ds_flow_order.setColumn(0, "STORE", "0");
        		this.ds_flow_order.setColumn(0, "F_DATE", today);
        		this.ds_flow_order.setColumn(0, "JIKCHAK", gv_jikwiNm);
        		this.ds_flow_order.setColumn(0, "BUSOR", gv_buseNm);
        		this.ds_flow_order.setColumn(0, "F_NAME", gv_name);

        		if(this.DS_GW_K.rowcount != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<this.DS_GW_K.rowcount; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				nRow = this.ds_flow_order.addRow();

        				this.ds_flow_order.setColumn(nRow, "KIND", "1");
        				this.ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        				this.ds_flow_order.setColumn(nRow, "SABUN", this.DS_GW_K.getColumn(iRow, "SABUN"));
        				this.ds_flow_order.setColumn(nRow, "F_COMMENT", "");
        				this.ds_flow_order.setColumn(nRow, "F_NEXT", "");
        				this.ds_flow_order.setColumn(nRow, "STATUS", "9");
        				this.ds_flow_order.setColumn(nRow, "STORE", "0");
        				this.ds_flow_order.setColumn(nRow, "F_DATE","" );
        				this.ds_flow_order.setColumn(nRow, "JIKCHAK", this.DS_GW_K.getColumn(iRow, "JIKWI"));
        				this.ds_flow_order.setColumn(nRow, "BUSOR", this.DS_GW_K.getColumn(iRow, "BUSE"));
        				this.ds_flow_order.setColumn(nRow, "F_NAME", this.DS_GW_K.getColumn(iRow, "NAME"));
        			}
        		}

        		if(this.DS_GW_H.rowcount != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<this.DS_GW_H.rowcount; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				nRow = this.ds_flow_order.addRow();

        				this.ds_flow_order.setColumn(nRow, "KIND", "2");
        				this.ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        				this.ds_flow_order.setColumn(nRow, "SABUN", this.DS_GW_H.getColumn(iRow, "SABUN"));
        				this.ds_flow_order.setColumn(nRow, "F_COMMENT", "");
        				this.ds_flow_order.setColumn(nRow, "F_NEXT", "");
        				this.ds_flow_order.setColumn(nRow, "STATUS", "9");
        				this.ds_flow_order.setColumn(nRow, "STORE", "0");
        				this.ds_flow_order.setColumn(nRow, "F_DATE", "");
        				this.ds_flow_order.setColumn(nRow, "JIKCHAK", this.DS_GW_H.getColumn(iRow, "JIKWI"));
        				this.ds_flow_order.setColumn(nRow, "BUSOR", this.DS_GW_H.getColumn(iRow, "BUSE"));
        				this.ds_flow_order.setColumn(nRow, "F_NAME", this.DS_GW_H.getColumn(iRow, "NAME"));
        			}
        		}

        		if(this.DS_GW_C.rowcount != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<this.DS_GW_C.rowcount; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				nRow = this.ds_flow_order.addRow();

        				this.ds_flow_order.setColumn(nRow, "KIND", "3");
        				this.ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        				this.ds_flow_order.setColumn(nRow, "SABUN", this.DS_GW_C.getColumn(iRow, "SABUN"));
        				this.ds_flow_order.setColumn(nRow, "F_COMMENT", "");
        				this.ds_flow_order.setColumn(nRow, "F_NEXT", "");
        				this.ds_flow_order.setColumn(nRow, "STATUS", "9");
        				this.ds_flow_order.setColumn(nRow, "STORE", "0");
        				this.ds_flow_order.setColumn(nRow, "F_DATE", "");
        				this.ds_flow_order.setColumn(nRow, "JIKCHAK", this.DS_GW_C.getColumn(iRow, "JIKWI"));
        				this.ds_flow_order.setColumn(nRow, "BUSOR", this.DS_GW_C.getColumn(iRow, "BUSE"));
        				this.ds_flow_order.setColumn(nRow, "F_NAME", this.DS_GW_C.getColumn(iRow, "NAME"));
        			}
        		}

        		if(this.DS_GW_D.rowcount != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<this.DS_GW_D.rowcount; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				nRow = this.ds_flow_order.addRow();

        				this.ds_flow_order.setColumn(nRow, "KIND", "4");
        				this.ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        				this.ds_flow_order.setColumn(nRow, "SABUN", this.DS_GW_D.getColumn(iRow, "SABUN"));
        				this.ds_flow_order.setColumn(nRow, "F_COMMENT", "");
        				this.ds_flow_order.setColumn(nRow, "F_NEXT", "");
        				this.ds_flow_order.setColumn(nRow, "STATUS", "9");
        				this.ds_flow_order.setColumn(nRow, "STORE", "0");
        				this.ds_flow_order.setColumn(nRow, "F_DATE", "");
        				this.ds_flow_order.setColumn(nRow, "JIKCHAK", this.DS_GW_D.getColumn(iRow, "JIKWI"));
        				this.ds_flow_order.setColumn(nRow, "BUSOR", this.DS_GW_D.getColumn(iRow, "BUSE"));
        				this.ds_flow_order.setColumn(nRow, "F_NAME", this.DS_GW_D.getColumn(iRow, "NAME"));
        			}
        		}

        		var strUrl = "JSP/gw/SQL_GW500_order.jsp";
        		var inds = "ds_flow_order=ds_flow_order:U";
        		var strArg = "gubun=01"
        		           + " i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("save", strUrl, inds, "", strArg, "fnSaveOrderCallback", false, "P", false, this);
        	}
        }

        this.fnSaveOrderCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errCode);
        	else
        	{
        		alert("성공적으로 처리되었습니다.");
        		this.btn_close_onclick();
        	}
        };

        //임시결재라인
        this.btn_tempchk_onclick = function(obj,e)
        {
        	var objParam = {p_fnum : f_num,
        					p_ffnum : f_fnum,
        					p_DS_GW_K : this.DS_GW_K,
        					p_DS_GW_H : this.DS_GW_H,
        					p_DS_GW_C : this.DS_GW_C,
        					p_DS_GW_D : this.DS_GW_D};

        	this.lfn_showModal("popupTemp", objParam, "gw::GW120.xfdl", "", this, '', '', 670, 750);
        };

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.fnClear();
        	this.close("ok");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW551_onload,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_tempsave.addEventHandler("onclick",this.btn_tempsave_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_tempchk.addEventHandler("onclick",this.btn_tempchk_onclick,this);
            this.Grid_K.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_H.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_C.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_D.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.TextArea00.addEventHandler("onchanged",this.TextArea00_onchanged,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
            this.edt_id.addEventHandler("onsetfocus",this.edt_id_onsetfocus,this);
            this.edt_id.addEventHandler("onchanged",this.edt_id_onchanged,this);
            this.btn_chk.addEventHandler("onclick",this.btn_chk_onclick,this);
        };
        this.loadIncludeScript("GW551.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
