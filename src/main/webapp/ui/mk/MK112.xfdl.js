(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MkMain");
            this.set_titletext("용지관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsStnd", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">0</Col><Col id=\"NAME\">미</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"NAME\">국전</Col></Row><Row><Col id=\"NO\">2</Col><Col id=\"NAME\">4X6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">R</Col><Col id=\"NAME\">R</Col></Row><Row><Col id=\"NO\">T</Col><Col id=\"NAME\">T</Col><Col id=\"NAME1\">ⓣ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPprKind", this);
            obj._setContents("<ColumnInfo><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","18","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"31","80","40","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("내용추가");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"31","80","40","93",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"31","80","40","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPpr","20","312","96.85%",null,null,"23",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_mk_Paper");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"71\" band=\"left\"/><Column size=\"219\" band=\"left\"/><Column size=\"86\"/><Column size=\"77\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"167\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"용지코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"용지명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"규격\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"G수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"가로\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"세로\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"환산\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"종류\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@@@\" editmaxlength=\"4\" editinputtype=\"normal\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:PPR_NAME\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:PPR_STNDNAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"normal\" combodataset=\"dsStnd\" combodatacol=\"NAME\" combocodecol=\"NO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PPR_WEIGHT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"bind:PPR_WIDTH\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" text=\"bind:PPR_LENGTH\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:PPR_CONVERSION\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,0.##\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:PPRKND_ID\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editmaxlength=\"2\" editinputtype=\"normal\" displaytype=\"combotext\" combodataset=\"dsPprKind\" combodatacol=\"PPRKND_NAME\" combocodecol=\"PPRKND_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stPprCode","20","88","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("용지코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edPprCode","stPprCode:2","88","6.85%","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("stPprName","edPprCode:3","88","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("용지명");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edPprName","stPprName:3","88","30.85%","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stPprStnd","edPprName:3","88","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("단위");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("stWeight","20","127","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("G수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtWeight","stWeight:3","127","15.38%","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("stWidth","medtWeight:3","127","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("가로");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtWidth","stWidth:3","127","15.92%","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("stLength","medtWidth:3","127","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("세로");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtLength","stLength:3","127","19.54%","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("stConversion","medtLength:3","127","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("환산");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("stKind","20","166","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("종류");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("cbPprClass","stKind:3","166","15.38%","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsPprKind");
            obj.set_codecolumn("PPRKND_ID");
            obj.set_datacolumn("PPRKND_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stUnitCost","cbPprClass:3","166","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("단가");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtUnitCost","stUnitCost:3","166","15.92%","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","medtUnitCost:3","166","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("최초매입일");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("cbPprStnd","stPprStnd:3","88","12.92%","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsStnd");
            obj.set_codecolumn("NO");
            obj.set_datacolumn("NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stPprUnit","cbPprStnd:3","87","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("규격");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("cbPprUnit","stPprUnit:3","87","9.85%","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsUnit");
            obj.set_codecolumn("NO");
            obj.set_datacolumn("NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edPprStndName","cbPprUnit:3","87",null,"35","0.31%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtConversion","stConversion:3","127",null,"35","0.38%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("#,0.##");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDate","stDate:3","166","254","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","21","210","1259","92",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_selectedtabbuttonwidth("80");
            obj.set_selectedtabbuttonheight("40");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("검색조건");
            obj.set_border("1px double darkslateblue");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"5","80","40","29.59%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnExcel","btnSearch:15","5","43","39",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stSPprCode","32","260","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("용지코드");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Edit("edSPprCode","119","260","6.85%","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("stSPprName","231","260","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("용지명");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edSPprName","319","260","30.85%","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edPprName","value","ds_mk_Paper","PPR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edPprCode","value","ds_mk_Paper","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbPprStnd","value","ds_mk_Paper","PPR_STND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbPprUnit","value","ds_mk_Paper","PPR_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edPprStndName","value","ds_mk_Paper","PPR_STNDNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","medtWeight","value","ds_mk_Paper","PPR_WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","medtWidth","value","ds_mk_Paper","PPR_WIDTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","medtLength","value","ds_mk_Paper","PPR_LENGTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","medtConversion","value","ds_mk_Paper","PPR_CONVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cbPprClass","value","ds_mk_Paper","PPRKND_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medtUnitCost","value","ds_mk_Paper","PPR_DANGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calDate","value","ds_mk_Paper","PPR_REGDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK112.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK112.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK112.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var urlExcel = nexacro.getApplication().gv_urlXeni;
        var vStr = "U";

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	if(vPerSel = "1"){
        		this.gfn_TransactionP("select", "JSP/mk/paper_kind_select.jsp", "dsPprKind=dsPprKind", "dsPprKind=dsPprKind", "", "", false, "S", false, this);
        		this.btnSearch_onclick();
        	}
        };

        this.MkMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.MkMain_ontimer = function(obj,e)
        {

        	var l;
        	if (obj.getOffsetWidth() < 1300)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 1300) / 2;
        	}

        	trace(l);
        	this.killTimer(0);
        	this.lfn_grdAutofit(this.grdPpr);
        };


        //조회버튼 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	str_url = "JSP/mk/mk112f_paper_search.jsp";
        	//str_url = "JSP/mk/getData_paper.jsp";
        	in_ds = "ds_mk_Paper=ds_mk_Paper";
        	out_ds = "ds_mk_Paper=ds_mk_Paper";
        	str_arg ="PPR_CODE=" +nexacro.wrapQuote( this.edSPprCode.text);
        	str_arg +=" PPR_NAME=" +nexacro.wrapQuote( this.edSPprName.text);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Select", false, "S", false, this);
        };

        this.Callback_Select = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        };

        //내용추가 버튼
        this.btnNew_onclick = function(obj,e)
        {
        	switch(this.ds_mk_Paper.rowposition)
        	{
        				// -1 이면 레코드가 없는 상태
        	  case -1 : this.ds_mk_Paper.addRow();
        				var d = new Date();
        				var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        				this.calDate.set_value(strtoDay);
        				break;

        	  default : // 마지막 레코드 입력여부 확인
        				var nRow = this.ds_mk_Paper.getRowCount()-1

        				// 레코드에 내용이 없으면
        				if (this.fctn_Paper_CheckRecord(nRow, true))
        				{
        					// ROW 추가
        					this.ds_mk_Paper.addRow();
        					var d = new Date();
        					var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        					this.calDate.set_value(strtoDay);
        				}
        				else
        					break;
        				// 마지막 레코드로 위치 이동
        				this.ds_mk_Paper.rowposition = this.ds_mk_Paper.getRowCount()-1;
        				break;
        	}

        	this.edPprCode.setFocus();
        };

        //#######################################################
        //  입력값 확인
        //  nRow : 현재 레코드의 인덱스
        //  msgview : 메시지를 보여줄지 여부 (True, False)
        //#######################################################
        this.fctn_Paper_CheckRecord = function(nRow, msgview)
        {
        	if (this.ds_mk_Paper.getColumn(nRow, "PPR_CODE").length != this.ds_mk_Paper.getColumnInfo("PPR_CODE").size)
        	{
        		if (msgview)
        		{
        			alert("용지코드를 정확히 입력해 주십시요.");
        			this.edPprCode.setFocus();
        		}
        		return false;
        	}

        	if (this.ds_mk_Paper.getColumn(nRow, "PPR_NAME") == null)
        	{
        		if (msgview)
        		{
        			alert("용지명을 입력해 주십시요.");
        			this.edPprName.setFocus();
        		}
        		return false;
        	}

        	if (this.ds_mk_Paper.getColumn(nRow, "PPR_WEIGHT") == null)
        	{
        		if (msgview)
        		{
        			alert("G수를 입력해 주십시요.");
        			this.medtWeight.setFocus();
        		}
        		return false;
        	}

        	if (this.ds_mk_Paper.getColumn(nRow, "PPR_WIDTH") == null)
        	{
        		if (msgview)
        		{
        			alert("가로길이를 입력해 주십시요.");
        			this.medtWidth.setFocus();
        		}
        		return false;
        	}

        	if (this.ds_mk_Paper.getColumn(nRow, "PPR_LENGTH") == null)
        	{
        		if (msgview)
        		{
        			alert("세로길이를 입력해 주십시요.");
        			this.medtLength.setFocus();
        		}
        		return false;
        	}

        	if ((this.ds_mk_Paper.getColumn(nRow, "PPR_UNIT") == "T") &&
        	   (this.ds_mk_Paper.getColumn(nRow, "PPR_CONVERSION") == 0))
        	{
        		if (msgview)
        		{
        			alert("환산을 입력해 주십시요.");
        			this.medtConversion.setFocus();
        		}
        		return false;
        	}

        	return true;
        }

        //저장버튼
        this.btnSave_onclick = function(vStr)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	in_ds = "input=ds_mk_Paper:U";
        	str_url = "JSP/mk/mk112f_paper_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vStr, false, this);

        };

        this.Callback_save = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if(ErrorCode == -99)
        		{
        			this.btnSearch_onclick();
        		}else{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	bRtn = this.confirm("용지코드 [ "+this.edPprCode.text+" ] 삭제하시겠습니까?", "용지 삭제");

        	if(bRtn == true)
        	{
        		this.ds_mk_Paper.deleteRow(this.ds_mk_Paper.rowposition);
        		this.btnSave_onclick(vPerDel);
        	}
        };

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        //그리드 엑셀로 변환
        this.Tab00_Tabpage1_btnExcel_onclick = function(obj,e)
        {
        	 this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.grdPpr, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
            this.exportObj.exportData();
        };


        this.MkMain_onkeydown = function(obj,e)
        {
        	var comObj = obj.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		comObj = this.MkMain.getNextComponent(comObj, true);
        		comObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(comObj.toString() == "[object Combo]")
        			comObj.dropdown();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onkeydown",this.MkMain_onkeydown,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Tab00.Tabpage1.form.btnExcel.addEventHandler("onclick",this.Tab00_Tabpage1_btnExcel_onclick,this);
            this.ds_mk_Paper.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK112.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
