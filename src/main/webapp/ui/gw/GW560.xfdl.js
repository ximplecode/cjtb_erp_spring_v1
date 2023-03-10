(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW560");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(810,780);
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


            obj = new Dataset("ds_mst", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_E_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_KIND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">?????? ??????</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">?????? ??????</Col></Row></Rows>");
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
            obj = new Button("btn_delete",null,"25","63","25","276",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,"25","63","25","208",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempsave",null,"25","63","25","142",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"25","63","25","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","63","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","205","63","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","406","63","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("?????? ?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","605","63","90","123",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"25","90","25","821",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("??????????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","102","62","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","102","87","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","102","112","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","102","137","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03","102","163","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_K","123","63","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("DS_GW_K");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","298","63","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","298","89","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","298","113","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","298","138","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_00","298","164","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_H","319","64","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("DS_GW_H");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_05","501","61","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","501","86","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","501","111","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_01","501","136","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_01","501","162","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_C","520","62","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("DS_GW_C");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_06","699","62","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("1???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","699","87","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("2???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","699","112","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("3???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_02","699","137","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("4???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_02","699","163","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("5???");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#898989");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_D","723","63","75","123",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_binddataset("DS_GW_D");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","10","223","790","480",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_mst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"?????????\"/><Cell col=\"2\" text=\"??????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"????????????\"/><Cell col=\"6\" colspan=\"2\" text=\"????????????\"/><Cell col=\"8\" text=\"????????????\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"buttoncontrol\"/><Cell col=\"2\" text=\"bind:SECTION_CODE\" displaytype=\"combotext\" combodataset=\"dsSection\" combocodecol=\"SECTION_CODE\" combodatacol=\"SECTION_NAME\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:REG_KIND\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"ds_regKind\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:CAR_KIND\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:CAR_NUMBER\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:REG_S_DATE\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:REG_E_DATE\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:REG_BIGO\" edittype=\"normal\"/><Cell col=\"9\" text=\"??????\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Stfile","10","710","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("????????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_file","122","710","628","60",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\" band=\"left\"/><Column size=\"559\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","756","711","34","25",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","754","745","41","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"25","63","25","76",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("chk_result","547","6","175","18",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_color("#cd0808");
            obj.set_font("bold 12px/normal \"??????????????? ??????\"");
            obj.set_text("??? ?????? ????????? ???????????????. ???");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempchk00",null,"25","90","25","351",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("??????????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","12","245","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("????????? ?????? ?????????");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"??????????????? ??????B\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_open","279","28","83","18",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("????????????");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_value("true");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","189","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("????????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","608","189","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("?????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","400","189","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("????????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","201","189","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("????????????");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_no","102","189","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","700","189","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","292","189","105","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_buse","491","189","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",810,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","chk_open","value","ds_flow_header","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_name","value","ds_mst","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_date","value","ds_mst","INSERT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cb_buse","value","ds_mst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW560.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW560.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW560.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW560.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var MD;
        var saveChk = "";

        var gubun;
        var f_num;
        var f_fnum;
        var f_name;

        var rt_i_flow_id, yy;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_buseNm = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSENM");
        var gv_buseCd = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var gv_shortNm = nexacro.getApplication().gds_userinfo.getColumn(0,"SHORTNAME");
        var gv_jikwiNm = nexacro.getApplication().gds_userinfo.getColumn(0,"JIKWINM");

        var d = new Date();
        var today = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        this.GW560_onload = function(obj,e)
        {
        	//GW200 ?????? ????????? ???
        	gubun = this.parent.p_gubun;
        	f_num = this.parent.p_fnum;
        	f_fnum = this.parent.p_ffnum;
        	f_name = this.parent.p_fname;

        	//GW130 ?????? ????????? ???
        	this.DS_GW_KYULNO.copyData(this.parent.dsParam1);
        	this.ds_select_header.copyData(this.parent.dsParam2);

        	//???????????? ?????????
        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();
        	this.DS_GW_U.clearData();

        	this.edt_name.set_value(gv_name);

        	if(this.DS_GW_KYULNO.rowcount > 0) //?????????
        	{
        		this.btn_delete.set_visible(true);
        		this.btn_ok.set_visible(true);
        		this.btn_tempsave.set_visible(true);

        		MD = '1';
        	}

        	if(MD == "1") //??????, ???????????? ??????
        	{
        		rt_i_flow_id = this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID");

        		var strUrl = "JSP/gw/SQL_GW560_SELECT.jsp";
        		var inds = "ds_mst=ds_mst";
        		var outds = "ds_mst=ds_mst";
        		var strArg = "i_flow_id="+nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);

        		var str_url = "JSP/gw/SQL_GW110_02M_new.jsp";
        		var in_ds = "ds_flow_header=ds_flow_header";
        		var out_ds = "ds_flow_header=ds_flow_header";
        		var str_arg = "gubun=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0,"GUBUN"))
        			        + " i_flow_id =" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnSelectHeaderCallback", false, "P", false, this);

        	}
        	else //?????????????????? ???????????? (?????????????????? X -> ???????????? ??????????????? ???????????? ?????????)
        	{
        		var msg_data =
        					"1) ?????? ?????? \n" +
        					"  - ?????? ?????? : ?????? ??? 1??? ?????? ?????? ???. \n" +
        					"  - ?????? ?????? : ?????? ????????? ??????. ?????? ?????? ??????. \n" +
        					"                   ???, ?????? ?????? ?????? ??? ??????. \n" +
        					"  - ???????????? ?????? : ?????? ?????? ?????????, ?????? ??? ?????? ?????? ????????? \n\n" +

        					"2) ???????????? \n" +
        					"[??????]?????????>[??????]??????>[??????]??????????????? ?????????>[??????]????????? \n\n";

        		this.alert(msg_data);

        		this.ds_mst.addRow();
        		this.ds_flow_header.addRow();

        		this.cal_date.set_value(today.substr(0,8));
        		this.chk_open.set_value(true);

        		this.lfn_I_FLOW_ORDER_LOAD('01', f_num, gv_sabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        	}

        	var strUrl = "JSP/gw/SQL_GW510_BUSE.jsp";
        	var inds = "dsSection=dsSection";
        	var outds = "dsSection=dsSection";
        	var strArg = "gb="+nexacro.wrapQuote("CH");

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSectionCallback", false, "P", false, this);
        };

        this.fnSectionCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.cb_buse.set_value(gv_buseCd);
        };

        this.fnSelectHeaderCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.chk_open.set_value(this.ds_flow_header.getColumn(0, "OPEN_CHECK"));

        		if(this.ds_mst.rowcount > 0)
        			this.edt_no.set_value(this.ds_mst.getColumn(0,"INSERT_DATE").substr(0,8) + "-" + this.ds_mst.getColumn(0,"SEQNO"));
        		else
        		{
        			this.ds_mst.addRow();
        			this.cal_date.set_value(today.substr(0,8));
        		}

        		//???????????? ????????????
        		if(this.ds_flow_header.getColumn(0, "FILES") != "0")
        		{
        			var strUrl = "JSP/gw/SQL_GW130_FList_v3.jsp";
        			var inds = "ds_file=ds_file";
        			var outds = "ds_file=ds_file";
        			var strArg = "i_flow_id =" + nexacro.wrapQuote(rt_i_flow_id);

        			this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        		}

        		//???????????? ????????????
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

        		//?????? or ???????????? ??? ????????? ???????????? ????????? ??????
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


        this.Grid00_oncellclick = function(obj,e)
        {
        	var objParam = {p_nRow : e.row,
        					p_Id:"GW560"};

        	switch(e.cell)
        	{
        		case 1:	//?????????
        			this.lfn_showModal("popup", objParam, "gw::GW510_insa.xfdl", "popupCallBack", this, '', '', 460, 430);
        			break;

        		case 9: //??????
        			if(this.ds_mst.getColumn(e.row, "SEQNO") != null)
        			{
        				if(this.confirm("????????? ???????????? ????????? ??? ????????????.\n?????? ?????????????????????????"))
        				{
        					var strUrl = "JSP/gw/SQL_GW560_D_DELETE.jsp";
        					var strArg = "i_flow_id =" + nexacro.wrapQuote(this.ds_mst.getColumn(e.row, "I_FLOW_ID"))
        							   + " seqno=" + nexacro.wrapQuote(this.ds_mst.getColumn(e.row, "SEQNO"));

        					this.gfn_TransactionP("delete", strUrl, "", "", strArg, "", false, "P", false, this);
        				}
        			}

        			this.ds_mst.deleteRow(e.row);

        			if(this.ds_mst.rowcount == 0) this.ds_mst.addRow();
        			break;
        	}
        };

        //????????????
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

        //??????
        this.btn_delete_onclick = function(obj,e)
        {
        	if(this.confirm("?????? ?????????????????????????"))
        	{
        		strUrl   = "JSP/gw/SQL_GW560_DELETE.jsp";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("delete", strUrl, "", "", strArg, "fnDeleteCallback", false, "P", false, this);
        	}
        };

        this.fnDeleteCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		var strUrl   = "JSP/gw/SQL_GW_DEL.jsp";
        		var strArg = "status=" + nexacro.wrapQuote("update")
        			   + " gubun1=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0, "GUBUN"))
        			   + " i_flow_id=" + nexacro.wrapQuote(this.DS_GW_KYULNO.getColumn(0, "I_FLOW_ID"))
        			   + " owner=" + nexacro.wrapQuote(this.ds_select_header.getColumn(0, "OWNER"))
        			   + " tablename=" + nexacro.wrapQuote(this.ds_select_header.getColumn(0, "TABLENAME"))
        			   + " col_name=" + nexacro.wrapQuote(this.ds_select_header.getColumn(0, "COL_NAME"));

        		this.gfn_TransactionP("delete", strUrl, "", "", strArg, "fnDeleteHeaderCallback", false, "P", false, this);
        	}
        }

        this.fnDeleteHeaderCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.close();
        }

        //????????????
        this.btn_tempsave_onclick = function(obj,e)
        {
        	saveChk = "0";
        	this.fn_save();
        };

        //??????
        this.btn_ok_onclick = function(obj,e)
        {
        	if(this.DS_GW_K.rowcount <= 0)
        	{
        		alert("??????????????? ??????????????????");
        		this.btn_tempchk_onclick();
        		return false;
        	}

        	saveChk = "1";
        	this.fn_save();
        };

        this.fn_save = function()
        {
        	this.ds_flow_header.setColumn(0, "GUBUN", "01");
        	this.ds_flow_header.setColumn(0, "SABUN", gv_sabun);
        	this.ds_flow_header.setColumn(0, "WDATE", today);
        	this.ds_flow_header.setColumn(0, "TITLE", nexacro.trim("[????????? ?????? ?????????]" + this.ds_mst.getColumn(0, "INSERT_DATE") + " " + this.ds_mst.getColumn(0, "CAR_KIND") + " " + this.ds_mst.getColumn(0, "CAR_NUMBER") + " ???"));
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

        	var strUrl   = "JSP/gw/SQL_GW551_header.jsp";
        	var inds = "ds_flow_header=ds_flow_header:A";

        	this.gfn_TransactionP("save", strUrl, inds, "", "", "fnSaveHeaderCallback", false, "P", false, this);
        }

        this.fnSaveHeaderCallback = function (svcId, errCode, errMsg, gv_rt_i_flow_id)
        {
        	if(errCode !=0)
        		alert(errMsg)
        	else
        	{
        		rt_i_flow_id =nexacro.getApplication().gv_rt_i_flow_id;

        		if(this.ds_file.rowcount > 0)	//???????????? ??????
        			this.fn_upload_file(rt_i_flow_id);

        		var open_chk;
        		if(this.chk_open.value == true)
        			open_chk = "1";
        		else
        			open_chk = "0"

        		var strUrl   = "JSP/gw/SQL_GW110_OPEN_CHECK.jsp";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id)
        					+ " open_check=" + nexacro.wrapQuote(open_chk);

        		this.gfn_TransactionP("save", strUrl, "", "", strArg, "", false, "P", false, this);

        		strUrl   = "JSP/gw/SQL_GW560_DML.jsp";
        		var inds = "ds_mst=ds_mst";
        		var strArg = "i_flow_id=" + nexacro.wrapQuote(rt_i_flow_id);

        		this.gfn_TransactionP("save", strUrl, inds, "", strArg, "fnMstCallback", false, "P", false, this);
        	}
        };

        //I_FLOW_ORDER ??????
        this.fnMstCallback = function(svcId, errCode, errMsg)
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
        		alert("??????????????? ?????????????????????.");
        		this.btn_close_onclick();
        	}
        };

        //???????????? ??????
        this.fn_upload_file = function(i_flow_id)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload_Save(gv_urlFile + "/JSP", i_flow_id, vFileSubUrl);
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_mst.addRow();
        };

        this.ds_mst_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12 ) //dataset??? ??????????????? ???
        	{
        		if(e.row == 0)
        		{
        			obj.setColumn(e.row, "SABUN", gv_sabun);
        			obj.setColumn(e.row, "NAME", gv_name);
        			obj.setColumn(e.row, "SECTION_CODE", this.cb_buse.value);
        			obj.setColumn(e.row, "SEQNO", "001");
        			obj.setColumn(e.row, "REG_KIND", "01");
        		}
        		else
        		{
        			obj.setColumn(e.row, "SABUN", obj.getColumn(e.row-1, "SABUN"));
        			obj.setColumn(e.row, "NAME", obj.getColumn(e.row-1, "NAME"));
        			obj.setColumn(e.row, "SECTION_CODE", obj.getColumn(e.row-1, "SECTION_CODE"));
        			obj.setColumn(e.row, "SEQNO", (this.ds_mst.rowcount + 1).toString().padLeft(2,"0"));
        			obj.setColumn(e.row, "REG_KIND", "01");
        		}
        	}
        };

        this.fn_clear = function()
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
        	this.ds_file.clearData();
        }

        //??????
        this.btn_close_onclick = function(obj,e)
        {
        	this.fn_clear();
        	this.close();
        };

        //??????????????????
        this.btn_file_onclick = function(obj,e)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload(this.fileD, this.fileUpTrans, this.ds_file, vFileSubUrl);
        };

        //??????????????????
        this.btn_Fdelete_onclick = function(obj,e)
        {
        	if (this.ds_file.getColumn(this.ds_file.rowposition, "F_NO") == ""){
        		this.ds_file.deleteRow(this.ds_file.rowposition);
        	}else{
        		var vFpath = this.ds_file.getColumn(this.ds_file.rowposition, "F_PATH");
        		var vFileSubUrl = nexacro.replaceAll(vFpath, "/gw/attachedfile", "attattachedfile");
        		this.lfn_FileDelete(this.ds_file, this.ds_mst.getColumn(0, "I_FLOW_ID"), vFileSubUrl);
        	}
        };

        //??????????????????
        this.Grid_file_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        		this.lfn_FileDownload(this.fileDownTrans ,this.ds_file, gv_urlFile, e.row);
        };

        this.grd_dtl_onenterdown = function(obj,e)
        {
        	switch(e.cell)
        	{
        		case 0: this.Grid00_oncellclick(this.grd_dtl, e);
        			break;
        		case 3: this.grd_dtl.setCellPos(e.cell + 1);
        			break;
        		case 4: this.grd_dtl.setCellPos(e.cell + 1);
        			break;
        		case 5: this.grd_dtl.setCellPos(e.cell + 1);
        			break;
        		case 6: this.grd_dtl.setCellPos(e.cell + 1);
        			break;
        		case 7: this.grd_dtl.setCellPos(e.cell + 1);
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW560_onload,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_tempsave.addEventHandler("onclick",this.btn_tempsave_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_tempchk.addEventHandler("onclick",this.btn_tempchk_onclick,this);
            this.Grid_K.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_H.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_C.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_D.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.grd_dtl.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.grd_dtl.addEventHandler("onenterdown",this.grd_dtl_onenterdown,this);
            this.Grid_file.addEventHandler("oncellclick",this.Grid_file_oncellclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_tempchk00.addEventHandler("onclick",this.btn_tempchk_onclick,this);
            this.ds_mst.addEventHandler("onrowsetchanged",this.ds_mst_onrowsetchanged,this);
        };
        this.loadIncludeScript("GW560.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
