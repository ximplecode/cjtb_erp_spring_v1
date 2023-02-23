(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR122F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_JIKWINM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bal", this);
            obj._setContents("<ColumnInfo><Column id=\"BAL_GB\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NICK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insaBalGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">승진</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">보임</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">호칭</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">전보</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">퇴직</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">정규직전환</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jikwi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nick", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인사발령");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_buse","3","50","280",null,null,"3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_buse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","grd_buse:3","50","55","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","Static00:1","50","216","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","edt_name:1","50","51","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_insa","grd_buse:3","edt_name:1","324",null,null,"3",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_insa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\" band=\"left\"/><Column size=\"47\" band=\"left\"/><Column size=\"73\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSENM\"/><Cell col=\"1\" text=\"bind:JIKWINM\"/><Cell col=\"2\" text=\"bind:SABUN\"/><Cell col=\"3\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb","btn_search:5","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("발령구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_balGB","sta_gb:0","50",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_insaBalGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("7");
            obj.set_rowcount("0");
            obj.set_direction("vertical");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00","grd_insa:5","sta_gb:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("발령부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_balYMD","grd_insa:5","sta_gb00:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("발령일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","sta_balYMD:0","110",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_gb00:0","rd_balGB:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ymd","sta_balYMD:2","Static01_00:5","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ymdAll","cald_ymd:0","Static01_00:5","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일괄적용");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_buse","sta_gb00:2","85",null,"20","28.08%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_buse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_buseAll","cb_buse:0","rd_balGB:4","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("일괄적용");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00_00","btn_buseAll:5","rd_balGB:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("발령직위");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_jikwi","sta_gb00_00:2","rd_balGB:5",null,"20","5.68%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_jikwi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_jikwiAll","cb_jikwi:0","rd_balGB:4","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("일괄적용");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bal","grd_insa:5","Static01:2",null,null,"3","3",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_bal");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"124\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"발령일자\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"발령부서\"/><Cell col=\"5\" text=\"발령보임\"/><Cell col=\"6\" text=\"발령직위\"/><Cell col=\"7\"/></Band><Band id=\"body\"><Cell text=\"bind:BAL_GB\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_insaBalGB\" combocodecol=\"CODE\" combodatacol=\"NAME\" combotype=\"dropdown\"/><Cell col=\"1\" text=\"bind:YMD\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:SABUN\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:BUSE\" displaytype=\"combocontrol\" edittype=\"combo\" combotype=\"filterlike\" combodataset=\"ds_buse\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:NICK\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"ds_nick\" combocodecol=\"CODE\" combodatacol=\"NAME\" combotype=\"dropdown\"/><Cell col=\"6\" text=\"bind:JIKWI\" displaytype=\"combocontrol\" edittype=\"combo\" combotype=\"dropdown\" combodataset=\"ds_jikwi\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR122F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR122F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR122F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.HR122F_onload = function(obj,e)
        {
        	var dt = new Date();
        	this.cald_ymd.set_value(dt);

        	this.lfn_grdAutofit(this.grd_bal);
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_buse.jsp";
        	in_ds = "ds_buse=ds_buse";
        	out_ds = "ds_buse=ds_buse";
        	str_arg = "buse_nm=''" ;
        	this.gfn_TransactionP("select_buse", str_url, in_ds, out_ds, str_arg, "Callback_select_jikwi", true, "S", false, this);
        };

        this.Callback_select_jikwi = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_jikwi.jsp";
        	in_ds = "ds_jikwi=ds_jikwi";
        	out_ds = "ds_jikwi=ds_jikwi";
        	str_arg = "" ;
        	this.gfn_TransactionP("select_jikwi", str_url, in_ds, out_ds, str_arg, "Callback_select_nick", true, "S", false, this);
        }

        this.Callback_select_nick = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_nick.jsp";
        	in_ds = "ds_nick=ds_nick";
        	out_ds = "ds_nick=ds_nick";
        	str_arg = "" ;
        	this.gfn_TransactionP("select_nick", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false, this);
        }

        this.Callback_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0 && ErrorCode != -99)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_name.value) == false)
        	{
        		this.getData_insa("",this.edt_name.value,"");
        	}
        };

        this.getData_insa = function(sabun,name,busecd)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/common/getdata_insa.jsp";
        	in_ds = "ds_insa=ds_insa";
        	out_ds = "ds_insa=ds_insa";
        	str_arg = "sabun='"+sabun+"' name='"+name+"' busecd='"+busecd+"'";
        	this.gfn_TransactionP("select_insa", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        };


        this.grd_buse_oncelldblclick = function(obj,e)
        {
        	this.getData_insa("","",this.ds_buse.getColumn(e.row,"CODE"));
        };

        this.HR122F_onsize = function(obj,e)
        {
        	this.lfn_grdAutofit(this.grd_bal);
        };

        this.grd_insa_oncelldblclick = function(obj,e)
        {
        	this.setBal(e.row);
        };

        this.setBal = function(sRow)
        {
        	var nRow = this.ds_bal.findRow("SABUN", this.ds_insa.getColumn(sRow,"SABUN"));

        	if (nRow >= 0)
        	{
        		return false;
        	}

        	nRow = this.ds_bal.addRow();
        	this.ds_bal.setColumn(nRow,"YMD",this.cald_ymd.value);
        	this.ds_bal.setColumn(nRow,"BAL_GB",this.rd_balGB.value);
        	this.ds_bal.setColumn(nRow,"SABUN",this.ds_insa.getColumn(sRow,"SABUN"));
        	this.ds_bal.setColumn(nRow,"NAME",this.ds_insa.getColumn(sRow,"NAME"));
        	this.ds_bal.setColumn(nRow,"BUSE",this.ds_insa.getColumn(sRow,"BUSECD"));
        	this.ds_bal.setColumn(nRow,"JIKWI",this.ds_insa.getColumn(sRow,"OLD_JIKWICD"));
        	this.ds_bal.setColumn(nRow,"NICK",this.ds_insa.getColumn(sRow,"JIKWICD"));
        }


        this.btn_buseAll_onclick = function(obj,e)
        {
        	var i;

        	for (i = 0; i < this.ds_bal.getRowCount(); i++ )
        	{
        		this.ds_bal.setColumn(i, "BUSE", this.cb_buse.value);
        	}
        };


        this.btn_jikwiAll_onclick = function(obj,e)
        {
        	var i;

        	for (i = 0; i < this.ds_bal.getRowCount(); i++ )
        	{
        		this.ds_bal.setColumn(i, "JIKWI", this.cb_jikwi.value);
        	}
        };

        this.btn_ymdAll_onclick = function(obj,e)
        {
        	var i;

        	for (i = 0; i < this.ds_bal.getRowCount(); i++ )
        	{
        		this.ds_bal.setColumn(i, "YMD", this.cald_ymd.value);
        	}
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	this.ds_bal.clearData();
        };


        this.btn_save_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_HR122.jsp";
        	in_ds = "ds_bal=ds_bal:U";
        	out_ds = "ds_bal=ds_bal";
        	str_arg = "update_id='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") + "'";
        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false, this);
        };

        this.Callback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0 && ErrorCode != -99)
        	{
        		if (ErrorCode != -99)
        		{
        		  this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.ds_bal.clearData();
        	this.alert("저장되었습니다.");
        }

        this.grd_bal_oncellclick = function(obj,e)
        {
        	if (e.col == 7)
        	{
        		this.ds_bal.deleteRow(e.row);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR122F_onload,this);
            this.addEventHandler("onsize",this.HR122F_onsize,this);
            this.grd_buse.addEventHandler("oncelldblclick",this.grd_buse_oncelldblclick,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_insa.addEventHandler("oncelldblclick",this.grd_insa_oncelldblclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_ymdAll.addEventHandler("onclick",this.btn_ymdAll_onclick,this);
            this.btn_buseAll.addEventHandler("onclick",this.btn_buseAll_onclick,this);
            this.btn_jikwiAll.addEventHandler("onclick",this.btn_jikwiAll_onclick,this);
            this.grd_bal.addEventHandler("oncellclick",this.grd_bal_oncellclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("HR122F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
