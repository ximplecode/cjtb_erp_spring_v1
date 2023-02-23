(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW711");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(970,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_i_flow_seal_s", this);
            obj._setContents("<ColumnInfo><Column id=\"FS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_GUBN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_USE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"FS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FS_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_header", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAMES\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DURING\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_02_00_02_01","14","187","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문서번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo01","96","187","16.91%","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","14","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo","95","60","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","251","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용부서");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","489","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","571","60","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo00","333","60","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00","722","187","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("문서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_contract","804","187","154","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var cb_contract_innerdataset = new nexacro.NormalDataset("cb_contract_innerdataset", obj);
            cb_contract_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">일반문서</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서</Col></Row></Rows>");
            obj.set_innerdataset(cb_contract_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00","262","187","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("제출처");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","344","187","38.66%","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00_00","727","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("직인종류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_gubun","809","60","149","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var cb_gubun_innerdataset = new nexacro.NormalDataset("cb_gubun_innerdataset", obj);
            cb_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">법인인감(회장)</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">법인인감(사장)</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">사용인감</Col></Row></Rows>");
            obj.set_innerdataset(cb_gubun_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02","14","92","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","95","92","88.97%","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_00","14","125","80","60",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("사용용도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_use","96","125","88.87%","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_02_00_00","14","219","80","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_bigo","96","219","88.87%","60",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_15","14","280","80","70",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("첨부파일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","96","280","88.87%","70",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"495\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","12","345","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("인감사용 신청 내용 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pass",null,"15","63","25","145",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("승인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_nonpass",null,"15","63","25","79",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("기각");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"15","63","25","14",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","14","360",null,null,"14","10",null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",970,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_outOrderNo01","value","ds_i_flow_seal_s","CO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_outOrderNo","value","ds_i_flow_seal_s","FS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_outOrderNo00","value","ds_i_flow_seal_s","FS_BUSENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Calendar00","value","ds_i_flow_seal_s","FS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cb_contract","value","ds_i_flow_seal_s","FS_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit01","value","ds_i_flow_seal_s","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cb_gubun","value","ds_i_flow_seal_s","FS_GUBN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_title","value","ds_i_flow_seal_s","FS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","txt_use","value","ds_i_flow_seal_s","FS_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","txt_bigo","value","ds_i_flow_seal_s","FS_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW711.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW711.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW711.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW711.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var nRow, DocKind;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;

        var RDURL, RDParameter;

        this.GW711_onload = function(obj,e)
        {
        	this.ds_i_flow_seal_s.clearData();
        	this.ds_i_flow_seal_s.addRow();

        	this.ds_i_flow_seal_s.copyRow(0, this.opener.ds_i_flow_seal, nRow);

        	if(this.ds_i_flow_seal_s.getColumn(0,"FS_STATUS") != "9")
        	{
        		this.btn_pass.set_enable(false);
        		this.btn_nonpass.set_enable(false);
        	}

        	/*
        	var strUrl = "JSP/gw/GW711_files_select_etc.jsp";
        	var inds = "ds_File=ds_File";
        	var outds = "ds_File=ds_File";
        	var strArg = "fs_id=" + nexacro.wrapQuote(this.ds_i_flow_seal_s.getColumn(0,"FS_ID"));

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectCallback", false, "P", false, this);
        	*/

        	var strUrl = "JSP/gw/GW711_header_select.jsp";
        	var inds = "ds_flow_header=ds_flow_header";
        	var outds = "ds_flow_header=ds_flow_header";
        	var strArg = "i_flow_id=" + nexacro.wrapQuote(this.ds_i_flow_seal_s.getColumn(0,"I_FLOW_ID"));

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnHeaderCallback", false, "P", false, this);
        };
        /*
        this.fnSelectCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.ds_flow_header.getColumn(0,"I_FLOW_ID") > 0)
        		{
        			var strUrl = "JSP/gw/GW711_header_select.jsp";
        			var inds = "ds_flow_header=ds_flow_header";
        			var outds = "ds_flow_header=ds_flow_header";
        			var strArg = "i_flow_id=" + nexacro.wrapQuote(this.ds_i_flow_seal_s.getColumn(0,"I_FLOW_ID"));

        			this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnHeaderCallback", false, "P", false, this);
        		}
        		else
        			this.WebBrowser00.set_visible(false);
        	}
        }
        */
        this.fnHeaderCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		trace(this.ds_flow_header.saveXML());
        		if(this.ds_flow_header.getColumn(0,"F_CONTENT").substr(0,4) == "http")
        		{
        			DocKind = "MRD";
        			this.fnLoadRd();
        		}
        		else
        		{
        			DocKind = "HWP";
        			this.WebBrowser00.set_url(urlFile+"/hancom/web_see.jsp");
        		}
        	}
        }

        this.fnLoadRd = function()
        {
        	if(this.ds_flow_header.getColumn(0, "F_XML") == "PD110F.xml") //일반지결서, 정기지불
        		RDURL = gv_urlMrd + "/pd/PD110_U_DOC.mrd";
        	else if(this.ds_flow_header.getColumn(0, "F_XML") == "PD130F.xml")
        		RDURL = gv_urlMrd + "/pd/PD130_2_DOC.mrd";
        	else
        	{
        		// http://erp.chunjae.co.kr/erpchunjae2011/pd/rpt/PD140.mrd
        		// https://cj-erp.chunjae.co.kr/erp-next/rpt/pd/PD140.mrd
        		RDURL = "https://cj-erp.chunjae.co.kr/erp-next/rpt/gw/GW700.mrd"
        	}

        	if(this.ds_flow_header.getColumn(0,"F_XML") == "ED141F.xml")
        		RDParameter = "/rp [1][1]["+ this.ds_flow_header.getColumn(0, "I_FLOW_ID") + "][1]";
        	else if(this.ds_flow_header.getColumn(0,"F_XML") == "ED141F.xml")
        		RDParameter = "/rp [1][2]["+ this.ds_flow_header.getColumn(0, "I_FLOW_ID") + "][1]";
        	else if(this.ds_flow_header.getColumn(0,"F_XML") == "MK121F.xml")
        		RDParameter = "/rp [][]";
        	else if(this.ds_flow_header.getColumn(0,"F_XML") == "PD130F.xml")	//정기지불
        		RDParameter = "/rp [1]["+ this.ds_flow_header.getColumn(0, "I_FLOW_ID") + "]["+  +"][2E000]";
        	else
        		RDParameter = "/rp [1]["+ this.ds_flow_header.getColumn(0, "I_FLOW_ID") + "][1]";

        	this.WebBrowser00.set_url(urlMrdHtml);

        }

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	if(DocKind = "MRD")
        	{
        		if(e.url.indexOf("sample.html")>=0)
        		{
        			var sUrl = urlMrdService;
        			var sId = "crownix-viewer";

        			this.WebBrowser00.callMethod("_crownix_createViewer", sUrl, sId, RDURL, RDParameter);
        		}
        	}
        };

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	if(e.userdata == "AA")
        	{
        		//var dsH = this.Ds_GW130_H.saveXML();
        		//var dsO = this.Ds_GW130_O.saveXML();

        		//this.WebBrowser00.callMethod("fn_merge",url1, url2,dsH, dsO);
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW711_onload,this);
            this.Static00_02_00_02_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_outOrderNo01.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_outOrderNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_02_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_outOrderNo00.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_02_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02_00_02_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_15.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_file.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.grd_file.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_pass.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_nonpass.addEventHandler("onclick",this.btn_tempsave_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.ds_i_flow_seal_s.addEventHandler("onrowsetchanged",this.ds_i_flow_seal_s_onrowsetchanged,this);
        };
        this.loadIncludeScript("GW711.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
