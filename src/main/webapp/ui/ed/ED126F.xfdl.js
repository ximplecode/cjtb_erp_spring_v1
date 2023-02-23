(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED126F");
            this.set_titletext("외주자 증명서 발급 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsContract", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CONTRACT_CD\">0</Col><Col id=\"CONTRACT_NM\">거래 종료</Col></Row><Row><Col id=\"CONTRACT_CD\">1</Col><Col id=\"CONTRACT_NM\">거래 진행중</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegKind", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_KIND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_KIND_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_KIND_CD\">1</Col><Col id=\"REG_KIND_NM\">용역 거래 확인서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegReason", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_REASON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_REASON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_REASON_CD\">1</Col><Col id=\"REG_REASON_NM\">관공서 제출용</Col></Row><Row><Col id=\"REG_REASON_CD\">2</Col><Col id=\"REG_REASON_NM\">금융기관 제출용</Col></Row><Row><Col id=\"REG_REASON_CD\">3</Col><Col id=\"REG_REASON_NM\">기타 제출용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAthrCert", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_PERMITE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_PERMITE_EMPLOYEE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_AUTHORGB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"APPROVAL_CD\">0</Col><Col id=\"APPROVAL_NM\">승인</Col></Row><Row><Col id=\"APPROVAL_CD\">1</Col><Col id=\"APPROVAL_NM\">기각</Col></Row><Row><Col id=\"APPROVAL_CD\">2</Col><Col id=\"APPROVAL_NM\">대기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","98%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","63","25","241",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","35",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","104",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","172",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00",null,"9","222","22","313",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsContract");
            obj.set_codecolumn("CONTRACT_CD");
            obj.set_datacolumn("CONTRACT_NM");
            obj.set_direction("vertical");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","25","75","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","25","110","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("발급사유");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_regDate","Static01:3","75","16.15%","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsAthrCert");
            obj.set_datecolumn("REG_DATE");
            obj.set_textcolorcolumn("REG_DATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","cal_regDate:23","76","6.92%","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신청구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_kind","Static02:5","76","21.23%","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsRegKind");
            obj.set_codecolumn("REG_KIND_CD");
            obj.set_datacolumn("REG_KIND_NM");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","cb_kind:27","75","6.92%","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("발급번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_regKey","Static03:5","75","21%","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_reason","Static04:2","110","16.15%","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsRegReason");
            obj.set_codecolumn("REG_REASON_CD");
            obj.set_datacolumn("REG_REASON_NM");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","cb_reason:24","110","6.92%","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("외주자명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_athrIdentity","Static05:5","110","6.92%","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_athrName","edt_athrIdentity:8","110","11.08%","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search1","edt_athrName:1","110","2.62%","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","btn_search1:26","110","6.92%","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("용역기간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_worksDate1","Static06:4","110","9.62%","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsAthrCert");
            obj.set_datecolumn("WORK_SDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cal_worksDate1:5","113","0.77%","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_workeDate1","Static00:7","110","9.62%","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("dsAthrCert");
            obj.set_datecolumn("WORK_EDATE");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","14","164","98%","100",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_tabindex("0");
            obj.set_border("1px none lightgray");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("리스트검색");
            obj.set_border("1px solid lightgray");
            obj.set_formscrollbartype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","38","18","80","33",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_worksDate2","Static00:-10","19","10.22%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","cal_worksDate2:25","23","1.89%","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_workeDate2","Static01:3","18","10.22%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","cal_workeDate2:72","18","3.07%","31",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("외주자");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_athrIdentity2","Static02:10","18","7.08%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_athrName2","edt_athrIdentity2:4","18","11.01%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search2","edt_athrName2:14","17","2.52%","29",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","btn_search2:93","21","7.08%","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("조회하기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","14","280","98.00%","450",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsAthrCert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"130\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발급번호\"/><Cell col=\"1\" text=\"신청일자\"/><Cell col=\"2\" text=\"신청구분\"/><Cell col=\"3\" text=\"발급사유\"/><Cell col=\"4\" colspan=\"2\" text=\"용역기간\"/><Cell col=\"6\" text=\"저자코드\"/><Cell col=\"7\" text=\"저자명\"/><Cell col=\"8\" text=\"승인여부\"/><Cell col=\"9\" text=\"승인일시\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_KEY\"/><Cell col=\"1\" text=\"bind:REG_DATE\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:REG_KIND\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsRegKind\" combocodecol=\"REG_KIND_CD\" combodatacol=\"REG_KIND_NM\"/><Cell col=\"3\" text=\"bind:REG_REASON\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsRegReason\" combodatacol=\"REG_REASON_NM\" combocodecol=\"REG_REASON_CD\"/><Cell col=\"4\" text=\"bind:WORK_SDATE\"/><Cell col=\"5\" text=\"bind:WORK_EDATE\"/><Cell col=\"6\" text=\"bind:ATHR_IDENTITY\"/><Cell col=\"7\" text=\"bind:ATHR_NAME\"/><Cell col=\"8\" text=\"bind:CERT_YN\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"9\" text=\"bind:CERT_PERMITE_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cb_kind","value","dsAthrCert","REG_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cb_reason","value","dsAthrCert","REG_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_regDate","value","dsAthrCert","REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_athrIdentity","value","dsAthrCert","ATHR_IDENTITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_athrName","value","dsAthrCert","ATHR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_worksDate1","value","dsAthrCert","WORK_SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_workeDate1","value","dsAthrCert","WORK_EDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","ed_regKey","value","dsAthrCert","REG_KEY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED126F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED126F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED126F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED126F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var flag = "nomal";

        var sUserCompetence;
        var sUserCompetence1 = "1";   // 일반사용자
        var sUserCompetence2 = "2";   // 부서승인권자
        var sUserCompetence3 = "3";   // 부서장
        var sUserCompetence4 = "4";   // 일반승인권자
        var sUserCompetence5 = "5";   // 승인1차권한
        var sUserCompetence6 = "6";   // 승인2차권한

        //닫기
        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        //권한체크
        this.ED126F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_01_106");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);
        };


        //등록시 저자찾기
        this.btn_search_onclick = function(obj,e)
        {
        	var objParam = {param:"ED126_1"}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popuppUniversity", objParam, "ed::EDAuthor_SearchF.xfdl", "popupCallBack", this, 10, 58, 500, 550);
        };

        //조회 시 저자찾기
        this.btn_search2_onclick = function(obj,e)
        {
        	var objParam = {param:"ED126_2"}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popuppUniversity", objParam, "ed::EDAuthor_SearchF.xfdl", "popupCallBack", this, 10, 58, 500, 550);
        };

        //신규
        this.Div00_btn_new_onclick = function(obj,e)
        {

        	switch(this.dsAthrCert.rowposition)
        	{
        		//데이터가 없을 경우 -1
        		case -1 : this.athrcert_Init(this.dsAthrCert.addRow());
        			break;
        		default:
        			if(this.fctn_checkRecord(this.dsAthrCert.rowposition, true))
        			{
        					this.athrcert_Init(this.dsAthrCert.addRow());
        					break;
        			}
        	}

        	this.cb_kind.setFocus();
        };

        //초기화
        this.athrcert_Init = function(nRow)
        {
        	var currDate = new Date();
        	var year = currDate.getFullYear().toString().padLeft(4, "0");
        	var month = (currDate.getMonth()+1).toString().padLeft(2, "0");
        	var day = currDate.getDate().toString().padLeft(2, "0");
        	var now = year + month + day;

        	this.dsAthrCert.setColumn(nRow, "REG_KIND", "1");
        	this.dsAthrCert.setColumn(nRow, "REG_REASON", "1");
        	this.dsAthrCert.setColumn(nRow, "EMPLOYEE_ID", sSabun);
        	this.dsAthrCert.setColumn(nRow, "SECTION_CODE", sSection_Code);
        	this.dsAthrCert.setColumn(nRow, "CERT_YN", "2");
        	this.dsAthrCert.setColumn(nRow, "REG_DATE", now);
        };

        //입력값 확인
        this.fctn_checkRecord = function(nRow, msgView)
        {
        	if( this.fnisNull(this.dsAthrCert.getColumn(nRow, "REG_DATE")) )
        	{
        		if(msgView)
        		{
        			alert("신청일자를 선택해 주십시오.");
        			this.cal_regDate.setFocus();
        			return false;
        		}
        	}

        	if( this.fnisNull(this.dsAthrCert.getColumn(nRow, "REG_KIND")) )
        	{
        		if(msgView)
        		{
        			alert("신청구분을 선택해 주십시오.");
        			this.cb_kind.setFocus();
        			return false;
        		}
        	}

        	if(this.fnisNull(this.dsAthrCert.getColumn(nRow, "ATHR_NAME")))
        	{
        		if(msgView)
        		{
        			alert("외주자를 선택해 주십시오.");
        			this.edt_athrName.setFocus();
        			return false;
        		}
        	}

        	if(this.fnisNull(this.dsAthrCert.getColumn(nRow, "REG_REASON")))
        	{
        		if(msgView)
        		{
        			alert("발급사유를 선택해 주십시오.");
        			this.cb_reason.setFocus();
        			return false;
        		}
        	}

        	if(this.fnisNull(this.dsAthrCert.getColumn(nRow, "WORK_SDATE")))
        	{
        		if(msgView)
        		{
        			alert("용역기간을 선택해 주십시오.");
        			this.cal_worksDate1.setFocus();
        			return false;
        		}
        	}

        	if(this.fnisNull(this.dsAthrCert.getColumn(nRow, "WORK_EDATE")))
        	{
        		if(msgView)
        		{
        			alert("용역기간을 선택해 주십시오.");
        			this.cal_workeDate1.setFocus();
        			return false;
        		}
        	}

        	return true;

        }

        //조회
        this.Tab00_Tabpage1_btn_search_onclick = function(obj,e)
        {
        	var outds = "dsAthrCert=dsAthrCert";
        	var inds =  "dsAthrCert=dsAthrCert";
        	var strArg = "ATHR_IDENTITY=" + this.Tab00.Tabpage1.form.edt_athrIdentity2.value +
        				 " REG_SDATE=" + this.Tab00.Tabpage1.form.cal_worksDate2.value +
        				 " REG_EDATE=" + this.Tab00.Tabpage1.form.cal_workeDate2.value +
        				 " SECTION_CODE=" + sSection_Code +
        				 " COMPETENCE=" + sUserCompetence  +
        				 " SABUN=" + sSabun;


        	this.gfn_TransactionP("search","JSP/ed/ed126f_athrCert.jsp", outds, inds, strArg, "fnCallback", true, "P", false, this);
        };

        // 저장
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	if(this.dsAthrCert.getColumn(this.dsAthrCert.rowposition, "CERT_YN" != "2"))
        	{
        		alert("이미 승인, 기각된 신청서는 수정할 수 없습니다");
        		this.Tab00_Tabpage1_btn_search_onclick();
        		return;
        	}

        	if(flag != "delete")
        	{
        		if(this.fctn_checkRecord(this.dsAthrCert.rowposition, true) == false)
        			return;
        	}else
        	{
        		this.dsAthrCert.setRowType(this.dsAthrCert.rowposition, "delete");
        		this.dsAthrCert.deleteRow(this.dsAthrCert.rowposition);
        	}

        	var inds = "dsAthrCert=dsAthrCert:u";
        	this.gfn_TransactionP(this.dsAthrCert.getRowType(this.dsAthrCert.rowposition),"JSP/ed/ed126f_athrCert_dml.jsp", inds, "", "", "fnCallback", true, "P", false, this);

        };

        //삭제
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.dsAthrCert.getColumn(this.dsAthrCert.rowposition, "CERT_YN") == "2" && this.dsAthrCert.getColumn(this.dsAthrCert.rowposition,"CERT_PERMITE_DATE") == null)
        	{
        		if(this.confirm("삭제하시겠습니까?"))
        		{
        			this.dsAthrCert.setColumn(this.dsAthrCert.rowposition, "REG_DELETE", "D");
        			flag = "delete";
        			this.Div00_btn_save_onclick();
        		}
        	}else
        	{
        		alert("이미 승인된 신청서는 삭제할 수 없습니다.");
        		return;
        	}
        };


        this.fnCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        	{
        		alert(errMsg);
        		trace(this.dsAthrCert.saveXML());
        	}
            else if( svcId == "search|fnCallback|P")
        	{
        		if(this.dsAthrCert.rowcount < 1 )
        			alert("조회결과가 없습니다.");
        	}
        	else if( svcId == "2|fnCallback|P" || svcId == "4|fnCallback|P") //insert,update
        	{
        		alert("저장이 완료되었습니다");
        		this.Tab00_Tabpage1_btn_search_onclick();
        		flag = "normal";
        	}
        	else
        	{
        		flag = "normal";
        	}
        }

        //null check
        this.fnisNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var nRow = this.dsAthrCert.rowposition;

        	var vCert_permiteDate = this.dsAthrCert.getColumn(nRow, "CERT_PERMITE_DATE");
        	var vCert_YN = this.dsAthrCert.getColumn(nRow, "CERT_YN");

        	if(vCert_YN == 0)
        	{
        		var today = objDate.toString().substr(0,8);
        		var permiteDate = new Date(vCert_permiteDate.substr(0,4), vCert_permiteDate.substr(4,2) -1 , vCert_permiteDate.substr(6,2));
        		permiteDate.addDate(1);

        		var month = (permiteDate.getMonth()+1).toString().padLeft(2,"0");
        		var day = permiteDate.getDate().toString().padLeft(2, "0");

        		var vCert_print_date = permiteDate.getYear().toString() + month + day;

        		if(vCert_print_date < today && sUserCompetence != "S")
        			alert("증명서는 승인일 다음날까지만 출력 가능합니다. \n재경팀에 재승인요청 부탁 드립니다.");
        	}

        	if(vCert_YN != 0 && sUserCompetence != "S")
        		alert("미승인 또는 기각된 증명서는 출력할 수 없습니다. \n재경팀에 확인요청 부탁 드립니다.");
        	else
        	{
        		var rdUrl, rdParam;
        		var vAthr_Identity = this.dsAthrCert.getColumn(nRow, "ATHR_IDENTITY");
        		var vReg_Date = this.dsAthrCert.getColumn(nRow, "REG_DATE");
        		var vReg_No =this.dsAthrCert.getColumn(nRow, "REG_NO");
        		var vWork_sDste = this.dsAthrCert.getColumn(nRow, "WORK_SDATE");
        		var vWork_eDate = this.dsAthrCert.getColumn(nRow, "WORK_EDATE");
        		var to_date = Eco.date.getMaskFormatString(objDate, "yyyy")+"."+Eco.date.getMaskFormatString(objDate, "MM")+"."+Eco.date.getMaskFormatString(objDate, "dd");
        		var to_work_sDate = vWork_sDste.substr(0,4) +"년 "+ vWork_sDste.substr(4,2) +"월 "+ vWork_sDste.substr(6,2)+"일";
        		var to_work_eDate = vWork_eDate.substr(0,4) +"년 "+ vWork_eDate.substr(4,2) +"월 "+ vWork_eDate.substr(6,2)+"일";
        		var vAuthorGb = this.dsAthrCert.getColumn(nRow, "ATHR_AUTHORGB_NM");
        		var vAuthorGb_Nm = "";

        		if(vAuthorGb =="0")
        			vAuthorGb_Nm = "저자";
        		else
        			vAuthorGb_Nm = "외주자";

        		if(this.Div00.form.Radio00 == 0)
        			rdUrl = gv_urlMrd + "/ed/ED126.mrd";
        		else
        			rdUrl = gv_urlMrd + "/ed/ED126_1.mrd";

        		rdParam  = "/rp [" + vAthr_Identity + "] [" + to_work_sDate + "] [" + to_work_eDate + "] [" + to_date + "] [" + vReg_Date + "] [" + vReg_No + "] [" + vAuthorGb_Nm + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);

        	}
        };

        this.ED126F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED126F_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.Grid00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED126F_onload,this);
            this.addEventHandler("onsize",this.ED126F_onsize,this);
            this.addEventHandler("ontimer",this.ED126F_ontimer,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_search1.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static00_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btn_search2.addEventHandler("onclick",this.btn_search2_onclick,this);
            this.Tab00.Tabpage1.form.btn_search.addEventHandler("onclick",this.Tab00_Tabpage1_btn_search_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("ED126F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
