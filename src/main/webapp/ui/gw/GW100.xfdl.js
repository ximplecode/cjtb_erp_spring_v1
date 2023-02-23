(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GwMain");
            this.set_titletext("전자결재리스트");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_select_header", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILES\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"OVERCHK\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_FLOW_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RDTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/><Column id=\"MI_CO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gw_count", this);
            obj._setContents("<ColumnInfo><Column id=\"D_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"Q_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"W_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"E_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"R_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"T_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"P_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"O_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_sel", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_ID\">0</Col><Col id=\"SEARCH_NAME\">전체</Col></Row><Row><Col id=\"SEARCH_ID\">1</Col><Col id=\"SEARCH_NAME\">문서제목</Col></Row><Row><Col id=\"SEARCH_ID\">2</Col><Col id=\"SEARCH_NAME\">작성자</Col></Row><Row><Col id=\"SEARCH_ID\">3</Col><Col id=\"SEARCH_NAME\">문서번호</Col></Row><Row><Col id=\"SEARCH_ID\">4</Col><Col id=\"SEARCH_NAME\">부서명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">진행</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">완결</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">기각</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_header130", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILES\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"OVERCHK\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_FLOW_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RDTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/><Column id=\"MI_CO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_KYULNO", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","72","100.00%","163",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e8e7e3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","235","100.00%",null,null,"41",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_select_header");
            obj.set_border("2px solid #7fb39d, 0px none");
            obj.set_color("#7fb39d");
            obj.set_font("12px/normal \"함초롬돋움\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"97\"/><Column size=\"527\"/><Column size=\"163\"/><Column size=\"31\"/><Column size=\"159\"/><Column size=\"58\"/><Column size=\"80\"/><Column size=\"129\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"결재\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"문서번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"제목\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"문서종류\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"첨부\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"부서\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"직책\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"기안자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"기안일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\" cssclass=\"BgCancel\"><Cell text=\"bind:CHK\" textAlign=\"center\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \" expr=\"expr:CHK==&quot;0&quot;?&quot;Img::electric_sign_small.png&quot;:&quot;&quot;\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"1\" text=\"bind:CO_SEQ\" textAlign=\"center\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \"/><Cell col=\"2\" text=\"bind:TITLE\" textAlign=\"left\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \"/><Cell col=\"3\" text=\"bind:FORM\" textAlign=\"center\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \"/><Cell col=\"4\" text=\"bind:FILES\" displaytype=\"imagecontrol\" textAlign=\"center\" expr=\"expr:FILES==&quot;1&quot;?&quot;Img::img_WF_Grdimg.png&quot;:&quot;&quot;\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \"/><Cell col=\"5\" text=\"bind:BUSOR\" textAlign=\"center\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \"/><Cell col=\"6\" text=\"bind:JIKCHAK\" textAlign=\"center\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \"/><Cell col=\"7\" text=\"bind:F_NAME\" textAlign=\"center\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \"/><Cell col=\"8\" text=\"bind:WDATE\" textAlign=\"center\" cssclass=\"expr:STATUS==&quot;0&quot;?&quot;BgChange&quot;:&quot;&quot; \" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","10","167","65",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전자결재");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div_GwCnt","0","72","100.00%","163",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_async("true");
            obj.set_formscrolltype("none");
            obj.set_background("#e8e7e3");
            this.addChild(obj.name, obj);

            obj = new Div("div_top0","14","21","125","125",null,null,null,null,null,null,this.Div_GwCnt.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            obj.set_url("gw::CntBox.xfdl");
            this.Div_GwCnt.addChild(obj.name, obj);

            obj = new Div("div_top1","147","21","125","125",null,null,null,null,null,null,this.Div_GwCnt.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("gw::CntBox.xfdl");
            obj.set_formscrolltype("none");
            this.Div_GwCnt.addChild(obj.name, obj);

            obj = new Div("div_top2","280","21","125","125",null,null,null,null,null,null,this.Div_GwCnt.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("gw::CntBox.xfdl");
            obj.set_formscrolltype("none");
            this.Div_GwCnt.addChild(obj.name, obj);

            obj = new Div("div_top3","413","21","125","125",null,null,null,null,null,null,this.Div_GwCnt.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("gw::CntBox.xfdl");
            obj.set_formscrolltype("none");
            this.Div_GwCnt.addChild(obj.name, obj);

            obj = new Div("div_top4","546","21","125","125",null,null,null,null,null,null,this.Div_GwCnt.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("gw::CntBox.xfdl");
            obj.set_formscrolltype("none");
            this.Div_GwCnt.addChild(obj.name, obj);

            obj = new Div("div_top5","679","21","125","125",null,null,null,null,null,null,this.Div_GwCnt.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("gw::CntBox.xfdl");
            obj.set_formscrolltype("none");
            this.Div_GwCnt.addChild(obj.name, obj);

            obj = new Div("div_top6","812","21","125","125",null,null,null,null,null,null,this.Div_GwCnt.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("gw::CntBox.xfdl");
            obj.set_formscrolltype("none");
            this.Div_GwCnt.addChild(obj.name, obj);

            obj = new Div("Div_Page","0",null,"100.00%","39",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Stc_Prev_Pre","330",null,"25","25",null,"6",null,null,null,null,this.Div_Page.form);
            obj.set_taborder("0");
            obj.set_text("<<");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"한컴 말랑말랑 Bold\"");
            obj.set_color("floralwhite");
            this.Div_Page.addChild(obj.name, obj);

            obj = new Static("Stc_Prev","380",null,"25","25",null,"6",null,null,null,null,this.Div_Page.form);
            obj.set_taborder("1");
            obj.set_text("<");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"한컴 말랑말랑 Bold\"");
            obj.set_color("floralwhite");
            this.Div_Page.addChild(obj.name, obj);

            obj = new Static("Stc_Next","520",null,"25","25",null,"6",null,null,null,null,this.Div_Page.form);
            obj.set_taborder("2");
            obj.set_text(">");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"한컴 말랑말랑 Bold\"");
            obj.set_color("floralwhite");
            this.Div_Page.addChild(obj.name, obj);

            obj = new Static("Stc_Next_Next","570",null,"25","25",null,"6",null,null,null,null,this.Div_Page.form);
            obj.set_taborder("3");
            obj.set_text(">>");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"한컴 말랑말랑 Bold\"");
            obj.set_color("floralwhite");
            this.Div_Page.addChild(obj.name, obj);

            obj = new Static("strPage","422","7","80","26",null,null,null,null,null,null,this.Div_Page.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_color("#7fb39d");
            obj.set_font("bold 15px/normal \"한컴 말랑말랑 Bold\"");
            this.Div_Page.addChild(obj.name, obj);

            obj = new Div("Div_Search",null,null,"500","200","0","42",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e8e7e3");
            obj.set_visible("false");
            obj.set_border("2px dotted #7fb39d");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbKind1","13","63","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_search_sel");
            obj.set_codecolumn("SEARCH_ID");
            obj.set_datacolumn("SEARCH_NAME");
            obj.set_font("14px/normal \"함초롬바탕 확장\"");
            obj.set_text("작성자");
            obj.set_value("2");
            obj.set_index("2");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Static("StSearch","13","147","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("1");
            obj.set_text("검색기간");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.Div_Search.addChild(obj.name, obj);

            obj = new ImageViewer("ImgReset","405","12","40","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("2");
            obj.set_image("url(\'Img::icons8-reset.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("초기화");
            obj.set_background("#e8e7e3");
            this.Div_Search.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","448","12","40","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("3");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_background("#e8e7e3");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Combo("cbKind2","13","105","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_search_sel");
            obj.set_codecolumn("SEARCH_ID");
            obj.set_datacolumn("SEARCH_NAME");
            obj.set_font("14px/normal \"함초롬바탕 확장\"");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Calendar("CalSDate","163","147","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("5");
            obj.set_headformat("yyyy.MM.DD");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Calendar("CalEDate","313","147","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("6");
            obj.set_headformat("yyyy.MM.DD");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.Div_Search.addChild(obj.name, obj);

            obj = new ImageViewer("ImgSelect","364","16","32","32",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("7");
            obj.set_image("url(\'Img::search_small.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("검색");
            obj.set_background("#e8e7e3");
            obj.set_stretch("fit");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Edit("edVar1","163","63","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("검색어를 입력하세요.");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Edit("edVar2","313","63","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("검색어를 입력하세요.");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Edit("edVar3","163","105","147","40",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("10");
            obj.set_displaynulltext("검색어를 입력하세요.");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Radio("rdKind","14","26","201","28",null,null,null,null,null,null,this.Div_Search.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div_Search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"41","41","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("▲");
            obj.set_font("bold 18px/normal \"한컴 말랑말랑 Bold\"");
            obj.set_tooltiptext("검색팝업");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Substitute",null,"3.00%","70","35","26.53%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대결지정");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",950,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","gw::CntBox.xfdl");
        };
        
        // User Script
        this.addIncludeScript("GW100.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW100.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW100.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var strKind;  //문서구분
        var str;

        /* Pasing 프로퍼티 */
        var iNowPage = 1;			// 현재 페이지
        var iPageScale = 10;			// 하단에 Pasing되는 page번호 갯수
        var iVolumnPerPage = 15;		// 페이지당 조회물 건 수
        var iTotalCount = 0;		// 서버에서 총 건수(TotalCount)를 꼭 받아야 페이징을 합니다.
        var strFlag;
        var f_num;

        this.GwMain_onload = function(obj, e)
        {
        	this.getData_gw_count();
        	this.setTimer(0,1);
        }

        this.GwMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        }

        /*화면크기 조정에 따른 설정*/
        this.GwMain_ontimer = function(obj,e)
        {
        	var l;
        	if (obj.getOffsetWidth() < 950)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 950) / 2;
        	}

        	trace(l);
        	this.Div_GwCnt.move(l, 72, 950, null, null, null);
        	this.Div_Page.move(l, null, 950, 39, null, 0);
        	this.killTimer(0);

        	this.lfn_grdAutofit(this.grdList);
        }

        /*전자결재 문서 전체 COUNT*/
        this.getData_gw_count = function()
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/gw/getData_gw_count.jsp";
        	in_ds = "ds_gw_count=ds_gw_count";
        	out_ds = "ds_gw_count=ds_gw_count";
        	str_arg = "sabun='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") + "'";
        	//str_arg = "sabun='C99990'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_gw_count", true, "P", false, this);

        }

        this.Callback_gw_count = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        	this.GwCnt_setting();
        }


        //***********결재문서 COUNT SETTING******************

        this.GwCnt_setting = function()
        {
        	var strD, strQ, strW, strE, strR, strT, strP, strO;

        	strD = this.ds_gw_count.getColumn(0, "D_CNT");
        	strQ = this.ds_gw_count.getColumn(0, "Q_CNT");
        	strW = this.ds_gw_count.getColumn(0, "W_CNT");
        	strE = this.ds_gw_count.getColumn(0, "E_CNT");
        	strR = this.ds_gw_count.getColumn(0, "R_CNT");
        	strT = this.ds_gw_count.getColumn(0, "T_CNT");
        	strP = this.ds_gw_count.getColumn(0, "P_CNT");
        	strO = this.ds_gw_count.getColumn(0, "O_CNT");


        	this.Div_GwCnt.form.div_top0.form.set_Stcount("미결문서",strQ);
        	this.Div_GwCnt.form.div_top1.form.set_Stcount("진행문서",strW);
        	this.Div_GwCnt.form.div_top2.form.set_Stcount("완결문서",strE);
        	this.Div_GwCnt.form.div_top3.form.set_Stcount("공유문서",strP);
        	this.Div_GwCnt.form.div_top4.form.set_Stcount("수신문서",strR);
        	this.Div_GwCnt.form.div_top5.form.set_Stcount("저장문서",strT);
        	this.Div_GwCnt.form.div_top6.form.set_Stcount("대결문서",strD);

        	this.getData_mi(str);
        }

        /*미결문서 리스트 가져오기*/
        this.getData_mi = function(str)
        {
        	/*페이지 초기화*/
        	if(str == 1) iNowPage = 1;

        	var str_url = "JSP/gw/getData_gw_mi.jsp";
        	var in_ds = "ds_select_header=ds_select_header";
        	var out_ds = "ds_select_header=ds_select_header";
        	var str_arg  = "gubun ='01'";
        		str_arg += " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        		str_arg += " PageNo =" + nexacro.wrapQuote((iVolumnPerPage * (nexacro.toNumber(iNowPage) - 1))+1);
        		str_arg += " PageSize =" + nexacro.wrapQuote(nexacro.toNumber(iNowPage) * iVolumnPerPage);
        		str_arg += " status_gb ='01'";
        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "미결문서";
        }

        /*공유문서 리스트 가져오기*/
        this.getData_gong = function(str)
        {
        	if(str == 1) iNowPage = 1;

        	var str_url, in_ds, out_ds, str_arg;
        	var pageSize = iNowPage*iVolumnPerPage;
        	var pageNo = ((iNowPage-1) * iVolumnPerPage)+1;

        	str_url = "JSP/gw/getData_gw_gong.jsp";
        	in_ds = "ds_select_header=ds_select_header";
        	out_ds = "ds_select_header=ds_select_header";
        	str_arg  = "gubun ='01'";
        		str_arg += " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        		//str_arg += " sabun ='C16168'";
        		str_arg += " PageNo =" + nexacro.wrapQuote(pageNo);
        		str_arg += " PageSize =" + nexacro.wrapQuote(pageSize);

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "공유문서";
        }

        /*진행문서 리스트 가져오기*/
        this.getData_jin = function(str)
        {
        	if(str == 1) iNowPage = 1;

        	var str_url, in_ds, out_ds, str_arg;
        	var pageSize = iNowPage*iVolumnPerPage;
        	var pageNo = ((iNowPage-1) * iVolumnPerPage)+1;

        	str_url = "JSP/gw/getData_gw_jin.jsp";
        	in_ds = "ds_select_header=ds_select_header";
        	out_ds = "ds_select_header=ds_select_header";
        	str_arg  = "gubun ='01'";
        		str_arg += " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        		//str_arg += " sabun ='C16168'";
        		str_arg += " PageNo =" + nexacro.wrapQuote(pageNo);
        		str_arg += " PageSize =" + nexacro.wrapQuote(pageSize);

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "진행문서";
        }

        /*완결문서 리스트 가져오기*/
        this.getData_wan = function(str)
        {
        	if(str == 1) iNowPage = 1;

        	var str_url, in_ds, out_ds, str_arg;
        	var pageSize = iNowPage*iVolumnPerPage;
        	var pageNo = ((iNowPage-1) * iVolumnPerPage)+1;

        	str_url = "JSP/gw/getData_gw_wan.jsp";
        	in_ds = "ds_select_header=ds_select_header";
        	out_ds = "ds_select_header=ds_select_header";
        	str_arg  = "gubun ='01'";
        		str_arg += " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        		str_arg += " store ='0'";
        		str_arg += " PageNo =" + nexacro.wrapQuote(pageNo);
        		str_arg += " PageSize =" + nexacro.wrapQuote(pageSize);
        		str_arg += " strStatusGb ='00'";
        		str_arg += " strStatusGb01 ='00'";

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "완결문서";
        }

        /*저장문서 리스트 가져오기*/
        this.getData_save = function(str)
        {
        	if(str == 1) iNowPage = 1;

        	var str_url, in_ds, out_ds, str_arg;
        	var pageSize = iNowPage*iVolumnPerPage;
        	var pageNo = ((iNowPage-1) * iVolumnPerPage)+1;

        	str_url = "JSP/gw/getData_gw_save.jsp";
        	in_ds = "ds_select_header=ds_select_header";
        	out_ds = "ds_select_header=ds_select_header";
        	str_arg  = "gubun ='01'";
        	str_arg += " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        	//str_arg += " sabun ='C16168'";
        	str_arg += " PageNo =" + nexacro.wrapQuote(pageNo);
        	str_arg += " PageSize =" + nexacro.wrapQuote(pageSize);

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "저장문서";
        }

        /*수신문서 리스트 가져오기*/
        this.getData_receive = function(str)
        {
        	if(str == 1) iNowPage = 1;

        	var str_url, in_ds, out_ds, str_arg;
        	var pageSize = iNowPage*iVolumnPerPage;
        	var pageNo = ((iNowPage-1) * iVolumnPerPage)+1;

        	str_url = "JSP/gw/getData_gw_receive.jsp";
        	in_ds = "ds_select_header=ds_select_header";
        	out_ds = "ds_select_header=ds_select_header";
        	str_arg  = "gubun ='01'";
        	str_arg += " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        	//str_arg += " sabun ='C16168'";
        	str_arg += " PageNo =" + nexacro.wrapQuote(pageNo);
        	str_arg += " PageSize =" + nexacro.wrapQuote(pageSize);

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "수신문서";
        }

        /*대결문서 리스트 가져오기*/
        this.getData_de = function(str)
        {
        	if(str == 1) iNowPage = 1;

        	var str_url, in_ds, out_ds, str_arg;
        	var pageSize = iNowPage*iVolumnPerPage;

        	var pageNo = ((iNowPage-1) * iVolumnPerPage)+1;

        	str_url = "JSP/gw/getData_gw_de.jsp";
        	in_ds = "ds_select_header=ds_select_header";
        	out_ds = "ds_select_header=ds_select_header";
        	str_arg  = "gubun ='01'";
        		str_arg += " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        		//str_arg += " sabun ='C16168'";
        		str_arg += " PageNo =" + nexacro.wrapQuote(pageNo);
        		str_arg += " PageSize =" + nexacro.wrapQuote(pageSize);
        		str_arg += " strStatusGb ='00'";

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "대결문서";
        }



        //***********결재문서 PAGE ******************

        this.Callback_gw_page = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	this.GwPage_setting();
        }

        this.GwPage_setting = function()
        {
        	iTotalCount = this.ds_select_header.getColumn(0, "MAX_CO");
        	iTotalPage = nexacro.floor(iTotalCount/iVolumnPerPage) +1;

        	if(isNaN(iTotalPage))
        		iTotalPage = 1;

        	this.Div_Page.form.strPage.set_text(iNowPage+"  /  "+iTotalPage);
        }

        this.Div_Page_onclick = function(obj,e)
        {
        	iTotalCount = this.ds_select_header.getColumn(0, "MAX_CO");

        	if(nexacro.toNumber(iTotalCount) > 0)
        	{
        		if( nexacro.floor(iTotalCount/iVolumnPerPage) > 0 )
        			iTotalPage = nexacro.floor(iTotalCount/iVolumnPerPage) +1;
        		else
        			iTotalPage = nexacro.floor(iTotalCount/iVolumnPerPage);


        		var iUint = nexacro.floor(((iNowPage)-1) / (iPageScale));

        		iUint = (iUint * iPageScale)+1;

        		var iNextUnit = (iUint+iPageScale);

        		if(obj.name == "Stc_Next"){
        			if(iNowPage >= iTotalPage)
        				iNowPage = iTotalPage;
        			else
        				iNowPage = iNowPage+1;
        		}else if(obj.name == "Stc_Prev"){
        			if(iNowPage <= 1)
        				iNowPage = 1;
        			else
        				iNowPage = iNowPage-1;
        		}else if(obj.name == "Stc_Prev_Pre"){
        			iNowPage = 1;
        		}else if(obj.name == "Stc_Next_Next"){
        			iNowPage = iTotalPage;
        		}

        		var j = 0;

        		for(var i = iUint ; i < iNextUnit ; i++ )
        		{
        			if(i > iTotalPage)
        				break;
        			if(i == iNowPage)
        				j += 1;
        			else
        				j += 1;
        		}

        		if(strKind == "공유문서"){
        			this.getData_gong(str);
        		}else if(strKind == "수신문서"){
        			this.getData_receive(str);
        		}else if(strKind == "미결문서"){
        			this.getData_mi(str);
        		}else if(strKind == "완결문서"){
        			this.getData_wan(str);
        		}else if(strKind == "진행문서"){
        			this.getData_jin(str);
        		}else if(strKind == "대결문서"){
        			this.getData_de(str);
        		}else if(strKind == "저장문서"){
        			this.getData_save(str);
        		}else if(strKind == "조회문서"){
        			this.getData_select(str);
        		}
        	}
        }


        //***********첨부파일 내용 팝업 메소드******************

        this.grdList_oncellclick = function(obj,e)
        {
        	//신규 문서일 경우
        	this.DS_GW_KYULNO.addRow();
        	this.DS_GW_KYULNO.setColumn(0, "GUBUN", "01");
        	this.DS_GW_KYULNO.setColumn(0, "I_FLOW_ID", this.ds_select_header.getColumn(this.ds_select_header.rowposition, "I_FLOW_ID"));

        	var vFiles = this.ds_select_header.getColumn(e.row, "FILES");

        	//첨부파일이 있을경우, 첨부파일 컬럼선택시 파일리스트 볼 수 있는 팝업 호출
        	if(e.col == "4" && vFiles == "1"){
        	    var objParam = {dsParam1:this.ds_select_header.getColumn(e.row, "I_FLOW_ID")};
        		this.lfn_showModal("popupFiles", objParam, "gw::Files.xfdl", "popupCallBack", this, 10, 58, 500, 260);
        	}

        	//현 결재진행상황 확인 팝업
        	if(e.col == "0"){
        	    var objParam = {dsParam1:this.ds_select_header.getColumn(e.row, "I_FLOW_ID")};
        		this.lfn_showModal("popupElec", objParam, "gw::Appr_Status.xfdl", "popupCallBack", this, 10, 58, 710, 310);
        	}

        	//결재 및 첨부 팝업 나오는 컬럼 제외하고 누를 경우 문서보기pop-up 호출
        	if(e.col != "4" && e.col != "0"){

        		this.ds_select_header130.copyRow(0, this.ds_select_header, e.row);

        		var objParam = {dsParam1:this.ds_select_header.getColumn(e.row, "I_FLOW_ID")
        					   ,dsParam2:strKind
        					   ,dsParam3:this.ds_select_header130
        					   ,dsParam4:this.DS_GW_KYULNO};
        		this.lfn_showModal("popupElecDoc", objParam, "gw::GW130.xfdl", "popupCallBack", this, 0, 0, system.getScreenWidth(), system.getScreenHeight());
        	}

        }


        //***********검색팝업창 관련 메소드******************

        this.btnSearch_onclick = function(obj,e)
        {
        	var strVisible = this.Div_Search.visible;

        	//검색DIV가 FALSE일 경우 VISIBLE처리 되도록
        	if(strVisible == false){

        		//검색기간 한달전~오늘날짜 셋팅
        		var today = new Date();
        		this.Div_Search.form.CalEDate.set_value(Eco.date.getMaskFormatString(today,"yyyy-MM-dd"));
        		this.Div_Search.form.CalSDate.set_value(Eco.date.addMonth(today, -1));

        		this.btnSearch.set_text("▼");
        		this.Div_Search.set_visible(true);

        	}else{

        		this.btnSearch.set_text("▲");
        		this.Div_Search.set_visible(false);

        	}
        };

        this.Div_Search_ImgClose_onclick = function(obj,e)
        {
        	this.btnSearch.set_text("▲");
        	this.Div_Search.set_visible(false);
        };

        this.Div_Search_cbKind1_onitemchanged = function(obj,e)
        {
        	//문서제목 콤보 선택했을 경우 이중조건 선택으로 인해 maskedit2 활성화
        	if(this.Div_Search.form.cbKind1.value == '1')
        		this.Div_Search.form.edVar2.set_visible(true);
        	else
        		this.Div_Search.form.edVar2.set_visible(false);
        };

        this.getData_select = function(str){

        	if(str == 1) iNowPage = 1;

        	var str_url, in_ds, out_ds, str_arg;
        	var pageSize = iNowPage*iVolumnPerPage;
        	var pageNo = ((iNowPage-1) * iVolumnPerPage)+1;

        	str_url = "JSP/gw/getData_gw_search.jsp";
        	in_ds = "ds_select_header=ds_select_header";
        	out_ds = "ds_select_header=ds_select_header";

        	str_arg =  "Search_id="+ nexacro.wrapQuote(this.Div_Search.form.cbKind1.value);
        	str_arg += " Search_text="+ nexacro.wrapQuote(this.Div_Search.form.edVar1.value);
        	str_arg += " Cal_sdate="+ nexacro.wrapQuote(this.Div_Search.form.CalSDate.value);
        	str_arg += " Cal_edate="+ nexacro.wrapQuote(this.Div_Search.form.CalEDate.value);
        	str_arg += " gubun='01'";
        	str_arg += " Search_id2="+ nexacro.wrapQuote(this.Div_Search.form.cbKind2.value);
        	str_arg += " Search_text2="+ nexacro.wrapQuote(this.Div_Search.form.edVar3.value);
        	str_arg += " Search_text3="+ nexacro.wrapQuote(this.Div_Search.form.edVar2.value);
        	str_arg += " sabun="+ nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        	str_arg += " PageNo="+ nexacro.wrapQuote(pageNo);
        	str_arg += " PageSize="+ nexacro.wrapQuote(pageSize);
        	//str_arg += " status_gb =" + nexacro.wrapQuote(Rdo_gb_mi.Value);
        	str_arg += " status_gb='00'";
        	str_arg += " doc_status="+ nexacro.wrapQuote(this.Div_Search.form.rdKind.value);

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Callback_gw_page", true, "P", false, this);

        	strKind = "조회문서";
        }

        this.Div_Search_ImgSelect_onclick = function(obj,e)
        {
        	str = 1;
        	this.getData_select(str);
        	str = null;
        };


        //모든 검색조건 초기화
        this.Div_Search_ImgReset_onclick = function(obj,e)
        {
        	this.Div_Search.form.cbKind1.set_value("2");
        	this.Div_Search.form.cbKind2.set_value("0");

        	this.Div_Search.form.edVar1.set_value('');
        	this.Div_Search.form.edVar1.set_displaynulltext('검색어를 입력하세요');
        	this.Div_Search.form.edVar2.set_visible(false);
        	this.Div_Search.form.edVar2.set_value('');
        	this.Div_Search.form.edVar2.set_displaynulltext('검색어를 입력하세요');
        	this.Div_Search.form.edVar3.set_value('');
        	this.Div_Search.form.edVar3.set_displaynulltext('검색어를 입력하세요');

        	var today = new Date();
        	this.Div_Search.form.CalEDate.set_value(Eco.date.getMaskFormatString(today,"yyyy-MM-dd"));
        	this.Div_Search.form.CalSDate.set_value(Eco.date.addMonth(today, -1));

        	this.Div_Search.form.rdKind.set_value("0");
        };

        this.Div_Search_rdKind_onitemchanged = function(obj,e)
        {
        	str = 1;
        	this.getData_select(str);
        	str = null;
        };

        this.btn_Substitute_onclick = function(obj,e)
        {

        	//dsParam1 = buse, dsParam2 = sabun (나중에 글로벌 연결되면 코드처리)
        	var objParam = {dsParam1:'GE000',
        					dsParam2: nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"))};
        	this.lfn_showModal("popupSubstitute", objParam, "gw::Substitute_Approval.xfdl", "popupCallBack", this, '', '', '515', '520' );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GwMain_onload,this);
            this.addEventHandler("onsize",this.GwMain_onsize,this);
            this.addEventHandler("ontimer",this.GwMain_ontimer,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.Div_Page.addEventHandler("onclick",this.Div_Page_onclick,this);
            this.Div_Page.form.Stc_Prev_Pre.addEventHandler("onclick",this.Div_Page_onclick,this);
            this.Div_Page.form.Stc_Prev.addEventHandler("onclick",this.Div_Page_onclick,this);
            this.Div_Page.form.Stc_Next.addEventHandler("onclick",this.Div_Page_onclick,this);
            this.Div_Page.form.Stc_Next_Next.addEventHandler("onclick",this.Div_Page_onclick,this);
            this.Div_Search.form.cbKind1.addEventHandler("onitemchanged",this.Div_Search_cbKind1_onitemchanged,this);
            this.Div_Search.form.ImgReset.addEventHandler("onclick",this.Div_Search_ImgReset_onclick,this);
            this.Div_Search.form.ImgClose.addEventHandler("onclick",this.Div_Search_ImgClose_onclick,this);
            this.Div_Search.form.ImgSelect.addEventHandler("onclick",this.Div_Search_ImgSelect_onclick,this);
            this.Div_Search.form.rdKind.addEventHandler("onitemchanged",this.Div_Search_rdKind_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btn_Substitute.addEventHandler("onclick",this.btn_Substitute_onclick,this);
            this.ds_select_header.addEventHandler("onrowposchanged",this.ds_select_header_onrowposchanged,this);
            this.ds_select_header130.addEventHandler("onrowposchanged",this.ds_select_header_onrowposchanged,this);
        };
        this.loadIncludeScript("GW100.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
