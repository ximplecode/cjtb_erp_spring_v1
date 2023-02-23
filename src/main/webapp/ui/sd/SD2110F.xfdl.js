(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD2110F");
            this.set_titletext("수불일보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmd_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">판매용</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">교사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">타계정</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">교판</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">속셈</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sort", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">수불일보           </Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">수불일보(합산)</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">속성코드별 수불일보</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bjgb", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"cd\" type=\"STRING\" size=\"1\"/><Column id=\"cd_nm\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"cd\">1</Col><Col id=\"cd_nm\">주력</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"cd\">2</Col><Col id=\"cd_nm\">재택</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"cd\">3</Col><Col id=\"cd_nm\">신간</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"cd\">4</Col><Col id=\"cd_nm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubbook", this);
            obj._setContents("<ColumnInfo><Column id=\"code_key\" type=\"STRING\" size=\"10\"/><Column id=\"book_year\" type=\"STRING\" size=\"4\"/><Column id=\"book_name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mdcode", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"mdcode\" type=\"STRING\" size=\"2\"/><Column id=\"mnm\" type=\"STRING\" size=\"25\"/><Column id=\"dnm\" type=\"STRING\" size=\"25\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"mnm\">미등록</Col><Col id=\"dnm\"/><Col id=\"mdcode\">00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbr", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_preview1", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"book_jgb\" type=\"STRING\" size=\"256\"/><Column id=\"panh_nm\" type=\"STRING\" size=\"256\"/><Column id=\"J_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"ISU1\" type=\"INT\" size=\"256\"/><Column id=\"ISU2\" type=\"INT\" size=\"256\"/><Column id=\"ISU5\" type=\"INT\" size=\"256\"/><Column id=\"ISU3\" type=\"INT\" size=\"256\"/><Column id=\"ISU4\" type=\"INT\" size=\"256\"/><Column id=\"IHAB\" type=\"INT\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"CSU3\" type=\"INT\" size=\"256\"/><Column id=\"CSU5\" type=\"INT\" size=\"256\"/><Column id=\"CSU6\" type=\"INT\" size=\"256\"/><Column id=\"CSU7\" type=\"INT\" size=\"256\"/><Column id=\"CHAB\" type=\"INT\" size=\"256\"/><Column id=\"PG_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"PB_JEGO\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_preview2", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"book_jgb\" type=\"STRING\" size=\"256\"/><Column id=\"panh_nm\" type=\"STRING\" size=\"256\"/><Column id=\"J_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"ISU1\" type=\"INT\" size=\"256\"/><Column id=\"ISU2\" type=\"INT\" size=\"256\"/><Column id=\"ISU5\" type=\"INT\" size=\"256\"/><Column id=\"ISU3\" type=\"INT\" size=\"256\"/><Column id=\"ISU4\" type=\"INT\" size=\"256\"/><Column id=\"IHAB\" type=\"INT\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"CSU3\" type=\"INT\" size=\"256\"/><Column id=\"CSU5\" type=\"INT\" size=\"256\"/><Column id=\"CSU6\" type=\"INT\" size=\"256\"/><Column id=\"CSU7\" type=\"INT\" size=\"256\"/><Column id=\"CHAB\" type=\"INT\" size=\"256\"/><Column id=\"PG_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"PB_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"JQTY\" type=\"INT\" size=\"256\"/><Column id=\"CGSU\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_preview4", this);
            obj.set_keystring("MDCODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDCODE\" type=\"STRING\" size=\"256\"/><Column id=\"J_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"ISU1\" type=\"INT\" size=\"256\"/><Column id=\"ISU2\" type=\"INT\" size=\"256\"/><Column id=\"ISU5\" type=\"INT\" size=\"256\"/><Column id=\"ISU3\" type=\"INT\" size=\"256\"/><Column id=\"ISU4\" type=\"INT\" size=\"256\"/><Column id=\"IHAB\" type=\"INT\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"CSU2\" type=\"INT\" size=\"256\"/><Column id=\"CSU3\" type=\"INT\" size=\"256\"/><Column id=\"CSU4\" type=\"INT\" size=\"256\"/><Column id=\"CSU5\" type=\"INT\" size=\"256\"/><Column id=\"CSU6\" type=\"INT\" size=\"256\"/><Column id=\"CSU7\" type=\"INT\" size=\"256\"/><Column id=\"CHAB\" type=\"INT\" size=\"256\"/><Column id=\"JEGO\" type=\"INT\" size=\"256\"/><Column id=\"CAMT\" type=\"INT\" size=\"256\"/><Column id=\"BAMT\" type=\"INT\" size=\"256\"/><Column id=\"SAMT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_preview3", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"J_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"ISU1\" type=\"INT\" size=\"256\"/><Column id=\"ISU2\" type=\"INT\" size=\"256\"/><Column id=\"ISU5\" type=\"INT\" size=\"256\"/><Column id=\"ISU3\" type=\"INT\" size=\"256\"/><Column id=\"ISU4\" type=\"INT\" size=\"256\"/><Column id=\"IHAB\" type=\"INT\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"CSU3\" type=\"INT\" size=\"256\"/><Column id=\"CSU5\" type=\"INT\" size=\"256\"/><Column id=\"CSU6\" type=\"INT\" size=\"256\"/><Column id=\"CSU7\" type=\"INT\" size=\"256\"/><Column id=\"CHAB\" type=\"INT\" size=\"256\"/><Column id=\"PG_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"PB_JEGO\" type=\"INT\" size=\"256\"/><Column id=\"JEGO\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00_01_00_00","63.07%","90",null,"21","13.71%",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","63.00%","109",null,"246","140%",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","39.29%","109",null,"246","36.88%",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00_00","86.29%","109",null,"246","0.57%",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","0.00%","109",null,"246","60.65%",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","7.93%","12",null,"40","69.71%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","39.36%","12",null,"40","45.21%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("E_gubn","8.36%","21","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maxlength("1");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_inputmode("normal");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select","10.71%","21","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cmd_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("전체");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"12","36.50%","40","0.57%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","7.93%","51",null,"40","69.71%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sbook","8.36%","59",null,"25","85.07%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("0000000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sbookcode","15.36%","63","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","17.36%","57","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ebook","19.57%","60",null,"25","73.57%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("9999999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ebookcode","26.86%","63","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","39.93%","20",null,"25","51.07%",null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_esgrp","72.50%","17",null,"30","21.29%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("9999999999");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ssgrp","64.00%","19",null,"25","30.00%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("0000000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","70.93%","17","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","39.36%","51",null,"40","45.21%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00",null,"51","15.50%","40","21.50%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_syy","39.86%","60","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","45.57%","59","20","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_eyy","47.07%","60","61","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak","64.21%","57",null,"25","28.86%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("학년용");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak1","69.29%","57",null,"25","24.86%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("1학기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak2","74.43%","57",null,"25","19.57%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("2학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","86.29%","51",null,"40","0.57%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_sun1","87.29%","60",null,"20","9.07%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("재고");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_sun2","91.79%","60",null,"20","0.29%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("거래내역");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_01","7.93%","353",null,"40","0.57%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_chk","11.50%","361",null,"25","771",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_sort");
            obj.set_direction("vertical");
            obj.set_datacolumn("data");
            obj.set_columncount("3");
            obj.set_codecolumn("code");
            obj.set_text("수불일보");
            obj.set_value("수불일보");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10.57%","117",null,"20","83.21%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("코드 :");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_subbookcode","17.00%","115",null,"25","76.00%",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_select","24.50%","119",null,"20","71.50%",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("도서");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_use","28.57%","120",null,"20","67.86%",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("사용x");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","10.50%","148",null,"20","83.14%",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("도서명 :");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_year","28.00%","144",null,"25","67.00%",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookatt_search","33.50%","114",null,"57","61.43%",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_1","0.50%","173",null,"175","61.36%",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_binddataset("dsSubbook");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"94\"/><Column size=\"50\"/><Column size=\"246\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"속성코드\"/><Cell col=\"2\" text=\"출판\"/><Cell col=\"3\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:code_key\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:book_year\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:book_name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_4","86.93%","119",null,"229","1.00%",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_binddataset("ds_bjgb");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"43\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:cd\"/><Cell col=\"2\" text=\"bind:cd_nm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_3","63.36%","118",null,"230","14.07%",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_binddataset("ds_bgbr");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"53\"/><Column size=\"143\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_2","39.86%","136",null,"212","37.43%",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_binddataset("ds_mdcode");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"49\"/><Column size=\"122\"/><Column size=\"112\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"대분류\"/><Cell col=\"3\" text=\"소분류\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:mdcode\"/><Cell col=\"2\" text=\"bind:mnm\"/><Cell col=\"3\" text=\"bind:dnm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0.00%","90",null,"21","60.60%",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("도서속성");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","47.79%","112",null,"20","47.00%",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("자동선택 :");
            obj.set_textAlign("right");
            obj.set_cursor("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","86.29%","90",null,"21","0.57%",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("도서유형");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Div("Div_PreView","0.00%","396","99.79%","434",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_formscrolltype("horizontal");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","84.00%","360",null,"25","8.50%",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","92.43%","360",null,"25","0.93%",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.00%","12",null,"40","92%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("선 택    ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0.00%","51",null,"40","92%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("도서코드    ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","78.36%","51",null,"40","13.71%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("선택사항    ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","30.29%","12",null,"40","60.64%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작업일자    ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30.29%","51",null,"40","60.64%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("도서년판    ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","0.00%","353",null,"40","92%",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("출력조건     ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","54.79%","12",null,"40","36.86%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("속성구간    ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","54.79%","51",null,"40","36.86%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학기구분    ");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_Jjego","17.00%","361",null,"25","77.79%",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("적정포함");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bookname","17.00%","144",null,"25","72.50%",null,null,null,null,null,this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","39.36%","90",null,"21","36.87%",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("판매형태");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("R_select","53.50%","114","8.86%","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_radio");
            obj.set_direction("vertical");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("속셈");
            obj.set_value("속셈");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD2110F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD2110F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("SD2110F.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("SD2110F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        //------------------------------------------------------------------------------
        // 폼에서 사용되는 전역 번수.
        //------------------------------------------------------------------------------
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer; //크로닉스주소
        var F_ScreenName    = "";					                          // 화면명
        var	lovflag = true;
        var qryStr ="";														  //쿼리
        var Fv_HeadChk1 = 0;                        						  //체크박스1.
        var Fv_HeadChk2 = 0;                        						  //체크박스2.
        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var Find5_sw  = "N";
        var bgbrnm;

        //페이지로드
        this.SD2110F_onload = function(obj,e)
        {
            //디폴트 오늘날자.
        	var today = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(today, "yyyyMMdd");
        	this.ed_sdate.set_value(strtoDay);						//작업일자
            this.ed_syy.set_value("2011");                          //도서년판-시작
        	this.ed_eyy.set_value(this.lfn_sd_getBookYear("year")); //도서년판-끝
            this.ed_year.set_value(this.lfn_sd_getBookYear("year"));//도서속성검색-년판
        	this.E_gubn.set_value("3");  						    //선택
        	this.cmb_select.set_index(3);							//선택
        	this.C_sun1.set_value(true);							//선택사항-재고
        	this.rd_chk.set_index(0);								//정렬조건
        	this.C_Jjego.set_value(false);							//적정포함
        	this.ck_use.set_value(true);							//속성검색-사용유무

        	//도서구분 데이터 가져오기
        	var strArg = "";
        	var outds = "ds_bgbr=ds_bgbr";
        	var inds = "ds_bgbr=ds_bgbr";
        	this.gfn_TransactionP("bgbr_select","JSP/sd/sel_bgbr.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	//판매형태 데이터 가져오기
        	strArg = "";
        	outds = "ds_mdcode=ds_mdcode";
        	inds = "ds_mdcode=ds_mdcode";
        	this.gfn_TransactionP("mdcode_select","JSP/sd/sel_mdcode.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

            this.E_gubn.setFocus();
        	this.Div_PreView.set_url("sd::SD2110F_PREVIEW1.xfdl");
        };


        //도서구분전체선택클릭
        this.grd_3_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk1 == 0){Fv_HeadChk1 = 1;}else{Fv_HeadChk1 = 0;}
        		this.grd_3.setCellProperty("head", 0, "text", Fv_HeadChk1);
        		for(var i = 0; i < this.ds_bgbr.rowcount; i++)
        		{
        			this.ds_bgbr.setColumn(i, "chk", Fv_HeadChk1);
        		}
        	}
        };

        //구분전체선택클릭
        this.grd_4_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk2 == 0){Fv_HeadChk2 = 1;}else{Fv_HeadChk2 = 0;}
        		this.grd_4.setCellProperty("head", 0, "text", Fv_HeadChk2);
        		for(var i = 0; i < this.ds_bjgb.rowcount; i++)
        		{
        			this.ds_bjgb.setColumn(i, "chk", Fv_HeadChk2);
        		}
        	}
        };

        //선택콤보변경시
        this.cmb_select_onitemchanged = function(obj,e)
        {
        	if( this.cmb_select.value == "0" )     {this.E_gubn.set_value("0");}
        	else if( this.cmb_select.value == "1" ){this.E_gubn.set_value("1");}
        	else if( this.cmb_select.value == "2" ){this.E_gubn.set_value("2");}
        	else if( this.cmb_select.value == "3" ){this.E_gubn.set_value("3");}
        };

        //선택텍스트변경시
        this.E_gubn_canchange = function(obj,e)
        {
        	if( this.E_gubn.value == "0" )     {this.cmb_select.set_index(0)}
        	else if( this.E_gubn.value == "1" ){this.cmb_select.set_index(1);}
        	else if( this.E_gubn.value == "2" ){this.cmb_select.set_index(2);}
        	else if( this.E_gubn.value == "3" ){this.cmb_select.set_index(3);}
        };

        //도서검색시작-클릭
        this.btn_sbookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_sbook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        //도서검색끝-클릭
        this.btn_ebookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_ebook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        //팝업리턴값
        this.popupCallBack = function(sFormId, sArg)
        {
        	if(!this.lfn_sd_fnisNull(sArg)) // 리턴값이 존재한다면
        	{
        		if(sFormId=="popupBookCode_sbook") // 도서시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sbook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_ebook") // 도서 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ebook.set_value(arry[0]);
        		}
        	}
        };

        //도서속성검색
        this.btn_bookatt_search_onclick = function(obj,e)
        {
        	this.search_bookcode();
        };

        //도서속성
        this.search_bookcode = function()
        {
        	var strArg;
        	var inds 	= "dsSubbook=dsSubbook";
        	var outds 	= "dsSubbook=dsSubbook";
        	var subbookcode = this.ed_subbookcode.value;
        	var bookname = this.ed_bookname.value;
        	var chk      = this.ck_select.value;
        	var pyear    = this.ed_year.value;
        	var c_use    = this.ck_use.value;

        	if (pyear == ""){
        		pyear = "NULL";
        	}

        	if (subbookcode == "          "){
        		subbookcode = "NULL";
        	}

        	if (this.ck_select.value == true)
        	{
        		this.grd_1.setCellProperty("head",1,"text","도서코드");
        		this.grd_1.setCellProperty("head",2,"text","년판");
        	}
        	else
        	{
        		this.grd_1.setCellProperty("head",1,"text","속성코드");
        		this.grd_1.setCellProperty("head",2,"text","출판");
        	}

        	strArg = "values1="+nexacro.wrapQuote(subbookcode)
        	                   +"values2="+nexacro.wrapQuote(bookname)
        					   +"values3="+nexacro.wrapQuote(chk)
        					   +"values4="+nexacro.wrapQuote(pyear)
        					   +"values5="+nexacro.wrapQuote(c_use);
        	//trace(strArg);
        	this.gfn_TransactionP("subbook_select","JSP/sd/select_subbookcode.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        };

        //데이터검색리턴값
        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0){this.alert(ErrorMsg);}
        };

        //판매형태-교판,학판선택시
        this.R_select_onitemchanged = function(obj,e)
        {
          //체크박스초기화
          for(var i = 0; i < this.ds_mdcode.rowcount; i++)
          {
             this.ds_mdcode.setColumn(i, "chk", 0);
          }
          //교판
          if (obj.value == "0")
          {
        		for(var i = 0; i < this.ds_mdcode.rowcount; i++)
        		{
        		    if(this.ds_mdcode.getColumn(i,"mdcode").substr(0,1) == "1" || this.ds_mdcode.getColumn(i,"mdcode").substr(0,1) == "2")
        		    {
        			  this.ds_mdcode.setColumn(i, "chk", 1);
        			}
        		}
          //속셈
          }else if(obj.value == "1" ){
        		for(var i = 0; i < this.ds_mdcode.rowcount; i++)
        		{
        		    if(this.ds_mdcode.getColumn(i,"mdcode").substr(0,1) == "3"  || this.ds_mdcode.getColumn(i,"mdcode").substring(0,2) == "50" ||
        		       this.ds_mdcode.getColumn(i,"mdcode").substr(0,2) == "51" || this.ds_mdcode.getColumn(i,"mdcode").substring(0,2) == "52" ||
        			   this.ds_mdcode.getColumn(i,"mdcode").substr(0,2) == "55")
        			{
        			   this.ds_mdcode.setColumn(i, "chk", 1);
        			}
        		}
          }
        };

        //미리보기클릭
        this.btn_printview_onclick = function(obj,e)
        {
        	this.sqlCreate(obj.id);
        };

        //출력버튼클릭
        this.btn_print_onclick = function(obj,e)
        {
        	this.sqlCreate(obj.id);
        };

        //조회-출력 조건별 검색
        this.sqlCreate = function(event_id)
        {
        	var s_jpno, e_jpno, p_yh;
        	var s_sql1, s_sql2, s_sql3, s_sql4,  s_sql5, Hak_g;
            var Line_sw;
        	bgbrnm    = "";
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";
            Find5_sw  = "N";
        	var grid_chk2, gb, r_sel, sel_dsjgb, bookcode, rdfile;
        	//사용자함수
        	grid_chk2 = this.Gridcheck("ds_Bgbr");                     //도서구분
        	gb        = this.optionGb();                               //선택
        	r_sel     = this.Gridcheck("ds_mdcode");                   //판매형태
        	sel_dsjgb = this.Gridcheck("ds_bjgb");                     //도서유형
        	bookcode  = this.Gridcheck("dsSubbook");                   //도서속성
        	rdfile =    this.selectfile(this.rd_chk.index);	           //리포트파일
        	var pSbookcode, pEbookcode;
        	pSbookcode = this.ed_sbook.value + ")" + this.ed_syy.value;//도서코드-시작
        	pEbookcode = this.ed_ebook.value + ")" + this.ed_eyy.value;//도서코드-끝
            s_jpno         = this.ed_sdate.value + "0000";             //작업일자-시작
            e_jpno         = this.ed_sdate.value + "zzzz";             //작업일자-끝
            p_yh           = this.cmb_select.text;                     //도서형태
            s_sql1         = "";
            s_sql2         = "";
            s_sql3         = "";
            s_sql4         = "";
            s_sql5         = "";
        	bgbrnm  = bgbrnm.substr(0,bgbrnm.length-1);

        	if( Find2_sw  == "N" ){
            	bgbrnm  = "전체"; //도서구분
        	}

        	//정렬조건
            if (( this.rd_chk.index == 0 ) || ( this.rd_chk.index == 1 ) || ( this.rd_chk.index == 2 )){

        		//======s_sql1
        		s_sql1 =        " WHERE  a.BOOK_CD >=  '" + this.ed_sbook.value + "'";
                s_sql1 = s_sql1 + " AND  a.BOOK_CD <=  '" + this.ed_ebook.value + "'";
                s_sql1 = s_sql1 + " AND  a.Byy >=  '" + this.ed_syy.value + "'";
                s_sql1 = s_sql1 + " AND  a.Byy <=  '" + this.ed_eyy.value + "'";

        		//도서속성선택시
        		if ( Find4_sw == "Y" ){
        			s_sql1 = s_sql1 + "  AND (a.BOOK_CD || a.BYY) in ( " + bookcode +" ) ";
                }

        		s_sql1 = s_sql1 + " AND  a.yy =  '" + this.ed_sdate.value.substr(0,4) +"'";
        		s_sql1 = s_sql1 + " AND  a.mm =  '" + this.ed_sdate.value.substr(4,2) +"'";
        		s_sql1 = s_sql1 + " AND  a.dd <=  '" + this.ed_sdate.value.substr(6,4) +"'";

        	    //======s_sql2
                s_sql2 = "    where  a.BOOK_CD >=  '" + this.ed_sbook.value +"'";
                s_sql2 = s_sql2 + "    AND  a.BOOK_CD <=  '" + this.ed_ebook.value +"'";
                s_sql2 = s_sql2 + "    AND  a.Byy >=  '" + this.ed_syy.value +"'";
                s_sql2 = s_sql2 + "    AND  a.Byy <=  '" + this.ed_eyy.value +"'";

        		//도서속성선택시
        		if ( Find4_sw == "Y" ){
        			s_sql2 = s_sql2 + "   and (a.BOOK_CD || a.BYY) in ( " + bookcode +" ) ";
                }
        		s_sql2 = s_sql2 + "    AND  a.yy =  '" + this.ed_sdate.value.substr(0,4) +"'";
        		s_sql2 = s_sql2 + "    AND  a.mm =  '" + this.ed_sdate.value.substr(4,2) +"'";
        		s_sql2 = s_sql2 + "    AND  a.dd =  '" + this.ed_sdate.value.substr(6,4) +"'";

        	    //======s_sql3
        		if ( this.E_gubn.text == "0" ){
        			s_sql3 =  s_sql3 + "  and  b.meip_c = '0'  "; //판매용
                }else if ( this.E_gubn.text == "1" ){
        			s_sql3 =  s_sql3 + " and   b.meip_c = '1'  "; //교사용
                }else if ( this.E_gubn.text == "2" ){
        			s_sql3 =  s_sql3 + " and   b.meip_c = '2'  "; //타계정
        		}

        		//도서유형
        		if ( Find5_sw == "Y" ){
        			s_sql3 = s_sql3 + "   and  b.book_jgb  in ( " + sel_dsjgb +" ) ";
        		}

        		//학기구분 조건문
        		Line_sw = "N";
        		if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" )){
        			s_sql3 = s_sql3 + "    and  b.book_hcode in (  ";
        			if ( this.C_hak.value == "1" ){
        				Hak_g   = "학년용";
        				s_sql3  = s_sql3 + " '00' ";
        				Line_sw = "Y";
        			}

        			if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  )){
        				Hak_g   = Hak_g + "/1학기";
        				s_sql3  = s_sql3 + ", '01' ";
        				Line_sw = "Y";
        			}else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  )){
        				Hak_g   = "1학기";
        				s_sql3  = s_sql3 + " '01' ";
        				Line_sw = "Y";
        			}

        			if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  )){
        				Hak_g   = Hak_g + "/2학기";
        				s_sql3  = s_sql3 + ", '02' ";
        				Line_sw = "Y";
        			}else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  )){
        				Hak_g   = "2학기";
        				s_sql3  = s_sql3 + " '02' ";
        				Line_sw = "Y";
        			}
        				s_sql3  = s_sql3 + "    )  ";
        		}else{
        			Hak_g = "전체";
        		}

        		//도서구분선택시
        		if ( Find2_sw == "Y" ){
        			s_sql3 = s_sql3 + "    and  b.bgbr_cd in ( " + grid_chk2 +" ) ";
                }
        		//도서속성입력시
        		if (( this.ed_ssgrp.value  != "000000000" ) || ( this.ed_esgrp.value  != "999999999" )){
        			s_sql3 = s_sql3 + "    AND  b.sgrp_code >=  '" + this.ed_ssgrp.value +"'";
        			s_sql3 = s_sql3 + "    AND  b.sgrp_code <=  '" + this.ed_esgrp.value +"'";
        		}
        		//도서판매형태선택시
        		if ( Find1_sw == "Y" ){
        			s_sql3 = s_sql3 + "   and substr(b.sgrp_code,1,2) in ( " + r_sel +" ) ";
        		}
        		//도서속성선택시
        		if ( Find3_sw == "Y" ){
        			s_sql3 = s_sql3 + "   and b.sgrp_code  in ( " + bookcode +" ) ";
        		}

        		//======s_sql4
        		//선택사항-재고선택시
        		if ( this.C_sun1.value == true ){
        			s_sql4 =          " WHERE JEGO <> 0  ";
        			s_sql4 =  s_sql4 + "   OR ( JEGO = 0  ";
        			s_sql4 =  s_sql4 + "   AND (   ISU1 <> 0   ";
        			s_sql4 =  s_sql4 + "   OR  ISU2 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  ISU3 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  ISU4 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU1 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU3 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU5 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU6 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU7 <> 0 ) ) ";
        		}
        	    //선택사항-거래내역선택시
        		if ( this.C_sun2.value == true ){
        			s_sql4 =          " WHERE (ISU1 <> 0   ";
        			s_sql4 =  s_sql4 + "   OR  ISU2 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  ISU3 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  ISU4 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU1 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU3 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU5 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU6 <> 0  ";
        			s_sql4 =  s_sql4 + "   OR  CSU7 <> 0)  ";
               }

        	   //======s_sql5
        	   //정렬조건-속성코드별별수불일보
               if ( this.rd_chk.index == 2 ){
                 s_sql5 = "    where  a.BOOK_CD >=  '" + this.ed_sbook.value +"'";
                 s_sql5 = s_sql5 + "    AND  a.BOOK_CD <=  '" + this.ed_ebook.value +"'";
                 s_sql5 = s_sql5 + "    AND  a.Byy >=  '" + this.ed_syy.value +"'";
                 s_sql5 = s_sql5 + "    AND  a.Byy <=  '" + this.ed_eyy.value +"'";
                 //도서속성선택시
        		 if ( Find4_sw == "Y" ){
        			s_sql5 = s_sql5 + "   and (a.BOOK_CD || a.BYY) in ( " + bookcode +" ) ";
                 }
                 s_sql5 = s_sql5 + "    AND  A.jpno >=  '" + s_jpno +"'";
                 s_sql5 = s_sql5 + "    AND  A.jpno <=  '" + e_jpno +"'";
               }
             }

            //리포트호출
        	var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+p_yh+"]"+                  //선택 (1
        					 "["+this.ed_sdate.value+"]"+   //작업일자	(2
        					 "["+pSbookcode+"]"+            //도서코드년판-시작 (3
        					 "["+pEbookcode+"]"+            //도서코드년판-끝  (4
        					 "["+bgbrnm+"]"+                //도서구분 (5
        					 "["+Hak_g+"]"+			        //학기구분	(6
        					 "["+s_sql1+"]"+                //(7
        					 "["+s_sql2+"]"+                //(8
        					 "["+s_sql3+"]"+                //(9
        					 "["+s_sql4+"]"+                //(10
        					 "["+s_sql5+"]";                //(11

        	// 조회 OR 출력 버튼이벤트 시작
        	if(event_id == "btn_printview" ) // 미리보기 일때
        	{
        		//this.alert(this.rd_chk.index);
        		switch(this.rd_chk.index)
        		{
        			case 0 : // 수불일보
        				var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        				" s_sql2="+nexacro.wrapQuote(s_sql2)+
        				" s_sql3="+nexacro.wrapQuote(s_sql3)+
        				" s_sql4="+nexacro.wrapQuote(s_sql4);
        				//적정포함 미선택
        				if(this.C_Jjego.value == false){
        					var outds = "ds_preview1=ds_preview1";
        					var inds = "ds_preview1=ds_preview1";
        					this.gfn_TransactionP("ds1_select","JSP/sd/SD2110F_PV1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					this.Div_PreView.set_url("sd::SD2110F_PREVIEW1.xfdl");
        					break;
        				}else{
        					var outds = "ds_preview2=ds_preview2";
        					var inds = "ds_preview2=ds_preview2";
        					this.gfn_TransactionP("ds2_select","JSP/sd/SD2110F_PV2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					this.Div_PreView.set_url("sd::SD2110F_PREVIEW2.xfdl");
        					break;
        				}

        			case 1 : // 수불일보(합산)
        				var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        				" s_sql2="+nexacro.wrapQuote(s_sql2)+
        				" s_sql3="+nexacro.wrapQuote(s_sql3)+
        				" s_sql4="+nexacro.wrapQuote(s_sql4);

        				var outds = "ds_preview3=ds_preview3";
        				var inds  = "ds_preview3=ds_preview3";
        				this.gfn_TransactionP("ds3_select","JSP/sd/SD2110F_PV3_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        				this.Div_PreView.set_url("sd::SD2110F_PREVIEW3.xfdl");
        				break;

        			case 2 : // 속성코드별 수불일보
        				var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        				" s_sql2="+nexacro.wrapQuote(s_sql2)+
        				" s_sql3="+nexacro.wrapQuote(s_sql3)+
        				" s_sql4="+nexacro.wrapQuote(s_sql4)+
        				" s_sql5="+nexacro.wrapQuote(s_sql5);
        				//this.alert(strArg);
        				var outds = "ds_preview4=ds_preview4";
        				var inds  = "ds_preview4=ds_preview4";
        				this.gfn_TransactionP("ds4_select","JSP/sd/SD2110F_PV4_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        				this.Div_PreView.set_url("sd::SD2110F_PREVIEW4.xfdl");
        				break;
        		}
        	}
        	else if ( event_id  == "btn_print" ) // 출력일때
        	{
        		this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        };

        //리포터파일
        this.selectfile = function(num)
        {
        	if ((num == 0) && ( this.C_Jjego.value == false )){
        	  return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD2110r.mrd"; //수불일보-적정포함X
        	}else if ((num == 0) && ( this.C_Jjego.value == true )){
        	  return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD2113r.mrd"; //수불일보-적정포함
        	}else if (num == 1){
        	  return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD2112r.mrd"; //수불일보(합산)
        	}else if (num == 2){
        	  return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD2111r.mrd"; //속성코드별 수불일보
        	}
        };

        // 그리드에 따른 체크된 데이터 값 리턴.
        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";

        	if (strdsname == "dsmdcode")
        	{
        		for (loop=0; loop<this.ds_mdcode.rowcount(); loop++)
        			if (this.ds_mdcode.GetColumn(loop,"chk")=1)
        			{
        			    Find1_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_mdcode.GetColumn(loop,"mdcode")+"',";
        			}
        	}

        	if (strdsname="dsBgbr")
        	{
        		for (loop=0; loop<dt_bgbr.rowcount(); loop++)
        			if (dt_bgbr.GetColumn(loop,"chk")=1)
        			{
        			    Find2_sw  = "Y";
        			    bgbrnm    = bgbrnm + "'"+trim(dt_bgbr.GetColumn(loop,"name"))+"',";
        				strReturn = strReturn +"'"+dt_bgbr.GetColumn(loop,"code")+"',";
        			}
        	}

        	if ((strdsname="dsSubbook") && (ck_select.value=False))
        	{
        		for (loop=0; loop<dsSubbook.rowcount(); loop++)
        			if (dsSubbook.GetColumn(loop,"chk")=1)
        			{
        			    Find3_sw  = "Y";
        				strReturn = strReturn +"'"+this.left(dsSubbook.GetColumn(loop,"code_key"),9)+"',";
        			}
        	}

        	if ((strdsname="dsSubbook") && (ck_select.value=True))
        	{
        		for (loop=0; loop<dsSubbook.rowcount(); loop++)
        			if (dsSubbook.GetColumn(loop,"chk")=1)
        			{
        			    Find4_sw  = "Y";
        				strReturn = strReturn +"'"+this.left(dsSubbook.GetColumn(loop,"code_key"),10)+ this.left(dsSubbook.GetColumn(loop,"book_year"),4)+"',";
        			}
        	}

        	if (strdsname="dsjgb")
        	{
        		for (loop=0; loop<ds_bjgb.rowcount(); loop++)
        			if (ds_bjgb.GetColumn(loop,"chk")=1)
        			{
        			    Find5_sw  = "Y";
        				strReturn = strReturn +"'"+ds_bjgb.GetColumn(loop,"cd")+"',";
        			}
        	}

        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length()-1);
        };

        //선택데이터값 리턴
        this.optionGb = function()
        {
        	//전체
        	if (this.cmb_select.index == 3){
        		return "";
        	}else{
        		return this.cmb_select.value;
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD2110F_onload,this);
            this.Static00_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.E_gubn.addEventHandler("canchange",this.E_gubn_canchange,this);
            this.cmb_select.addEventHandler("onitemchanged",this.cmb_select_onitemchanged,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_sbookcode.addEventHandler("onclick",this.btn_sbookcode_onclick,this);
            this.btn_ebookcode.addEventHandler("onclick",this.btn_ebookcode_onclick,this);
            this.Static00_01_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_01_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.rd_chk.addEventHandler("canitemchange",this.Div00_Radio00_canitemchange,this);
            this.btn_bookatt_search.addEventHandler("onclick",this.btn_bookatt_search_onclick,this);
            this.grd_4.addEventHandler("onheadclick",this.grd_4_onheadclick,this);
            this.grd_3.addEventHandler("onheadclick",this.grd_3_onheadclick,this);
            this.Static00_02_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.R_select.addEventHandler("onitemchanged",this.R_select_onitemchanged,this);
        };
        this.loadIncludeScript("SD2110F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
