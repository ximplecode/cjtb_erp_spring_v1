(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED151F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutReqMst", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTREQ_CLASS\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTREQMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"OUTREQMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"OUTREQ_NO\" type=\"STRING\" size=\"12\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"OUTREQMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/><Column id=\"OPEN_CHECK\" type=\"CHAR\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutReqDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTREQMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTREQDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"OUTREQDTL_SETEDIT\" type=\"STRING\" size=\"1\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKCODEYEAR\" type=\"STRING\" size=\"17\"/><Column id=\"OUTREQDTL_WORKCONTENT\" type=\"STRING\" size=\"60\"/><Column id=\"OUTREQDTL_BOOKMSTNAME\" type=\"STRING\" size=\"60\"/><Column id=\"OUTREQDTL_TONE\" type=\"INT\" size=\"1\"/><Column id=\"OUTREQDTL_STANDARD\" type=\"STRING\" size=\"16\"/><Column id=\"OUTREQDTL_QTY\" type=\"DECIMAL\" size=\"8\"/><Column id=\"OUTREQDTL_UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"OUTREQDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"OUTREQDTL_WORKSDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTREQDTL_WORKEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDDTL_FINISHDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDMST_EXIST\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"OUTREQDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQDTL_RANGE\" type=\"STRING\" size=\"10\"/><Column id=\"OUTORDMST\" type=\"STRING\" size=\"12\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnscript", this);
            obj._setContents("<ColumnInfo><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_CG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_PERSON_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_PCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormpath", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"2\"/><Column id=\"F_NUM\" type=\"INT\" size=\"3\"/><Column id=\"F_SEQ\" type=\"INT\" size=\"2\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"APPROVAL_EMP\" type=\"STRING\" size=\"6\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
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


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order2", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"20\"/><Column id=\"F_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileD", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","97%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Button("btn_add",null,"7","75","25","606",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("내용추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
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

            obj = new Static("Static00_02","15","60","100","40",null,null,null,null,null,null,this);
            obj.set_text("의뢰서 번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outReqNo","Static00_02:2","60","14.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","edt_outReqNo:3","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("작성일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_mstDate","Static00_01:2","60","14.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_athrCust","cal_mstDate:2","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("저자/업체");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custName","btn_athrCust:2","60","14.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","edt_custName:3","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("담당자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14","15","144","100","40",null,null,null,null,null,null,this);
            obj.set_text("작업내용");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_workContent","Static00_14:0","144","22.97%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14_00","edt_workContent:4","144","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("작업범위");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_workRange","Static00_14_00:1","144","22.97%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCMst_availableTerm","edt_workRange:4","144","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("작업기간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emoloyeeName","Static00_00:2","60","14.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","15","102","100","40",null,null,null,null,null,null,this);
            obj.set_text("작업구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_mnScript","Static00_08:1","102","14.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsMnscript");
            obj.set_codecolumn("MNSCRIPT_CODE");
            obj.set_datacolumn("MNSCRIPT_NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_book","cb_mnScript:4","102","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("도서코드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","btn_book:3","102","12%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","edt_bookCode:3","102","3.44%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","edt_bookYear:2","102","30.16%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","edt_bookName:4","102","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("완료일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00","15","187","100","40",null,null,null,null,null,null,this);
            obj.set_text("색도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_tone","Static00_06_00:1","187","7.58%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_limitbymask("none");
            obj.set_format("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00_00","medt_tone:2","186","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("규격");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_standard","Static00_06_00_00_00:2","187","13.91%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCDtl_contractAmount","edt_standard:3","186","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("발주수량");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_qty","st_SCDtl_contractAmount:2","187","11.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_format("#,#.#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","medt_qty:3","186","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("발주단가");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_unitCost","Static00_10:2","186","11.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_11","medt_unitCost:2","187","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("발주금액");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amount","Static00_11:2","187","13.91%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_format("#,#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","15","380","97%","330",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("dsOutReqDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"도서코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서명\"/><Cell col=\"3\" rowspan=\"2\" text=\"작업내용\"/><Cell col=\"4\" rowspan=\"2\" text=\"색도\"/><Cell col=\"5\" rowspan=\"2\" text=\"규격\"/><Cell col=\"6\" colspan=\"3\" text=\"발주\"/><Cell col=\"9\" colspan=\"2\" text=\"작업기간\"/><Cell col=\"11\" rowspan=\"2\" text=\"완료일\"/><Cell col=\"12\" rowspan=\"2\" text=\"외주관리&#13;&#10;카드번호\"/><Cell row=\"1\" col=\"6\" text=\"수량\"/><Cell row=\"1\" col=\"7\" text=\"단가\"/><Cell row=\"1\" col=\"8\" text=\"예정금액\"/><Cell row=\"1\" col=\"9\" text=\"시작일자\"/><Cell row=\"1\" col=\"10\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:MNSCRIPT_NAME\"/><Cell col=\"1\" text=\"bind:BOOKCODEYEAR\"/><Cell col=\"2\" text=\"bind:OUTREQDTL_BOOKMSTNAME\"/><Cell col=\"3\" text=\"bind:OUTREQDTL_WORKCONTENT\"/><Cell col=\"4\" text=\"bind:OUTREQDTL_TONE\"/><Cell col=\"5\" text=\"bind:OUTREQDTL_STANDARD\"/><Cell col=\"6\" text=\"bind:OUTREQDTL_QTY\"/><Cell col=\"7\" text=\"bind:OUTREQDTL_UNITCOST\"/><Cell col=\"8\" text=\"bind:OUTREQDTL_AMOUNT\"/><Cell col=\"9\" text=\"bind:OUTREQDTL_WORKSDATE\"/><Cell col=\"10\" text=\"bind:OUTREQDTL_WORKEDATE\"/><Cell col=\"11\" text=\"bind:OUTORDDTL_FINISHDATE\"/><Cell col=\"12\" text=\"bind:OUTORDMST\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_finishDate","Static00_07:3","102","13.91%","40",null,null,null,null,null,null,this);
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_workSDate","st_SCMst_availableTerm:3","144","13.91%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_open","156","22","78","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("부서공유");
            obj.set_value("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_15","15","300","100","70",null,null,null,null,null,null,this);
            obj.set_text("첨부파일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","Static00_15:3","300","87.27%","70",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"809\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","grd_file:3","309","2.66%","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","grd_file:1","343","2.66%","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_workEDate","cal_workSDate:5","144","13.91%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_15_00","15","229","100","70",null,null,null,null,null,null,this);
            obj.set_text("서식처리\r\n절차");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","Static00_15_00:15","229","1140","68",null,null,null,null,null,null,this);
            obj.set_text("※ 1. 외주작업의뢰서는 2부를 작성하여 1부는 발주시에 외주처에 주고 1부는 회사에 보관한다. \n※ 2. 완료확인 난에는 작업완료 후에 팀장이 확인 서명하여야 한다. \n※ 3. 회사보관용 외주작업의뢰서는 결재시에 거래명세표에 첨부하여야 한다.");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_outReqNo","value","dsOutReqMst","OUTREQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_mstDate","value","dsOutReqMst","OUTREQMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_emoloyeeName","value","dsOutReqMst","EMPLOYEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_bookCode","value","dsOutReqDtl","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_bookYear","value","dsOutReqDtl","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_bookName","value","dsOutReqDtl","OUTREQDTL_BOOKMSTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","medt_unitCost","value","dsOutReqDtl","OUTREQDTL_UNITCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medt_amount","value","dsOutReqDtl","OUTREQDTL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cb_mnScript","value","dsOutReqDtl","MNSCRIPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cal_finishDate","value","dsOutReqDtl","OUTORDDTL_FINISHDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cal_workSDate","value","dsOutReqDtl","OUTREQDTL_WORKSDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_workContent","value","dsOutReqDtl","OUTREQDTL_WORKCONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","ck_open","value","dsWithHoldMst","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_custName","value","dsOutReqMst","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_workEDate","value","dsOutReqDtl","OUTREQDTL_WORKEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_workRange","value","dsOutReqDtl","OUTREQDTL_RANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","medt_qty","value","dsOutReqDtl","OUTREQDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_standard","value","dsOutReqDtl","OUTREQDTL_STANDARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","medt_tone","value","dsOutReqDtl","OUTREQDTL_TONE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED151F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED151F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED151F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED151F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSENM");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");

        var setAmountCode, sSelect;

        this.ED151F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_04_101");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	//작업구분
        	var strArg = "ORDER=0";
        	this.gfn_TransactionP("search","JSP/ed/mnscript_select.jsp", "dsMnscript=dsMnscript", "dsMnscript=dsMnscript", strArg, "fnMnscriptCallback", false, "P", false, this);

        	//신규작성
        	this.dsOutReqMst.addRow();

        	//결재라인 가져오기
        	this.lfn_I_FLOW_FOMPAHT2_LOAD(sSabun, this.dsFormpath);

        };

        //MST 초기화
        this.dsOutReqMst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		obj.setColumn(e.row, "OUTREQMST_DATE", today);
        		obj.setColumn(e.row, "SECTION_CODE", sSection_Code);
        		obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        		obj.setColumn(e.row, "EMPLOYEE_NAME", sName);
        		obj.setColumn(e.row, "CUST_GUBN", null);
        		obj.setColumn(e.row, "CUST_CODE", null);
        		obj.setColumn(e.row, "ATHR_IDENTITY", null);
        		obj.setColumn(e.row, "OPEN_CHECK", "1");

        		if(obj.getColumn(e.row, "OUTREQMST_DATE") >= "20180820")
        			this.ck_open.set_visible(true);

        		this.edt_outReqNo.text = obj.getColumn(e.row, "OUTREQMST_DATE") + "-" + obj.getColumn(e.row, "OUTREQMST_NO");

        		this.btn_athrCust.set_enable(true);
        		this.dsOutReqDtl.clearData();
        		this.dsOutReqDtl.addRow();
        	}
        };

        //DTL 초기화
        this.dsOutReqDtl_onrowsetchanged = function(obj,e)
        {
        	obj.setColumn(e.row, "OUTREQDTL_SEQ", (this.dsOutReqDtl.rowcount + 1).toString().padLeft(2,"0"));
        	obj.setColumn(e.row, "OUTREQDTL_SETEDIT", "0");
        	obj.setColumn(e.row, "MNSCRIPT_CODE", null);
        	obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        	obj.setColumn(e.row, "BOOKMST_ID", null);
        	obj.setColumn(e.row, "OUTREQDTL_WORKCONTENT", null);
        	obj.setColumn(e.row, "OUTREQDTL_BOOKMSTNAME", null);
        	obj.setColumn(e.row, "OUTREQDTL_STANDARD", null);
        	obj.setColumn(e.row, "OUTREQDTL_TONE", 0);
        	obj.setColumn(e.row, "OUTREQDTL_QTY", 0);
        	obj.setColumn(e.row, "OUTREQDTL_UNITCOST", 0);
        	obj.setColumn(e.row, "OUTREQDTL_AMOUNT", 0);
        	obj.setColumn(e.row, "OUTREQDTL_WORKSDATE", null);
        	obj.setColumn(e.row, "OUTREQDTL_WORKEDATE", null);
        	obj.setColumn(e.row, "OUTORDDTL_FINISHDATE", null);
        	obj.setColumn(e.row, "OUTORDMST_EXIST", "0");
        	obj.setColumn(e.row, "OUTREQDTL_RANGE", null);
        	obj.setColumn(e.row, "OUTREQDTL_DELETE", " ");

        	this.dsBookMst.clearData();
        	//this.ds_file.clearData();
        	//this.dsFormpath.clearData();
        };

        //결재라인 설정
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("본인이 올린 서류만 결재라인을 설정할 수 있습니다.");
        		return false;
        	}

        	var objParam = {p_fnum : 63,
        					p_ffnum : 7,
        					p_EMPLOYEE_ID : this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "EMPLOYEE_ID"),
        					P_SECTION_CODE : sSection_Code};

        	this.lfn_showModal("popupTemp", objParam, "gw::GW121.xfdl", "fnFompathCallback", this, '', '', 670, 750); //GW121_2
        };

        //신규카드 작성
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	this.dsOutReqMst.clearData();
        	this.dsOutReqMst.addRow();
        	this.ds_file.clearData();
        	this.dsFormpath.clearData();
        	this.dsApproval.clearData();
        	this.cb_mnScript.setFocus();
        };

        //내용추가
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	this.dsOutReqDtl.addRow();
        	trace(this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "OUTREQMST_ID"));
        	this.cb_mnScript.setFocus();
        };

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsOutReqMst,
        					dsParam2:this.dsOutReqDtl,
        					dsParam3:this.dsFormpath,
        					pSelect:sSelect,
        					pSabun:sSabun,
        					psectionCode:sSection_Code}; //popup 화면으로 전달할 값

        	this.lfn_showModal("popupSearch", objParam, "ed::ED151_SearchF.xfdl", "popupCallback", this, 10, 58, 400, 350);
        };

        this.popupCallback = function(svcId, rt_value)
        {
        	this.dsOutReqDtl.filter("OUTREQDTL_DELETE != 'D'");
        	this.fn_getFiles(rt_value);
        	this.lfn_Approval_Select(rt_value, this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//전자결재 승인 내역
        }

        //첨부파일 가져오기
        this.fn_getFiles = function(i_flow_id)
        {
        	if(i_flow_id != null)
        	{
        		var strUrl = "JSP/gw/SQL_GW130_FList_v3.jsp";
        		var inds = "ds_file=ds_file";
        		var outds = "ds_file=ds_file";
        		var strArg = "i_flow_id=" + i_flow_id;

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        	}
        }

        //첨부파일 다운로드
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        		this.lfn_FileDownload(this.fileDownTrans ,this.ds_file, gv_urlFile, e.row);
        };

        //결재라인확인
        this.fn_approval_chk = function()
        {
        	var chkRow = this.dsApproval.findRow("SABUN", sSabun); //자신의 결재라인 체크

        	//결재라인이 설정 되어 있는데 작성자와 사용자가 다르거나 결재라인에 없거나 다음 결재자가 승인한 경우
        	if( (this.dsApproval.rowcount >0 ) && ( (this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "EMPLOYEE_ID") != sSabun) || (chkRow == -1) || (this.dsApproval.getColumn(chkRow+1, "STATUS") == 1) ) )
        	{
        		alert("본인이 작성하지 않았거나 결재 진행중인 문서는 수정 및 삭제 할 수 없습니다");
        		return false;
        	}
        	else
        		return true;
        };

        //발송
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	if(this.fn_approval_chk())
        	{
        		var rowType = this.dsOutReqMst.getRowType(this.dsOutReqMst.rowposition);
        		if( (rowType == 2)|| (rowType == 4) )
        		{
        			if(this.fn_mst_save(rowType))
        				this.fn_dtl_save();
        		}else
        			this.fn_dtl_save();
        	}
        };

        //MST 저장
        this.fn_mst_save = function(rowType)
        {
        	var nRow = this.dsOutReqMst.rowposition;
        	var setSave = true;

        	if((rowType != "delete") && (this.fn_mst_rowCheck(nRow) == false))
        	{
        		setSave = false;
        		return false;
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed151f_outrequest_mst_dml.jsp";
        		var inds = "dsOutReqMst=dsOutReqMst:U";
        		this.gfn_TransactionP(rowType ,str_url, inds, "", "", "fnMStSaveCallback", false, "P", false, this);

        		return true;
        	}
        }

        this.fnMStSaveCallback = function(svcId, errCode, errMsg, gv_rt_mst_id, gv_rt_mst_no, gv_rt_i_flow_id)
        {
        	var open_i_flow_id, rt_OUTREQMST_ID, rt_OUTREQMST_NO;
        	var nRow = this.dsOutReqMst.rowposition;

        	if(errCode != 0)
        		alert(errMsg);
        	else if(svcId != "delete")
        	{
        		if(svcId == 2)
        		{
        			rt_OUTREQMST_ID =nexacro.getApplication().gv_rt_mst_id;
        			rt_OUTREQMST_NO = nexacro.getApplication().gv_rt_mst_no;
        			open_i_flow_id = nexacro.getApplication().gv_rt_i_flow_id;

        			this.dsOutReqMst.setColumn(nRow, "OUTREQMST_ID", rt_OUTREQMST_ID);
        			this.dsOutReqMst.setColumn(nRow, "OUTREQMST_NO", rt_OUTREQMST_NO);
        			this.dsOutReqMst.setColumn(nRow, "I_FLOW_ID", open_i_flow_id);

        			this.dsOutReqMst.setColumn(nRow, "OUTREQ_NO",
        										this.dsOutReqMst.getColumn(nRow, "OUTREQMST_DATE") + "-" + rt_OUTREQMST_NO);

        			this.dsOutReqMst.setRowType(nRow, 1);

        		}else
        		{
        			open_i_flow_id = this.dsOutReqMst.getColumn(nRow, "I_FLOW_ID");
        			rt_WITHHOLDMST_ID = this.dsOutReqMst.getColumn(nRow, "WITHHOLDMST_ID");
        		}

        		if(this.ck_open.visible == true)
        		{
        			if(this.ck_open.value == true)
        				strArg = "i_flow_id=" + open_i_flow_id  + " open_check=1";
        			else
        				strArg = "i_flow_id=" + open_i_flow_id  + " open_check=0";

        			this.gfn_TransactionP("open_chk", "JSP/gw/SQL_GW110_OPEN_CHECK.jsp", "", "", strArg, "", false, "P", false, this);
        		}
        	}
        };

        //MST Row Check
        this.fn_mst_rowCheck = function(nRow)
        {
        	if(nRow == -1)
        		return true;

        	if(this.dsOutReqMst.getColumn(nRow, "CUST_NAME") == null)
        	{
        		alert("저자/업체를 선택해 주십시요.");
        		this.btn_athrCust_onclick();
        		return false;
        	}

        	if((this.dsOutReqMst.getRowType(nRow) == 2) && (this.dsFormpath.rowcount <= 0))
        	{
        		alert("결재라인을 선택해주세요.");
        		this.Div00_btn_tempchk_onclick();
        		return false;
        	}

        	return true;
        }

        //dtl 저장
        this.fn_dtl_save = function()
        {
        	var setValue = true;
        	for(var i=0; i < this.dsOutReqDtl.rowcount; i++)
        	{
        		this.dsOutReqDtl.setColumn(i, "OUTREQMST_ID", this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "OUTREQMST_ID"));

        		//외주작업 관리카드가 작성되어 있으면 수정 불가
        		if(this.dsOutReqDtl.getColumn(i, "OUTORDMST_EXIST")  == "1")
        			this.dsOutReqDtl.setRowType(i, 1);	//row 상태 nomal로 변경

        		if(this.fn_dtl_rowCheck(i) == false)
        		{
        			setValue = false;
        			return false;
        		}
        	}

        	if(setValue)
        	{
        		var str_url = "JSP/ed/ed151f_outrequest_dtl_dml.jsp";
        		var inds = "dsOutReqDtl=dsOutReqDtl:U";
        		this.gfn_TransactionP("save",str_url, inds, "", "", "fnDtlSaveCallback", false, "P", false, this);

        		return true;
        	}
        };

        this.fnDtlSaveCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		setAmountCode = this.lfn_Set_Approval_Edit(this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "I_FLOW_ID")
        													, this.dsOutReqDtl.getSum("OUTREQDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, "3"
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        		if(this.ds_file.rowcount > 0) //첨부파일 저장
        			this.fn_upload_file(this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "I_FLOW_ID"));
        	}
        };

        //dtl row check
        this.fn_dtl_rowCheck = function(nRow)
        {
        	if(nRow == -1)
        		return true;

        	if (this.dsOutReqDtl.getColumn(nRow, "MNSCRIPT_CODE") == null)
        	{
        		alert("작업구분을 선택해 주십시요.");
        		this.cb_mnScript.dropdown();
        		return false;
        	}

        	if ((this.dsOutReqDtl.getColumn(nRow, "BOOKMST_CODE") == null)
        		|| (this.dsOutReqDtl.getColumn(nRow, "BOOKMST_YEAR") == null))
        	{
        		alert("도서를 선택해 주십시요.");
        		this.btn_book_onclick();
        		return false;
        	}

        	if (this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_WORKCONTENT") == null)
        	{
        		alert("작업내용을 입력해 주십시요.");
        		this.edt_workContent.setFocus();
        		return false;
        	}

        	if(this.dsMnscript.getColumn(this.dsMnscript.rowposition, "MNSCRIPT_CLASS") != "3")
        	{
        		if ((this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_QTY") == null)
        			|| (this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_QTY") == 0))
        		{
        			alert("발주수량을 입력해 주십시요.");
        			this.medt_qty.setFocus();
        			return false;
        		}

        		if ((this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_UNITCOST") == null)
        		|| (this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_UNITCOST") == 0))
        		{
        			alert("발주단가를 입력해 주십시요.");
        			this.medt_unitCost.setFocus();
        			return false;
        		}
        	}

        	if (this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_WORKSDATE") == null)
        	{
        		alert("작업기간을 입력해 주십시요.");
        		this.cal_workSDate.setFocus();
        		return false;
        	}

        	if (this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_WORKEDATE") == null)
        	{
        		alert("작업기간을 입력해 주십시요.");
        		this.cal_workEDate.setFocus();
        		return false;
        	}

        	return true;
        }

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {
        	this.dsApproval.clearData();

        	this.lfn_Approval_Select(this.dsOutReqMst.getColumn(this.dsOutReqMst.rowposition, "I_FLOW_ID"), this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//전자결재 승인 내역

        	if(this.fn_approval_chk())
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
        		var OUTORDMST_EXIST = false;

        		for(var i=0; i < this.dsOutReqDtl.rowcount; i++)
        		{
        			OUTORDMST_EXIST = (this.dsOutReqDtl.getColumn(i, "OUTORDMST_EXIST") == "1");

        			if(OUTORDMST_EXIST)
        			{
        				alert("선택하신 의뢰서는 외주관리 카드가 작성되어 변경할 수 없습니다.");
        				break;
        			}
        		}

        		if(OUTORDMST_EXIST == false)
        		{
        			var rtValue = this.dsOutReqMst.deleteRow(this.dsOutReqMst.rowposition);
        			this.fn_mst_save("delete");
        			this.dsOutReqDtl.clearData();
        			this.ds_file.clearData();
        		}
        	}
        	else if(rt_value == "내용")
        	{
        		if(this.dsOutReqDtl.getColumn(this.dsOutReqDtl.rowposition, "OUTORDMST_EXIST") == "1")
        		{
        			alert("선택한 의뢰서는 외주관리 카드가 작성되어 변결할 수 없습니다.");
        			return false;
        		}
        		else
        		{
        			//저장되지 않고 로우만 추가된 (신규등록) 경우 로우만 삭제
        			if(this.dsOutReqDtl.getRowType(this.dsOutReqDtl.rowposition) == 4)
        				this.dsOutReqDtl.deleteRow(this.dsOutReqDtl.rowposition);
        			else
        			{
        				//저장되어 있는 내용을 불러 온 경우 저장된 디테일 삭제
        				this.dsOutReqDtl.setColumn(this.dsOutReqDtl.rowposition, "OUTREQDTL_DELETE", "D");
        				this.dsOutReqDtl.filter("OUTREQDTL_DELETE !='D'");
        				this.fn_dtl_save();
        			}
        		}
        	}
        }

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var nRow = this.dsOutReqMst.rowposition;
        	var I_FLOW_ID = this.dsOutReqMst.getColumn(nRow, "I_FLOW_ID");
        	var rdUrl, rdParam;

        	if(I_FLOW_ID != "")
        	{
        		rdUrl = gv_urlMrd + "/ed/ED151.mrd";
        		rdParam  = "/rp [1]["+ I_FLOW_ID + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        	else
        		alert("조회된 자료가 없습니다.");


        };

        //null 체크
        this.fnisNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        //저자/업체 선택
        this.btn_athrCust_onclick = function(obj,e)
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
        	nRow = this.dsOutReqMst.rowposition;

        	this.dsOutReqMst.setColumn(nRow, "CUST_NAME", rtArray[0]);
        	this.dsOutReqMst.setColumn(nRow, "ATHR_IDENTITY", rtArray[10]);
        	this.dsOutReqMst.setColumn(nRow, "CUST_GUBN", null);
        	this.dsOutReqMst.setColumn(nRow, "CUST_CODE", null);
        	this.dsOutReqMst.setColumn(nRow, "OUTREQ_CLASS", "P");
        }

        //찾은 업체 데이터 넣어주기
        this.fn_setCustValue = function(rtArray)
        {
        	nRow = this.dsOutReqMst.rowposition;

        	this.dsOutReqMst.setColumn(nRow, "CUST_NAME", rtArray[0]);
        	this.dsOutReqMst.setColumn(nRow, "ATHR_IDENTITY", null);
        	this.dsOutReqMst.setColumn(nRow, "CUST_GUBN", rtArray[1]);
        	this.dsOutReqMst.setColumn(nRow, "CUST_CODE", rtArray[2]);
        	this.dsOutReqMst.setColumn(nRow, "OUTREQ_CLASS", "C");
        }

        //도서코드 찾기
        this.btn_book_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst};
        	this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        };

        this.popupBookCallBack = function(svcId)
        {
        	var nRow = this.dsOutReqDtl.rowposition;
        	var bRow = this.dsBookMst.rowposition;

        	this.dsOutReqDtl.setColumn(nRow, "BOOKMST_CODE", this.dsBookMst.getColumn(bRow, "BOOKMST_CODE"));
        	this.dsOutReqDtl.setColumn(nRow, "BOOKMST_YEAR", this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR"));
        	this.dsOutReqDtl.setColumn(nRow, "OUTREQDTL_BOOKMSTNAME", this.dsBookMst.getColumn(bRow, "BOOKMST_NAME"));
        	this.dsOutReqDtl.setColumn(nRow, "BOOKMST_SEQ", this.dsBookMst.getColumn(bRow, "BOOKMST_SEQ"));
        	this.dsOutReqDtl.setColumn(nRow, "BOOKMST_ID", this.dsBookMst.getColumn(bRow, "BOOKMST_ID"));
        	this.dsOutReqDtl.setColumn(nRow, "BOOKCODEYEAR", this.dsBookMst.getColumn(bRow, "BOOKMST_CODE") + " [" + this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR") + "]" );
        };

        this.edt_bookYear_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if((this.edt_bookCode.maxlength == this.edt_bookCode.getLength()) &&
        			(this.edt_bookYear.maxlength == this.edt_bookYear.getLength()) )
        		{
        			var strUrl = "JSP/ed/book_select.jsp";
        			var inds = "dsBookMst=dsBookMst";
        			var outds = "dsBookMst=dsBookMst";
        			var strArg = "BOOKMST_CODE=" + this.edt_bookCode.value
        					   + " BOOKMST_YEAR=" + this.edt_bookYear.value;

        			this.gfn_TransactionP("select" ,strUrl, inds, outds, strArg, "fnBookMstCallback", false, "P", false, this);
        		}
        		else
        		{
        			alert("도서코드를 정확히 입력해 주세요.");
        			this.edt_bookCode.setFocus();
        			return false;
        		}
        	}
        };

        this.fnBookMstCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.dsBookMst.rowcount == 0)
        		{
        			alert("도서를 찾을 수 없습니다");
        			this.edt_bookCode.set_value("9000000002");
        			this.edt_bookYear.set_value("0000");
        			this.edt_bookName.set_value(null);
        			this.dsOutReqDtl.setColumn(this.dsOutReqDtl.rowposition, "BOOKCODEYEAR", this.edt_bookCode.value + " [" + this.edt_bookYear.value + "]");
        			return false;
        		}
        		else if(this.dsBookMst.rowcount == 1)
        		{
        			this.edt_bookName.set_value(this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_NAME"));

        			this.dsOutReqDtl.setColumn(this.dsOutReqDtl.rowposition, "BOOKMST_ID", this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_ID"));
        			this.dsOutReqDtl.setColumn(this.dsOutReqDtl.rowposition, "WITHHOLDDTL_BOOKNAME", this.edt_bookName.value);
        			this.dsOutReqDtl.setColumn(this.dsOutReqDtl.rowposition, "BOOKCODEYEAR", this.edt_bookCode.value + " [" + this.edt_bookYear.value + "]");
        		}
        		else
        		{
        			alert("2건 이상의 도서가 조회되었습니다.");

        			var objParam = {dsParam1:this.dsBookMst};
        			this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        		}
        	}
        };

        //첨부파일 선택
        this.btn_file_onclick = function(obj,e)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload(this.fileD, this.fileUpTrans, this.ds_file, vFileSubUrl);
        };

        //첨부파일 저장
        this.fn_upload_file = function(i_flow_id)
        {
        	trace("저장" + this.ds_file.saveXML());
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload_Save(gv_urlFile + "/JSP", i_flow_id, vFileSubUrl);
        };

        //첨부파일 삭제
        this.btn_Fdelete_onclick = function(obj,e)
        {
        	if (this.ds_file.getColumn(this.ds_file.rowposition, "F_NO") == ""){
        		this.ds_file.deleteRow(this.ds_file.rowposition);
        	}else{
        		var vFpath = this.ds_file.getColumn(this.ds_file.rowposition, "F_PATH");
        		var vFileSubUrl = nexacro.replaceAll(vFpath, "/gw/attachedfile", "attattachedfile");
        		this.lfn_FileDelete(this.ds_file, this.dsOutReqMst.getColumn(0, "I_FLOW_ID"), vFileSubUrl);
        	}
        };

        //작업구분 선택시 작업내용에 표시 후 이동
        this.cb_mnScript_onitemchanged = function(obj,e)
        {
        	this.dsOutReqDtl.setColumn(this.dsOutReqDtl.rowposition, "OUTREQDTL_WORKCONTENT", e.posttext);

        	var mnScriptCode = this.dsMnscript.getColumn(e.postindex, "MNSCRIPT_CODE");
        	this.edt_workRange.set_enable((mnScriptCode == "02") || (mnScriptCode == "22") || (mnScriptCode == "27"));
        };

        this.cb_mnScript_oncloseup = function(obj,e)
        {
        	if(this.dsMnscript.getColumn(e.postindex, "MNSCRIPT_ENABLE") == "0")	//사용불가능할 경우
        	{
        		alert("선택된 작업구분은 사용할 수 없으니 다른 작업구분을 선택해 주세요.");
        		this.cb_mnScript.set_value(null);
        		this.dsOutReqDtl.setColumn(this.dsOutReqDtl.rowposition, "OUTREQDTL_WORKCONTENT", null);
        	}
        };

        //발주금액 구하기
        this.medt_unitCost_onkillfocus = function(obj,e)
        {
        	var nRow = this.dsOutReqDtl.rowposition;
        	var amount = new nexacro.Decimal(this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_QTY") * this.dsOutReqDtl.getColumn(nRow, "OUTREQDTL_UNITCOST"));
        	this.dsOutReqDtl.setColumn(nRow, "OUTREQDTL_AMOUNT", amount.trunc());
        };

        //외주작업관리카드 작성된 것 disable 시키기
        this.dsOutReqDtl_canrowposchange = function(obj,e)
        {
        	var able = ( (this.dsOutReqDtl.getColumn(e.row, "OUTORDMST_EXIST") == null) || (this.dsOutReqDtl.getColumn(e.row, "OUTORDMST_EXIST") == "0") );

        	this.cb_mnScript.set_enable(able);
        	this.btn_book.set_enable(able);
        	this.edt_bookCode.set_enable(able);
        	this.edt_bookYear.set_enable(able);
        	this.edt_workContent.set_enable(able);
        	this.edt_workRange.set_enable(able)
        	this.medt_tone.set_enable(able);
        	this.edt_standard.set_enable(able);
        	this.medt_qty.set_enable(able);
        	this.medt_unitCost.set_enable(able);
        	this.cal_workEDate.set_enable(able);
        	this.cal_workSDate.set_enable(able);
        };

        //키처리
        this.fn_localKeyDown = function(obj,e)
        {
        	var comobj;

        	if(e.keycode == 13)
        	{
        		comobj = this.getNextComponent(obj, true);
        		comobj.setFocus();
        	}
        }

        this.ED151F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED151F_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.grd_dtl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED151F_onload,this);
            this.addEventHandler("onsize",this.ED151F_onsize,this);
            this.addEventHandler("ontimer",this.ED151F_ontimer,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_athrCust.addEventHandler("onclick",this.btn_athrCust_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_14.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_workContent.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_14_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_workRange.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_SCMst_availableTerm.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_emoloyeeName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_mnScript.addEventHandler("onitemchanged",this.cb_mnScript_onitemchanged,this);
            this.cb_mnScript.addEventHandler("oncloseup",this.cb_mnScript_oncloseup,this);
            this.cb_mnScript.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_book.addEventHandler("onclick",this.btn_book_onclick,this);
            this.edt_bookCode.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.edt_bookYear.addEventHandler("onkeydown",this.edt_bookYear_onkeydown,this);
            this.edt_bookName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_06_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_tone.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_tone.addEventHandler("onchanged",this.fn_amountCalculate,this);
            this.Static00_06_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_standard.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_SCDtl_contractAmount.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_qty.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_qty.addEventHandler("onchanged",this.medt_unitCost_onkillfocus,this);
            this.Static00_10.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_unitCost.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_unitCost.addEventHandler("onkillfocus",this.medt_unitCost_onkillfocus,this);
            this.Static00_11.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_amount.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.grd_dtl.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.cal_finishDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.cal_workSDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_15.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_file.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.cal_workEDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_15_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.dsOutReqMst.addEventHandler("onrowsetchanged",this.dsOutReqMst_onrowsetchanged,this);
            this.dsOutReqDtl.addEventHandler("onrowsetchanged",this.dsOutReqDtl_onrowsetchanged,this);
            this.ds_file.addEventHandler("onrowsetchanged",this.ds_file_onrowsetchanged,this);
            this.ds_file.addEventHandler("onvaluechanged",this.ds_file_onvaluechanged,this);
        };
        this.loadIncludeScript("ED151F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
