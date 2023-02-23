(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6020F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">〓  (같다)</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">&gt;   (크다)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\"> &lt;  (작다)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">&gt;=  (같거나크다)</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\"> &lt;= (같거나작다)</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">%% (나열)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb_orderby", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">배송처순</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">배송코드순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_baesong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"INT\" size=\"256\"/><Column id=\"VISIBLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_baesong_send", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"INT\" size=\"256\"/><Column id=\"VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_visible", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","300","59",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("배송코드 등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"38","25",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","Static01:-2","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("배송코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","957","-816","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("명칭");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00","23.13%","Static01:-2","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("전화");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","Static01:-2",null,"38","Static01_03_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_00","50%","108","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("배송처");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03_00_00:-2","Static01:-2",null,"38","Static01_03_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","194",null,"38","25",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","300",null,null,"25","15",null,null,"80",null,this);
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","230","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("배송코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","25","266","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("배송처");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","50.00%","266","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","Static02_05:-2","266",null,"38","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_name","Static02_05:10","271",null,"28","Static02_07:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","50.00%","230","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","Static02_01:-2","230",null,"38","Static02_03:-2",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_code","Static02_01:10","235",null,"28","Static02_03:10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("##");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"230","123","74","25",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","230",null,"38","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","266",null,"38","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","42","Static02_07:11",null,null,"42","31",null,null,"55",null,this);
            obj.set_taborder("29");
            obj.set_binddataset("ds_baesong");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"배송코드\"/><Cell col=\"1\" text=\"배송처\"/><Cell col=\"2\" text=\"전화번호\"/><Cell col=\"3\" text=\"배송단가\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:TEL\"/><Cell col=\"3\" text=\"bind:UNITPRICE\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:VISIBLE\" expr=\"VISIBLE==&apos;Y&apos;?&apos;사용&apos;:&apos;사용안함&apos;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"240","101","53","35",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search","Static02_03:10","235",null,"28","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","271",null,"28","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","26",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:13",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","25","144","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("배송단가");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_01","23.13%","144","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("사용여부");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","Static01_01_00:-2","144",null,"38","Static01_03_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_01","Static01_03_00_00_00:-2","108",null,"38","25",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","Static01_03_00_00_01:-2","144",null,"38","Static01_03_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_02_00","Static01_04_00:-2","144",null,"38","25",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_code","Static01_01:10","113",null,"28","Static01_03_00_00:10",null,"36",null,null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("##");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_tel","Static01_03_00_00:10","113",null,"28","Static01_03_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_unitprice","Static01_01_00:10","149",null,"28","Static01_03_00_00_01:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_visible","Static01_03_00_00_01:10","149",null,"28","Static01_04_02_00:10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_visible");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("2");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_name","Static01_03_00_00_00:10","113",null,"28","37",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6020F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6020F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6020F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = -1;					//수정된 행번호
        var Error        = "";					//에러코드.
        var IUSW         = "";
        var o_code       = "";

        this.SD6020F_onload = function(obj,e)
        {
        	this.cmb_search.set_index(3);
        	this.cmb_orderby.set_index(1);
        	this.ed_s_code.set_value("");
        	this.ed_s_name.set_value("");
        	this.fnDataclear();
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_trcd.jsp";
        	var strArg;
        	var strDs 	= "ds_baesong=ds_baesong";

        	var option1 = this.cmb_search.index;
        	strArg = " Option1="+option1+" Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_s_code.value))+
        			 " Values2="+nexacro.wrapQuote(this.ed_s_name.text)+
        			 " Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);

        	this.gfn_TransactionP("zipcodesearch", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        }

        this.fnDataclear = function()
        {
        	IUSW            = "N";
        	o_code          = "";
        	EditnRow        = -1;
        	NewRowNum       = "";
        	this.ed_tel.set_value("");
        	this.ed_code.set_value("");
        	this.ed_name.set_value("");
        	this.ed_unitprice.set_value(0);
        	this.rdo_visible.set_value("Y");
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_baesong.setColumn(NewRowNum,"CODE", this.ed_code.value);
        	this.ds_baesong.setColumn(NewRowNum,"NAME", this.ed_name.text);
        	this.ds_baesong.setColumn(NewRowNum,"TEL",  this.ed_tel.text );
        	this.ds_baesong.setColumn(NewRowNum,"UNITPRICE",  this.ed_unitprice.value );
        	this.ds_baesong.setColumn(NewRowNum,"VISIBLE",  this.rdo_visible.value );
        	this.ds_baesong_send.addRow();
        	this.ds_baesong_send.copyRow(0, this.ds_baesong, NewRowNum);
        	this.ds_baesong_send.setColumn(0,"O_CODE", o_code);
        	this.ds_baesong_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
        	this.ds_baesong.setColumn(EditnRow,"CODE", this.ed_code.value);
        	this.ds_baesong.setColumn(EditnRow,"NAME", this.ed_name.text);
        	this.ds_baesong.setColumn(EditnRow,"TEL",  this.ed_tel.text );
        	this.ds_baesong.setColumn(EditnRow,"UNITPRICE",  this.ed_unitprice.value );
        	this.ds_baesong.setColumn(EditnRow,"VISIBLE",  this.rdo_visible.value );
        	this.ds_baesong_send.addRow();
        	this.ds_baesong_send.copyRow(0,this.ds_baesong,EditnRow);
        	this.ds_baesong_send.setColumn(0,"O_CODE", o_code);
        	this.ds_baesong_send.setColumn(0,"ROWTYPE", "U" );
        	this.grd_view.updateToDataset();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch_zipcode();
        	NewRowNum = "";
        };

        this.grd_view_oncelldblclick = function(obj,e)
        {
        	IUSW            =  "Y";
        	EditnRow = e.row;
        	this.ed_code.set_value(this.ds_baesong.getColumn(e.row,"CODE"));
        	o_code        = this.ds_baesong.getColumn(e.row,"CODE");
        	this.ed_tel.set_value(this.ds_baesong.getColumn(e.row,"TEL"));
        	this.ed_name.set_value(this.ds_baesong.getColumn(e.row,"NAME"));
        	this.ed_unitprice.set_value(this.ds_baesong.getColumn(e.row,"UNITPRICE"));
        	this.rdo_visible.set_value(this.ds_baesong.getColumn(e.row,"VISIBLE"));
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_trcd.jsp";
        	var inDs 	= "ds_baesong_send=ds_baesong_send";
        	if ((nexacro.trim(this.ed_code.value)).length != 2)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}

        	if (EditnRow != -1)
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_baesong.addRow();
        		this.fnInputdata();
        	}
        	this.gfn_TransactionP("insert", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        };

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "insert" )
        	{
        		if(nErrorCode != 0)
        		{
        			if (strErrorMag == "DUP" || strErrorMag.substr(0,10) == "JDBC-10007")
        			{
        				alert("코드가 중복되었습니다. \n 재검색후 저장해주세요.");
        				this.btn_search.click();
        			}
        			else if(strErrorMag.substr(0,10) == "JDBC-11048" && strErrorMag.substr(27,4) == "SIDO")
        				alert("시도 글자수 오류! 수정하세요!");
        			else
        				alert("Error : "+strErrorMag);
        		}
        		else
        		{
                 	if ( IUSW == "N" )
        				this.fnDataclear();
        			this.ds_baesong_send.deleteRow(0);
                	this.ed_zipcd.setFocus();
        			alert("저장완료.");
        		}
        	}
        	else if ( strSvcID == "delete" )
        	{
        		if (strErrorMag == "Dup")
        		{
        			alert("삭제 Error.");
        		}
        		else
        		{
        			this.ds_baesong.deleteRow(EditnRow);
                 	this.fnDataclear();
        		}
        	}
        }

        this.btn_can_onclick = function(obj,e)
        {
        	this.fnDataclear();
        	this.ed_code.setFocus();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_trcd.jsp";
        	var inDs = "ds_baesong_send=ds_baesong_send";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
            {
        		if ( IUSW = "Y" )
        		{
        			this.ds_baesong.setColumn(EditnRow,"CODE", this.ed_code.value);
        			this.ds_baesong.setColumn(EditnRow,"NAME", this.ed_name.text);
        			this.ds_baesong.setColumn(EditnRow,"TEL",  this.ed_tel.text );
        			this.ds_baesong.setColumn(EditnRow,"UNITPRICE",  this.ed_unitprice.value );
        			this.ds_baesong.setColumn(EditnRow,"VISIBLE",  this.rdo_visible.value );
        			this.ds_baesong_send.addRow();
        			this.ds_baesong_send.copyRow(0, this.ds_baesong, EditnRow);
        			this.ds_baesong_send.setColumn(0,"O_CODE", o_code);
        			this.ds_baesong_send.setColumn(0,"ROWTYPE", "D" );
        			this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        			this.ds_baesong.deleteRow(EditnRow);
        			this.ds_baesong_send.deleteRow(0);
        		}
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_baesong_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_baesong.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if(e.keycode == 13)
        	{
        		if (obj.name == "ed_zipcd") this.cmb_sido.setFocus();
        		else if (obj.name == "cmb_sido") this.ed_gugun.setFocus();
        		else if (obj.name == "ed_gugun") this.ed_dong.setFocus();
        		else if (obj.name == "ed_dong") this.ed_doro.setFocus();
        		else if (obj.name == "ed_doro") this.ed_addr.setFocus();
        	}
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "cmb_sido") this.ed_zipcd.setFocus();
        		else if (obj.name == "ed_gugun") this.cmb_sido.setFocus();
        		else if (obj.name == "ed_dong") this.ed_gugun.setFocus();
        		else if (obj.name == "ed_doro") this.ed_dong.setFocus();
        		else if (obj.name == "ed_addr") this.ed_doro.setFocus();
        	}
        };

        this.s_common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.id == "ed_s_zipcode") this.cmb_s_sido.setFocus();
        		else if (obj.id == "cmb_s_sido") this.ed_s_doro.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.id == "ed_s_doro") this.cmb_s_sido.setFocus();
        		else if (obj.id == "cmb_s_sido") this.ed_s_zipcode.setFocus();
        	}
        };

        this.ed_sido_onkillfocus = function(obj,e)
        {
        	this.ed_addr.set_value(nexacro.trim(this.cmb_sido.text) + ' ' +  nexacro.trim(this.ed_gugun.text)  + ' '
                         + nexacro.trim(this.ed_dong.text) + ' ' +  nexacro.trim(this.ed_doro.text));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6020F_onload,this);
            this.ed_s_name.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_code.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.Static02_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_code.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_code.addEventHandler("onkillfocus",this.ed_values1_onkillfocus,this);
            this.ed_tel.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_unitprice.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_name.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ds_baesong.addEventHandler("onload",this.ds_baesong_onload,this);
            this.ds_baesong_send.addEventHandler("onload",this.ds_book_scode_onload,this);
        };
        this.loadIncludeScript("SD6020F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
