(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD600F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBuse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_1\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_2\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_3\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_4\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_OLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_OLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_OLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT_OLD_4\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataEtc", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_GB\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","0","1190","735",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5.8%","1.09%","38%","9.52%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("통제성경비 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01","3.37%","Static00:8.7%","8.41%","4.36%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.div_main.addChild(obj.name, obj);

            obj = new Spin("sp_yy","Static01:0%","Static00:8.70%","11.94%","4.36%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.getSetter("textAlign").set("center");
            obj.set_border("1px groove #c3e4cd");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_min("0");
            obj.set_max("9999");
            obj.set_value("2022");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_all","sp_yy:14.08%","Static00:8.70%","12%","4.36%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("하위일괄 적용");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_value("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_buse","3.37%","Static01:15.63%","20.34%","83.68%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsBuse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_data","grd_buse:3.31%","chk_all:15.63%","73.95%","42.18%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsData");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"부서명\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"월\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"부서운영비\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"업무시식비\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"사무용품비\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"합계\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" suppress=\"1\" textAlign=\"center\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:MM\" locale=\"aa_ER\" textAlign=\"center\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:AMOUNT_1\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:AMOUNT_2\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:AMOUNT_3\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"5\" expr=\"(AMOUNT_1!=null?nexacro.toNumber(AMOUNT_1):0) + (AMOUNT_2!=null?nexacro.toNumber(AMOUNT_2):0) + (AMOUNT_3!=null?nexacro.toNumber(AMOUNT_3):0)\" displaytype=\"number\" edittype=\"none\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" background=\"#0d908c\" text=\"합계\" color=\"white\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_1)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_2)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"4\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_3)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_1)&quot;) + dataset.getSum(&quot;nexacro.toNumber(AMOUNT_2)&quot;) + dataset.getSum(&quot;nexacro.toNumber(AMOUNT_3)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\" textAlign=\"right\"/></Band></Format><Format id=\"format_2019\"><Columns><Column size=\"180\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"부서명\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"월\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"부서운영비\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"업무시식비\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"사무용품비\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"일반접대비\"/><Cell col=\"6\" text=\"합계\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" suppress=\"1\" textAlign=\"center\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:MM\" locale=\"aa_ER\" textAlign=\"center\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:AMOUNT_1\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:AMOUNT_2\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:AMOUNT_3\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:AMOUNT_4\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"6\" expr=\"(AMOUNT_1!=null?nexacro.toNumber(AMOUNT_1):0) + (AMOUNT_2!=null?nexacro.toNumber(AMOUNT_2):0) + (AMOUNT_3!=null?nexacro.toNumber(AMOUNT_3):0)+(AMOUNT_4!=null?nexacro.toNumber(AMOUNT_4):0) \" displaytype=\"number\" edittype=\"none\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" background=\"#0d908c\" text=\"합계\" color=\"white\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_1)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_2)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_3)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" background=\"#0d908c\" font=\"normal 700 13px/normal &quot;Gulim&quot;\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_4)&quot;)\" color=\"white\"/><Cell col=\"6\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMOUNT_1)&quot;) + dataset.getSum(&quot;nexacro.toNumber(AMOUNT_2)&quot;) + dataset.getSum(&quot;nexacro.toNumber(AMOUNT_3)&quot;)  + dataset.getSum(&quot;nexacro.toNumber(AMOUNT_4)&quot;)\" displaytype=\"number\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("stt_etc","grd_buse:3.31%","grd_data:0.65%","20.17%","4.36%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("\' \'");
            obj.set_background("#c3e4cd");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_data_etc","grd_buse:3.31%","stt_etc:0%","73.95%","36.89%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsDataEtc");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"380\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"작성일\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"금액\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"사유\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ACNTTIT_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:YMD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:AMOUNT\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:BIGO\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5.45%","6.4%","4.38%","1.68%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_finish",null,"5.45%","8.08%","4.38%","btn_save:9.62%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_text("마감하기");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"grd_data:0.65%","6.40%","4.38%","1.69%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"grd_data:0.65%","6.40%","4.38%","btn_del:9.8%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("추가");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD600F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD600F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD600F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var section_code, mm, order_gb;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.PD600F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.div_main.form.sp_yy.set_value(f_date);
        	this.fnSetdata_Grid_format(this.div_main.form.sp_yy.value);
        	var strUrl, inDs, outDs, strArg;
        	strUrl = "JSP/common/getdata_buse.jsp";
        	inDs = "dsBuse=dsBuse";
        	outDs = "dsBuse=dsBuse";
        	strArg = "buse_nm=''" ;
        	this.gfn_TransactionP("select", strUrl, inDs, outDs, strArg, "Callback_buse_select", true, "P", false, this);
        };

        this.Callback_buse_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        }

        this.fnGetData_data = function()
        {
            var strUrl, outDs, strArg;

            strUrl = "JSP/pd/PD600_select.jsp";
        	inDs = "dsData=dsData";
            outDs = "dsData=dsData";
            strArg = "yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value) + " section_code="+nexacro.wrapQuote(section_code);

        	this.gfn_TransactionP("select", strUrl, inDs, outDs, strArg, "Callback_select", true, "P", false, this);
        }

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        }

        this.div_main_grd_buse_oncelldblclick = function(obj,e)
        {
        	section_code = this.dsBuse.getColumn(e.row, "CODE");
        	this.fnGetData_data();
        };

        this.div_main_grd_data_onenterdown = function(obj,e)
        {
        	this.div_main.form.grd_data.setCellPos(e.cell + 1);
        	this.fnSet_Amount(e.row, e.cell);
        };

        this.fnSet_Amount = function(nRow, nCell)
        {
           var i;

           if (this.div_main.form.chk_all.value == true)
           {
              for (i = nRow + 1; i <= 11; i++)
              {
                  switch(nCell)
                  {
                     case 2 : this.dsData.setColumn(i,"AMOUNT_1",this.dsData.getColumn(nRow,"AMOUNT_1"));
                              break;
                     case 3 : this.dsData.setColumn(i,"AMOUNT_2",this.dsData.getColumn(nRow,"AMOUNT_2"));
                              break;
                     case 4 : this.dsData.setColumn(i,"AMOUNT_3",this.dsData.getColumn(nRow,"AMOUNT_3"));
                              break;
                     case 5 : this.dsData.setColumn(i,"AMOUNT_4",this.dsData.getColumn(nRow,"AMOUNT_4"));
                              break;
                  }
              }
           }
        }

        this.div_main_btn_save_onclick = function(obj,e)
        {
        	var strUrl, inDs, strArg;

            strUrl = "JSP/pd/PD600_dml.jsp";
            inDs = "dsData=dsData:U";
            strArg = "yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value) + " sabun="+nexacro.wrapQuote(gv_sabun);
            trace(this.dsData.saveXML());

        	this.gfn_TransactionP("dml", strUrl, inDs, "", strArg, "Callback_dml", true, "P", false, this);
        };

        this.Callback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	alert("저장 완료");
        }

        this.div_main_sp_yy_onspin = function(obj,e)
        {
        	this.fnSetdata_Grid_format(e.postvalue);
        	this.dsData.clearData();
        	section_code = "";
        	order_gb = "";
        	mm = "";
        };

        this.fnSetdata_Grid_format = function(strText)
        {
        	if (strText < "2019")
        	{
        		this.div_main.form.grd_data.set_formatid("default");
        	}
        	else
        	{
        		this.div_main.form.grd_data.set_formatid("format_2019");
        	}
        }
        this.dsData_onload = function(obj,e)
        {
        	this.div_main.form.stt_etc.set_text("");
        	this.dsDataEtc.clearData();

        	if (this.dsData.getColumn(0,"GB") == "Y")
        	{
        	   this.div_main.form.grd_data.set_readonly(true);
        	}
        	else
        	{
        	   this.div_main.form.grd_data.set_readonly(false);
        	}
        };

        this.div_main_grd_data_oncellclick = function(obj,e)
        {
        	var maxCol;

            if (nexacro.toNumber(this.div_main.form.sp_yy.value) < 2019) maxCol = 5;
            else maxCol = 6;

            mm = this.dsData.getColumn(e.row,"MM");
            section_code = this.dsData.getColumn(e.row,"SECTION_CODE");
        	switch(e.cell)
        	{
        	    case 1 : this.div_main.form.stt_etc.set_text(mm + "월 전체 내역");
        	             break;
        	    case 2 : this.div_main.form.stt_etc.set_text(mm + "월 부서운영비 내역");
        	             break;
        	    case 3 : this.div_main.form.stt_etc.set_text(mm + "월 업무시식비 내역");
        	             break;
        	    case 4 : this.div_main.form.stt_etc.set_text(mm + "월 사무용품비 내역");
        	             break;
        	    case 5 : if (this.div_main.form.sp_yy.value >= "2019") this.div_main.form.stt_etc.set_text(mm + "월 일반접대비 내역");
        	             else this.div_main.form.stt_etc.set_text("");
        	             break;
        	    default : this.div_main.form.stt_etc.set_text("");
        	         break;
        	}

        	if (e.cell > 0 && e.cell < maxCol)
        	{
        		if (e.cell == 1)
        		{
        			order_gb = "";
        		}
        		else
        		{
        			order_gb = (e.cell - 1).toString();
        		}

        		this.fnGetData_etc();
        	}
        };

        this.fnGetData_etc = function()
        {
        	var strUrl, outDs, strArg;

        	strUrl = "JSP/pd/PD600_select_etc.jsp";
        	strDs = "dsDataEtc=dsDataEtc";
        	strArg = "yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value) + " section_code="+nexacro.wrapQuote(section_code) + " mm="+nexacro.wrapQuote(mm) + " order_gb="+nexacro.wrapQuote(order_gb);

        	this.gfn_TransactionP("select_etc", strUrl, strDs, strDs, strArg, "Callback_select_etc", true, "P", false, this);
        }

        this.Callback_select_etc = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        }

        this.div_main_btn_finish_onclick = function(obj,e)
        {
        	var strUrl, strArg;

        	strUrl = "JSP/pd/PD600_end.jsp";
        	strArg = "yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value) + " section_code="+nexacro.wrapQuote(section_code) + " gb="+nexacro.wrapQuote("Y") + " sabun="+nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("end_dml", strUrl, "", "", strArg, "Callback_end", true, "P", false, this);
        };

        this.Callback_end = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	alert("마감되었습니다.");
        	this.fnGetData_data();
        }

        this.div_main_btn_add_onclick = function(obj,e)
        {
           if (this.div_main.form.grd_data.getCellPos() >= 2)
           {
              this.fnSetdata_etc();
           }
        };

        this.fnSetdata_etc = function()
        {
        	var strArg = "yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value) + " mm="+nexacro.wrapQuote(mm) + " order_gb="+nexacro.wrapQuote(order_gb) + " section_code="+nexacro.wrapQuote(section_code) + " gv_sabun="+nexacro.wrapQuote(gv_sabun);
        	this.lfn_showModal("test", {yy:this.div_main.form.sp_yy.value, mm:mm, order_gb:order_gb, section_code:section_code, gv_sabun:gv_sabun}, "pd::PD601F.xfdl", "fnAddCallBack", this, 10, 58, 420, 200);
        }

        this.fnAddCallBack = function(strID, ret)
        {
        	if(ret == 0)
        	{
        		this.fnGetData_data();
        		this.fnGetData_etc();
        	}
        }

        this.div_main_btn_del_onclick = function(obj,e)
        {
        	var strUrl, strArg, nRow;
            if (this.dsDataEtc.getColumn(this.dsDataEtc.rowposition,"SEQNO") == "001")
            {
               return;
            }
        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "선택하신 항목을 삭제하시겠습니까?" , "삭제", "warning" ))
            {
                nRow = this.dsDataEtc.rowposition;
        		strUrl = "JSP/pd/PD600_etc_delete.jsp";
        		strArg = " yy="+nexacro.wrapQuote(this.dsDataEtc.getColumn(nRow,"YY")) +
        		          " mm="+nexacro.wrapQuote(this.dsDataEtc.getColumn(nRow,"MM")) +
        		          " section_code="+nexacro.wrapQuote(this.dsDataEtc.getColumn(nRow,"SECTION_CODE")) +
        		          " seqno="+nexacro.wrapQuote(this.dsDataEtc.getColumn(nRow,"SEQNO")) +
        		          " acnttit_no="+nexacro.wrapQuote(this.dsDataEtc.getColumn(nRow,"ACNTTIT_NO"));

        		this.gfn_TransactionP("etc_delete", strUrl, "", "", strArg, "Callback_etc_delete", true, "P", false, this);
            }
        };

        this.Callback_etc_delete = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	var nRow = this.dsDataEtc.rowposition;
        	this.dsDataEtc.deleteRow(nRow);
        	this.fnGetData_data();
        	alert("처리되었습니다.");
        }
        this.PD600F_onsize = function(obj,e)
        {
        	if(this.width < 1190 || this.width > 1630)
        		this.div_main.set_width(this.width - 20)
        	else
        		this.div_main.set_width(1190);

        	if(this.height < 735)
        		this.div_main.set_height(this.height - 20)
        	else
        		this.div_main.set_height(735);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD600F_onload,this);
            this.addEventHandler("onsize",this.PD600F_onsize,this);
            this.div_main.form.sp_yy.addEventHandler("onspin",this.div_main_sp_yy_onspin,this);
            this.div_main.form.grd_buse.addEventHandler("oncelldblclick",this.div_main_grd_buse_oncelldblclick,this);
            this.div_main.form.grd_data.addEventHandler("onenterdown",this.div_main_grd_data_onenterdown,this);
            this.div_main.form.grd_data.addEventHandler("oncellclick",this.div_main_grd_data_oncellclick,this);
            this.div_main.form.btn_save.addEventHandler("onclick",this.div_main_btn_save_onclick,this);
            this.div_main.form.btn_finish.addEventHandler("onclick",this.div_main_btn_finish_onclick,this);
            this.div_main.form.btn_del.addEventHandler("onclick",this.div_main_btn_del_onclick,this);
            this.div_main.form.btn_add.addEventHandler("onclick",this.div_main_btn_add_onclick,this);
            this.dsData.addEventHandler("onload",this.dsData_onload,this);
        };
        this.loadIncludeScript("PD600F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
