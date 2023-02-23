(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6920F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEvltnKind1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind3", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind4", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind5", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind6", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind7", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnPath", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"CODE3\" type=\"STRING\" size=\"256\"/><Column id=\"NAME3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","0","1470","670",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0.62%","12.5%","12.66%","5%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("과목코드 관리");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:2.69%","12.5%","20.14%","5.00%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("브랜드 관리");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_03","Static01_02:1.69%","12.50%","12.66%","5%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("조사형태 관리");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_05","Static01_03:2.69%","12.50%","12.66%","5%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("모집채널 관리");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_05:2.69%","12.50%","39.19%","5%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("관계코드 관리");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_01","0.62%","Static01_01:-5.88%","12.66%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_02","Static03_01:2.69%","Static01_02:-5.88%","20.14%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_03","Static03_02:1.69%","Static01_03:-5.88%","12.66%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_12","Static03_03:2.69%","Static01_05:-5.88%","12.66%","5%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_04","Static03_12:2.69%","Static01_04:-5.88%","39.19%","5%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_05","0.62%","Static03_01:17.65%","12.66%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_background("#F6F7F9");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_06","Static03_05:2.69%","Static03_02:17.65%","20.14%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_background("#F6F7F9");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_07","Static03_06:1.69%","Static03_03:17.65%","12.66%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_background("#F6F7F9");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_13","Static03_07:2.69%","Static03_12:21.22%","12.68%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_background("#F6F7F9");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static03_08","Static03_13:2.69%","Static03_04:21.22%","39.25%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_background("#F6F7F9");
            obj.set_border("1px solid #10aea9");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_info1","0.61%","Static03_05:14.71%","12.66%","69.4%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_binddataset("dsEvltnKind1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_border("1px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell background=\"#e3f2e7\" text=\"코드\" color=\"black\" border=\"1px solid #10aea9\"/><Cell col=\"1\" background=\"#e3f2e7\" color=\"black\" text=\"구분\" border=\"1px solid #10aea9\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:CODE\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_info_cd1","Static03_05:-68.82%","Static03_05:-85.3%","1.85%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_type("string");
            obj.set_format("@@");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_info_cd2","Static03_06:-80.41%","Static03_06:-85.30%","2.52%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_format("@@@");
            obj.set_type("string");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_info_cd3","Static03_07:-68.82%","Static03_07:-85.30%","1.84%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_format("@@");
            obj.set_type("string");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static03_08:-100%","Static03_08:-100%","3.61%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("과목");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_path_cd1","Static02_04:9.44%","Static03_08:-85.30%","1.84%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_format("@@");
            obj.set_type("string");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_path1","edt_path_cd1:-7.40%","Static03_08:-85.30%","6.12%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_innerdataset("dsEvltnKind1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_05","cbo_path1:4.5%","Static03_08:-100%","3.61%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("브랜드");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_path_cd2","Static02_05:5","Static03_08:-85.30%","2.52%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_format("@@@");
            obj.set_type("string");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_path2","edt_path_cd2:-2.71%","Static03_08:-85.30%","8.16%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_innerdataset("dsEvltnKind2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_06","cbo_path2:4.21%","Static03_08:-100%","3.61%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#16538c");
            obj.set_textAlign("center");
            obj.set_text("학년");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_path_cd3","Static02_06:9.44%","Static03_08:-85.30%","1.84%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_format("@@");
            obj.set_type("string");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("edt_info_cd4","Static03_13:-68.82%","Static03_13:-85.30%","1.84%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_type("string");
            obj.set_format("@@");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_info1","Static03_05:-54.84%","Static03_05:-85.3%","Static03_05:51.61%","Static03_05:70.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_info2","Static03_06:-68.25%","Static03_06:-85.3%","13.34%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_info3","Static03_07:-54.84%","Static03_07:-85.30%","6.54%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_info4","Static03_13:-54.84%","Static03_13:-85.30%","6.54%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_path3","edt_path_cd3:-3.71%","Static03_08:-85.30%","6.13%","3.59%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_innerdataset("dsEvltnKind6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_new1","Static03_01:-97.31%","Static03_01:-90%","3.54%","3.9%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_text("추가");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_background("#f6f8f7");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_del1","Static03_01:-31.2%","Static03_01:-90%","3.54%","3.9%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_text("삭제");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_save1","Static03_01:-63.98%","Static03_01:-90%","3.54%","3.9%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text("저장");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_new2","Static03_02:-81.42%","Static03_02:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_text("추가");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_del2","Static03_02:-36.15%","Static03_02:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_text("삭제");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_save2","Static03_02:-58.78%","Static03_02:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_text("저장");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_new3","Static03_03:-97.31%","Static03_03:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_text("추가");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_save3","Static03_03:-63.98%","Static03_03:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_text("저장");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_del3","Static03_03:-30.65%","Static03_03:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_text("삭제");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_path_del","Static03_04:-9.73%","Static03_04:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_text("삭제");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_path_save","Static03_04:-20.49%","Static03_04:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_text("저장");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_path_new","Static03_04:-31.25%","Static03_04:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_text("추가");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_del4","Static03_12:-30.65%","Static03_12:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_text("삭제");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_save4","Static03_03:38.71%","Static03_12:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_text("저장");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_info_new4","Static03_12:-97.31%","Static03_12:-90%","3.54%","3.90%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_text("추가");
            obj.set_background("#f6f8f7");
            obj.set_color("#000000");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_info2","grd_info1:3.23%","Static03_06:14.71%","20.14%","69.4%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_binddataset("dsEvltnKind2");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_border("1px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"227\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell background=\"#e3f2e7\" text=\"코드\" color=\"black\" border=\"1px solid #10aea9\"/><Cell col=\"1\" background=\"#e3f2e7\" color=\"black\" text=\"구분\" border=\"1px solid #10aea9\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_info3","grd_info2:1.69%","Static03_07:14.71%","12.66%","69.4%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_binddataset("dsEvltnKind3");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_border("1px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell background=\"#e3f2e7\" text=\"코드\" color=\"black\" border=\"1px solid #10aea9\"/><Cell col=\"1\" background=\"#e3f2e7\" color=\"black\" text=\"구분\" border=\"1px solid #10aea9\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:CODE\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_info4","grd_info3:2.69%","Static03_13:14.71%","12.68%","69.25%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_binddataset("dsEvltnKind7");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_border("1px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell background=\"#e3f2e7\" text=\"코드\" color=\"black\" border=\"1px solid #10aea9\"/><Cell col=\"1\" background=\"#e3f2e7\" color=\"black\" text=\"구분\" border=\"1px solid #10aea9\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:CODE\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_path","grd_info4:2.69%","Static03_08:14.71%","39.25%","69.4%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_binddataset("dsEvltnPath");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_border("1px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"65\"/><Column size=\"50\"/><Column size=\"293\"/><Column size=\"50\"/><Column size=\"65\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell background=\"#e3f2e7\" text=\"코드\" color=\"black\" border=\"1px solid #10aea9\"/><Cell col=\"1\" background=\"#e3f2e7\" color=\"black\" text=\"과목구분\" border=\"1px solid #10aea9\"/><Cell col=\"2\" background=\"#e3f2e7\" border=\"1px solid #10aea9\" color=\"black\" text=\"코드\"/><Cell col=\"3\" background=\"#e3f2e7\" border=\"1px solid #10aea9\" color=\"black\" text=\"브랜드명\"/><Cell col=\"4\" background=\"#e3f2e7\" border=\"1px solid #10aea9\" color=\"black\" text=\"학년\"/><Cell col=\"5\" background=\"#e3f2e7\" border=\"1px solid #10aea9\" color=\"black\" text=\"학년명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:CODE1\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:NAME1\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:CODE2\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:NAME2\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:CODE3\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:NAME3\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00","4.01%","0.75%","33.95%","10.45%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_text("시장조사 코드관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_01","Static03_05:-100%","Static03_05:-100%","3.61%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("코드");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_02","Static03_06:-100%","Static03_06:-100%","3.61%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("코드");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_03","Static03_07:-100%","Static03_07:-100%","3.61%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("코드");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_07","Static03_13:-100%","Static03_13:-100%","3.61%","5.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_background("#c3e4cd");
            obj.set_border("1px solid #8CA5D0");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("코드");
            obj.set_font("14px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,760,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.edt_info_cd1","value","dsEvltnKind1","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.edt_info1","value","dsEvltnKind1","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.edt_info_cd2","value","dsEvltnKind2","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.edt_info2","value","dsEvltnKind2","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.edt_info_cd3","value","dsEvltnKind3","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.edt_info3","value","dsEvltnKind3","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.edt_info_cd4","value","dsEvltnKind7","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.edt_info4","value","dsEvltnKind7","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.edt_path_cd1","value","dsEvltnPath","CODE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.cbo_path1","value","dsEvltnPath","CODE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.edt_path_cd2","value","dsEvltnPath","CODE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.cbo_path2","value","dsEvltnPath","CODE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.edt_path_cd3","value","dsEvltnPath","CODE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.cbo_path3","value","dsEvltnPath","CODE3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6920F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6920F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6920F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.SD6920F_onload = function(obj,e)
        {
        	var strUrl, strDs, strArg;

        	strUrl   = "JSP/sd/sd6920_select_info.jsp";
        	strDs =  "dsEvltnKind1=dsEvltnKind1 dsEvltnKind2=dsEvltnKind2 dsEvltnKind3=dsEvltnKind3 dsEvltnKind4=dsEvltnKind4 dsEvltnKind5=dsEvltnKind5 dsEvltnKind6=dsEvltnKind6 dsEvltnKind7=dsEvltnKind7 dsEvltnPath=dsEvltnPath";
        	strArg = "";

        	this.gfn_TransactionP("mst_select", strUrl, strDs, strDs, strArg, "fnSearchCallback", true, "P", false, this);
        };

        this.div_main_btn_info_new1_onclick = function(obj,e)
        {
        	var max = nexacro.toNumber(this.dsEvltnKind1.getMax("CODE")) + 1;
        	if(max < 10){
        		max = "0"+max;
        	}
        	this.dsEvltnKind1.setColumn(this.dsEvltnKind1.addRow(), "CODE", max);
        };

        this.div_main_btn_info_new2_onclick = function(obj,e)
        {
        	var max = nexacro.toNumber(this.dsEvltnKind2.getMax("CODE")) + 1;
        	if(max < 10){
        		max = "00"+max;
        	}else if(max>9 && max<100){
        		max = "0"+max;
        	}
         	this.dsEvltnKind2.setColumn(this.dsEvltnKind2.addRow(), "CODE", max);
        };

        this.div_main_btn_info_new3_onclick = function(obj,e)
        {
        	var max = nexacro.toNumber(this.dsEvltnKind3.getMax("CODE")) + 1;
        	if(max < 10){
        		max = "0"+max;
        	}
        	this.dsEvltnKind3.setColumn(this.dsEvltnKind3.addRow(), "CODE", max);
        };

        this.div_main_btn_info_new4_onclick = function(obj,e)
        {
        	var max = nexacro.toNumber(this.dsEvltnKind7.getMax("CODE")) + 1;
        	if(max <10){
        		max = "0"+max;
        	}
        	this.dsEvltnKind7.setColumn(this.dsEvltnKind7.addRow(), "CODE", max);
        };

        this.div_main_btn_info_save1_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd1.text == "") {
        		alert("과목코드가 누락되었습니다.");
        		return;
        	}

        	if (this.div_main.form.edt_info1.text == "") {
        		alert("과목명이 누락되었습니다.");
        		return;
        	}
        	var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        	var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        	var outDs 	= "";
        	var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        	trace(strArg);
        	this.gfn_TransactionP("save", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.div_main_btn_info_save2_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd2.text == "") {
        		alert("브랜드 코드가 누락되었습니다.");
        		return;
        	}

        	if (this.div_main.form.edt_info2.text == "") {
        		alert("브랜드명이 누락되었습니다.");
        		return;
        	}
        	var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        	var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        	var outDs 	= "";
        	var strArg = " usercode="  + nexacro.WrapQuote(gv_sabun);
        	trace(strArg);
        	this.gfn_TransactionP("save", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        };


        this.div_main_btn_info_save3_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd3.text == "") {
        		alert("조사형태 코드가 누락되었습니다.");
        		return;
        	}

        	if (this.div_main.form.edt_info3.text == "") {
        		alert("조사형태명이 누락되었습니다.");
        		return;
        	}
        	var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        	var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        	var outDs 	= "";
        	var strArg = " usercode="  + nexacro.WrapQuote(gv_sabun);
        	trace(strArg);
        	this.gfn_TransactionP("save", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.div_main_btn_info_save4_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd4.text == "") {
        		alert("코드가 누락되었습니다.");
        		return;
        	}

        	if (this.div_main.form.edt_info4.text == "") {
        		alert("명칭이 누락되었습니다.");
        		return;
        	}
        	var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        	var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        	var outDs 	= "";
        	var strArg = " usercode="  + nexacro.WrapQuote(gv_sabun);
        	trace(strArg);
        	this.gfn_TransactionP("save",  strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this)
        };

        this.div_main_btn_info_del1_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd1.text == "")
        	{
        		alert( "선택된 데이터가 없습니다.! \n 데이터 선택후 다시 삭제하세요! ") ;
        		return;
        	}

        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? ", "삭제처리", "warning" ))
        	{
        		var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        		var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        		this.dsEvltnKind1.deleteRow(this.dsEvltnKind1.rowposition);
        		var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        		var outDs 	= "";

        		trace(strArg);
        		this.gfn_TransactionP("save", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        	}
        };

        this.div_main_btn_info_del2_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd2.text == "")
        	{
        		alert( "선택된 데이터가 없습니다.! \n 데이터 선택후 다시 삭제하세요! ") ;
        		return;
        	}

        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? ", "삭제처리", "warning" ))
        	{
        		var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        		var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        		this.dsEvltnKind2.deleteRow(this.dsEvltnKind2.rowposition);
        		var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        		var outDs 	= "";

        		trace(strArg);
        		this.gfn_TransactionP("delete", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        	}
        };

        this.div_main_btn_info_del3_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd4.text == "")
        	{
        		alert( "선택된 데이터가 없습니다.! \n 데이터 선택후 다시 삭제하세요! ") ;
        		return;
        	}

        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? ", "삭제처리", "warning" ))
        	{
        		var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        		var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        		this.dsEvltnKind7.deleteRow(this.dsEvltnKind7.rowposition);
        		var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        		var outDs 	= "";

        		trace(strArg);
        		this.gfn_TransactionP("delete", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        	}
        };

        this.div_main_btn_info_del4_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_info_cd4.text == "")
        	{
        		alert( "선택된 데이터가 없습니다.! \n 데이터 선택후 다시 삭제하세요! ") ;
        		return;
        	}

        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? ", "삭제처리", "warning" ))
        	{
        		var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        		var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        		this.dsEvltnKind3.deleteRow(this.dsEvltnKind3.rowposition);
        		var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        		var outDs 	= "";

        		trace(strArg);
        		this.gfn_TransactionP("delete", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        	}
        };

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        	else if (trid != null)
        	{
        		trid = trid.split("|");
        		trid = trid[0]
        	}
        	if(trid == "save")
        		alert('저장되었습니다');
        	if(trid == "delete")
        		alert('삭제되었습니다');
        }

        this.div_main_cbo_path_onitemchanged = function(obj,e)
        {
        	if (obj.name == "cbo_path1")
        		this.dsEvltnPath.setColumn(this.dsEvltnPath.rowposition,"NAME1", obj.text);
        	else if (obj.name == "cbo_path2")
        		this.dsEvltnPath.setColumn(this.dsEvltnPath.rowposition,"NAME2",obj.text);
        	else if (obj.name == "cbo_path3")
        		this.dsEvltnPath.setColumn(this.dsEvltnPath.rowposition,"NAME3",obj.text);
        };
        this.div_main_btn_path_new_onclick = function(obj,e)
        {
        	this.dsEvltnPath.addRow();
        };

        this.div_main_btn_path_save_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_path_cd1.text =="") {
        		alert("과목이 누락되었습니다.");
        		return;
        	}

        	if (this.div_main.form.edt_path_cd2.text =="") {
        		alert("브랜드가 누락되었습니다.");
        		return;
        	}

        	if (this.div_main.form.edt_path_cd3.text =="") {
        		alert("학년코드가 누락되었습니다.");
        		return;
        	}
        	var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        	var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        	var outDs 	= "";
        	var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        	trace(strArg);
        	this.gfn_TransactionP("save", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.div_main_btn_path_del_onclick = function(obj,e)
        {
        	if (this.div_main.form.edt_path_cd1.value == "")
        	{
        		alert("선택된 데이터가 없습니다.! \n 데이터 선택후 다시 삭제하세요! ") ;
        		return;
        	}

        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? ", "삭제처리", "warning" ))
        	{
        		var strUrl = "JSP/sd/sd6920_mst_tr.jsp";
        		var strArg = " usercode="  + nexacro.wrapQuote(gv_sabun);
        		this.dsEvltnPath.deleteRow(this.dsEvltnPath.rowposition);
        		var inDs 	= "dsEvltnKind1=dsEvltnKind1:u dsEvltnKind2=dsEvltnKind2:u dsEvltnKind3=dsEvltnKind3:u dsEvltnKind7=dsEvltnKind7:u dsEvltnPath=dsEvltnPath:u";
        		var outDs 	= "";

        		trace(strArg);
        		this.gfn_TransactionP("delete", strUrl, inDs, outDs, strArg, "fnCallback", true, "P", false, this);
        	}
        };
        /* // 닫기버튼 클릭 시
        this.div_main_btn_close_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
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
        this.SD6920F_onsize = function(obj,e)
        {
        	if(this.width < 1470)
        		this.div_main.set_width(this.width - 20);
        	else
        		this.div_main.set_width(1470);

        	if(this.height < 670)
        		this.div_main.set_height(this.height - 20);
        	else
        		this.div_main.set_height(670);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6920F_onload,this);
            this.addEventHandler("onsize",this.SD6920F_onsize,this);
            this.div_main.form.cbo_path1.addEventHandler("onitemchanged",this.div_main_cbo_path_onitemchanged,this);
            this.div_main.form.cbo_path2.addEventHandler("onitemchanged",this.div_main_cbo_path_onitemchanged,this);
            this.div_main.form.cbo_path3.addEventHandler("onitemchanged",this.div_main_cbo_path_onitemchanged,this);
            this.div_main.form.btn_info_new1.addEventHandler("onclick",this.div_main_btn_info_new1_onclick,this);
            this.div_main.form.btn_info_del1.addEventHandler("onclick",this.div_main_btn_info_del1_onclick,this);
            this.div_main.form.btn_info_save1.addEventHandler("onclick",this.div_main_btn_info_save1_onclick,this);
            this.div_main.form.btn_info_new2.addEventHandler("onclick",this.div_main_btn_info_new2_onclick,this);
            this.div_main.form.btn_info_del2.addEventHandler("onclick",this.div_main_btn_info_del2_onclick,this);
            this.div_main.form.btn_info_save2.addEventHandler("onclick",this.div_main_btn_info_save2_onclick,this);
            this.div_main.form.btn_info_new3.addEventHandler("onclick",this.div_main_btn_info_new3_onclick,this);
            this.div_main.form.btn_info_save3.addEventHandler("onclick",this.div_main_btn_info_save3_onclick,this);
            this.div_main.form.btn_info_del3.addEventHandler("onclick",this.div_main_btn_info_del3_onclick,this);
            this.div_main.form.btn_path_del.addEventHandler("onclick",this.div_main_btn_path_del_onclick,this);
            this.div_main.form.btn_path_save.addEventHandler("onclick",this.div_main_btn_path_save_onclick,this);
            this.div_main.form.btn_path_new.addEventHandler("onclick",this.div_main_btn_path_new_onclick,this);
            this.div_main.form.btn_info_del4.addEventHandler("onclick",this.div_main_btn_info_del4_onclick,this);
            this.div_main.form.btn_info_save4.addEventHandler("onclick",this.div_main_btn_info_save4_onclick,this);
            this.div_main.form.btn_info_new4.addEventHandler("onclick",this.div_main_btn_info_new4_onclick,this);
            this.dsEvltnKind1.addEventHandler("oncolumnchanged",this.dsEvltnKind6_oncolumnchanged,this);
            this.dsEvltnKind6.addEventHandler("oncolumnchanged",this.dsEvltnKind6_oncolumnchanged,this);
        };
        this.loadIncludeScript("SD6920F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
