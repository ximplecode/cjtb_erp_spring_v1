(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW801");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPostDst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PAYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"INVOICE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"APP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_PHONE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatusSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">????????????</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostDst_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PAYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"INVOICE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"APP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_PHONE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrintSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoods", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFeeGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">????????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoc", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">????????????</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">???????????????</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">????????? - ??????</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">????????? - ??????</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">????????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrintGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostExcel_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"INVOICE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_dst","1.23%","28.43%",null,null,"1.85%","1.81%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsPostDst");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"400\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"260\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"0\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"????????????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"????????????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"?????????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"??????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"????????? ??????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"??????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"?????????/?????????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"????????? ??????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"????????? ??????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"????????????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"??????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"??????\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" suppress=\"bind:POST_NO\"/><Cell col=\"1\" text=\"bind:POST_NO\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:POST_NUMBER\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PAYEE_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ADDR\"/><Cell col=\"5\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:GOODS_CODE\" combodataset=\"dsGoods\" combodatacol=\"NAME\" edittype=\"combo\" displaytype=\"combocontrol\" combocodecol=\"CODE\"/><Cell col=\"7\" text=\"bind:DEPT_NAME_NUMBER\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:FROM_ADDR\"/><Cell col=\"9\" text=\"bind:FROM_PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:STATUS\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:LABEL_STATUS\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:LOCATION\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsLoc\" combodatacol=\"NAME\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2.1%","11.22%",null,null,"92.35%","85.16%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_font("bold 14px/normal \"??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","2.1%","17.01%",null,null,"92.35%","79.38%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("????????????");
            obj.set_font("bold 14px/normal \"??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","2.04%","24.22%",null,null,"90.19%","72.29%",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("?????? ?????????");
            obj.set_font("bold 14px/normal \"??????\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_begin_date","8.09%","11.22%",null,null,"83.02%","85.16%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_end_date","21.6%","11.22%",null,null,"69.51%","85.16%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","18.09%","11.22%",null,null,"79.38%","85.16%",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_font("bold 14px/normal \"??????\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_search","31.98%","11.22%",null,null,"59.81%","85.16%",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsStatusSearch");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("14px/normal \"Arial\"");
            obj.set_text("????????????");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","41.42%","11.22%",null,null,"54.94%","85.16%",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("??????");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_status","8.09%","17.01%",null,null,"83.7%","79.38%",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("14px/normal \"Arial\"");
            obj.set_text("????????????");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_status_save","17.9%","17.01%",null,null,"78.46%","79.38%",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("??????");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","24.26%","17.01%",null,null,"68.21%","79.38%",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("??????????????????");
            obj.set_font("bold 14px/normal \"??????\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_print","31.98%","17.01%",null,null,"59.81%","79.38%",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("dsPrintGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("14px/normal \"Arial\"");
            obj.set_text("??????");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print_save","41.42%","17.01%",null,null,"54.94%","79.38%",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("??????");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_loc","85.62%","24.34%",null,null,"1.85%","72.17%",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsLoc");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_enable("false");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","79.32%","24.34%",null,null,"14.75%","72.17%",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("????????????");
            obj.set_font("bold 14px/normal \"??????\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exlup","89.32%","17.71%",null,null,"1.85%","78.8%",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("???????????? ?????????");
            obj.set_visible("false");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","1.23%","22.41%",null,null,"1.85%","77.35%",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#cfddea");
            this.addChild(obj.name, obj);

            obj = new Static("Static99_00","1.17%","9.04%",null,null,"1.79%","90.8%",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#cfddea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4.73%","3.95%",null,"1.8%","91.77%",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("??????");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"4.73%","3.95%",null,"btn_save:5%","91.77%",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("??????");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"4.73%","5.43%",null,"btn_del:50%","91.77%",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("????????????");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dst_excel","1650","256","1182","599",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsPostDst_excel");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"400\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"270\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"?????????\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"1\" text=\"?????????\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"2\" text=\"??????(?????????)\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"3\" text=\"?????????\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"4\" text=\"????????????(???/??????)\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"5\" text=\"?????????\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"6\" text=\"??????(?????????)\" background=\"#f0f0f0\" color=\"black\"/></Band><Band id=\"body\"><Cell text=\"bind:PAYEE_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ADDR\"/><Cell col=\"3\" text=\"bind:GOODS_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DEPT_NAME_NUMBER\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:FROM_PHONE_NUMBER\"/><Cell col=\"6\" text=\"bind:FROM_ADDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.20%","1.08%",null,null,"70.56%","89.64%",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("?????? ?????? ??????");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"??????????????? ??????B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,830,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW801.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW801.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW801.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sResult, strSABUN, strSEQ = "", out_var, row_status, target_row;
        var i_flow_id,NEW_I_FLOW_ID, str_url, str_outds, str_arg, return_str;
        var Fv_HeadChk=0;
        var savecount, savecounttemp;
        var rowcount; // ???????????? ???????????? ??????
        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_sabun = gds_userinfo.getColumn(0,"SABUN");
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        this.GW801_onload = function(obj,e)
        {
        	var strUrl = "JSP/gw/SQL_GW801_ADMIN_CHECK.jsp";
        	var strDs = "";
        	var strArg = " SABUN =" + nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("ADMINCK", strUrl, strDs, strDs, strArg, "callback_admin_check", false, "P", false, this);
        };

        this.callback_admin_check = function(trid, ErrorCode, ErrorMsg)
        {
            if (ErrorCode != 0)
              {alert(ErrorMsg);
               return;}

            if (trid == "ADMINCK")
            {
        		if (nexacro.toNumber(ErrorMsg) < 1 )
        		{
        			alert("???????????? ?????? ?????? ?????????.");
        			if(this.parent.parent.name == "WorkDetail"){
        				var nRow = this.parent.parent.ds_selectMenu.findRow("selectMenu_Div_id",this.parent.name);
        				var bClose_id = this.parent.parent.ds_selectMenu.getColumn(nRow,"selectButton_Div_id");
        				this.parent.parent.div_selectMenu.form.all[bClose_id].form.CloseButton.click();
        			}
        			else
        				this.close();
        		}
        		var objDate = new nexacro.Date();
        		var today = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        		this.cald_begin_date.set_value(today);
        		this.cald_end_date.set_value(today);

        		this.fnGetLocValue();
        		this.btn_search.click();
            }
        }
        // ????????? ?????? ????????????
        this.fnGetLocValue = function()
        {
        	if ( gds_userinfo.getColumn(0,"BUSECD") == '6G000' || gds_userinfo.getColumn(0,"BUSECD") == '58000' || gds_userinfo.getColumn(0,"BUSECD") == '9A660') // ????????????
        	 {
        		this.cbo_loc.set_value('1');
        	 }else if ( gds_userinfo.getColumn(0,"BUSECD") == '9A400' ) // ???????????????
        	 {
        		this.cbo_loc.set_value('2');
        	 }else if ( gds_userinfo.getColumn(0,"BUSECD") != null && (gds_userinfo.getColumn(0,"BUSECD").substr(0,2) == 'DJ' || gds_userinfo.getColumn(0,"BUSECD").substr(0,2) == 'DK') ) // ?????????
        	 {
        		this.cbo_loc.set_value('3');
        	 }else if ( gds_userinfo.getColumn(0,"BUSECD") == 'EA300' || gds_userinfo.getColumn(0,"BUSECD") == 'DH400' )  // T??????????????????
        	 {
        		this.cbo_loc.set_value('5');
        	 }
        	 else // ?????????
        	 {
        		this.cbo_loc.set_value('4');
        	 }
        }
        // ???????????? ??????
        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/gw/SQL_GW801_SELECT.jsp";
        	var strDs = "dsPostDst=dsPostDst";

        	var strArg = " BEGIN_DATE =" + nexacro.wrapQuote(this.cald_begin_date.value);
        	strArg += " END_DATE =" + nexacro.wrapQuote(this.cald_end_date.value);
        	strArg += " STATUS =" + nexacro.wrapQuote(this.cbo_search.value);
        	strArg += " LOCATION =" + nexacro.wrapQuote(this.cbo_loc.value);

        	this.gfn_TransactionP("SelectIsDst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }

        this.grd_dst_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk == 0)
        			Fv_HeadChk = 1;
        		else
        			Fv_HeadChk = 0;
        		this.grd_dst.setCellProperty("head",0,"text",Fv_HeadChk);
        		for(var i = 0; i < this.dsPostDst.rowcount; i++)
        		{
        			this.dsPostDst.setColumn(i, "CHK", Fv_HeadChk);
        		}
        	}
        };

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
              {alert(ErrorMsg);
               return;}
        	else if (trid != null)
        	{
        		trid = trid.split("|");
        		trid = trid[0]
        	}
        	if ( trid == "DeleteMst") // ?????? ?????? ???
            {
        		this.btn_search.click();
        		alert("?????? ???????????????.");
            }
            if ( trid == "PrintMst")
            {
        		this.btn_search.click();
            }
            if ( trid == "UpdateStatusMst")
            {
        		savecounttemp++;
        		if ( savecount == savecounttemp ) // ????????? ?????? ???????????? ??? ?????? ??????
        			this.btn_search.click();
            }
            if ( trid == "UpdatePrintStatusMst")
            {
        		savecounttemp++;
        		if ( savecount == savecounttemp ) // ????????? ?????? ???????????? ??? ?????? ??????
        			this.btn_search.click();
            }
            if ( trid == "UpdateInvoiceDst")
            {
        		savecounttemp++;
        		if ( rowcount == savecounttemp ) // ????????? ?????? ???????????? ??? ?????? ??????
        		{
        			alert("???????????? " +rowcount+"(???)??? ?????? ???????????????.");
        			this.btn_search.click();
        		}
            }
        }
        // ?????? ?????? ??????
        this.btn_del_onclick = function(obj,e)
        {
        	if(this.dsPostDst.rowcount <= 0)
        	{
        		alert("?????? ????????? ??????????????? ????????????.");
        		return;
        	}
        	else{
        		if(this.confirm("?????????????????????????\r\n" + "????????? ????????? ????????? ??? ????????????."))
        		{
        			for (var i = 0; i < this.dsPostDst.rowcount; i++)
        			{
        				if(this.dsPostDst.getColumn(i, "CHK") == 1)
        					this.fnMstDeleteTran(i);
        			}
        		}
        	}
        };
        // ????????? ?????? ??????
        this.fnMstDeleteTran = function(i)
        {
        	var strUrl = "JSP/gw/SQL_GW801_M_DELETE.jsp";
        	var strDs = "";
        	var strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_MST_ID"));

        	this.gfn_TransactionP("DeleteMst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // ???????????? ??? ?????? ????????? ??????
        this.fnUpdatePrintGubunTran = function(i)
        {
        	var strUrl = "JSP/gw/SQL_GW801_M_PRINTYN.jsp";
        	var strDs = "";
        	var strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_MST_ID"));

        	this.gfn_TransactionP("PrintMst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // MST ???????????? ????????????
        this.fnMstUpdateStatusTran = function(i)
        {
        	var strUrl = "JSP/gw/SQL_GW801_M_UPDATE_STATUS.jsp";
        	var strDs = "";
        	var strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_MST_ID"));
            strArg += " STATUS =" + nexacro.wrapQuote(this.cbo_status.value);
            strArg += " I_FLOW_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"I_FLOW_ID"));

        	this.gfn_TransactionP("UpdateStatusMst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // MST ?????? ?????? ???????????? ????????????
        this.fnMstUpdatePrintStatusTran = function(i)
        {
        	var strUrl = "JSP/gw/SQL_GW801_M_UPDATE_PRINT_STATUS.jsp";
        	var strDs = "";
        	var strArg = " MST_ID =" + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_MST_ID"));
            strArg += " PRINT_GUBUN =" + nexacro.wrapQuote(this.cbo_print.value);

        	this.gfn_TransactionP("UpdatePrintStatusMst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }
        // ??????????????? ?????? ??? I_FLOW_ID ??????
        this.btn_status_save_onclick = function(obj,e)
        {
        	savecount = 0; // ?????? ??????
        	savecounttemp = 0; // ?????? ?????? ??????
        	var chktemp = 0;
        	if(this.dsPostDst.rowcount <= 0 )
        	{
        		alert("??????????????? ??????????????? ????????????. ????????? ?????? ??? ?????? ?????????.");
        		return;
        	}
        	for(var i=0; i< this.dsPostDst.rowcount; i++)
        	{
        		if( this.dsPostDst.getColumn(i,"CHK") == 1 ){
        			chktemp = 1;
        			savecount++;
        		}
        	}
        	if ( chktemp == 0 )
        	{
        		alert("????????? ????????? ????????????. ????????? ?????? ??? ?????? ?????????.");
        		return;
        	}

        	if(this.confirm("????????? ("+this.cbo_status.text+")??? ?????? ???????????????????\r\n ???????????? ????????? ??????????????? ???????????????."))
        	{
        		for(var i=0; i< this.dsPostDst.rowcount; i++)
        		{
        			if( this.dsPostDst.getColumn(i,"CHK") == 1 )
        				this.fnMstUpdateStatusTran(i);
        		}
        	}
        };
        // ?????? ?????? ?????? ??????
        this.btn_save_onclick = function(obj,e)
        {
        	if ( this.dsPostDst.rowcount <= 0 )
        	{
        			alert("?????? ????????? ???????????? ????????????.");
        			return;
        	}
        	for( i=0; i< this.dsPostDst.rowcount; i++ )
        	{
        		if ( this.dsPostDst.getRowType(i) == '4' ) // ?????? ??????
        		{
        			trace( i+ " " + this.dsPostDst.getRowType(i) );
        			this.fnDstSaveTran(i);
        		}
        	}
        	this.btn_search.click();
        };

        this.fnDstSaveTran = function(i)
        {
        	var strUrl   = "JSP/gw/SQL_GW800_D_UPDATE.jsp";
        	var strDs = "";

        	var strArg  = " DST_ID="      		+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_DST_ID"));
            strArg += " POST_NUMBER="       	+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"POST_NUMBER"));
        	strArg += " PAYEE_NAME="   			+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"PAYEE_NAME"));
        	strArg += " ADDR="       			+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"ADDR"));
        	strArg += " PHONE_NUMBER="    		+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"PHONE_NUMBER"));
        	strArg += " GOODS_CODE="     		+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"GOODS_CODE"));
        	strArg += " GOODS_ETC=" 			+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"GOODS_ETC"));
        	strArg += " BELONGING_DEPT_CODE="   + nexacro.wrapQuote(this.dsPostDst.getColumn(i,"BELONGING_DEPT_CODE"));
        	strArg += " SEND_NAME="       		+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"DEPT_NAME_NUMBER"));
        	strArg += " LOCATION="       		+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"LOCATION"));
        	strArg += " FROM_ADDR="       		+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"FROM_ADDR"));
        	strArg += " FROM_PHONE_NUMBER="    	+ nexacro.wrapQuote(this.dsPostDst.getColumn(i,"FROM_PHONE_NUMBER"));

        	this.gfn_TransactionP("UpdateDst", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // ????????? ?????? ??????
        this.btn_print_save_onclick = function(obj,e)
        {
        	savecount = 0; // ?????? ??????
        	savecounttemp = 0; // ?????? ?????? ??????
        	var chktemp = 0;
        	if(this.dsPostDst.rowcount <= 0 )
        	{
        		alert("??????????????? ??????????????? ????????????. ????????? ?????? ??? ?????? ?????????.");
        		return;
        	}
        	for(var i=0; i< this.dsPostDst.rowcount; i++)
        	{
        		if( this.dsPostDst.getColumn(i,"CHK") == 1 ){
        			chktemp = 1;
        			savecount++;
        		}
        	}
        	if ( chktemp == 0 )
        	{
        		alert("????????? ????????? ????????????. ????????? ?????? ??? ?????? ?????????.");
        		return;
        	}

        	if(this.confirm("??????????????? ("+this.cbo_print.text+")??? ?????? ???????????????????\r\n"))
        	{
        		for(var i=0; i< this.dsPostDst.rowcount; i++)
        		{
        			if( this.dsPostDst.getColumn(i,"CHK") == 1 )
        				this.fnMstUpdatePrintStatusTran(i);
        		}
        	}
        };
        this.btn_exceldown_onclick = function(obj,e)
        {
        	var k = 0; // ?????? ??????????????? ????????????
            if ( this.dsPostDst.rowcount <= 0){
        		alert("??????????????? ?????????????????? ????????????.");
        		return;
        	}
        	this.dsPostDst_excel.clearData();
        	for(var i=0; i< this.dsPostDst.rowcount; i++)
        	{
        		if( this.dsPostDst.getColumn(i,"CHK") == 1 )
        		{
        			trace(k);
        			this.dsPostDst_excel.addRow();
        			this.dsPostDst_excel.setColumn(k,"POST_NUMBER", this.dsPostDst.getColumn(i,"POST_NUMBER"));
        			this.dsPostDst_excel.setColumn(k,"PAYEE_NAME", this.dsPostDst.getColumn(i,"PAYEE_NAME"));
        			this.dsPostDst_excel.setColumn(k,"ADDR", this.dsPostDst.getColumn(i,"ADDR"));
        			this.dsPostDst_excel.setColumn(k,"TEL_NUMBER", this.dsPostDst.getColumn(i,"TEL_NUMBER"));
        			this.dsPostDst_excel.setColumn(k,"PHONE_NUMBER", this.dsPostDst.getColumn(i,"PHONE_NUMBER"));
        			this.dsPostDst_excel.setColumn(k,"GOODS_NAME", this.dsPostDst.getColumn(i,"GOODS_NAME"));
        			this.dsPostDst_excel.setColumn(k,"DEPT_NAME_NUMBER", this.dsPostDst.getColumn(i,"DEPT_NAME_NUMBER"));
        			this.dsPostDst_excel.setColumn(k,"FEE_NAME", this.dsPostDst.getColumn(i,"FEE_NAME"));
        			this.dsPostDst_excel.setColumn(k,"POST_DST_ID", this.dsPostDst.getColumn(i,"POST_DST_ID"));
        			this.dsPostDst_excel.setColumn(k,"WEIGHT", this.dsPostDst.getColumn(i,"WEIGHT"));
        			this.dsPostDst_excel.setColumn(k,"DELIVER_MSG", this.dsPostDst.getColumn(i,"DELIVER_MSG"));
        			this.dsPostDst_excel.setColumn(k,"FROM_ADDR", this.dsPostDst.getColumn(i,"FROM_ADDR"));
        			this.dsPostDst_excel.setColumn(k,"FROM_PHONE_NUMBER", this.dsPostDst.getColumn(i,"FROM_PHONE_NUMBER"));
        			k++;
        		}
        	}
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_dst_excel, "???????????????!A1");
        	this.exportObj.set_exportfilename( this.cald_end_date.value+"(Post_Label).xls" );
        	this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();

        	for(var i=0; i< this.dsPostDst.rowcount; i++)
        	{
        		if( this.dsPostDst.getColumn(i,"CHK") == 1 )
        			this.fnUpdatePrintGubunTran(i);
        	}
        };
        /* // ?????? ?????? ?????? ???
        this.btn_close_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
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
        this.GW801_onsize = function(obj,e)
        {
        	if (this.width <= 1000 || this.height < 410)
        	{
        		this.Static00.set_font('bold 24px/normal "??????????????? ??????B"');
        		this.Static01.set_font('bold 10px/normal "??????"');
        		this.Static02.set_font('bold 10px/normal "??????"');
        		this.Static03.set_font('bold 10px/normal "??????"');
        		this.Static04.set_font('bold 10px/normal "??????"');
        		this.Static05.set_font('bold 10px/normal "??????"');

        		this.cald_begin_date.set_font('normal 10px/normal "Arial"');
        		this.cald_end_date.set_font('normal 10px/normal "Arial"');
        		this.cbo_search.set_font('normal 10px/normal "Arial"');
        		this.cbo_status.set_font('normal 10px/normal "Arial"');
        		this.cbo_print.set_font('normal 10px/normal "Arial"');
        		this.cbo_loc.set_font('normal 10px/normal "Arial"');
        		this.btn_search.set_font('normal 10px/normal "Arial"');
        		this.btn_status_save.set_font('normal 10px/normal "Arial"');
        		this.btn_print_save.set_font('normal 10px/normal "Arial"');
        		this.btn_exlup.set_font('normal 10px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 10px/normal "Arial"');
        		this.btn_del.set_font('normal 10px/normal "Arial"');
        		this.btn_save.set_font('normal 10px/normal "Arial"');
        		this.btn_close.set_font('normal 10px/normal "Arial"');
        	}
        	else if ((this.width < 1260 || this.height < 580) && (this.width > 1000 || this.height > 410) )
        	{
        		this.Static00.set_font('bold 30px/normal "??????????????? ??????B"');
        		this.Static01.set_font('bold 12px/normal "??????"');
        		this.Static02.set_font('bold 12px/normal "??????"');
        		this.Static03.set_font('bold 12px/normal "??????"');
        		this.Static04.set_font('bold 12px/normal "??????"');
        		this.Static05.set_font('bold 12px/normal "??????"');

        		this.cald_begin_date.set_font('normal 12px/normal "Arial"');
        		this.cald_end_date.set_font('normal 12px/normal "Arial"');
        		this.cbo_search.set_font('normal 12px/normal "Arial"');
        		this.cbo_status.set_font('normal 12px/normal "Arial"');
        		this.cbo_print.set_font('normal 12px/normal "Arial"');
        		this.cbo_loc.set_font('normal 12px/normal "Arial"');
        		this.btn_search.set_font('normal 12px/normal "Arial"');
        		this.btn_status_save.set_font('normal 12px/normal "Arial"');
        		this.btn_print_save.set_font('normal 12px/normal "Arial"');
        		this.btn_exlup.set_font('normal 12px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 12px/normal "Arial"');
        		this.btn_del.set_font('normal 12px/normal "Arial"');
        		this.btn_save.set_font('normal 12px/normal "Arial"');
        		this.btn_close.set_font('normal 12px/normal "Arial"');
        	}
        	else
        	{
        		this.Static00.set_font('bold 40px/normal "??????????????? ??????B"');
        		this.Static01.set_font('bold 14px/normal "??????"');
        		this.Static02.set_font('bold 14px/normal "??????"');
        		this.Static03.set_font('bold 14px/normal "??????"');
        		this.Static04.set_font('bold 14px/normal "??????"');
        		this.Static05.set_font('bold 14px/normal "??????"');

        		this.cald_begin_date.set_font('normal 14px/normal "Arial"');
        		this.cald_end_date.set_font('normal 14px/normal "Arial"');
        		this.cbo_search.set_font('normal 14px/normal "Arial"');
        		this.cbo_status.set_font('normal 14px/normal "Arial"');
        		this.cbo_print.set_font('normal 14px/normal "Arial"');
        		this.cbo_loc.set_font('normal 14px/normal "Arial"');
        		this.btn_search.set_font('normal 14px/normal "Arial"');
        		this.btn_status_save.set_font('normal 14px/normal "Arial"');
        		this.btn_print_save.set_font('normal 14px/normal "Arial"');
        		this.btn_exlup.set_font('normal 14px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 14px/normal "Arial"');
        		this.btn_del.set_font('normal 14px/normal "Arial"');
        		this.btn_save.set_font('normal 14px/normal "Arial"');
        		this.btn_close.set_font('normal 14px/normal "Arial"');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW801_onload,this);
            this.addEventHandler("onsize",this.GW801_onsize,this);
            this.grd_dst.addEventHandler("onheadclick",this.grd_dst_onheadclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_status_save.addEventHandler("onclick",this.btn_status_save_onclick,this);
            this.btn_print_save.addEventHandler("onclick",this.btn_print_save_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_dst_excel.addEventHandler("onheadclick",this.grd_dst_onheadclick,this);
        };
        this.loadIncludeScript("GW801.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
