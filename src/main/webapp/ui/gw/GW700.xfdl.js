(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW700");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_i_flow_seal", this);
            obj._setContents("<ColumnInfo><Column id=\"FS_ID\" type=\"INT\" size=\"256\"/><Column id=\"FS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_GUBN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_USE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"FS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FS_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_i_flow_seal_s", this);
            obj._setContents("<ColumnInfo><Column id=\"FS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_GUBN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_USE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"FS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FS_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_select_header", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILES\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"OVERCHK\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_FLOW_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RDTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/><Column id=\"MI_CO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_damdang", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_s_flow", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RDTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileD", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","96%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","63","25","231",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","92",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","162",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("발송");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","75","25","603",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","75","25","686",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("가져오기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"7","90","25","767",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("결재라인설정");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("ck_open","293","9","78","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("부서공유");
            obj.set_value("true");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_01","15","57","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("문서번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo01","Static00_02_00_02_01:3","57","12.89%","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","edt_outOrderNo01:3","58","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("결재자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","Static00:6","57","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_K","Static06:-3","58","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("DS_GW_K");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","Grid_K:12","58","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("합의자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","Static00_00:7","58","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_H","Static06_04:-3","59","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("DS_GW_H");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","Grid_H:14","58","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("최종 결재자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_05","Static00_01:9","56","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_C","Static06_05:1","57","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("DS_GW_C");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Grid_C:14","58","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","Static00:6","82","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","Static00:6","107","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","Static00:6","132","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03","Static00:6","158","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","Static00_00:7","84","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","Static00_00:7","108","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","Static00_00:7","133","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_00","Static00_00:7","159","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","Static00_01:9","81","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","Static00_01:9","106","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_01","Static00_01:9","131","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_01","Static00_01:9","157","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_06","Static00_02:9","57","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","Static00_02:9","82","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","Static00_02:9","107","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_02","Static00_02:9","132","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_02","Static00_02:9","158","1.88%","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_D","Static06_06:5","58","7.81%","123",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("DS_GW_D");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","15","100","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("사용자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo","Static00_02_00:3","100","12.89%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","15","142","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("사용부서");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","16","184","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","Static00_02_00_01:3","184","12.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00","Calendar00:3","184","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("문서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_contract","Static00_02_00_01_00:1","184","15.63%","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_contract_innerdataset = new nexacro.NormalDataset("cb_contract_innerdataset", obj);
            cb_contract_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">일반문서</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서</Col></Row></Rows>");
            obj.set_innerdataset(cb_contract_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo00","Static00_02_00_00:3","142","12.89%","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02","16","225","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("제목");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","Static00_02_00_02:3","225","88.20%","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_00","16","267","100","80",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("사용용도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_use","Static00_02_00_02_00:2","268","88.20%","80",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00","cb_contract:3","184","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("제출처");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static00_02_00_01_00_00:2","184","15.63%","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00_00","Edit01:3","184","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("직인종류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_gubun","Static00_02_00_01_00_00_00:3","184","19.92%","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_gubun_innerdataset = new nexacro.NormalDataset("cb_gubun_innerdataset", obj);
            cb_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">법인인감(회장)</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">법인인감(사장)</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">사용인감</Col></Row></Rows>");
            obj.set_innerdataset(cb_gubun_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_00_00","16","350","100","80",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_bigo","Static00_02_00_02_00_00:3","350","88.05%","80",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cham","16","432","100","70",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("참조문서");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cham","btn_cham:2","432","39.06%","70",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_binddataset("ds_s_flow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:TITLE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_15","grd_cham:4","433","7.66%","70",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("첨부파일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","Static00_15:2","433","39.06%","70",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"495\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","grd_file:4","439","2.66%","25",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","grd_file:2","473","2.66%","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","540","96%","170",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_binddataset("ds_i_flow_seal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"직인종류\"/><Cell col=\"2\" text=\"제출처\"/><Cell col=\"3\" text=\"문서번호\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"사용용도\"/><Cell col=\"6\" text=\"사용부서\"/><Cell col=\"7\" text=\"사용자\"/><Cell col=\"8\" text=\"인사관리팀\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:FS_DATE\"/><Cell col=\"1\" text=\"bind:FS_GUBN_CODE\"/><Cell col=\"2\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" text=\"bind:CO_SEQ\"/><Cell col=\"4\" text=\"bind:FS_TITLE\"/><Cell col=\"5\" text=\"bind:FS_USE\"/><Cell col=\"6\" text=\"bind:FS_BUSENM\"/><Cell col=\"7\" text=\"bind:FS_NAME\"/><Cell col=\"8\" text=\"bind:FS_ORDER_NAME1\"/><Cell col=\"9\" text=\"bind:FS_BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","504","910","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("하단 내역에서 더블 클릭하여 선택하신 후 수정 출력 할 수 있습니다.");
            obj.set_color("#7fb39d");
            obj.set_font("bold 18px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.ck_open","value","ds_i_flow_seal_s","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_outOrderNo","value","ds_i_flow_seal_s","FS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_outOrderNo00","value","ds_i_flow_seal_s","FS_BUSENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_outOrderNo01","value","ds_i_flow_seal_s","CO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Calendar00","value","ds_i_flow_seal_s","FS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cb_contract","value","ds_i_flow_seal_s","FS_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit01","value","ds_i_flow_seal_s","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cb_gubun","value","ds_i_flow_seal_s","FS_GUBN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_title","value","ds_i_flow_seal_s","FS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","txt_use","value","ds_i_flow_seal_s","FS_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","txt_bigo","value","ds_i_flow_seal_s","FS_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW700.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW700.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW700.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW700.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var MD;
        var gubun;
        var f_num = 117;
        var f_fnum = 1;
        var f_name;

        var rt_i_flow_id, yy;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_buseNm = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSENM");
        var gv_buseCd = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var gv_shortNm = nexacro.getApplication().gds_userinfo.getColumn(0,"SHORTNAME");
        var gv_jikwiNm = nexacro.getApplication().gds_userinfo.getColumn(0,"JIKWINM");

        var d = new Date();
        var today = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        this.fn_clearOrder = function()
        {
        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();
        	this.DS_GW_U.clearData();
        }

        this.GW700_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	//GW200 에서 넘겨준 값
        	gubun = this.parent.p_gubun;
        	f_num = this.parent.p_fnum;
        	f_fnum = this.parent.p_ffnum;
        	f_name = this.parent.p_fname;

        	//GW130 에서 넘겨준 값
        	this.DS_GW_KYULNO.copyData(this.parent.dsParam1);
        	this.ds_select_header.copyData(this.parent.dsParam2);

        	//결재라인 초기화
        	this.fn_clearOrder();

        	if(this.DS_GW_KYULNO.rowcount > 0) //수정시
        	{
        		var strUrl = "JSP/gw/GW700_select.jsp";
        		var inds = "ds_i_flow_seal=ds_i_flow_seal";
        		var outds = "ds_i_flow_seal=ds_i_flow_seal";
        		var strArg ="sabun=''" +
        					" sdate=''"+
        					" edate=''"+
        					" gubn_code=''"+
        					" title=''"+
        					" status=''"+
        					" name=''"+
        					" i_flow_id="+nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectCallback", false, "P", false, this);
        	}

        	this.ds_i_flow_seal_s.clearData();
        	this.ds_i_flow_seal_s.addRow();

        	this.lfn_I_FLOW_ORDER_LOAD('01', f_num, gv_sabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        };

        this.fnSelectCallback = function(scvId, errCode, errMsg)
        {
        	if(errCode != 0)
        	{
        		alert(errMsg)
        		return false;
        	}

        	this.fn_setSeal(0);
        	this.fn_getData();
        }

        //초기화
        this.ds_i_flow_seal_s_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		obj.setColumn(e.row, "FS_SABUN", gv_sabun);
        		obj.setColumn(e.row, "FS_NAME", gv_name);
        		obj.setColumn(e.row, "FS_BUSECD", gv_buseCd);
        		obj.setColumn(e.row, "FS_BUSENM", gv_buseNm);
        		obj.setColumn(e.row, "FS_DATE", today.substr(0,8));
        		obj.setColumn(e.row, "F_TYPE", "117");
        		obj.setColumn(e.row, "OPEN_CHECK", "1");
        		obj.setColumn(e.row, "I_FLOW_ID", "0");
        		obj.setColumn(e.row, "F_CONTENT", gv_urlMrd + "/gw/GW700.mrd");

        		this.ds_file.clearData();
        		this.ds_flow_header.clearData();
        	}
        };

        //임시결재라인
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	var objParam = {p_fnum : f_num,
        					p_ffnum : f_fnum,
        					p_DS_GW_K : this.DS_GW_K,
        					p_DS_GW_H : this.DS_GW_H,
        					p_DS_GW_C : this.DS_GW_C,
        					p_DS_GW_D : this.DS_GW_D};

        	this.lfn_showModal("popupTemp", objParam, "gw::GW120.xfdl", "", this, '', '', 670, 750);
        };

        //가져오기
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupNew", "", "gw::GW702.xfdl", "popupCallback", this, '', '', 660, 400);
        };

        //추가
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	this.fn_clearOrder();
        	this.ds_i_flow_seal_s.clearData();
        	this.ds_i_flow_seal_s.addRow();
        	this.fn_chkEnable();
        	this.lfn_I_FLOW_ORDER_LOAD('01', f_num, gv_sabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        };

        this.fn_chkEnable = function()
        {

        }

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {p_sabun:gv_sabun,
        					p_name:gv_name};

        	this.lfn_showModal("popupSearch", objParam, "gw::GW701.xfdl", "popupCallback", this, '', '', 370, 220);
        };

        this.popupCallback = function(svcId, rt_value)
        {
        	if(svcId == "popupSearch")
        	{
        		if(rt_value == 1)
        		{
        			this.ds_i_flow_seal_s.clearData();
        			this.ds_file.clearData();
        			this.ds_s_flow.clearData();
        			this.Div00.form.btn_tempchk.set_enable(false);
        			this.Div00.form.btn_print.set_enable(false);
        			this.Div00.form.btn_new.set_enable(false);
        		}
        	}
        	else if(svcId == "popupNew")
        	{
        		if(this.ds_i_flow_seal_s.rowcount == 0)
        			this.ds_i_flow_seal_s.addRow();
        	}
        }

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fn_setSeal(e.row);
        };

        this.fn_setSeal = function(nRow)
        {
        	this.fn_clearOrder();
        	this.ds_i_flow_seal_s.clearData();
        	this.ds_i_flow_seal_s.addRow();

        	this.ds_i_flow_seal_s.copyRow(0, this.ds_i_flow_seal, nRow);
        	this.fn_getData();
        	this.fn_chkEnable();
        };

        this.fn_getData = function()
        {
        	rt_i_flow_id = this.ds_i_flow_seal_s.getColumn(0, "I_FLOW_ID");

        	var strUrl = "JSP/gw/SQL_GW110_02M_new.jsp";
        	var inds = "ds_flow_header=ds_flow_header";
        	var outds = "ds_flow_header=ds_flow_header";
        	var strArg = "gubun='01'" +
        				 " i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id);

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectHeaderCallback", false, "P", false, this);
        }

        this.fnSelectHeaderCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.Div00.form.ck_open.set_value(this.ds_flow_header.getColumn(0, "OPEN_CHECK"));
        		gv_sabun = this.ds_flow_header.getColumn(0,"SABUN");


        		//첨부파일 가져오기
        		if(this.ds_flow_header.getColumn(0, "FILES") != "0")
        		{
        			var strUrl = "JSP/gw/GW700_files_select.jsp";
        			var inds = "ds_file=ds_file";
        			var outds = "ds_file=ds_file";
        			var strArg = "fs_id =" + nexacro.wrapQuote(this.ds_i_flow_seal_s.getColumn(0, "FS_ID"));

        			this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        		}

        		//참조문서 가져오기
        		var strUrl = "JSP/gw/GW130_REFERENCE_SELECT.jsp";
        		var inds = "ds_s_flow=ds_s_flow";
        		var outds = "ds_s_flow=ds_s_flow";
        		var strArg = "i_flow_id =" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);


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

        //발송
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	if(this.cb_gubun.index < 0)
        	{
        		alert("직인종류를 선택해주세요.");
        		this.cb_gubun.dropdown();
        		return false;
        	}

        	if(this.edt_title.text == "")
        	{
        		alert("제목을 입력해주세요.");
        		this.edt_title.setFocus();
        		return false;
        	}

        	if(this.txt_use.text == "")
        	{
        		alert("사용용도를 입력해주세요.");
        		this.txt_use.setFocus();
        		return false;
        	}

        	if(this.cb_contract.index < 0)
        	{
        		alert("문서종류를 선택해주세요.");
        		this.cb_contract.dropdown();
        		return false;
        	}

        	if(this.ds_i_flow_seal_s.getColumn(0, "F_TYPE") == "117")
        	{
        		if(this.DS_GW_K.rowcount == 0 && this.DS_GW_H.rowcount == 0 && this.DS_GW_C.rowcount ==0)
        		{
        			alert("전자결재 진행문서 입니다. 결재자를 선택해주세요");
        			return false;
        		}

        		if(this.ds_i_flow_seal_s.getColumn(0, "I_FLOW_ID") > 0)
        		{
        			var strUrl = "JSP/gw/GW_APPROVAL_CHECK.jsp";
        			var strArg = "i_flow_id =" + nexacro.wrapQuote(this.ds_i_flow_seal_s.getColumn(0, "I_FLOW_ID"));

        			this.gfn_TransactionP("select", strUrl, "", "", strArg, "fnApprovalCallback", false, "P", false, this);
        		}
        	}

        	if(this.ds_i_flow_seal_s.getColumn(0, "F_TYPE") == "117")
        	{
        		if(this.ds_i_flow_seal_s.getRowType(this.ds_i_flow_seal_s.rowposition) == 2)	//insert일때
        			this.ds_flow_header.addRow();

        		this.ds_flow_header.setColumn(0, "GUBUN", "01");
        		this.ds_flow_header.setColumn(0, "SABUN", gv_sabun);
        		this.ds_flow_header.setColumn(0, "WDATE", today);
        		this.ds_flow_header.setColumn(0, "TITLE", "[법인/사용인감 신청]" + this.edt_title.text);
        		this.ds_flow_header.setColumn(0, "SECURITY", "0");
        		this.ds_flow_header.setColumn(0, "DURING", "3");
        		this.ds_flow_header.setColumn(0, "FILES", this.ds_file.rowcount);
        		this.ds_flow_header.setColumn(0, "F_TYPE", f_num);
        		this.ds_flow_header.setColumn(0, "STORE", "0");
        		this.ds_flow_header.setColumn(0, "CO_SEQ", gv_shortNm + "-" + today.substr(2,4) + "-");
        		this.ds_flow_header.setColumn(0, "REF_NO", "N");
        		this.ds_flow_header.setColumn(0, "FINAL_COUNT", "1");
        		this.ds_flow_header.setColumn(0, "SAVE", "1");
        		this.ds_flow_header.setColumn(0, "STATUS", "");
        		this.ds_flow_header.setColumn(0, "F_PATH", "");
        		this.ds_flow_header.setColumn(0, "F_NAME", "");

        		var strUrl   = "JSP/gw/SQL_GW551_header.jsp";
        		var inds = "ds_flow_header=ds_flow_header:U";

        		this.gfn_TransactionP("save", strUrl, inds, "", "", "fnSaveHeaderCallback", false, "P", false, this);
        	}

        	strUrl   = "JSP/gw/GW700_dml.jsp";
        	var inds = "ds_i_flow_seal_s=ds_i_flow_seal_s";

        	this.gfn_TransactionP("save", strUrl, inds, "", "", "fnDmlCallback", false, "P", false, this);
        };

        this.fnApprovalCallback = function(svcId, errCode, errMsg, gv_rt_value)
        {
        	if(errCode != 0)
        	{
        		alert(errMsg);
        	}
        	else
        	{
        		var rt_approval =nexacro.getApplication().gv_rt_value;

        		if(rt_approval == "Y")
        		{
        			alert("현재 전자결재 진행중이라 수정할 수 없습니다.");
        			return false;
        		}
        	}
        }

        this.fnSaveHeaderCallback = function (svcId, errCode, errMsg, gv_rt_i_flow_id)
        {
        	if(errCode !=0)
        		alert(errMsg)
        	else
        	{
        		rt_i_flow_id =nexacro.getApplication().gv_rt_i_flow_id;

        		this.ds_i_flow_seal_s.setColumn(0, "I_FLOW_ID", rt_i_flow_id);
        		this.ds_i_flow_seal_s.setColumn(0, "CO_SEQ", this.ds_flow_header.getColumn(0, "CO_SEQ"));

        		var open_chk;
        		if(this.chk_open.value == true)
        			open_chk = "1";
        		else
        			open_chk = "0"

        		var strUrl   = "JSP/gw/SQL_GW110_OPEN_CHECK.jsp";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id)
        					+ " open_check=" + nexacro.wrapQuote(open_chk);

        		this.gfn_TransactionP("save", strUrl, "", "", strArg, "", false, "P", false, this);

        		//결재라인 저장
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
        };

        this.fnDmlCallback = function(svcId, errCode, errMsg, gv_rt_result)
        {
        	if(errCode != 0)
        	{
        		alert(errMsg);
        		return false;
        	}
        	else
        	{
        		var rt_fs_id =nexacro.getApplication().gv_rt_result;

        		this.ds_i_flow_seal_s.setColumn(0, "FS_ID", rt_fs_id);

        		//참조문서 저장
        		var strUrl   = "JSP/gw/GW700_refer_insert.jsp";
        		var inds = "ds_s_flow=ds_s_flow";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(this.ds_i_flow_seal_s.getColumn(0, "I_FLOW_ID"));

        		this.gfn_TransactionP("save", strUrl, inds, "", strArg, "", false, "P", false, this);

        		//첨부파일 저장

        		var nRow = this.ds_i_flow_seal.findRow("FS_IS", rt_fs_id);

        		if(nRow < 0)
        			nRow = this.ds_i_flow_seal.addRow();

        		this.ds_i_flow_seal.copyRow(nRow, this.ds_i_flow_seal_s,0);

        		this.fn_chkEnable();

        		alert("완료되었습니다.");

        	}
        }

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {

        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {

        };

        //참조문서
        this.btn_cham_onclick = function(obj,e)
        {

        };

        this.btn_file_onclick = function(obj,e)
        {

        };

        this.btn_Fdelete_onclick = function(obj,e)
        {

        };


        this.GW700_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.GW700_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.Grid00);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW700_onload,this);
            this.addEventHandler("onsize",this.GW700_onsize,this);
            this.addEventHandler("ontimer",this.GW700_ontimer,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Static00_02_00_02_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_outOrderNo01.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Grid_K.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_H.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_C.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_D.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_outOrderNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_02_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_outOrderNo00.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_02_00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_02_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_cham.addEventHandler("onclick",this.btn_cham_onclick,this);
            this.grd_cham.addEventHandler("oncelldblclick",this.grd_cham_oncelldblclick,this);
            this.grd_cham.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_15.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_file.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.grd_file.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.ds_i_flow_seal_s.addEventHandler("onrowsetchanged",this.ds_i_flow_seal_s_onrowsetchanged,this);
        };
        this.loadIncludeScript("GW700.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
