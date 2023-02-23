(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED165F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMnscript", this);
            obj._setContents("<ColumnInfo><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_CLASS\" type=\"STRING\" size=\"1\"/><Column id=\"CG_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"PERSON_CG_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyaltyacnt_Mst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_SYEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_EYEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"10\"/><Column id=\"RAMST_BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"RAMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"RAMST_ACNTSDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RAMST_ACNTEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RAMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RAMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"RAMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"RAMST_PERMITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RAMST_PERMITEUSER\" type=\"STRING\" size=\"6\"/><Column id=\"RAMST_PERMITE\" type=\"STRING\" size=\"1\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"UI_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKTBKIND_NAME\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookQty", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"PRICE\" type=\"INT\" size=\"6\"/><Column id=\"DELIVERY_QTY\" type=\"INT\" size=\"7\"/><Column id=\"RETURNED_QTY\" type=\"INT\" size=\"7\"/><Column id=\"CHANGE_QTY\" type=\"INT\" size=\"7\"/><Column id=\"NETSALE_QTY\" type=\"INT\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyaltyacnt_Dtl1", this);
            obj._setContents("<ColumnInfo><Column id=\"RADTL1_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"RADTL1_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"RAMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"RADTL1_ROYALTYRATE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"RADTL1_PRICE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"RADTL1_DELIVERYQTY\" type=\"DECIMAL\" size=\"7\"/><Column id=\"RADTL1_RETURNEDQTY\" type=\"DECIMAL\" size=\"7\"/><Column id=\"RADTL1_CHANGEQTY\" type=\"DECIMAL\" size=\"7\"/><Column id=\"RADTL1_NETSALEQTY\" type=\"DECIMAL\" size=\"7\"/><Column id=\"RADTL1_FINALAMOUNT\" type=\"DECIMAL\" size=\"15\"/><Column id=\"RADTL1_CLOSEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RADTL1_CLOSEUSER\" type=\"STRING\" size=\"6\"/><Column id=\"RADTL1_CLOSE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyaltyacnt_Dtl2", this);
            obj._setContents("<ColumnInfo><Column id=\"RADTL2_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"13\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"RADTL2_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"RAMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RADTL2_EDITRATE\" type=\"FLOAT\" size=\"5\"/><Column id=\"RADTL2_PAYRATE\" type=\"FLOAT\" size=\"3\"/><Column id=\"RADTL2_ROYALTYAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RADTL2_MIDACNTAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RADTL2_PAYAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RADTL2_BALANCEAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RADTL2_WITHHOLDAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RADTL2_TOTALPAYAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RADTL2_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RADTL2_PERMITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RADTL2_PERMITEUSER\" type=\"STRING\" size=\"6\"/><Column id=\"RADTL2_PERMITE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Dtl2_MidAmount", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"2\"/><Column id=\"RADTL2_MIDACNTAMOUNT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","95.86%","40",null,null,null,null,null,null,this);
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
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","75","25","761",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("신규카드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"7","60","25","844",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("복사");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","75","25","681",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("내용추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","15","100","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("관련부서");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:2","100","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_enable("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","cb_section:2","100","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("정산기간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_acntSDate","Static00_07:2","100","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_acntEDate","cal_acntSDate:1","100","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","cal_acntEDate:2","100","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("작성일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_mstDate","Static00_01:3","100","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","15","56","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookTB","Static00_02_00:4","56","5.55%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","edt_bookTB:2","56","51.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_book","edt_bookName:3","56","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도서코드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","btn_book:2","56","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookSYear","edt_bookCode:2","56","5.94%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","cal_mstDate:2","100","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("승인여부");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_permite","Static00_13:10","100","6.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("승인");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14","14","144","100","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","Static00_14:1","144","88.05%","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookEYear","edt_bookSYear:2","56","5.94%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl1","14","208","95.86%","170",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("dsRoyaltyacnt_Dtl1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"9\" text=\"        인세계산\" textAlign=\"left\" background=\"#7fb39d\"/><Cell row=\"1\" text=\"년판\"/><Cell row=\"1\" col=\"1\" text=\"정가\"/><Cell row=\"1\" col=\"2\" text=\"인세율\"/><Cell row=\"1\" col=\"3\" text=\"출고\"/><Cell row=\"1\" col=\"4\" text=\"반품\"/><Cell row=\"1\" col=\"5\" text=\"반품(대체)\"/><Cell row=\"1\" col=\"6\" text=\"순매\"/><Cell row=\"1\" col=\"7\" text=\"최종정산금액\"/><Cell row=\"1\" col=\"8\" text=\"마감\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" displaytype=\"normal\" calendardisplaynulltype=\"none\" text=\"bind:BOOKMST_YEAR\"/><Cell col=\"1\" text=\"bind:RADTL1_PRICE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"2\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##0.0\" edittype=\"mask\" maskedittype=\"number\" text=\"bind:RADTL1_ROYALTYRATE\" maskeditpostfixtext=\"%\"/><Cell col=\"3\" text=\"bind:RADTL1_DELIVERYQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:RADTL1_RETURNEDQTY\" textAlign=\"center\" displaytype=\"number\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:RADTL1_CHANGEQTY\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:RADTL1_NETSALEQTY\"/><Cell col=\"7\" displaytype=\"currency\" text=\"bind:RADTL1_FINALAMOUNT\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:RADTL1_CLOSE\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;RADTL1_DELIVERYQTY&apos;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;RADTL1_RETURNEDQTY&apos;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;RADTL1_CHANGEQTY&apos;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;RADTL1_NETSALEQTY&apos;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;RADTL1_FINALAMOUNT&apos;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl2","14","381","95.86%","330",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsRoyaltyacnt_Dtl2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"10\" text=\"        저자별 인세 지급 내역\" textAlign=\"left\" background=\"#7fb39d\"/><Cell row=\"1\" text=\"저자명\"/><Cell row=\"1\" col=\"1\" text=\"집필비율\"/><Cell row=\"1\" col=\"2\" text=\"인세금액\"/><Cell row=\"1\" col=\"3\" text=\"중간정산금액\"/><Cell row=\"1\" col=\"4\" text=\"지급비율\"/><Cell row=\"1\" col=\"5\" text=\"지급액\"/><Cell row=\"1\" col=\"6\" text=\"계약금/선인세 잔액\"/><Cell row=\"1\" col=\"7\" text=\"매절 원고료\"/><Cell row=\"1\" col=\"8\" text=\"총지급액\"/><Cell row=\"1\" col=\"9\" text=\"지급일자\" displaytype=\"buttoncontrol\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_NAME\" textAlign=\"center\" displaytype=\"normal\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"number\" maskeditpostfixtext=\"%\" maskeditformat=\"##0.0\" text=\"bind:RADTL2_EDITRATE\"/><Cell col=\"2\" text=\"bind:RADTL2_ROYALTYAMOUNT\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###### - #@@@@@#\" maskedittype=\"string\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:RADTL2_MIDACNTAMOUNT\" textAlign=\"right\" displaytype=\"currency\" edittype=\"normal\"/><Cell col=\"4\" textAlign=\"center\" displaytype=\"mask\" calendardisplaynulltype=\"none\" edittype=\"mask\" maskeditformat=\"##0.0\" maskeditpostfixtext=\"%\" text=\"bind:RADTL2_PAYRATE\"/><Cell col=\"5\" text=\"bind:RADTL2_PAYAMOUNT\" edittype=\"normal\" displaytype=\"currency\"/><Cell col=\"6\" text=\"bind:RADTL2_BALANCEAMOUNT\" displaytype=\"currency\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:RADTL2_WITHHOLDAMOUNT\" displaytype=\"currency\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:RADTL2_TOTALPAYAMOUNT\" displaytype=\"currency\"/><Cell col=\"9\" text=\"bind:RADTL2_PAYDATE\" displaytype=\"date\" edittype=\"date\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" expr=\"dataset.getSum(&apos;RADTL2_EDITRATE&apos;)\" displaytype=\"mask\" edittype=\"normal\" maskeditformat=\"##0.0\" maskeditpostfixtext=\"%\"/><Cell col=\"2\" expr=\"dataset.getSum(&apos;RADTL2_ROYALTYAMOUNT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;RADTL2_MIDACNTAMOUNT&apos;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" displaytype=\"number\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;RADTL2_PAYAMOUNT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;RADTL2_BALANCEAMOUNT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;RADTL2_WITHHOLDAMOUNT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;RADTL2_TOTALPAYAMOUNT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","826","447","188","153",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("monthonly");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_bookTB","value","dsRoyaltyacnt_Mst","BOOKTBKIND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_bookName","value","dsRoyaltyacnt_Mst","RAMST_BOOKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_bookCode","value","dsRoyaltyacnt_Mst","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_bookSYear","value","dsRoyaltyacnt_Mst","BOOKMST_SYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_bookEYear","value","dsRoyaltyacnt_Mst","BOOKMST_EYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cb_section","value","dsRoyaltyacnt_Mst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_acntSDate","value","dsRoyaltyacnt_Mst","RAMST_ACNTSDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cal_acntEDate","value","dsRoyaltyacnt_Mst","RAMST_ACNTEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cal_mstDate","value","dsRoyaltyacnt_Mst","RAMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","chk_permite","value","dsRoyaltyacnt_Mst","RAMST_PERMITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","txa_remark","value","dsRoyaltyacnt_Mst","RAMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED165F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED165F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED165F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSENM");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");

        var sSelect, sRAMST_ID, sGridFocus;
        var bBookRowChange = false; // 도서조회 후 onchanged 이벤트 set 설정

        var d = new Date();
        var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        this.ED165F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_09_104");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_SELECT");
        	//sSelect = Eco.decode(sSelect, null, "1", sSelect);
        	sSelect = 6;
        	//권한별 그리드 셀 수정여부
        	this.grd_dtl1.setCellProperty("body", 8, "edit", Eco.decode(sSelect, 1, "none", "checkbox"));
        	this.grd_dtl2.setCellProperty("body", 9, "edit", Eco.decode(sSelect, 1, "none", "expend"));

        	this.cb_section.set_enable(sSelect >= 5);

        	this.dsRoyaltyacnt_Mst.addRow();
        	this.edt_bookName.setFocus();

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=" + Eco.decode(sSelect, "1", "P", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//부서

        };

        //초기화
        this.dsRoyaltyacnt_Mst_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		obj.setColumn(e.row, "RAMST_DATE" ,today);
        		obj.setColumn(e.row, "SECTION_CODE", sSection_Code);
        		obj.setColumn(e.row, "BOOKMST_CODE", null);
        		obj.setColumn(e.row, "BOOKMST_SYEAR", null);
        		obj.setColumn(e.row, "BOOKMST_EYEAR", null);
        		obj.setColumn(e.row, "BOOKMST_NAME", null);
        		obj.setColumn(e.row, "UI_CODE", sSabun);
        		obj.setColumn(e.row, "UI_NAME", sName);
        		obj.setColumn(e.row, "RAMST_ACNTSDATE", "20060701");
        		obj.setColumn(e.row, "RAMST_ACNTEDATE", today.substr(0,4) + "0430");
        		obj.setColumn(e.row, "RAMST_REMARK", "");
        		obj.setColumn(e.row, "RAMST_PERMITEDATE", null);
        		obj.setColumn(e.row, "RAMST_PERMITEUSER", null);
        		obj.setColumn(e.row, "RAMST_PERMITE", "0");
        		obj.setColumn(e.row, "RMAMST_ID", -1);

        		this.dsRoyaltyacnt_Dtl1.clearData();
        		this.dsRoyaltyacnt_Dtl2.clearData();

        		bBookRowChange = true;
        		sRAMST_ID = -1;
        	}
        };

        this.dsRoyaltyacnt_Dtl1_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		if(sRAMST_ID != -1)
        			obj.setColumn(e.row, "RAMST_ID" ,sRAMST_ID);

        		obj.setColumn(e.row, "RADTL1_SEQ" ,(obj.rowcount + 1).toString().padLeft(2,"0"));
        		obj.setColumn(e.row, "UI_CODE", sSabun);
        		obj.setColumn(e.row, "RADTL1_DELETE", " ");
        		obj.setColumn(e.row, "BOOKMST_ID", null);
        		obj.setColumn(e.row, "BOOKMST_CODE", null);
        		obj.setColumn(e.row, "BOOKMST_YEAR", null);
        		obj.setColumn(e.row, "RADTL1_ROYALTYRATE", 0);
        		obj.setColumn(e.row, "RADTL1_PRICE", 0);
        		obj.setColumn(e.row, "RADTL1_DELIVERYQTY",0);
        		obj.setColumn(e.row, "RADTL1_RETURNEDQTY", 0);
        		obj.setColumn(e.row, "RADTL1_CHANGEQTY", 0);
        		obj.setColumn(e.row, "RADTL1_NETSALEQTY", 0);
        		obj.setColumn(e.row, "RADTL1_FINALAMOUNT", 0);
        		obj.setColumn(e.row, "RADTL1_CLOSEDATE", null);
        		obj.setColumn(e.row, "RADTL1_CLOSEUSER", null);
        		obj.setColumn(e.row, "RADTL1_CLOSE", "0");
        	}
        };

        this.dsRoyaltyacnt_Dtl2_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		if(sRAMST_ID != -1)
        			obj.setColumn(e.row, "RAMST_ID" ,sRAMST_ID);

        		obj.setColumn(e.row, "RADTL2_SEQ" ,(obj.rowcount + 1).toString().padLeft(2,"0"));
        		obj.setColumn(e.row, "ATHR_IDENTITY", null);
        		obj.setColumn(e.row, "ATHR_JUMINNO2", null);
        		obj.setColumn(e.row, "UI_CODE", sSabun);
        		obj.setColumn(e.row, "RADTL1_DELETE", " ");
        		obj.setColumn(e.row, "RADTL2_EDITRATE", 0);
        		obj.setColumn(e.row, "RADTL2_ROYALTYAMOUNT", 0);
        		obj.setColumn(e.row, "RADTL2_MIDACNTAMOUNT", 0);
        		obj.setColumn(e.row, "RADTL2_PAYRATE", 0);
        		obj.setColumn(e.row, "RADTL2_PAYAMOUNT",0);
        		obj.setColumn(e.row, "RADTL2_BALANCEAMOUNT", 0);
        		obj.setColumn(e.row, "RADTL2_WITHHOLDAMOUNT", 0);
        		obj.setColumn(e.row, "RADTL2_TOTALPAYAMOUNT", 0);
        		obj.setColumn(e.row, "RADTL2_PAYDATE", null);
        		obj.setColumn(e.row, "RADTL2_PERMITEDATE", null);
        		obj.setColumn(e.row, "RADTL2_PERMITEUSER", null);
        		obj.setColumn(e.row, "RADTL2_PERMITE", "0");
        	}
        };

        //신규
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	if(this.dsRoyaltyacnt_Mst.rowcount > 0)
        		this.Div00_btn_save_onclick();

        	this.dsRoyaltyacnt_Mst.clearData();
        	this.dsRoyaltyacnt_Mst.addRow();
        	this.edt_bookName.setFocus();

        };

        //내용추가
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	if(this.dsRoyaltyacnt_Mst.rowcount == 0)
        	{
        		alert("신규카드를 생성해주세요.");
        		this.Div00.form.btn_new.setFocus();
        		return false;
        	}

        	if(this.fn_mst_save("") == true)
        	{
        		this.dsRoyaltyacnt_Dtl2.addRow();
        		this.grd_dtl2.setFocus();

        		//저자 찾기
        		var objParam = {athr_close:"",
        						athr_permite:"Permite"};
        		this.lfn_showModal("popuppAuthor", objParam, "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        	}
        };

        //찾은 저자 데이터 넣어주기
        this.fn_setAuthorValue = function(rtArray)
        {
        	var nRow = this.dsRoyaltyacnt_Dtl2.rowposition;

        	this.dsRoyaltyacnt_Dtl2.setColumn(nRow, "ATHR_NAME", rtArray[0]);
        	this.dsRoyaltyacnt_Dtl2.setColumn(nRow, "ATHR_IDENTITY", rtArray[10]);
        	this.dsRoyaltyacnt_Dtl2.setColumn(nRow, "ATHR_JUMINNO2", rtArray[6]);

        	//중간정산 금액 추출
        	this.fn_midAmount_select(rtArray[10], this.edt_bookCode.value);

        	if(this.ds_Dtl2_MidAmount.getColumn(0, "RADTL2_MIDACNTAMOUNT") != null)
        		this.dsRoyaltyacnt_Dtl2.setColumn(this.dsRoyaltyacnt_Dtl2.rowposition, "RADTL2_MIDACNTAMOUNT", this.ds_Dtl2_MidAmount.getColumn(0, "RADTL2_MIDACNTAMOUNT"));
        	else
        		this.dsRoyaltyacnt_Dtl2.setColumn(this.dsRoyaltyacnt_Dtl2.rowposition, "RADTL2_MIDACNTAMOUNT", "0");

        	this.grd_dtl2.setCellPos(1);
        	this.grd_dtl2.showEditor();
        }

        //중간정산금액 가져오기
        this.fn_midAmount_select = function(athr_identity, bookMst_code)
        {
        	var inds = "ds_Dtl2_MidAmount=ds_Dtl2_MidAmount";
        	var outds = "ds_Dtl2_MidAmount=ds_Dtl2_MidAmount";
        	var strArg = "BOOKMST_CODE=" + nexacro.wrapQuote(bookMst_code) +
        			     " ATHR_IDENTITY=" + nexacro.wrapQuote(athr_identity);

        	this.gfn_TransactionP("search","JSP/ed/ed165f_midamount_select.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
        }

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {p_dsSection:this.dsSection,
        					p_dsRoyaltyacnt_Mst:this.dsRoyaltyacnt_Mst,
        					p_sSelect:sSelect,
        					p_sectionCode:sSection_Code};

        	this.lfn_showModal("popupSearch", objParam, "ed::ED160_SearchF.xfdl", "popupSearchCallBack", this, 10, 58, 400, 390);
        };

        this.popupSearchCallBack = function(svcId)
        {
        	var nRow = this.dsRoyaltyacnt_Mst.rowposition;

        	this.chk_permite.set_enable(sSelect > 5);
        	this.fn_comp_enable(nRow);

        	//승인 안된 것 활성화
        	if(sSelect < 5)
        	{
        		var modify = (this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITE") == "0")
        		this.fn_btn_enable(modify);
        	}

        	this.dsRoyaltyacnt_Dtl1.clearData();

        	var inds = "dsRoyaltyacnt_Dtl1=dsRoyaltyacnt_Dtl1";
        	var outds = "dsRoyaltyacnt_Dtl1=dsRoyaltyacnt_Dtl1";
        	var strArg = "RAMST_ID=" + nexacro.wrapQuote(this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_ID"));

        	this.gfn_TransactionP("search","JSP/ed/ed165f_royaltyacnt_dtl1.jsp", inds, outds, strArg, "fnDtl1Callback", false, "P", false, this);
        }

        this.fnDtl1Callback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.dsRoyaltyacnt_Dtl1.filter("RADTL1_DELETE!='D'");
        		this.dsRoyaltyacnt_Dtl2.clearData();

        		var inds = "dsRoyaltyacnt_Dtl2=dsRoyaltyacnt_Dtl2";
        		var outds = "dsRoyaltyacnt_Dtl2=dsRoyaltyacnt_Dtl2";
        		var strArg = "RAMST_ID=" + nexacro.wrapQuote(this.dsRoyaltyacnt_Mst.getColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_ID"));

        		this.gfn_TransactionP("search","JSP/ed/ed165f_royaltyacnt_dtl2.jsp", inds, outds, strArg, "fnDtl2Callback", false, "P", false, this);
        	}
        }

        this.fnDtl2Callback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.dsRoyaltyacnt_Dtl2.filter("RADTL2_DELETE!='D'");
        }

        //저장
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	var rowType = this.dsRoyaltyacnt_Mst.getRowType(this.dsRoyaltyacnt_Mst.rowposition);

        	if(rowType == 2 || rowType == 4)
        	{
        		if(this.fn_mst_save(rowType))
        		{
        			this.fn_dtl1_save();
        			this.fn_dtl2_save();
        		}
        	}else
        	{
        		this.fn_dtl1_save();
        		this.fn_dtl2_save();
        	}
        };

        this.fn_mst_save = function(rowType)
        {
        	var nRow = this.dsRoyaltyacnt_Mst.rowposition;
        	var setSave = true;

        	if((rowType != "delete") && (this.fn_mst_rowCheck(nRow) == false))
        	{
        		setSave = false;
        		return false;
        	}

        	if(sSelect > 5) //관리자 권한
        	{
        		if(this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITE") == "1")
        		{
        			this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITEDATE", today);
        			this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITEUSER", sSabun);
        		}
        		else
        		{
        			this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITEDATE", "");
        			this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITEUSER", "");
        		}
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed165f_royaltyacnt_mst_dml.jsp";
        		var inds = "dsRoyaltyacnt_Mst=dsRoyaltyacnt_Mst:U";
        		this.gfn_TransactionP(rowType ,str_url, inds, "", "", "fnMStSaveCallback", false, "P", false, this);

        		return true;
        	}
        }

        this.fnMStSaveCallback = function(svcId, errCode, errMsg, gv_rt_mst_id)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(svcId != "delete")
        	{
        		var rt_RAMST_ID =nexacro.getApplication().gv_rt_mst_id;

        		this.dsRoyaltyacnt_Mst.setColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_ID", rt_RAMST_ID);
        	}
        }

        this.fn_mst_rowCheck = function (nRow)
        {
        	if (nRow == -1)
        		return true;

        	if (this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_BOOKNAME") == null)
        	{
        		alert("도서명을 입력해주세요.");
        		this.edt_bookName.setFocus();
        		return false;
        	}

        	if (this.edt_bookCode.text.length != this.edt_bookCode.maxlength)
        	{
        		alert("도서코드를 입력해주세요.");
        		this.edt_bookCode.setFocus();
        		return false;
        	}

        	if (this.edt_bookSYear.text.length != this.edt_bookSYear.maxlength)
        	{
        		alert("년판을 입력해주세요.");
        		this.edt_bookEYear.setFocus();
        		return false;
        	}

        	if (this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_DATE") == null)
        	{
        		alert("작성일자를 선택해주세요.");
        		this.cal_mstDate.dropdown();
        		return false;
        	}

        	if (this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_ACNTSDATE") == null)
        	{
        		alert("정산기간을 선택해주세요.");
        		this.cal_acntSDate.dropdown();
        		return false;
        	}

        	if (this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_ACNTEDATE") == null)
        	{
        		alert("정산기간을 선택해주세요.");
        		this.cal_acntEDate.dropdown();
        		return false;
        	}

        	return true;
        };

        //인세정산내역 저장
        this.fn_dtl1_save = function()
        {
        	var nRow = this.dsRoyaltyacnt_Dtl1.rowposition;
        	var setSave = true;

        	for(var i=0; i<this.dsRoyaltyacnt_Dtl1.rowcount; i++)
        	{
        		this.dsRoyaltyacnt_Dtl1.setColumn(i, "RAMST_ID", this.dsRoyaltyacnt_Mst.getColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_ID"));

        		if(sSelect > 5) //관리자 권한
        		{
        			if(this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_CLOSE") == "1")
        			{
        				this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_CLOSEDATE", today);
        				this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_CLOSEUSER", sSabun);
        			}
        			else
        			{
        				this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_CLOSEDATE", "");
        				this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_CLOSEUSER", "");
        			}
        		}

        		if((this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_DELETE") != "D") && (this.fn_dtl1_rowCheck(nRow) == false))
        		{
        			setSave = false;
        			return false;
        		}
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed165f_royaltyacnt_dtl1_dml.jsp";
        		var inds = "dsRoyaltyacnt_Dtl1=dsRoyaltyacnt_Dtl1:U";
        		this.gfn_TransactionP("save" ,str_url, inds, "", "", "fnDtl1SaveCallback", false, "P", false, this);

        		return true;
        	}
        }
        this.fn_dtl1_rowCheck = function(nRow)
        {
        	if (nRow == -1)
        		return true;

        	if ((this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_ROYALTYRATE") == null) || (this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_ROYALTYRATE") == 0))
        	{
        		this.dsRoyaltyacnt_Dtl1.row = nRow;
        		alert("인세율을 정확하게 입력해주세요.");
        		this.grd_dtl1.setCellPos(2);
        		this.grd_dtl1.showEditor();
        		return false;
        	}

        	return true;
        }

        //인세지급내역 저장
        this.fn_dtl2_save = function()
        {
        	var nRow = this.dsRoyaltyacnt_Dtl2.rowposition;
        	var setSave = true;

        	for(var i=0; i<this.dsRoyaltyacnt_Dtl2.rowcount; i++)
        	{
        		this.dsRoyaltyacnt_Dtl2.setColumn(i, "RAMST_ID", this.dsRoyaltyacnt_Mst.getColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_ID"));

        		if((this.dsRoyaltyacnt_Dtl2.getColumn(nRow, "RFADTL_DELETE") != "D") && (this.fn_dtl2_rowCheck(nRow) == false))
        		{
        			setSave = false;
        			return false;
        		}
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed165f_royaltyacnt_dtl2_dml.jsp";
        		var inds = "dsRoyaltyacnt_Dtl2=dsRoyaltyacnt_Dtl2:U";
        		this.gfn_TransactionP("save" ,str_url, inds, "", "", "fnDtl2SaveCallback", false, "P", false, this);

        		return true;
        	}
        }

        this.fn_dtl2_rowCheck = function (nRow)
        {
        	if (nRow == -1)
        		return true;

        	if (this.dsRoyaltyacnt_Dtl2.getColumn(nRow, "ATHR_IDENTITY") == null)
        	{
        		this.dsRoyaltyacnt_Dtl2.row = nRow;
        		alert("저자를 선택해주세요.");
        		this.grd_dtl2.setCellPos(0);
        		this.grd_dtl2.showEditor();
        		return false;
        	}

        	if ((this.dsRoyaltyacnt_Dtl2.getColumn(nRow, "RADTL2_EDITRATE") == null) || (this.dsRoyaltyacnt_Dtl2.getColumn(nRow, "RADTL2_EDITRATE") == 0))
        	{
        		this.dsRoyaltyacnt_Dtl2.row = nRow;
        		alert("집필비율을 정확하게 입력해주세요.");
        		this.grd_dtl2.setCellPos(1);
        		this.grd_dtl2.showEditor();
        		return false;
        	}

        	if ((this.dsRoyaltyacnt_Dtl2.getColumn(nRow, "RADTL2_PAYRATE") == null) || (this.dsRoyaltyacnt_Dtl2.getColumn(nRow, "RADTL2_PAYRATE") == 0))
        	{
        		this.dsRoyaltyacnt_Dtl2.row = nRow;
        		alert("지급비율을 정확하게 입력해주세요.");
        		this.grd_dtl2.setCellPos(4);
        		this.grd_dtl2.showEditor();
        		return false;
        	}

        	return true;
        };

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {
        	if((this.dsRoyaltyacnt_Mst.getColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_PERMITEDATE") == "") ||
        		(this.dsRoyaltyacnt_Mst.getColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_PERMITEDATE") == null))
        	{
        		alert("전체삭제를 할 경우 복원할 수 없습니다.\n\n" +
        			  "새로운 내용을 추가하실 경우는 삭제하지 마시고 신규버튼을 눌러 작업해 주십시요.");
        		this.lfn_showModal("popupDelete", "", "ed::EDMstDtlCancel_ConformF.xfdl", "popupDeleteCallBack", this, 10, 58, 280, 100);
        	}
        	else
        		alert("승인된 인세정산서는 삭제할 수 없습니다.");
        };

        this.popupDeleteCallBack = function(svcId, rt_value)
        {
        	if(rt_value == "전체")
        	{
        		this.dsRoyaltyacnt_Mst.deleteRow(this.dsRoyaltyacnt_Mst.rowposition);
        		this.fn_mst_save("delete");
        		this.dsRoyaltyacnt_Mst.clearData();
        	}
        	else if(rt_value == "내용")
        	{
        		if(sGridFocus == "grd_dtl1")
        		{
        			var nRow = this.dsRoyaltyacnt_Dtl1.rowposition;
        			if(this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_CLOSE") == "0")
        			{
        				if(this.dsRoyaltyacnt_Dtl1.getRowType(nRow) == 2)	//insert
        				{
        					this.dsRoyaltyacnt_Dtl1.deleteRow(nRow);
        				}
        				else if((this.dsRoyaltyacnt_Dtl1.getRowType(nRow) == 1) || (this.dsRoyaltyacnt_Dtl1.getRowType(nRow) == 4))	//nomal or update
        				{
        					this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "RADTL1_DELETE", "D");
        					this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "UI_CODE", sSabun);
        					this.dsRoyaltyacnt_Dtl1.filter("RADTL1_DELETE!='D'");
        				}
        				this.fn_dtl1_save();

        			}else
        				alert("마감된 인세계약서는 삭제할 수 없습니다.");
        		}
        		else if(sGridFocus == "grd_dtl2")
        		{
        			if(this.dsRoyaltyacnt_Dtl1.getRowType(nRow) == 2)	//insert
        			{
        				this.dsRoyaltyacnt_Dtl1.deleteRow(nRow);
        			}
        			else if((this.dsRoyaltyacnt_Dtl1.getRowType(nRow) == 1) || (this.dsRoyaltyacnt_Dtl1.getRowType(nRow) == 4))	//nomal or update				{
        			{
        				this.dsRoyaltyacnt_Dtl2.setColumn(nRow, "RADTL2_DELETE", "D");
        				this.dsRoyaltyacnt_Dtl2.setColumn(nRow, "UI_CODE", sSabun);
        				this.dsRoyaltyacnt_Dtl2.filter("RADTL2_DELETE!='D'");
        			}
        			this.fn_dtl2_save();
        		}
        	}
        }

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var nRow = this.dsRoyaltyacnt_Mst.rowposition;
        	var nRAMST_ID = this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_ID");
        	var rdUrl, rdParam;

        	if(nRAMST_ID != null)
        	{
        		rdUrl = gv_urlMrd + "/ed/ED166.mrd";
        		rdParam  = "/rp ["+ nRAMST_ID + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        	else
        		alert("조회된 자료가 없습니다.");
        };

        //복사
        this.Div00_btn_copy_onclick = function(obj,e)
        {
        	if( this.edt_bookCode.value == null || this.edt_bookCode.value == "")
        	{
        		alert("복사할 자료를 조회 하신 후 복사 버튼을 누르세요!");
        		return false;
        	}

        	if(this.chk_permite.value == "1")
        	{
        		var objParam = {dsRoyaltyacnt_Mst:this.dsRoyaltyacnt_Mst,
        						dsRoyaltyacnt_Dtl1:this.dsRoyaltyacnt_Dtl1,
        						dsRoyaltyacnt_Dtl2:this.dsRoyaltyacnt_Dtl2};
        		this.lfn_showModal("popupCopy", objParam, "ed::ED165_CopyF.xfdl", "popupCopyCallBack", this, 10, 58, 400, 150);
        	}
        	else
        		alert("승인된 건만 복사할 수 있습니다.");
        };

        this.popupCopyCallBack = function(svcId, rt_vRate)
        {
        	this.fn_bookQty();

        	for(var i = 0; i<this.dsRoyaltyacnt_Dtl1.rowcount; i++)
        	{
        		this.dsRoyaltyacnt_Dtl1.setColumn(i, "RADTL1_ROYALTYRATE", rt_vRate);
        	}

        	for(var i=0; i<this.dsRoyaltyacnt_Dtl2.rowcount; i++)
        	{

        		this.fn_RoyaltyAmount_Calculate(this.dsRoyaltyacnt_Dtl1, this.dsRoyaltyacnt_Dtl2, i);
        		this.fn_PayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, i);
        		this.fn_TotalPayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, i);
        	}

        	var nRow = this.dsRoyaltyacnt_Mst.rowposition;

        	this.chk_permite.set_enable(sSelect > 5);
        	this.fn_comp_enable(nRow);

        	//승인 안된 것 활성화
        	if(sSelect < 5)
        	{
        		var modify = (this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITE") == "0")
        		this.fn_btn_enable(modify);
        	}
        }

        //도서코드
        this.btn_book_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst};
        	this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        };

        this.popupBookCallBack = function(svcId)
        {
        	var bRow = this.dsBookMst.rowposition;

        	this.edt_bookCode.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_CODE"));

        	if(this.dsRoyaltyacnt_Mst.getColumn(this.dsRoyaltyacnt_Mst.rowposition, "BOOKMST_SYEAR") == null)
        	{
        		this.edt_bookSYear.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR"));
        		this.edt_bookEYear.setFocus();
        	}else
        	{
        		this.edt_bookEYear.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR"));
        		this.cal_acntSDate.dropdown();
        	}

        	this.edt_bookName.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_NAME"));
        	this.edt_bookTB.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_ID"));
        }

        //영업자료 가져오기
        this.edt_bookEYear_onchanged = function(obj,e)
        {
        	if(e.posttext.length == 4)
        	{
        		this.dsRoyaltyacnt_Dtl1.clearData();
        		this.fn_bookQty();
        	}
        };

        this.edt_bookEYear_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.fn_bookQty();
        };

        this.fn_bookQty = function()
        {
        	this.txa_remark.setFocus();

        	var nRow = this.dsRoyaltyacnt_Mst.rowposition;

        	if(this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITE") != "1")
        	{
        		if(this.edt_bookCode.text.length != this.edt_bookCode.maxlength)
        		{
        			alert("도서코드를 정확하게 입력해주세요.");
        			this.edt_bookCode.setFocus();
        			return false;
        		}

        		if(this.edt_bookSYear.text.length != this.edt_bookSYear.maxlength)
        		{
        			alert("년판을 정확하게 입력해주세요.");
        			this.edt_bookSYear.setFocus();
        			return false;
        		}

        		var str_url = "JSP/ed/ed165f_book_qty_tibero.jsp";
        		var inds = "dsBookQty=dsBookQty";
        		var outds = "dsBookQty=dsBookQty";
        		var strArg = "BOOKMST_CODE=" + nexacro.wrapQuote(this.dsRoyaltyacnt_Mst.getColumn(nRow, "BOOKMST_CODE"))
        				   + " BOOKMST_SYEAR=" + nexacro.wrapQuote(this.dsRoyaltyacnt_Mst.getColumn(nRow, "BOOKMST_SYEAR"))
        				   + " BOOKMST_EYEAR=" + nexacro.wrapQuote(this.dsRoyaltyacnt_Mst.getColumn(nRow, "BOOKMST_EYEAR"))
        				   + " RAMST_ACNTSDATE=" + nexacro.wrapQuote(this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_ACNTSDATE"))
        				   + " RAMST_ACNTEDATE=" + nexacro.wrapQuote(this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_ACNTEDATE"));

        		this.gfn_TransactionP("search" ,str_url, inds, outds, strArg, "fnBookCallBack", false, "P", false, this);
        	}
        }

        this.fnBookCallBack = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.dsBookQty.rowcount == 0)
        	{
        		this.dsBookQty.clearData();
        		alert("도서 판매량에 대한 자료가 없습니다.");
        	}
        	else
        	{
        		for( var i = 0; i < this.dsBookQty.rowcount; i++)
        		{
        			if(this.dsBookQty.getSum("NETSALE_QTY") > 0)
        			{
        				var nRow = this.dsRoyaltyacnt_Dtl1.addRow();

        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "BOOKMST_ID", this.dsBookQty.getColumn(i, "BOOKMST_ID"));
        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "BOOKMST_CODE", this.dsBookQty.getColumn(i, "BOOKMST_CODE"));
        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "BOOKMST_YEAR", this.dsBookQty.getColumn(i, "BOOKMST_YEAR"));
        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "RADTL1_PRICE", this.dsBookQty.getColumn(i, "PRICE"));
        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "RADTL1_DELIVERYQTY", this.dsBookQty.getColumn(i, "DELIVERY_QTY"));
        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "RADTL1_RETURNEDQTY", this.dsBookQty.getColumn(i, "RETURNED_QTY"));
        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "RADTL1_CHANGEQTY", this.dsBookQty.getColumn(i, "CHANGE_QTY"));
        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "RADTL1_NETSALEQTY", this.dsBookQty.getColumn(i, "NETSALE_QTY"));

        				this.dsRoyaltyacnt_Dtl1.setColumn(nRow, "RADTL1_FINALAMOUNT",
        							(this.dsRoyaltyacnt_Dtl1.getColumn(nRow, "RADTL1_ROYALTYRATE") / 100) * this.dsBookQty.getColumn(i, "PRICE")  * this.dsBookQty.getColumn(i, "NETSALE_QTY") );
        			}
        			else
        			{
        				alert("도서 순매가 마이너스일 경우 최종정산을 할 수 없습니다.");
        				break;
        			}
        		}
        		this.dsRoyaltyacnt_Dtl1.rowposition = 0;
        		this.grd_dtl1.setCellPos(2);
        		this.grd_dtl1.showEditor();
        	}
        };

        //메인버튼 활성화
        this.fn_btn_enable = function(setEnable)
        {
        	this.Div00.form.btn_save.set_enable(setEnable);
        	this.Div00.form.btn_delete.set_enable(setEnable);
        }

        //컴포넌트 활성화
        this.fn_comp_enable = function(nRow)
        {
        	var setEnalbe = (this.dsRoyaltyacnt_Mst.getColumn(nRow, "RAMST_PERMITE") != "1");

        	this.edt_bookName.set_enable(setEnalbe);
        	this.btn_book.set_enable(setEnalbe);
        	this.edt_bookCode.set_enable(setEnalbe);
        	this.edt_bookEYear.set_enable(setEnalbe);
        	this.edt_bookSYear.set_enable(setEnalbe);
        	this.grd_dtl1.set_enable(setEnalbe);
        	this.grd_dtl2.set_enable(setEnalbe);
        }

        //grid1 인세율 변경 시 grid2 재계산
        this.dsRoyaltyacnt_Dtl1_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "RADTL1_ROYALTYRATE" && e.newvalue != 0)
        		this.fn_finalAmount_calculate(this.dsRoyaltyacnt_Dtl1, e.row);

        	if(e.columnid == "RADTL1_ROYALTYRATE" && e.newvalue != e.oldvalue)
        	{
        		for(var i = 0; i < this.dsRoyaltyacnt_Dtl2.rowcount; i++)
        		{
        			this.fn_RoyaltyAmount_Calculate(this.dsRoyaltyacnt_Dtl1, this.dsRoyaltyacnt_Dtl2, i);
        			this.fn_PayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, i);
        			this.fn_TotalPayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, i);
        		}
        	}
        };

        //grid1 인세율 변경
        this.grd_dtl1_oncellposchanged = function(obj,e)
        {
        	if(e.oldcell == 2)
        		this.fn_finalAmount_calculate(this.dsRoyaltyacnt_Dtl1, e.oldrow);
        };

        this.grd_dtl1_onenterdown = function(obj,e)
        {
        	if(e.cell ==2)
        		this.fn_finalAmount_calculate(this.dsRoyaltyacnt_Dtl1, e.oldrow);
        };

        //최종정산 금액 계산하기
        this.fn_finalAmount_calculate = function(objDs, nRow)
        {
        	var price = objDs.getColumn(nRow, "RADTL1_PRICE");
        	var netSaleQty = objDs.getColumn(nRow, "RADTL1_NETSALEQTY");
        	var royaltyRate = nexacro.toNumber(objDs.getColumn(nRow, "RADTL1_ROYALTYRATE")) / 100;

        	objDs.setColumn(nRow, "RADTL1_FINALAMOUNT", nexacro.toNumber(price) * nexacro.toNumber(netSaleQty) * nexacro.toNumber(royaltyRate));
        }

        //grid2 수정 시
        this.grd_dtl2_onenterdown = function(obj,e)
        {
        	switch(e.cell)
        	{
        		case 1:
        			obj.setCellPos(2);
        			this.fn_RoyaltyAmount_Calculate(this.dsRoyaltyacnt_Dtl1, this.dsRoyaltyacnt_Dtl2, e.row);
        			break;
        		case 3:
        			obj.setCellPos(4);
        			this.fn_PayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, e.row);
        			break;
        		case 4:
        			obj.setCellPos(6);
        			this.fn_PayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, e.row);
        			break;
        		case 6:
        			obj.setCellPos(7);
        			this.fn_TotalPayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, e.row);
        			break;
        		case 7:
        			this.fn_TotalPayAmount_Calculate(this.dsRoyaltyacnt_Dtl2, e.row);
        			break;
        		default :
        			obj.setCellPos(e.cell + 1);
        			break;
        	}
        	obj.showEditor();
        };

        this.grd_dtl2_onkeydown = function(obj,e)
        {
        	var cellIndex = obj.getCellPos();

        	//F1키
        	if((e.keycode == 112) && (cellIndex == 0))
        	{
        		var objParam = {athr_close:"",
        						athr_permite:"Permite"};
        		this.lfn_showModal("popuppAuthor", objParam, "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        	}
        	//Del키
        	else if((e.keycode == 46) && (cellIndex == 9))
        		this.dsRoyaltyacnt_Dtl2.setColumn(this.dsRoyaltyacnt_Dtl2.rowposition, "RADTL2_PAYDATE", ""); //지급일자 삭제
        };

        //인세금액 계산하기
        this.fn_RoyaltyAmount_Calculate = function(objDs1, objDs2, nRow)
        {
        	// 인세금액 = 최종정선 금액 * 집필비율
        	objDs2.setColumn(nRow, "RADTL2_ROYALTYAMOUNT", objDs1.getSum("RADTL1_FINALAMOUNT") * (objDs2.getColumn(nRow, "RADTL2_EDITRATE") / 100 ) );
        }

        //지급액 계산하기
        this.fn_PayAmount_Calculate = function(objDs, nRow)
        {
        	//지급액 = (인세금액 - 중간정산 금액) * 지급비율
        	objDs.setColumn(nRow, "RADTL2_PAYAMOUNT", ( objDs.getColumn(nRow, "RADTL2_ROYALTYAMOUNT") - objDs.getColumn(nRow, "RADTL2_MIDACNTAMOUNT") ) * objDs.getColumn(nRow, "RADTL2_PAYRATE")  / 100 );
        }

        //총지급액 계산하기
        this.fn_TotalPayAmount_Calculate = function(objDs, nRow)
        {
        	var balanceAmount = objDs.getColumn(nRow, "RADTL2_BALANCEAMOUNT");
        	var withholdAmount = objDs.getColumn(nRow, "RADTL2_WITHHOLDAMOUNT");

        	//총지급액 = 지급액 - 계약금 및 선인세 - 매절 원고료
        	objDs.setColumn(nRow, "RADTL2_TOTALPAYAMOUNT", (objDs.getColumn(nRow, "RADTL2_PAYAMOUNT") - balanceAmount - withholdAmount));
        }

        //지급일자
        this.grd_dtl2_onheadclick = function(obj,e)
        {
        	if(e.cell == 10)
        	{
        		var rect = obj.getCellRect(e.row, e.cell);

        		var top = obj.top;
        		var left = rect.left;

        		this.Calendar00.set_top(top);
        		this.Calendar00.set_left(left);
        		this.Calendar00.set_visible(true);
        		this.Calendar00.setFocus();
        	}
        };

        this.Calendar00_ondayclick = function(obj,e)
        {
        	for(var i = 0; i<this.dsRoyaltyacnt_Dtl2.rowcount; i++)
        		this.dsRoyaltyacnt_Dtl2.setColumn(i, "RADTL2_PAYDATE", e.date);

        	obj.set_visible(false);
        };

        //승인여부
        this.chk_permite_onclick = function(obj,e)
        {
        	if(obj.value == 0)
        	{
        		this.dsRoyaltyacnt_Mst.setColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_PERMITEDATE", "");
        		this.dsRoyaltyacnt_Mst.setColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_PERMITEUSER", "");
        		this.dsRoyaltyacnt_Mst.setColumn(this.dsRoyaltyacnt_Mst.rowposition, "RAMST_PERMITE", "0");
        	}

        	this.fn_comp_enable(this.dsRoyaltyacnt_Mst.rowposition);
        };

        this.grd_common_onsetfocus = function(obj,e)
        {
        	sGridFocus = obj.name;
        };

        this.ED165F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED165F_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.grd_dtl1);
        	this.lfn_grdAutofit(this.grd_dtl2);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED165F_onload,this);
            this.addEventHandler("onsize",this.ED165F_onsize,this);
            this.addEventHandler("ontimer",this.ED165F_ontimer,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_copy.addEventHandler("onclick",this.Div00_btn_copy_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_section.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_acntSDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.cal_acntEDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_mstDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_bookName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_book.addEventHandler("onclick",this.btn_book_onclick,this);
            this.edt_bookCode.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_13.addEventHandler("onclick",this.Static00_onclick,this);
            this.chk_permite.addEventHandler("onclick",this.chk_permite_onclick,this);
            this.Static00_14.addEventHandler("onclick",this.Static00_onclick,this);
            this.txa_remark.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.edt_bookEYear.addEventHandler("onchanged",this.edt_bookEYear_onchanged,this);
            this.edt_bookEYear.addEventHandler("onkeydown",this.edt_bookEYear_onkeydown,this);
            this.grd_dtl1.addEventHandler("onsetfocus",this.grd_common_onsetfocus,this);
            this.grd_dtl1.addEventHandler("oncellposchanged",this.grd_dtl1_oncellposchanged,this);
            this.grd_dtl1.addEventHandler("onenterdown",this.grd_dtl1_onenterdown,this);
            this.grd_dtl2.addEventHandler("onsetfocus",this.grd_common_onsetfocus,this);
            this.grd_dtl2.addEventHandler("oncellclick",this.grd_dtl2_onenterdown,this);
            this.grd_dtl2.addEventHandler("onheadclick",this.grd_dtl2_onheadclick,this);
            this.grd_dtl2.addEventHandler("onenterdown",this.grd_dtl2_onenterdown,this);
            this.grd_dtl2.addEventHandler("onkeydown",this.grd_dtl2_onkeydown,this);
            this.Calendar00.addEventHandler("ondayclick",this.Calendar00_ondayclick,this);
            this.dsRoyaltyacnt_Mst.addEventHandler("onrowsetchanged",this.dsRoyaltyacnt_Mst_onrowsetchanged,this);
            this.dsRoyaltyacnt_Dtl1.addEventHandler("onrowsetchanged",this.dsRoyaltyacnt_Dtl1_onrowsetchanged,this);
            this.dsRoyaltyacnt_Dtl1.addEventHandler("oncolumnchanged",this.dsRoyaltyacnt_Dtl1_oncolumnchanged,this);
            this.dsRoyaltyacnt_Dtl2.addEventHandler("onrowsetchanged",this.dsRoyaltyacnt_Dtl2_onrowsetchanged,this);
        };
        this.loadIncludeScript("ED165F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
