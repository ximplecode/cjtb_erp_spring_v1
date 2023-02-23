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
            this.set_titletext("기본코드관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mk_use", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SHEETPRNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_plate", this);
            obj._setContents("<ColumnInfo><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_BNDSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_coating", this);
            obj._setContents("<ColumnInfo><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_binding", this);
            obj._setContents("<ColumnInfo><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BND_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_PRCSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_close", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"256\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_UseType", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_TYPE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_TYPE_CODE\">P</Col><Col id=\"USE_TYPE_NAME\">인쇄</Col></Row><Row><Col id=\"USE_TYPE_CODE\">B</Col><Col id=\"USE_TYPE_NAME\">제본</Col></Row><Row><Col id=\"USE_TYPE_CODE\">C</Col><Col id=\"USE_TYPE_NAME\">가공</Col></Row><Row><Col id=\"USE_TYPE_CODE\">A</Col><Col id=\"USE_TYPE_NAME\">후가공</Col></Row><Row><Col id=\"USE_TYPE_CODE\">E</Col><Col id=\"USE_TYPE_NAME\">기타</Col></Row><Row><Col id=\"USE_TYPE_CODE\">I</Col><Col id=\"USE_TYPE_NAME\">부족분</Col></Row><Row><Col id=\"USE_TYPE_CODE\">M</Col><Col id=\"USE_TYPE_NAME\">사고분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BindType", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">1</Col><Col id=\"NAME\">좌철</Col></Row><Row><Col id=\"NO\">2</Col><Col id=\"NAME\">중철</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","28","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기본코드관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"31","80","40","195",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("내용추가");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"31","80","40","108",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"31","80","40","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdComm","215","90","81.85%",null,null,"14",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_mk_use");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"71\"/><Column size=\"97\"/><Column size=\"173\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"106\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"용도코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"용도구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"용도명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"부모코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"인쇄용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"제본페이지합산\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"미사용\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" maskeditformat=\"@@\" editmaxlength=\"2\" editinputtype=\"normal\" maskedittype=\"string\" cssclass=\"expr:USE_PROCESSTYPE==&apos;P&apos;?&quot;BgChange1&quot;:USE_PROCESSTYPE==&apos;B&apos;?&quot;BgChange2&quot;:USE_PROCESSTYPE==&apos;C&apos;?&quot;BgChange3&quot;:USE_PROCESSTYPE==&apos;A&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"1\" text=\"bind:USE_PROCESSTYPE\" displaytype=\"combotext\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"combo\" cssclass=\"expr:USE_PROCESSTYPE==&apos;P&apos;?&quot;BgChange1&quot;:USE_PROCESSTYPE==&apos;B&apos;?&quot;BgChange2&quot;:USE_PROCESSTYPE==&apos;C&apos;?&quot;BgChange3&quot;:USE_PROCESSTYPE==&apos;A&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"2\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"text\" cssclass=\"expr:USE_PROCESSTYPE==&apos;P&apos;?&quot;BgChange1&quot;:USE_PROCESSTYPE==&apos;B&apos;?&quot;BgChange2&quot;:USE_PROCESSTYPE==&apos;C&apos;?&quot;BgChange3&quot;:USE_PROCESSTYPE==&apos;A&apos;?&quot;BgChange4&quot;:&quot;&quot; \" editmaxlength=\"20\"/><Cell col=\"3\" text=\"bind:USE_PUSE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"2\" editinputtype=\"normal\" cssclass=\"expr:USE_PROCESSTYPE==&apos;P&apos;?&quot;BgChange1&quot;:USE_PROCESSTYPE==&apos;B&apos;?&quot;BgChange2&quot;:USE_PROCESSTYPE==&apos;C&apos;?&quot;BgChange3&quot;:USE_PROCESSTYPE==&apos;A&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"4\" text=\"bind:USE_SHEETPRNCLASS\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\" cssclass=\"expr:USE_PROCESSTYPE==&apos;P&apos;?&quot;BgChange1&quot;:USE_PROCESSTYPE==&apos;B&apos;?&quot;BgChange2&quot;:USE_PROCESSTYPE==&apos;C&apos;?&quot;BgChange3&quot;:USE_PROCESSTYPE==&apos;A&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"5\" text=\"bind:USE_PAGECNT\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\" cssclass=\"expr:USE_PROCESSTYPE==&apos;P&apos;?&quot;BgChange1&quot;:USE_PROCESSTYPE==&apos;B&apos;?&quot;BgChange2&quot;:USE_PROCESSTYPE==&apos;C&apos;?&quot;BgChange3&quot;:USE_PROCESSTYPE==&apos;A&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"6\" text=\"bind:USE_DISABLED\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\" cssclass=\"expr:USE_PROCESSTYPE==&apos;P&apos;?&quot;BgChange1&quot;:USE_PROCESSTYPE==&apos;B&apos;?&quot;BgChange2&quot;:USE_PROCESSTYPE==&apos;C&apos;?&quot;BgChange3&quot;:USE_PROCESSTYPE==&apos;A&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/></Band></Format><Format id=\"grdPlate\"><Columns><Column size=\"74\"/><Column size=\"144\"/><Column size=\"74\"/><Column size=\"92\"/><Column size=\"89\"/><Column size=\"78\"/><Column size=\"81\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"판형코드\"/><Cell col=\"1\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"판형명\"/><Cell col=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"정미페이지\"/><Cell col=\"3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"제본대수페이지\"/><Cell col=\"4\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"본문대수페이지\"/><Cell col=\"5\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"가로\"/><Cell col=\"6\" text=\"세로\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"미사용\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PLT_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"2\"/><Cell col=\"1\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"15\"/><Cell col=\"2\" text=\"bind:PLT_PAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" editinputtype=\"number\" editmaxlength=\"3\"/><Cell col=\"3\" text=\"bind:PLT_BNDSIGNATURE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" editinputtype=\"number\" editmaxlength=\"3\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:PLT_PRNSIGNATURE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" editinputtype=\"number\" editmaxlength=\"3\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:PLT_WIDTH\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" editinputtype=\"number\" editmaxlength=\"4\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:PLT_HEIGHT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" editinputtype=\"number\" editmaxlength=\"4\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:PLT_DISABLED\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/></Band></Format><Format id=\"grdCoat\"><Columns><Column size=\"74\"/><Column size=\"144\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"가공코드\"/><Cell col=\"1\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"가공명\"/><Cell col=\"2\" text=\"미사용\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:COAT_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"2\"/><Cell col=\"1\" text=\"bind:COAT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"20\"/><Cell col=\"2\" text=\"bind:COAT_DISABLED\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"checkbox\"/></Band></Format><Format id=\"grdBind\"><Columns><Column size=\"74\"/><Column size=\"163\"/><Column size=\"74\"/><Column size=\"0\"/><Column size=\"146\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"제본코드\"/><Cell col=\"1\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"제본명\"/><Cell col=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"제본수량\"/><Cell col=\"3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"제본종류\"/><Cell col=\"4\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"제본기계\"/><Cell col=\"5\" text=\"미사용\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BND_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:BND_TYPE==&apos;1&apos;?&quot;BgChange1&quot;:&quot;BgChange4&quot;\" edittype=\"text\" editmaxlength=\"2\"/><Cell col=\"1\" text=\"bind:BND_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:BND_TYPE==&apos;1&apos;?&quot;BgChange1&quot;:&quot;BgChange4&quot;\" edittype=\"text\" editmaxlength=\"30\"/><Cell col=\"2\" text=\"bind:BND_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:BND_TYPE==&apos;1&apos;?&quot;BgChange1&quot;:&quot;BgChange4&quot;\" edittype=\"text\" editmaxlength=\"1\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:BND_TYPE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:BND_TYPE==&apos;1&apos;?&quot;BgChange1&quot;:&quot;BgChange4&quot;\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_BindType\" combocodecol=\"NO\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:BND_PRCSNAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:BND_TYPE==&apos;1&apos;?&quot;BgChange1&quot;:&quot;BgChange4&quot;\" edittype=\"text\" editmaxlength=\"20\"/><Cell col=\"5\" text=\"bind:BND_DISABLED\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:BND_TYPE==&apos;1&apos;?&quot;BgChange1&quot;:&quot;BgChange4&quot;\" edittype=\"checkbox\"/></Band></Format><Format id=\"grdEnd\"><Columns><Column size=\"92\"/><Column size=\"120\"/><Column size=\"116\"/><Column size=\"92\"/><Column size=\"87\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"마감년월\"/><Cell col=\"1\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"시작일자\"/><Cell col=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"종료일자\"/><Cell col=\"3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"마감완료여부\"/><Cell col=\"4\" text=\"수정가능여부\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:MKCLS_YM\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##\" edittype=\"mask\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:MKCLS_STARTDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" maskeditformat=\"####-##-##\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:MKCLS_ENDDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" maskeditformat=\"####-##-##\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:MKCLS_CLOSE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:MKCLS_MODIFY\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("DivBtn","13","76","197","311",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnUse",null,"5.14%","160","50","11.17%",null,null,null,null,null,this.DivBtn.form);
            obj.set_taborder("0");
            obj.set_text("용도");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnPlate",null,"23.79%","160","50","10.66%",null,null,null,null,null,this.DivBtn.form);
            obj.set_taborder("1");
            obj.set_text("판형");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_color("#7fb39d");
            obj.set_background("white");
            this.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnCoat",null,"42.44%","160","50","10.66%",null,null,null,null,null,this.DivBtn.form);
            obj.set_taborder("2");
            obj.set_text("가공");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("white");
            obj.set_border("2px groove #7fb39d");
            obj.set_color("#7fb39d");
            this.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnBind",null,"61.41%","160","50","10.66%",null,null,null,null,null,this.DivBtn.form);
            obj.set_taborder("3");
            obj.set_text("제본");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("white");
            obj.set_border("2px groove #7fb39d");
            obj.set_color("#7fb39d");
            this.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnEnd",null,"80.06%","160","50","10.66%",null,null,null,null,null,this.DivBtn.form);
            obj.set_taborder("4");
            obj.set_text("마감설정");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("white");
            obj.set_border("2px groove #7fb39d");
            obj.set_color("#7fb39d");
            this.DivBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK102.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK102.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK102.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var vKind, nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	if(vPerSel = "1")
        		this.DivBtn_btnUse_onclick();
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
        	//this.lfn_grdAutofit(this.grdComm);
        };


        //용도 조회버튼 클릭
        this.DivBtn_btnUse_onclick = function(obj,e)
        {
        	vKind = "U";
        	this.grdComm.set_formatid("grdUse");
        	this.grdComm.set_binddataset("ds_mk_use");

        	str_url = "JSP/mk/getData_use.jsp";
        	in_ds = "ds_mk_use=ds_mk_use";
        	out_ds = "ds_mk_use=ds_mk_use";
        	str_arg  = "USE_CODE =''";
        	str_arg += " SQL_SET =' '";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "Callback_Select", true, "S", false, this);
        };

        //판형 조회버튼 클릭
        this.DivBtn_btnPlate_onclick = function(obj,e)
        {
        	vKind = "P";
        	this.grdComm.set_formatid("grdPlate");
        	this.grdComm.set_binddataset("ds_mk_plate");

        	str_url = "JSP/mk/getData_plate.jsp";
        	in_ds = "ds_mk_plate=ds_mk_plate";
        	out_ds = "ds_mk_plate=ds_mk_plate";
        	str_arg  = "PLATE_CODE =''";
        	str_arg += " SQL_SET =' '";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "Callback_Select", true, "S", false, this);
        };

        //가공 조회버튼 클릭
        this.DivBtn_btnCoat_onclick = function(obj,e)
        {
        	vKind = "C";
        	this.grdComm.set_formatid("grdCoat");
        	this.grdComm.set_binddataset("ds_mk_coating");

        	str_url = "JSP/mk/getData_coat.jsp";
        	in_ds = "ds_mk_coating=ds_mk_coating";
        	out_ds = "ds_mk_coating=ds_mk_coating";
        	str_arg  = "COAT_CODE =''";
        	str_arg += " SQL_SET =' '";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "Callback_Select", true, "S", false, this);
        };

        //제본 조회버튼 클릭
        this.DivBtn_btnBind_onclick = function(obj,e)
        {
        	vKind = "B";
        	this.grdComm.set_formatid("grdBind");
        	this.grdComm.set_binddataset("ds_mk_binding");

        	str_url = "JSP/mk/getData_bind.jsp";
        	in_ds = "ds_mk_binding=ds_mk_binding";
        	out_ds = "ds_mk_binding=ds_mk_binding";
        	str_arg  = "BIND_CODE =''";
        	str_arg += " SQL_SET =' '";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "Callback_Select", true, "S", false, this);
        };

        //마감 조회버튼 클릭
        this.DivBtn_btnEnd_onclick = function(obj,e)
        {
        	vKind = "E";
        	this.grdComm.set_formatid("grdEnd");
        	this.grdComm.set_binddataset("ds_mk_close");

        	str_url = "JSP/mk/getData_close.jsp";
        	in_ds = "ds_mk_close=ds_mk_close";
        	out_ds = "ds_mk_close=ds_mk_close";
        	str_arg  = "MKCLS_YM =''";
        	str_arg += " MKCLS_STARTDATE =' '";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "Callback_Select", true, "S", false, this);
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
        	if(vKind == "U")
        		this.ds_mk_use.addRow();
        	else if(vKind == "P")
        		this.ds_mk_plate.addRow();
        	else if(vKind == "C")
        		this.ds_mk_coating.addRow();
        	else if(vKind == "B")
        		this.ds_mk_binding.addRow();
        	else if(vKind == "E")
        		this.ds_mk_close.insertRow(this.ds_mk_close.rowposition);
        };

        //저장버튼
        this.btnSave_onclick = function(obj,e)
        {
        	if(vKind == "U")
        		this.saveData_use(vPerDML);
        	else if(vKind == "P")
        		this.saveData_plate(vPerDML);
        	else if(vKind == "C")
        		this.saveData_coat(vPerDML);
        	else if(vKind == "B")
        		this.saveData_bind(vPerDML);
        	else if(vKind == "E")
        	    this.saveData_close(vPerDML);

        };

        /*용도 수정 및 삭제*/
        this.saveData_use = function(vStr)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	in_ds = "ds_mk_use=ds_mk_use:U";
        	str_url = "JSP/mk/use_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vStr, false, this);
        };

        /*판형 수정 및 삭제*/
        this.saveData_plate = function(vStr)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	in_ds = "ds_mk_plate=ds_mk_plate:U";
        	str_url = "JSP/mk/plate_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vStr, false, this);
        };

        /*가공 수정 및 삭제*/
        this.saveData_coat = function(vStr)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	in_ds = "ds_mk_coating=ds_mk_coating:U";
        	str_url = "JSP/mk/coating_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vStr, false, this);
        };

        /*제본 수정 및 삭제*/
        this.saveData_bind = function(vStr)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	in_ds = "ds_mk_binding=ds_mk_binding:U";
        	str_url = "JSP/mk/binding_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vStr, false, this);
        };

        /*마감 수정 및 삭제*/
        this.saveData_close = function(vStr)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	in_ds = "ds_mk_close=ds_mk_close:U";
        	str_url = "JSP/mk/close_dml.jsp";

        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vStr, false, this);
        };

        this.Callback_save = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if(ErrorCode == -99)
        		{
        			if(vKind == "U"){
        				this.DivBtn_btnUse_onclick();
        			}else if(vKind == "P"){
        				this.DivBtn_btnPlate_onclick();
        			}else if(vKind == "C"){
        				this.DivBtn_btnCoat_onclick();
        			}else if(vKind == "B"){
        				this.DivBtn_btnBind_onclick();
        			}else if(vKind == "E"){
        				this.DivBtn_btnEnd_onclick();
        			}
        		}else{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	if(vKind == "U"){
        		this.ds_mk_use.deleteRow(this.ds_mk_use.rowposition);
        		this.saveData_use(vPerDel);
        	}else if(vKind == "P"){
        		this.ds_mk_plate.deleteRow(this.ds_mk_plate.rowposition);
        		this.saveData_plate(vPerDel);
        	}else if(vKind == "C"){
        		this.ds_mk_coating.deleteRow(this.ds_mk_coating.rowposition);
        		this.saveData_coat(vPerDel);
        	}else if(vKind == "B"){
        		this.ds_mk_binding.deleteRow(this.ds_mk_binding.rowposition);
        		this.saveData_bind(vPerDel);
        	}else if(vKind == "E"){
        		this.ds_mk_close.deleteRow(this.ds_mk_close.rowposition);
        		this.saveData_close(vPerDel);
        	}
        };

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        //마감연월 자동셋팅
        this.ds_mk_close_onrowsetchanged = function(obj,e)
        {
        	//INSERT일 경우
        	if(e.reason == "12")
        	{
        		nRow = this.ds_mk_close.rowposition;

        		var sMKCLS_YM = this.ds_mk_close.getColumn(nRow + 1, "MKCLS_YM") + "01";
        		var objDate = new Date(sMKCLS_YM.substr(0, 4), sMKCLS_YM.substr(4, 2), sMKCLS_YM.substr(6 ,2));
        		var sNext_MKCLS_YM =  (new Date(objDate)).getFullYear()
                     + ((new Date(objDate)).getMonth()+1).toString().padLeft(2, "0");

        		this.ds_mk_close.setColumn(nRow, "MKCLS_YM", sNext_MKCLS_YM);
        		this.ds_mk_close.setColumn(nRow, "MKCLS_STARTDATE", sNext_MKCLS_YM+"01");
        		var sLastDay = Eco.date.getLastDayOfMonth(sNext_MKCLS_YM);
        		this.ds_mk_close.setColumn(nRow, "MKCLS_ENDDATE", sNext_MKCLS_YM+sLastDay);
        		this.ds_mk_close.setColumn(nRow, "MKCLS_CLOSE", "0");
        		this.ds_mk_close.setColumn(nRow, "MKCLS_MODIFY", "1");
        	}
        };


        this.btn_onmouseenter = function(obj,e)
        {
        	obj.set_background("#7fb39d");
        	obj.set_color("#ffffff");
        };

        this.btn_onmouseleave = function(obj,e)
        {
        	obj.set_border("2px groove #7fb39d");
        	obj.set_background("white");
        	obj.set_color("#7fb39d");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.DivBtn.form.btnUse.addEventHandler("onclick",this.DivBtn_btnUse_onclick,this);
            this.DivBtn.form.btnUse.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.DivBtn.form.btnUse.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.DivBtn.form.btnPlate.addEventHandler("onclick",this.DivBtn_btnPlate_onclick,this);
            this.DivBtn.form.btnPlate.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.DivBtn.form.btnPlate.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.DivBtn.form.btnCoat.addEventHandler("onclick",this.DivBtn_btnCoat_onclick,this);
            this.DivBtn.form.btnCoat.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.DivBtn.form.btnCoat.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.DivBtn.form.btnBind.addEventHandler("onclick",this.DivBtn_btnBind_onclick,this);
            this.DivBtn.form.btnBind.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.DivBtn.form.btnBind.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.DivBtn.form.btnEnd.addEventHandler("onclick",this.DivBtn_btnEnd_onclick,this);
            this.DivBtn.form.btnEnd.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.DivBtn.form.btnEnd.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.ds_mk_close.addEventHandler("onrowsetchanged",this.ds_mk_close_onrowsetchanged,this);
        };
        this.loadIncludeScript("MK102.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
