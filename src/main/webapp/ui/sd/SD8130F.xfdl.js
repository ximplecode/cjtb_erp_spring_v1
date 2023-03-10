(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8130F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ccode1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">01</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">02</Col><Col id=\"NAME\">속셈</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juk", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">271</Col><Col id=\"NAME\">2007년 1학기 선수금</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">272</Col><Col id=\"NAME\">2007년 2학기 선수금</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cgbcust", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SAUPNO\" type=\"STRING\" size=\"256\"/><Column id=\"F_DPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"GUBN\">21</Col><Col id=\"GBNM\">교판</Col><Col id=\"CODE\">0143</Col><Col id=\"NAME\">(강남)천지</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"GUBN\">21</Col><Col id=\"GBNM\">교판</Col><Col id=\"CODE\">0144</Col><Col id=\"NAME\">(도봉)백서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">업체별(가맹비/광고비) 현황</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">업체별(가맹비/광고비) 집계현황</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">업체별(가맹비/광고비) 현황(월별)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"N_GAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_GVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_KAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_KVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_CAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_CVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"HAB\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"N_GAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_GVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_KAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_KVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_CAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_CVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"HAB\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj.set_keystring("CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"N_GAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_GVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_KAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_KVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_CAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"N_CVAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"HAB\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","25","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("작업구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","Static01:-2","12","290","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","25","50","127","301",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("업체코드(선택)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","Static06:-2","50","701","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0","Static06:-2","Static00_01_00_00_00_00_00:-2","701","263",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_cgbcust");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_border("2px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"text\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"GU\"/><Cell col=\"3\" text=\"코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:GBNM\"/><Cell col=\"2\" text=\"bind:GUBN\"/><Cell col=\"3\" text=\"bind:CODE\"/><Cell col=\"4\" text=\"bind:NAME\"/><Cell col=\"5\" text=\"bind:F_SAUPNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","849","12","127","301",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("업체구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","849","311","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00","Static09:-2","311","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","436","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","Static02:-2","12","290","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ioyh","Static07:-2","12","405","301",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_ccode1");
            obj.set_autofittype("col");
            obj.set_border("2px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"50\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"구분명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_work_symd","Static01:5","17","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","ed_work_symd:7","17","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_work_eymd","Static10:7","17","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","Static02:5","17","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","ed_sgb:0","17","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Hscust","ed_scode:2","23","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","728","17","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","ed_egb:0","17","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Hecust","ed_ecode:2","23","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","697","17","19","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_scust","311","55","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_name","436","55","320","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","769","55","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("검색");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_print_select","Static09:5","316","235","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_rpt");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("일자별 출고현황");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","1223","318","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","1310","318","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","387",null,"763","1.50%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_formscrolltype("horizontal");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","92.00%","355",null,"25","1.50%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_gymd","167","60","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("중지업체제외");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,1200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD8130F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD8130F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8130F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        this.SD8110F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");

        	var     u_yy;
        	var		i,j = 0;
        	var     u_yymm;
        	var     u_ym;
        	var     u_mm;
        	this.ed_work_eymd.set_value(Eco.date.addDate(f_date, -1));
        	u_yy           = f_date;
        	this.ed_work_symd.set_value(u_yy.substr(0,6) + "01");
        	this.ed_sgb.set_value("20");
        	this.ed_scode.set_value("0000");
        	this.ed_egb.set_value("39");
        	this.ed_ecode.set_value("9999");
        	this.C_gymd.set_value("1");

        	var strUrl = "JSP/sd/sel_ccode1.jsp";
        	var strArg 	= "" ;
        	var strDs 	= "ds_ccode1=ds_ccode1";

        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        };

        this.fnCallback = function(svcid, errCode, errMsg)
        {
        	if(svcid == "select")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0)
        			trace("[PD160_SearchF.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        		else
        		{
        			trace('succ');
        		}
        	}
        }
        this.btn_search_onclick = function(obj,e)
        {
            var U_cgb, U_code, U_name, U_egb, U_jumin, U_gymd;
            var Find_sw = "N";
            U_code = this.ed_scust.text;
            if ( this.ed_scust.text == "" )
        		U_code = "All";
        	U_name   = this.ed_name.text;
            if ( this.ed_name.text == "" )
        		U_name = "All";
        	var  i = 0;
        	var  j = 0;
        	for( i = 0 ; i < this.ds_ccode1.rowcount; i++ )
        	{
        		if ( this.ds_ccode1.getColumn(i, "CHK") == "1" )
        		{
        			Find_sw = "Y";
        		}
        	}
        	U_cgb = "";
        	U_egb = "";
        	if ( Find_sw == "N" )
            {
        		U_cgb = this.ed_scust.text.substr(0,2);
        		U_code = this.ed_scust.text.substr(2,4);
        		if ( U_code == "" )
        		{
        			U_code = "All";
        		}
            }
        	if ( Find_sw == "Y" )
            {
               for( i = 0 ; i < this.ds_ccode1.rowcount; i++ )
            	{
        			if (( Find_sw == "Y"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        			{
        				U_egb = this.ds_ccode1.getColumn(i, "CODE");
        				Find_sw  = "N";
        			}
             	}
            }
            U_gymd = "";
            if ( this.C_gymd.value == "1" )
        		U_gymd = "1";
        	U_jumin = "";
        	var strUrl = "JSP/sd/sel_cust.jsp";
        //	var strArg 	= "Gubn="+ quote(U_gb) + " Code=" + quote(U_code)  + " Name='"+Ed_NAME.Text +"'" + " Egb='"+U_egb +"'";
        	var strArg 	= "Cgb='"+ U_cgb + "'"+ " Code='" + U_code + "'" + " Name='" + U_name + "'" + " Egb= '" + U_egb + "'" + " Fjumin= '" + U_jumin + "'" + " Eymd= '" + U_gymd + "'";
        	var strDs = "ds_cgbcust=ds_cgbcust";
        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        };

        this.btn_Hcust_onclick = function(obj,e)
        {
        	this.lfn_showModal(obj.name, "", "sd::frmCustList.xfdl", "fnCustlistCallBack", this, 0, 0, 590, 555);
        };

        this.fnCustlistCallBack = function(strID, ret)
        {
        	if(ret == null)
        		return;

        	var gubun = ret.substr(0,2);
        	var code =  ret.substr(3,4);

        	if(nexacro.trim(ret) != "0"){
        		if (strID == "btn_Hscust") {
        			this.ed_sgb.set_value(gubun);
        			this.ed_scode.set_value(code);
        		}
        		else if (strID = "btn_Hecust") {
        			this.ed_egb.set_value(gubun);
        			this.ed_ecode.set_value(code);
        		}
        	}
        }
        this.btn_printview_onclick = function(obj,e)
        {
        	var  Find1_sw   = "N";
        	var  Find2_sw   = "N";
        	var  Find3_sw   = "N";
        	var  Line_sw    = "N";
        	var  Dol_cust, U_symd;
        	var  Sd_sql, Sd_sql1, Sd_sql2, Sd_sql3, Sd_sql4, Sd_sql5, Sd_sql6;
        	var  rdfile;
        	var  i = 0;
        	Sd_sql    =   "";
        	Sd_sql1   =   "";
        	Sd_sql2   =   "";
        	Sd_sql3   =   "";
        	for( i = 0 ; i < this.ds_ccode1.rowcount ; i++ )
        	{
        	    if ( this.ds_ccode1.getColumn(i, "CHK") == "1" )
        		{
        			Find1_sw   = "Y";
        		}
        	}
        	for( i = 0 ; i < this.ds_cgbcust.rowcount ; i++ )
        	{
        	    if ( this.ds_cgbcust.getColumn(i, "CHK") == "1" )
        		{
        			Find2_sw   = "Y";
        		}
        	}
        	if (( this.cmb_print_select.index == 0 ) || ( this.cmb_print_select.index == 1 ) || ( this.cmb_print_select.index == 2 ) )
        	{
        		Sd_sql     =  "    where ( a.s_yy || a.s_mm )  >= '" + (this.ed_work_symd.value).substr(0,6) +"'";
        		Sd_sql     = Sd_sql + "    and  ( a.s_yy || a.s_mm ) <= '" + (this.ed_work_eymd.value).substr(0,6) +"'";
        		Line_Sw    = "Y";
        		if ( Find2_sw == "Y" )
        		{
        			Sd_sql    = Sd_sql + "    and  A.cust_gb || A.cust_cd in (  ";
        			for( i = 0 ; i < this.ds_cgbcust.rowcount; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  "'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql    = Sd_sql +  Dol_cust;
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  ",'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql    = Sd_sql +  Dol_cust;
        				}
        			}
        			Sd_sql    = Sd_sql + "    )  ";
        		}
        		else if ( Find2_sw == "N" )
        		{
        			Sd_sql    = Sd_sql + "   and a.cust_gb  >= '" + this.ed_sgb.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_gb <= '" + this.ed_egb.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_cd  >= '" + this.ed_scode.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_cd <= '" + this.ed_ecode.value +"'";
        		}
        		if ( this.cmb_print_select.index == 2 )
        		{
        			Sd_sql1   = "   where syymm >= '" + (this.ed_work_symd.value).substr(0,6) +"'";
        			Sd_sql1   = Sd_sql1 + "    and  syymm <= '" + (this.ed_work_eymd.value).substr(0,6) +"'";
        		}
        	}

        	// 미리보기 변수
        	var strArg = "s_sql="+nexacro.wrapQuote(Sd_sql)+
        				 "s_sql1="+nexacro.wrapQuote(Sd_sql1);

        	var rdopt  = "/rp ["+this.ed_work_symd.value+"]" +
        	"["+this.ed_work_eymd.value+"]" +
        	"["+this.ed_sgb.value + this.ed_scode.value+"]" +
        	"["+this.ed_egb.value + this.ed_ecode.value+"]" +
        	"["+Sd_sql+"]" +
        	"["+Sd_sql1+"]";  //속성코드 자리

        	switch(this.cmb_print_select.index)
        	{
        		case 0:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_1=ds_1";
        				this.Div00.set_url("sd::SD8130F_GRID1.xfdl");
        				this.gfn_TransactionP("ds_1","JSP/sd/SD8130F_DS1_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8130r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 1:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_2=ds_2";
        				this.Div00.set_url("sd::SD8130F_GRID2.xfdl");
        				this.gfn_TransactionP("ds_2","JSP/sd/SD8130F_DS2_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8131r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 2:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_3=ds_3";
        				this.Div00.set_url("sd::SD8130F_GRID3.xfdl");
        				this.gfn_TransactionP("ds_3","JSP/sd/SD8130F_DS3_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8132r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        	}
        };

        this.fnCallback = function(Trid, ErroCode, ErrorMsg)
        {
        	if(ErroCode != 0)
        		return;

        	if(Trid == "select")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0)
        			trace("[PD160_SearchF.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        		else
        		{
        			trace('succ');
        		}
        	}
        }

        this.fnDSCallback = function(Trid, ErroCode, ErrorMsg)
        {
        	if(ErroCode != 0)
        		return;

        	if(Trid.substr(0,3) == "ds_" && this.all[Trid].rowcount <= 0)
        	{
        		alert('조회된 데이터가 없습니다.');
        		return;
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();
        	if ( this.Div00.url == "sd::SD8130F_GRID1.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8130F_GRID1, "Sheet1!A1");
        		filename = "Excel_1"; } //"업체별(가맹비/광고비) 현황"
        	else if ( this.Div00.url == "sd::SD8130F_GRID2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8130F_GRID2, "Sheet1!A1");
        		filename = "Excel_2"; } //"업체별(가맹비/광고비) 집계현황"
        	else if ( this.Div00.url == "sd::SD8130F_GRID3.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8130F_GRID3, "Sheet1!A1");
        		filename = "Excel_3"; } //"업체별(가맹비/광고비) 현황(월별)"

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        this.common_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.name == 'ed_scode')
        			this.btn_Hscust.click();
        		else if(obj.name == 'ed_ecode')
        			this.btn_Hecust.click();
        		else if(obj.name == 'ed_name')
        			this.btn_search.click();
        		else if(obj.name == 'cmb_print_select')
        			this.cmb_print_select.dropdown();
        	}
        };

        this.check_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if(obj.value == 0) obj.set_value(1);
        		else obj.set_value(0)
        	}
        };

        this.common_set_focus = function(obj,e)
        {
        	obj.set_border("2px solid #10aea9");
        };


        this.common_kill_focus = function(obj,e)
        {
        	obj.set_border("");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD8110F_onload,this);
            this.Static01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_ioyh.addEventHandler("onheadclick",this.gr_ioyh_onheadclick,this);
            this.ed_work_symd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_work_symd.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_work_eymd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_work_eymd.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_sgb.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_sgb.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_scode.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_scode.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_scode.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.btn_Hscust.addEventHandler("onclick",this.btn_Hcust_onclick,this);
            this.ed_egb.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_egb.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_ecode.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_ecode.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.btn_Hecust.addEventHandler("onclick",this.btn_Hcust_onclick,this);
            this.ed_scust.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_scust.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_name.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_name.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_name.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.cmb_print_select.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.cmb_print_select.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.cmb_print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.C_gymd.addEventHandler("onkeydown",this.check_onkeydown,this);
            this.C_gymd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.C_gymd.addEventHandler("onsetfocus",this.common_set_focus,this);
        };
        this.loadIncludeScript("SD8130F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
