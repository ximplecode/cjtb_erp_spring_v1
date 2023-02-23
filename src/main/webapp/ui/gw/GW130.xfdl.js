(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW130");
            this.set_titletext("전자결재 문서보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Ds_GW130_H", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SECURITY\" type=\"STRING\" size=\"256\"/><Column id=\"DURING\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GIAN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILECHK\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAMES\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"MRD_FILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds_GW130_O", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_s_flow", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RDTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gw_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_header130", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILES\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"OVERCHK\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_FLOW_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RDTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/><Column id=\"MI_CO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cnt_O", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pass", this);
            obj._setContents("<ColumnInfo><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_KYULNO_130", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("F_Dialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancel",null,"27","83","40","110",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("취 소");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"27","83","40","btnCancel:7",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭 제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,"19","40","40","1.08%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubReject",null,"27","83","40","btnCancel:7",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대결기각");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReject",null,null,"83","40","btnCancel:7","653",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기 각");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpt",null,"27","83","40","btnReject:7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수 정");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubAprv",null,"27","83","40","btnReject:7",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("대결승인");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","10","272","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문서 내용보기");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Div("DivElec",null,"74","410",null,"0%","1.67%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e8e7e3");
            this.addChild(obj.name, obj);

            obj = new Static("StDoc","6","8","398","36",null,null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("0");
            obj.set_text("참조문서");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivElec.addChild(obj.name, obj);

            obj = new Grid("grdDoc","6","StDoc:2","398","10.73%",null,null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_s_flow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"58\"/><Column size=\"252\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:F_DATE\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TITLE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.DivElec.addChild(obj.name, obj);

            obj = new Static("StState","6","grdDoc:6","398","36",null,null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("1");
            obj.set_text("결재자의견");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivElec.addChild(obj.name, obj);

            obj = new TextArea("txt_comment","6","StState:2","398","23.34%",null,null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("3");
            this.DivElec.addChild(obj.name, obj);

            obj = new Static("StFile","6","txt_comment:5","398","36",null,null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivElec.addChild(obj.name, obj);

            obj = new Grid("grdFile","6","StFile:1","398","44.01%",null,null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"351\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.DivElec.addChild(obj.name, obj);

            obj = new Button("btnFileDel",null,"txt_comment:5","44","40","1.71%",null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivElec.addChild(obj.name, obj);

            obj = new Button("btnFileSave",null,"txt_comment:5","44","40","btnFileDel:5",null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivElec.addChild(obj.name, obj);

            obj = new Button("btnFileFind",null,"txt_comment:5","43","40","btnFileSave:5",null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("6");
            obj.set_text("파일");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivElec.addChild(obj.name, obj);

            obj = new ImageViewer("ImgComm",null,"grdDoc:8","32","32","2.20%",null,null,null,null,null,this.DivElec.form);
            obj.set_taborder("9");
            obj.set_image("url(\'Img::search_small.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("검색");
            obj.set_background("#e8e7e3");
            obj.set_stretch("fit");
            this.DivElec.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","0","74",null,null,"DivElec:5","12",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnAprv",null,"27","83","40","btnReject:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("승 인");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReWrite",null,"27","83","40","btnAprv:7",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("재기안");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW130.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW130.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW130.xfdl","Lib::Lib_gw.xjs");
        this.addIncludeScript("GW130.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("GW130.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var urlHwp = nexacro.getApplication().gv_urlHwp+"/attachedfile/chunjae_file/";
        var urlHwpDoc = nexacro.getApplication().gv_urlHwp+"/attachedfile";
        var url1;		//결재라인hwp파일
        var url2;		//실제문서hwp파일
        var DocKind;  	//한글문서 : HWP , 기타문서 : MRD
        var urlMrd = nexacro.getApplication().gv_urlMrd;
        var urlMrdDoc = "";
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var mrd_file;
        var urlFile = nexacro.getApplication().gv_urlNext;
        var urlSave = nexacro.getApplication().gv_urlNext+"/jsp";
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;

        var vKind;
        var vI_Flow_Id;
        var gv_sabun = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        var gv_name;
        var rt_value;

        this.GW130_onload = function(obj,e)
        {
        	vI_Flow_Id = this.parent.dsParam1;
        	vKind = this.parent.dsParam2;
        	this.ds_select_header130.copyData(this.parent.dsParam3);
        	this.DS_GW_KYULNO_130.copyData(this.parent.dsParam4);

        	trace(this.ds_select_header130.saveXML());

        	var str_url, in_ds, out_ds, str_arg;

        	//결재문서 내용(I_FLOW_HEADER) 가져오기
        	str_url = "JSP/gw/SQL_GW130_01S_new.jsp";
        	in_ds = "Ds_GW130_H=Ds_GW130_H";
        	out_ds = "Ds_GW130_H=Ds_GW130_H";
        	str_arg  = "gubun='01'";
        	str_arg += " i_flow_id="+nexacro.wrapQuote(vI_Flow_Id);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Head", false, "P", false, this);
        };

        this.Callback_Head = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	//버튼 셋팅
        	this.setButton();

        	//현재 결재상황 셋팅
        	this.setPass();

        	var vFnames = this.Ds_GW130_H.getColumn(0, "F_NAMES");

        	//기타문서
        	if(vFnames == null || vFnames == ''){
        		DocKind = "MRD";
        		this.getData_Mrd();
        	}//한글문서
        	else{
        		//this.WebBrowser00.set_url("https://cj-erp.chunjae.co.kr:8000/erp-next/hancom/index_test2.jsp");
        		this.WebBrowser00.set_url(urlFile+"/hancom/web_see.jsp");
        		DocKind = "HWP";
        	}

        	this.getData_Order();
        }

        this.setButton = function()
        {

        	var pRow = this.ds_select_header130.rowposition;


        	//취소 버튼 가능 문서 setting
        	if(this.ds_select_header130.getColumn(pRow,"LAST_FLOW_SABUN") == gv_sabun)
        	{
        		if(this.Ds_GW130_H.getColumn(0, "F_TYPE") != 63 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 70 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 71 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 72 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 73 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 20 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 118 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 39 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 36 &&
        		   this.Ds_GW130_H.getColumn(0, "F_TYPE") != 124)
        		{
        			this.btnCancel.set_visible(true);
        		}
        	}

        	/*문서함 별로 버튼 setting이 다름*/
        	if(vKind == "미결문서"){
        		this.btnAprv.set_visible(true);           //승인
        		this.btnReject.set_visible(true);         //기각
        	}else if(vKind == "저장문서"){
        		this.btnUpt.set_visible(true);            //수정
        		this.btnDel.set_visible(true);            //삭제
        	}else if(vKind == "진행문서"){

        		//다음 차수 결재 여부 확인
        		str_url = "JSP/gw/SQL_GW_ISDEL.jsp";
        		in_ds = "ds_cnt_O=ds_cnt_O";
        		out_ds = "ds_cnt_O=ds_cnt_O";
        		str_arg = "i_flow_id="+nexacro.wrapQuote(vI_Flow_Id);
        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Degree", false, "P", false, this);
        	}
        	else if(vKind == "완결문서"){
        		//내가 상신한 문서 중 기안일 경우에만 재기안 가능
        		//임시
        		gv_name = this.Ds_GW130_O.getColumn(0, "F_NAME");
        		if (this.Ds_GW130_O.getColumn(0, "F_NAME") == gv_name)
        		{
        			if (this.Ds_GW130_H.getColumn(0,"F_TYPE") == "1" )
        				this.btnReWrite.set_visible("true");
        		}
        	}
        	else if(vKind == "대결문서"){
        		this.btnSubAprv.set_visible("true");
        		this.btnSubReject.set_visible("true");
        	}
        };


        this.Callback_Degree = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	var vDegree;
        	this.vDegree = this.ds_cnt_O.getColumn(0, "CODE");

        	if(this.vDegree == "0"){
        		this.btnUpt.set_visible(true);            //수정
        		this.btnDel.set_visible(true);            //삭제
        	}

        }

        // 현 결재상황 가져오기
        this.setPass = function(){

        	var str_url, in_ds, out_ds, str_arg, flowis;

        	if(vKind == "대결문서")
        		flowis = "D";

        	str_url = "JSP/gw/SQL_GW_PASS.jsp";
        	in_ds = "ds_pass=ds_pass";
        	out_ds = "ds_pass=ds_pass";
        	str_arg  = "gubun ="+nexacro.wrapQuote(this.DS_GW_KYULNO_130.getColumn(0, "GUBUN"));
        	str_arg += " sabun ="+nexacro.wrapQuote(this.ds_select_header130.getColumn(this.ds_select_header130.rowposition,"SABUN"));   //quote(gds_userinfo.GetColumn(0,"sabun"));
        	str_arg += " i_flow_id ="+nexacro.wrapQuote(vI_Flow_Id);
        	str_arg += " flowis =" +nexacro.wrapQuote(flowis);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Pass", false, "P", false, this);
        }

        this.Callback_Pass = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        }

        this.getData_Order = function(){

        	var str_url, in_ds, out_ds, str_arg;

        	// 결재문서 결재라인(I_FLOW_ORDER) 가져오기
        	str_url = "JSP/gw/SQL_GW130_01O.jsp";
        	in_ds = "Ds_GW130_O=Ds_GW130_O";
        	out_ds = "Ds_GW130_O=Ds_GW130_O";
        	str_arg  = "gubun='01'";
        	str_arg += " i_flow_id="+nexacro.wrapQuote(vI_Flow_Id);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Order", false, "P", false, this);
        }

        this.Callback_Order = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	this.getData_Comment();
        }

        this.getData_Comment = function(){

        	var str_url, in_ds, out_ds, str_arg;

        	//결재자 의견 가져오기
        	str_url = "JSP/gw/SQL_GW130_COM.jsp";
        	in_ds = "ds_gw_comment=ds_gw_comment";
        	out_ds = "ds_gw_comment=ds_gw_comment";
        	str_arg  = "i_flow_id="+nexacro.wrapQuote(vI_Flow_Id);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Com", false, "P", false, this);
        }

        this.Callback_Com = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	if(this.ds_gw_comment.getRowCount() > 0)
        		this.DivElec_ImgComm_onclick();

        	this.getData_Reference();
        }

        this.getData_Reference = function(){

        	var str_url, in_ds, out_ds, str_arg;

        	// 결재문서 참조문서 가져오기
        	str_url = "JSP/gw/GW130_REFERENCE_SELECT.jsp";
        	in_ds = "ds_s_flow=ds_s_flow";
        	out_ds = "ds_s_flow=ds_s_flow";
        	str_arg  = " i_flow_id="+nexacro.wrapQuote(vI_Flow_Id);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Refer", false, "P", false, this);
        }

        this.Callback_Refer = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	this.getData_File();
        }

        this.getData_File = function(){

        	var str_url, in_ds, out_ds, str_arg;

        	// 결재문서 파일리스트 가져오기
        	str_url = "JSP/gw/SQL_GW130_FList_v3.jsp";
        	in_ds = "ds_file=ds_file";
        	out_ds = "ds_file=ds_file";
        	str_arg  = " i_flow_id="+nexacro.wrapQuote(vI_Flow_Id);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_File", false, "P", false, this);
        }

        this.Callback_File = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	var strFType = this.Ds_GW130_H.getColumn(0, "F_TYPE");
        	var strWDate = this.Ds_GW130_H.getColumn(0, "WDATE");
        	var strFPath = this.Ds_GW130_H.getColumn(0, "F_PATH");

        	//실제문서 파일경로(hwp파일) -> 마이플랫폼 주소와 웹기안 주소차이로 replace처리

        	if(strFPath.substr(0,17) != "/gw/docfile_next/")
        	{
        		strFPath = nexacro.replaceAll( strFPath, "/gw/docfile/", "/groupware_docfile/" );
        		url2 = urlHwpDoc+strFPath+this.Ds_GW130_H.getColumn(0, "F_NAMES");
        	}
        	else
        	{
        		strFPath = nexacro.replaceAll( strFPath, "/gw/docfile_next/", "/webhwpctrl/get/" );
        		url2 = nexacro.getApplication().gv_urlHwp+strFPath+this.Ds_GW130_H.getColumn(0, "F_NAMES");
        	}

        	//strFPath = nexacro.replaceAll( strFPath, "/gw/docfile/", "/groupware_docfile/" );
        	//url2 = urlHwpDoc+strFPath+this.Ds_GW130_H.getColumn(0, "F_NAMES");

        	if(strFType == "80" && strWDate >= "20170601")
        	{
        		url1 = urlHwp+"gian_5.hwp";
        	}else if(strFType == "1" || strFType == "78"  || strFType == "80" || strFType == "122")
        	{
        		if(strWDate >= "20180601")
        		{
        			url1 = urlHwp+"gian_6.hwp";
        		}else if(strWDate <= "20171023"){
        			url1 = urlHwp+"gian_3.hwp";
        		}else{
        			url1 = urlHwp+"gian_4.hwp";
        		}
        	}else if(strFType == "17")
        	{
        		url1 = urlHwp+"gian_1.hwp";
        	}else{
        		url1 = urlHwp+"gian_2.hwp";
        	}
        }

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };


        this.DivElec_ImgComm_onclick = function(obj,e)
        {
        	if(this.ds_gw_comment.rowcount > 0)
        	{
        		var objParam = {dsParam1:this.ds_gw_comment};
        		this.lfn_showModal("popupComment", objParam, "gw::GW130_COM.xfdl", "popupCallBack", this, '', '', '400', '450' );
        	}
        };

        //웹기안이 다 올라왔을 경우 I_FLOW_HEADER, I_FLOW_ORDER 웹기안기로 보냄
        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	if(e.userdata == "AA")
        	{
        		var dsH = this.Ds_GW130_H.saveXML();
        		var dsO = this.Ds_GW130_O.saveXML();

        		this.WebBrowser00.callMethod("fn_merge",url1, url2,dsH, dsO);
        	}
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	if(DocKind == "MRD"){
        		if(e.url.indexOf("sample.html")>=0){

        			var sUrl = urlMrdService;
        			var sId = "crownix-viewer";

        			this.WebBrowser00.callMethod("_crownix_createViewer", sUrl, sId, urlMrdDoc, sParam);
        			var sRptUrl = urlMrdDoc;
        		}
        	}
        };

        this.getData_Mrd = function(){

        	var f_xml, i_flow_id, str_arg, rdTitle;
        	f_xml = this.Ds_GW130_H.getColumn(0,"F_XML");
        	i_flow_id = this.Ds_GW130_H.getColumn(0,"I_FLOW_ID");
        	rdTitle = this.Ds_GW130_H.getColumn(0, "RDTITLE");

        	if (f_xml == "PD130F.xml")
        	{
        		//str_arg = "/rp [1]["+i_flow_id+"]["+this.Ds_GW130_H.getColumn(0,"N_YM")+"][2B000]";
        	}else if(f_xml == "MK121F.xml")   //용지발주서
        	{
        		var strArg = this.lfn_RD_Approval_Set_mk(i_flow_id, this.dsApproval);
        		str_arg = "/rp [] []"+ strArg;
        	}
            else{
        		str_arg = "/rp [1] [" + i_flow_id + "]";
        	}

        	if (f_xml == "PD110F.xml")
            {
        		mrd_file = "/pd/PD110_U_DOC.mrd";
            }
            else if (f_xml == "PD130F.xml")
        	{
        		mrd_file = "/pd/PD130_2_DOC.mrd";
        	}
        	else
        	{
        		mrd_file = "/" + this.Ds_GW130_H.getColumn(0,"F_PATH") + "/" + this.Ds_GW130_H.getColumn(0,"MRD_FILE");
        	}

        	this.fn_start_rd(mrd_file, str_arg);
        }

        this.fn_start_rd = function(mrd_file, str_arg)
        {
            var	rpNm = mrd_file;

        	urlMrdDoc = urlMrd+rpNm;
        	sParam = str_arg;
        	//this.WebBrowser00.set_url("http://next.chunjae.co.kr:7010/erpmobile/html/html/ie8/sample.html");
        	//this.WebBrowser00.set_url(urlMrd+"/html/html/ie8/sample.html");
        	this.WebBrowser00.set_url(urlMrdHtml);
        }

        //첨부파일 보기
        this.DivElec_grdFile_oncelldblclick = function(obj,e)
        {
        	this.lfn_FileDownload(this.FileDownTrans ,this.ds_file, urlFile, e.row);
        };



        //결재 승인
        this.btnAprv_onclick = function(obj,e)
        {
        	var str_url = "JSP/gw/SQL_GW_PASSUP_V4.jsp";
        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        	var str_arg = "sabun =" +nexacro.wrapQuote(this.ds_select_header130.getColumn(this.ds_select_header130.rowposition,"SABUN"));
        		//str_arg += " gvsabun =" +nexacro.wrapQuote(gds_userinfo.getColumn(0,"sabun"));
        		str_arg += " gvsabun =" +gv_sabun;
        		str_arg += " gubun =" +nexacro.wrapQuote(this.DS_GW_KYULNO_130.getColumn(0,"GUBUN"));
        		str_arg += " i_flow_id =" +nexacro.wrapQuote(vI_Flow_Id);
        		str_arg += " my_next =" +nexacro.wrapQuote(this.ds_pass.getColumn(0,"F_NEXT"));
        		str_arg += " wdate =" +nexacro.wrapQuote(strtoDay);
        		str_arg += " kind =" +nexacro.wrapQuote(this.ds_pass.getColumn(0,"KIND"));
        		str_arg += " type =" +nexacro.wrapQuote(this.ds_pass.getColumn(0,"F_TYPE"));
        		str_arg += " seq =" +nexacro.wrapQuote(this.ds_pass.getColumn(0,"SEQ"));

        		if (this.ds_select_header130.getColumn(this.ds_select_header130.rowposition,"SABUN") == "C99995")
        		{
        		    str_arg += " comment ="+nexacro.wrapQuote("경영관리팀 법무 [ "+ gds_userinfo.GetColumn(0,"login_name") + "님이 승인 하셨습니다.]" +this.DivElec.form.txt_comment.text);
        		}else
        			str_arg += " comment ="+nexacro.wrapQuote(this.DivElec.form.txt_comment.text);

        		str_arg += " position_code2 =" + nexacro.wrapQuote(this.ds_pass.getColumn(0,"POSITION_CODE2"));
        		str_arg += " f_fnum =" + nexacro.wrapQuote(this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "F_FNUM"));

        		this.gfn_TransactionP("insert", str_url, "", "", str_arg, "Aprv_Callback", false, "P", false, this);
        };

        this.Aprv_Callback = function(sTrid, nErrorCode, sErrorMsg, gv_rt_value)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	if(nexacro.getApplication().gv_rt_value ==  "1"){
        		this.close(-1);
        	}else{
        		alert("전 결재자가 결재 취소하여 승인 할 수 없습니다.");
        		var objParam = {dsParam1:this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "I_FLOW_ID")
        					   ,dsParam2:this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "CO_SEQ")
        					   ,dsParam3:this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "TITLE")};
        		this.lfn_showModal("popupCancelLog", objParam, "gw::GW130_CANCEL_LOG.xfdl", "popupCallBack", this, '', '', '510', '600' );
        		this.close(-1);
        	}

        }

        //결재 기각
        this.btnReject_onclick = function(obj,e)
        {
        	if(this.confirm("정말 기각처리 하시겠습니까?"))
        	{
        		var str_url = "JSP/gw/SQL_GW_NONPASSUP_V3.jsp";
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        		var str_arg = "sabun =" +nexacro.wrapQuote(this.ds_select_header130.getColumn(this.ds_select_header130.rowposition,"SABUN"));
        			//str_arg += " gvsabun =" +nexacro.wrapQuote(gds_userinfo.GetColumn(0,"sabun"));
        			str_arg += " gvsabun =" +gv_sabun;
        			str_arg += " gubun =" + nexacro.wrapQuote(this.DS_GW_KYULNO_130.getColumn(0,"GUBUN"));
        			str_arg += " i_flow_id =" + nexacro.wrapQuote(vI_Flow_Id);
        			str_arg += " comment =" + nexacro.wrapQuote(this.DivElec.form.txt_comment.text);
        			str_arg += " wdate =" +nexacro.wrapQuote(strtoDay);
        			str_arg += " kind =" + nexacro.wrapQuote(this.ds_pass.getColumn(0,"KIND"));
        			str_arg += " type =" + nexacro.wrapQuote(this.ds_pass.getColumn(0,"F_TYPE"));
        			str_arg += " seq =" + nexacro.wrapQuote(this.ds_pass.getColumn(0,"SEQ"));


        		this.gfn_TransactionP("insert", str_url, "", "", str_arg, "Reject_Callback", false, "P", false, this);
        	}
        	else
        		return;
        };

        this.Reject_Callback = function(sTrid, nErrorCode, sErrorMsg, gv_rt_value)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	if(nexacro.getApplication().gv_rt_value == "1"){
        		this.close(-1);
        	}else{
        		alert("전 결재자가 결재 취소하여 기각 할 수 없습니다.");
        		var objParam = {dsParam1:this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "I_FLOW_ID")
        				   ,dsParam2:this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "CO_SEQ")
        				   ,dsParam3:this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "TITLE")};
        		this.lfn_showModal("popupCancelLog", objParam, "gw::GW130_CANCEL_LOG.xfdl", "popupCallBack", this, '', '', '810', '780' );
        		this.close(-1);
        	}
        }


        //대결승인 버튼
        this.btnSubAprv_onclick = function(obj,e)
        {
        	if (nexacro.Application.confirm("부재중인 결재권자의 부재사유를 꼭 입력해 주셔야 합니다. \n입력하지 않으셨다면 입력후 승인해 주세요.") )
        	{
        		var str_url = "JSP/gw/SQL_GW_PASSUP_SUB01.jsp";
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        		//var str_arg = "sabun ="+nexacro.wrapQuote(gds_userinfo.getColumn(0,"SABUN"));
        		var str_arg = "sabun ="+gv_sabun;
        			str_arg += " gubun ="+nexacro.wrapQuote(this.DS_GW_KYULNO_130.getColumn(0,"GUBUN"));
        			str_arg += " i_flow_id ="+nexacro.wrapQuote(vI_Flow_Id);
        			str_arg += " my_next ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"F_NEXT"));
        			str_arg += " wdate ="+nexacro.wrapQuote(strtoDay);
        			str_arg += " kind ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"KIND"));
        			str_arg += " type ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"F_TYPE"));
        			str_arg += " seq ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"SEQ"));
        			str_arg += " comment ="+nexacro.wrapQuote("[ "+ gds_userinfo.getColumn(0,"login_name") + "님이 대결처리 하셨습니다.]" + this.DivElec.form.txt_comment.text);
        			//str_arg += " comment ="+nexacro.wrapQuote("[ 심임주 님이 대결처리 하셨습니다.]" + this.DivElec.form.txt_comment.text);
        			str_arg += " position_code2 ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"POSITION_CODE2"));
        			str_arg += " g_sabun =" +nexacro.wrapQuote(this.ds_pass.getColumn(0,"SABUN"));
        			str_arg += " f_fnum =" +nexacro.wrapQuote(this.ds_select_header130.getColumn(this.ds_select_header130.rowposition, "F_FNUM"));

        			this.gfn_TransactionP("insert", str_url, "", "", str_arg, "SubAprv_Callback", false, "P", false, this);
        	}else{
        		this.DivElec.form.txt_comment.setFocus();
        	}

        };

        //대결기각 버튼
        this.btnSubReject_onclick = function(obj,e)
        {
        	if (nexacro.Application.confirm("부재중인 결재권자의 부재사유를 꼭 입력해 주셔야 합니다. \n입력하지 않으셨다면 입력후 기각해 주세요.") )
        	{
        		var str_url = "JSP/gw/SQL_GW_NONPASSUP_SUB01.jsp";
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        		//var str_arg = "sabun ="+nexacro.wrapQuote(gds_userinfo.GetColumn(0,"sabun"));
        		var str_arg = "sabun ="+gv_sabun;
        			str_arg += " gubun ="+nexacro.wrapQuote(this.DS_GW_KYULNO_130.getColumn(0,"GUBUN"));
        			str_arg += " i_flow_id ="+nexacro.wrapQuote(vI_Flow_Id);
        			str_arg += " comment ="+nexacro.wrapQuote("[ "+ gds_userinfo.getColumn(0,"login_name") + "님이 대결처리 하셨습니다.]" + this.DivElec.form.txt_comment.text);
        			//str_arg += " comment ="+nexacro.wrapQuote("[ 심임주 님이 대결처리 하셨습니다.]" + this.DivElec.form.txt_comment.text);
        			str_arg += " wdate ="+nexacro.wrapQuote(strtoDay);
        			str_arg += " kind ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"KIND"));
        			str_arg += " type ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"F_TYPE"));
        			str_arg += " seq ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"SEQ"));
        			str_arg += " g_sabun ="+nexacro.wrapQuote(this.ds_pass.getColumn(0,"SABUN"));

        			this.gfn_TransactionP("insert", str_url, "", "", str_arg, "SubAprv_Callback", false, "P", false, this);
        	}else
        		this.DivElec.form.txt_comment.setFocus();
        };


        this.SubAprv_Callback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	close(-1);
        }

        //파일 선택
        this.DivElec_btnFileFind_onclick = function(obj,e)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload(this.F_Dialog, this.FileUpTrans, this.ds_file, vFileSubUrl);
        };

        //파일 저장(실질적인 저장-> 파일 업로드 후 DB 저장)
        this.DivElec_btnFileSave_onclick = function(obj,e)
        {
        	//첨부파일 먼저 서버에 저장(버튼) -> 성공시 I_FLOW_FILES에 저장
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload_Save(urlSave, vI_Flow_Id, vFileSubUrl);
        };
        //파일 삭제(첨부파일 삭제 후 DB 삭제)
        this.DivElec_btnFileDel_onclick = function(obj,e)
        {
        	if(this.confirm("첨부파일을 삭제하시겠습니까?"))
        	{
        		if (this.ds_file.getColumn(this.ds_file.rowposition, "F_NO") == ""){
        			this.ds_file.deleteRow(this.ds_file.rowposition);
        		}else{
        			var vFpath = this.ds_file.getColumn(this.ds_file.rowposition, "F_PATH");
        			var vFileSubUrl = nexacro.replaceAll(vFpath, "/gw/attachedfile", "attattachedfile");
        			this.lfn_FileDelete(this.ds_file, vI_Flow_Id, vFileSubUrl);
        		}
        	}
        };

        //수정 버튼
        this.btnUpt_onclick = function(obj,e)
        {
        	var f_xfdl = nexacro.replaceAll(this.ds_select_header130.getColumn(0, "F_XML"), ".xml", ".xfdl");
        	var path = this.ds_select_header130.getColumn(0, "F_PATH") + '::' + f_xfdl;

        	if(path == "gw::GW551.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW551.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        	else if(path == "gw::GW510_new.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW510_new.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        	else if(path == "gw::GW540.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW540.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        	else if(path == "gw::GW560.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW560.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        	else if(path == "gw::GW610.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW610.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        	else if(path == "gw::GW550.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW550.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        	else if(path == "gw::GW500.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW500.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        		else if(path == "gw::GW700.xfdl")
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130,
        						dsParam2:this.ds_select_header130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW700.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        	else if(this.DS_GW_KYULNO_130.rowcount > 0)
        	{
        		var objParam = {dsParam1:this.DS_GW_KYULNO_130};
        		this.lfn_showModal("popupUpt", objParam, "gw::GW110.xfdl", "popupCallBack", this, '', '', '810', '780' );
        	}
        };

        //결재 취소
        this.btnCancel_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.ds_select_header130.getColumn(e.row, "I_FLOW_ID")
        				   ,dsParam2:this.ds_select_header130.getColumn(e.row, "CO_SEQ")
        				   ,dsParam3:this.ds_select_header130.getColumn(e.row, "TITLE")};
        	this.lfn_showModal("popupCancel", objParam, "gw::GW130_CANCEL.xfdl", "popupCallBack", this, '', '', '515', '280' );
        };

        this.popupCallBack = function(sTrid, nErrorCode, sErrorMsg){

        	if(sTrid == "popupCancel"){
        		if(nexacro.getApplication().gv_rt_value == "1"){
        			this.close(-1);
        		}
        		else{
        			alert("결재가 진행되어 처리 할 수 없습니다.");
        			this.close(-1);
        		}
        	}
        }


        this.DivElec_grdFile_ondragenter = function(obj,e)
        {
        	this.lfn_File_GridDragEnter(this.DivElec.form.grdFile, e, this.ds_file, this.FileUpTrans);
        };

        this.DivElec_grdFile_ondragleave = function(obj,e)
        {
        	this.lfn_File_GridDragLeave(this.DivElec.form.grdFile);
        };

        this.DivElec_grdFile_ondrop = function(obj,e)
        {
        	this.lfn_File_GridOnDrop(this.DivElec.form.grdFile, e, this.ds_file, this.FileUpTrans);
        };

        // this.lfn_FileDownload = function(objFDT:FileDownTransfer, dsF:Dataset, urlFile, i)
        // {
        // 	alert("12345");
        // 	l_FDT = objFDT;    	 		 //FileDownTransfer
        // 	l_dsF = dsF;    			 //ds_file
        //
        // 	var file_path = l_dsF.getColumn(i, "F_PATH");
        // 	var file_rname = l_dsF.getColumn(i, "R_NAME");
        // 	var file_fname = l_dsF.getColumn(i, "F_NAME");
        //
        // 	objFDT.clearPostDataList();
        // 	objFDT.setPostData("path", urlFile+file_path);
        // 	objFDT.setPostData("filename", file_rname);
        // 	objFDT.setPostData("fileRname", l_dsF.getColumn(i,"F_NAME"));
        // 	objFDT.download(urlFile+"/jsp/downloadFile_url.jsp");
        //
        //
        // 	objFDT.addEventHandler("onsuccess", this.lfn_FileDownTrans_onsuccess, this);
        // }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW130_onload,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.btnSubReject.addEventHandler("onclick",this.btnSubReject_onclick,this);
            this.btnReject.addEventHandler("onclick",this.btnReject_onclick,this);
            this.btnUpt.addEventHandler("onclick",this.btnUpt_onclick,this);
            this.btnSubAprv.addEventHandler("onclick",this.btnSubAprv_onclick,this);
            this.DivElec.form.StFile.addEventHandler("onclick",this.DivElec_StFile_onclick,this);
            this.DivElec.form.grdFile.addEventHandler("oncelldblclick",this.DivElec_grdFile_oncelldblclick,this);
            this.DivElec.form.grdFile.addEventHandler("onheadclick",this.DivElec_grdFile_onheadclick,this);
            this.DivElec.form.grdFile.addEventHandler("ondragenter",this.DivElec_grdFile_ondragenter,this);
            this.DivElec.form.grdFile.addEventHandler("ondragleave",this.DivElec_grdFile_ondragleave,this);
            this.DivElec.form.grdFile.addEventHandler("ondrop",this.DivElec_grdFile_ondrop,this);
            this.DivElec.form.btnFileDel.addEventHandler("onclick",this.DivElec_btnFileDel_onclick,this);
            this.DivElec.form.btnFileSave.addEventHandler("onclick",this.DivElec_btnFileSave_onclick,this);
            this.DivElec.form.btnFileFind.addEventHandler("onclick",this.DivElec_btnFileFind_onclick,this);
            this.DivElec.form.ImgComm.addEventHandler("onclick",this.DivElec_ImgComm_onclick,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.btnAprv.addEventHandler("onclick",this.btnAprv_onclick,this);
            this.FileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
        };
        this.loadIncludeScript("GW130.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
