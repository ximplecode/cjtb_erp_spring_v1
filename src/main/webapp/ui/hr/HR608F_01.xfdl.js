(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR608F_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,352);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_guntae", this);
            obj._setContents("<ColumnInfo><Column id=\"TMS_TAGNO\" type=\"STRING\" size=\"256\"/><Column id=\"TMS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TMS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TMS_FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"TMS_FUNCNM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","4","5","346","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("근태 세부 내역");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","4","sta_title:0","360",null,null,"2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_guntae");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"42\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카드번호\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"시간\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"사번\"/></Band><Band id=\"body\"><Cell text=\"bind:TMS_TAGNO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TMS_DATE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TMS_TIME\" displaytype=\"mask\" maskeditmaskchar=\" \" maskedittype=\"string\" maskeditformat=\"##:##:##\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TMS_FUNCNM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SABUN\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd","Grid00:2","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출근시간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","sta_ymd:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_intime","sta_ymd:2","50",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("##:##:##");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00","366","80","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("퇴근시간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","446","80",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00","366","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("출근현황");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","446","110",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00_00","366","140","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("연장시간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","446","140",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00_01_00","366","170","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("연장수당");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","446","170",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00_01_00_00","366","230","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("심야수당");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","446","230",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00_01_00_00_00","366","260","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("연장합계");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","446","260",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00_01_00_00_01","366","290","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("교통비");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01","446","290",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00_01_00_00_01_00","366","320","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("당직비");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01_00","446","320",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_outtime","448","80",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("##:##:##");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_tmscode","448","115",null,"20","4",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_usecd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_overtime","448","140",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("##:##:##");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_overpay","448","170",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("number");
            obj.set_color("black");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_payTotal","448","260",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("number");
            obj.set_color("black");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_kyopay","448","290",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("number");
            obj.set_color("black");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_dangpay","448","320",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("number");
            obj.set_color("black");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd00_00_01_01","366","200","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("심야시간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","446","200",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_nighttime","448","200",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("##:##:##");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_nightpay","448","230",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("number");
            obj.set_color("black");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","120","22","2",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","120","22","124",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,352,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.sta_title.set_taborder("0");
                p.sta_title.set_text("근태 세부 내역");
                p.sta_title.set_color("#7fb39d");
                p.sta_title.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
                p.sta_title.move("4","5","346","45",null,null);

                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("ds_guntae");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("4","sta_title:0","360",null,null,"2");

                p.sta_ymd.set_taborder("2");
                p.sta_ymd.set_text("출근시간");
                p.sta_ymd.set_background("#3cbcb8");
                p.sta_ymd.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd.set_color("white");
                p.sta_ymd.set_textAlign("center");
                p.sta_ymd.set_border("1px solid #10aea9");
                p.sta_ymd.move("Grid00:2","50","80","30",null,null);

                p.Static01.set_taborder("3");
                p.Static01.set_border("1px solid #10aea9");
                p.Static01.set_background("#9ee0de");
                p.Static01.move("sta_ymd:0","50",null,"30","2",null);

                p.medt_intime.set_taborder("4");
                p.medt_intime.set_background("transparent");
                p.medt_intime.set_border("0px none transparent,0px none,0px none");
                p.medt_intime.set_type("string");
                p.medt_intime.set_color("black");
                p.medt_intime.set_format("##:##:##");
                p.medt_intime.set_textAlign("center");
                p.medt_intime.move("sta_ymd:2","50",null,"30","4",null);

                p.sta_ymd00.set_taborder("5");
                p.sta_ymd00.set_text("퇴근시간");
                p.sta_ymd00.set_background("#3cbcb8");
                p.sta_ymd00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00.set_color("white");
                p.sta_ymd00.set_textAlign("center");
                p.sta_ymd00.set_border("1px solid #10aea9");
                p.sta_ymd00.move("366","80","80","30",null,null);

                p.Static01_00.set_taborder("6");
                p.Static01_00.set_border("1px solid #10aea9");
                p.Static01_00.set_background("#9ee0de");
                p.Static01_00.move("446","80",null,"30","2",null);

                p.sta_ymd00_00.set_taborder("7");
                p.sta_ymd00_00.set_text("출근현황");
                p.sta_ymd00_00.set_background("#3cbcb8");
                p.sta_ymd00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00.set_color("white");
                p.sta_ymd00_00.set_textAlign("center");
                p.sta_ymd00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00.move("366","110","80","30",null,null);

                p.Static01_00_00.set_taborder("8");
                p.Static01_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00.set_background("#9ee0de");
                p.Static01_00_00.move("446","110",null,"30","2",null);

                p.sta_ymd00_00_00.set_taborder("9");
                p.sta_ymd00_00_00.set_text("연장시간");
                p.sta_ymd00_00_00.set_background("#3cbcb8");
                p.sta_ymd00_00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_00.set_color("white");
                p.sta_ymd00_00_00.set_textAlign("center");
                p.sta_ymd00_00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_00.move("366","140","80","30",null,null);

                p.Static01_00_00_00.set_taborder("10");
                p.Static01_00_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00_00.set_background("#9ee0de");
                p.Static01_00_00_00.move("446","140",null,"30","2",null);

                p.sta_ymd00_00_01_00.set_taborder("11");
                p.sta_ymd00_00_01_00.set_text("연장수당");
                p.sta_ymd00_00_01_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00.set_color("white");
                p.sta_ymd00_00_01_00.set_textAlign("center");
                p.sta_ymd00_00_01_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00.move("366","170","80","30",null,null);

                p.Static01_00_00_01_00.set_taborder("12");
                p.Static01_00_00_01_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00.set_background("#9ee0de");
                p.Static01_00_00_01_00.move("446","170",null,"30","2",null);

                p.sta_ymd00_00_01_00_00.set_taborder("13");
                p.sta_ymd00_00_01_00_00.set_text("심야수당");
                p.sta_ymd00_00_01_00_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00.set_color("white");
                p.sta_ymd00_00_01_00_00.set_textAlign("center");
                p.sta_ymd00_00_01_00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00.move("366","230","80","30",null,null);

                p.Static01_00_00_01_00_00.set_taborder("14");
                p.Static01_00_00_01_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00.set_background("#9ee0de");
                p.Static01_00_00_01_00_00.move("446","230",null,"30","2",null);

                p.sta_ymd00_00_01_00_00_00.set_taborder("15");
                p.sta_ymd00_00_01_00_00_00.set_text("연장합계");
                p.sta_ymd00_00_01_00_00_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00_00.set_color("white");
                p.sta_ymd00_00_01_00_00_00.set_textAlign("center");
                p.sta_ymd00_00_01_00_00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00_00.move("366","260","80","30",null,null);

                p.Static01_00_00_01_00_00_00.set_taborder("16");
                p.Static01_00_00_01_00_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00_00.set_background("#9ee0de");
                p.Static01_00_00_01_00_00_00.move("446","260",null,"30","2",null);

                p.sta_ymd00_00_01_00_00_01.set_taborder("17");
                p.sta_ymd00_00_01_00_00_01.set_text("교통비");
                p.sta_ymd00_00_01_00_00_01.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00_01.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00_01.set_color("white");
                p.sta_ymd00_00_01_00_00_01.set_textAlign("center");
                p.sta_ymd00_00_01_00_00_01.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00_01.move("366","290","80","30",null,null);

                p.Static01_00_00_01_00_00_01.set_taborder("18");
                p.Static01_00_00_01_00_00_01.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00_01.set_background("#9ee0de");
                p.Static01_00_00_01_00_00_01.move("446","290",null,"30","2",null);

                p.sta_ymd00_00_01_00_00_01_00.set_taborder("19");
                p.sta_ymd00_00_01_00_00_01_00.set_text("당직비");
                p.sta_ymd00_00_01_00_00_01_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00_01_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00_01_00.set_color("white");
                p.sta_ymd00_00_01_00_00_01_00.set_textAlign("center");
                p.sta_ymd00_00_01_00_00_01_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00_01_00.move("366","320","80","30",null,null);

                p.Static01_00_00_01_00_00_01_00.set_taborder("20");
                p.Static01_00_00_01_00_00_01_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00_01_00.set_background("#9ee0de");
                p.Static01_00_00_01_00_00_01_00.move("446","320",null,"30","2",null);

                p.medt_outtime.set_taborder("21");
                p.medt_outtime.set_background("transparent");
                p.medt_outtime.set_border("0px none transparent,0px none,0px none");
                p.medt_outtime.set_type("string");
                p.medt_outtime.set_color("black");
                p.medt_outtime.set_format("##:##:##");
                p.medt_outtime.set_textAlign("center");
                p.medt_outtime.move("448","80",null,"30","4",null);

                p.cb_tmscode.set_taborder("22");
                p.cb_tmscode.set_border("0px none transparent,0px none,0px none");
                p.cb_tmscode.set_background("transparent");
                p.cb_tmscode.set_innerdataset("ds_usecd");
                p.cb_tmscode.set_codecolumn("CODE");
                p.cb_tmscode.set_datacolumn("NAME");
                p.cb_tmscode.set_text("Combo00");
                p.cb_tmscode.move("448","115",null,"20","4",null);

                p.medt_overtime.set_taborder("23");
                p.medt_overtime.set_background("transparent");
                p.medt_overtime.set_border("0px none transparent,0px none,0px none");
                p.medt_overtime.set_type("string");
                p.medt_overtime.set_color("black");
                p.medt_overtime.set_format("##:##:##");
                p.medt_overtime.set_textAlign("center");
                p.medt_overtime.move("448","140",null,"30","4",null);

                p.medt_overpay.set_taborder("24");
                p.medt_overpay.set_background("transparent");
                p.medt_overpay.set_border("0px none transparent,0px none,0px none");
                p.medt_overpay.set_type("number");
                p.medt_overpay.set_color("black");
                p.medt_overpay.set_format("#,##0");
                p.medt_overpay.move("448","170",null,"30","4",null);

                p.medt_payTotal.set_taborder("25");
                p.medt_payTotal.set_background("transparent");
                p.medt_payTotal.set_border("0px none transparent,0px none,0px none");
                p.medt_payTotal.set_type("number");
                p.medt_payTotal.set_color("black");
                p.medt_payTotal.set_format("#,##0");
                p.medt_payTotal.move("448","260",null,"30","4",null);

                p.medt_kyopay.set_taborder("26");
                p.medt_kyopay.set_background("transparent");
                p.medt_kyopay.set_border("0px none transparent,0px none,0px none");
                p.medt_kyopay.set_type("number");
                p.medt_kyopay.set_color("black");
                p.medt_kyopay.set_format("#,##0");
                p.medt_kyopay.move("448","290",null,"30","4",null);

                p.medt_dangpay.set_taborder("27");
                p.medt_dangpay.set_background("transparent");
                p.medt_dangpay.set_border("0px none transparent,0px none,0px none");
                p.medt_dangpay.set_type("number");
                p.medt_dangpay.set_color("black");
                p.medt_dangpay.set_format("#,##0");
                p.medt_dangpay.move("448","320",null,"30","4",null);

                p.sta_ymd00_00_01_01.set_taborder("28");
                p.sta_ymd00_00_01_01.set_text("심야시간");
                p.sta_ymd00_00_01_01.set_background("#3cbcb8");
                p.sta_ymd00_00_01_01.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_01.set_color("white");
                p.sta_ymd00_00_01_01.set_textAlign("center");
                p.sta_ymd00_00_01_01.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_01.move("366","200","80","30",null,null);

                p.Static01_00_00_01_01.set_taborder("29");
                p.Static01_00_00_01_01.set_border("1px solid #10aea9");
                p.Static01_00_00_01_01.set_background("#9ee0de");
                p.Static01_00_00_01_01.move("446","200",null,"30","2",null);

                p.medt_nighttime.set_taborder("30");
                p.medt_nighttime.set_background("transparent");
                p.medt_nighttime.set_border("0px none transparent,0px none,0px none");
                p.medt_nighttime.set_type("string");
                p.medt_nighttime.set_color("black");
                p.medt_nighttime.set_format("##:##:##");
                p.medt_nighttime.set_textAlign("center");
                p.medt_nighttime.move("448","200",null,"30","4",null);

                p.medt_nightpay.set_taborder("31");
                p.medt_nightpay.set_background("transparent");
                p.medt_nightpay.set_border("0px none transparent,0px none,0px none");
                p.medt_nightpay.set_type("number");
                p.medt_nightpay.set_color("black");
                p.medt_nightpay.set_format("#,##0");
                p.medt_nightpay.move("448","230",null,"30","4",null);

                p.btn_close.set_taborder("32");
                p.btn_close.set_text("닫기");
                p.btn_close.move(null,"16","120","22","2",null);

                p.btn_save.set_taborder("33");
                p.btn_save.set_text("저장");
                p.btn_save.move(null,"16","120","22","124",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",560,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta_title.set_taborder("0");
                p.sta_title.set_text("근태 세부 내역");
                p.sta_title.set_color("#7fb39d");
                p.sta_title.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
                p.sta_title.move("4","5","346","45",null,null);

                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("ds_guntae");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("4","sta_title:0","360",null,null,"2");

                p.sta_ymd.set_taborder("2");
                p.sta_ymd.set_text("출근시간");
                p.sta_ymd.set_background("#3cbcb8");
                p.sta_ymd.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd.set_color("white");
                p.sta_ymd.set_textAlign("center");
                p.sta_ymd.set_border("1px solid #10aea9");
                p.sta_ymd.move("Grid00:2","50","80","30",null,null);

                p.Static01.set_taborder("3");
                p.Static01.set_border("1px solid #10aea9");
                p.Static01.set_background("#9ee0de");
                p.Static01.move("sta_ymd:0","50",null,"30","2",null);

                p.medt_intime.set_taborder("4");
                p.medt_intime.set_background("transparent");
                p.medt_intime.set_border("0px none transparent,0px none,0px none");
                p.medt_intime.set_type("string");
                p.medt_intime.set_color("black");
                p.medt_intime.set_format("##:##:##");
                p.medt_intime.set_textAlign("center");
                p.medt_intime.move("sta_ymd:2","50",null,"30","4",null);

                p.sta_ymd00.set_taborder("5");
                p.sta_ymd00.set_text("퇴근시간");
                p.sta_ymd00.set_background("#3cbcb8");
                p.sta_ymd00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00.set_color("white");
                p.sta_ymd00.set_textAlign("center");
                p.sta_ymd00.set_border("1px solid #10aea9");
                p.sta_ymd00.move("366","80","80","30",null,null);

                p.Static01_00.set_taborder("6");
                p.Static01_00.set_border("1px solid #10aea9");
                p.Static01_00.set_background("#9ee0de");
                p.Static01_00.move("446","80",null,"30","2",null);

                p.sta_ymd00_00.set_taborder("7");
                p.sta_ymd00_00.set_text("출근현황");
                p.sta_ymd00_00.set_background("#3cbcb8");
                p.sta_ymd00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00.set_color("white");
                p.sta_ymd00_00.set_textAlign("center");
                p.sta_ymd00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00.move("366","110","80","30",null,null);

                p.Static01_00_00.set_taborder("8");
                p.Static01_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00.set_background("#9ee0de");
                p.Static01_00_00.move("446","110",null,"30","2",null);

                p.sta_ymd00_00_00.set_taborder("9");
                p.sta_ymd00_00_00.set_text("연장시간");
                p.sta_ymd00_00_00.set_background("#3cbcb8");
                p.sta_ymd00_00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_00.set_color("white");
                p.sta_ymd00_00_00.set_textAlign("center");
                p.sta_ymd00_00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_00.move("366","140","80","30",null,null);

                p.Static01_00_00_00.set_taborder("10");
                p.Static01_00_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00_00.set_background("#9ee0de");
                p.Static01_00_00_00.move("446","140",null,"30","2",null);

                p.sta_ymd00_00_01_00.set_taborder("11");
                p.sta_ymd00_00_01_00.set_text("연장수당");
                p.sta_ymd00_00_01_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00.set_color("white");
                p.sta_ymd00_00_01_00.set_textAlign("center");
                p.sta_ymd00_00_01_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00.move("366","170","80","30",null,null);

                p.Static01_00_00_01_00.set_taborder("12");
                p.Static01_00_00_01_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00.set_background("#9ee0de");
                p.Static01_00_00_01_00.move("446","170",null,"30","2",null);

                p.sta_ymd00_00_01_00_00.set_taborder("13");
                p.sta_ymd00_00_01_00_00.set_text("심야수당");
                p.sta_ymd00_00_01_00_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00.set_color("white");
                p.sta_ymd00_00_01_00_00.set_textAlign("center");
                p.sta_ymd00_00_01_00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00.move("366","230","80","30",null,null);

                p.Static01_00_00_01_00_00.set_taborder("14");
                p.Static01_00_00_01_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00.set_background("#9ee0de");
                p.Static01_00_00_01_00_00.move("446","230",null,"30","2",null);

                p.sta_ymd00_00_01_00_00_00.set_taborder("15");
                p.sta_ymd00_00_01_00_00_00.set_text("연장합계");
                p.sta_ymd00_00_01_00_00_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00_00.set_color("white");
                p.sta_ymd00_00_01_00_00_00.set_textAlign("center");
                p.sta_ymd00_00_01_00_00_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00_00.move("366","260","80","30",null,null);

                p.Static01_00_00_01_00_00_00.set_taborder("16");
                p.Static01_00_00_01_00_00_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00_00.set_background("#9ee0de");
                p.Static01_00_00_01_00_00_00.move("446","260",null,"30","2",null);

                p.sta_ymd00_00_01_00_00_01.set_taborder("17");
                p.sta_ymd00_00_01_00_00_01.set_text("교통비");
                p.sta_ymd00_00_01_00_00_01.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00_01.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00_01.set_color("white");
                p.sta_ymd00_00_01_00_00_01.set_textAlign("center");
                p.sta_ymd00_00_01_00_00_01.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00_01.move("366","290","80","30",null,null);

                p.Static01_00_00_01_00_00_01.set_taborder("18");
                p.Static01_00_00_01_00_00_01.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00_01.set_background("#9ee0de");
                p.Static01_00_00_01_00_00_01.move("446","290",null,"30","2",null);

                p.sta_ymd00_00_01_00_00_01_00.set_taborder("19");
                p.sta_ymd00_00_01_00_00_01_00.set_text("당직비");
                p.sta_ymd00_00_01_00_00_01_00.set_background("#3cbcb8");
                p.sta_ymd00_00_01_00_00_01_00.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_00_00_01_00.set_color("white");
                p.sta_ymd00_00_01_00_00_01_00.set_textAlign("center");
                p.sta_ymd00_00_01_00_00_01_00.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_00_00_01_00.move("366","320","80","30",null,null);

                p.Static01_00_00_01_00_00_01_00.set_taborder("20");
                p.Static01_00_00_01_00_00_01_00.set_border("1px solid #10aea9");
                p.Static01_00_00_01_00_00_01_00.set_background("#9ee0de");
                p.Static01_00_00_01_00_00_01_00.move("446","320",null,"30","2",null);

                p.medt_outtime.set_taborder("21");
                p.medt_outtime.set_background("transparent");
                p.medt_outtime.set_border("0px none transparent,0px none,0px none");
                p.medt_outtime.set_type("string");
                p.medt_outtime.set_color("black");
                p.medt_outtime.set_format("##:##:##");
                p.medt_outtime.set_textAlign("center");
                p.medt_outtime.move("448","80",null,"30","4",null);

                p.cb_tmscode.set_taborder("22");
                p.cb_tmscode.set_border("0px none transparent,0px none,0px none");
                p.cb_tmscode.set_background("transparent");
                p.cb_tmscode.set_innerdataset("ds_usecd");
                p.cb_tmscode.set_codecolumn("CODE");
                p.cb_tmscode.set_datacolumn("NAME");
                p.cb_tmscode.set_text("Combo00");
                p.cb_tmscode.move("448","115",null,"20","4",null);

                p.medt_overtime.set_taborder("23");
                p.medt_overtime.set_background("transparent");
                p.medt_overtime.set_border("0px none transparent,0px none,0px none");
                p.medt_overtime.set_type("string");
                p.medt_overtime.set_color("black");
                p.medt_overtime.set_format("##:##:##");
                p.medt_overtime.set_textAlign("center");
                p.medt_overtime.move("448","140",null,"30","4",null);

                p.medt_overpay.set_taborder("24");
                p.medt_overpay.set_background("transparent");
                p.medt_overpay.set_border("0px none transparent,0px none,0px none");
                p.medt_overpay.set_type("number");
                p.medt_overpay.set_color("black");
                p.medt_overpay.set_format("#,##0");
                p.medt_overpay.move("448","170",null,"30","4",null);

                p.medt_payTotal.set_taborder("25");
                p.medt_payTotal.set_background("transparent");
                p.medt_payTotal.set_border("0px none transparent,0px none,0px none");
                p.medt_payTotal.set_type("number");
                p.medt_payTotal.set_color("black");
                p.medt_payTotal.set_format("#,##0");
                p.medt_payTotal.move("448","260",null,"30","4",null);

                p.medt_kyopay.set_taborder("26");
                p.medt_kyopay.set_background("transparent");
                p.medt_kyopay.set_border("0px none transparent,0px none,0px none");
                p.medt_kyopay.set_type("number");
                p.medt_kyopay.set_color("black");
                p.medt_kyopay.set_format("#,##0");
                p.medt_kyopay.move("448","290",null,"30","4",null);

                p.medt_dangpay.set_taborder("27");
                p.medt_dangpay.set_background("transparent");
                p.medt_dangpay.set_border("0px none transparent,0px none,0px none");
                p.medt_dangpay.set_type("number");
                p.medt_dangpay.set_color("black");
                p.medt_dangpay.set_format("#,##0");
                p.medt_dangpay.move("448","320",null,"30","4",null);

                p.sta_ymd00_00_01_01.set_taborder("28");
                p.sta_ymd00_00_01_01.set_text("심야시간");
                p.sta_ymd00_00_01_01.set_background("#3cbcb8");
                p.sta_ymd00_00_01_01.set_font("normal bold 10pt/normal \"Arial\"");
                p.sta_ymd00_00_01_01.set_color("white");
                p.sta_ymd00_00_01_01.set_textAlign("center");
                p.sta_ymd00_00_01_01.set_border("1px solid #10aea9");
                p.sta_ymd00_00_01_01.move("366","200","80","30",null,null);

                p.Static01_00_00_01_01.set_taborder("29");
                p.Static01_00_00_01_01.set_border("1px solid #10aea9");
                p.Static01_00_00_01_01.set_background("#9ee0de");
                p.Static01_00_00_01_01.move("446","200",null,"30","2",null);

                p.medt_nighttime.set_taborder("30");
                p.medt_nighttime.set_background("transparent");
                p.medt_nighttime.set_border("0px none transparent,0px none,0px none");
                p.medt_nighttime.set_type("string");
                p.medt_nighttime.set_color("black");
                p.medt_nighttime.set_format("##:##:##");
                p.medt_nighttime.set_textAlign("center");
                p.medt_nighttime.move("448","200",null,"30","4",null);

                p.medt_nightpay.set_taborder("31");
                p.medt_nightpay.set_background("transparent");
                p.medt_nightpay.set_border("0px none transparent,0px none,0px none");
                p.medt_nightpay.set_type("number");
                p.medt_nightpay.set_color("black");
                p.medt_nightpay.set_format("#,##0");
                p.medt_nightpay.move("448","230",null,"30","4",null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR608F_01.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR608F_01.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.fn_getData_guntae = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr608_01.jsp";
        	in_ds = "ds_guntae=ds_guntae";
        	out_ds = "ds_guntae=ds_guntae";
        	str_arg = " YMD='" + this.parent.ymd + "'"+
        	          " SABUN='" + this.parent.sabun + "'" ;

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "P", false,this);
        };

        this.Callback_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        }
        this.HR608F_01_onload = function(obj,e)
        {
        	this.fn_setData_comp();
        	this.fn_getData_guntae();
        };

        this.fn_setData_comp = function()
        {
        	var nRow = this.parent.nRow;

        	this.sta_title.set_text(this.parent.ds.getColumn(nRow,"NAME") + " 근태 세부 내역");
        	this.medt_intime.set_value(this.parent.ds.getColumn(nRow,"CARDIN"));
        	this.medt_outtime.set_value(this.parent.ds.getColumn(nRow,"CARDOUT"));
        	this.cb_tmscode.set_value(this.parent.ds.getColumn(nRow,"TMSCD"));
        	this.medt_overtime.set_value(this.parent.ds.getColumn(nRow,"OVERTIME"));
        	this.medt_overpay.set_value(this.parent.ds.getColumn(nRow,"OVERPAY"));
        	this.medt_nighttime.set_value(this.parent.ds.getColumn(nRow,"MIDNIGHTOVERTIME"));
        	this.medt_nightpay.set_value(this.parent.ds.getColumn(nRow,"MIDNIGHTOVERPAY"));
        	this.medt_payTotal.set_value(this.parent.ds.getColumn(nRow,"TOTALOVERPAY"));
        	this.medt_kyopay.set_value(this.parent.ds.getColumn(nRow,"KYOPAY"));
        	this.medt_dangpay.set_value(this.parent.ds.getColumn(nRow,"DANGPAY"));
        }

        this.btn_save_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr608_01.jsp";
        	in_ds = "";
        	out_ds = "";
        	str_arg = " CARDDATE='" + this.parent.ymd + "'"+
        	          " SABUN='" + this.parent.sabun + "'" +
        			  " CARDIN='" + this.medt_intime.value + "'" +
        			  " CARDOUT='" + this.medt_outtime.value + "'" +
        			  " TMSCD='" + this.cb_tmscode.value + "'" +
        			  " OVERTIME='" + this.medt_overtime.value + "'" +
        			  " OVERPAY='" + this.medt_overpay.value + "'" +
        			  " MIDNIGHTOVERTIME='" + this.medt_nighttime.value + "'" +
        			  " MIDNIGHTOVERPAY='" + this.medt_nightpay.value + "'" +
        			  " TOTALOVERPAY='" + this.medt_payTotal.value + "'" +
        			  " KYOPAY='" + this.medt_kyopay.value +"'" +
        			  " DANGPAY='" + this.medt_dangpay.value + "'";
        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "P", false,this);
        };

        this.Callback_dml = function()
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	var nRow = this.parent.nRow;
        	var ds = this.parent.ds;

        	ds.setColumn(nRow,"CARDIN",				this.medt_intime.value);
        	ds.setColumn(nRow,"CARDOUT", 			this.medt_outtime.value);
        	ds.setColumn(nRow,"TMSCD", 				this.cb_tmscode.value);
        	ds.setColumn(nRow,"OVERTIME", 			this.medt_overtime.value);
        	ds.setColumn(nRow,"OVERPAY", 			this.medt_overpay.value);
        	ds.setColumn(nRow,"MIDNIGHTOVERTIME",	this.medt_nighttime.value);
        	ds.setColumn(nRow,"MIDNIGHTOVERPAY",	this.medt_nightpay.value);
        	ds.setColumn(nRow,"TOTALOVERPAY",		this.medt_payTotal.valu);
        	ds.setColumn(nRow,"KYOPAY",				this.medt_kyopay.value);
        	ds.setColumn(nRow,"DANGPAY",			this.medt_dangpay.value);

        	this.close(1);
        };


        this.btn_close_onclick = function(obj,e)
        {
        	this.close(0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR608F_01_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("HR608F_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
