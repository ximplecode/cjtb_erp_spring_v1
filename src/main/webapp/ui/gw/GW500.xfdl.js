(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW500");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(810,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"P_QTY\" type=\"INT\" size=\"256\"/><Column id=\"P_COST\" type=\"INT\" size=\"256\"/><Column id=\"P_AMT\" type=\"INT\" size=\"256\"/><Column id=\"P_USE\" type=\"STRING\" size=\"256\"/><Column id=\"P_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_P_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


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


            obj = new Dataset("DS_CHAMJO", this);
            obj._setContents("<ColumnInfo><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insa116", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budget", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT4\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT4\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STEP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STEP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"S_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"E_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileD", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","25","12","245","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("물품구매 신청서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_open","230","28","83","18",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("부서공유");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_value("true");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"25","63","25","210",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,"25","63","25","142",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("발송");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempsave",null,"25","63","25","76",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("임시저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"25","63","25","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static","10","60","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("문서제목");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("결재자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","205","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("합의자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","398","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("최종 결재자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","594","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("담당자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","102","60","533","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_color("#000000");
            obj.set_text("[시스템 계정 신청서]");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"63","90","25","6",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("임시결재라인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","102","93","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","102","118","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","102","142","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","102","167","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03","102","193","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_K","123","93","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("DS_GW_K");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","298","94","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","298","119","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","298","143","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","298","168","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_00","298","194","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_H","319","94","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("DS_GW_H");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_05","491","92","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","491","117","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","491","141","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_01","491","166","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_01","491","192","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_C","512","92","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("DS_GW_C");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_06","689","93","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","689","118","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","689","142","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_02","689","167","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_02","689","193","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_D","712","93","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("DS_GW_D");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_budget",null,"63","75","25","98",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("예산확인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","218","90","55",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("참조문서");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_cham","101","219","657","55",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_binddataset("DS_CHAMJO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"477\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CO_SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","762","221","34","48",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","278","788","420",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"350\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" colspan=\"2\" text=\"품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"금액\"/><Cell col=\"7\" text=\"용도\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:P_NAME\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"3\" text=\"bind:P_STANDARD\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:P_QTY\" edittype=\"normal\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:P_COST\"/><Cell col=\"6\" text=\"bind:P_AMT\"/><Cell col=\"7\" text=\"bind:P_USE\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:P_BIGO\" edittype=\"text\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Stfile","10","707","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("첨부파일");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_file","122","707","628","60",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\" band=\"left\"/><Column size=\"559\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","756","708","34","25",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","754","742","41","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlsImport",null,"24","120","25","369",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("엑셀 데이터 업로드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#7fb39d");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#f5f9f7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",810,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","chk_open","value","ds_flow_header","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_title","value","ds_user_info","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW500.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW500.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW500.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW500.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var MD;
        var check_md = "";
        var saveChk = "";

        var gubun;
        var f_num;
        var f_fnum;
        var f_name;

        var rt_i_flow_id, yy;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_buseNm = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSENM");
        var gv_buseCd = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var gv_shortNm = nexacro.getApplication().gds_userinfo.getColumn(0,"SHORTNAME");
        var gv_jikwiNm = nexacro.getApplication().gds_userinfo.getColumn(0,"JIKWINM");

        var d = new Date();
        var today = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        this.GW500_onload = function(obj,e)
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

        	this.fn_getItem();

        	if(this.DS_GW_KYULNO.rowcount > 0) //수정시
        	{
        		this.btn_delete.set_visible(true);
        		this.btn_ok.set_visible(true);
        		this.btn_tempsave.set_visible(true);

        		MD = '1';
        	}

        	if(MD == "1") //수정, 재기안일 경우
        	{
        		rt_i_flow_id = this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID");

        		var strUrl = "JSP/gw/SQL_GW500_SELECT.jsp";
        		var inds = "ds_data=ds_data";
        		var outds = "ds_data=ds_data";
        		var strArg = "i_flow_id="+nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);

        		var str_url = "JSP/gw/SQL_GW110_02M_new.jsp";
        		var in_ds = "ds_flow_header=ds_flow_header";
        		var out_ds = "ds_flow_header=ds_flow_header";
        		var str_arg = "gubun=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"GUBUN"))
        			        + " i_flow_id =" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnSelectHeaderCallback", false, "P", false, this);

        	}
        	else //개인결재라인 가져오기 (개인결재라인 X -> 관리자가 설정해놓은 결재라인 가져옴)
        	{
        		this.ds_flow_header.addRow();
        		this.chk_open.set_value(true);

        		this.edt_title.set_value("물품구매(사무용품) 신청서");
        		this.edt_title.setFocus();

        		this.lfn_I_FLOW_ORDER_LOAD('01', f_num, gv_sabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        	}

        	var strUrl = "JSP/gw/SQL_GW500_INSA116.jsp";
        	var inds = "ds_insa116=ds_insa116";
        	var outds = "ds_insa116=ds_insa116";
        	var strArg = "sabun="+nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectCallback", false, "P", false, this);

        };

        this.fnSelectCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.ds_data.rowcount > 0)
        		{
        			gv_buseCd = this.ds_data.getColumn(0, "SECTION_CODE");
        			yy = this.ds_data.getColumn(0, "F_DATE").substr(0,4);
        		}
        		yy = today.substr(0,4);

        		this.ds_data.addRow();
        		this.fn_Budget();
        	}
        }

        this.fnSelectHeaderCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.chk_open.set_value(this.ds_flow_header.getColumn(0, "OPEN_CHECK"));
        		this.edt_title.set_value(this.ds_flow_header.getColumn(0, "TITLE"));

        		//참조문서 가져오기
        		if(this.ds_flow_header.getColumn(0, "REF_NO") == "Y")
        		{
        			var strUrl = "JSP/gw/SQL_GW110_Cham.jsp";
        			var inds = "DS_CHAMJO=DS_CHAMJO";
        			var outds = "DS_CHAMJO=DS_CHAMJO";
        			var strArg = "gubun=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"GUBUN"))
        			        + " i_flow_id =" + nexacro.wrapQuote(rt_i_flow_id);

        			this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        		}

        		//첨부파일 가져오기
        		if(this.ds_flow_header.getColumn(0, "FILES") != "0")
        		{
        			var strUrl = "JSP/gw/SQL_GW130_FList_v3.jsp";
        			var inds = "ds_file=ds_file";
        			var outds = "ds_file=ds_file";
        			var strArg = "i_flow_id =" + nexacro.wrapQuote(rt_i_flow_id);

        			this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        		}

        		//결재라인 가져오기
        		var strUrl   = "JSP/gw/SQL_GW110_02MO.jsp";
        		var inds = "ds_flow_order=ds_flow_order"
        			     + " ds_damdang=ds_damdang";
        		var outds = "ds_flow_order=ds_flow_order"
        			      + " ds_damdang=ds_damdang";
        		var strArg  = "GUBUN=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"GUBUN"));
        			strArg += " I_FLOW_ID=" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectOrderCallback", false, "P", false, this);

        	}
        }

        this.fnSelectOrderCallback = function (svcId, errCode, errMsg)
        {
        	this.fn_compEnable();

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

        this.fn_compEnable = function()
        {
        	var nRow;

        	if(MD == "1")
        	{
        		if(this.ds_flow_order.getColumn(0, "SABUN") == gv_sabun)
        		{
        			nRow = this.ds_flow_order.findRow("STATUS", "9");

        			if(nRow >= 0)
        			{
        				if((this.ds_flow_order.getColumn(nRow, "SABUN") == gv_sabun))
        					check_md = "2";
        			}
        		}
        		else
        			check_gb = "2";
        	}
        }

        //부서예산 구하기
        this.fn_Budget = function ()
        {
        	var strUrl = "JSP/pd/PD602_office_select.jsp";
        	var inds = "ds_budget=ds_budget";
        	var outds = "ds_budget=ds_budget";
        	var strArg = "section_code=" + nexacro.wrapQuote(gv_buseCd)
        	           + " yy=" + nexacro.wrapQuote(yy);

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "select", false, "P", false, this);
        };

        //삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	var strUrl   = "JSP/gw/SQL_GW_DEL.jsp";
        	var strArg = "status=" + nexacro.wrapQuote("update")
        				+ " gubun1=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"GUBUN"))
        				+ " i_flow_id=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"I_FLOW_ID"))
        				+ " owner=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"OWNER"))
        				+ " tablename=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"TABLENAME"))
        				+ " col_name=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"COL_NAME"));

        	this.gfn_TransactionP("delete", strUrl, "", "", strArg, "fnDeleteCallback", false, "P", false, this);
        };

        this.fnDeleteCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		var strUrl   = "JSP/gw/SQL_GW_DEL_PURCHASE.jsp";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"I_FLOW_ID"));
        		this.gfn_TransactionP("delete", strUrl, "", "", strArg, "fnDeleteOkCallback", false, "P", false, this);
        	}
        }

        this.fnDeleteOkCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		alert("삭제완료!");
        		this.btn_close_onclick();
        	}
        }

        //발송
        this.btn_ok_onclick = function(obj,e)
        {
        	if(this.DS_GW_K.rowcount < 1)
        	{
        		alert("결재라인을 선택해주세요");
        		this.btn_tempchk_onclick();
        		return false;
        	}

        	if(f_num != "102")
        	{
        		if(this.DS_GW_K.findRow("SABUN", "C81002") > 0 || this.DS_GW_C.findRow("SABUN", "C81002") > 0)
        		{
        			alert("본부장 이상은 결재라인에 추가할 수 없습니다. 전결기준에 따라 자동 추가됩니다.");
        			return false;
        		}

        		if(this.DS_GW_K.findRow("SABUN", this.ds_insa116.getColumn(0, "SABUN")) > 0
        			|| this.DS_GW_C.findRow("SABUN", this.ds_insa116.getColumn(0, "SABUN")) > 0)
        		{
        			alert("본부장 이상은 결재라인에 추가할 수 없습니다. 전결기준에 따라 자동 추가됩니다.");
        			return false;
        		}
        	}

        	saveChk = "1";
        	this.fn_save();
        };

        this.fn_save = function()
        {
        	if(this.fn_chkBudget() == false)
        	{
        		alert("예산초과로 발송 할 수 없습니다.");
        		return false;
        	}

        	if (this.edt_title.value == "")
        	{
        		this.alert("문서제목을 꼭 입력하셔야 합니다.");
        		return false;
        	}

        	this.ds_flow_header.setColumn(0, "GUBUN", "01");
        	this.ds_flow_header.setColumn(0, "SABUN", gv_sabun);
        	this.ds_flow_header.setColumn(0, "WDATE", today);
        	this.ds_flow_header.setColumn(0, "TITLE", this.edt_title.value);
        	this.ds_flow_header.setColumn(0, "SECURITY", "0");
        	this.ds_flow_header.setColumn(0, "DURING", "3");
        	this.ds_flow_header.setColumn(0, "FILES", this.ds_file.rowcount);
        	this.ds_flow_header.setColumn(0, "F_TYPE", f_num);
        	this.ds_flow_header.setColumn(0, "STORE", "0");
        	this.ds_flow_header.setColumn(0, "CO_SEQ", gv_shortNm + "-" + today.substr(2,4) + "-");
        	this.ds_flow_header.setColumn(0, "REF_NO", "N");
        	this.ds_flow_header.setColumn(0, "FINAL_COUNT", "1");
        	this.ds_flow_header.setColumn(0, "SAVE", saveChk);
        	this.ds_flow_header.setColumn(0, "STATUS", "");
        	this.ds_flow_header.setColumn(0, "F_PATH", "");
        	this.ds_flow_header.setColumn(0, "F_NAME", "");

        	var strUrl   = "JSP/gw/SQL_GW110_01S_new_v4.jsp";
        	var inds = "ds_flow_header=ds_flow_header:U"
        			 + " DS_CHAMJO=DS_CHAMJO:A";
        			// + " ds_img=ds_img:A";

        	this.gfn_TransactionP("save", strUrl, inds, "", "", "fnSaveHeaderCallback", false, "P", false, this);

        };

        this.fn_chkBudget = function()
        {
        	var total_budget, use_budget, new_amount;

        	if(f_num != "97")
        		return true;

        	var nRow = this.ds_budget.filterRow("YY", yy);

        	if(nRow < 0)
        		return true
        	else
        	{
        		total_budget = nexacro.toNumber(this.ds_budget.getColumn(nRow, "BUDGET_AMOUNT"));
        		use_budget = nexacro.toNumber(this.ds_budget.getColumn(nRow, "USE_AMOUNT"));
        	}

        	for(var i=0; i<this.ds_data.rowcount; i++)
        	{
        		new_amount = new_amount + nexacro.toNumber(this.ds_data.getColumn(i, "P_AMT")) - nexacro.toNumber(this.ds_data.getColumn(i, "OLD_P_AMT"));
        	}

        	if (total_budget - use_budget - new_amount < 0)
        		return false;
        	else
        		return true;
        }

        //첨부파일, 부서공유, 물품구매신청서 데이터 저장
        this.fnSaveHeaderCallback = function (svcId, errCode, errMsg, gv_rt_i_flow_id)
        {
        	if(errCode !=0)
        		alert(errMsg)
        	else
        	{
        		rt_i_flow_id =nexacro.getApplication().gv_rt_i_flow_id;

        		/*
        		var dt = new Date();
        		var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        		this.lfn_FileUpload_Save(gv_urlFile + "/JSP", rt_i_flow_id, vFileSubUrl);
        		*/
        		var open_chk;
        		if(this.chk_open.value == true)
        			open_chk = "1";
        		else
        			open_chk = "0"

        		var strUrl   = "JSP/gw/SQL_GW110_OPEN_CHECK.jsp";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id)
        					+ " open_check=" + nexacro.wrapQuote(open_chk);

        		this.gfn_TransactionP("save", strUrl, "", "", strArg, "", false, "P", false, this);

        		strUrl = "JSP/gw/SQL_GW500_DML.jsp";
        		strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id)
        			   + " f_num=" + nexacro.wrapQuote(f_num);
        		var inds = "ds_data=ds_data";

        		this.gfn_TransactionP("save", strUrl, inds, "", strArg, "fnDMLCallback", false, "P", false, this);
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

        //임시저장
        this.btn_tempsave_onclick = function(obj,e)
        {
        	alert(check_md);
        	if(check_md == "2")
        	{
        		var strUrl = "JSP/gw/SQL_GW500_DML.jsp";
        		var inds = "ds_data=ds_data";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id)
        					+" f_num=" + nexacro.wrapQuote(f_num);

        		this.gfn_TransactionP("save", strUrl, inds, "", strArg, "fnTempSaveCallback", false, "P", false, this);
        	}
        	else
        	{
        		saveChk = "0";
        		this.fn_save();
        	}
        };

        this.fnTempSaveCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.btn_close_onclick();
        }

        //예산확인
        this.btn_budget_onclick = function(obj,e)
        {
        	var objParam = {p_yy : yy,
        					p_section_code : gv_buseCd,
        					p_sabun : gv_sabun};

        	this.lfn_showModal("popupTemp", objParam, "pd::PD602F_Office.xfdl", "", this, '', '', 580, 580);
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

        //참조문서 추가
        this.btn_add_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupChamjo", "", "gw::GW140.xfdl", "", this, '', '', 530, 570);
        };

        //참조문서 삭제
        this.Grid_cham_oncelldblclick = function(obj,e)
        {
        	if(this.DS_CHAMJO.rowcount > 0)
        	{
        		for(var i = 0; i <= this.DS_CHAMJO.rowcount -1; i++)
        		{
        			if(this.DS_CHAMJO.getColumn(i, "CO_SEQ") == this.grd_cham.getCellValue(e.row, 0))
        				this.DS_CHAMJO.deleteRow(i);
        		}
        	}
        };

        //첨부파일 추가
        this.btn_file_onclick = function(obj,e)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload(this.fileD, this.fileUpTrans, this.ds_file, vFileSubUrl);
        };

        //첨부파일 삭제
        this.btn_Fdelete_onclick = function(obj,e)
        {
        	if (this.ds_file.getColumn(this.ds_file.rowposition, "F_NO") == ""){
        		this.ds_file.deleteRow(this.ds_file.rowposition);
        	}else{
        		var vFpath = this.ds_file.getColumn(this.ds_file.rowposition, "F_PATH");
        		var vFileSubUrl = nexacro.replaceAll(vFpath, "/gw/attachedfile", "attattachedfile");
        		this.lfn_FileDelete(this.ds_file, this.dsWithHoldMst.getColumn(0, "I_FLOW_ID"), vFileSubUrl);
        	}
        };

        this.ds_data_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "P_QTY" || e.columnid == "P_COST")
        	{
        		var qty = nexacro.toNumber(this.ds_data.getColumn(e.row, "P_QTY"));
        		var cost = this.ds_data.getColumn(e.row, "P_COST");
        		var amt = qty * cost;

        		this.ds_data.setColumn(e.row,"P_AMT", amt);
        	}
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	switch(e.cell)
        	{
        		case 2:	//품명
        			this.lfn_showModal("popup", "", "gw::GW500_ITEM.xfdl", "popupCallBack", this, '', '', 770, 430);
        			break;

        		case 9: //삭제
        			this.ds_data.deleteRow(e.row);
        			this.ds_data.addRow();
        	}
        };

        this.Grid00_onenterdown = function(obj,e)
        {
        	if(e.cell == 8)
        	{
        		if(e.row == this.ds_data.rowcount -1)
        			this.ds_data.addRow();

        		this.Grid00.setCellPos(1);
        		this.ds_data.rowposition = e.row + 1;
        	}
        	else
        		this.Grid00.setCellPos(e.cell + 1);
        };


        this.fnClear = function ()
        {
        	this.ds_flow_header.clearData();
        	this.ds_flow_header.addRow();
        	this.ds_flow_order.clearData();
        	this.ds_flow_order.addRow();

        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();
        	this.DS_CHAMJO.clearData();
        	this.ds_file.clearData();

        	this.DS_GW_KYULNO.clearData();
        	this.ds_damdang.clearData();

        	this.ds_data.clearData();
        };

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.fnClear();
        	this.close();
        };

        this.fn_getItem = function()
        {
        	var str_url = "JSP/gw/GW500_item_select.jsp";
        	var in_ds = "ds_item=ds_item";
        	var out_ds = "ds_item=ds_item";
        	var str_arg = "step_code=" + nexacro.wrapQuote() +
        				 " unit_code=" + nexacro.wrapQuote() +
        				 " nm=" + nexacro.wrapQuote() +
        				 " code=" + nexacro.wrapQuote();

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);
        }

        //엑셀 데이터 업로드
        this.Div00_btn_xlsImport_onclick = function(obj,e)
        {
        	this.importObj = new ExcelImportObject();

        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.importObj.set_importurl(gv_urlXeni);

        	this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
            this.importObj.addEventHandler("onerror", this.Import00_onerror, this);

            this.importObj.importData("", "", "ds_excel");
        };

        this.Import00_onsuccess = function(obj, e)
        {
        	if(this.ds_excel.rowcount < 1)
        		alert("조회된 데이터가 존재하지 않습니다.");
        	else
        	{
        		//ds_excel column
        		//코드		1
        		//상품명	2
        		//단위		9
        		//수량		10
        		//단가		13
        		//금액		15

        		this.ds_data.clearData();
        		var vCode, vCost, index_com, index_won, rtRow, nRow;

        		for(var i=17; i <(this.ds_excel.rowcount-7); i++)
        		{
        			vCode = this.ds_excel.getColumn(i, 1);	//제품코드
        			vCost = this.ds_excel.getColumn(i, 13);	//제품단가

        			if(vCode != null && vCode != "상품코드" && vCode.indexOf("※") < 0)
        			{
        				index_com = vCost.indexOf(",")
        				index_won = vCost.indexOf("원")

        				if(index_com > 0)
        					vCost = vCost.substr(0,index_com) + vCost.substr(index_com+1, index_won - (index_com+1));
        				else
        					vCost = vCost.substr(0,index_won);

        				rtRow = this.ds_item.findRow("CODE", vCode);

        				if(rtRow != -1)
        				{
        					if(vCost != this.ds_item.getColumn(rtRow, "COST"))
        					{
        						alert("해당코드 (" + vCode + ")의 단가가 상이합니다.\n인사관리팀 담당자에게 문의해주세요.");
        						return false;
        					}
        				}
        				else
        				{
        					alert("해당코드 (" + vCode + ")는 존재하지 않습니다.\n인사관리팀 담당자에게 문의해주세요.");
        					return false;
        				}

        				if(this.ds_item.getColumn(rtRow, "NAME") != "")
        				{
        					nRow = this.ds_data.addRow();

        					this.ds_data.setColumn(nRow, "P_NAME", this.ds_item.getColumn(rtRow, "NAME"));
        					this.ds_data.setColumn(nRow, "P_STANDARD", this.ds_item.getColumn(rtRow, "GB"));
        					this.ds_data.setColumn(nRow, "P_QTY", this.ds_excel.getColumn(i, 10));
        					this.ds_data.setColumn(nRow, "P_COST", this.ds_item.getColumn(rtRow, "COST"));
        				}
        			}
        		}
        	}
        }

        this.Import00_onerror = function(obj, e)
        {
        	alert(e.errormsg);
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW500_onload,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_tempsave.addEventHandler("onclick",this.btn_tempsave_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_tempchk.addEventHandler("onclick",this.btn_tempchk_onclick,this);
            this.Grid_K.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_H.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_C.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_D.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.btn_budget.addEventHandler("onclick",this.btn_budget_onclick,this);
            this.Grid_cham.addEventHandler("oncelldblclick",this.Grid_cham_oncelldblclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("onenterdown",this.Grid00_onenterdown,this);
            this.Grid_file.addEventHandler("oncelldblclick",this.Grid_file_oncelldblclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.btn_xlsImport.addEventHandler("onclick",this.Div00_btn_xlsImport_onclick,this);
            this.ds_data.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
            this.ds_excel.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
        };
        this.loadIncludeScript("GW500.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
