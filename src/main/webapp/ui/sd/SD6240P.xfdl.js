(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6240P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,275);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">코드별</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">도서구분별</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">시행일자별</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">OLD코드별</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">출고율수정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ed_values9", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">판매용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">교사용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">타계정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">매입품</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbrcd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"INDEX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INDEX\">00</Col><Col id=\"CD_KEY\">미기재</Col></Row><Row><Col id=\"INDEX\">01</Col><Col id=\"CD_KEY\">SET</Col></Row><Row><Col id=\"INDEX\">02</Col><Col id=\"CD_KEY\">도서1</Col></Row><Row><Col id=\"INDEX\">03</Col><Col id=\"CD_KEY\">도서2</Col></Row><Row><Col id=\"INDEX\">04</Col><Col id=\"CD_KEY\">매절</Col></Row><Row><Col id=\"INDEX\">05</Col><Col id=\"CD_KEY\">연구용</Col></Row><Row><Col id=\"INDEX\">06</Col><Col id=\"CD_KEY\">부록</Col></Row><Row><Col id=\"INDEX\">07</Col><Col id=\"CD_KEY\">시험지</Col></Row><Row><Col id=\"INDEX\">08</Col><Col id=\"CD_KEY\">답지</Col></Row><Row><Col id=\"INDEX\">09</Col><Col id=\"CD_KEY\">카바</Col></Row><Row><Col id=\"INDEX\">10</Col><Col id=\"CD_KEY\">판권</Col></Row><Row><Col id=\"INDEX\">11</Col><Col id=\"CD_KEY\">기타부속물</Col></Row><Row><Col id=\"INDEX\">12</Col><Col id=\"CD_KEY\">카드</Col></Row><Row><Col id=\"INDEX\">13</Col><Col id=\"CD_KEY\">표지</Col></Row><Row><Col id=\"INDEX\">14</Col><Col id=\"CD_KEY\">면지</Col></Row><Row><Col id=\"INDEX\">15</Col><Col id=\"CD_KEY\">Tape</Col></Row><Row><Col id=\"INDEX\">16</Col><Col id=\"CD_KEY\">CD</Col></Row><Row><Col id=\"INDEX\">17</Col><Col id=\"CD_KEY\">DVD</Col></Row><Row><Col id=\"INDEX\">18</Col><Col id=\"CD_KEY\">비디오</Col></Row><Row><Col id=\"INDEX\">20</Col><Col id=\"CD_KEY\">홍보물</Col></Row><Row><Col id=\"INDEX\">21</Col><Col id=\"CD_KEY\">기타</Col></Row><Row><Col id=\"INDEX\">30</Col><Col id=\"CD_KEY\">상품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbrcd_e", this);
            obj._setContents("<ColumnInfo><Column id=\"INDEX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INDEX\">00</Col><Col id=\"CD_KEY\">미기재</Col></Row><Row><Col id=\"INDEX\">01</Col><Col id=\"CD_KEY\">SET</Col></Row><Row><Col id=\"INDEX\">02</Col><Col id=\"CD_KEY\">도서1</Col></Row><Row><Col id=\"INDEX\">03</Col><Col id=\"CD_KEY\">도서2</Col></Row><Row><Col id=\"INDEX\">04</Col><Col id=\"CD_KEY\">매절</Col></Row><Row><Col id=\"INDEX\">05</Col><Col id=\"CD_KEY\">연구용</Col></Row><Row><Col id=\"INDEX\">06</Col><Col id=\"CD_KEY\">부록</Col></Row><Row><Col id=\"INDEX\">07</Col><Col id=\"CD_KEY\">시험지</Col></Row><Row><Col id=\"INDEX\">08</Col><Col id=\"CD_KEY\">답지</Col></Row><Row><Col id=\"INDEX\">09</Col><Col id=\"CD_KEY\">카바</Col></Row><Row><Col id=\"INDEX\">10</Col><Col id=\"CD_KEY\">판권</Col></Row><Row><Col id=\"INDEX\">11</Col><Col id=\"CD_KEY\">기타부속물</Col></Row><Row><Col id=\"INDEX\">12</Col><Col id=\"CD_KEY\">카드</Col></Row><Row><Col id=\"INDEX\">13</Col><Col id=\"CD_KEY\">표지</Col></Row><Row><Col id=\"INDEX\">14</Col><Col id=\"CD_KEY\">면지</Col></Row><Row><Col id=\"INDEX\">15</Col><Col id=\"CD_KEY\">Tape</Col></Row><Row><Col id=\"INDEX\">16</Col><Col id=\"CD_KEY\">CD</Col></Row><Row><Col id=\"INDEX\">17</Col><Col id=\"CD_KEY\">DVD</Col></Row><Row><Col id=\"INDEX\">18</Col><Col id=\"CD_KEY\">비디오</Col></Row><Row><Col id=\"INDEX\">20</Col><Col id=\"CD_KEY\">홍보물</Col></Row><Row><Col id=\"INDEX\">21</Col><Col id=\"CD_KEY\">기타</Col></Row><Row><Col id=\"INDEX\">30</Col><Col id=\"CD_KEY\">상품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"B_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data2", this);
            obj._setContents("<ColumnInfo><Column id=\"UPYMD\" type=\"STRING\" size=\"256\"/><Column id=\"UD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BBOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL1\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL2\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL3\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL4\" type=\"STRING\" size=\"256\"/><Column id=\"BCOST\" type=\"STRING\" size=\"256\"/><Column id=\"BPCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","10","310","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("도서출고율 출력");
            obj.set_color("#7fb39d");
            obj.set_font("bold 28px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"17","45","22","18",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","91","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("도서구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","107","91","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","232","97","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","119","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("년판구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","107","119","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","172","125","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","12","147","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","107","147","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","233","153","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","12","175","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","107","175","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","224","181","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","12","203","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03","107","203","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","12","231","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_04","107","231","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3","114","124","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","194","124","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values5","114","152","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values6","249","152","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","63","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","114","236","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_rpt");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_text("입금자별입금현황");
            obj.set_value("5");
            obj.set_index("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","321","236","45","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출력");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","114","96","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_format("@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","254","96","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values5_1","145","152","86","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_font("10px/normal \"Gulim\"");
            obj.set_innerdataset("ds_bgbrcd_s");
            obj.set_codecolumn("INDEX");
            obj.set_datacolumn("CD_KEY");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values6_1","280","152","86","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_font("10px/normal \"Gulim\"");
            obj.set_innerdataset("ds_bgbrcd_e");
            obj.set_codecolumn("INDEX");
            obj.set_datacolumn("CD_KEY");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ip_search","205","96","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ip_search00","345","96","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values9","114","208","185","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_ed_values9");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_text("입금자별입금현황");
            obj.set_value("5");
            obj.set_index("5");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values8","246","180","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_format("####-##-##");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values7","114","180","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("string");
            obj.set_format("####-##-##");
            this.addChild(obj.name, obj);

            obj = new Button("btn_preview","231","236","55","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("미리보기");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","0","265",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"72\"/><Column size=\"42\"/><Column size=\"250\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"64\"/><Column size=\"76\"/><Column size=\"54\"/><Column size=\"64\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"도서코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"년판\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서명\"/><Cell col=\"3\" rowspan=\"2\" text=\"시행일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"마감일자\"/><Cell col=\"5\" colspan=\"4\" text=\"출 고 율\"/><Cell col=\"9\" rowspan=\"2\" text=\"정가\"/><Cell col=\"10\" rowspan=\"2\" text=\"예정가\"/><Cell col=\"11\" colspan=\"3\" text=\"반품구분\"/><Cell col=\"14\" rowspan=\"2\" text=\"적용구분\"/><Cell col=\"15\" rowspan=\"2\" text=\"판매단가\"/><Cell row=\"1\" col=\"5\" text=\"서울\"/><Cell row=\"1\" col=\"6\" text=\"A\"/><Cell row=\"1\" col=\"7\" text=\"B\"/><Cell row=\"1\" col=\"8\" text=\"C\"/><Cell row=\"1\" col=\"11\" text=\"허용여부\"/><Cell row=\"1\" col=\"12\" text=\"반품기한\"/><Cell row=\"1\" col=\"13\" text=\"한도율\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:YY\"/><Cell col=\"2\" text=\"bind:B_NM\"/><Cell col=\"3\" text=\"bind:SYMD\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"4\" text=\"bind:EYMD\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"5\" text=\"bind:YUL1\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:YUL2\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:YUL3\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:YUL4\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:COST\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:YCOST\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:B_YN\" textAlign=\"center\" expr=\"B_YN==&apos;0&apos;?&apos;적용안함&apos;:B_YN==&apos;1&apos;?&apos;반품한도&apos;:B_YN==&apos;2&apos;?&apos;반품정산&apos;:&apos;기타&apos;\"/><Cell col=\"12\" text=\"bind:B_YMD\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"13\" text=\"bind:B_YUL\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:JUK_GB\" expr=\"JUK_GB==&apos;0&apos;?&apos;적용&apos;:JUK_GB==&apos;1&apos;?&apos;단가&apos;:JUK_GB==&apos;2&apos;?&apos;출고율&apos;:JUK_GB==&apos;3&apos;?&apos;적용안함&apos;:&apos;기타&apos;\"/><Cell col=\"15\" text=\"bind:PCOST\" textAlign=\"right\"/></Band></Format><Format id=\"default_02\"><Columns><Column size=\"76\"/><Column size=\"72\"/><Column size=\"42\"/><Column size=\"250\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"수정일자\"/><Cell col=\"1\" rowspan=\"2\" text=\"도서코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"년판\"/><Cell col=\"3\" rowspan=\"2\" text=\"도서명\"/><Cell col=\"4\" rowspan=\"2\" text=\"구분\"/><Cell col=\"5\" colspan=\"7\" text=\"변경내역\"/><Cell col=\"12\" colspan=\"6\" text=\"변경후내역\"/><Cell row=\"1\" col=\"5\" text=\"서울\"/><Cell row=\"1\" col=\"6\" text=\"A\"/><Cell row=\"1\" col=\"7\" text=\"B\"/><Cell row=\"1\" col=\"8\" text=\"C\"/><Cell row=\"1\" col=\"9\" text=\"정가\"/><Cell row=\"1\" col=\"10\" text=\"판매단가\"/><Cell row=\"1\" col=\"11\" text=\"변경자\"/><Cell row=\"1\" col=\"12\" text=\"서울\"/><Cell row=\"1\" col=\"13\" text=\"A\"/><Cell row=\"1\" col=\"14\" text=\"B\"/><Cell row=\"1\" col=\"15\" text=\"C\"/><Cell row=\"1\" col=\"16\" text=\"정가\"/><Cell row=\"1\" col=\"17\" text=\"판매단가\"/></Band><Band id=\"body\"><Cell text=\"bind:UPYMD\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:YY\"/><Cell col=\"3\" text=\"bind:BOOK_NM\"/><Cell col=\"4\" expr=\"UD_GB==&apos;A&apos;?&apos;수정&apos;:&apos;삭제&apos;\" text=\"bind:UD_GB\"/><Cell col=\"5\" text=\"bind:YUL1\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:YUL2\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:YUL3\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:YUL4\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:COST\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PCOST\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:NAME\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:BYUL1\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:BYUL2\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:BYUL3\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:BYUL4\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:BCOST\"/><Cell col=\"17\" text=\"bind:BPCOST\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,275,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6240P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6240P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6240P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        this.SD6240P_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.print_select.set_index(0);
        	this.ed_values1.setFocus();
        	this.ed_values1.set_value("0000000000");
        	this.ed_values2.set_value("9999999999");
        	this.ed_values3.set_value(f_date);
        	this.ed_values4.set_value(f_date);
        	this.ed_values5.set_value("00");
        	this.ed_values6.set_value("99");
        	this.ed_values7.set_value("00000000");
        	this.ed_values8.set_value("99999999");
        	this.ed_values9.set_index(4);
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values5.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values8.setFocus();
        		else if (obj.name == "ed_values8") this.ed_values9.setFocus();
        		else if (obj.name == "ed_values9")  this.print_select.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values5.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values8") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values9") this.ed_values8.setFocus();
        		else if (obj.name == "print_select") this.ed_values9.setFocus();
        	}
        };

        this.ed_values5_1_onitemchanged = function(obj,e)
        {
        	this.ed_values5.set_value(this.ed_values5_1.value);
        };

        this.ed_values6_1_onitemchanged = function(obj,e)
        {
        	this.ed_values6.set_value(this.ed_values6_1.value);
        };

        this.ed_values5_onkillfocus = function(obj,e)
        {
        	this.ed_values5_1.set_value(this.ed_values5.value);
        };

        this.ed_values6_onkillfocus = function(obj,e)
        {
        	this.ed_values6_1.set_value(this.ed_values6.value);
        };

        //출력파일 선택.
        function fnCreate_rdfile(ord_index)
        {
        	if (ord_index == 4) return gv_urlMrd+"/sd/sd6241r.mrd";
        	else return gv_urlMrd+"/sd/sd6240r.mrd";
        }

        //정렬조건.
        function fnCreate_orderby(ord_index)
        {
        	switch(ord_index)
        	{
        		case 0 : return "A.CODE";
        				 break;
        		case 1 : return "B.BGBR_CD,A.CODE";
        				 break;
        		case 2 : return "A.SYMD, A.CODE";
        				 break;
        		case 3 : return "B.OLD_CODE,A.CODE";
        				 break;
        		case 4 : return "A.CODE, A.YY,A.UPYMD,A.UD_GB";
        				 break;
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	//출력
        	var orderby;
        	var rdfile;
        	var meip_gubn;

        	rdfile  = fnCreate_rdfile(this.print_select.index);
        	orderby = fnCreate_orderby(this.print_select.index);

        	if (this.ed_values9.index == 4)
        		meip_gubn = "";
        	else
        		meip_gubn = this.ed_values9.value;

        	var rdopt  = "/rp ["+this.ed_values1.value+"]"+
        					 "["+this.ed_values2.value+"]"+
        					 "["+this.ed_values3.value+"]"+
        					 "["+this.ed_values4.value+"]"+
        					 "["+this.ed_values5.value+"]"+
        					 "["+this.ed_values6.value+"]"+
        					 "["+this.ed_values7.value+"]"+
        					 "["+this.ed_values8.value+"]"+
        					 "["+meip_gubn+"]"+
        					 "["+orderby+"]";

        	var rect;
        	if(system.navigatorname == 'nexacro')
        	{
        		if(system.monitorcount > 1)
        		{
        			var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        			rect = system.getScreenRect(monitor_index);
        		}
        		else
        			rect = system.getScreenRect(1);
        	}
        	else
        		rect = system.getScreenRect(1);

        	var objParam = {rdUrl:rdfile, rdParam:rdopt};
        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("search", "sd::SDRDF.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };

        this.btn_preview_onclick = function(obj,e)
        {
        	if(this.grd_view.visible == false)
        	{
        		if(system.navigatorname == 'nexacro')
        		{
        			this.getOwnerFrame().set_width(1280);
        			this.getOwnerFrame().set_height(800);
        		}
        		else
        			window.resizeTo(1305,850);
        		this.grd_view.set_visible(true);
        		this.btn_preview.set_text("미리보기 닫기");
        		this.btn_preview.set_width(80);
        		this.fnPreview();
        	}
        	else
        	{
        		if(system.navigatorname == 'nexacro')
        		{
        			this.getOwnerFrame().set_width(390);
        			this.getOwnerFrame().set_height(285);
        		}
        		else
        			window.resizeTo(415,335);
        		this.grd_view.set_visible(false);
        		this.btn_preview.set_text("미리보기");
        		this.btn_preview.set_width(55);
        		this.ds_data.clearData();
        	}
        };

        this.fnPreview = function()
        {
        	var meip_gubn;

        	if (this.ed_values9.index == 4)
        		meip_gubn = "";
        	else
        		meip_gubn = this.ed_values9.value;

        	var strUrl = "";
        	var strDs = "";

        	if (this.print_select.index == 4)
        	{
        		strUrl = "JSP/sd/SD6240P_SELECT2.jsp";
        		strDs = "ds_data2=ds_data2";
        		this.grd_view.set_formatid("default_02");
        		this.grd_view.set_binddataset("ds_data2");
        	}
        	else
        	{
        		strUrl = "JSP/sd/SD6240P_SELECT1.jsp";
        		strDs = "ds_data=ds_data";
        		this.grd_view.set_formatid("default");
        		this.grd_view.set_binddataset("ds_data");
        	}

        	var strArg = " scode="+nexacro.wrapQuote(nexacro.trim(this.ed_values1.value))+
        				 " ecode="+nexacro.wrapQuote(nexacro.trim(this.ed_values2.value))+
        				 " syy="+nexacro.wrapQuote(nexacro.trim(this.ed_values3.value))+
        				 " eyy="+nexacro.wrapQuote(nexacro.trim(this.ed_values4.value))+
        				 " sbgbr_cd="+nexacro.wrapQuote(nexacro.trim(this.ed_values5.value))+
        				 " ebgbr_cd="+nexacro.wrapQuote(nexacro.trim(this.ed_values6.value))+
        				 " ssymd="+nexacro.wrapQuote(nexacro.trim(this.ed_values7.value))+
        				 " esymd="+nexacro.wrapQuote(nexacro.trim(this.ed_values8.value))+
        				 " meip_c="+nexacro.wrapQuote(nexacro.trim(meip_gubn));
        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6240P_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ed_values3.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5.addEventHandler("onkillfocus",this.ed_values5_onkillfocus,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values6.addEventHandler("onkillfocus",this.ed_values6_onkillfocus,this);
            this.print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5_1.addEventHandler("onitemchanged",this.ed_values5_1_onitemchanged,this);
            this.ed_values6_1.addEventHandler("onitemchanged",this.ed_values6_1_onitemchanged,this);
            this.btn_ip_search.addEventHandler("onclick",this.btn_ip_search_onclick,this);
            this.btn_ip_search00.addEventHandler("onclick",this.btn_ip_search_onclick,this);
            this.ed_values9.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_preview.addEventHandler("onclick",this.btn_preview_onclick,this);
            this.btn_preview.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
        };
        this.loadIncludeScript("SD6240P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
