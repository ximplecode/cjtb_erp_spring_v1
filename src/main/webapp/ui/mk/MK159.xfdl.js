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
            this.set_titletext("천재상사 용지매입 현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"PSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"METER_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"METER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"METER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"METER_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"METER_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTYS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPR_CONBERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"E_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"E_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">지종별</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">거래처별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"PSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"METER_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"METER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"METER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"METER_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"METER_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTYS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPR_CONBERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"E_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"E_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("<ColumnInfo><Column id=\"PSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"METER_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"METER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"METER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"METER_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"METER_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTYS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PPR_CONBERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"E_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"E_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"FLOAT\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnPrt",null,"34","80","40","1%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("인쇄");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnRpt",null,"34","80","40","btnPrt:10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"34","80","40","btnRpt:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","10","468","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("천재상사 용지매입 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"18","160","35","btnSearch:50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"18","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"18","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList2",null,"120","49%","81.67%","0.54%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsList2");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList2\"><Columns><Column size=\"38\"/><Column size=\"340\"/><Column size=\"97\"/><Column size=\"101\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"용지(윤전)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"수량(R)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"중량(T)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"expr:dataset.getRowType(currow)!=1?&apos;&apos;:dataset.getCaseCount(&quot;dataset.getRowType(currow)==&apos;1&apos;&quot;, 0, currow)+1\"/><Cell col=\"1\" text=\"bind:METER_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?dataset.getColumn(currow-1, &quot;NAME&quot;)+ &apos; 소계&apos;:dataset.getRowLevel(currow)==2?dataset.getColumn(currow-2, &quot;CLASS_NM&quot;)+ &apos; 집계&apos;:METER_NAME\"/><Cell col=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:QTYS\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.00\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:WEIGHT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.000\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" background=\"#fbce78\" text=\"백상지 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;01&apos;&quot;,&quot;QTYS&quot;);\"/><Cell col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;01&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"1\" background=\"#fbce78\"/><Cell row=\"1\" col=\"1\" background=\"#fbce78\" text=\"아트, S/W 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;02&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"1\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;02&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"2\" background=\"#fbce78\"/><Cell row=\"2\" col=\"1\" background=\"#fbce78\" text=\"백색 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"2\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;03&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"2\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;03&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"3\" background=\"#fbce78\"/><Cell row=\"3\" col=\"1\" background=\"#fbce78\" text=\"미색 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"3\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;04&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"3\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;04&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"4\" background=\"#fbce78\"/><Cell row=\"4\" col=\"1\" background=\"#fbce78\" text=\"기타 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"4\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;05&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"4\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;05&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"5\" background=\"#fbce78\"/><Cell row=\"5\" col=\"1\" background=\"#fbce78\" text=\"윤전지 총 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"5\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getSum(&apos;QTYS&apos;);\"/><Cell row=\"5\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getSum(&apos;WEIGHT&apos;);\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","9","120",null,"81.67%","grdList2:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsList1");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"38\"/><Column size=\"340\"/><Column size=\"97\"/><Column size=\"101\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"용지(매엽)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"수량(R)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"중량(T)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"expr:dataset.getRowType(currow)!=1?&apos;&apos;:dataset.getCaseCount(&quot;dataset.getRowType(currow)==&apos;1&apos;&quot;, 0, currow)+1\"/><Cell col=\"1\" text=\"bind:METER_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?dataset.getColumn(currow-1, &quot;NAME&quot;)+ &apos; 소계&apos;:dataset.getRowLevel(currow)==2?dataset.getColumn(currow-2, &quot;CLASS_NM&quot;)+ &apos; 집계&apos;:METER_NAME\"/><Cell col=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:QTYS\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.00\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:WEIGHT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.000\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" background=\"#fbce78\" text=\"백상지 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;01&apos;&quot;,&quot;QTYS&quot;);\"/><Cell col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;01&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"1\" background=\"#fbce78\"/><Cell row=\"1\" col=\"1\" background=\"#fbce78\" text=\"아트, S/W 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;02&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"1\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;02&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"2\" background=\"#fbce78\"/><Cell row=\"2\" col=\"1\" background=\"#fbce78\" text=\"백색 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"2\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;03&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"2\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;03&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"3\" background=\"#fbce78\"/><Cell row=\"3\" col=\"1\" background=\"#fbce78\" text=\"미색 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"3\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;04&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"3\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;04&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"4\" background=\"#fbce78\"/><Cell row=\"4\" col=\"1\" background=\"#fbce78\" text=\"기타 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"4\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;05&apos;&quot;,&quot;QTYS&quot;);\"/><Cell row=\"4\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;E_CODE == &apos;05&apos;&quot;,&quot;WEIGHT&quot;);\"/><Cell row=\"5\" background=\"#fbce78\"/><Cell row=\"5\" col=\"1\" background=\"#fbce78\" text=\"매엽지 총 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"5\" col=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getSum(&apos;QTYS&apos;);\"/><Cell row=\"5\" col=\"3\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getSum(&apos;WEIGHT&apos;);\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"57","323","35","btnSearch:50",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_rowcount("1");
            obj.set_columncount("5");
            obj.set_text("비용별 업체 리스트");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stGubun",null,"57","85","35","rdGubun:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList3","9","120",null,"81.67%","654",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList3");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"38\"/><Column size=\"177\"/><Column size=\"340\"/><Column size=\"38\"/><Column size=\"97\"/><Column size=\"101\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"매입사\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"수량(R)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"중량(T)\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"expr:dataset.getRowType(currow)!=1?&apos;&apos;:dataset.getCaseCount(&quot;dataset.getRowType(currow)==&apos;1&apos;&quot;, 0, currow)+1\"/><Cell col=\"1\" text=\"bind:CUST_NM\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?&apos;&apos;:CUST_NM\"/><Cell col=\"2\" text=\"bind:METER_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?dataset.getColumn(currow-1, &quot;CUST_NM&quot;)+ &apos; 소계&apos;:METER_NAME\"/><Cell col=\"3\" text=\"bind:METER_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?&apos;&apos;:dataset.getColumn(currow, &quot;METER_UNIT&quot;) == &quot;101&quot;?&apos;매엽&apos;:&apos;윤전&apos;\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:QTYS\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.00\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:WEIGHT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.000\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" background=\"#fbce78\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" background=\"#fbce78\" text=\"총 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" background=\"#fbce78\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getSum(&apos;QTYS&apos;);\"/><Cell col=\"5\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getSum(&apos;WEIGHT&apos;);\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","465","20","39","40",null,null,null,null,null,null,this);
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
        this.addIncludeScript("MK159.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK159.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK159.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt;
        var vStr, rdUrl, rdParam;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;
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
        	//this.lfn_grdAutofit(this.grdList);
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {

        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	if(this.rdGubun.value == "1")
        	{

        		//매엽지 조회
        		str_url = "JSP/mk/mk159_Select1.jsp";
        		in_ds 	= "dsList1=dsList1";
        		out_ds 	= "dsList1=dsList1";
        		str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        				  " EDATE=" + nexacro.wrapQuote(this.calEDate.value);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        		//윤전지 조회
        		str_url = "JSP/mk/mk159_Select2.jsp";
        		in_ds 	= "dsList2=dsList2";
        		out_ds 	= "dsList2=dsList2";
        		str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        				  " EDATE=" + nexacro.wrapQuote(this.calEDate.value);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        	}else{

        		//매입사별 조회
        		str_url = "JSP/mk/mk159_Select3.jsp";
        		in_ds 	= "dsList3=dsList3";
        		out_ds 	= "dsList3=dsList3";
        		str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        				  " EDATE=" + nexacro.wrapQuote(this.calEDate.value);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        	}

        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.rdGubun.value == 1)
        		{	if(this.dsList1.rowcount == 0 && this.dsList2.rowcount == 0 )
        			{
        				alert("조회된 자료가 없습니다.");
        				return false;
        			}

        			this.dsList1.set_keystring("G:E_CODE,CODE");
        			this.dsList2.set_keystring("G:E_CODE,CODE");

        		}else{
        			if(this.dsList3.rowcount == 0)
        			{
        				alert("조회된 자료가 없습니다.");
        				return false;
        			}

        			this.dsList3.set_keystring("S:E_CODE,G:CUST_NM");
        		}
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}


        	if(this.rdGubun.value == 1)
        		rdUrl = gv_svcUrl + "rpt/mk/MK159_1.mrd";
        	else
        		rdUrl = gv_svcUrl + "rpt/mk/MK159_2.mrd";

        	if(obj.name == "btnRpt"){

        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value + "] [" +  this.calEDate.value + "]";

        		var vScreenWidth = system.getScreenWidth();

        		if(vScreenWidth >= 1920)
        			vScreenWidth = vScreenWidth/2

        		nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);
        	}else{

        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rpdfprintdialog"+
        				  " /rp [" + this.calSDate.value + "]" +
        				       "[" + this.calEDate.value + "]";

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
        		this.btnRpt.set_enable(_set);
        	}
        }

        this.rdGubun_onitemchanged = function(obj,e)
        {
        	this.dsList1.clearData();
        	this.dsList2.clearData();
        	this.dsList3.clearData();

        	if(e.postvalue == 1){
        		this.grdList.set_visible(true);
        		this.grdList2.set_visible(true);
        		this.grdList3.set_visible(false);
        	}else{
        		this.grdList.set_visible(false);
        		this.grdList2.set_visible(false);
        		this.grdList3.set_visible(true);
        	}
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
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
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
        };
        this.loadIncludeScript("MK159.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
