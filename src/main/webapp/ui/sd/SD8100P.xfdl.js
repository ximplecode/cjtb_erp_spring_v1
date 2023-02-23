(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8100P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">입급명세서</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">입급명세서(기간)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">입금명세서(만기)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">일자별입금현황</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">업체별입금현황</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">입금자별입금현황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","10","310","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("어음, 수표 입금명세서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 28px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"21","45","20","7",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","91","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("입금일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","107","91","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","114","96","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_edate","244","96","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","222","97","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","119","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("번호구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","107","119","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","172","125","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","12","147","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","107","147","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","204","153","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","12","175","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("만기일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","107","175","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_smdate","114","180","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_emdate","244","180","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","222","181","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","12","203","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("입금자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03","107","203","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","12","231","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_04","107","231","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sno","114","124","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_eno","194","124","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scustgb","114","152","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scustcd","148","152","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecustcd","258","152","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecustgb","224","152","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_ipinnm","237","208","106","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ip_search","211","209","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_ipin","114","208","92","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","63","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","112","236","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_rpt");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_text("입금자별입금현황");
            obj.set_value("5");
            obj.set_index("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","311","236","45","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("출력");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD8100P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD8100P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8100P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var arr_rt;

        this.SD8100P_onload = function(obj,e)
        {
        	arr_rt = new Array();
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");

        	this.print_select.set_index(0);
        	this.ed_sdate.setFocus();
        	this.ed_sdate.set_value(f_date);
        	this.ed_edate.set_value(f_date);
        	this.ed_sno.set_value("000");
        	this.ed_eno.set_value("999");
        	this.ed_scustgb.set_value("21");
        	this.ed_scustcd.set_value("0000");
        	this.ed_ecustgb.set_value("37");
        	this.ed_ecustcd.set_value("9999");
        	this.ed_smdate.set_value("");
        	this.ed_emdate.set_value("");
        	this.ed_ipin.set_value(gv_sabun.substr(0,6));
        	this.ed_ipinnm.set_value(gv_name);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var s_cust, e_cust;
        	var rdfile = this.fnSelectfile(this.print_select.index);
        	var s_sql1, s_sql2, s_sql3, s_sql4;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
            if (( this.print_select.index == 0 ) && ( this.ed_ipin.value == "" ))
        	{
        		alert("입금자를 등록해 주세요!");
        		return;
        	}
            s_cust = this.ed_scustgb.value + this.ed_scustcd.value;
            e_cust = this.ed_ecustgb.value + this.ed_ecustcd.value;
            if (( this.print_select.index == 0 ) || ( this.print_select.index == 1 ) || ( this.print_select.index == 2 ) || ( this.print_select.index == 3 )
                 || ( this.print_select.index == 4 ))
        	{
        		s_sql1     =  " and a.s_date >= '" + this.ed_sdate.value +"'";
        		s_sql1     = s_sql1 + "    and  a.s_date <= '" + this.ed_edate.value +"'";
        		s_sql1     = s_sql1 + "    and  (a.cust_gb || a.cust_cd) >= '" + s_cust +"'";
        		s_sql1     = s_sql1 + "    and  (a.cust_gb || a.cust_cd) <= '" + e_cust +"'";
        		if ( this.ed_ipin.value != "" )
        			s_sql1     = s_sql1 + "    AND  a.ipin = '" + this.ed_ipin.value +"'";
        		if (( this.print_select.index == 0 ) || ( this.print_select.index == 1 ))
        		{
        			s_sql1     = s_sql1 + " and a.jun >= '" + this.ed_sno.value +"'";
        			s_sql1     = s_sql1 + " and a.jun <= '" + this.ed_eno.value +"'";
        			s_sql1     = s_sql1 + "      order by a.s_date, a.ipin, mUP_GB, a.CUST_GB, a.CUST_CD,  a.U_MDATE, a.UP_GB, a.UP_NO  ";
        		}
        		if ( this.print_select.index == 2 )
        		{
        			s_sql1     = s_sql1 + " and a.U_MDATE >= '" + this.ed_smdate.value +"'";
        			s_sql1     = s_sql1 + " and  a.U_MDATE <= '" + this.ed_emdate.value +"'";
        			s_sql1     = s_sql1 + " and a.jun >= '" + this.ed_sno.value +"'";
        			s_sql1     = s_sql1 + " and a.jun <= '" + this.ed_eno.value +"'";
        			s_sql1     = s_sql1 + "      order by a.s_date, a.ipin, mUP_GB, a.CUST_GB, a.CUST_CD,  a.U_MDATE, a.UP_GB, a.UP_NO  ";
        		}
        	}

        	var rdopt  = "/rp ["+this.ed_sdate.value+"]"+
        					 "["+this.ed_edate.value+"]"+
        					 "["+s_cust+"]"+
        					 "["+e_cust+"]"+
        					 "["+s_sql1+"]"+
        					 "["+s_sql2+"]"+
        					 "["+s_sql3+"] /ruseswapdisk ";

        	this.lfn_showModal("rtp_print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1024, 770);
        };

        this.fnSelectfile = function(chk_value)
        {
        	if (chk_value==0) return gv_urlMrd+"/sd/SD8100R.mrd";
        	else if (chk_value==1) return gv_urlMrd+"/sd/SD8100M.mrd";
        	else if (chk_value==2) return gv_urlMrd+"/sd/SD8100Q.mrd";
        	else if (chk_value==3) return gv_urlMrd+"/sd/SD8101R.mrd";
        	else if (chk_value==4) return gv_urlMrd+"/sd/SD8102R.mrd";
        	else if (chk_value==5) return gv_urlMrd+"/sd/SD8103R.mrd";
        }

        this.common_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.name == "btn_print")
        		{
        			this.btn_print.click();
        			return;
        		}
        		var objComp = this.getNextComponent(obj, true);
        		if(objComp != null)
        			objComp.setFocus();
        	}
        	else if(e.keycode == 27)
        	{
        		var objComp = this.getPrevComponent(obj, true);
        		if(objComp != null)
        			objComp.setFocus();
        	}
        };

        this.ed_ipin_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd8100_insa.jsp";
        	var strArg;
        	var strDs 	= "ds_insa=ds_insa";
        	if ( this.ed_ipin.value !=  "" )
        	{
        		strArg = " Values1="+nexacro.wrapQuote(this.ed_ipin.value);
        		this.gfn_TransactionP("insa", strUrl, strDs, strDs, strArg, "fnDis_insa", false, "P", false, this);
        	}
        	else
        	{
        		this.ed_ipinnm.set_value("");
        	}
        };

        this.fnDis_insa = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.ed_ipinnm.set_value(this.ds_insa.getColumn(0,"NAME"));
        }

        this.btn_ip_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("ipin_search1", "", "sd::frmsabun_list.xfdl", "fnipinSearchCallback", this, 0, 0, 492, 470);
        };

        this.fnipinSearchCallback = function(strID, ret)
        {
        	if(ret != null)
        	{
        		var gubun = ret.substr(0,6);
        		if(nexacro.trim(ret) != "0")
        		{
        			this.ed_ipin.set_value(gubun);
        			this.ed_ipin_onkillfocus();
        			this.print_select.setFocus();
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD8100P_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_sdate.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_edate.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_smdate.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_emdate.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.Static00_01_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_04.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_sno.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_sno.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_eno.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_eno.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_scustgb.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_scustgb.addEventHandler("onkillfocus",this.s_custcd_onkillfocus,this);
            this.ed_scustcd.addEventHandler("onkillfocus",this.s_custcd_onkillfocus,this);
            this.ed_scustcd.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_ecustcd.addEventHandler("onkillfocus",this.s_custcd_onkillfocus,this);
            this.ed_ecustcd.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_ecustgb.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_ecustgb.addEventHandler("onkillfocus",this.s_custcd_onkillfocus,this);
            this.btn_ip_search.addEventHandler("onclick",this.btn_ip_search_onclick,this);
            this.ed_ipin.addEventHandler("onkillfocus",this.ed_ipin_onkillfocus,this);
            this.ed_ipin.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
        };
        this.loadIncludeScript("SD8100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
