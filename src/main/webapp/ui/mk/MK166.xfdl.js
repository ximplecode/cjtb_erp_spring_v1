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
            this.set_titletext("월별 동기간 거래처 지급액");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_YY\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_YY\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_JAN\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_JAN\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_FEB\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_FEB\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_MAR\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_MAR\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_APR\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_APR\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_MAY\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_MAY\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_JUN\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_JUN\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_JUL\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_JUL\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_AUG\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_AUG\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_SEP\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_SEP\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_OCT\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_OCT\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_NOV\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_NOV\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_DEC\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_DEC\" type=\"FLOAT\" size=\"512\"/><Column id=\"OLD_ALL\" type=\"FLOAT\" size=\"512\"/><Column id=\"NOW_ALL\" type=\"FLOAT\" size=\"512\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","558","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("월별 동기간 거래처 지급액");
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
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"136\" band=\"left\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"36\"/><Row size=\"33\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"거래처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" colspan=\"3\" text=\"1월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" colspan=\"3\" text=\"2월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" colspan=\"3\" text=\"3월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" colspan=\"3\" text=\"4월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"14\" colspan=\"3\" text=\"5월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"17\" colspan=\"3\" text=\"6월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"20\" colspan=\"3\" text=\"7월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"23\" colspan=\"3\" text=\"8월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"26\" colspan=\"3\" text=\"9월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"29\" colspan=\"3\" text=\"10월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"32\" colspan=\"3\" text=\"11월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"35\" colspan=\"3\" text=\"12월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"38\" colspan=\"3\" text=\"합  계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"2\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"4\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"5\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"6\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"7\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"8\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"9\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"10\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"11\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"12\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"13\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"14\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"15\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"16\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"17\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"18\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"19\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"20\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"21\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"22\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"23\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"24\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"25\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"26\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"27\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"28\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"29\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"30\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"31\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"32\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"33\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"34\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"35\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"36\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"37\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"38\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;OLD_YY&quot;)\"/><Cell row=\"1\" col=\"39\" text=\"bind:NOW_YY\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getColumn(0, &quot;NOW_YY&quot;)\"/><Cell row=\"1\" col=\"40\" text=\"%\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"bind:PL_NAME\" wordWrap=\"char\"/><Cell col=\"1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"bind:NAME\" wordWrap=\"char\" expr=\"dataset.getRowLevel(currow) ==1?&apos;( 소  계 )&apos;:NAME\"/><Cell col=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_JAN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_JAN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_JAN&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_JAN&quot;)*100:&apos;&apos;\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_FEB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_FEB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_FEB&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_FEB&quot;)*100:&apos;&apos;\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_MAR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_MAR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_MAR&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_MAR&quot;)*100:&apos;&apos;\"/><Cell col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_APR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"12\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_APR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"13\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_APR&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_APR&quot;)*100:&apos;&apos;\"/><Cell col=\"14\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_MAY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"15\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_MAY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"16\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_MAY&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_MAY&quot;)*100:&apos;&apos;\"/><Cell col=\"17\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_JUN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"18\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_JUN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"19\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:EDITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_JUN&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_JUN&quot;)*100:&apos;&apos;\"/><Cell col=\"20\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_JUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"21\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_JUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"22\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_JUL&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_JUL&quot;)*100:&apos;&apos;\"/><Cell col=\"23\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_AUG\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"24\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_AUG\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"25\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_AUG&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_AUG&quot;)*100:&apos;&apos;\"/><Cell col=\"26\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_SEP\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"27\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_SEP\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"28\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_SEP&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_SEP&quot;)*100:&apos;&apos;\"/><Cell col=\"29\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_OCT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"30\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_OCT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"31\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_OCT&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_OCT&quot;)*100:&apos;&apos;\"/><Cell col=\"32\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_NOV\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"33\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_NOV\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"34\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_NOV&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_NOV&quot;)*100:&apos;&apos;\"/><Cell col=\"35\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_DEC\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"36\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_DEC\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"37\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_DEC&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_DEC&quot;)*100:&apos;&apos;\"/><Cell col=\"38\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:OLD_ALL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"39\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:NOW_ALL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###.#\"/><Cell col=\"40\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:EDITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\" expr=\"dataset.getRowLevel(currow)!=1?dataset.getColumn(currow,&quot;NOW_ALL&quot;)/dataset.getCaseSum(&quot;PL_CODE ==&apos;&quot;+dataset.getColumn(currow, &quot;PL_CODE&quot;)+&quot;&apos;&quot;, &quot;NOW_ALL&quot;)*100:&apos;&apos;\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" text=\"총     계\" textAlign=\"center\"/><Cell col=\"2\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_JAN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"3\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_JAN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"4\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"5\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_FEB&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"6\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_FEB&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"7\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"8\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_MAR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"9\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_MAR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"10\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"11\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_APR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"12\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_APR&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"13\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"14\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_MAY&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"15\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_MAY&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"16\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"17\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_JUN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"18\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_JUN&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"19\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"20\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_JUL&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"21\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_JUL&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"22\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"23\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_AUG&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"24\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_AUG&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"25\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"26\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_SEP&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"27\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_SEP&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"28\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"29\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_OCT&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"30\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_OCT&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"31\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"32\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_NOV&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"33\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_NOV&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"34\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"35\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_DEC&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"36\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_DEC&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"37\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"38\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;OLD_ALL&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"39\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;NOW_ALL&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###.#\" textAlign=\"right\"/><Cell col=\"40\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp",null,"46","21","27","btnSearch:88",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("▲");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYyMm",null,"46","136","45","btnUp:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy-MM");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stYyyyMm",null,"46","85","45","calYyMm:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("해당월");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown",null,"64","21","27","btnSearch:88",null,null,null,null,null,this);
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
        this.addIncludeScript("MK166.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK166.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK166.xfdl", function() {
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
        		var strToDay  = strToDay.substr(0,6);
        		this.calYyMm.set_value(strToDay);
        		this.calYyMm.setFocus();
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

        	if(this.calYyMm.value == "" || Eco.isUndefined(this.calYyMm.value) == true )
        	{
        		alert("조회연월을 정확히 입력해 주세요.");
        		this.calYyMm.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";

        	var vPriorYear, vNowYear;
        	vPriorYear = nexacro.toNumber(this.calYyMm.value.substr(0, 4))-1;
        	vNowYear = this.calYyMm.value.substr(0, 4);

        	str_url = "JSP/mk/mk166_Select.jsp";
        	str_arg = "PRIOR_YEAR=" +nexacro.wrapQuote(vPriorYear) +
        			  " NOW_YEAR=" +nexacro.wrapQuote(vNowYear) +
        			  " PRIOR_YYYYMM_1=" +nexacro.wrapQuote(vPriorYear+"01") +
        			  " PRIOR_YYYYMM_12=" +nexacro.wrapQuote(vPriorYear+"12") +
        			  " NOW_YYYYMM_1=" +nexacro.wrapQuote(vNowYear+"01") +
        			  " NOW_YYYYMM=" +nexacro.wrapQuote(this.calYyMm.value.substr(0,6));

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

        		this.dsList.set_keystring("G:PL_CODE");
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calYyMm.value == "" || Eco.isUndefined(this.calYyMm.value) == true )
        	{
        		alert("조회연월을 정확히 입력해 주세요.");
        		this.calYyMm.setFocus();
        		return false;
        	}

        	var vPriorYear, vNowYear;
        	vPriorYear = nexacro.toNumber(this.calYyMm.value.substr(0, 4))-1;
        	vNowYear = this.calYyMm.value.substr(0, 4);

        	var rdUrl = gv_svcUrl + "rpt/mk/MK166.mrd";
        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" +vPriorYear+ "] [" +vNowYear+ "] [" +vPriorYear+"01"+ "] [" +vPriorYear+"12"+ "] [" +vNowYear+"01"+ "] [" +this.calYyMm.value.substr(0,6)+ "]";

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
        	var strUpDate = Eco.date.addMonth(this.calYyMm.value, +1);
        	strUpDate = strUpDate.substr(0, 6);
        	this.calYyMm.set_value(strUpDate);
        };

        this.btnDown_onclick = function(obj,e)
        {
        	var strDownDate = Eco.date.addMonth(this.calYyMm.value, -1);
        	strDownDate = strDownDate.substr(0, 6);
        	this.calYyMm.set_value(strDownDate);
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
        this.loadIncludeScript("MK166.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
