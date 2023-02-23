(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F_SUB01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_blood", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">B</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">AB</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">O</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">RH- A</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">RH- B</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">RH- AB</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">RH- O</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_army", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">육군</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">해군</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">공군</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">해병대</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">보충역</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">불교</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">기독교</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">천주교</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">천도교</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">이슬람교</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">무교</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gyekub", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">이병</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">일병</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">상병</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">병장</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">하사</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">중사</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">상사</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">준위</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">원사</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">소위</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">중위</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">대위</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">소령</Col></Row><Row><Col id=\"CODE\">32</Col><Col id=\"NAME\">중령</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">대령</Col></Row><Row><Col id=\"CODE\">41</Col><Col id=\"NAME\">준장</Col></Row><Row><Col id=\"CODE\">42</Col><Col id=\"NAME\">소장</Col></Row><Row><Col id=\"CODE\">43</Col><Col id=\"NAME\">중장</Col></Row><Row><Col id=\"CODE\">44</Col><Col id=\"NAME\">대장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jugb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">자택</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">전세</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">월세</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">하숙</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","50%",null,"16","3",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun","9",null,"120","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("본관");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bon","sta_sabun:5",null,"139","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun00","9","sta_sabun:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취미");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun00_00","9","sta_sabun00:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("혈액형");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun00_00_00","9","sta_sabun:93","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("군별");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun00_00_00_00","9","sta_sabun:124","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("병과");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chuimi","sta_sabun00:5","edt_bon:1","139","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_blood","sta_sabun00_00:5","edt_chuimi:1","139","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_blood");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_army","sta_sabun00_00_00:5","edt_bon:93","139","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_army");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_army","sta_sabun00_00_00_00:5","cb_army:1","139","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01","edt_bon:56",null,"120","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("특기");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00","edt_chuimi:56","sta_sabun01:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("종교");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_00","cb_blood:56","sta_sabun01_00:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("지병");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_00_00","cb_army:56","sta_sabun01_00_00:30","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("계급");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_00_00_00","edt_army:56","sta_sabun01_00_00_00:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("전역사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tukgi","sta_sabun01:5",null,"129","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_jong","sta_sabun01_00:5","edt_tukgi:1","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_jong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jibyung","sta_sabun01_00_00:5","cb_jong:1","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_geagub","sta_sabun01_00_00_00:5","edt_jibyung:30","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gyekub");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jsayu","454","cb_geagub:1","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_01","sta_sabun01:190",null,"120","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("신장");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_01","cb_jong:56","sta_sabun01_01:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("체중");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_00_01","edt_jibyung:56","sta_sabun01_00_01:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("주거");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_00_00_01","cb_geagub:56","sta_sabun01_00_00_01:30","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("복무기간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_00_00_00_00","edt_jsayu:56","sta_sabun01_00_00_00_01:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("미필사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_height","sta_sabun01_01:5",null,"66","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","edt_height:0",null,"41","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Cm");
            obj.set_textAlign("left");
            obj.set_verticalAlign("bottom");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_weight","sta_sabun01_00_01:5","edt_height:1","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","edt_weight:0","Static01:1","41","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Kg");
            obj.set_textAlign("left");
            obj.set_verticalAlign("bottom");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_jugb","sta_sabun01_00_00_01:5","edt_weight:1","376","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_jugb");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_01_00","sta_sabun01_01:190",null,"120","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("시력(좌)");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00_01_00","sta_sabun01_00_01:190","sta_sabun01_01_00:1","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("시력(우)");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eye1","sta_sabun01_01_00:5",null,"66","30",null,"Static00:67",null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eye2","sta_sabun01_00_01_00:5","edt_eye1:1","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_bokmudt1","sta_sabun01_00_00_00_01:5","cb_jugb:30","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","cald_bokmudt1:16","cb_jugb:30","41","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_bokmudt2","cald_bokmudt1:76","cb_jugb:30","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_msau","sta_sabun01_00_00_00_00_00:5","Static01_01:1","376","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,242,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_bon","value","ds_insa","BONGUAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_chuimi","value","ds_insa","CHUIMI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cb_blood","value","ds_insa","HYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cb_army","value","ds_insa","GUNBYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_army","value","ds_insa","BYUNGKWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_tukgi","value","ds_insa","TUKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cb_jong","value","ds_insa","JONGGYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_jibyung","value","ds_insa","JIBYUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cb_geagub","value","ds_insa","GEAGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_jsayu","value","ds_insa","JSAU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_height","value","ds_insa","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_weight","value","ds_insa","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cb_jugb","value","ds_insa","JUGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cald_bokmudt1","value","ds_insa","BOKMUDT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cald_bokmudt2","value","ds_insa","BOKMUDT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_msau","value","ds_insa","MSAU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_eye1","value","ds_insa","EYE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_eye2","value","ds_insa","EYE2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("HR101F_SUB01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
