(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6030F");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">등급년도순</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">등급코드순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dung", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"YUL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dung_send", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"YUL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_YY\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","300","59",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("등급코드 등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"38","25",null,"970",null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","Static01:-2","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("등급코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","957","-816","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("명칭");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00","Static01:-81.61%","Static01:-2","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("년도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","Static01:-2",null,"38","Static01_03_00_00:-2",null,"56",null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_00","Static01:-37.10%","108","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("명칭");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_01","Static01:-58.90%","108","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("출고율");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03_00_00:-2","Static01:-2",null,"38","Static01_03_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","156",null,"38","25",null,"970",null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","262",null,null,"25","15","970",null,"80",null,this);
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","192","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("등급코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","25","228","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("년도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","Static02:-50.00%","228","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","Static02_05:-2","228",null,"38","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","Static02:-50.00%","192","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","Static02_01:-2","192",null,"38","Static02_03:-2",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_code","Static02_01:10","197",null,"28","Static02_03:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"192","123","74","Static02:-100%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","192",null,"38","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","228",null,"38","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","42","Static02_07:11",null,null,"42","31","936",null,"55",null,this);
            obj.set_taborder("25");
            obj.set_binddataset("ds_dung");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"등급코드\"/><Cell col=\"1\" text=\"등급년도\"/><Cell col=\"2\" text=\"출고율\"/><Cell col=\"3\" text=\"등급명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:YY\"/><Cell col=\"2\" text=\"bind:YUL\"/><Cell col=\"3\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"202","101","53","Static02_09:-112",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search","Static02_03:10","197",null,"28","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","233",null,"28","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","26",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:13",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_01","Static01_03_00_00_00:-2","108",null,"38","Static01:-100%",null,null,null,null,null,this);
            obj.set_taborder("28");
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
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_name","Static01_03_00_00_00:10","113",null,"28","Static01:-99%",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","Static01_03_00_00_01:-2","108",null,"38","Static01_03_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_yul","Static01_03_00_00_01:10","113",null,"28","Static01_03_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_yy","Static01_03_00_00:10","113",null,"28","Static01_03_00_00_01:10",null,"36",null,null,null,this);
            obj.set_taborder("33");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("####");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_yy","Static02_05:10","233",null,"28","Static02_07:10",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("####");
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
        this.addIncludeScript("SD6030F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6030F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6030F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = -1;					//수정된 행번호
        var Error        = "";					//에러코드.
        var IUSW         = "";
        var o_code       = "";
        var o_yy         = "";

        this.SD6030F_onload = function(obj,e)
        {
        	this.cmb_search.set_index(3);
        	this.cmb_orderby.set_index(1);
        	this.ed_s_code.set_value("");
        	this.ed_s_yy.set_value("");
        	this.fnDataclear();
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_dung.jsp";
        	var strArg;
        	var strDs 	= "ds_dung=ds_dung";

        	strArg = " Option1="+nexacro.wrapQuote(this.cmb_search.index)+" Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_s_code.value))+
        	         " Values2="+nexacro.wrapQuote(nexacro.trim(this.ed_s_yy.value))+" Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);

        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
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
            o_yy            = "";
        	EditnRow        = -1;
        	NewRowNum       = "";
        	this.ed_code.set_value("");
        	this.ed_yy.set_value("");
        	this.ed_yul.set_value("");
        	this.ed_name.set_value("");
        	this.ed_code.set_enable(true);
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_dung.setColumn(NewRowNum,"CODE", this.ed_code.value);
        	this.ds_dung.setColumn(NewRowNum,"YY",   this.ed_yy.value);
        	this.ds_dung.setColumn(NewRowNum,"YUL",  this.ed_yul.text );
        	this.ds_dung.setColumn(NewRowNum,"NAME", this.ed_name.text );
        	this.ds_dung_send.addRow();
        	this.ds_dung_send.copyRow(0, this.ds_dung ,NewRowNum);
        	this.ds_dung_send.setColumn(0,"O_CODE", o_code);
        	this.ds_dung_send.setColumn(0,"O_YY", o_yy);
        	this.ds_dung_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
        	this.ds_dung.setColumn(EditnRow,"CODE", this.ed_code.value);
        	this.ds_dung.setColumn(EditnRow,"YY",   this.ed_yy.value);
        	this.ds_dung.setColumn(EditnRow,"YUL",  this.ed_yul.text );
        	this.ds_dung.setColumn(EditnRow,"NAME", this.ed_name.text );
        	this.ds_dung_send.addRow();
        	this.ds_dung_send.copyRow(0, this.ds_dung, EditnRow);
        	this.ds_dung_send.setColumn(0,"O_CODE", o_code);
        	this.ds_dung_send.setColumn(0,"O_YY", o_yy);
        	this.ds_dung_send.setColumn(0,"ROWTYPE", "U" );
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
        	o_code        = this.ds_dung.getColumn(e.row,"CODE");
        	o_yy          = this.ds_dung.getColumn(e.row,"YY");
        	this.ed_code.set_value(this.ds_dung.getColumn(e.row,"CODE"));
        	this.ed_yy.set_value(this.ds_dung.getColumn(e.row,"YY"));
        	this.ed_yul.set_value(this.ds_dung.getColumn(e.row,"YUL"));
        	this.ed_name.set_value(this.ds_dung.getColumn(e.row,"NAME"));
        	this.ed_code.set_enable(false);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_dung.jsp";
        	var inDs 	= "ds_dung_send=ds_dung_send";
        	if ((nexacro.trim(this.ed_code.value)).length != 2)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}

        	if ((nexacro.trim(this.ed_yy.value)).length != 4)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}

        	if (EditnRow != -1)
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_dung.addRow();
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
        			this.ds_dung_send.deleteRow(0);
                	this.ed_code.setFocus();
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
        			this.ds_dung.deleteRow(EditnRow);
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
        	var strUrl = "JSP/sd/insert_dung.jsp";
        	var inDs = "ds_dung_send=ds_dung_send";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
            {
        		if ( IUSW = "Y" )
        		{
        			this.ds_dung.setColumn(EditnRow,"CODE", this.ed_code.value);
        			this.ds_dung.setColumn(EditnRow,"YY",   this.ed_yy.value);
        			this.ds_dung.setColumn(EditnRow,"YUL",  this.ed_yul.text );
        			this.ds_dung.setColumn(EditnRow,"NAME", this.ed_name.text );
        			this.ds_dung_send.addRow();
        			this.ds_dung_send.copyRow(0, this.ds_dung, EditnRow);
        			this.ds_dung_send.setColumn(0, "O_CODE", o_code);
        			this.ds_dung_send.setColumn(0, "O_YY", o_yy);
        			this.ds_dung_send.setColumn(0, "ROWTYPE", "D" );
        			this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        			this.ds_dung.deleteRow(EditnRow);
        			this.ds_dung_send.deleteRow(0);
        		}
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_dung_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_dung.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if(e.keycode == 13)
        	{
        		if (obj.name == "ed_code") this.ed_yy.setFocus();
        		else if (obj.name == "ed_yy") this.ed_yul.setFocus();
        		else if (obj.name == "ed_yul") this.ed_name.setFocus();
        	}
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_yy") this.ed_code.setFocus();
        		else if (obj.name == "ed_yul") this.ed_yy.setFocus();
        		else if (obj.name == "ed_name") this.ed_yul.setFocus();
        	}
        };

        this.s_common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.id == "ed_s_code") this.ed_s_yy.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.id == "ed_s_yy") this.ed_s_code.setFocus();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6030F_onload,this);
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
            this.ed_name.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_yul.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_yy.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_yy.addEventHandler("onkillfocus",this.ed_values1_onkillfocus,this);
            this.ed_s_yy.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ds_dung.addEventHandler("onload",this.ds_dung_onload,this);
            this.ds_dung_send.addEventHandler("onload",this.ds_book_scode_onload,this);
        };
        this.loadIncludeScript("SD6030F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
