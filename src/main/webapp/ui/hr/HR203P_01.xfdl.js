(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR203P_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1246,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT_CH\" type=\"STRING\" size=\"256\"/><Column id=\"SOOENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"KYEENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUB\" type=\"STRING\" size=\"256\"/><Column id=\"BON_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NICK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sa_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">정규직</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">계약직</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">인턴직</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">무기계약직</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01_00_00_00_00","100","210","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","100","180","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","100","150","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","100","120","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","100","90","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","100","60","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_00","0","30","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("입사일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","sta_gb00_00:0","30","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00","0","0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_gb00:0","0","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_cd","sta_gb00:2","5","6.18%","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_nm","edt_buse_cd:2","5","152","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_buse","edt_buse_nm:2","5","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_ipsadt","sta_gb00_00:5","Static01_00:5","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cald_s_ipsadt:2","35","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_ipsadt","Static00:2","Static01_00:5","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_00_00","0","sta_gb00_00:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("정규직 전환일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_ipsadt_ch","sta_gb00_00_00:5","65","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","cald_s_ipsadt_ch:2","65","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_ipsadt_ch","Static00_00:2","65","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_01","0","sta_gb00_00_00:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("수습만료일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_soo","sta_gb00_01:5","95","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","cald_s_soo:2","95","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_soo","Static00_01:2","95","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_01_00","0","sta_gb00_01:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("계약만료일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_ke","sta_gb00_01_00:5","125","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","cald_s_ke:2","125","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_ke","Static00_02:2","125","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_01_00_00","0","sta_gb00_01_00:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("승진일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_up","sta_gb00_01_00_00:5","155","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","cald_s_up:2","155","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_up","Static00_00_00:2","155","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_01_01","0","sta_gb00_01_00_00:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("생년월일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_birth","sta_gb00_01_01:5","185","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","cald_s_birth:2","185","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_birth","Static00_01_00:2","185","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_01_00_01","0","sta_gb00_01_01:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("퇴사일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_toisadt","sta_gb00_01_00_01:5","215","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","cald_s_toisadt:2","215","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_toisadt","Static00_02_00:2","215","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","Static01_00:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_list");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"122\"/><Column size=\"159\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"68\"/><Column size=\"104\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"145\"/><Column size=\"117\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"본부\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"주민번호\"/><Cell col=\"8\" text=\"입사일\"/><Cell col=\"9\" text=\"퇴사일\"/><Cell col=\"10\" text=\"계약구분\"/><Cell col=\"11\" text=\"정규직전환일\"/><Cell col=\"12\" text=\"수습만료일\"/><Cell col=\"13\" text=\"계약만료일\"/><Cell col=\"14\" text=\"승진일\"/><Cell col=\"15\" text=\"이메일\"/><Cell col=\"16\" text=\"전화번호\"/><Cell col=\"17\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:SABUN\"/><Cell col=\"1\" text=\"bind:BON_NAME\"/><Cell col=\"2\" text=\"bind:BUSE\"/><Cell col=\"3\" text=\"bind:NICK_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:JIKGUB\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:JUMIN\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:IPSADT\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:TOISADT\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:SA_GB1\" displaytype=\"combotext\" combodataset=\"ds_sa_gb\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:IPSADT_CH\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:SOOENDDATE\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:KYEENDDATE\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:YMD\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:EMAIL\"/><Cell col=\"16\" text=\"bind:TEL2\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:ADDR1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1246,543,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_buse_cd","value","ds_insa","BUSECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_buse_nm","value","ds_insa","BUSENM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR203P_01.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR203P_01.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR203P_01.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var arr_rt;

        this.fn_getData_list = function(ymd, gb)
        {
        	var vSql = "";

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr203_01.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " gb='" + gb + "'" +
        			  " ymd='" + ymd + "'" +
        			  " buse_cd='" + this.edt_buse_cd.value + "'" +
        			  " s_ipsadt='" + this.cald_s_ipsadt.value + "'" +
        			  " e_ipsadt='" + this.cald_e_ipsadt.value + "'" +
        			  " s_ipsadt_ch='" + this.cald_s_ipsadt_ch.value + "'" +
        			  " e_ipsadt_ch='" + this.cald_e_ipsadt_ch.value + "'" +
        			  " s_soo='" + this.cald_s_soo.value + "'" +
        			  " e_soo='" + this.cald_e_soo.value + "'" +
        			  " s_ke='" + this.cald_s_ke.value + "'" +
        			  " e_ke='" + this.cald_e_ke.value + "'" +
        			  " s_up='" + this.cald_s_up.value + "'" +
        			  " e_up='" + this.cald_e_up.value + "'" +
        			  " s_birth='" + this.cald_s_birth.value + "'" +
        			  " e_birth='" + this.cald_e_birth.value + "'" +
        			  " s_toisadt='" + this.cald_s_toisadt.value + "'" +
        			  " e_toisadt='" + this.cald_e_toisadt.value + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        }

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

        this.HR203P_01_onload = function(obj,e)
        {
        	arr_rt = new Array();
        };

        this.fn_setClear = function()
        {
        	this.edt_buse_cd.set_value("");
        	this.edt_buse_nm.set_value("");
        	this.cald_s_ipsadt.set_value("");
        	this.cald_e_ipsadt.set_value("");
        	this.cald_s_ipsadt_ch.set_value("");
        	this.cald_e_ipsadt_ch.set_value("");
        	this.cald_s_soo.set_value("");
        	this.cald_e_soo.set_value("");
        	this.cald_s_ke.set_value("");
        	this.cald_e_ke.set_value("");
        	this.cald_s_up.set_value("");
        	this.cald_e_up.set_value("");
        	this.cald_s_birth.set_value("");
        	this.cald_e_birth.set_value("");
        	this.cald_s_toisadt.set_value("");
        	this.cald_e_toisadt.set_value("");
        }

        this.btn_Search_buse_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Buse.xfdl");
        		this.addChild("sBuse",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sBuse",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_buse);
        };

        this.fn_Callback_buse = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_buse_cd.set_value(arr_rt[0]);
        		this.edt_buse_nm.set_value(arr_rt[1]);
        	}

        	this.removeChild("sBuse");
        };

        this.fn_print = function(ymd, gb)
        {
        	var rdUrl = gv_svcUrl + "rpt/hr/HR203P_01.mrd";
            var vSql = "";
        	if (gb == "0")
        	{
        		vSql = vSql + " AND (A.TOISADT = '00000000' OR A.TOISADT > '" + ymd + "')\n";
        	}

        	if (Eco.isEmpty(this.edt_buse_cd.value) == false)
        	{
        		vSql = vSql + " AND A.BUSECD = '" + this.edt_buse_cd.value + "'\n";
        	}

        	if (Eco.isEmpty(this.cald_s_ipsadt.value) == false && Eco.isEmpty(this.cald_e_ipsadt.value) == false)
        	{
        		vSql = vSql + " AND A.IPSADT BETWEEN '" + this.cald_s_ipsadt.value + "' and '" + this.cald_e_ipsadt.value + "'\n";
        	}

        	if (Eco.isEmpty(this.cald_s_ipsadt_ch.value) == false && Eco.isEmpty(this.cald_e_ipsadt_ch.value) == false)
        	{
        		vSql = vSql + " AND A.IPSADT_CH BETWEEN '" + this.cald_s_ipsadt_ch.value + "' and '" + this.cald_e_ipsadt_ch.value + "'\n";
        	}

        	if (Eco.isEmpty(this.cald_s_soo.value) == false && Eco.isEmpty(this.cald_e_soo.value) == false)
        	{
        		vSql = vSql + " AND A.SOOENDDATE BETWEEN '" + this.cald_s_soo.value + "' and '" + this.cald_e_soo.value + "'\n";
        	}

        	if (Eco.isEmpty(this.cald_s_ke.value) == false && Eco.isEmpty(this.cald_e_ke.value) == false)
        	{
        		vSql = vSql + " AND A.KYEENDDATE BETWEEN '" + this.cald_s_ke.value + "' and '" + this.cald_e_ke.value + "'\n";
        	}

        	if (Eco.isEmpty(this.cald_s_up.value) == false && Eco.isEmpty(this.cald_e_up.value) == false)
        	{
        		vSql = vSql + " AND G.YMD BETWEEN '" + this.cald_s_up.value + "' and '" + this.cald_e_up.value + "'\n";
        	}

        	if (Eco.isEmpty(this.cald_s_birth.value) == false && Eco.isEmpty(this.cald_e_birth.value) == false)
        	{
        		vSql = vSql + " AND A.BIRTH_DT BETWEEN '" + this.cald_s_birth.value + "' and '" + this.cald_e_birth.value + "'\n";
        	}

        	if (Eco.isEmpty(this.cald_s_toisadt.value) == false && Eco.isEmpty(this.cald_e_toisadt.value) == false)
        	{
        		vSql = vSql + " AND A.TOISADT BETWEEN '" + this.cald_s_toisadt.value + "' and '" + this.cald_e_toisadt.value + "'\n";
        	}
        	var rdParam = "/rp [" + ymd + "][" + vSql + "]";
        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("입자,퇴사,정규등 일자 기준");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR203P_01_onload,this);
            this.edt_buse_cd.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.btn_Search_buse.addEventHandler("onclick",this.btn_Search_buse_onclick,this);
        };
        this.loadIncludeScript("HR203P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
