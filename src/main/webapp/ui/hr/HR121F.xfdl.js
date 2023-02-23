(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR121F");
            this.set_titletext("개인자료 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB2\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("img_insa","304","50","176","180",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb03","img_insa:2","140","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("입사일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","sta_gb03:0","140",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인자료 조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","59","Static02:1","183","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_buse","2","edt_s_name:2","300",null,null,"2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_buse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"299\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","2","51","55","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","edt_s_name:1","51","59","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_insa","grd_buse:2","img_insa:2",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_insa");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"73\"/><Column size=\"69\"/><Column size=\"71\"/><Column size=\"51\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"사원구분\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"나이\"/><Cell col=\"8\" text=\"전화\"/><Cell col=\"9\" text=\"핸드폰\"/><Cell col=\"10\" text=\"입사일자\"/><Cell col=\"11\" text=\"퇴사일자\"/><Cell col=\"12\" text=\"최종학력\"/><Cell col=\"13\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSECD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SA_GB1\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SEX\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:AGE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:TEL1\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:TEL2\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:IPSADT\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:TOISADT\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:SCHOOL\"/><Cell col=\"13\" text=\"bind:ADDR1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb","img_insa:2","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_gb:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","sta_gb:1","55","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00","edt_name:1","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사번");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","sta_gb00:1","55","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_00","edt_sabun:1","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("직책");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb01","img_insa:2","sta_gb:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사원구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","sta_gb01:0","80",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sa_gb1","sta_gb01:1","85","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_01","edt_sa_gb1:1","80","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("성별");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sex","sta_gb00_01:1","85","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_00_00","edt_sex:1","80","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("나이");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb02","img_insa:2","sta_gb01:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("전화");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","sta_gb02:0","110",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tel1","sta_gb02:1","115","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_02","edt_tel1:1","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("핸드폰");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ipsadt","sta_gb03:1","145","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_00_01","cald_ipsadt:1","140","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("퇴사일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb03_00","img_insa:2","sta_gb03:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("최종학력");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","sta_gb03_00:0","170",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb03_01","img_insa:2","sta_gb03_00:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("주소");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_01","sta_gb03_01:0","200",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwi","sta_gb00_00:0","55",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_age","sta_gb00_00_00:1","85",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tel2","sta_gb00_02:1","115","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_toisadt","sta_gb00_00_01:1","145","12.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_school","sta_gb03_00:1","175",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","sta_gb03_01:1","205",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("출력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","ds_insa","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_sabun","value","ds_insa","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_jikwi","value","ds_insa","JIKWI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_sa_gb1","value","ds_insa","SA_GB1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_sex","value","ds_insa","SEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_age","value","ds_insa","AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_tel1","value","ds_insa","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_tel2","value","ds_insa","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cald_ipsadt","value","ds_insa","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cald_toisadt","value","ds_insa","TOISADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_school","value","ds_insa","SCHOOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_addr","value","ds_insa","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR121F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR121F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.HR121F_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_buse.jsp";
        	in_ds = "ds_buse=ds_buse";
        	out_ds = "ds_buse=ds_buse";
        	str_arg = "buse_nm=''" ;
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false, this);
        };

        this.Callbak_none = function(Trid, ErrorCode, ErrorMsg)
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

        this.getData_insa = function(busecd, nm)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr121.jsp";
        	in_ds = "ds_insa=ds_insa";
        	out_ds = "ds_insa=ds_insa";
        	str_arg = " BUSECD='" + busecd + "'" +
        	          " NAME='" + nm + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false, this);
        }

        this.grd_buse_oncelldblclick = function(obj,e)
        {
        	this.getData_insa(this.ds_buse.getColumn(obj.getSelectedDatasetRows(),"CODE"),"");
        };

        this.ds_insa_onrowposchanged = function(obj,e)
        {
        	var img_url = "https://cj-erp.chunjae.co.kr/erp-next/hr/img/"+this.ds_insa.getColumn(e.newrow,"IMG_NAME");
        	this.img_insa.set_image(img_url);
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var rdUrl = gv_svcUrl + "rpt/hr/HR101P.mrd";
            var rdParam = "/rp [" + this.edt_sabun.value + "]";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("개인자료 조회");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.getData_insa("",this.edt_s_name.value);
        };

        this.edt_s_name_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.getData_insa("",this.edt_s_name.value);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR121F_onload,this);
            this.edt_s_name.addEventHandler("onkeydown",this.edt_s_name_onkeydown,this);
            this.grd_buse.addEventHandler("oncelldblclick",this.grd_buse_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_insa.addEventHandler("oncelldblclick",this.grd_insa_oncelldblclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.ds_insa.addEventHandler("onrowposchanged",this.ds_insa_onrowposchanged,this);
        };
        this.loadIncludeScript("HR121F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
