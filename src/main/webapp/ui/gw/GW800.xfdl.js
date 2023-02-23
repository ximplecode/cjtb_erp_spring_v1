(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW800");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccountDtlTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTTEAM_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"5\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"STRING\" size=\"13\"/><Column id=\"ACNTDTL_VAT\" type=\"STRING\" size=\"12\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_TITNO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YY\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"POST_DST_ID\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoods", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">도서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">서류</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostMst", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETEDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostDst", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PAYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"INVOICE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_PHONE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookList", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_BOOKLIST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETEDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstID", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDstID", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_DST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProductAtt", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_DST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ATT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ATT_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttList", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_ATT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostDst_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PAYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_LIT_ATT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProduct_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YY\" type=\"STRING\" size=\"4\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProductAtt_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"ATT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ATT_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_loc", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">매거진부</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">회원사업부</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">영업부 - 본사</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">자료실 - 본사</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">쇼핑몰팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_K", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"1\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"5\"/><Column id=\"BUSE\" type=\"STRING\" size=\"50\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"20\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_H", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"1\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"5\"/><Column id=\"BUSE\" type=\"STRING\" size=\"50\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"20\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_D", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"1\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"5\"/><Column id=\"BUSE\" type=\"STRING\" size=\"50\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"20\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_C", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"1\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"5\"/><Column id=\"BUSE\" type=\"STRING\" size=\"50\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"20\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"1\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"2\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"5\"/><Column id=\"BUSE\" type=\"STRING\" size=\"50\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"20\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_exceldown",null,"3.68%","4.51%",null,"46.7%","92.53%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀변환");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_appr_chk",null,"3.68%","6.23%",null,"btn_exceldown:5%","92.53%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("임시결재라인");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"3.68%","4.01%",null,"btn_appr_chk:8%","92.53%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"3.68%","3.7%",null,"17%","92.53%",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_send",null,"3.68%","3.7%",null,"btn_del:8%","92.53%",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("발송");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"3.68%","3.7%",null,"btn_send:8%","92.53%",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select",null,"3.68%","3.7%",null,"btn_new:8%","92.53%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtlnew",null,"3.68%","4.57%",null,"btn_select:47.46%","92.53%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_text("내용추가");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tempsave",null,"3.68%","4.57%",null,"btn_dtlnew:8%","92.53%",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("임시저장");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchpostnumber","17.47%","10.23%",null,null,"81.17%","87.36%",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'Img::btn_TF_src.png\') no-repeat center center");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_postnumber","8.52%","10.00%",null,null,"83.21%","87.13%",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("normal 13px/normal \"Arial\"");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_payeename","26.17%","10.00%",null,null,"63.5%","87.13%",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phonenumber","16.42%","18.05%",null,null,"74.26%","78.97%",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("normal 13px/normal \"Arial\"");
            obj.set_maxlength("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","8.52%","14.14%",null,null,"63.5%","82.99%",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_goodsetc","16.42%","22.07%",null,null,"63.5%","75.06%",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sendname","21.05%","30.23%",null,null,"71.54%","66.90%",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_from_addr","11.42%","38.28%",null,null,"63.5%","58.97%",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2.35%","10.23%",null,null,"92.16%","87.36%",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("우편번호");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.56%","10.23%",null,null,"74.14%","87.36%",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("수취인 성명");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","2.35%","14.37%",null,null,"91.42%","83.22%",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("도로명주소");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","2.35%","18.28%",null,null,"83.77%","79.20%",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("휴대폰번호 (없으면 전화번호)");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","2.35%","22.30%",null,null,"92.84%","75.29%",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("품목");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","2.35%","26.44%",null,null,"92.16%","71.15%",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("위치구분");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","2.35%","30.46%",null,null,"89.26%","67.13%",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("발신인 팀/성명");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","20.31%","30.92%",null,null,"79.14%","67.59%",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("/");
            obj.set_font("bold 13pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","2.41%","34.37%",null,null,"88.46%","63.22%",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("발신인 휴대폰번호");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","2.35%","38.51%",null,null,"91.17%","59.20%",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("발신인 주소");
            obj.set_font("bold 13px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pay","48.89%","10.00%",null,null,"45.19%","81.38%",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("귀속부서");
            obj.set_background("#ECECFF");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_divide","48.89%","18.51%",null,null,"45.19%","58.97%",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("직과도서");
            obj.set_background("#ececff");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_team_divide","54.51%","10.00%",null,null,"16.98%","81.38%",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("dsAccountDtlTeam");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"1\" text=\"팀명\" background=\"#f0f0f0\" color=\"black\"/></Band><Band id=\"body\"><Cell text=\"bind:TEAMCODE\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TEAMNAME\" textAlign=\"center\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_product","54.51%","18.51%",null,null,"16.98%","69.66%",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("dsProduct");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"43\"/><Column size=\"250\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\" background=\"#f0f0f0\"><Cell background=\"#f0f0f0\" color=\"black\" text=\"년판\"/><Cell col=\"1\" text=\"순번\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"2\" text=\"도서명\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"3\" text=\"도서코드\" background=\"#f0f0f0\" color=\"black\"/></Band><Band id=\"body\"><Cell text=\"bind:YY\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:BOOKMST_SEQ\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:BOOK_NAME\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:BOOK_CD\" textAlign=\"center\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_productatt","54.51%","30.00%",null,null,"16.98%","58.97%",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("dsProductAtt");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"속성코드\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"1\" text=\"도서명\" background=\"#f0f0f0\" color=\"black\"/></Band><Band id=\"body\"><Cell text=\"bind:ATT_CD\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ATT_NAME\" displaytype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_goods","8.52%","22.07%",null,null,"83.89%","75.06%",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsGoods");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_loc","8.52%","26.21%",null,null,"79.01%","71.03%",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_loc");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mst","0.93%","47.82%",null,null,"78.52%","3.45%",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_binddataset("dsPostMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"74\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"신청일\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"문서번호\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"결재상태\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"출력상태\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:POST_MST_DATE\" textAlign=\"center\" displaytype=\"date\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"bind:POST_MST_NO\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:GUBUN_NAME\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"bind:PRINT_GUBUN_NAME\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dst","21.42%","47.82%",null,null,"16.98%","26.90%",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_binddataset("dsPostDst");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"76\"/><Column size=\"270\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"54\"/><Column size=\"100\"/><Column size=\"128\"/><Column size=\"270\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell background=\"#f0f0f0\" color=\"black\" text=\"순번\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"1\" text=\"우편번호\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"2\" text=\"주소\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"3\" text=\"수취인\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"4\" text=\"수취인 번호\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"5\" text=\"품목\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"6\" text=\"귀속부서\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"7\" text=\"발신인 팀/성명\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"8\" text=\"발신인 주소\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"9\" text=\"발신인 번호\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"bind:POST_NUMBER\" textAlign=\"center\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:ADDR\" textAlign=\"left\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"bind:PAYEE_NAME\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"bind:GOODS_NAME\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"bind:BELONGING_DEPT_NAME\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"bind:SEND_NAME\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"bind:FROM_ADDR\" textAlign=\"left\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"bind:FROM_PHONE_NUMBER\" textAlign=\"center\" displaytype=\"text\" font=\"12px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","21.98%","74.14%",null,null,"69.88%","23.45%",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("귀속 도서리스트");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_attlist","56.05%","76.90%",null,null,"16.98%","3.45%",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_binddataset("dsAttList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"110\"/><Column size=\"270\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"1\" text=\"속성코드\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"2\" text=\"도서명\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:POST_MST_ID\" textAlign=\"center\" expr=\"currow +1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:ATT_CD\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:ATT_NAME\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_booklist","21.42%","76.90%",null,null,"44.75%","3.45%",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_binddataset("dsBookList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"64\"/><Column size=\"50\"/><Column size=\"270\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"1\" text=\"년판\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"2\" text=\"순번\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"3\" text=\"도서명\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/><Cell col=\"4\" text=\"도서코드\" background=\"#f0f0f0\" color=\"black\" font=\"bold 13px/normal &quot;굴림&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:POST_MST_ID\" expr=\"currow+1\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:YY\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:BOOKMST_SEQ\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:BOOK_NAME\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:BOOK_CD\" textAlign=\"center\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","1.36%","44.83%",null,null,"90.74%","52.76%",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("결재문서번호");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","21.98%","44.83%",null,null,"71.05%","52.76%",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("발송 리스트");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exlup","76.54%","43.68%",null,null,"16.98%","52.76%",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("엑셀 업로드");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_downexcel","69.51%","43.68%",null,null,"23.95%","52.76%",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("양식 내리기");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","0.31%","42.30%",null,null,"16.98%","57.36%",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("#cfddea");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_form","-2","900","1322","420",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"80\"/><Column size=\"260\"/><Column size=\"104\"/><Column size=\"158\"/><Column size=\"98\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"260\"/><Column size=\"70\"/><Column size=\"264\"/><Column size=\"190\"/><Column size=\"294\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호&#13;&#10;(5자리)\" color=\"black\" background=\"greenyellow\"/><Cell col=\"1\" text=\"수취인 성명\" color=\"black\" background=\"greenyellow\"/><Cell col=\"2\" text=\"수취인 주소\" color=\"black\" background=\"greenyellow\"/><Cell col=\"3\" text=\"휴대폰번호&#13;&#10;( - 제거 )&#13;&#10;( or 전화번호 )\" color=\"black\" background=\"greenyellow\"/><Cell col=\"4\" text=\"품명&#13;&#10;( 1:도서,2:서류,3:기타 )&#13;&#10;( 숫자로 입력 )\" color=\"black\" background=\"greenyellow\"/><Cell col=\"5\" background=\"#dddddd\" color=\"black\" text=\"품명 비고 &#13;&#10;( 품명이 기타&#13;&#10;일 경우 입력 )\"/><Cell col=\"6\" text=\"발신인 성명\" background=\"greenyellow\" color=\"black\"/><Cell col=\"7\" text=\"발신인 &#13;&#10;휴대폰번호&#13;&#10;( - 제거 )\" background=\"greenyellow\" color=\"black\"/><Cell col=\"8\" text=\"발신인 주소\" background=\"greenyellow\" color=\"black\"/><Cell col=\"9\" background=\"#dddddd\" color=\"black\" text=\"귀속부서&#13;&#10;( 코드 )\"/><Cell col=\"10\" background=\"#dddddd\" color=\"black\" text=\"직과도서코드&#13;&#10;도서코드+년판+구분자(^)&#13;&#10;ex) 10000001102019^10000002542019^\"/><Cell col=\"11\" background=\"#dddddd\" color=\"black\" text=\"직과도서코드&#13;&#10;속성코드+구분자(^)&#13;&#10;ex) 112010101^112010102^\"/><Cell col=\"12\" text=\"위치&#13;&#10;( 1:매거진부 2:회원사업부 3:영업부 4:자료실 )&#13;&#10;( 숫자로 입력 )\" color=\"black\" background=\"greenyellow\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.20%","1.15%",null,null,"70.56%","89.77%",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("택배 라벨출력요청");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","55.86%","74.14%",null,null,"35.80%","23.45%",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("귀속 속성리스트");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchfrompostnumber","9.70%","38.51%",null,null,"89.00%","59.20%",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_background("url(\'Img::btn_TF_src.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_from_phonenumber","11.48%","34.14%",null,null,"80.06%","62.99%",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 13px/normal \"Arial\"");
            obj.set_maxlength("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sendteam","11.48%","30.23%",null,null,"80.00%","66.90%",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("normal 13px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_postnumber","value","dsPostDst","POST_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_payeename","value","dsPostDst","PAYEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_addr","value","dsPostDst","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_goodsetc","value","dsPostDst","GOODS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_from_addr","value","dsPostDst","FROM_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cbo_goods","value","dsPostDst","GOODS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cbo_loc","value","dsPostDst","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_from_phonenumber","value","dsPostDst","FROM_PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_phonenumber","value","dsPostDst","PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW800.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW800.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW800.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sResult, strArg, strSABUN, strSEQ = "", out_var, row_status, target_row;
        var i_flow_id,NEW_I_FLOW_ID, str_url, str_outds, str_arg, return_str;
        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_sabun = gds_userinfo.getColumn(0,"SABUN");
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        var onloaded = false;

        this.GW800_onload = function(obj,e)
        {
        	this.btn_help.click();
        	this.fnDataClear();
        	this.fnIsEnable(false);

        	//nexacro.getApplication().I_Flow_Order_Load("01", 121, gv_sabun);
        	this.I_Flow_Order_Load("01", 121, gv_sabun);
        	if(this.DS_GW_K.rowcount <= 0)
        	{
        		//nexacro.getApplication().I_Flow_Order_Load("01", 121, gv_sabun);
        		this.I_Flow_Order_Load("01", 121, gv_sabun);
        	}
        	if (this.DS_GW_K.rowcount <= 0)
        	{
        		alert("결재라인이 등록되지 않았습니다! \n\r기안작성->택배발송신청의 결재선에서 결재라인을 설정하세요");
        	}
        	onloaded = true;
        };
        // 창 크기에 따라 사이즈 조절
        this.GW800_onsize = function(obj,e)
        {
        	if (this.width <= 1000 || this.height < 410)
        	{
        		this.Static00.set_font('bold 26px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 9px/normal "굴림"');
        		this.Static02.set_font('bold 9px/normal "굴림"');
        		this.Static03.set_font('bold 9px/normal "굴림"');
        		this.Static04.set_font('bold 9px/normal "굴림"');
        		this.Static05.set_font('bold 9px/normal "굴림"');
        		this.Static06.set_font('bold 9px/normal "굴림"');
        		this.Static07.set_font('bold 9px/normal "굴림"');
        		this.Static08.set_font('bold 9px/normal "굴림"');
        		this.Static09.set_font('bold 9px/normal "굴림"');
        		this.Static10.set_font('bold 9px/normal "굴림"');
        		this.Static11.set_font('bold 9px/normal "굴림"');
        		this.Static12.set_font('bold 9px/normal "굴림"');
        		this.Static13.set_font('bold 9px/normal "굴림"');

        		this.btn_help.set_font('normal 9px/normal "Arial"');
        		this.btn_appr_chk.set_font('normal 9px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 9px/normal "Arial"');
        		this.btn_tempsave.set_font('normal 9px/normal "Arial"');
        		this.btn_dtlnew.set_font('normal 9px/normal "Arial"');
        		this.btn_select.set_font('normal 9px/normal "Arial"');
        		this.btn_new.set_font('normal 9px/normal "Arial"');
        		this.btn_send.set_font('normal 9px/normal "Arial"');
        		this.btn_del.set_font('normal 9px/normal "Arial"');
        		this.btn_downexcel.set_font('normal 9px/normal "Arial"');
        		this.btn_exlup.set_font('normal 9px/normal "Arial"');
        	}
        	else if ((this.width < 1260 || this.height < 580) && (this.width > 1000 || this.height > 410) )
        	{
        		this.Static00.set_font('bold 34px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 11px/normal "굴림"');
        		this.Static02.set_font('bold 11px/normal "굴림"');
        		this.Static03.set_font('bold 11px/normal "굴림"');
        		this.Static04.set_font('bold 11px/normal "굴림"');
        		this.Static05.set_font('bold 11px/normal "굴림"');
        		this.Static06.set_font('bold 11px/normal "굴림"');
        		this.Static07.set_font('bold 11px/normal "굴림"');
        		this.Static08.set_font('bold 11px/normal "굴림"');
        		this.Static09.set_font('bold 11px/normal "굴림"');
        		this.Static10.set_font('bold 11px/normal "굴림"');
        		this.Static11.set_font('bold 11px/normal "굴림"');
        		this.Static12.set_font('bold 11px/normal "굴림"');
        		this.Static13.set_font('bold 11px/normal "굴림"');

        		this.btn_help.set_font('normal 11px/normal "Arial"');
        		this.btn_appr_chk.set_font('normal 11px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 11px/normal "Arial"');
        		this.btn_tempsave.set_font('normal 11px/normal "Arial"');
        		this.btn_dtlnew.set_font('normal 11px/normal "Arial"');
        		this.btn_select.set_font('normal 11px/normal "Arial"');
        		this.btn_new.set_font('normal 11px/normal "Arial"');
        		this.btn_send.set_font('normal 11px/normal "Arial"');
        		this.btn_del.set_font('normal 11px/normal "Arial"');
        		this.btn_downexcel.set_font('normal 11px/normal "Arial"');
        		this.btn_exlup.set_font('normal 11px/normal "Arial"');
        	}
        	else
        	{
        		this.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 13px/normal "굴림"');
        		this.Static02.set_font('bold 13px/normal "굴림"');
        		this.Static03.set_font('bold 13px/normal "굴림"');
        		this.Static04.set_font('bold 13px/normal "굴림"');
        		this.Static05.set_font('bold 13px/normal "굴림"');
        		this.Static06.set_font('bold 13px/normal "굴림"');
        		this.Static07.set_font('bold 13px/normal "굴림"');
        		this.Static08.set_font('bold 13px/normal "굴림"');
        		this.Static09.set_font('bold 13px/normal "굴림"');
        		this.Static10.set_font('bold 13px/normal "굴림"');
        		this.Static11.set_font('bold 13px/normal "굴림"');
        		this.Static12.set_font('bold 13px/normal "굴림"');
        		this.Static13.set_font('bold 13px/normal "굴림"');

        		this.btn_help.set_font('normal 13px/normal "Arial"');
        		this.btn_appr_chk.set_font('normal 13px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 13px/normal "Arial"');
        		this.btn_tempsave.set_font('normal 13px/normal "Arial"');
        		this.btn_dtlnew.set_font('normal 13px/normal "Arial"');
        		this.btn_select.set_font('normal 13px/normal "Arial"');
        		this.btn_new.set_font('normal 13px/normal "Arial"');
        		this.btn_send.set_font('normal 13px/normal "Arial"');
        		this.btn_del.set_font('normal 13px/normal "Arial"');
        		this.btn_downexcel.set_font('normal 13px/normal "Arial"');
        		this.btn_exlup.set_font('normal 13px/normal "Arial"');
        	}
        };
        // 도움말 버튼 클릭
        this.btn_help_onclick = function(obj,e)
        {
        	this.lfn_showModal("help", '', "gw::GW800F.xfdl", "", this, 10, 58, 848, 700);
        };
        // 임시 결재라인 버튼
        this.btn_appr_chk_onclick = function(obj,e)
        {
        	alert("임시결재라인 설정은 일회성 결재라인으로서 \r\n 기본 결재라인으로 저장되지 않습니다.\r\n" +
        		  "기본 결재라인 설정은 기안작성에서 택배발송 신청 결재선에서 등록하세요");
        	this.lfn_showModal("appr_chk", '', "gw::GW120.xfdl", "", this, 0, 0, 670, 750);
        };
        // 엑셀변환 버튼 클릭
        this.btn_exceldown_onclick = function(obj,e)
        {
        	if ( this.dsPostDst.rowcount <= 0){
        		alert("변환가능한 배송리스트가 없습니다.");
        		return;
        	}

        	this.grd_booklist.setFormatColProperty(4,'size',80); // dst id
        	this.grd_attlist.setFormatColProperty(3,'size',80); // dst id

        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_dst, "배송리스트!A1");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_attlist, "직과속성리스트!A1");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_booklist, "직과도서리스트!A1");
        	this.exportObj.set_exportfilename( "post_list" );
            this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };
        // 임시저장 버튼 클릭
        this.btn_tempsave_onclick = function(obj,e)
        {
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0' && this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != '9' )
        	{
        			alert("작성상태 이거나 미결상태만 저장할 수 있습니다.");
        			return;
        	}
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "PRINT_GUBUN") != '0' )
        	{
        		alert("이미 라벨이 출력된 상태는 저장 할 수 없습니다.");
        		return;
        	}
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") == '3' )
        	{
        		alert("이미 관리자가 삭제한 상태는 저장 할 수 없습니다.");
        		return;
        	}
        	if ( this.dsPostDst.rowcount <= 0 )
        	{
        			alert("저장 가능한 리스트가 없습니다.");
        			return;
        	}
        	if(this.fnValidChkDs() == true) // 유효성 검사
        	{
        		for(var i=0; i< this.dsPostDst.rowcount; i++ )
        		{
        			//trace(i+ " " + dsPostDst.GetRowType(i) );
        			if ( this.dsPostDst.getRowType(i) == 2 ) // (insert)
        			{
        				trace(i+ " " + this.dsPostDst.getRowType(i) );
        				this.fnDstInsertTran(i);
        			}
        			else if ( this.dsPostDst.getRowType(i) == 4 ) // (update)
        			{
        				trace(i+ " " + this.dsPostDst.getRowType(i) );
        				this.fnDstSaveTran(i);
        			}
        		}

        		this.fnSelectBookListMstTran(); // 마스터 도서리스트 불러오기
        		this.fnSelectAttListMstTran(); // 마스터 속성리스트 불러오기
        		//dataclear(); // 데이터클리어 및 insert 로 상태변경
        		this.fnSelectDstTran(false); // 디테일 다시 불러옴

        		alert("배송 리스트가 저장 되었습니다.");
        	}
        };
        // 내용 추가 버튼 클릭
        this.btn_dtlnew_onclick = function(obj,e)
        {
        	if( this.dsPostMst.rowcount <= 0 )
        	{
        		alert("신규버튼으로 결재문서를 먼저 추가 해 주세요.");
        		return;
        	}
        	if ( (this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0') && (this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != '9')  )
        	{
        			alert("작성상태 이거나 미결상태만 추가할 수 있습니다.");
        			return;
        	}
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "PRINT_GUBUN") != '0' )
        	{
        		alert("이미 라벨이 출력된 상태는 추가 할 수 없습니다.");
        		return;
        	}
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") == '3' )
        	{
        		alert("이미 관리자가 삭제한 상태는 추가 할 수 없습니다.");
        		return;
        	}

        	for(var i=0; i< this.dsPostDst.rowcount; i++ )
        	{
        		var temp = this.dsPostDst.getRowType(i);
        		if ( temp == '2'){
        			alert("추가리스트가 존재합니다. 임시저장 후 추가하세요.");
        			return;
        		}
        	}

        	if( this.dsPostDst.rowcount <= 0 ){ // 디테일이 하나도 없으면 추가 후 초기화
        		this.dsPostDst.addRow();
        		this.grd_dst_oncellclick();
        		this.cbo_goods.set_index(0);
        		this.cbo_goods_onitemchanged();
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "BELONGING_DEPT_CODE" ,gds_userinfo.getColumn(0,"BUSECD"));
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "BELONGING_DEPT_NAME" ,gds_userinfo.getColumn(0,"BUSENM"));
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "GOODS_CODE" ,this.cbo_goods.value);
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "GOODS_NAME" ,this.cbo_goods.text);
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "FROM_ADDR", '서울 금천구 가산로9길 54 천재교육');
        		this.fnGetLocValue();
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "LOCATION" ,this.cbo_loc.value); // 데이터셋에 위치고정
        		this.grd_dst_oncellclick();
        	}
        	else // 디테일이 이미 있으면
        	{
        		//dataclear(); // 데이터클리어 및 insert 로 상태변경
        		this.grd_dst_oncellclick();
        		this.dsPostDst.addRow();
        		this.cbo_goods.set_index(0);
        		this.cbo_goods_onitemchanged();
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "BELONGING_DEPT_CODE" ,gds_userinfo.getColumn(0,"BUSECD"));
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "BELONGING_DEPT_NAME" ,gds_userinfo.getColumn(0,"BUSENM"));
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "GOODS_CODE" ,this.cbo_goods.value);
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "GOODS_NAME" ,this.cbo_goods.text);
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "FROM_ADDR", '서울 금천구 가산로9길 54 천재교육');
        		this.fnGetLocValue();
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "LOCATION" ,this.cbo_loc.value); // 데이터셋에 위치고정
        	}
        	this.edt_sendteam.set_value("");
        	this.edt_sendname.set_value("");
        };

        // 우편번호 검색 클릭 시
        this.btn_searchpostnumber_onclick = function(obj,e)
        {
        	this.lfn_showModal("send", "", "common::Address.xfdl", "fnBtnSearchPostNumberCallback", this, 0, 0, 500, 550);
        };
        // 보내는 사람 우편번호 검색 클릭 시
        this.btn_searchfrompostnumber_onclick = function(obj,e)
        {
        	this.lfn_showModal("from", "", "common::Address.xfdl", "fnBtnSearchPostNumberCallback", this, 0, 0, 500, 550);
        };
        // 조회 버튼 클릭 시
        this.btn_select_onclick = function(obj,e)
        {
        	this.lfn_showModal("select", {gv_sabun:gv_sabun}, "gw::GW800_1.xfdl", "", this, 0, 0, 610, 100);
        };
        // 신규 버튼 클릭 시
        this.btn_new_onclick = function(obj,e)
        {
        	this.fnDataClear(); // 데이터클리어 및 insert 로 상태변경
        	this.fnMstInsertTran(); // 문서추가
        	this.fnGetLocValue(); // 위치 설정
        };
        // 발송 버튼 클릭
        this.btn_send_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0' )
        	{
        		alert("작성상태만 발송할 수 있습니다.");
        		return;
        	}
        	if (this.DS_GW_K.rowcount <= 0)
        	{
        		alert("결재라인이 등록되지 않았습니다! \r\n결재라인을 등록해 주세요\r\n발송되지 않았습니다!");
        		return;
        	}

        	if( this.dsPostDst.rowcount <= 0)
        	{
        		alert("배송리스트가 없습니다. 배송리스트를 추가하세요.");
        		return;
        	}else if ( this.dsPostMst.rowcount <= 0){
        		alert("발송가능한 결재문서가 없습니다.");
        		return;
        	}else if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0' ){
        		alert("작성상태인 문서만 발송할 수 있습니다.");
        		return;
        	}
        	else
        	{
        		if(this.fnValidChkDs() == true) // 유효성 검사
        		{
        			for( var i=0; i< this.dsPostDst.rowcount; i++ )
        			{
        				if ( this.dsPostDst.getRowType(i) == '2' ) // 인서트 처리
        				{
        					alert("임시저장 후 발송하시기 바랍니다.");
        					return;
        				}
        				else if ( this.dsPostDst.getRowType(i) == '4' ) // 수정 처리
        				{
        					alert("임시저장 후 발송하시기 바랍니다.");
        					return;
        				}
        			}

        			if(objApp.confirm("문서번호 : "+this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_DATE")
        							+"-"+this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_NO")
        		        +  "을(를) 발송하시겠습니까?\r\n"+
                       "발송된 문서는 수정할 수 없습니다."))
        			{
        				row_status = 'INSERT';
        				//SQL_GW800_DML.jsp 수정
        				var strUrl   = "JSP/gw/SQL_GW800_DML.jsp";
        				var strDs = "";

        				var strArg = " DMLTYPE="       + nexacro.wrapQuote(row_status);
        				strArg += " SABUN="      + nexacro.wrapQuote(gv_sabun);
        				strArg += " I_FLOW_ID="       + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"I_FLOW_ID"));
        				strArg += " POST_MST_DATE="       + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_DATE"));
        				strArg += " POST_MST_NO="       + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_NO"));
        				strArg += " POST_MST_ID="       + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
        				strArg += " DELETE_GUBUN="       + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"DELETE_GUBUN"));
        				strArg += " DELETEDATETIME="       + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"DELETEDATETIME"));

        				trace(strArg);
        				this.gfn_TransactionP("SEND_DML", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        		}
        	}
        };
        // 삭제 버튼 클릭 시
        this.btn_del_onclick = function(obj,e)
        {
        	var arg = "삭제내용 선택";
        	this.lfn_showModal("del", {arg:arg}, "gw::GWMstDtlCancel_ConformF.xfdl", "fnBtnDelCallback", this, 410, 110, 280, 90);
        };
        /* // 닫기 버튼을 눌렀을 때
        this.btn_close_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	if(this.parent.parent.name == "WorkDetail"){
        		var nRow = this.parent.parent.ds_selectMenu.findRow("selectMenu_Div_id",this.parent.name);
        		var bClose_id = this.parent.parent.ds_selectMenu.getColumn(nRow,"selectButton_Div_id");
        		this.parent.parent.div_selectMenu.form.all[bClose_id].form.CloseButton.click();
        	}
        	else
        		this.close();
        };
        */
        // 귀속부서 버튼을 눌렀을 때
        this.btn_pay_onclick = function(obj,e)
        {
        	this.lfn_showModal("pay", {gv_sabun:gv_sabun}, "gw::GW800_TEAM.xfdl", '', this, 0, 0, 860, 660);
        };
        // 직과도서 버튼을 눌렀을 때
        this.btn_divide_onclick = function(obj,e)
        {
        	this.lfn_showModal("pay", {gv_sabun:gv_sabun}, "gw::GWProduct_SearchF.xfdl", '', this, 0, 0, 820, 550);
        };
        // 품목 combo 변할 때
        this.cbo_goods_onitemchanged = function(obj,e)
        {
        	if ( this.cbo_goods.value == '3' ) // 기타일 경우만 품목비고 입력 받음
        		this.edt_goodsetc.set_enable(true);
        	else
        	{
        		this.edt_goodsetc.set_enable(false);
        		this.edt_goodsetc.set_value('');
        		this.dsPostDst.setColumn(this.dsPostDst.rowposition, "GOODS_ETC", "");
        	}
        	// code는 value로 binding 되어있으므로 Name만 text로 넣어주기
        	this.dsPostDst.setColumn(this.dsPostDst.rowposition, "GOODS_NAME", this.cbo_goods.text);
        };
        //발신인 팀 변할 때
        this.edt_sendteam_onchanged = function(obj,e)
        {
        	var name = this.edt_sendteam.value + '/' + this.edt_sendname.value;
        	this.dsPostDst.setColumn(this.dsPostDst.rowposition, "SEND_NAME", name);
        };
        // 발신인 이름 변할 때
        this.edt_sendname_onchanged = function(obj,e)
        {
        	var name = this.edt_sendteam.value + '/' + this.edt_sendname.value;
        	this.dsPostDst.setColumn(this.dsPostDst.rowposition, "SEND_NAME", name);
        };
        // mst 클릭
        this.grd_mst_oncellclick = function(obj,e)
        {
        	this.dsPostDst.clearData();
        	this.dsProduct.clearData();
        	this.dsProductAtt.clearData();
        	this.edt_sendname.set_value("");
        	this.edt_sendteam.set_value("");

        	//SQL_GW800_D_TEMP_SELECT
        	var strUrl   = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsPostDst=dsPostDst";
        	var strArg = " start="+ nexacro.wrapQuote('start');
        	strArg += " prepareCall="+ nexacro.wrapQuote('ITOP.PKG_COMMON_NEWPOST.PROC_DST_SELECT');
        	strArg += " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));

        	this.gfn_TransactionP("SelectIsDst", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this); // dsPostDst를 jsp단에서 만들어서 가져옴

        	//this.fnDataClear(); // 데이터클리어 및 insert 로 상태변경
        	this.fnSelectBookListMstTran(); // 마스터에 속해있는 도서리스트 다시 불러옴.
        	this.fnSelectAttListMstTran(); // 마스터에 속해있는 도서리스트 다시 불러옴.

        	// 작성상태 이거나 미결상태 이면
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0')
        		this.fnIsEnable(false);

        	if (this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != null && this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != '9' )
        		this.fnIsEnable(false);

        	if( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "PRINT_GUBUN") != '0' ) // -- 프린트 출력상태
        	{
        		this.fnIsEnable(false);
        	}
        	if( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") == '3' ) // -- 관리자 삭제
        	{
        		this.fnIsEnable(false);
        	}
        };
        //DST grid 클릭 시
        this.grd_dst_oncellclick = function(obj,e)
        {
        	if(this.dsPostDst.rowcount > 0)
        		this.fnIsEnable(true);
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0')
        		this.fnIsEnable(false);
        	if (this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != null && this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != '9' )
        		this.fnIsEnable(false);
        	if( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "PRINT_GUBUN") != '0' )
        		this.fnIsEnable(false);
        	if( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") == '3' )
        		this.fnIsEnable(false);
        	this.dsAccountDtlTeam.clearData(); // 데이터 초기화
        	row_status = "UPDATE"; // 상태를 업데이트로 변경
        	this.fnSelectBookListTran(); // DST에 저장된 도서리스트 불러오기
        	this.fnSelectAttListTran(); // DST에 저장된 속성리스트 불러오기

        	if(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"SEND_NAME") != null){
        		var sendname_spl = (this.dsPostDst.getColumn(this.dsPostDst.rowposition,"SEND_NAME").split("/"));

        		if ((sendname_spl).length > 1) {
        			this.edt_sendteam.set_value(sendname_spl[0]);
        			this.edt_sendname.set_value(sendname_spl[1]);
        		}
        		else if((sendname_spl).length == 1){
        			this.edt_sendteam.set_value(sendname_spl[0]);
        		}
        	}
        	else {
        		this.edt_sendteam.set_value("");
        		this.edt_sendname.set_value("");
        	}

        	this.dsAccountDtlTeam.addRow();
        	this.dsAccountDtlTeam.setColumn(0, "TEAMCODE", this.dsPostDst.getColumn(this.dsPostDst.rowposition,"BELONGING_DEPT_CODE"));
        	this.dsAccountDtlTeam.setColumn(0, "TEAMNAME", this.dsPostDst.getColumn(this.dsPostDst.rowposition,"BELONGING_DEPT_NAME"));
        	if ( this.cbo_goods.value == '3' ) // 기타일 경우만 품목비고 입력 받음
        		this.edt_goodsetc.set_enable(true);
        	else
        	{
        		this.edt_goodsetc.set_enable(false);
        	}
        };
        // edit 숫자 입력 정규식
        this.edt_number_oninput = function(obj,e)
        {
        	obj.updateToDataset();
        	obj.set_value(obj.value.replace(/[^0-9]/g, ""));
        };
        // 엑셀 양식 다운버튼
        this.btn_downexcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_form, "Sheet1!A1");
        	this.exportObj.set_exportfilename( "upload_file" );
            this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };
        // 엑셀 업로드 버튼
        this.btn_exlup_onclick = function(obj,e)
        {
        	if( this.dsPostMst.rowcount <= 0 )
        	{
        		alert("신규버튼으로 결재문서를 먼저 추가 해 주세요.");
        		return;
        	}
        	if ( (this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0') || ((this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != null) && (this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != '9'))  )
        	{
        		alert("작성상태 이거나 미결상태만 업로드할 수 있습니다.");
        		return;
        	}
        	if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "PRINT_GUBUN") != '0' )
        	{
        		alert("이미 라벨이 출력된 상태는 업로드 할 수 없습니다.");
        		return;
        	}
        	for(var i=0; i< this.dsPostDst.rowcount; i++ )
        	{
        		var temp = this.dsPostDst.getRowType(i);
        		if ( temp == '2'){
        			alert("추가리스트가 존재합니다. 임시저장 후 추가하세요.");
        			return;
        		}
        	}
        	this.importObj = new ExcelImportObject("Import00",this);
            this.importObj.addEventHandler("onsuccess", this.Import_onsuccess, this);
            this.importObj.set_importurl(gv_urlXeni);
            var ret = this.importObj.importData("","output=ds","dsPostDst_excel=ds");
        	if(!ret){
        		this.alert("업로드에 실패하셨습니다.");
        		return;
        	}
        };
        // function

        // 초기화
        this.fnDataClear = function()
        {
        	this.dsPostDst.clearData();
            this.dsAccountDtlTeam.clearData();
            this.dsProduct.clearData();
            this.dsProductAtt.clearData();

            this.dsAccountDtlTeam.addRow();
            // 귀속부서 기본 세팅
            this.dsAccountDtlTeam.setColumn(0,"TEAMCODE", gds_userinfo.getColumn(0,"BUSECD"));
            this.dsAccountDtlTeam.setColumn(0,"TEAMNAME", gds_userinfo.getColumn(0,"BUSENM"));

            row_status = "INSERT";
        }

        this.fnIsEnable = function(value)
        {
        	this.edt_sendteam.set_enable(value);
        	this.edt_sendname.set_enable(value);

        	this.btn_searchpostnumber.set_enable(value);
        	this.edt_postnumber.set_enable(value);
        	this.edt_payeename.set_enable(value);
        	this.edt_addr.set_enable(value);
        	this.edt_phonenumber.set_enable(value);
        	this.cbo_goods.set_enable(value);
        	this.cbo_loc.set_enable(value);
        	this.edt_from_addr.set_enable(value);
        	this.edt_from_phonenumber.set_enable(value);
        	this.btn_searchfrompostnumber.set_enable(value);
        	this.btn_pay.set_enable(value);
        	this.btn_divide.set_enable(value);
        }
        // 위치 설정
        this.fnGetLocValue = function()
        {
        	if ( gds_userinfo.getColumn(0,"BUSECD") == '6G000' || gds_userinfo.getColumn(0,"BUSECD") == '58000' || gds_userinfo.getColumn(0,"BUSECD") == '9A660') // 매거진부
        	{
        		this.cbo_loc.set_index(0);
        	}else if ( gds_userinfo.getColumn(0,"BUSECD") == '9A400' ) // 회원사업부
        	{
        		this.cbo_loc.set_index(1);
        	}
        	else if ((gds_userinfo.getColumn(0,"BUSECD").substr(0,2)) == 'DJ' || (gds_userinfo.getColumn(0,"BUSECD").substr(0,2)) == 'DK' ) // 영업부
        	{
        		this.cbo_loc.set_index(2);
        	}
        	else if ( gds_userinfo.getColumn(0,"BUSECD") == 'EA300' || gds_userinfo.getColumn(0,"BUSECD") == 'DH400' )  // T셀파쇼핑몰팀
        	{
        		this.cbo_loc.set_index(4);
        	}
        	else // 자료실
        	{
        		this.cbo_loc.set_index(3);
        	}
        }
        // 디테일 데이터셋 유효성 검사
        this.fnValidChkDs = function()
        {
        	for(var i=0; i < this.dsPostDst.rowcount; i++ )
        	{
        		if(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"SEND_NAME") != null)
        			var sendname_spl = (this.dsPostDst.getColumn(this.dsPostDst.rowposition,"SEND_NAME")).split("/");
        		else{
        			alert(i+1+" 번째 발신인 팀을 입력하세요!");
        			return false;
        		}
        		//trace(this.dsPostDst.getColumn(i, "POST_NUMBER"));
        		if( (this.dsPostDst.getColumn(i, "POST_NUMBER")).length <= 0){
        			alert(i+1+" 번째 우편번호를 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "PAYEE_NAME")).length <= 0){
        			alert(i+1+" 번째 수취인 성명을 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "ADDR")).length <= 0){
        			alert(i+1+" 번째 주소를 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "PHONE_NUMBER")).length <= 0){
        			alert(i+1+" 번째 휴대번호를 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "GOODS_CODE")).length <= 0){
        			alert(i+1+" 번째 품목을 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "BELONGING_DEPT_CODE")).length <= 0){
        			alert(i+1+" 번째 귀속부서를 입력하세요!");
        			return false;
        	   }else if( (sendname_spl[0]).length <= 0){
        			alert(i+1+" 번째 발신인 팀을 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "LOCATION")).length <= 0){
        			alert(i+1+" 번째 위치를 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "FROM_ADDR")).length <= 0){
        			alert(i+1+" 번째 발신인 주소를 입력하세요!");
        			return false;
        	   }else if( (this.dsPostDst.getColumn(i, "FROM_PHONE_NUMBER")).length <= 0){
        			alert(i+1+" 번째 발신인 휴대번호를 입력하세요!");
        			return false;
        	   }
           }

           return true;
        }
        // 유효성 검사
        this.fnValidChk = function()
        {
        	if( this.dsPostMst.rowcount <= 0 )
        	{
        		alert("결재문서를 추가 후 이용해 주세요.");
        		return;
        	}

        	if(this.edt_postnumber.value == ""){
        		alert("우편번호를 입력하세요!");
        		return false;
        	}else if(this.edt_payeename.value == ""){
        		alert("수취인 성명을 입력하세요!");
        		return false;
        	}else if(this.edt_addr.value == ""){
        		alert("주소를 입력하세요!");
        		return false;
        	}else if(this.edt_telnumber.value == ""){
        		alert("전화번호를 입력하세요!");
        		return false;
        	}else if(this.edt_phonenumber.value == "")
        	{
        		alert("휴대폰번호를 입력하세요!");
        		return false;
        	}else if( this.dsAccountDtlTeam.rowcount <= 0 ){
        		alert("귀속부서를 선택하세요!");
        		return false;
        	}else if( (sendname_spl[0]).length <= 0){
        		alert(i+1+" 번째 발신인 팀을 입력하세요!");
        		return false;
        	}else if( this.edt_from_addr.value == "" ){
        		alert("발신인 주소를 입력하세요!");
        		return false;
        	}else if( this.edt_from_phonenumber.value == "" ){
        		alert("발신인 휴대번호를 입력하세요!");
        		return false;
        	}

        	return true;
        }

        this.fnSplitBookList = function(i, strC) // 도서코드, 년판을 쪼갠 후 데이터 셋에 넣음
        {
        	this.dsProduct_excel.clearData();
        	if(strC == null)
        		return;
        	//var strC = dsPostDst_excel.GetColumn(i, "BOOK_LIST");
        	var strC_spl = strC.split("^");// 문자열을 ^ 문자로 자름
        	var j,idx,subStr,isfind,rowcount;
        	var chkbook; // 도서코드 년판 중복 체크
        	rowcount = 0;
        	for(var k=0;k <= strC_spl.length; k++)
        	{
        		isfind = 0; // 문자를 찾으면 1 디폴트 0
        		if(k == 0)
        		{
        			subStr = strC_spl[k] + "^";//  ^ 추가는 split 으로 자른 문자열 길이 보정
        			idx = strC_spl[k].length + k;
        			j = 1;// 첫번째
        			isfind = 1;
        		}
        		else if(k < strC_spl.length -1)
        		{
        			subStr += strC_spl[k] + "^"; // 첫번째 마지막번째 를 제외한 중간에 위치한 문자 B 의 위치 추출을 위해
        			idx = subStr.length -1; // -1 은 인덱스 추출을 위해
        			j++;// B 문자 찾은 갯수
        			isfind = 1;
        		}
        		else if(k == strC_spl.length && strC.substr(strC.length-1,1) == "^")
        		{
        			// B 문자가 입력 문자열 마지막에 위치할 경우 별도의 처리가 필요합니다.
        			subStr = strC; // 마지막에 B 문자가 올 경우
        			idx = subStr.length -1; // -1 은 인덱스 추출을 위해
        			j++;// B 문자 찾은 갯수
        			isfind = 1;
        		}

        		if( isfind == 1 ) //문자를 찾은경우
        		{
        			chkbook = this.dsProduct_excel.findRow("BOOK_CD", strC.substr(idx-14,10));
        			trace(chkbook);

        			if (chkbook == -1)
        			{
        				this.dsProduct_excel.addRow();
        				trace(strC.substr(idx-14,10));
        				trace(strC.substr(idx-4,4));
        				this.dsProduct_excel.setColumn(rowcount, "BOOK_CD", strC.substr(idx-14,10) );
        				this.dsProduct_excel.setColumn(rowcount, "YY", strC.substr(idx-4,4) );

        				rowcount++;
        			}
        		}
        	}

        	//alert("찾으시는 글자는 총 "+j+"번 나오며, 인덱스 위치는 "+idx+"입니다.");
        }
        this.fnSplitBookAttList = function(i, strC)
        {
        	this.dsProductAtt_excel.clearData();
        	if(strC == null)
        		return;
        	var chkbook; // 속성코드 중복 체크
        	//var strC = dsPostDst_excel.GetColumn(i, "BOOK_LIST");
        	var strC_spl = strC.split("^");// 문자열을 ^ 문자로 자름
        	var j,idx,subStr,isfind,rowcount;

        	rowcount = 0;
        	for(var k=0;k <= strC_spl.length; k++)
        	{
        		isfind = 0; // 문자를 찾으면 1 디폴트 0
        		if(k == 0)
        		{
        			subStr = strC_spl[k] + "^";//  ^ 추가는 split 으로 자른 문자열 길이 보정
        			idx = strC_spl[k].length + k;
        			j = 1;// 첫번째
        			isfind = 1;
        		}
        		else if(k < strC_spl.length -1)
        		{
        			subStr += strC_spl[k] + "^"; // 첫번째 마지막번째 를 제외한 중간에 위치한 문자 B 의 위치 추출을 위해
        			idx = subStr.length -1; // -1 은 인덱스 추출을 위해
        			j++;// B 문자 찾은 갯수
        			isfind = 1;
        		}
        		else if(k == strC_spl.length && strC.substr(strC.length-1,1) == "^")
        		{
        			// ^ 문자가 입력 문자열 마지막에 위치할 경우 별도의 처리가 필요합니다.
        			subStr = strC; // 마지막에 B 문자가 올 경우
        			idx = subStr.length -1; // -1 은 인덱스 추출을 위해
        			j++;// B 문자 찾은 갯수
        			isfind = 1;
        		}

        		if( isfind == 1 ) //문자를 찾은경우
        		{
        			chkbook = this.dsProductAtt_excel.findRow("ATT_CD", strC.substr(idx-9,9));

        			if (chkbook == -1)
        			{
        				this.dsProductAtt_excel.addRow();
        				this.dsProductAtt_excel.setColumn(rowcount, "ATT_CD", strC.substr(idx-9,9) );
        				rowcount++;
        			}
        		}
        	}
        }
        //엑셀로 들어오는 column명 변경
        this.fnExcelColChange = function()
        {
        	this.dsPostDst_excel.updateColID("Column0", "POST_NUMBER");
        	this.dsPostDst_excel.updateColID("Column1", "PAYEE_NAME");
        	this.dsPostDst_excel.updateColID("Column2", "ADDR");
        	this.dsPostDst_excel.updateColID("Column3", "PHONE_NUMBER");
        	this.dsPostDst_excel.updateColID("Column4", "GOODS_CODE");
        	this.dsPostDst_excel.updateColID("Column5", "GOODS_ETC");
        	this.dsPostDst_excel.updateColID("Column6", "SEND_NAME");
        	this.dsPostDst_excel.updateColID("Column7", "FROM_PHONE_NUMBER");
        	this.dsPostDst_excel.updateColID("Column8", "FROM_ADDR");
        	this.dsPostDst_excel.updateColID("Column9", "BELONGING_DEPT_CODE");
        	this.dsPostDst_excel.updateColID("Column10", "BOOK_LIST");
        	this.dsPostDst_excel.updateColID("Column11", "BOOK_LIST_ATT");
        	this.dsPostDst_excel.updateColID("Column12", "LOCATION");
        }

        // 엑셀 데이터 디테일 데이터셋
        this.fnValidChkDsExcel = function()
        {
        	for(var i=0; i < this.dsPostDst_excel.rowcount; i++ )
        	{
        		//trace(dsPostDst_excel.GetColumn(i, "POST_NUMBER"));
        		if( (this.dsPostDst_excel.getColumn(i,"POST_NUMBER") == null) || ((this.dsPostDst_excel.getColumn(i,"POST_NUMBER").toString()).length) == 0 || ((this.dsPostDst_excel.getColumn(i,"POST_NUMBER").toString()).length) > 5 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"POST_NUMBER")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 우편번호 정보가 올바르지 않습니다!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"PAYEE_NAME") == null) || ((this.dsPostDst_excel.getColumn(i,"PAYEE_NAME").toString()).length) == 0 || ((this.dsPostDst_excel.getColumn(i,"PAYEE_NAME").toString()).length) > 20){
        			//alert((this.dsPostDst_excel.getColumn(i,"PAYEE_NAME")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 수취인 성명이 올바르지 않습니다!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"ADDR") == null) || ((this.dsPostDst_excel.getColumn(i,"ADDR").toString()).length) == 0 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"ADDR")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 주소를 입력하세요!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"PHONE_NUMBER") == null) || ((this.dsPostDst_excel.getColumn(i,"PHONE_NUMBER").toString()).length) == 0 || ((this.dsPostDst_excel.getColumn(i,"PHONE_NUMBER").toString()).length) > 11 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"PHONE_NUMBER")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 휴대번호가 올바르지 않습니다!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"GOODS_CODE") == null) || ((this.dsPostDst_excel.getColumn(i,"GOODS_CODE").toString()).length) == 0  ){
        			//alert((this.dsPostDst_excel.getColumn(i,"GOODS_CODE")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 품명을 입력하세요!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"BELONGING_DEPT_CODE") == null) || ((this.dsPostDst_excel.getColumn(i,"BELONGING_DEPT_CODE").toString()).length) > 5 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"BELONGING_DEPT_CODE")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 귀속부서 정보가 올바르지 않습니다!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"SEND_NAME") == null) || ((this.dsPostDst_excel.getColumn(i,"SEND_NAME").toString()).length) == 0 || ((this.dsPostDst_excel.getColumn(i,"SEND_NAME").toString()).length) > 30 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"SEND_NAME")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 발신인 정보가 올바르지 않습니다!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"BOOK_LIST") != null) && (this.dsPostDst_excel.getColumn(i,"BOOK_LIST_ATT") != null) ){
        			//alert((this.dsPostDst_excel.getColumn(i,"BOOK_LIST")).toString());
        			if( ((this.dsPostDst_excel.getColumn(i,"BOOK_LIST")).length != 0) && ((this.dsPostDst_excel.getColumn(i,"BOOK_LIST_ATT")).length != 0) ) {
        				i++; alert("엑셀자료 "+i+" 번째 직과도서,속성도서는 둘 중 하나만 입력가능합니다."); i--;
        				return false; }
        		}else if( (this.dsPostDst_excel.getColumn(i,"LOCATION") == null) || ((this.dsPostDst_excel.getColumn(i,"LOCATION").toString()).length) == 0 || ((this.dsPostDst_excel.getColumn(i,"LOCATION").toString()).length) > 4 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"LOCATION")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 위치가 올바르지 않습니다!."); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"BEGO") != null) && ((this.dsPostDst_excel.getColumn(i,"BEGO").toString()).length) > 150 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"BEGO")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 비고의 길이가 너무 큽니다! (최대 150글자)."); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"FROM_PHONE_NUMBER") == null) || ((this.dsPostDst_excel.getColumn(i,"FROM_PHONE_NUMBER").toString()).length) == 0 || ((this.dsPostDst_excel.getColumn(i,"FROM_PHONE_NUMBER").toString()).length) > 11 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"FROM_PHONE_NUMBER")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 발신인 휴대번호가 올바르지 않습니다!"); i--;
        			return false;
        		}else if( (this.dsPostDst_excel.getColumn(i,"FROM_ADDR") == null) || ((this.dsPostDst_excel.getColumn(i,"FROM_ADDR").toString()).length) == 0 ){
        			//alert((this.dsPostDst_excel.getColumn(i,"FROM_ADDR")).toString());
        			i++; alert("엑셀자료 "+i+" 번째 발신인 주소를 입력하세요!"); i--;
        			return false;
        		}
        		if ( (this.dsPostDst_excel.getColumn(i,"GOODS_CODE") != null) ||
        			(this.dsPostDst_excel.getColumn(i,"GOODS_CODE")).toString() == '1' ||
        			(this.dsPostDst_excel.getColumn(i,"GOODS_CODE")).toString() == '2' ||
        			(this.dsPostDst_excel.getColumn(i,"GOODS_CODE")).toString() == '3' ){
        		}
        		else
        		{
        			i++; alert("엑셀자료 "+i+" 번째 품명이 올바르지 않습니다!"); i--;
        			return false;
        		}
        		if(this.dsPostDst_excel.getColumn(i,"BOOK_LIST")!= null)
        		{
        			var booklistchk = (this.dsPostDst_excel.getColumn(i,"BOOK_LIST")).length % 15;
        			if ( booklistchk != 0 )
        			{
        				i++; alert("엑셀자료 "+i+" 번째 직과도서코드 정보가 올바르지 않습니다!"); i--;
        				return false;
        			}
        		}
        		if(this.dsPostDst_excel.getColumn(i,"BOOK_LIST_ATT")!= null)
        		{
        			var booklistAttchk = (this.dsPostDst_excel.getColumn(i,"BOOK_LIST_ATT")).length % 10;
        			if ( booklistAttchk != 0 )
        			{
        				i++; alert("엑셀자료 "+i+" 번째 직과속성코드 정보가 올바르지 않습니다!"); i--;
        				return false;
        			}
        		}
        	}

           return true;
        }
        //Transaction

        // 도서리스트 조회 트랜잭션
        this.fnSelectBookListMstTran = function()
        {
        	var strUrl = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsBookList=dsBookList";
        	var strArg = " start="+ nexacro.wrapQuote('start');
        	strArg += " prepareCall="+ nexacro.wrapQuote('ITOP.PKG_COMMON_NEWPOST.PROC_BOOKLIST_SELECT_MST');
        	strArg += " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));

        	this.gfn_TransactionP("SelectBookListMst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // 마스터 속성 조회 트랜잭션
        this.fnSelectAttListMstTran = function()
        {
        	//SQL_GW800_ATTLIST_SELECT_MST
        	var strUrl   = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsAttList=dsAttList";
        	var strArg = " start="+ nexacro.wrapQuote('start');
        	strArg += " prepareCall="+ nexacro.wrapQuote('ITOP.PKG_COMMON_NEWPOST.PROC_ATTLIST_SELECT_MST');
        	strArg += " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));

        	this.gfn_TransactionP("SelectAttListMst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // 직과도서 조회 트랜잭션
        this.fnSelectBookListTran = function()
        {
        	//SQL_GW800_BOOKLIST_SELECT_DST
        	var strUrl = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsProduct=dsProduct";
        	var strArg = " start="+ nexacro.wrapQuote('start');
        	strArg += " prepareCall="+ nexacro.wrapQuote('ITOP.PKG_COMMON_NEWPOST.PROC_BOOKLIST_SELECT_DST');
        	strArg += " DST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_DST_ID"));

        	this.gfn_TransactionP("SelectBookListDst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }

        // 디테일 속성 조회 트랜잭션
        this.fnSelectAttListTran = function()
        {
        	//SQL_GW800_ATTLIST_SELECT_DST
        	var strUrl   = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsProductAtt=dsProductAtt";
        	var strArg = " start="+ nexacro.wrapQuote('start');
        	strArg += " prepareCall="+ nexacro.wrapQuote('ITOP.PKG_COMMON_NEWPOST.PROC_ATTLIST_SELECT_DST');
        	strArg += " DST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_DST_ID"));

        	 this.gfn_TransactionP("SelectAttListDst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // 디테일 조회 트랜잭션
        this.fnSelectDstTran = function(sync)
        {
        	//SQL_GW800_D_TEMP_SELECT
        	var strUrl = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsPostDst=dsPostDst";
        	var strArg = " start="+ nexacro.wrapQuote('start');
        	strArg += " prepareCall="+ nexacro.wrapQuote('ITOP.PKG_COMMON_NEWPOST.PROC_DST_SELECT');
        	strArg += " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));

        	var objColInfo = this.dsPostDst.getColumnInfo("LOCATION");

        	this.gfn_TransactionP("SelectIsDst", strUrl, strDs, strDs, strArg, "fnCallback", sync, "P", false, this);
        }
        // 마스터 인서트 함수
        this.fnMstInsertTran = function()
        {
        	//SQL_GW800_M_INSERT
        	var strUrl   = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsMstTemp=dsMstTemp";
        	var strArg = " start="+ nexacro.wrapQuote('start');
        	strArg += " prepareCall="+ nexacro.wrapQuote('ITOP.PKG_COMMON_NEWPOST.PROC_INSERT_MST');
        	strArg += " strSABUN =" + nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("InsertMst", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // 마스터 삭제 함수
        this.fnMstDeleteTran = function()
        {
        	//SQL_GW800_M_DELETE.jps 수정
        	var strUrl   = "JSP/gw/SQL_GW800_M_DELETE.jsp";
        	var strDs = "";
        	var strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
        	strArg += " I_FLOW_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"I_FLOW_ID"));

        	this.gfn_TransactionP("DeleteMst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // 디테일 수정 함수
        this.fnDstSaveTran = function(i)
        {
        	//SQL_GW800_D_UPDATE 수정
        	var strUrl   = "JSP/gw/SQL_GW800_D_UPDATE.jsp";
        	var strDs = "";

        	var strArg  = " DST_ID="      + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_DST_ID"));
            strArg += " POST_NUMBER="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_NUMBER"));
        	strArg += " PAYEE_NAME="   + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"PAYEE_NAME"));
        	strArg += " ADDR="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"ADDR"));
        	strArg += " PHONE_NUMBER="    + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"PHONE_NUMBER"));
        	strArg += " GOODS_CODE="     + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"GOODS_CODE"));
        	strArg += " GOODS_ETC="      + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"GOODS_ETC"));
        	strArg += " BELONGING_DEPT_CODE="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"BELONGING_DEPT_CODE"));
        	strArg += " SEND_NAME="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"SEND_NAME"));
        	strArg += " LOCATION="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"LOCATION"));
        	strArg += " FROM_ADDR="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"FROM_ADDR"));
        	strArg += " FROM_PHONE_NUMBER="    + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"FROM_PHONE_NUMBER"));

        	this.gfn_TransactionP("UpdateDst", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // 디테일 인서트 함수
        this.fnDstInsertTran = function(i)
        {
        	//SQL_GW800_D_INSERT 수정
        	var strUrl   = "JSP/gw/SQL_GW800_D_INSERT.jsp";
        	var strDs = "dsDstID=dsDstID";

        	var strArg = " MST_ID="      + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
            strArg += " POST_NUMBER="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_NUMBER"));
        	strArg += " PAYEE_NAME="   + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"PAYEE_NAME"));
        	strArg += " ADDR="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"ADDR"));
        	strArg += " PHONE_NUMBER="    + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"PHONE_NUMBER"));
        	strArg += " GOODS_CODE="     + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"GOODS_CODE"));
        	strArg += " GOODS_ETC="      + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"GOODS_ETC"));
        	strArg += " BELONGING_DEPT_CODE="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"BELONGING_DEPT_CODE"));
        	strArg += " SEND_NAME="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"SEND_NAME"));
        	strArg += " LOCATION="       + nexacro.wrapQuote(this.cbo_loc.value);
        	strArg += " FROM_ADDR="       + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"FROM_ADDR"));
        	strArg += " FROM_PHONE_NUMBER="    + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"FROM_PHONE_NUMBER"));

        	this.gfn_TransactionP("InsertDst", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // 디테일 삭제 함수
        this.fnDstDeleteTran = function()
        {
        	//SQL_GW800_D_DELETE.jsp 수정
        	var strUrl = "JSP/gw/SQL_GW800_D_DELETE.jsp";
        	var strDs = "";
        	var strArg = " DST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_DST_ID"));

        	this.gfn_TransactionP("DeleteDst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // 도서리스트 저장 함수
        this.fnBookListInsertTran = function(dst_id) // dst_id 변수 -> 디테일업데이트 일시 발송리스트에서, 인서트 일시 저장 후 템프데이터셋에서 가져옴
        {
        	var strUrl = "JSP/gw/SQL_GW800_BOOKLIST_INSERT.jsp";
        	var strDs = "";
        	var strArg = "";
        	for ( var i = 0; i< this.dsProduct.rowcount; i++ )
        	{
        		strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
        		//strArg += " DST_ID =" + nexacro.wrapQuote(dsDstID.GetColumn(dsDstID.row,"POST_DST_ID"));
        		strArg += " DST_ID =" + nexacro.wrapQuote(dst_id);
        		strArg += " YY =" + nexacro.wrapQuote(this.dsProduct.getColumn(i,"YY"));
        		strArg += " BOOK_NAME =" + nexacro.wrapQuote(this.dsProduct.getColumn(i,"BOOK_NAME"));
        		strArg += " BOOK_CD =" + nexacro.wrapQuote(this.dsProduct.getColumn(i,"BOOK_CD"));
        		strArg += " BOOKMST_SEQ =" + nexacro.wrapQuote(this.dsProduct.getColumn(i,"BOOKMST_SEQ"));

        		trace(strArg);
        		this.gfn_TransactionP("InsertBookList", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	}
        }
        // 속성리스트 저장 함수
        this.fnAttListInsertTran = function(dst_id) // dst_id 변수 -> 디테일업데이트 일시 발송리스트에서, 인서트 일시 저장 후 템프데이터셋에서 가져옴
        {
        	var strUrl   = "JSP/gw/SQL_GW800_ATTLIST_INSERT.jsp";
        	var strDs = "";
        	var strArg = "";
        	for ( var i = 0; i< this.dsProductAtt.rowcount; i++ )
        	{
        		strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
        		//strArg += " DST_ID =" + nexacro.wrapQuote(dsDstID.GetColumn(dsDstID.row,"POST_DST_ID"));
        		strArg += " DST_ID =" + nexacro.wrapQuote(dst_id);
        		strArg += " ATT_NAME =" + nexacro.wrapQuote(this.dsProductAtt.getColumn(i,"ATT_NAME"));
        		strArg += " ATT_CD =" + nexacro.wrapQuote(this.dsProductAtt.getColumn(i,"ATT_CD"));

        		trace(strArg);
        		this.gfn_TransactionP("InsertAttList", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	}
        }
        // 도서리스트 삭제 함수
        this.fnBooklistDeleteTran = function()
        {
        	var strUrl = "JSP/gw/SQL_GW800_BOOKLIST_DELETE.jsp";
        	var strDs = "";
        	var strArg = " DST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_DST_ID"));

        	this.gfn_TransactionP("DeleteBooklist", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // 속성리스트 삭제 함수
        this.fnAttlistDeleteTran = function()
        {
        	var strUrl = "JSP/gw/SQL_GW800_ATTLIST_DELETE.jsp";
        	var strDs = "";
        	var strArg = " DST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_DST_ID"));

        	this.gfn_TransactionP("DeleteAttlist", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // Excel로 디테일저장 함수
        this.fnDstInsertTranExcel = function(i)
        {
        	var strUrl   = "JSP/gw/SQL_GW800_D_INSERT.jsp";
        	var strDs = "dsDstID=dsDstID";

        	var strArg  = " MST_ID="      		+ nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
            strArg += " POST_NUMBER="       	+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"POST_NUMBER"));
        	strArg += " PAYEE_NAME="   			+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"PAYEE_NAME"));
        	strArg += " ADDR="       			+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"ADDR"));
        	strArg += " PHONE_NUMBER="    		+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"PHONE_NUMBER"));
        	strArg += " GOODS_CODE="     		+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"GOODS_CODE"));
        	strArg += " GOODS_ETC="      		+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"GOODS_ETC"));
        	strArg += " BELONGING_DEPT_CODE="   + nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"BELONGING_DEPT_CODE"));
        	strArg += " SEND_NAME="       		+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"SEND_NAME"));
        	strArg += " LOCATION="       		+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"LOCATION"));
        	strArg += " FROM_ADDR="       		+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"FROM_ADDR"));
        	strArg += " FROM_PHONE_NUMBER="    	+ nexacro.wrapQuote(this.dsPostDst_excel.getColumn(i,"PHONE_NUMBER"));

        	this.gfn_TransactionP("InsertDstExcel", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // 도서리스트 저장 함수
        this.fnBookListInsertTranExcel = function(dst_id) // dst_id 변수 -> 디테일업데이트 일시 발송리스트에서, 인서트 일시 저장 후 템프데이터셋에서 가져옴
        {
        	if(dst_id == null)
        		return;
        	var strUrl = "JSP/gw/SQL_GW800_BOOKLIST_INSERT.jsp";
        	var strDs = "";
        	var strArg = "";
        	for ( var i = 0; i< this.dsProduct_excel.rowcount; i++ )
        	{
        		strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
        		//strArg += " DST_ID =" + nexacro.wrapQuote(this.dsDstID.getColumn(dsDstID.rowposition,"POST_DST_ID"));
        		strArg += " DST_ID =" + nexacro.wrapQuote(dst_id);
        		strArg += " YY =" + nexacro.wrapQuote(this.dsProduct_excel.getColumn(i,"YY"));
        		strArg += " BOOK_NAME =" + nexacro.wrapQuote("");
        		strArg += " BOOK_CD =" + nexacro.wrapQuote(this.dsProduct_excel.getColumn(i,"BOOK_CD"));
        		strArg += " BOOKMST_SEQ =" + nexacro.wrapQuote("000");

        		trace(strArg);
        		this.gfn_TransactionP("InsertBookList", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	}
        }
        // 속성리스트 저장 함수
        this.fnAttListInsertTranExcel = function(dst_id) // dst_id 변수 -> 디테일업데이트 일시 발송리스트에서, 인서트 일시 저장 후 템프데이터셋에서 가져옴
        {
        	if(dst_id == null)
        		return;
        	var strUrl   = "JSP/gw/SQL_GW800_ATTLIST_INSERT.jsp";
        	var strDs = "";
        	var strArg = "";
        	for ( var i = 0; i< this.dsProductAtt_excel.rowcount; i++ )
        	{
        		if( (this.dsProductAtt_excel.getColumn(i,"ATT_CD") != null) && (this.dsProductAtt_excel.getColumn(i,"ATT_CD").length) >= 9 )
        		{
        			strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_ID"));
        			//strArg += " DST_ID =" + nexacro.wrapQuote(this.dsDstID.getColumn(this.dsDstID.rowposition,"POST_DST_ID"));
        			strArg += " DST_ID =" + nexacro.wrapQuote(dst_id);
        			strArg += " ATT_NAME =" + nexacro.wrapQuote("");
        			strArg += " ATT_CD =" + nexacro.wrapQuote(this.dsProductAtt_excel.getColumn(i,"ATT_CD"));

        			trace(strArg);
        			this.gfn_TransactionP("InsertAttList", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        		}
        	}
        }
        //Callback

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
            if (ErrorCode != 0)
        		{alert(ErrorMsg);
        		return;}
        	else if (trid != null)
        	{
        		trid = trid.split("|");
        		trid = trid[0]
        	}
        	if ( trid == "InsertMst") // 신규버튼 눌렀을 시 문서추가 후 msttemp(방금 추가한 문서정보)에 얻어온 값을 저장
            {
        		this.dsPostMst.addRow();
        		switch(this.dsPostMst.rowposition,"DELETE_GUBUN",this.dsMstTemp.getColumn(0,"DELETE_GUBUN"))
        		{
        			case '0': this.dsPostMst.setColumn(this.dsPostMst.rowposition,"GUBUN_NAME",'작성'); break;
        			case 'D': this.dsPostMst.setColumn(this.dsPostMst.rowposition,"GUBUN_NAME",'삭제'); break;
        			case '1': this.dsPostMst.setColumn(this.dsPostMst.rowposition,"GUBUN_NAME",'결제진행'); break;
        			case '2': this.dsPostMst.setColumn(this.dsPostMst.rowposition,"GUBUN_NAME",'결제완료'); break;
        			case '3': this.dsPostMst.setColumn(this.dsPostMst.rowposition,"GUBUN_NAME",'관리자삭제'); break;
        			case 'K': this.dsPostMst.setColumn(this.dsPostMst.rowposition,"GUBUN_NAME",'기각'); break;
        			default: this.dsPostMst.setColumn(this.dsPostMst.rowposition,"GUBUN_NAME",'불명'); break;
        		}
        		this.dsPostMst.setColumn(this.dsPostMst.rowposition,"POST_MST_DATE",this.dsMstTemp.getColumn(0,"POST_MST_DATE"));
        		this.dsPostMst.setColumn(this.dsPostMst.rowposition,"POST_MST_NO",this.dsMstTemp.getColumn(0,"POST_MST_NO"));
        		this.dsPostMst.setColumn(this.dsPostMst.rowposition,"POST_MST_ID",this.dsMstTemp.getColumn(0,"POST_MST_ID"));
        		this.dsPostMst.setColumn(this.dsPostMst.rowposition,"DELETE_GUBUN",this.dsMstTemp.getColumn(0,"DELETE_GUBUN"));
        		this.dsPostMst.setColumn(this.dsPostMst.rowposition,"PRINT_GUBUN_NAME",this.dsMstTemp.getColumn(0,"PRINT_GUBUN_NAME"));
        		this.dsPostMst.setColumn(this.dsPostMst.rowposition,"PRINT_GUBUN",this.dsMstTemp.getColumn(0,"PRINT_GUBUN"));

        		alert("결재문서가 생성되었습니다. 배송 정보를 입력하세요.");

        		this.btn_dtlnew.click();
        	}
        	else if (trid == "SelectIsDst")
        	{
        		if ( this.dsPostDst.rowcount <= 0 )
        			this.fnIsEnable(false);
        		else
        			this.grd_dst_oncellclick(this.grd_dst, nexacro.GridClickEventInfo);
        	}
        	else if ( trid == "DeleteMst") // 마스터 삭제 후 처리
            {
        		var i = this.dsPostMst.rowposition;
        		this.dsPostMst.deleteRow(this.dsPostMst.rowposition);
        		if ( this.dsPostMst.rowcount <= 0 )
        			this.fnDataClear();
        		else{
        			this.grd_mst.setFocus();
        			this.grd_mst_oncellclick(this.grd_mst, nexacro.GridClickEventInfo);
        		}
        	}
        	else if ( trid == "InsertDst") // 디테일 저장 후 디테일 id 값을 얻어와서 도서리스트 저장
            {
        		if( this.dsProduct.rowcount > 0 ){ // 저장할 도서가 있다면 도서리스트에 저장
        			this.fnBookListInsertTran(this.dsDstID.getColumn(0,"POST_DST_ID")); // 도서리스트 저장
        		}
        		if( this.dsProductAtt.rowcount > 0 ){ // 저장할 속성도서가 있다면 도서리스트에 저장
        			this.fnAttListInsertTran(this.dsDstID.getColumn(0,"POST_DST_ID")); // 도서리스트 저장
        		}
            }
        	else if ( trid == "UpdateDst") // 디테일 업데이트 후 처리
        	{
        		if( this.dsProduct.rowcount > 0 ){ // 도서리스트를 다시 저장
        			this.fnBookListInsertTran(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_DST_ID")); // 도서리스트 저장
        		}
        		if( this.dsProductAtt.rowcount > 0 ){ // 저장할 속성도서가 있다면 도서리스트에 저장
        			this.fnAttListInsertTran(this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_DST_ID")); // 도서리스트 저장
        		}
        	}
        	else if ( trid == "DeleteDst") // 디테일 삭제 후 처리
            {
        		this.fnSelectDstTran(true); // 디테일 다시 불러옴
        		this.fnSelectBookListMstTran(); // 마스터 도서리스트 불러오기
        		this.fnSelectAttListMstTran(); // 마스터 도서리스트 불러오기
        	}
        	else if ( trid == "InsertDstExcel") // 디테일 엑셀 저장 후 처리
            {
        		if( this.dsProduct_excel.rowcount > 0 ){ // 저장할 도서가 있다면 도서리스트에 저장
        			this.fnBookListInsertTranExcel(this.dsDstID.getColumn(0,"POST_DST_ID")); // 도서리스트 저장
        		}
        		if( this.dsProductAtt_excel.rowcount > 0 ){ // 저장할 속성도서가 있다면 도서리스트에 저장
        			this.fnAttListInsertTranExcel(this.dsDstID.getColumn(0,"POST_DST_ID")); // 도서리스트 저장
        		}
            }
        	else if ( trid == "SEND_DML" )
        	{
        		if(row_status == "INSERT")
        		{
        			// 작성한 마스터를 진행으로 변경
        			NEW_I_FLOW_ID = ErrorMsg
        			this.dsPostMst.setColumn(this.dsPostMst.rowposition, "I_FLOW_ID",  nexacro.trim(NEW_I_FLOW_ID));
        			this.dsPostMst.setColumn(this.dsPostMst.rowposition, "GUBUN_NAME",  "결재진행");
        			this.dsPostMst.setColumn(this.dsPostMst.rowposition, "DELETE_GUBUN",  "1");
        			this.dsPostMst.setColumn(this.dsPostMst.rowposition, "STATUS", "9");
        			// I_FLOW_ORDER 저장
        			this.I_FLOW_ORDER_SAVE( NEW_I_FLOW_ID );
        			this.fnIsEnable(false);
        			alert("발송 되었습니다.");
        		}
        	}
        }
        // 우편번호 callback
        this.fnBtnSearchPostNumberCallback = function(strID, ret)
        {
        	var chk = ret.split(",")
        	if(chk[0] != "undefined")
        	{
        		var strArgZipcd = ret.substr(0,5);
        		var strArgAddr = ret.substr(6, ret.length);
        		if(strID == 'send')
        		{
        			this.dsPostDst.setColumn(this.dsPostDst.rowposition, "ADDR", strArgAddr);
        			this.dsPostDst.setColumn(this.dsPostDst.rowposition, "POST_NUMBER", strArgZipcd);
        			this.edt_addr.setFocus();
        		}
        		else if(strID == 'from')
        		{
        			this.dsPostDst.setColumn(this.dsPostDst.rowposition, "FROM_ADDR", strArgAddr);
        			this.edt_from_addr.setFocus();
        		}
        	}
        }
        // 삭제버튼 callback
        this.fnBtnDelCallback = function(strID, ret)
        {
        	var objApp = nexacro.getApplication();
        	if ( ret == "mst")
        	{
        		if(this.dsPostMst.rowcount <= 0 )
        		{
        			alert("삭제가능한 결재문서가 없습니다.");
        		}else if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0' && this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != '9' ){
        			alert("작성상태 이거나 미결상태만 삭제할 수 있습니다.");
        			return;
        		}

        		if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "PRINT_GUBUN") != '0' )
        		{
        			alert("이미 라벨이 출력된 상태는 삭제 할 수 없습니다.");
        			return;
        		}
        		if(objApp.confirm("작성일자 : "+this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_DATE") + " 문서번호 " +
        		this.dsPostMst.getColumn(this.dsPostMst.rowposition,"POST_MST_NO") + "을(를) 삭제하시겠습니까?\r\n" +
        		"삭제된 문서는 복구 할 수 없습니다."))
        			this.fnMstDeleteTran();
        	}
        	else if ( ret == "dtl")
        	{
        		if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "DELETE_GUBUN") != '0' && this.dsPostMst.getColumn(this.dsPostMst.rowposition, "STATUS") != '9' )
        		{
        			alert("작성상태 이거나 미결상태만 삭제할 수 있습니다.");
        			return;
        		}
        		if ( this.dsPostMst.getColumn(this.dsPostMst.rowposition, "PRINT_GUBUN") != '0' )
        		{
        			alert("이미 라벨이 출력된 상태는 삭제 할 수 없습니다.");
        			return;
        		}
        		if ( this.dsPostDst.rowcount <= 0 )
        		{
        			alert("삭제 가능한 발송 리스트가 없습니다.");
        			return;
        		}
        		else
        		{
        			if(objApp.confirm("우편번호 : "+this.dsPostDst.getColumn(this.dsPostDst.rowposition,"POST_NUMBER") + " 수취인 : " +
        				   this.dsPostDst.getColumn(this.dsPostDst.rowposition,"PAYEE_NAME") + "을(를) 삭제하시겠습니까?\r\n"+
        				   "삭제된 발송리스트는 복구 할 수 없습니다."))
        				this.fnDstDeleteTran();
        		}
        	}
        }
        // 엑셀 업로드 callback
        this.Import_onsuccess = function(obj,e)
        {
        	if(e.id == "onsuccess")
        	{
        		this.fnExcelColChange();
        		for(var i=this.dsPostDst_excel.rowcount;i>=1; i--) // 비어있는 행들 삭제
        		{
        			if(this.dsPostDst_excel.getColumn(i, "POST_NUMBER") == null &&
        			   this.dsPostDst_excel.getColumn(i, "PAYEE_NAME") == null &&
        			   this.dsPostDst_excel.getColumn(i, "ADDR") == null &&
        			   this.dsPostDst_excel.getColumn(i, "PHONE_NUMBER") == null &&
        			   this.dsPostDst_excel.getColumn(i, "GOODS_CODE") == null &&
        			   this.dsPostDst_excel.getColumn(i, "SEND_NAME") == null &&
        			   this.dsPostDst_excel.getColumn(i, "FROM_PHONE_NUMBER") == null &&
        			   this.dsPostDst_excel.getColumn(i, "FROM_ADDR") == null &&
        			   this.dsPostDst_excel.getColumn(i, "LOCATION") == null)
        			{
        				this.dsPostDst_excel.deleteRow(i);
        			}
        		}
        		this.dsPostDst_excel.deleteRow(0);
        		for(var j=0; j < this.dsPostDst_excel.rowcount; j++)
        		{
        			if ( this.dsPostDst_excel.getColumn(i,"BELONGING_DEPT_CODE") == null)
        				this.dsPostDst_excel.setColumn(i, "BELONGING_DEPT_CODE", gds_userinfo.getColumn(0, "BUSECD"));
        			else if ( ((this.dsPostDst_excel.getColumn(i,"BELONGING_DEPT_CODE").toString()).length) != 5 )
        				this.dsPostDst_excel.setColumn(i, "BELONGING_DEPT_CODE", gds_userinfo.getColumn(0, "BUSECD"));

        			this.dsPostDst_excel.setColumn(j, "BELONGING_DEPT_CODE", "GE000");
        		}
        		if(this.fnValidChkDsExcel() == true)
        		{
        			for(var i=0; i < this.dsPostDst_excel.rowcount; i++)
        			{
        				this.fnSplitBookList(i, this.dsPostDst_excel.getColumn(i, "BOOK_LIST") );
        				this.fnSplitBookAttList(i, this.dsPostDst_excel.getColumn(i, "BOOK_LIST_ATT") );3

        				this.fnDstInsertTranExcel(i);
        			}
        		}
        		this.grd_mst_oncellclick();
        	}
        }

        this.I_Flow_Order_Load = function(gubun, f_num, sabun)
        {
        	var str_arg  = "gubun =" + nexacro.wrapQuote(gubun);
        		str_arg += " f_num =" + nexacro.wrapQuote(f_num);
        		str_arg += " sabun =" + nexacro.wrapQuote(sabun);

        	var str_ds = 	"DS_GW_K=DS_GW_K";
        		str_ds += 	" DS_GW_H=DS_GW_H";
        		str_ds += 	" DS_GW_C=DS_GW_C";
        		str_ds += 	" DS_GW_D=DS_GW_D";

        	var strUrl = "JSP/gw/SQL_GW180_03S_v2.jsp";

        	this.gfn_TransactionP("select", strUrl, str_ds, str_ds, str_arg, "", false, "P", false, this);
        }

        this.I_FLOW_ORDER_SAVE = function( i_flow_id )
        {
        	// 기안자 본인 결재라인 입력
        	var str_arg, seqCnt;
        	var nRow;
        	str_arg = " gubun = " + nexacro.wrapQuote('01');

        	this.Ds_flow_order.clearData();
        	nRow = this.Ds_flow_order.addRow();
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddHHmm");

        	var strUrl = "JSP/gw/SQL_GW110_ORDER_INSERT.jsp";
        	var inDs = "input=Ds_flow_order:u";

        	// this.Ds_flow_order.setColumn(0,"GUBUN",DS_GW_U.GetColumn(0,"GUBUN"));
        	this.Ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        	this.Ds_flow_order.setColumn(nRow, "KIND", "0"); //본인
        	this.Ds_flow_order.setColumn(nRow, "SEQ", "1"); // 본인 1
        	this.Ds_flow_order.setColumn(nRow, "SABUN", gv_sabun);
        	this.Ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        	this.Ds_flow_order.setColumn(nRow, "F_NEXT", null);
        	this.Ds_flow_order.setColumn(nRow, "STATUS", "1");
        	this.Ds_flow_order.setColumn(nRow, "STORE", "0");
        	this.Ds_flow_order.setColumn(nRow, "F_DATE", f_date);
        	this.Ds_flow_order.setColumn(nRow, "JIKCHAK", gds_userinfo.getColumn(0, "JIKWINM"));
        	this.Ds_flow_order.setColumn(nRow, "BUSOR",gds_userinfo.getColumn(0, "BUSENM"));
        	this.Ds_flow_order.setColumn(nRow, "F_NAME",gds_userinfo.getColumn(0, "NAME"));

        	trace(this.DS_GW_K.saveXML());
        	trace(this.DS_GW_H.saveXML());
        	trace(this.DS_GW_C.saveXML());

        	if ( this.DS_GW_K.rowcount != 0 )
        	{
        		seqCnt = 0;
        		for (var iRow=0; iRow<=this.DS_GW_K.rowcount -1; iRow++)
        		{
        			seqCnt = seqCnt + 1;
        			nRow = this.Ds_flow_order.addRow();

        			this.Ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			this.Ds_flow_order.setColumn(nRow, "KIND", "1"); //결재자
        			this.Ds_flow_order.setColumn(nRow, "SEQ", seqCnt );
        			this.Ds_flow_order.setColumn(nRow, "SABUN", this.DS_GW_K.getColumn(iRow,"SABUN"));
        			this.Ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        			this.Ds_flow_order.setColumn(nRow, "F_NEXT", null);
        			this.Ds_flow_order.setColumn(nRow, "STATUS", null);
        			this.Ds_flow_order.setColumn(nRow, "STORE", "0");
        			this.Ds_flow_order.setColumn(nRow, "F_DATE", null);
        			this.Ds_flow_order.setColumn(nRow, "JIKCHAK", this.DS_GW_K.getColumn(iRow,"JIKWI"));
        			this.Ds_flow_order.setColumn(nRow, "BUSOR", this.DS_GW_K.getColumn(iRow,"BUSE"));
        			this.Ds_flow_order.setColumn(nRow, "F_NAME", this.DS_GW_K.getColumn(iRow,"NAME"));
        		}
        	}

        	if ( this.DS_GW_H.rowcount != 0 )
        	{
        		seqCnt = 0;
        		for (var iRow=0; iRow<=this.DS_GW_H.rowcount -1; iRow++)
        		{
        			seqCnt = seqCnt + 1;
        			nRow = this.Ds_flow_order.addRow();

        			this.Ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			this.Ds_flow_order.setColumn(nRow, "KIND", "2"); //합의자
        			this.Ds_flow_order.setColumn(nRow, "SEQ", seqCnt );
        			this.Ds_flow_order.setColumn(nRow, "SABUN",this.DS_GW_H.getColumn(iRow,"SABUN"));
        			this.Ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        			this.Ds_flow_order.setColumn(nRow, "F_NEXT", null);
        			this.Ds_flow_order.setColumn(nRow, "STATUS", null);
        			this.Ds_flow_order.setColumn(nRow, "STORE", "0");
        			this.Ds_flow_order.setColumn(nRow, "F_DATE", null);
        			this.Ds_flow_order.setColumn(nRow, "JIKCHAK",this.DS_GW_H.getColumn(iRow,"JIKWI"));
        			this.Ds_flow_order.setColumn(nRow, "BUSOR",this.DS_GW_H.getColumn(iRow,"BUSE"));
        			this.Ds_flow_order.setColumn(nRow, "F_NAME",this.DS_GW_H.getColumn(iRow,"NAME"));
        		}
        	}

        	if ( this.DS_GW_C.rowcount != 0 )
        	{
        		seqCnt = 0;
        		for (var iRow=0; iRow<=this.DS_GW_C.rowcount -1; iRow++)
        		{
        			seqCnt = seqCnt + 1;

        			nRow = this.Ds_flow_order.addRow();

        			this.Ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			this.Ds_flow_order.setColumn(nRow, "KIND", "3"); //최종결재자
        			this.Ds_flow_order.setColumn(nRow, "SEQ", seqCnt );
        			this.Ds_flow_order.setColumn(nRow, "SABUN",this.DS_GW_C.getColumn(iRow,"SABUN"));
        			this.Ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        			this.Ds_flow_order.setColumn(nRow, "F_NEXT", null);
        			this.Ds_flow_order.setColumn(nRow, "STATUS", null);
        			this.Ds_flow_order.setColumn(nRow, "STORE", "0");
        			this.Ds_flow_order.setColumn(nRow, "F_DATE", null);
        			this.Ds_flow_order.setColumn(nRow, "JIKCHAK",this.DS_GW_C.getColumn(iRow,"JIKWI"));
        			this.Ds_flow_order.setColumn(nRow, "BUSOR",this.DS_GW_C.getColumn(iRow,"BUSE"));
        			this.Ds_flow_order.setColumn(nRow, "F_NAME",this.DS_GW_C.getColumn(iRow,"NAME"));
        		}
        	}

        	if ( this.DS_GW_D.rowcount != 0 )
        	{
        		seqCnt = 0;

        		for (var iRow=0; iRow <= this.DS_GW_D.rowcount -1; iRow++)
        		{
        			seqCnt = seqCnt + 1;

        			nRow = this.Ds_flow_order.addRow();

        			this.Ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			this.Ds_flow_order.setColumn(nRow, "KIND", "4"); //담당자
        			this.Ds_flow_order.setColumn(nRow, "SEQ", seqCnt );
        			this.Ds_flow_order.setColumn(nRow, "SABUN",this.DS_GW_D.getColumn(iRow,"SABUN"));
        			this.Ds_flow_order.setColumn(nRow, "F_COMMENT", "");
        			this.Ds_flow_order.setColumn(nRow, "F_NEXT", "");
        			this.Ds_flow_order.setColumn(nRow, "STATUS", "");
        			this.Ds_flow_order.setColumn(nRow, "STORE", "0");
        			this.Ds_flow_order.setColumn(nRow, "F_DATE", "");
        			this.Ds_flow_order.setColumn(nRow, "JIKCHAK",this.DS_GW_D.getColumn(iRow,"JIKWI"));
        			this.Ds_flow_order.setColumn(nRow, "BUSOR",this.DS_GW_D.getColumn(iRow,"BUSE"));
        			this.Ds_flow_order.setColumn(nRow, "F_NAME",this.DS_GW_D.getColumn(iRow,"NAME"));
        		}
        	}
        	this.gfn_TransactionP("insert", strUrl, inDs, "", str_arg, "SaveOk", false, "P", false, this);
        }

        this.SaveOk = function(trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode == "0")
        		alert("성공적으로 처리 되었습니다.");
        	else
        		alert(ErrorMsg);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW800_onload,this);
            this.addEventHandler("onsize",this.GW800_onsize,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.btn_appr_chk.addEventHandler("onclick",this.btn_appr_chk_onclick,this);
            this.btn_help.addEventHandler("onclick",this.btn_help_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_send.addEventHandler("onclick",this.btn_send_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_dtlnew.addEventHandler("onclick",this.btn_dtlnew_onclick,this);
            this.btn_tempsave.addEventHandler("onclick",this.btn_tempsave_onclick,this);
            this.btn_searchpostnumber.addEventHandler("onclick",this.btn_searchpostnumber_onclick,this);
            this.edt_postnumber.addEventHandler("oninput",this.edt_number_oninput,this);
            this.edt_phonenumber.addEventHandler("oninput",this.edt_number_oninput,this);
            this.edt_sendname.addEventHandler("onchanged",this.edt_sendname_onchanged,this);
            this.btn_pay.addEventHandler("onclick",this.btn_pay_onclick,this);
            this.btn_divide.addEventHandler("onclick",this.btn_divide_onclick,this);
            this.cbo_goods.addEventHandler("onitemchanged",this.cbo_goods_onitemchanged,this);
            this.cbo_loc.addEventHandler("onitemchanged",this.cbo_loc_onitemchanged,this);
            this.grd_mst.addEventHandler("oncellclick",this.grd_mst_oncellclick,this);
            this.grd_dst.addEventHandler("oncellclick",this.grd_dst_oncellclick,this);
            this.btn_exlup.addEventHandler("onclick",this.btn_exlup_onclick,this);
            this.btn_downexcel.addEventHandler("onclick",this.btn_downexcel_onclick,this);
            this.btn_searchfrompostnumber.addEventHandler("onclick",this.btn_searchfrompostnumber_onclick,this);
            this.edt_from_phonenumber.addEventHandler("oninput",this.edt_number_oninput,this);
            this.edt_sendteam.addEventHandler("onchanged",this.edt_sendteam_onchanged,this);
        };
        this.loadIncludeScript("GW800.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
