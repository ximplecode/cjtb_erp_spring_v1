(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6250P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,305);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">코드별</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">도서구분별</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">시행일자별</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">OLD코드별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbrcd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"INDEX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INDEX\">00</Col><Col id=\"CD_KEY\">미기재</Col></Row><Row><Col id=\"INDEX\">01</Col><Col id=\"CD_KEY\">SET</Col></Row><Row><Col id=\"INDEX\">02</Col><Col id=\"CD_KEY\">도서1</Col></Row><Row><Col id=\"INDEX\">03</Col><Col id=\"CD_KEY\">도서2</Col></Row><Row><Col id=\"INDEX\">04</Col><Col id=\"CD_KEY\">매절</Col></Row><Row><Col id=\"INDEX\">05</Col><Col id=\"CD_KEY\">연구용</Col></Row><Row><Col id=\"INDEX\">06</Col><Col id=\"CD_KEY\">부록</Col></Row><Row><Col id=\"INDEX\">07</Col><Col id=\"CD_KEY\">시험지</Col></Row><Row><Col id=\"INDEX\">08</Col><Col id=\"CD_KEY\">답지</Col></Row><Row><Col id=\"INDEX\">09</Col><Col id=\"CD_KEY\">카바</Col></Row><Row><Col id=\"INDEX\">10</Col><Col id=\"CD_KEY\">판권</Col></Row><Row><Col id=\"INDEX\">11</Col><Col id=\"CD_KEY\">기타부속물</Col></Row><Row><Col id=\"INDEX\">12</Col><Col id=\"CD_KEY\">카드</Col></Row><Row><Col id=\"INDEX\">13</Col><Col id=\"CD_KEY\">표지</Col></Row><Row><Col id=\"INDEX\">14</Col><Col id=\"CD_KEY\">면지</Col></Row><Row><Col id=\"INDEX\">15</Col><Col id=\"CD_KEY\">Tape</Col></Row><Row><Col id=\"INDEX\">16</Col><Col id=\"CD_KEY\">CD</Col></Row><Row><Col id=\"INDEX\">17</Col><Col id=\"CD_KEY\">DVD</Col></Row><Row><Col id=\"INDEX\">18</Col><Col id=\"CD_KEY\">비디오</Col></Row><Row><Col id=\"INDEX\">20</Col><Col id=\"CD_KEY\">홍보물</Col></Row><Row><Col id=\"INDEX\">21</Col><Col id=\"CD_KEY\">기타</Col></Row><Row><Col id=\"INDEX\">30</Col><Col id=\"CD_KEY\">상품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbrcd_e", this);
            obj._setContents("<ColumnInfo><Column id=\"INDEX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INDEX\">00</Col><Col id=\"CD_KEY\">미기재</Col></Row><Row><Col id=\"INDEX\">01</Col><Col id=\"CD_KEY\">SET</Col></Row><Row><Col id=\"INDEX\">02</Col><Col id=\"CD_KEY\">도서1</Col></Row><Row><Col id=\"INDEX\">03</Col><Col id=\"CD_KEY\">도서2</Col></Row><Row><Col id=\"INDEX\">04</Col><Col id=\"CD_KEY\">매절</Col></Row><Row><Col id=\"INDEX\">05</Col><Col id=\"CD_KEY\">연구용</Col></Row><Row><Col id=\"INDEX\">06</Col><Col id=\"CD_KEY\">부록</Col></Row><Row><Col id=\"INDEX\">07</Col><Col id=\"CD_KEY\">시험지</Col></Row><Row><Col id=\"INDEX\">08</Col><Col id=\"CD_KEY\">답지</Col></Row><Row><Col id=\"INDEX\">09</Col><Col id=\"CD_KEY\">카바</Col></Row><Row><Col id=\"INDEX\">10</Col><Col id=\"CD_KEY\">판권</Col></Row><Row><Col id=\"INDEX\">11</Col><Col id=\"CD_KEY\">기타부속물</Col></Row><Row><Col id=\"INDEX\">12</Col><Col id=\"CD_KEY\">카드</Col></Row><Row><Col id=\"INDEX\">13</Col><Col id=\"CD_KEY\">표지</Col></Row><Row><Col id=\"INDEX\">14</Col><Col id=\"CD_KEY\">면지</Col></Row><Row><Col id=\"INDEX\">15</Col><Col id=\"CD_KEY\">Tape</Col></Row><Row><Col id=\"INDEX\">16</Col><Col id=\"CD_KEY\">CD</Col></Row><Row><Col id=\"INDEX\">17</Col><Col id=\"CD_KEY\">DVD</Col></Row><Row><Col id=\"INDEX\">18</Col><Col id=\"CD_KEY\">비디오</Col></Row><Row><Col id=\"INDEX\">20</Col><Col id=\"CD_KEY\">홍보물</Col></Row><Row><Col id=\"INDEX\">21</Col><Col id=\"CD_KEY\">기타</Col></Row><Row><Col id=\"INDEX\">30</Col><Col id=\"CD_KEY\">상품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"B_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"CCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_GYMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custcode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">개인</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">속셈</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">학원</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">서점</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">유치</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"NAME\">스쿨</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"NAME\">외주</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"NAME\">기타</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">NET</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">GGE</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">해법</Col></Row><Row><Col id=\"CODE\">32</Col><Col id=\"NAME\">영어</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">I_HB</Col></Row><Row><Col id=\"CODE\">34</Col><Col id=\"NAME\">과학</Col></Row><Row><Col id=\"CODE\">35</Col><Col id=\"NAME\">바칼</Col></Row><Row><Col id=\"CODE\">36</Col><Col id=\"NAME\">우등생논술</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">개인</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">속셈</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">학원</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">서점</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">유치</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"NAME\">스쿨</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"NAME\">외주</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"NAME\">기타</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">NET</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">GGE</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">인터넷</Col></Row><Row><Col id=\"CODE\">36</Col><Col id=\"NAME\">논술</Col></Row><Row><Col id=\"CODE\">37</Col><Col id=\"NAME\">학력</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","10","310","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("총판별 출고율 출력");
            obj.set_color("#7fb39d");
            obj.set_font("bold 28px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"17","45","22","18",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","147","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("도서구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","107","147","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","232","153","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","175","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("년판구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","107","175","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","172","181","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","12","203","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","107","203","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","233","209","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","12","259","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_04","107","259","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values6","114","180","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values7","194","180","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values8","114","208","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values9","249","208","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","63","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","114","264","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_rpt");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_text("입금자별입금현황");
            obj.set_value("5");
            obj.set_index("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","321","264","45","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("출력");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","114","152","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values5","254","152","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_type("string");
            obj.set_format("@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values8_1","145","208","86","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_font("10px/normal \"Gulim\"");
            obj.set_innerdataset("ds_bgbrcd_s");
            obj.set_codecolumn("INDEX");
            obj.set_datacolumn("CD_KEY");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values9_1","280","208","86","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_font("10px/normal \"Gulim\"");
            obj.set_innerdataset("ds_bgbrcd_e");
            obj.set_codecolumn("INDEX");
            obj.set_datacolumn("CD_KEY");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ip_search","205","152","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ip_search00","345","152","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_preview","231","264","55","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("미리보기");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","0","295",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_visible("false");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"62\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"56\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"56\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"거래처\"/><Cell col=\"1\" rowspan=\"2\" text=\"거래처명\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"년판\"/><Cell col=\"4\" rowspan=\"2\" text=\"도서명\"/><Cell col=\"5\" rowspan=\"2\" text=\"시행일자\"/><Cell col=\"6\" rowspan=\"2\" text=\"출고율\"/><Cell col=\"7\" rowspan=\"2\" text=\"정가\"/><Cell col=\"8\" colspan=\"3\" text=\"반품\"/><Cell col=\"11\" rowspan=\"2\" text=\"적용구분\"/><Cell col=\"12\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"8\" text=\"허용여부\"/><Cell row=\"1\" col=\"9\" text=\"반품기한\"/><Cell row=\"1\" col=\"10\" text=\"한도율\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:BOOK_CD\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:YY\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:B_NM\"/><Cell col=\"5\" text=\"bind:SYMD\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CYUL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:CCOST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:B_YN\" expr=\"B_YN==&apos;0&apos;?&apos;적용안함&apos;:B_YN==&apos;1&apos;?&apos;반품한도&apos;:&apos;반품적용&apos;\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:B_GYMD\" textAlign=\"center\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"10\" text=\"bind:B_YUL\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:JUK_GB\" expr=\"JUK_GB==&apos;0&apos;?&apos;적용&apos;:JUK_GB==&apos;1&apos;?&apos;단가&apos;:JUK_GB==&apos;2&apos;?&apos;출고율&apos;:&apos;적용안함&apos;\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","12","91","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("총판구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","12","119","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","107","91","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03","107","119","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","12","231","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("시행일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","107","231","265","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","213","237","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values1","114","96","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","114","124","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3","194","124","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","172","125","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values10","114","236","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_format("####-##-##");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values11","237","236","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_type("string");
            obj.set_format("####-##-##");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_eymd","247","96","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("거래중지 총판제외");
            obj.set_value("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,305,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6250P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6250P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6250P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        this.SD6250P_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.print_select.set_index(0);
        	this.ed_values1.setFocus();
        	this.ed_values1.set_index(0);
        	this.ed_values2.set_value("0000");
        	this.ed_values3.set_value("9999");
        	this.ed_values4.set_value("0000000000");
        	this.ed_values5.set_value("9999999999");
        	this.ed_values6.set_value(f_date);
        	this.ed_values7.set_value(f_date);
        	this.ed_values8.set_value("00");
        	this.ed_values9.set_value("99");
        	this.ed_values10.set_value("19000101");
        	this.ed_values11.set_value("20991231");
        	this.chk_eymd.set_value(false);
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
        		else if (obj.name == "ed_values9") this.ed_values10.setFocus();
        		else if (obj.name == "ed_values10")this.ed_values11.setFocus();
        		else if (obj.name == "ed_values11")this.ed_values12.setFocus();
        		else if (obj.name == "ed_values12")this.ed_values13.setFocus();
        		else if (obj.name == "ed_values13")this.print_select.setFocus();
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
        		else if (obj.name == "ed_values10") this.ed_values9.setFocus();
        		else if (obj.name == "ed_values11") this.ed_values10.setFocus();
        		else if (obj.name == "ed_values12") this.ed_values11.setFocus();
        		else if (obj.name == "ed_values13") this.ed_values12.setFocus();
        		else if (obj.name == "rd_chk") this.ed_values13.setFocus();
        	}
        	else if (e.keycode == 112)
        	{
        		if (obj.name == "ed_values4") this.btn_sbookcode.click();
        		else if (obj.name == "ed_values5") this.btn_ebookcode.click();
        	}
        };

        this.ed_values8_1_onitemchanged = function(obj,e)
        {
        	this.ed_values8.set_value(this.ed_values8_1.value);
        };

        this.ed_values9_1_onitemchanged = function(obj,e)
        {
        	this.ed_values9.set_value(this.ed_values9_1.value);
        };

        this.ed_values8_onkillfocus = function(obj,e)
        {
        	this.ed_values8_1.set_value(this.ed_values8.value);
        };

        this.ed_values9_onkillfocus = function(obj,e)
        {
        	this.ed_values9_1.set_value(this.ed_values9.value);
        };


        //정렬조건.
        function fnCreate_orderby(ord_index)
        {
        	switch(ord_index)
        	{
        		case 0 : return "A.CUST_CD, A.BOOK_CD";
        				 break;
        		case 1 : return "A.CUST_CD, B.BGBR_CD,A.BOOK_CD";
        				 break;
        		case 2 : return "ORDER BY A.CUST_CD, A.SYMD, A.BOOK_CD";
        				 break;
        		case 3 : return "ORDER BY A.CUST_CD, B.OLD_CODE,A.BOOK_CD";
        				 break;
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	//출력
        	var orderby;
        	var rdfile;
        	var chk_eymd;

        	rdfile  = gv_urlMrd+"/sd/sd6250r.mrd";
        	orderby = fnCreate_orderby(this.print_select.index);
        	chk_eymd = "";
           	if ( this.chk_eymd.value == true )
            	chk_eymd = " AND RTRIM(C.EYMD) IS NULL ";

        	var rdopt  = "/rp ["+this.ed_values1.value+"]"+
        					 "["+this.ed_values2.value+"]"+
        					 "["+this.ed_values3.value+"]"+
        					 "["+this.ed_values4.value+"]"+
        					 "["+this.ed_values5.value+"]"+
        					 "["+this.ed_values6.value+"]"+
        					 "["+this.ed_values7.value+"]"+
        					 "["+this.ed_values8.value+"]"+
        					 "["+this.ed_values9.value+"]"+
        					 "["+this.ed_values10.value+"]"+
        					 "["+this.ed_values11.value+"]"+
        					 "["+orderby+"]"+
        					 "["+chk_eymd+"]";

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
        			this.getOwnerFrame().set_height(830);
        		}
        		else
        			window.resizeTo(1305,880);
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
        			this.getOwnerFrame().set_height(315);
        		}
        		else
        			window.resizeTo(415,365);
        		this.grd_view.set_visible(false);
        		this.btn_preview.set_text("미리보기");
        		this.btn_preview.set_width(55);
        	}
        };

        this.fnPreview = function()
        {
        	orderby = fnCreate_orderby(this.print_select.index);
        	chk_eymd = "";
           	if ( this.chk_eymd.value == true )
            	chk_eymd = " AND RTRIM(C.EYMD) IS NULL ";

        	var strUrl = "";
        	var strDs = "";

        	strUrl = "JSP/sd/SD6250P_SELECT.jsp";
        	strDs = "ds_data=ds_data";

        	var strArg = " custgb="+nexacro.wrapQuote(nexacro.trim(this.ed_values1.value))+
        				 " cust_scode="+nexacro.wrapQuote(nexacro.trim(this.ed_values2.value))+
        				 " cust_ecode="+nexacro.wrapQuote(nexacro.trim(this.ed_values3.value))+
        				 " book_scode="+nexacro.wrapQuote(nexacro.trim(this.ed_values4.value))+
        				 " book_ecode="+nexacro.wrapQuote(nexacro.trim(this.ed_values5.value))+
        				 " syy="+nexacro.wrapQuote(nexacro.trim(this.ed_values6.value))+
        				 " eyy="+nexacro.wrapQuote(nexacro.trim(this.ed_values7.value))+
        				 " sbgbr_cd="+nexacro.wrapQuote(nexacro.trim(this.ed_values8.value))+
        				 " ebgbr_cd="+nexacro.wrapQuote(nexacro.trim(this.ed_values9.value))+
        				 " ssymd="+nexacro.wrapQuote(nexacro.trim(this.ed_values10.value))+
        				 " esymd="+nexacro.wrapQuote(nexacro.trim(this.ed_values11.value))+
        				 " orderby="+nexacro.wrapQuote(nexacro.trim(orderby))+
        				 " chk_eymd="+nexacro.wrapQuote(nexacro.trim(chk_eymd));
        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
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
            this.addEventHandler("onload",this.SD6250P_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ed_values6.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8.addEventHandler("onkillfocus",this.ed_values8_onkillfocus,this);
            this.ed_values9.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values9.addEventHandler("onkillfocus",this.ed_values9_onkillfocus,this);
            this.print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8_1.addEventHandler("onitemchanged",this.ed_values8_1_onitemchanged,this);
            this.ed_values9_1.addEventHandler("onitemchanged",this.ed_values9_1_onitemchanged,this);
            this.btn_ip_search.addEventHandler("onclick",this.btn_ip_search_onclick,this);
            this.btn_ip_search00.addEventHandler("onclick",this.btn_ip_search_onclick,this);
            this.btn_preview.addEventHandler("onclick",this.btn_preview_onclick,this);
            this.btn_preview.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values10.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values11.addEventHandler("onkeydown",this.common_onkeydown,this);
        };
        this.loadIncludeScript("SD6250P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
