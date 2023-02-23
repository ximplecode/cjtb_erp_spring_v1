(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1021F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,1020);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmbselect", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">판매용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">교사용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">타계정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">총판별도서집계(물류</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Subbook2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code1", this);
            obj._setContents("<ColumnInfo><Column id=\"S_NUM\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKCODE\" type=\"STRING\" size=\"10\"/><Column id=\"YY\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"100\"/><Column id=\"GUBN\" type=\"STRING\" size=\"1\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SUBBOOK_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK1\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK2\" type=\"STRING\" size=\"256\"/><Column id=\"YOUHYUNG\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01","108","46","495","104",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","22","0","328","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("선택도서 총판별 도서집계");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","46","94","424",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("도서코드 조회");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","320","90","69","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("도서코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","320","120","69","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도서명");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_subbookcode","375","85","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_year","461","85","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bookname","375","116","147","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","320","60","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new TextArea("E_gubn","375","54","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("1");
            obj.set_scrolltype("none");
            obj.set_readonly("false");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select","409","54","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cmbselect");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("판매용");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search1","525","116","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","109","150","494","146",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_Subbook2");
            obj.set_cellmovingtype("col,band");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"80\"/><Column size=\"53\"/><Column size=\"318\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"도서코드\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE_KEY\"/><Cell col=\"2\" text=\"bind:BOOK_YEAR\"/><Cell col=\"3\" text=\"bind:BOOK_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","109","330","494","140",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_code1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"35\"/><Column size=\"81\"/><Column size=\"55\"/><Column size=\"272\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"도서코드\"/><Cell col=\"3\" text=\"년판\"/><Cell col=\"4\" text=\"도서명\"/><Cell col=\"5\" text=\"seq\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:S_NUM\"/><Cell col=\"2\" text=\"bind:BOOKCODE\"/><Cell col=\"3\" text=\"bind:YY\"/><Cell col=\"4\" text=\"bind:BOOKNAME\"/><Cell col=\"5\" text=\"bind:SUBBOOK_SEQ\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","694","84","496","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","535","298","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","602","122","94","310",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("업체 검색");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","602","430","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","694","46","496","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","706","51","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","845","51","21","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_edate","882","51","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","706","89","41","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","748","89","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scust","797","95","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","845","89","14","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","882","89","41","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","924","89","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ecust","973","95","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","602","46","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","602","84","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","695","190","495","241",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("ds_cust");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"338\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"업체명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE_KEY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_02","694","430","496","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00","694","122","496","68",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edt_custgb","706","127","41","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_value("21");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edt_custcd","748","127","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","802","130","39","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("업체명");
            this.addChild(obj.name, obj);

            obj = new Edit("Edt_custname","842","127","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_custend","842","161","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("거래중지업체 포함");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search2","976","127","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","700","435","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_rpt");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("일자별 출고현황");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","910","437","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","1007","437","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","17","500","1173","520",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_binddataset("ds_1");
            obj.set_cellmovingtype("col,band");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"49\"/><Column size=\"191\"/><Column size=\"80\"/><Column size=\"39\"/><Column size=\"33\"/><Column size=\"53\"/><Column size=\"240\"/><Column size=\"57\"/><Column size=\"80\"/><Column size=\"59\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"업체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"거래처명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"전표일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" colspan=\"2\" text=\"전표번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"유형\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"묶음\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell suppress=\"1\" textAlign=\"center\" text=\"bind:CUST_GB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:CUST_CD\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:CUST_NM\" suppress=\"2\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" expr=\"dataset.getRowLevel(currow)==0? CUST_NM : dataset.getRowLevel(currow)==1? &quot;거래처별 소계&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:BYMD\" suppress=\"2\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:JPNO\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:SEQNO\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:BYY\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:BOOK_NAME\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:YOUHYUNG\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"9\" expr=\"dataset.getRowLevel(currow)==0? MOOK2 == 0? MOOK+&quot;*&quot;+MOOK1 : MOOK+&quot;*&quot;+MOOK1+&quot;+&quot;+MOOK2 : &quot;&quot; \" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:QTY\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,###,###,###,##0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell text=\"총계\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" expr=\"expr:dataset.getRowCount()\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;QTY&apos;);\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","1124","6","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","1127","472","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,1020,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD1021F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD1021F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("SD1021F.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("SD1021F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var Find5_sw  = "N";
        var Fv_HeadChk1 = 0;                         //체크박스1.
        var Fv_HeadChk2 = 0;                         //체크박스2.
        var Fv_HeadChk3 = 0;                         //체크박스3.
        var Fv_HeadChk4 = 0;                         //체크박스4.

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.cmb_select_onitemchanged = function(obj,e)
        {
        	if(this.cmb_select.index == 0 )
        		this.E_gubn.set_value(0);
        	else if(this.cmb_select.index == 1 )
        		this.E_gubn.set_value(1);
        	else if(this.cmb_select.index == 2 )
        		this.E_gubn.set_value(2);
        	else if(this.cmb_select.index == 3 )
        		this.E_gubn.set_value(3);
        };

        this.E_gubn_canchange = function(obj,e)
        {
        	if(this.E_gubn.value == "0")
        		this.cmb_select.set_index(0);
        	else if(this.E_gubn.value == "1")
        		this.cmb_select.set_index(1);
        	else if(this.E_gubn.value == "2")
        		this.cmb_select.set_index(2);
        	else if(this.E_gubn.value == "3")
        		this.cmb_select.set_index(3);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.SD1021F_onload = function(obj,e)
        {
        	//디폴트 오늘날자.
        	var today = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(today, "yyyyMMdd");
        	//nexacro.getApplication().Gv_BookYear = this.lfn_sd_getBookYear();

        	this.ed_sdate.set_value(strtoDay);
        	this.ed_edate.set_value(strtoDay);

        	this.ed_year.set_value(this.lfn_sd_getBookYear("year"));
        	this.ed_sgb.set_value("13");
        	this.ed_scode.set_value("0000");
        	this.ed_egb.set_value("37");
        	this.ed_ecode.set_value("9999");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.search_bookcode();
        };

        this.search_bookcode = function()
        {
        	var strArg = "";
        	var inds 	= "ds_Subbook2=ds_Subbook2";
        	var outds 	= "ds_Subbook2=ds_Subbook2";
        	var subbookcode = this.ed_subbookcode.value;
        	var bookname = this.ed_bookname.value;
        	var chk     = "1";
        	var pyear    = this.ed_year.value;

        	trace("subbook  : " +subbookcode);
        	trace("pyear    : " + pyear);

        	if (pyear == "" || pyear == undefined ) pyear = "";
        	if (subbookcode == "" || subbookcode == undefined ) subbookcode = "";

        	strArg = "values1="+nexacro.wrapQuote(subbookcode)+
        			 "values2="+nexacro.wrapQuote(bookname)+
        			 "values3="+nexacro.wrapQuote(chk)+ //  chk
        			 "values4="+nexacro.wrapQuote(pyear)+
        			 "values5="+nexacro.wrapQuote(this.E_gubn.value);

        	trace(strArg);

        	this.gfn_TransactionP("subbook_select2","JSP/sd/select_subbookcode.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        };

        this.NullIsChk = function(str)
        {
        	var str_temp = str;

        	if (str =="" || str =="_____" || str =="__________") {
        		str_temp = "NULL";
        	}

        	return str_temp;
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	var bookcode;
        	var bookname;
        	var bookyear;

        	// 셀이 0이고 체크박스를 클릭했는지 확인 시
        	if (e.cell==0 && e.clickitem =="control"){
        		bookcode = this.ds_Subbook2.getColumn(e.row,"CODE_KEY");
        		bookyear = this.ds_Subbook2.getColumn(e.row,"BOOK_YEAR");
        		bookname = this.ds_Subbook2.getColumn(e.row,"BOOK_NAME");

        		doubleis = this.double_string_grid(bookcode,bookyear);
        		if (this.ds_Subbook2.getColumn(e.row,"chk")=="1") doubleis = "False";
        		if (doubleis =="True")
        		{
        			if( this.ds_Subbook2.getColumn(e.row, "CHK") == "1")
        			{
        				this.ds_code1.addRow();
        				this.ds_code1.setColumn(this.ds_code1.rowposition,"BOOKCODE", bookcode );
        				this.ds_code1.setColumn(this.ds_code1.rowposition,"YY", bookyear );
        				this.ds_code1.setColumn(this.ds_code1.rowposition,"BOOKNAME", bookname );
        				this.ds_code1.setColumn(this.ds_code1.rowposition,"GUBN", "0" );
        				this.ds_code1.setColumn(this.ds_code1.rowposition,"SUBBOOK_SEQ", e.row);
        			}
        		}
        	}

        };

        this.double_string_grid = function(bookcode,year)
        {
        	trace(bookcode + " " + year );
        	for (var loop=0; loop<this.ds_code1.rowcount; loop++){
        		if ((this.ds_code1.getColumn(loop,"BOOKCODE")==bookcode) && (this.ds_code1.getColumn(loop,"YY")==year) ){
        			if( this.ds_Subbook2.getColumn(this.ds_Subbook2.rowposition, "CHK") == "0")
        				this.ds_code1.deleteRow(loop);
        			return "False";
        		}
        	}
        	return "True";
        };


        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        		this.alert(ErrorMsg);
        	else if ( svcId == "subbook_select2" )
        		alert(ErrorMsg);
        	else if ( svcId == "bookchul_insert" )
        		alert(ErrorMsg);
        };

        this.Grid00_00_onheadclick = function(obj,e)
        {
        	if(e.cell == 0 && e.clickitem =="control")
        	{
        		if(Fv_HeadChk1 == 0)
        			Fv_HeadChk1 = 1;
        		else
        			Fv_HeadChk1 = 0;

        		this.Grid00_00.setCellProperty("head", 0, "text", Fv_HeadChk1);
        		for(var i = 0; i < this.ds_code1.rowcount; i++)
        			this.ds_code1.setColumn(i, "CHK", Fv_HeadChk1);
        	}
        };


        this.btn_del_onclick = function(obj,e)
        {
        	var count = 0;

        	count = this.ds_code1.rowcount;
        	for( var loop = count-1; loop>-1; loop--)
        	{
        		if(this.ds_code1.getColumn(loop,"CHK") == "1")
        		{
        			trace("loop : " + loop );
        			this.ds_Subbook2.setColumn(nexacro.toNumber(this.ds_code1.getColumn(loop,"SUBBOOK_SEQ")), "CHK", "0");
        			this.ds_code1.deleteRow(loop);
        		}
        	}
        };


        this.btn_scust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_scode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };

        this.btn_ecust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_ecode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };

        this.popupCallBack = function(sFormId, sArg)
        {
        	if(!this.lfn_sd_fnisNull(sArg)) // 리턴값이 널이 아니면 수행
        	{
        	    if(sFormId=="popupCustCode_scode") // 거래처 시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sgb.set_value(arry[0]);
        			this.ed_scode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupCustCode_ecode") // 거래처 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_egb.set_value(arry[0]);
        			this.ed_ecode.set_value(arry[1]);
        		}
        	}
        };


        this.btn_search2_onclick = function(obj,e)
        {
        	var strArg;
        	var inds 	= "ds_cust=ds_cust";
        	var outds 	= "ds_cust=ds_cust";
        	var chkstop = "";

        	if (this.chk_custend.value == true) chkstop = "";
        	else chkstop = "null";

        	if( this.Edt_custcd.value == undefined || this.Edt_custcd.value.trim() == "" )
        		this.Edt_custcd.set_value("");

        	strArg = " values1="+nexacro.wrapQuote(this.Edt_custgb.value)+
        	         " values2="+nexacro.wrapQuote(this.Edt_custcd.value)+
        	         " values3="+nexacro.wrapQuote(this.Edt_custname.value)+
        	         " values4="+nexacro.wrapQuote(chkstop);

        	this.gfn_TransactionP("select_custcd","JSP/sd/select_custcode_name.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	var s_cust, e_cust;
        	var s_sql1, s_sql2, s_sql3;
            var Line_sw, rdopt;
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";
            Find5_sw  = "N";
        	var bookcode  = this.Gridcheck("ds_code1");

        	/*
        	var tbookcode = Gridcheck("tdsSubbook");
            var ybookcode = Gridcheck("ydsSubbook");
        	var sbookcode = Gridcheck("ssSubbook");
        	*/
        	var subcust   = this.Gridcheck("ds_cust");

        	if ( Find2_sw != "Y" ){
        		alert("도서코드 조회 후 선택해주세요.");
        		return;
        	}
        	else if ( Find1_sw != "Y" ){
        		alert("업체 검색 후 선택해주세요.");
        		return;
        	}

        	var rdfile = this.selectfile(this.print_select.value);
            s_cust     =  this.ed_sgb.value + this.ed_scode.value;
            e_cust     =  this.ed_egb.value + this.ed_ecode.value;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";

            if (this.print_select.value == 0)
             {
              s_sql1     = s_sql1 + "    and  a.bymd >= '" + this.ed_sdate.value +"'";
              s_sql1     = s_sql1 + "    and  a.bymd <= '" + this.ed_edate.value +"'";

              if ( Find2_sw = "Y" )
               {
                 s_sql1    = s_sql1 + "   and ( b.BOOK_CD || b.byy )  in ( " + bookcode +" ) ";
               }
            //  s_sql1     = s_sql1 + "    and  aa.user_id  =  '" + gds_userinfo.GetColumn(0,"login_id") +"'";

              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
              if ( Find1_sw = "Y" )
               {
                 s_sql1    = s_sql1 + "   and ( A.cust_gb || A.CUST_CD )  in ( " + subcust +" ) ";
               }

         	var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+this.ed_sdate.value+"]"+ // 1
        					 "["+this.ed_edate.value+"]"+
        					 "["+s_cust+"]"+
        					 "["+e_cust+"]"+
        					 "["+s_sql1+"]";
           trace(rdopt);
           }

           /* 미리 보기 OR 출력 버튼이벤트 시작 */
        	if(obj.id == "btn_printview" ) // 미리보기 일때
        	{
        		switch(this.print_select.value)
        		{
        			case '0' : // 총판별도서집계(물류
        					var strArg = "ed_sdate="+nexacro.wrapQuote(this.ed_sdate.value)+
        								 "ed_edate="+nexacro.wrapQuote(this.ed_edate.value)+
        								 "s_cust="+nexacro.wrapQuote(s_cust)+
        								 "e_cust="+nexacro.wrapQuote(e_cust)+
        								 "s_sql1="+nexacro.wrapQuote(s_sql1);

        					var outds = "ds_1=ds_1";
        					var inds = "ds_1=ds_1";
        					trace(strArg);

        					this.gfn_TransactionP("ds1_select","JSP/sd/SD1021F_DS1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					break;
        		}
        	}
        	else if ( obj.id  == "btn_print" ) // 출력일때
        	{
        		this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        		//nexacro.open("print_modeless", "sd::SDRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, 640, 480, this);
        	}

        };


        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";
        	var loop = 0;

        	if(strdsname=="ds_cust")
        	{
        		for (loop=0; loop< this.ds_cust.rowcount; loop++)
        		{
        			if ( this.ds_cust.getColumn(loop,"CHK")=="1" )
        			{
        			    Find1_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_cust.getColumn(loop,"CODE_KEY").substr(0,6)+ "',";

        			}
        		}
        	}

        	if ( strdsname=="ds_code1" )
        	{
        		//trace("in dsSubbook -> ck_select.value = false ");
        		for (loop=0; loop<this.ds_code1.rowcount; loop++)
        		{
        			if (this.ds_code1.getColumn(loop,"CHK")=="1")
        			{
        			    Find2_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_code1.getColumn(loop,"BOOKCODE").substr(0,10)+ this.ds_code1.getColumn(loop,"YY").substr(0,4) +"',";
        			}
        		}
        	}

        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length-1);
        };



        this.selectfile = function(num)
        {
        	if (num == 0) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1029_5br.mrd"; // 거래처별 출고현황
        };

        this.SD1021F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.SD1021F_ontimer = function(obj,e)
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

        this.btn_excel_onclick = function(obj,e)
        {
        	var filename;
        	filename = "총판별도서집계_물류";
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A1");

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD1021F_onload,this);
            this.addEventHandler("onsize",this.SD1021F_onsize,this);
            this.addEventHandler("ontimer",this.SD1021F_ontimer,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_bookname.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.E_gubn.addEventHandler("canchange",this.E_gubn_canchange,this);
            this.cmb_select.addEventHandler("onitemchanged",this.cmb_select_onitemchanged,this);
            this.btn_search1.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("onheadclick",this.Grid00_00_onheadclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Static00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_scust.addEventHandler("onclick",this.btn_scust_onclick,this);
            this.btn_ecust.addEventHandler("onclick",this.btn_ecust_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00_01.addEventHandler("onheadclick",this.Grid00_01_onheadclick,this);
            this.Edt_custname.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.btn_search2.addEventHandler("onclick",this.btn_search2_onclick,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SD1021F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
