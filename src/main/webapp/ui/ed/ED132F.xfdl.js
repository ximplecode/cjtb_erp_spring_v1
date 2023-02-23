(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED132F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCMst", this);
            obj._setContents("<ColumnInfo><Column id=\"NCMST_CONTRACTNO\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_OPPONENTKIND\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_SCONTRACTYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_ECONTRACTYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"YEARTERM\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_CONTRACTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_HALFWAYAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_BALANCEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_CONTRACTTOTAMNT\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_WRTINSURANCE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_PFMCINSURANCE\" type=\"STRING\" size=\"256\"/><Column id=\"TRADENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPPONENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_DELIVERYPLACE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_ADDDOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_PERMITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_PERMITEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_PERMITE\" type=\"STRING\" size=\"256\"/><Column id=\"NCMST_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("Div00","15","11","98%","40",null,null,null,null,null,null,this);
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

            obj = new Button("btn_new",null,"7","75","25","686",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("신규카드");
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

            obj = new Static("Static00","15","60","100","40",null,null,null,null,null,null,this);
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
            obj.set_text("계약건명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:3","60","12.5%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","cb_section:4","60","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계약서 번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contractNo","Static00_01:4","60","12.5%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_athrCust","edt_contractNo:4","60","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저자/업체");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","15","144","100","196",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("계약내용");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","Static00_00:3","102","46.31%","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","edt_title:4","102","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("계약금");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_contractamount","Static00_08:4","103","13.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","medt_contractamount:3","103","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("인도장소");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_contents","Static00_02:3","144","46.31%","196",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","txt_contents:4","187","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("잔금");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_balanceamount","Static00_10:4","187","13.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","medt_balanceamount:3","187","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("하자보증");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","txt_contents:4","271","7.62%","70",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가약정사항");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tradeName","btn_athrCust:4","60","12.5%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","edt_tradeName:5","60","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("계약기간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_09","txt_contents:4","144","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("중도금");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_11","txt_contents:4","229","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("계약총액");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_halfwayamount","Static00_09:4","145","13.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_12","medt_halfwayamount:3","145","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("인도기일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_totalamount","Static00_11:4","229","13.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_format("#,#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","medt_totalamount:3","230","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이행보증");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","14","424","98.00%","100",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_tabindex("0");
            obj.set_border("1px none lightgray");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("리스트검색");
            obj.set_border("1px solid lightgray");
            obj.set_formscrollbartype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","38","18","62","33",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","Static00:3","19","10.22%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","cal_sDate:29","23","1.89%","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","Static01:3","18","10.22%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","cal_eDate:35","18","4.4%","31",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("관련부서");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static02:3","18","15.72%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","cb_section:139","21","7.08%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","118","345","43.31%","70",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"495\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","Grid00:3","351","2.62%","25",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14","btn_file:6","344","7.62%","70",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("첨부서류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_deliveryDate","Static00_12:3","145","13.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_satrtDate","Static00_07:4","60","12.5%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","cal_satrtDate:18","63","1.54%","31",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","Static01:3","60","12.31%","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","15","345","100","69",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("첨부파일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deliveryPlace","Static00_03:3","103","13.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","13","534","98.00%","186",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("dsNCMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계약품의 No.\"/><Cell col=\"1\" rowspan=\"2\" text=\"계약건명\"/><Cell col=\"2\" rowspan=\"2\" text=\"저자/거래처\"/><Cell col=\"3\" colspan=\"2\" text=\"계약기간\"/><Cell col=\"5\" rowspan=\"2\" text=\"계약금\"/><Cell col=\"6\" rowspan=\"2\" text=\"중도금\"/><Cell col=\"7\" rowspan=\"2\" text=\"잔금\"/><Cell col=\"8\" rowspan=\"2\" text=\"인도기일\"/><Cell col=\"9\" rowspan=\"2\" text=\"인도장소\"/><Cell row=\"1\" col=\"3\" text=\"시작일자\"/><Cell row=\"1\" col=\"4\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:NCMST_CONTRACTNO\"/><Cell col=\"1\" text=\"bind:NCMST_TITLE\"/><Cell col=\"2\" text=\"bind:TRADENAME\"/><Cell col=\"3\" text=\"bind:NCMST_SCONTRACTYEAR\"/><Cell col=\"4\" text=\"bind:NCMST_ECONTRACTYEAR\"/><Cell col=\"5\" text=\"bind:NCMST_CONTRACTAMOUNT\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:NCMST_HALFWAYAMOUNT\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:NCMST_BALANCEAMOUNT\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:NCMST_DELIVERYDATE\"/><Cell col=\"9\" text=\"bind:NCMST_DELIVERYPLACE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_wrtlnsurance","Static00_04:14","191","12.92%","33",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            var rdo_wrtlnsurance_innerdataset = new nexacro.NormalDataset("rdo_wrtlnsurance_innerdataset", obj);
            rdo_wrtlnsurance_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">무</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유</Col></Row></Rows>");
            obj.set_innerdataset(rdo_wrtlnsurance_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pfmclnsurance","Static00_13:15","233","12.85%","37",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_pfmclnsurance_innerdataset = new nexacro.NormalDataset("rdo_pfmclnsurance_innerdataset", obj);
            rdo_pfmclnsurance_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">무</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유</Col></Row></Rows>");
            obj.set_innerdataset(rdo_pfmclnsurance_innerdataset);
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","Static00_05:4","271","35.54%","70",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_addDocument","Static00_14:4","344","35.62%","70",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","Grid00:1","385","2.85%","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.ck_open","value","dsNCMst","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_contractNo","value","dsNCMst","NCMST_CONTRACTNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_tradeName","value","dsNCMst","TRADENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_title","value","dsNCMst","NCMST_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","medt_contractamount","value","dsNCMst","NCMST_CONTRACTAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","medt_halfwayamount","value","dsNCMst","NCMST_HALFWAYAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","medt_balanceamount","value","dsNCMst","NCMST_BALANCEAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medt_totalamount","value","dsNCMst","NCMST_CONTRACTTOTAMNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cb_section","value","dsNCMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_deliveryDate","value","dsNCMst","NCMST_DELIVERYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_deliveryPlace","value","dsNCMst","NCMST_DELIVERYPLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cal_satrtDate","value","dsNCMst","NCMST_SCONTRACTYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cal_endDate","value","dsNCMst","NCMST_ECONTRACTYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","txt_contents","value","dsNCMst","NCMST_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","txt_remark","value","dsNCMst","NCMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","txt_addDocument","value","dsNCMst","NCMST_ADDDOCUMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdo_pfmclnsurance","value","dsNCMst","NCMST_PFMCINSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","rdo_wrtlnsurance","value","dsNCMst","NCMST_WRTINSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED132F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED132F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED132F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED132F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");

        var sSelect;

        //초기화
        this.ED132F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_02_102");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=" + Eco.decode(sSelect, "1", "P", "2", "P", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//부서

        	this.dsNCMst.addRow();

        	//결재라인 가져오기
        	this.lfn_I_FLOW_ORDER_LOAD("01", 71, sSabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);

        	this.edt_title.setFocus();
        };

        this.fnSectionCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.dsSection.rowposition = this.dsSection.findRow("SECTION_CODE", sSection_Code);
        }

        this.dsNCMst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		obj.setColumn(e.row, "NCMST_DATE", today);
        		obj.setColumn(e.row, "SECTION_CODE", sSection_Code);
        		obj.setColumn(e.row, "SECTION_SHORTCODE", sSection_ShortCode);
        		obj.setColumn(e.row, "NCMST_CLASS", 'Z' );
        		obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        		obj.setColumn(e.row, "NCMST_CONTRACTAMOUNT", 0);
        		obj.setColumn(e.row, "NCMST_HALFWAYAMOUNT", 0);
        		obj.setColumn(e.row, "NCMST_BALANCEAMOUNT", 0);
        		obj.setColumn(e.row, "NCMST_WRTINSURANCE", 0);
        		obj.setColumn(e.row, "NCMST_PFMCINSURANCE", 0);
        		obj.setColumn(e.row, "NCMST_PERMITEDATE", null);
        		obj.setColumn(e.row, "NCMST_PERMITE", "0" );
        		obj.setColumn(e.row, "OPEN_CHECK", "1");

        		if(obj.getColumn(e.row, "NCMST_DATE" ) >= "20180820")
        			this.Div00.form.ck_open.set_visible(true);

        		this.edt_contractNo.text = sSection_ShortName + "-"
        								+ obj.getColumn(e.row, "NCMST_CLASS")
        								+ obj.getColumn(e.row, "NCMST_DATE").substr(2,4) + "-"
        								+ obj.getColumn(e.row, "NCMST_NO");
        		//첨부파일 초기화

        		this.Div00.form.btn_delete.enable = true;
        	}
        };

        //조회
        this.Tab00_Tabpage1_btn_search_onclick = function(obj,e)
        {
        		var inds = "dsNCMst=dsNCMst";
        		var outds = "dsNCMst=dsNCMst";
        		strArg	= "NCMST_SDATE=" + this.Tab00.Tabpage1.form.cal_sDate.value
        				+ " NCMST_EDATE=" + this.Tab00.Tabpage1.form.cal_eDate.value
        				+ " NCMST_CLASS=Z"
        				+ " EMPLOYEE_ID=" + sSabun
        				+ " SECTION_CODE=" + this.Tab00.Tabpage1.form.cb_section.value
        				+ " COMPETENCE=" + sSelect;

        		this.gfn_TransactionP("search","JSP/ed/ed132f_normalcontract.jsp", inds, outds, strArg, "fnSearchCallback", true, "P", false, this);
        };

        this.fnSearchCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.fn_getFiles(this.dsNCMst.getColumn(this.dsNCMst.position, "I_FLOW_ID"));
        		this.lfn_Approval_Select(this.dsNCMst.getColumn(this.dsNCMst.position, "I_FLOW_ID"), this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//결재라인 가져오기
        	}
        }

        this.Grid01_oncellclick = function(obj,e)
        {
        	this.fn_getFiles(this.dsNCMst.getColumn(e.row, "I_FLOW_ID"));
        	this.lfn_Approval_Select(this.dsNCMst.getColumn(e.row, "I_FLOW_ID"), this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//결재라인 가져오기
        };


        //결재라인 설정
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.dsNCMst.getColumn(this.dsNCMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("본인이 올린 서류만 결재라인을 설정할 수 있습니다.");
        		return false;
        	}

        	var objParam = {p_fnum : 71,
        					p_ffnum : 7,
        					p_DS_GW_K : this.DS_GW_K,
        					p_DS_GW_H : this.DS_GW_H,
        					p_DS_GW_C : this.DS_GW_C,
        					p_DS_GW_D : this.DS_GW_D};

        	this.lfn_showModal("popupTemp", objParam, "gw::GW120.xfdl", "", this, '', '', 670, 750);

        };

        //신규
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	if(this.dsNCMst.rowcount > 0)
        		this.Div00_btn_save_onclick();

        	this.dsApproval.clearData();
        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();
        	this.dsNCMst.clearData();
        	this.ds_file.clearData();
        	this.dsNCMst.addRow();
        	this.edt_title.setFocus();
        };

        //저장
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	var setSave = true;
        	var nRow = this.dsNCMst.rowposition;


        	if(!this.fn_mst_checkRow(nRow))
        	{
        		setSave = false;
        		return false;
        	}

        	if(this.fn_approval_chk() && setSave)
        	{
        		if(this.dsNCMst.getColumn(nRow, "NCMST_DELETE") == "D")
        			this.dsNCMst.deleteRow(nRow);

        		var str_url = "JSP/ed/ed132f_normalcontract_dml.jsp"
        		var inds = "dsNCMst=dsNCMst:U";
        		this.gfn_TransactionP(this.dsNCMst.getRowType(nRow),str_url, inds, "", "", "fnSaveCallback", true, "P", false, this);
        	}
        	else
        		alert("본인이 작성하지 않았거나 결재진행 중인 문서는 수정 및 삭제 할 수 없습니다.");
        };

        this.fnSaveCallback = function(svcId, errCode, errMsg, gv_rt_mst_id, gv_rt_mst_no, gv_rt_i_flow_id)
        {
        	var strArg, open_i_flow_id;

        	if(errCode != 0)
        		alert(errMsg);
        	else if(svcId != 8) // delete 아닐 때
        	{
        		if(svcId == 2)
        		{
        			var nRow = this.dsNCMst.rowposition;
        			var rt_NCMST_ID =nexacro.getApplication().gv_rt_mst_id;
        			var rt_NCMST_NO =nexacro.getApplication().gv_rt_mst_no;
        			open_i_flow_id =nexacro.getApplication().gv_rt_i_flow_id;

        			this.dsNCMst.setColumn(nRow, "NCMST_ID", rt_NCMST_ID);
        			this.dsNCMst.setColumn(nRow, "NCMST_NO", rt_NCMST_NO);
        			this.dsNCMst.setColumn(nRow, "I_FLOW_ID", open_i_flow_id);

        			this.dsNCMst.setColumn(nRow, "NCMST_CONTRACTNO",
        				sSection_ShortName + "-" + this.dsNCMst.getColumn(nRow, "NCMST_CLASS") +
        				this.dsNCMst.getColumn(nRow, "NCMST_DATE").substr(2,4) + "-" +
        				this.dsNCMst.getColumn(nRow, "NCMST_NO") );

        			this.dsNCMst.setRowType(nRow, 1);

        		}
        		else
        		{
        			open_i_flow_id = this.dsNCMst.getColumn(this.dsNCMst.rowposition, "I_FLOW_ID");
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

        		if(this.ds_file.rowcount > 0 )
        		{
        			var dt = new Date();
        			var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        			this.lfn_FileUpload_Save(gv_urlFile + "/jsp", open_i_flow_id, vFileSubUrl);
        		}
        	}
        }

        //결재라인 확인
        this.fn_approval_chk = function()
        {
        	var chkRow = this.dsApproval.findRow("SABUN", sSabun); //자신의 결재라인 체크

        	//결재라인이 설정 되어 있는데 작성자와 사용자가 다르거나 결재라인에 없거나 다음 결재자가 승인한 경우
        	if( (this.dsApproval.rowcount >0 ) && ( (this.dsNCMst.getColumn(this.dsNCMst.rowposition, "EMPLOYEE_ID") != sSabun) || (chkRow == -1) || (this.dsApproval.getColumn(chkRow+1, "STATUS") == 1) ) )
        		return false;
        	else
        		return true;
        }

        // dsNSMST Row Check
        this.fn_mst_checkRow = function(nRow)
        {
        	if(nRow == -1)
        		return true;

        	if(this.dsNCMst.getColumn(nRow, "SECTION_CODE") == null)
        	{
        		alert("부서를 선택해주세요.");
        		this.cb_section.setFocus();
        		return false;
        	}

        	if(this.dsNCMst.getColumn(nRow, "NCMST_TITLE") == null)
        	{
        		alert("계약건명을 입력해주세요.");
        		this.edt_title.setFocus();
        		return false;
        	}

        	if(this.edt_tradeName.value == null)
        	{
        		alert("저자/업체를 선택해주세요.");
        		this.btn_name_onclick();
        		return false;
        	}

        	if(this.dsNCMst.getColumn(nRow, "NCMST_CONTENTS") == null)
        	{
        		alert("계약내용을 입력해주세요.");
        		this.edt_title.setFocus();
        		return false;
        	}

        	if(this.dsNCMst.getColumn(nRow, "NCMST_CONTENTS") == null)
        	{
        		alert("계약내용을 선택해주세요.");
        		this.txt_contents.setFocus();
        		return false;
        	}

        	if(this.dsNCMst.getColumn(nRow, "NCMST_SCONTRACTYEAR") == null)
        	{
        		alert("계약기간을 선택해주세요.");
        		this.cal_satrtDate.setFocus();
        		return false;
        	}

        	if(this.dsNCMst.getColumn(nRow, "NCMST_ECONTRACTYEAR") == null)
        	{
        		alert("계약기간을 선택해주세요.");
        		this.cal_endDate.setFocus();
        		return false;
        	}

        	if(this.dsNCMst.getColumn(nRow, "NCMST_DELIVERYDATE") == null)
        	{
        		alert("인도기일을 선택해주세요.");
        		this.cal_deliveryDate.setFocus();
        		return false;
        	}

        	if( (this.dsApproval.rowcount <= 0) && (this.DS_GW_K.rowcount <= 0) )
        	{
        		alert("결재라인을 선택해주세요");
        		this.Div00_btn_tempchk_onclick();
        		return false;
        	}

        	return true;
        }

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {
        	if(this.fn_approval_chk())
        	{
        		if(this.confirm("삭제하시겠습니까?"))
        		{
        			this.dsNCMst.setColumn(this.dsNCMst.rowposition, "NCMST_DELETE", "D");
        			this.Div00_btn_save_onclick();
        		}
        	}
        	else
        		alert("본인이 작성하지 않았거나 결재진행 중인 문서는 수정 및 삭제 할 수 없습니다.");
        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var nRow = this.dsNCMst.rowposition;
        	var nNCMST_ID = this.dsNCMst.getColumn(nRow, "NCMST_ID");
        	var i_flow_id = this.dsNCMst.getColumn(nRow, "I_FLOW_ID");

        	if(nNCMST_ID != null)
        	{
        		var rdUrl, rdParam;

        		rdUrl = gv_urlMrd + "/ed/ED132.mrd";

        		rdParam  = "/rp [1][" + i_flow_id + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        	else
        		alert("조회된 항목이 없습니다.");

        };

        //저자,업체 선택
        this.btn_name_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupSelect", "", "ed::EDAthrCust_SelectF.xfdl", "popupSelectCallBack", this, 10, 58, 300, 100);
        };

        this.popupSelectCallBack = function(svcId, rt_value)
        {
        	if(rt_value == "저자")
        	{
        		this.lfn_showModal("popuppAuthor", "", "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        	}
        	else if(rt_value == "업체")
        	{
        		this.lfn_showModal("popuppAuthor", "", "ed::EDCust_SearchF.xfdl", "", this, 10, 58, 500, 550);
        	}
        }

        //찾은 저자 데이터 넣어주기
        this.fn_setAuthorValue = function(rtArray)
        {
        	nRow = this.dsNCMst.rowposition;

        	this.dsNCMst.setColumn(nRow, "TRADENAME", rtArray[0]);
        	this.dsNCMst.setColumn(nRow, "ATHR_IDENTITY", rtArray[10]);
        	this.dsNCMst.setColumn(nRow, "CUST_GUBN", "");
        	this.dsNCMst.setColumn(nRow, "CUST_CODE", "");
        	this.dsNCMst.setColumn(nRow, "NCMST_OPPONENTKIND", "P");
        }

        //찾은 업체 데이터 넣어주기
        this.fn_setCustValue = function(rtArray)
        {
        	nRow = this.dsNCMst.rowposition;

        	this.dsNCMst.setColumn(nRow, "TRADENAME", rtArray[0]);
        	this.dsNCMst.setColumn(nRow, "ATHR_IDENTITY", null);
        	this.dsNCMst.setColumn(nRow, "CUST_GUBN", rtArray[1]);
        	this.dsNCMst.setColumn(nRow, "CUST_CODE", rtArray[2]);
        	this.dsNCMst.setColumn(nRow, "NCMST_OPPONENTKIND", "C");
        }

        //계약총액 계산하기
        this.medt_balanceamount_onkillfocus = function(obj,e)
        {
        	var nRow = this.dsNCMst.rowposition;
        	this.dsNCMst.setColumn(nRow, "NCMST_CONTRACTTOTAMNT",
        				nexacro.toNumber(this.dsNCMst.getColumn(nRow, "NCMST_CONTRACTAMOUNT")) +
        				nexacro.toNumber(this.dsNCMst.getColumn(nRow, "NCMST_HALFWAYAMOUNT")) +
        				nexacro.toNumber(this.dsNCMst.getColumn(nRow, "NCMST_BALANCEAMOUNT")));
        };

        //첨부파일 가져오기
        this.fn_getFiles = function(i_flow_id)
        {
        	if(i_flow_id != null)
        	{
        		var inds = "ds_file=ds_file";
        		var outds = "ds_file=ds_file";
        		var strArg = "i_flow_id=" + i_flow_id;
        		this.gfn_TransactionP("select", "JSP/gw/SQL_GW130_FList_v3.jsp", inds, outds, strArg, "", false, "P", false, this);
        	}
        }

        //첨부파일 선택
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
        		this.lfn_FileDelete(this.ds_file, this.dsNCMst.getColumn(0, "I_FLOW_ID"), vFileSubUrl);
        	}
        };

        //첨부파일 다운로드
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        		this.lfn_FileDownload(this.fileDownTrans ,this.ds_file, gv_urlFile, e.row);
        };

        this.ED132F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED132F_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.Grid01);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED132F_onload,this);
            this.addEventHandler("onsize",this.ED132F_onsize,this);
            this.addEventHandler("ontimer",this.ED132F_ontimer,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_athrCust.addEventHandler("onclick",this.btn_name_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_10.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_balanceamount.addEventHandler("onkillfocus",this.medt_balanceamount_onkillfocus,this);
            this.Static00_04.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_09.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_11.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_12.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_13.addEventHandler("onclick",this.Static00_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btn_search.addEventHandler("onclick",this.Tab00_Tabpage1_btn_search_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.Static00_14.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_06.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.dsNCMst.addEventHandler("onrowsetchanged",this.dsNCMst_onrowsetchanged,this);
        };
        this.loadIncludeScript("ED132F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
