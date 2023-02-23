(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED131F");
            this.set_titletext("표준계약 품의서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSCMst", this);
            obj._setContents("<ColumnInfo><Column id=\"SCMST_CONTRACTNO\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"SCMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_BOOKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_AVAILABLETERM\" type=\"INT\" size=\"256\"/><Column id=\"SCMST_ADDPROMISE\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_ADDDOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_PERMITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_PERMITEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"SCMST_PERMITE\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"256\"/><Column id=\"SCMST_PRESENTQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCMST_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSCDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCDTL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_COMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_UNIVSTUDY\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_HOMEADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_HOMETEL\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_HP\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_COMADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_COMTEL\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SCDTL_DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCDTL_ROYALTYRATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCDTL_CONTRACTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCDTL_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"SCDTL_ECS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsPlate", this);
            obj._setContents("<ColumnInfo><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_BNDSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","98%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","63","25","311",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","172",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","242",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","105",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"7","63","25","38",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("ck_open","156","12","78","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("부서공유");
            obj.set_value("true");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","75","25","606",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("내용추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","75","25","686",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("신규카드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"7","90","25","767",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
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
            obj.set_text("제품명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:3","60","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","cb_section:3","60","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계약서 종류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_contractKind","Static00_01:10","60","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_contractKind_innerdataset = new nexacro.NormalDataset("rdo_contractKind_innerdataset", obj);
            rdo_contractKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">매절</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">인세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_contractKind_innerdataset);
            obj.set_text("매절");
            obj.set_value("A");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","rdo_contractKind:7","60","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계약서 번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SCMst_bookName","Static00_00:3","102","39.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","edt_SCMst_bookName:6","102","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("판형");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_plate","Static00_04:4","102","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("dsPlate");
            obj.set_codecolumn("PLT_CODE");
            obj.set_datacolumn("PLT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCMst_availableTerm","cb_plate:5","102","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출판권 유효기간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","15","145","100","140",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("추가 약정사항");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_SCMst_addPromise","Static00_06:3","144","39.31%","140",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","txa_SCMst_addPromise:6","145","7.69%","140",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("첨부서류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_jumin","15","288","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("주민번호");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","btn_jumin:3","289","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_format("###### - #@@@@@#");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","medt_juminNo:5","289","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저자");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","btn_name:3","289","15.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","edt_name:5","289","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("원고량");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_SCDtl_qty","Static00_08:4","290","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCDtl_contractAmount","medt_SCDtl_qty:6","290","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("쪽당원고료");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","15","332","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("인도기일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_SCDtl_deliveryDate","Static00_10:3","332","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCDtl_royaltyRate","cal_SCDtl_deliveryDate:5","332","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("원고료 \r\n사용료 비율");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_SCDtl_royaltyRate","st_SCDtl_royaltyRate:3","332","15.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_format("##.##");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCMst_presentQty","medt_SCDtl_royaltyRate:5","334","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("증정본부수");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_SCMst_contractNo","Static00_02:4","60","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","ed_SCMst_contractNo:5","60","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("전자계약여부");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_ecs","Static00_13:13","60","9%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("전자계약");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","390","98%","313",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsSCDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"134\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주민번호\"/><Cell col=\"1\" text=\"저자명\"/><Cell col=\"2\" text=\"직장명\"/><Cell col=\"3\" text=\"졸업학교\"/><Cell col=\"4\" text=\"전공\"/><Cell col=\"5\" text=\"원고량\"/><Cell col=\"6\" text=\"인도기일\"/><Cell col=\"7\" text=\"사용료 비율\"/><Cell col=\"8\" text=\"원고료\"/><Cell col=\"9\" text=\"전자계약\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_JUMINNO2\" displaytype=\"mask\" maskeditformat=\"######-#@@@@@#\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:ATHR_NAME\"/><Cell col=\"2\" text=\"bind:ATHR_COMNAME\"/><Cell col=\"3\" text=\"bind:UNIV_NAME\"/><Cell col=\"4\" text=\"bind:ATHR_UNIVSTUDY\"/><Cell col=\"5\" text=\"bind:SCDTL_QTY\" maskeditformat=\"#,0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:SCDTL_DELIVERYDATE\"/><Cell col=\"7\" text=\"bind:SCDTL_ROYALTYRATE\" displaytype=\"mask\" maskeditformat=\"#0.##\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:SCDTL_CONTRACTAMOUNT\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,0\"/><Cell col=\"9\" text=\"bind:SCDTL_ECS\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_SCMst_availableTerm","st_SCMst_availableTerm:4","101","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var cb_SCMst_availableTerm_innerdataset = new nexacro.NormalDataset("cb_SCMst_availableTerm_innerdataset", obj);
            cb_SCMst_availableTerm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1년</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2년</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3년</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4년</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5년</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6년</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7년</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8년</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9년</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10년</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11년</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12년</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13년</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14년</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15년</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16년</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17년</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18년</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19년</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20년</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">교육과정 종료시</Col></Row></Rows>");
            obj.set_innerdataset(cb_SCMst_availableTerm_innerdataset);
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_SCMst_addDocument","Static00_07:5","144","38.92%","140",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_SCDtl_contractAmount","st_SCDtl_contractAmount:4","290","15.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_SCMst_presentQty","st_SCMst_presentQty:4","334","15.31%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_format("#,#");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cb_SCMst_availableTerm","value","dsSCMst","SCMST_AVAILABLETERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cb_plate","value","dsSCMst","PLT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cb_section","value","dsSCMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdo_contractKind","value","dsSCMst","SCMST_CLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","txa_SCMst_addPromise","value","dsSCMst","SCMST_ADDPROMISE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txa_SCMst_addDocument","value","dsSCMst","SCMST_ADDDOCUMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","medt_juminNo","value","dsSCDtl","ATHR_JUMINNO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_name","value","dsSCDtl","ATHR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","medt_SCDtl_contractAmount","value","dsSCDtl","SCDTL_CONTRACTAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medt_SCDtl_royaltyRate","value","dsSCDtl","SCDTL_ROYALTYRATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","medt_SCMst_presentQty","value","dsSCMst","SCMST_PRESENTQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_SCMst_bookName","value","dsSCMst","SCMST_BOOKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ed_SCMst_contractNo","value","dsSCMst","SCMST_CONTRACTNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","medt_SCDtl_qty","value","dsSCDtl","SCDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cal_SCDtl_deliveryDate","value","dsSCDtl","SCDTL_DELIVERYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","ck_ecs","value","dsSCDtl","SCDTL_ECS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.ck_open","value","dsSCMst","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED131F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED131F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED131F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED131F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");
        var sSelect, iI_Flow_id;

        var sUserCompetence1 = "1";   // 일반사용자
        var sUserCompetence2 = "2";   // 부서승인권자
        var sUserCompetence3 = "3";   // 부서장
        var sUserCompetence4 = "4";   // 일반승인권자
        var sUserCompetence5 = "5";   // 승인1차권한
        var sUserCompetence6 = "6";   // 승인2차권한

        this.ED131F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_02_101");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_SELECT");
        	sSelect = Eco.decode(this.fnisNull(sSelect), true , "1", sSelect);

        	var strArg  = "PLATE_CODE= ";
        		strArg += " SQL_SET= ";
        	this.gfn_TransactionP("search","JSP/mk/getData_plate.jsp", "dsPlate=dsPlate",  "dsPlate=dsPlate", strArg, "", false, "P", false, this);	//판형

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=" + Eco.decode(sSelect, "1", "P", "2", "P", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//부서

        	if(iI_Flow_id == null)
        		this.dsSCMst.addRow();
        	else
        	{
        		var inds = "dsSCMst=dsSCMst";
        		var outds 	= "dsSCMst=dsSCMst";
        		strArg	= "SET_OPTION=0"
        				+ " I_FLOW_ID=" + iI_Flow_id
        				+ " COMPETENCE=" +sSelect ;

        		this.gfn_TransactionP("search","JSP/ed/ed131f_standardcontract_mst.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        	}

        	this.edt_SCMst_bookName.setFocus();
        };

        this.fnCallback = function(svcid, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(svcid + "::" + errMsg);
        	else
        	{
        		this.lfn_Approval_Select(this.dsSCMst.getColumn(this.dsSCMst.rowposition, "I_FLOW_ID"), this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        	}
        };

        this.fnSectionCallback = function(svcid, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(svcid + "::" + errMsg);
        	else
        		this.dsSection.rowposition = this.dsSection.findRow("SECTION_CODE", sSection_Code);
        };

        //dsSCMst 초기화
        this.dsSCMst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		obj.setColumn(e.row, "SCMST_DATE", today);
        		obj.setColumn(e.row, "SECTION_CODE", sSection_Code);
        		obj.setColumn(e.row, "SECTION_SHORTCODE", sSection_ShortCode);
        		obj.setColumn(e.row, "SCMST_CLASS", "A");
        		obj.setColumn(e.row, "PLT_CODE", null);
        		obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        		obj.setColumn(e.row, "EMPLOYEE_NAME", sName);
        		obj.setColumn(e.row, "SCMST_BOOKNAME", null);
        		obj.setColumn(e.row, "SCMST_AVAILABLETERM", 0);
        		obj.setColumn(e.row, "SCMST_ADDPROMISE", null);
        		obj.setColumn(e.row, "SCMST_ADDDOCUMENT", null);
        		obj.setColumn(e.row, "SCMST_PERMITEDATE", null);
        		obj.setColumn(e.row, "SCMST_PERMITEUSER", null);
        		obj.setColumn(e.row, "SCMST_PERMITE", "0");
        		obj.setColumn(e.row, "SCMST_PRESENTQTY", 0);
        		obj.setColumn(e.row, "I_FLOW_ID", null);
        		obj.setColumn(e.row, "OPEN_CHECK", "1");

        		if(obj.getColumn(e.row, "SCMST_DATE") >= '20180820')
        			this.Div00.form.ck_open.set_visible(true);

        		this.ed_SCMst_contractNo.text = sSection_ShortName  + "-"
        									  + obj.getColumn(e.row, "SCMST_CLASS")
        									  + obj.getColumn(e.row, "SCMST_DATE").substr(2,4) + "-"
        									  + obj.getColumn(e.row, "SCMST_NO");

        		this.rdo_contractKind.index = 0;
        		iI_Flow_id = "";

        		this.dsApproval.clearData();

        		//결재라인 가져오기
        		this.lfn_I_FLOW_ORDER_LOAD("01", 70, sSabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);

        		this.dsSCDtl.clearData();
        		this.dsSCDtl.addRow();
        	}
        };

        //dsSCDtl 초기화
        this.dsSCDtl_onrowsetchanged = function(obj,e)
        {
        	obj.setColumn(e.row, "SCDTL_SEQ", (this.dsSCDtl.rowcount + 1).toString().padLeft(3,"0"));
        	obj.setColumn(e.row, "SCDTL_QTY",0);
        	obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        	obj.setColumn(e.row, "ATHR_IDENTITY", null);
        	obj.setColumn(e.row, "SCDTL_ROYALTYRATE", 0);
        	obj.setColumn(e.row, "SCDTL_DELIVERYDATE", null);
        	obj.setColumn(e.row, "SCDTL_ROYALTYRATE", 0);
        	obj.setColumn(e.row, "SCDTL_CONTRACTAMOUNT", 0);
        	obj.setColumn(e.row, "SCDTL_DELETE", " ");
        	obj.setColumn(e.row, "SCDTL_ECS", 1);
        };

        //결재라인설정
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.dsSCMst.getColumn(this.dsSCMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("본인이 올린 서류만 결재라인을 설정할 수 있습니다.");
        		return false;
        	}

        	var objParam = {p_fnum : 70,
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
        	if(this.dsSCMst.rowcount > 0)
        		this.Div00_btn_save_onclick();

        	this.dsApproval.clearData();
        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();
        	this.dsSCMst.clearData();
        	this.dsSCMst.addRow();
        	this.edt_SCMst_bookName.setFocus();
        };

        //내용추가
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	if(this.dsSCMst.getColumn(this.dsSCMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("본인이 올린 서류만 수정할 수 있습니다.");
        		return false;
        	}else if(this.fn_dtl_save() == true || this.dsSCMst.getColumn(this.dsSCMst.rowposition, "SCMST_ID") == null)
        	{
        		this.dsSCDtl.addRow();
        		this.medt_juminNo.setFocus();
        	}
        };

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsSCMst,
        					dsParam2:this.dsSCDtl,
        					dsParam3:this.dsSection,
        					piI_Flow_id:iI_Flow_id,
        					pSelect:sSelect}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupSearch", objParam, "ed::ED131_SearchF.xfdl", "popupCallback", this, 10, 58, 400, 390);
        };

        this.popupCallback = function(svcId, rt_value)
        {
        	this.lfn_Approval_Select(rt_value, this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        }

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {
        	var chkRow = this.dsApproval.findRow("KIND", "1");

        	if(this.dsSCMst.getColumn(this.dsSCMst.rowposition, "EMPLOYEE_ID") != sSabun || this.dsApproval.getColumn(chkRow,"STATUS") == "1" || this.dsApproval.getColumn(chkRow,"STATUS") == "0")
        	{
        		alert("본인이 작성하지 않았거나 승인된 카드는 삭제할 수 없습니다.");
        		return false;
        	}else
        	{
        		alert("전체삭제를 할 경우 복원할 수 없습니다.\n\n" +
        			  "새로운 내용을 추가하실 경우는 삭제하지 마시고 신규버튼을 눌러 작업해 주십시요.");
        		this.lfn_showModal("popupDelete", "", "ed::EDMstDtlCancel_ConformF.xfdl", "popupDeleteCallBack", this, 10, 58, 280, 100);
        	}
        };

        this.popupDeleteCallBack = function(svcId, rt_value)
        {
        	if(rt_value == "전체")
        	{
        		this.dsSCMst.deleteRow(this.dsSCMst.rowposition);
        		this.fn_mst_save("delete");
        		this.dsSCDtl.clearData();
        	}
        	else if(rt_value == "내용")
        	{
        		this.dsSCDtl.setColumn(this.dsSCDtl.rowposition, "SCDTL_DELETE", "D");
        		this.dsSCDtl.filter("SCDTL_DELETE!='D'");
        		this.fn_dtl_save();
        	}
        }


        //저장
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	var chkRow = this.dsApproval.findRow("KIND", "1");
        	var rowType = this.dsSCMst.getRowType(this.dsSCMst.rowposition);

        	if(this.dsSCMst.getColumn(this.dsSCMst.rowposition, "EMPLOYEE_ID") != sSabun || this.dsApproval.getColumn(chkRow,"STATUS") == "1" || this.dsApproval.getColumn(chkRow,"STATUS") == "0")
        	{
        		alert("본인이 작성하지 않았거나 결재진행 중인 문서는 수정 및 삭제 할 수 없습니다.");
        		return false;
        	}else
        	{
        		if(rowType == 2 || rowType == 4) //insert || update
        		{
        			if(this.fn_mst_save(rowType))
        				this.fn_dtl_save();
        		}else
        			this.fn_dtl_save();
        	}
        };

        //닫기
        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 매절/인세 변경시 화면구성 변경
        this.rdo_contractKind_canitemchange = function(obj,e)
        {
        	if(e.postvalue == "A" || e == "A")	//새로 변경된 값이 A일 경우 or 조회결과 값이 A일 경우
        	{
        		this.st_SCMst_availableTerm.set_visible(false);
        		this.cb_SCMst_availableTerm.set_visible(false);
        		this.st_SCDtl_royaltyRate.set_visible(false);
        		this.medt_SCDtl_royaltyRate.set_visible(false);
        		this.st_SCMst_presentQty.set_visible(false);
        		this.medt_SCMst_presentQty.set_visible(false);

        		this.st_SCDtl_contractAmount.set_text("쪽당원고료");
        		this.Grid00.setRealColSize("body",7,0,true);

        	}else
        	{
        		this.st_SCMst_availableTerm.set_visible(true);
        		this.cb_SCMst_availableTerm.set_visible(true);
        		this.st_SCDtl_royaltyRate.set_visible(true);
        		this.medt_SCDtl_royaltyRate.set_visible(true);
        		this.st_SCMst_presentQty.set_visible(true);
        		this.medt_SCMst_presentQty.set_visible(true);

        		this.st_SCDtl_contractAmount.set_text("계약금");
        		this.Grid00.setRealColSize("body",7,100,true);
        	}

        	this.Grid00.setCellProperty("head",8,"text",this.st_SCDtl_contractAmount.text);
        };

        //저자 착기
        this.btn_name_onclick = function(obj,e)
        {
        	this.lfn_showModal("popuppAuthor", "", "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        };

        //찾은 저자 데이터 넣어주기
        this.fn_setAuthorValue = function(rtArray)
        {
        	nRow = this.dsSCDtl.rowposition;

        	this.dsSCDtl.setColumn(nRow, "ATHR_NAME", rtArray[0]);
        	this.dsSCDtl.setColumn(nRow, "ATHR_IDENTITY", rtArray[10]);
        	this.dsSCDtl.setColumn(nRow, "ATHR_COMNAME", rtArray[2]);
        	this.dsSCDtl.setColumn(nRow, "ATHR_UNIVSTUDY", rtArray[3]);
        	this.dsSCDtl.setColumn(nRow, "UNIV_NAME", rtArray[5]);
        	this.dsSCDtl.setColumn(nRow, "ATHR_JUMINNO2", rtArray[6]);
        }

        //dsSCMst save
        this.fn_mst_save = function(rowType)
        {
        	var setSave = true;

        	if( (rowType != "delete") && (this.fn_mst_checkRow(this.dsSCMst.rowposition) == false))
        	{
        		setSave = false;
        		return false;
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed131f_standardcontract_mst_dml.jsp";
        		var inds = "dsSCMst=dsSCMst:U";

        		this.gfn_TransactionP(rowType, str_url, inds, "", "", "mstSave_callback", false, "P", false, this);

        		return true;
        	}
        }

        this.mstSave_callback = function(svcId, errCode, errMsg, gv_rt_mst_id, gv_rt_mst_no, gv_rt_i_flow_id)
        {
        	var open_i_flow_id, strArg;
        	var nRow = this.dsSCMst.rowposition;

        	if(errCode != 0)
        		alert(svcId + "::" + errMsg);
        	else if(svcId != "delete")
        	{
        		if(svcId == "2")//insert
        		{
        			var rt_SCMST_ID =nexacro.getApplication().gv_rt_mst_id;
        			var rt_SCMST_NO =nexacro.getApplication().gv_rt_mst_no;
        			open_i_flow_id =nexacro.getApplication().gv_rt_i_flow_id;

        			this.dsSCMst.setColumn(nRow, "SCMST_ID", rt_SCMST_ID);
        			this.dsSCMst.setColumn(nRow, "SCMST_NO", rt_SCMST_NO);
        			this.dsSCMst.setColumn(nRow, "I_FLOW_ID", open_i_flow_id);

        			this.dsSCMst.setColumn(nRow, "SCMST_CONTRACTNO",
        								sSection_ShortName + "-" +
        								this.dsSCMst.getColumn(nRow, "SCMST_CLASS") +
        								this.dsSCMst.getColumn(nRow, "SCMST_DATE").substr(2,4) + "-" +
        								this.dsSCMst.getColumn(nRow, "SCMST_NO"));

        			this.dsSCMst.setRowType(nRow, 1); //nomal 저장
        		}
        		else if(svcId == "4")
        		{
        			this.dsSCMst.getColumn(nRow, "I_FLOW_ID");
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

        //dsSCMst check row
        this.fn_mst_checkRow = function(nRow)
        {
        	if(nRow == -1)
        		return true;

        	if(this.dsSCMst.getColumn(nRow, "SECTION_CODE") == null )
        	{
        		alert("부서를 선택해주세요");
        		this.cb_section.dropdown();
        		return false;
        	}

        	if(this.dsSCMst.getColumn(nRow, "SCMST_BOOKNAME") == null )
        	{
        		alert("제품명을 입력해주세요");
        		this.edt_SCMst_bookName.setFocus();
        		return false;
        	}

        	if(this.dsSCMst.getColumn(nRow, "PLT_CODE") == null )
        	{
        		alert("판형을 선택해주세요");
        		this.cb_plate.dropdown();
        		return false;
        	}

        	if( (this.rdo_contractKind.index == 1) &&
        		( (this.dsSCMst.getColumn(nRow, "SCMST_AVAILABLETERM") == null) || (this.dsSCMst.getColumn(nRow, SCMST_AVAILABLETERM) == 0) ) )
        	{
        		alert("출판권 유효기간을 입력해주세요");
        		this.cb_SCMst_availableTerm.setFocus();
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

        //dsSCDtl save
        this.fn_dtl_save = function()
        {
        	var setSave = true;
        	var str_url = "JSP/ed/ed131f_standardcontract_dtl_dml.jsp";
        	var inds = "dsSCDtl=dsSCDtl:U";

        	for(var i=0; i<this.dsSCDtl.rowcount; i++)
        	{
        		this.dsSCDtl.setColumn(i, "SCMST_ID", this.dsSCMst.getColumn(this.dsSCMst.rowposition, "SCMST_ID"));

        		if(this.fn_dtl_checkRow(i) == false || this.dsSCDtl.getColumn(i, "SCMST_ID") == null)
        		{
        			setSave = false;
        			return false;
        		}
        	}

        	if(setSave)
        		this.gfn_TransactionP("save", str_url, inds, "", "", "dtlSave_callback", false, "P", false, this);

        	return true;
        }

        //dsSCDtl check row
        this.fn_dtl_checkRow = function(nRow)
        {
        	if(nRow == -1)
        		return true;

        	if(this.dsSCDtl.getColumn(nRow, "ATHR_IDENTITY") == null)
        	{
        		alert("저자를 선택해 주세요.");
        		this.btn_name_onclick();
        		return false;
        	}

        	if( (this.dsSCDtl.getColumn(nRow, "SCDTL_QTY") == null) ||
        		(this.dsSCDtl.getColumn(nRow, "SCDTL_QTY") == 0))
        	{
        		alert("원고량을 입력해 주세요.");
        		this.medt_SCDtl_qty.setFocus();
        		return false;
        	}

        	if(this.dsSCDtl.getColumn(nRow, "SCDTL_DELIVERYDATE") == null)
        	{
        		alert("인도기일을 선택해 주세요.");
        		this.cal_SCDtl_deliveryDate.setFocus();
        		return false;
        	}

        	return true;
        }

        //인세,매절 자동저장

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupPrint", "", "ed::ED150_Print_ConformF.xfdl", "popupPrintCallBack", this, 10, 58, 190, 220);
        };

        this.popupPrintCallBack = function(svcId, rt_value)
        {
        	var nRow = this.dsSCMst.rowposition;
        	var nSCMST_ID = this.dsSCMst.getColumn(nRow, "SCMST_ID");
        	var i_flow_id = this.dsSCMst.getColumn(nRow, "I_FLOW_ID");
        	var rdUrl, rdParam;

        	if( nSCMST_ID != null)
        	{
        		if(rt_value == "표준계약서 품의서")
        		{
        			rdUrl = gv_urlMrd + "/ed/ED131_0.mrd";
        			rdParam  = "/rp [1]["+ i_flow_id + "]";

        			this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        		}
        		/*
        			표준계약서 (공저자) / 표준계약서 (개별저자) 사용여부 확인 필요
        		*/
        		else if(rt_value == "전자계약서 보기")
        		{
        			//C99995 (법무) 계정의 경우 부서코드를 못가져와서 setColumn 해줌
        			var sRow = this.dsApproval.findRow("SABUN", "C99995");
        			this.dsApproval.setColumn(sRow, "SECTION_CODE", "96600");

        			if(this.dsApproval.getColumn(sRow, "STATUS") == "1")
        			{
        				if(this.dsSCDtl.getMax("SCDTL_ECS") == "1")
        				{
        					var Url = "http://ecs.chunjae.co.kr/loginSave.do?loginGb=login&scmst_Id=" +
        					this.dsSCMst.getColumn(this.dsSCMst.rowposition, "SCMST_ID") + "&mode=save";
        					system.execBrowser(Url);
        				}else
        					alert("전자계약을 확정한 저자가 없습니다.");
        			}else
        				alert("결재완료된 약정서가 아닙니다. 최종결재 후 전자계약서를 볼 수 있습니다");
        		}

        	}else
        		alert("조회된 항목이 없습니다");
        }

        this.ED131F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED131F_ontimer = function(obj,e)
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

        this.fnisNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED131F_onload,this);
            this.addEventHandler("onsize",this.ED131F_onsize,this);
            this.addEventHandler("ontimer",this.ED131F_ontimer,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.rdo_contractKind.addEventHandler("onitemchanged",this.rdo_contractKind_canitemchange,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_04.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_SCMst_availableTerm.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_06.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_jumin.addEventHandler("onclick",this.btn_name_onclick,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
            this.Static00_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_SCDtl_contractAmount.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_10.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_SCDtl_royaltyRate.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_SCMst_presentQty.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_13.addEventHandler("onclick",this.Static00_onclick,this);
            this.dsSCMst.addEventHandler("onrowsetchanged",this.dsSCMst_onrowsetchanged,this);
            this.dsSCDtl.addEventHandler("onrowsetchanged",this.dsSCDtl_onrowsetchanged,this);
        };
        this.loadIncludeScript("ED131F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
