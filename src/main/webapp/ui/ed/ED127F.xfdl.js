(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED127F");
            this.set_titletext("외주자 증명서 발급 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPROCAL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"APPROVAL_CD\">0</Col><Col id=\"APPROCAL_NM\">승인</Col></Row><Row><Col id=\"APPROVAL_CD\">1</Col><Col id=\"APPROCAL_NM\">기각</Col></Row><Row><Col id=\"APPROVAL_CD\">2</Col><Col id=\"APPROCAL_NM\">대기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAthrCert", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_PERMITE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_PERMITE_EMPLOYEE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_AUTHORGB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegKind", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_KIND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_KIND_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_KIND_CD\">1</Col><Col id=\"REG_KIND_NM\">용역 거래 확인서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegReason", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_REASON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_REASON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_REASON_CD\">1</Col><Col id=\"REG_REASON_NM\">관공서 제출용</Col></Row><Row><Col id=\"REG_REASON_CD\">2</Col><Col id=\"REG_REASON_NM\">금융기관 제출용</Col></Row><Row><Col id=\"REG_REASON_CD\">3</Col><Col id=\"REG_REASON_NM\">기타 제출용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","98%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","63","25","241",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","35",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("기각");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","104",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("승인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","172",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","344","5","181","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsApproval");
            obj.set_codecolumn("APPROVAL_CD");
            obj.set_datacolumn("APPROCAL_NM");
            obj.set_direction("vertical");
            obj.set_text("승인");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_excel","254","8","78","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("엑셀변환");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","62","98.00%","658",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsAthrCert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"신청자\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"신청일자\"/><Cell col=\"4\" text=\"신청구부\"/><Cell col=\"5\" text=\"발급사유\"/><Cell col=\"6\" colspan=\"2\" text=\"용역기간\"/><Cell col=\"8\" text=\"저자코드\"/><Cell col=\"9\" text=\"저자명\"/><Cell col=\"10\" text=\"승인여부\"/><Cell col=\"11\" text=\"승인일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EMPLOYEE_NM\"/><Cell col=\"2\" text=\"bind:SECTION_NM\"/><Cell col=\"3\" text=\"bind:REG_DATE\"/><Cell col=\"4\" text=\"bind:REG_KIND\" displaytype=\"combotext\" combodataset=\"dsRegKind\" combocodecol=\"REG_KIND_CD\" combodatacol=\"REG_KIND_NM\"/><Cell col=\"5\" text=\"bind:REG_REASON\" combodisplaynulltype=\"none\" displaytype=\"combotext\" combodataset=\"dsRegReason\" combocodecol=\"REG_REASON_CD\" combodatacol=\"REG_REASON_NM\"/><Cell col=\"6\" text=\"bind:WORK_SDATE\"/><Cell col=\"7\" text=\"bind:WORK_EDATE\"/><Cell col=\"8\" text=\"bind:ATHR_IDENTITY\"/><Cell col=\"9\" text=\"bind:ATHR_NAME\"/><Cell col=\"10\" text=\"bind:CERT_YN\" displaytype=\"combotext\" combodataset=\"dsApproval\" combocodecol=\"APPROVAL_CD\" combodatacol=\"APPROCAL_NM\"/><Cell col=\"11\" text=\"bind:CERT_PERMITE_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED127F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED127F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED127F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gds_menuopen = nexacro.getApplication().gds_menuopen;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        this.ED127F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_01_107");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	this.Div00_btn_new_onclick();
        };

        //조회
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	var outds = "dsAthrCert=dsAthrCert";
        	var inds = "dsAthrCert=dsAthrCert";

        	this.gfn_TransactionP("search","JSP/ed/ed127f_athrCert_approval.jsp", outds, inds, "", "fnCallback", true, "P", false, this);
        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var today = new nexacro.Date();
        	var nRow = this.dsAthrCert.rowposition;

        	var vAthr_Identity = this.dsAthrCert.getColumn(nRow, "ATHR_IDENTITY");
        	var vReg_Date = this.dsAthrCert.getColumn(nRow, "REG_DATE");
        	var vReg_No =this.dsAthrCert.getColumn(nRow, "REG_NO");
        	var vWork_sDste = this.dsAthrCert.getColumn(nRow, "WORK_SDATE");
        	var vWork_eDate = this.dsAthrCert.getColumn(nRow, "WORK_EDATE");
        	var to_date = Eco.date.getMaskFormatString(today, "yyyy")+"."+Eco.date.getMaskFormatString(today, "MM")+"."+Eco.date.getMaskFormatString(today, "dd");
        	var to_work_sDate = vWork_sDste.substr(0,4) +"년 "+ vWork_sDste.substr(4,2) +"월 "+ vWork_sDste.substr(6,2)+"일";
        	var to_work_eDate = vWork_eDate.substr(0,4) +"년 "+ vWork_eDate.substr(4,2) +"월 "+ vWork_eDate.substr(6,2)+"일";
        	var vAuthorGb = this.dsAthrCert.getColumn(nRow, "ATHR_AUTHORGB_NM");
        	var vAuthorGb_Nm = "";

        	if(vAuthorGb =="0")
        		vAuthorGb_Nm = "저자";
        	else
        		vAuthorGb_Nm = "외주자";

        	var rdUrl, rdParam;

        	rdUrl = gv_urlMrd + "/ed/ED126.mrd";
        	rdParam  = "/rp [" + vAthr_Identity + "] [" + to_work_sDate + "] [" + to_work_eDate + "] [" + to_date + "] [" + vReg_Date + "] [" + vReg_No + "] [" + vAuthorGb_Nm + "]";

        	this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        };

        //승인
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	var nRow = this.dsAthrCert.rowcount;
        	var objDate = new nexacro.Date();
        	var today = objDate.toString().substr(0,8);

        	for(var i=0; i < nRow; i++)
        	{
        		if(this.dsAthrCert.getColumn(i, "CHK") == 1)
        		{
        			this.dsAthrCert.setColumn(i, "CERT_YN", "0");
        			this.dsAthrCert.setColumn(i, "CERT_PERMITE_EMPLOYEE", gv_sabun);
        			this.dsAthrCert.setColumn(i, "CERT_PERMITE_DATE", today);
        		}
        	}

        	var inds = "input=dsAthrCert:u";
        	this.gfn_TransactionP("save","JSP/ed/ed127f_athrCertApproval_dml.jsp", "", inds, "", "fnCallback", true, "P", false, this);

        };

        //기각
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var nRow = this.dsAthrCert.rowcount;
        	var objDate = new nexacro.Date();
        	var today = objDate.toString().substr(0,8);

        	for(var i=0; i < nRow; i++)
        	{
        		if(this.dsAthrCert.getColumn(i, "CHK") == 1)
        		{
        			this.dsAthrCert.setColumn(i, "CERT_YN", "1");
        			this.dsAthrCert.setColumn(i, "CERT_PERMITE_EMPLOYEE", gv_sabun);
        			this.dsAthrCert.setColumn(i, "CERT_PERMITE_DATE", today);
        		}
        	}

        	trace(this.dsAthrCert.saveXML());

        	var inds = "input=dsAthrCert:u";
        	this.gfn_TransactionP("save","JSP/ed/ed127f_athrCertApproval_dml.jsp", "", inds, "", "fnCallback", true, "P", false, this);
        };

        //닫기
        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        //엑셀변환
        this.Div00_btn_excel_onclick = function(obj,e)
        {
        	 this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.Grid00, "Sheet1!A1");
            this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename("외주자 증명서 발급 관리명단");
            this.exportObj.exportData();
        };

        //일괄체크
        this.Grid00_onheadclick = function(obj,e)
        {
        	var nRow = this.dsAthrCert.rowcount;

        	if(e.cell == 0)
        	{
        		if(this.dsAthrCert.getColumn(0, "CHK") == "1")
        		{
        			for(var i = 0; i<nRow; i++)
        			{
        				this.dsAthrCert.setColumn(i, "CHK", "0");
        			}
        		}else
        		{
        			for(var i = 0; i<nRow; i++)
        			{
        				this.dsAthrCert.setColumn(i, "CHK", "1");
        			}
        		}
        	}
        };

        this.Div00_Radio00_canitemchange = function(obj,e)
        {
        	this.dsAthrCert.filter("CERT_YN=='"+e.postvalue+"'");
        };



        this.ED127F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED127F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED127F_onload,this);
            this.addEventHandler("onsize",this.ED127F_onsize,this);
            this.addEventHandler("ontimer",this.ED127F_ontimer,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.Radio00.addEventHandler("canitemchange",this.Div00_Radio00_canitemchange,this);
            this.Div00.form.btn_excel.addEventHandler("onclick",this.Div00_btn_excel_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
        };
        this.loadIncludeScript("ED127F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
