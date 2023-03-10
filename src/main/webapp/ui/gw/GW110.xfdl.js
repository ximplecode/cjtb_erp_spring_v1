(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW110");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(810,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_flow_header", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"F_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SECURITY\" type=\"STRING\" size=\"256\"/><Column id=\"DURING\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"FILES\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FINAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAMES\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_damdang", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_img", this);
            obj._setContents("<ColumnInfo><Column id=\"img_path\" type=\"STRING\" size=\"256\"/><Column id=\"img_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"f_id\" type=\"STRING\" size=\"256\"/><Column id=\"f_name\" type=\"STRING\" size=\"256\"/><Column id=\"f_size\" type=\"STRING\" size=\"256\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"r_name\" type=\"STRING\" size=\"256\"/><Column id=\"f_path\" type=\"STRING\" size=\"256\"/><Column id=\"l_fname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_CHAMJO", this);
            obj._setContents("<ColumnInfo><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Button("btn_ok",null,"30","63","25","158",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempsave",null,"30","63","25","90",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"30","63","25","228",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"30","63","25","24",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","12","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("????????????");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"??????????????? ??????B\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_open","355","34","83","18",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("????????????");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","15","271","780","419",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Stfile","15","700","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("????????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_file","127","700","618","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\" band=\"left\"/><Column size=\"559\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","751","701","34","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static","15","60","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("????????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","210","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","403","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("?????? ?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","599","93","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","15","221","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("????????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","754","221","34","29",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","107","60","589","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"63","90","25","22",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("??????????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_cham","108","221","646","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("DS_CHAMJO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"477\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CO_SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","107","93","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","107","118","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","107","142","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","107","167","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03","107","193","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_K","128","93","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("DS_GW_K");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","303","94","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","303","119","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","303","143","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","303","168","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_00","303","194","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_H","324","94","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("DS_GW_H");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_05","496","92","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","496","117","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","496","141","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_01","496","166","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_01","496","192","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_C","517","92","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_binddataset("DS_GW_C");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_06","694","93","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","694","118","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","694","142","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_02","694","167","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_02","694","193","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_D","717","93","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_binddataset("DS_GW_D");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","749","735","41","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",810,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW110.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW110.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW110.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW110.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var urlSave = nexacro.getApplication().gv_urlNext + "/JSP";
        var urlNext = nexacro.getApplication().gv_urlNext;			// https://cj-erp.chunjae.co.kr/erp-next

        var urlHwp = urlHwpDoc + "/attachedfile/chunjae_file/";
        var urlHwpDoc = nexacro.getApplication().gv_urlHwp;			// https://webkian.chunjae.co.kr:8443
        var gv_urlNext = nexacro.getApplication().gv_urlNext;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        var MD;
        var saveChk;
        var fileName;

        var gubun;
        var f_num;
        var f_fnum;
        var f_name;
        var ap;

        var hwp_folderName;
        var hwp_fileName;
        var pageCnt;

        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.clear_ok();	//?????????
        	this.close(-1);
        };

        //?????????
        this.clear_ok = function()
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

        	this.DS_GW_KYULNO.clearData();
        	this.ds_damdang.clearData();

        	this.ds_file.clearData();
        }

        this.GW110_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url(gv_urlNext +"/hancom/web_gian.jsp");

        	//GW200 ?????? ????????? ???
        	gubun = this.parent.p_gubun;
        	f_num = this.parent.p_fnum;
        	f_fnum = this.parent.p_ffnum;
        	f_name = this.parent.p_fname;
        	ap = this.parent.p_ap;

        	//GW130 ?????? ????????? ???
        	this.DS_GW_KYULNO.copyData(this.parent.dsParam1);
        	this.ds_select_header.copyData(this.parent.dsParam2);

        	//???????????? ?????????
        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();
        	this.DS_GW_U.clearData();

        	if(this.DS_GW_KYULNO.rowcount > 0 ) //?????????
        	{
        		this.btn_delete.set_visible(true);
        		this.btn_ok.set_visible(true);
        		this.btn_tempsave.set_visible(true);
        		this.btn_close.set_visible(true);

        		if(this.DS_GW_KYULNO.getColumn(0,"STATUS") == '1')
        			MD = '1';
        		else if(this.DS_GW_KYULNO.getColumn(0,"STATUS") == '2')
        			MD = '2';
        		else
        			MD = '1';
        	}

        	if(MD == '1' || MD == '2')	//??????, ???????????? ??????
        	{
        		var str_arg = "gubun =" + this.DS_GW_KYULNO.getColumn(0,"GUBUN");
        			str_arg += " i_flow_id =" + this.DS_GW_KYULNO.getColumn(0,"I_FLOW_ID");

        		var str_url = "JSP/gw/SQL_GW110_02M_new.jsp";
        		var in_ds = "ds_flow_header=ds_flow_header";
        		var out_ds = "ds_flow_header=ds_flow_header";

        		this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "createSendDataFile_View", true, "P", false, this);

        	}else	//?????????????????? ????????????
        	{
        		this.lfn_I_FLOW_ORDER_LOAD('01', f_num, gv_sabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);

        		this.selectSendDataFile_View();
        	}

        	if(f_num == "22")
        	{
        		var msg_data =
        					"?????? ?????? ????????? ????????? ?????? ???????????? '????????????'??? \n" +
        					"???????????????, ?????? ????????? ?????? ??????????????????. \n" +
        					"(??????: ????????? ?????? ???????????? ?????? ???)\n\n" +

        					" * ?????? : ??????[??????] / ?????? ?????? ?????? \n" +
        					" * ?????? : ??????[??????] / '?????????(??????)' ?????? ?????? ??? \n\n" +

        					" ????????? ????????? ???????????? ??????????????????. \n\n";

        		alert(msg_data);
        	}
        };

        //Edit(??????)
        this.selectSendDataFile_View = function()
        {
        	this.edt_title.set_value(f_name);
        	this.edt_title.setCaretPos(this.edt_title.getLength());
        	this.edt_title.setFocus();
        }

        //Edit(??????)???????????? ????????????
        this.createSendDataFile_View = function()
        {
        	//???????????? ????????????
        	if(this.ds_flow_header.getColumn(0,"REF_NO") == "Y")
        	{
        		var str_url = "JSP/gw/SQL_GW110_Cham.jsp";
        		var in_ds = "DS_CHAMJO=DS_CHAMJO";
        		var out_ds = "DS_CHAMJO=DS_CHAMJO";

        		var str_arg = "i_flow_id=" + this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID");
        			str_arg += " gubun='01'";

        		this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "", false, "P", false, this);
        	}

        	//???????????? ????????????
        	if(this.ds_flow_header.getColumn(0,"FILES") != "0")
        	{
        		var str_url = "JSP/gw/SQL_GW130_FList_v3.jsp";
        		var in_ds = "ds_file=ds_file";
        		var out_ds = "ds_file=ds_file";

        		var str_arg = "i_flow_id=" + this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID");

        		this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "", true, "P", false, this);

        	}

        	this.edt_title.set_value(this.ds_flow_header.getColumn(0,"TITLE"));

        	this.Selectorder_callback();
        	this.ckb_open.set_value(this.ds_flow_header.getColumn(0, "OPEN_CHECK"));
        }

        //???????????? ????????????
        this.Selectorder_callback = function()
        {
        	var str_url = "JSP/gw/SQL_GW110_02MO.jsp";
        	var in_ds = "ds_flow_order=ds_flow_order";
        	   in_ds +=" ds_damdang=ds_damdang";
        	var out_ds = "ds_flow_order=ds_flow_order";
        	   out_ds += " ds_damdang=ds_damdang";
        	var str_arg = "GUBUN=" + this.DS_GW_KYULNO.getColumn(0, "GUBUN");
        	   str_arg += " I_FLOW_ID=" + this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID");

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Selectorder_1_callback", true, "P", false, this);
        }

        this.Selectorder_1_callback = function()
        {
        	if(this.ds_flow_order.rowcount != 0)
        	{
        		for(var i=0; i<=this.ds_flow_order.rowcount-1; i++)
        		{
        			if(this.ds_flow_order.getColumn(i,"KIND") == "0")
        			{
        				this.DS_GW_U.addRow();

        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "GUBUN", this.ds_flow_header.getColumn(0, "GUBUN"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "NO", "0"); //??????
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "BUSECD", "");
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "BUSE", this.ds_flow_order.getColumn(i, "BUSOR"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "JIKWI", this.ds_flow_order.getColumn(i, "JIKCHAK"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "SABUN", this.ds_flow_order.getColumn(i, "SABUN"));
        				this.DS_GW_U.setColumn(this.DS_GW_U.rowposition, "NAME", this.ds_flow_order.getColumn(i, "F_NAME"));
        			}
        			if(this.ds_flow_order.getColumn(i,"KIND") == "1")
        			{
        				this.DS_GW_K.addRow();

        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "NO", "1"); //??????
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "BUSECD", "");
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "BUSE", this.ds_flow_order.getColumn(i, "BUSOR"));
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "JIKWI", this.ds_flow_order.getColumn(i, "JIKCHAK"));
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "SABUN", this.ds_flow_order.getColumn(i, "SABUN"));
        				this.DS_GW_K.setColumn(this.DS_GW_K.rowposition, "NAME", this.ds_flow_order.getColumn(i, "F_NAME"));
        			}
        			if(this.ds_flow_order.getColumn(i,"KIND") == "2")
        			{
        				this.DS_GW_H.addRow();

        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "NO", "2"); //?????????
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "BUSECD", "");
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "BUSE", this.ds_flow_order.getColumn(i, "BUSOR"));
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "JIKWI", this.ds_flow_order.getColumn(i, "JIKCHAK"));
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "SABUN", this.ds_flow_order.getColumn(i, "SABUN"));
        				this.DS_GW_H.setColumn(this.DS_GW_H.rowposition, "NAME", this.ds_flow_order.getColumn(i, "F_NAME"));
        			}
        			if(this.ds_flow_order.getColumn(i,"KIND") == "3")
        			{
        				this.DS_GW_C.addRow();

        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "NO", "3"); //???????????????
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "BUSECD", "");
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "BUSE", this.ds_flow_order.getColumn(i, "BUSOR"));
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "JIKWI", this.ds_flow_order.getColumn(i, "JIKCHAK"));
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "SABUN", this.ds_flow_order.getColumn(i, "SABUN"));
        				this.DS_GW_C.setColumn(this.DS_GW_C.rowposition, "NAME", this.ds_flow_order.getColumn(i, "F_NAME"));
        			}
        			if(this.ds_flow_order.getColumn(i,"KIND") == "4")
        			{
        				this.DS_GW_D.addRow();

        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NO", "4"); //?????????
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSECD", "");
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSE", this.ds_flow_order.getColumn(i, "BUSOR"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "JIKWI", this.ds_flow_order.getColumn(i, "JIKCHAK"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "SABUN", this.ds_flow_order.getColumn(i, "SABUN"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NAME", this.ds_flow_order.getColumn(i, "F_NAME"));
        			}
        		}

        		//?????? OR ???????????? ??? ????????? ???????????? ????????? ????????????
        		if(this.ds_damdang.rowcount != 0)
        		{
        			for(var j=0; j<=this.ds_damdang.rowcount-1; j++)
        			{
        				this.DS_GW_D.addRow();

        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NO", "4"); //?????????
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSECD", "");
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "BUSE", this.ds_flow_order.getColumn(i, "BUSOR"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "JIKWI", this.ds_flow_order.getColumn(i, "JIKCHAK"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "SABUN", this.ds_flow_order.getColumn(i, "SABUN"));
        				this.DS_GW_D.setColumn(this.DS_GW_D.rowposition, "NAME", this.ds_flow_order.getColumn(i, "F_NAME"));
        			}
        		}
        	}
        }


        //???????????? ????????????
        this.btn_add_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupChamjo", "", "gw::GW140.xfdl", "popupCallBack", this, '', '', 530, 570);
        };

        //???????????? ?????????
        this.Grid_cham_oncelldblclick = function(obj,e)
        {
        	if(this.DS_CHAMJO.rowcount > 0)
        	{
        		for(var i = 0; i <= this.DS_CHAMJO.rowcount -1; i++)
        		{
        			if(this.DS_CHAMJO.getColumn(i, "CO_SEQ") == this.Grid_cham.getCellValue(e.row, 0))
        				this.DS_CHAMJO.deleteRow(i);
        		}
        	}
        };

        //???????????? ????????????
        this.btn_file_onclick = function(obj,e)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload(this.fileD, this.fileUpTrans, this.ds_file, vFileSubUrl);
        };


        //???????????? ?????????
        this.btn_Fdelete_onclick = function(obj,e)
        {
        	if (this.ds_file.getColumn(this.ds_file.rowposition, "F_NO") == ""){
        		this.ds_file.deleteRow(this.ds_file.rowposition);
        	}else{
        		var vFpath = this.ds_file.getColumn(this.ds_file.rowposition, "F_PATH");
        		var vFileSubUrl = nexacro.replaceAll(vFpath, "/gw/attachedfile", "attattachedfile");
        		this.lfn_FileDelete(this.ds_file, this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID"), vFileSubUrl);
        	}
        };

        /*???????????? ????????????
        this.Grid_file_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        {
        	this.lfn_FileDownload(this.fileDownTrans ,this.ds_file, urlNext, e.row);
        };*/


        //??????????????????
        this.btn_tempchk_onclick = function(obj,e)
        {
        	var objParam = {p_fnum : f_num,
        					p_ffnum : f_fnum,
        					p_DS_GW_K : this.DS_GW_K,
        					p_DS_GW_H : this.DS_GW_H,
        					p_DS_GW_C : this.DS_GW_C,
        					p_DS_GW_D : this.DS_GW_D};

        	this.lfn_showModal("popupTemp", objParam, "gw::GW120.xfdl", "popupCallBack", this, '', '', 670, 750);
        };


        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	if(e.userdata == "load")	//??????????????? load ?????? ?????? ??? ?????? ?????? ?????? ?????????
        	{
        		var urlPath = "";
        		if (MD == "1" || MD == "2") //?????? OR ???????????? ??????
        		{
        			var strFolder = this.ds_flow_header.getColumn(0, "F_PATH");
        			var strName = this.ds_flow_header.getColumn(0, "F_NAMES");

        			if(strFolder.substr(0,17) != "/gw/docfile_next/")
        			{
        				strFolder = nexacro.replaceAll( strFolder, "/gw/docfile/", "/attachedfile/groupware_docfile/" );
        				urlPath = urlHwpDoc + strFolder + strName;
        			}
        			else
        			{
        				strFolder = nexacro.replaceAll( strFolder, "/gw/docfile_next/", "/webhwpctrl/get/" );
        				urlPath = urlHwpDoc + strFolder + strName;
        			}

        		}else
        		{
        			urlPath = urlHwp + f_num + ".hwp";
        		}

        		this.WebBrowser00.callMethod("fn_load",urlPath);
        	}
        	else if( e.userdata == "return")	//??????????????? ?????? ?????? ?????? ??????
        	{
        		var result;
        		result = this.WebBrowser00.callMethod("return_url");

        		hwp_folderName = result.folderName;
        		hwp_fileName = result.fileName;

        		this.Delete_OK_Callback();
        	}

        };

        //??????
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	if(f_num != "22")
        	{
        		if(this.DS_GW_K.rowcount <=0 && this.DS_GW_C.rowcount <= 0)
        		{
        			alert("??????????????? ??????????????????");
        			return;
        		}
        	}

        	//?????? ID ????????? ??????
        	if(nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD") =="99000" ) //|| gds_userinfo.getColumn(0, "birth_dt") == "")
        		this.lfn_showModal("f_name", "" , "gw::GW_CHECK_NAME.xfdl", "popupCallBack", this, '', '', 360, 104);

        	saveChk = "1";
        	this.saveHeader();
        };

        //????????????
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	saveChk = "0";
        	this.saveHeader();
        };

        this.saveHeader = function()
        {
        	//????????? ?????? ?????? ?????? ??????
        	if(f_num == "1")
        	{
        		var chkTitle = this.edt_title.text;

        		chkTitle = nexacro.replaceAll(chkTitle,"??????", "");
        		chkTitle = nexacro.replaceAll(chkTitle,"[", "");
        		chkTitle = nexacro.replaceAll(chkTitle,"]", "");

        		if(chkTitle.length < 1)
        		{
        			alert("????????? ?????? ????????????");
        			this.edt_title.setFocus();
        			return;
        		}
        	}

        	if(MD == "1") //???????????? ?????? ??? ??????
        	{
        		var str_url = "JSP/gw/SQL_GW_DEL.jsp";
        		var str_arg = "status='update'";
        			str_arg += " gubun1=" + this.DS_GW_KYULNO.getColumn(0,"GUBUN");
        			str_arg += " i_flow_id=" + this.DS_GW_KYULNO.getColumn(0,"I_FLOW_ID");
        			str_arg += " owner=''";
        			str_arg += " col_name=''";

        		this.gfn_TransactionP("Select", str_url, "", "", str_arg, "", true, "P", false, this);
        	}

        	pageCnt = this.WebBrowser00.callMethod("save_hwp"); //hwp ?????? ?????? ??? return ????????? ????????? count ????????????

        }

        this.Delete_OK_Callback = function()
        {
        /*
        	this.ds_img.clearData();

        	for(var i= 0; i < pageCnt; i++)
        	{
        		var objDate = new nexacro.Date();
        		var img_name = nexacro.replaceAll(hwp_fileName, ".hwp", "" ) + "_" + i + ".gif";
        		//var path_m = system.convertRealPath("%COMPONENTHOME%") + "\chunjaedoctemp\\" + img_name;
        		var server_path_m = 'groupware_mfile/' + objDate.toString().substr(0,4) + '/' + objDate.toString().substr(4,2) + '/';
        		this.ds_img.addRow();
        		this.ds_img.setColumn(this.ds_img.rowposition, "IMG_PATH", server_path_m);
        		this.ds_img.setColumn(this.ds_img.rowposition, "IMG_PATH", img_name);

        		var result = this.WebBrowser00.callMethod("save_gif", i, urlNext + "/gw/" + server_path_m + img_name);//CreatePageImage() ???????????? ????????? gif ?????? ??????
        		alert(result);
        		trace(this.ds_img.saveXML());
        	}
        */

        	if(this.edt_title.value = "")
        	{
        		alert("?????? ????????? ??? ??????????????? ?????????.");
        		return;
        	}

        	/*????????? ???????????? [ ?????????
        	var titleValue;
        	if (MD == "1") titleValue = this.edt_title.text;
        	else titleValue =
        	*/


        	var upFile = 0;

        	if(this.ds_file.rowcount > 0)
        		upFile = this.ds_file.rowcount;

        	if(MD != "1") //???????????????
        	{
        		this.DS_GW_KYULNO.clearData();		//???????????? ?????? ????????????????????? ??????
        		this.ds_flow_header.clearData();	//???????????? ?????? ????????????????????? ??????
        		this.ds_flow_header.addRow();
        	}

        	//this.sendDocFile(server_path, server_path_m, fileName);	//????????????????????????

        	var objDate = new nexacro.Date();
        	var today = objDate.toString();
        	var f_co_no = '??????' + '-' + today.substr(2,4) + '-'; // '??????' -> gds_userinfo.getColumn(0,"shortname");

        	this.ds_flow_header.setColumn(0, 'GUBUN', '01');
        	this.ds_flow_header.setColumn(0, 'F_DATE',  today.substr(0,8));
        	this.ds_flow_header.setColumn(0, 'SABUN', gv_sabun);				//?????? ????????????
        	this.ds_flow_header.setColumn(0, 'WDATE',   today.substr(0,12));
        	this.ds_flow_header.setColumn(0, 'TITLE', this.edt_title.text);	//????????? ????????? ?????? (TextData)
        	this.ds_flow_header.setColumn(0, 'SECURITY', '0');
        	this.ds_flow_header.setColumn(0, 'DURING', '3');
        	this.ds_flow_header.setColumn(0, 'FILES', upFile);
        	this.ds_flow_header.setColumn(0, 'F_TYPE', f_num);	//1.?????? 8.??????
        	this.ds_flow_header.setColumn(0, 'STORE', '0');
        	this.ds_flow_header.setColumn(0, 'CO_SEQ', f_co_no);
        	this.ds_flow_header.setColumn(0, 'REF_NO', 'N');
        	this.ds_flow_header.setColumn(0, 'FINAL_COUNT', '1');
        	this.ds_flow_header.setColumn(0, 'SAVE', saveChk);
        	this.ds_flow_header.setColumn(0, 'STATUS', '');
        	this.ds_flow_header.setColumn(0, 'F_PATH', '/gw/docfile_next/' + hwp_folderName + '/');
        	this.ds_flow_header.setColumn(0, 'F_NAMES', hwp_fileName);
        	this.ds_flow_header.setColumn(0, 'I_FLOW_ID', this.DS_GW_KYULNO.getColumn(0,"I_FLOW_ID"));

        	var str_url = "JSP/gw/SQL_GW110_01S_new_v4.jsp";
        	var in_ds = "ds_flow_header=ds_flow_header";
        	   in_ds += " DS_CHAMJO=DS_CHAMJO";
        	   in_ds += " ds_img=ds_img";

        	trace(this.ds_flow_header.saveXML());

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "insert_result", true, "P", true, this);

        }

        this.insert_result = function(strSvcId, nErrorCode, strErrorMsg, gv_rt_i_flow_id)
        {
        	if(strSvcId == "insert|insert_result|P")
        	{
        		if(nErrorCode == "0")
        		{
        			var rt_i_flow_id =nexacro.getApplication().gv_rt_i_flow_id;
        			var open_chk;

        			if(this.ckb_open.value == true)
        				open_chk = "1"
        			else
        				open_chk = "0"

        			var str_url = "JSP/gw/SQL_GW110_OPEN_CHECK.jsp";
        			var str_arg = "i_flow_id=" + rt_i_flow_id + " open_check=" + open_chk;

        			this.gfn_TransactionP("open_chk", str_url, "", "", str_arg, "", false , "P", false, this);


        			//???????????? ?????? ??????
        			if(this.ds_file.rowcount > 0)
        			{
        				var dt = new Date();
        				var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        				this.lfn_FileUpload_Save(urlSave, rt_i_flow_id, vFileSubUrl);
        			}

        		}else
        		{
        			alert(strErrorMsg);
        		}

        	}
        	this.lfn_I_FLOW_ORDER_CallBack(this.ds_flow_order, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        }

        /*
        //????????? ???????????? upload
        this.sendDocFile = function(server_path, server_path_m, filename)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_fileUpload(this.F_Dialog, this.FileUpTrans, this.ds_file, this.ProBar, vFileSubUrl);

        	this.lfn_fileUpload_Save(server_path, filename);	//??????????????????


        	for(var i=0; i<this.ds_img; i++)
        	{
        		this.lfn_fileUpload_Save(server_path_m, this.ds_img.getColumn(i, "img_name"));	//?????? ????????? ?????? ??????
        	}

        }

        */

        //??????
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var str_url = "JSP/gw/SQL_GW_DEL.jsp";
        	var str_arg = "status = update";
        	   str_arg += " gubun1 =" +this.DS_GW_KYULNO.getColumn(0,"GUBUN");
        	   str_arg += " i_flow_id =" + this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID");
        	   str_arg += " owner =" + this.ds_select_header.getColumn(0, "OWNER");
        	   str_arg += " tablename =" + this.ds_select_header.getColumn(0, "TABLENAME");
        	   str_arg += " col_name =" + this.ds_select_header.getColumn(0, "COL_NAME");

        	this.gfn_TransactionP("delete", str_url, "", "", str_arg, "delete_ok", true, "P", false, this);
        };

        this.delete_ok = function()
        {
        	MD = "";
        	alert("????????????");
        	this.clear_ok();
        	this.Div00_btn_close_onclick();
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW110_onload,this);
            this.btn_ok.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.btn_tempsave.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
            this.Grid_file.addEventHandler("oncelldblclick",this.Grid_file_oncelldblclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_tempchk.addEventHandler("onclick",this.btn_tempchk_onclick,this);
            this.Grid_cham.addEventHandler("oncelldblclick",this.Grid_cham_oncelldblclick,this);
            this.Grid_K.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_H.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_C.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_D.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.fileD.addEventHandler("onclose",this.fileD_onclose,this);
        };
        this.loadIncludeScript("GW110.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
