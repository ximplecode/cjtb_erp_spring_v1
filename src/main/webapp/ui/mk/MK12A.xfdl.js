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
            this.set_titletext("제지사 용지매입 월현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRIN_ALL_R_01\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_R_02\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_R_03\" type=\"FLOAT\" size=\"256\" prop=\"\"/><Column id=\"PPRIN_ALL_R_04\" type=\"FLOAT\" size=\"256\" prop=\"\"/><Column id=\"PPRIN_ALL_R_05\" type=\"FLOAT\" size=\"256\" prop=\"\"/><Column id=\"PPRIN_ALL_R_06\" type=\"FLOAT\" size=\"256\" prop=\"\"/><Column id=\"PPRIN_ALL_R_07\" type=\"FLOAT\" size=\"256\" prop=\"\"/><Column id=\"PPRIN_ALL_R_08\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_R_09\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_R_10\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_R_11\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_R_12\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_R_TOT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_01\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_02\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_03\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_04\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_05\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_06\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_07\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_08\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_09\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_10\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_11\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_12\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_ALL_T_TOT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_01\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_02\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_03\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_04\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_05\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_06\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_07\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_08\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_09\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_10\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_11\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_12\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_R_TOT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_01\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_02\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_03\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_04\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_05\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_06\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_07\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_08\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_09\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_10\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_11\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_12\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_T_TOT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_01\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_02\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_03\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_04\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_05\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_06\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_07\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_08\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_09\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_10\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_11\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_12\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_R_TOT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_01\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_02\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_03\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_04\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_05\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_06\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_07\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_08\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_09\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_10\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_11\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_12\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPRIN_AMT_T_TOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","478","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제지사 용지매입 월현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"29","80","40","1.23%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("인쇄");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnRpt",null,"29","80","40","btnPrt:9",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnRpt:9",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"13","160","35","292",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"13","161","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"13","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("매입일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Combo("cbPprCustNm",null,"51","233","35","292",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            this.addChild(obj.name, obj);

            obj = new Edit("edPprCustCd",null,"51","88","35","cbPprCustNm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stPpr",null,"51","85","35","edPprCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("제지사");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","89","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"143\"/><Column size=\"145\"/><Column size=\"78\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"119\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"1월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"2월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"3월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"4월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"5월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"6월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"7월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"8월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"9월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"10월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"13\" text=\"11월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"14\" text=\"12월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"15\" text=\"계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell rowspan=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" displaytype=\"text\" text=\"bind:PPR_CUST\"/><Cell col=\"1\" rowspan=\"4\" text=\"bind:PPRKND\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"R합계\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PPRIN_R_01\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PPRIN_R_02\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:PPRIN_R_03\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PPRIN_R_04\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:PPRIN_R_05\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:PPRIN_R_06\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:PPRIN_R_07\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:PPRIN_R_08\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:PPRIN_R_09\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:PPRIN_R_10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:PPRIN_R_11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:PPRIN_R_12\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"15\" text=\"bind:PPRIN_R_TOT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###.###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"2\" text=\"T합계\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"bind:PPRIN_T_01\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"4\" text=\"bind:PPRIN_T_02\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"5\" text=\"bind:PPRIN_T_03\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"6\" text=\"bind:PPRIN_T_04\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"7\" text=\"bind:PPRIN_T_05\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"8\" text=\"bind:PPRIN_T_06\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"9\" text=\"bind:PPRIN_T_07\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"10\" text=\"bind:PPRIN_T_08\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"11\" text=\"bind:PPRIN_T_09\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"12\" text=\"bind:PPRIN_T_10\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"13\" text=\"bind:PPRIN_T_11\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"14\" text=\"bind:PPRIN_T_12\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"15\" text=\"bind:PPRIN_T_TOT\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"2\" text=\"R환산합계\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" text=\"bind:PPRIN_ALL_R_01\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"4\" text=\"bind:PPRIN_ALL_R_02\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"5\" text=\"bind:PPRIN_ALL_R_03\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"6\" text=\"bind:PPRIN_ALL_R_04\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"7\" text=\"bind:PPRIN_ALL_R_05\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"8\" text=\"bind:PPRIN_ALL_R_06\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"9\" text=\"bind:PPRIN_ALL_R_07\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"10\" text=\"bind:PPRIN_ALL_R_08\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"11\" text=\"bind:PPRIN_ALL_R_09\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"12\" text=\"bind:PPRIN_ALL_R_10\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"13\" text=\"bind:PPRIN_ALL_R_11\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"14\" text=\"bind:PPRIN_ALL_R_12\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"2\" col=\"15\" text=\"bind:PPRIN_ALL_R_TOT\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"T환산합계\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\" text=\"bind:PPRIN_ALL_T_01\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"4\" text=\"bind:PPRIN_ALL_T_02\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"5\" text=\"bind:PPRIN_ALL_T_03\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"6\" text=\"bind:PPRIN_ALL_T_04\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"7\" text=\"bind:PPRIN_ALL_T_05\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"8\" text=\"bind:PPRIN_ALL_T_06\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"9\" text=\"bind:PPRIN_ALL_T_07\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"10\" text=\"bind:PPRIN_ALL_T_08\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"11\" text=\"bind:PPRIN_ALL_T_09\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"12\" text=\"bind:PPRIN_ALL_T_10\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"13\" text=\"bind:PPRIN_ALL_T_11\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"14\" text=\"bind:PPRIN_ALL_T_12\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell row=\"3\" col=\"15\" text=\"bind:PPRIN_ALL_T_TOT\" maskeditformat=\"#,###.###\" displaytype=\"mask\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"R 총합계\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;PPRIN_R_01&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;PPRIN_R_02&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;PPRIN_R_03&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;PPRIN_R_04&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;PPRIN_R_05&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;PPRIN_R_06&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;PPRIN_R_07&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;PPRIN_R_08&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"11\" expr=\"dataset.getSum(&apos;PPRIN_R_09&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"12\" expr=\"dataset.getSum(&apos;PPRIN_R_10&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"13\" expr=\"dataset.getSum(&apos;PPRIN_R_11&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"14\" expr=\"dataset.getSum(&apos;PPRIN_R_12&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"15\" expr=\"dataset.getSum(&apos;PPRIN_R_TOT&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" colspan=\"3\" text=\"T 총합계\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"3\" expr=\"dataset.getSum(&apos;PPRIN_T_01&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"4\" expr=\"dataset.getSum(&apos;PPRIN_T_02&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"5\" expr=\"dataset.getSum(&apos;PPRIN_T_03&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"6\" expr=\"dataset.getSum(&apos;PPRIN_T_04&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"7\" expr=\"dataset.getSum(&apos;PPRIN_T_05&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"8\" expr=\"dataset.getSum(&apos;PPRIN_T_06&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"9\" expr=\"dataset.getSum(&apos;PPRIN_T_07&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"10\" expr=\"dataset.getSum(&apos;PPRIN_T_08&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"11\" expr=\"dataset.getSum(&apos;PPRIN_T_09&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"12\" expr=\"dataset.getSum(&apos;PPRIN_T_10&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"13\" expr=\"dataset.getSum(&apos;PPRIN_T_11&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"14\" expr=\"dataset.getSum(&apos;PPRIN_T_12&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"15\" expr=\"dataset.getSum(&apos;PPRIN_T_TOT&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" colspan=\"3\" text=\"R환산 총합계\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"2\" col=\"3\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_01&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"4\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_02&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"5\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_03&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"6\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_04&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"7\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_05&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"8\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_06&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"9\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_07&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"10\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_08&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"11\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_09&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"12\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_10&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"13\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_11&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"14\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_12&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"15\" expr=\"dataset.getSum(&apos;PPRIN_ALL_R_TOT&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" colspan=\"3\" text=\"T환산 총합계\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"3\" col=\"3\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_01&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"4\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_02&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"5\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_03&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"6\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_04&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"7\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_05&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"8\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_06&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"9\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_07&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"10\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_08&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"11\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_09&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"12\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_10&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"13\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_11&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"14\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_12&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"15\" expr=\"dataset.getSum(&apos;PPRIN_ALL_T_TOT&apos;);\" font=\"normal 700 13px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.###\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","1520","90","39","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
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
        this.addIncludeScript("MK12A.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK12A.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK12A.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK12A.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr, rdUrl, rdParam;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "40";
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;


        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	if(vPerSel = "1"){
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");							//오늘날짜 setting
        		var strPreDay = Eco.date.getMaskFormatString(Eco.date.getFirstDate(d), "yyyyMMdd"); //이번달 1일 setting

        		this.calSDate.set_value(strPreDay);
        		this.calEDate.set_value(strtoDay);

        		//발주처 정보 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);
        		this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");

        		this.calSDate.setFocus();
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
        	if(this.calSDate.value == "" )
        	{
        		alert("매입일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" )
        	{
        		alert("매입일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";

        	if(Eco.isUndefined(this.edPprCustCd.value) == true || this.edPprCustCd.value == "0000"){
        		vCustCd = "";
        		sCust_Gubn = "";
        	}else {
        		vCustCd = this.edPprCustCd.value;
        		sCust_Gubn = "40";
        	}

        	str_url = "JSP/mk/mk12A_Select.jsp";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " CUST_GUBN=" +nexacro.wrapQuote( sCust_Gubn) +
        			  " CUST_CODE=" +nexacro.wrapQuote(vCustCd);

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
        	if(this.calSDate.value == "" )
        	{
        		alert("매입일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" )
        	{
        		alert("매입일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	var vCustCd;

        	if(Eco.isUndefined(this.edPprCustCd.value) == true || this.edPprCustCd.value == "0000"){
        		vCustCd = "";
        		sCust_Gubn = "";
        	}else {
        		vCustCd = this.edSCustCd.value;
        		sCust_Gubn = "40";
        	}

        	rdUrl = gv_svcUrl + "rpt/mk/MK12A.mrd";

        	if(obj.name == "btnRpt"){
        		rdParam = "/rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] [" + sCust_Gubn + "] [" +  vCustCd + "]";
        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}else{

        		rdParam = "/rpdfprintdialog /rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] [" + sCust_Gubn + "] [" +  vCustCd + "]";
        		this.WebBrowser00.set_url(urlMrdHtml);
        		this.WebBrowser00_onloadcompleted();
        	}

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

        this.edPprCustCd_onchanged = function(obj,e)
        {
        	if(this.edPprCustCd.text.length == 1){

        		var vPprCustCd = this.lfn_CustName(sCust_Gubn, this.edPprCustCd.text);
        		this.edPprCustCd.set_value(vPprCustCd);
        	}

        	if(this.edPprCustCd.getLength() == this.edPprCustCd.text.length){

        		this.cbPprCustNm.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn+this.edPprCustCd.text));

        		if(this.cbPprCustNm.index == -1){
        			this.cbPprCustNm.setFocus();
        			this.cbPprCustNm.dropdown();
        		}
        	}
        };


        this.cbPprCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbPprCustNm.text);
        	this.edPprCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        };

        //인쇄버튼 클릭시 바로 인쇄설정 나오게 하기 위해 안보이게 생성
        this.WebBrowser00_onloadcompleted = function()
        {
        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";

        	this.WebBrowser00.callMethod("_crownix_createPrint", sUrl, sId, rdUrl, rdParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnRpt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.cbPprCustNm.addEventHandler("onitemchanged",this.cbPprCustNm_onitemchanged,this);
            this.edPprCustCd.addEventHandler("onchanged",this.edPprCustCd_onchanged,this);
            this.edPprCustCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK12A.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
