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
            this.set_titletext("월별 제작비 지급액");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRIOR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_YEAR\" type=\"FLOAT\" size=\"512\"/><Column id=\"JAN\" type=\"FLOAT\" size=\"512\"/><Column id=\"FEB\" type=\"FLOAT\" size=\"512\"/><Column id=\"MAR\" type=\"FLOAT\" size=\"512\"/><Column id=\"APR\" type=\"FLOAT\" size=\"512\"/><Column id=\"MAY\" type=\"FLOAT\" size=\"512\"/><Column id=\"JUN\" type=\"FLOAT\" size=\"512\"/><Column id=\"JUL\" type=\"FLOAT\" size=\"512\"/><Column id=\"AUG\" type=\"FLOAT\" size=\"512\"/><Column id=\"SEP\" type=\"FLOAT\" size=\"512\"/><Column id=\"OCT\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOV\" type=\"FLOAT\" size=\"512\"/><Column id=\"DEC\" type=\"FLOAT\" size=\"512\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","688","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("월별 제작비 지급액");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"49","43","39","0.69%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"49","80","40","btnExcel:7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"49","80","40","btnPrt:7",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","6","97","98.85%","83.75%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"33\" band=\"summ\"/><Row size=\"33\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;PRIOR_YEAR&quot;)\"/><Cell col=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"1월\"/><Cell col=\"3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"2월\"/><Cell col=\"4\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"3월\"/><Cell col=\"5\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"4월\"/><Cell col=\"6\" text=\"5월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"6월\"/><Cell col=\"8\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"7월\"/><Cell col=\"9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"8월\"/><Cell col=\"10\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"9월\"/><Cell col=\"11\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"10월\"/><Cell col=\"12\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"11월\"/><Cell col=\"13\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"12월\"/><Cell col=\"14\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"계\"/><Cell col=\"15\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"대비(%)\"/></Band><Band id=\"body\"><Cell font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"bind:PL_NAME\" expr=\"dataset.getRowLevel(currow)==1?&apos;( 소 계)&apos;:PL_NAME\"/><Cell col=\"1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"bind:PRE_YEAR\" displaytype=\"mask\" maskeditformat=\"#,###.#\"/><Cell col=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:JAN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:FEB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:MAR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:APR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"bind:MAY\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:JUN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:JUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:AUG\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:SEP\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OCT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"12\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOV\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"13\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:DEC\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"14\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_YEAR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"15\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"text\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" expr=\"nexacro.floor(dataset.getColumn(currow, &quot;NOW_YEAR&quot;)/dataset.getColumn(currow, &quot;PRE_YEAR&quot;) * 100)+&quot;%&quot;\"/></Band><Band id=\"summary\"><Cell font=\"bold 13px/normal &quot;함초롬돋움&quot;\" text=\"( 가공비 소계 )\" textAlign=\"center\"/><Cell col=\"1\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;PRE_YEAR&quot;);\" maskeditformat=\"#,###.#\" displaytype=\"mask\"/><Cell col=\"2\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;JAN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"3\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;FEB&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"4\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;MAR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"5\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;APR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"6\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;MAY&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"7\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;JUN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"8\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;JUL&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"9\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;AUG&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"10\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;SEP&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"11\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;OCT&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"12\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;NOV&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"13\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;DEC&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"14\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;NOW_YEAR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"15\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"nexacro.floor(dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;NOW_YEAR&quot;) / dataset.getCaseSum(&quot;PL_CODE &gt;= &apos;19&apos;&quot;, &quot;PRE_YEAR&quot;) * 100)+&quot;%&quot;\" displaytype=\"normal\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" text=\"( 총 계 )\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" expr=\"dataset.getSum(&quot;PRE_YEAR&quot;);\" maskeditformat=\"#,###.#\" displaytype=\"mask\"/><Cell row=\"1\" col=\"2\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;JAN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"3\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;FEB&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"4\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;MAR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"5\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;APR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"6\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;MAY&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"7\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;JUN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"8\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;JUL&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"9\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;AUG&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"10\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;SEP&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"11\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OCT&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"12\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOV&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"13\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;DEC&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"14\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_YEAR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell row=\"1\" col=\"15\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"nexacro.floor(dataset.getSum(&quot;NOW_YEAR&quot;) / dataset.getSum( &quot;PRE_YEAR&quot;) * 100)+&quot;%&quot;\" displaytype=\"normal\" maskeditformat=\"#,###.#\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp",null,"48","21","17","btnSearch:88",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("▲");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYy",null,"49","136","35","btnUp:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stYyyy",null,"49","85","35","calYy:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회연도");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown",null,"66","21","17","btnSearch:88",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("▼");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","64","558","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(단위 : 백만원)");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            obj.set_color("slategray");
            this.addChild(obj.name, obj);
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
        this.addIncludeScript("MK168.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK168.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK168.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlExcel = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");

        	//권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerSel != "1" || vPerPrt != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){
        		var d = new Date();
        		var strToDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");						//오늘날짜
        		var strToDay  = strToDay.substr(0,4);
        		this.calYy.set_value(strToDay);
        		this.calYy.setFocus();
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
        	this.lfn_grdAutofit(this.grdList);
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {

        	if(this.calYy.value == "" || Eco.isUndefined(this.calYy.value) == true )
        	{
        		alert("조회연도를 정확히 입력해 주세요.");
        		this.calYy.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";

        	var vPriorYear;
        	vPriorYear = nexacro.toNumber(this.calYy.value.substr(0, 4))-1;

        	str_url = "JSP/mk/mk168_Select.jsp";
        	str_arg = "PRIOR_YEAR=" +nexacro.wrapQuote(vPriorYear) +
        			  " NOW_YEAR=" +nexacro.wrapQuote(this.calYy.value.substr(0, 4)) +
        			  " PRIOR_YEAR_MM=" +nexacro.wrapQuote(vPriorYear+"01") +
        			  " NOW_YEAR_MM=" +nexacro.wrapQuote(this.calYy.value.substr(0, 4)+"12");

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsList.rowcount == 0){
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calYy.value == "" || Eco.isUndefined(this.calYy.value) == true )
        	{
        		alert("조회연도를 정확히 입력해 주세요.");
        		this.calYy.setFocus();
        		return false;
        	}

        	var vPriorYear;
        	vPriorYear = nexacro.toNumber(this.calYy.value.substr(0, 4))-1;

        	var	rdUrl = gv_svcUrl + "rpt/mk/MK168.mrd";
        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" +vPriorYear+ "] [" +this.calYy.value.substr(0, 4)+ "] [" +vPriorYear+"01"+ "] [" +this.calYy.value.substr(0, 4)+"12"+ "]";

        	var vScreenWidth = system.getScreenWidth();

        	if(vScreenWidth >= 1920)
        		vScreenWidth = vScreenWidth/2

        	nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        };

        this.LocalFctn_OnKeyDown = function(obj,e)
        {
        	var curObj = this.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		curObj = this.getNextComponent(curObj, true);
        		curObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(curObj == "[object Combo]")
        		{
        			if(curObj.index == -1)
        				curObj.dropdown();
        		}
        	}
        };

        //#######################################################
        // 사용권한에 따른 컴포넌트 Enable 여부
        // formObj : 폼 ID 변수
        // _set : Enable 변수 (True, False)
        //#######################################################
        this.fctn_User_Enabled = function(formObj, _set)
        {
        	var comObj;
        	// 마스터 폼 컴포넌트 Enabled 여부
        	for(var i = 0; i < formObj.components.length;  i++)
        	{
        		comObj = formObj.components[i];

        		if (comObj == "[object Edit]" || comObj == "[object Combo]"
        		   || comObj == "[object Calendar]" || comObj == "[object MaskEdit]"
        		   || comObj == "[object TextArea]")
        		{
        			comObj.set_enable(_set);
        		}
        	}

        	if(vPerSel != 1)
        		this.btnSearch.set_enable(_set);

        	if(vPerPrt != 1){
        		this.btnPrt.set_enable(_set);
        		this.btnExcel.set_enable(_set);
        	}
        }

        this.btnUp_onclick = function(obj,e)
        {
        	var strUpDate = nexacro.toNumber(this.calYy.value.substr(0, 4))+1;
        	this.calYy.set_value(strUpDate);
        };

        this.btnDown_onclick = function(obj,e)
        {
        	var strDownDate = nexacro.toNumber(this.calYy.value.substr(0, 4))-1;
        	this.calYy.set_value(strDownDate);
        };

        this.btnExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.grdList, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
        };
        this.loadIncludeScript("MK168.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
