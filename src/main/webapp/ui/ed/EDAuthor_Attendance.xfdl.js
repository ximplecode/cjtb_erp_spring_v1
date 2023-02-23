(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDAuthor_Attendance");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAuthorAttend", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompany", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","10","580","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","224","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","293","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","361","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print","429","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","497","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","60","580","426",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsAuthorAttend");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"144\"/><Column size=\"108\"/><Column size=\"95\"/><Column size=\"95\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소속\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" colspan=\"2\" text=\"계약기간\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" combotype=\"dropdown\" combodataset=\"dsCompany\" combocodecol=\"COMPANY_CODE\" combodatacol=\"COMPANY_NAME\" edittype=\"none\" text=\"bind:COMPANY_KIND\"/><Cell col=\"1\" displaytype=\"combocontrol\" combodataset=\"dsSection\" combocodecol=\"SECTION_CODE\" combodatacol=\"SECTION_NAME\" edittype=\"combo\" text=\"bind:SECTION_CODE\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NM\"/><Cell col=\"3\" text=\"bind:WORK_SDATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:WORK_EDATE\" displaytype=\"date\" edittype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("EDAuthor_Attendance.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("EDAuthor_Attendance.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("EDAuthor_Attendance.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var flag = "normal";

        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.EDAuthor_Attendance_onload = function(obj,e)
        {
        	this.dsAuthorAttend.copyData(this.parent.param1);
        	this.dsSection.copyData(this.parent.param2);
        	this.dsCompany.copyData(this.parent.param3);

        };

        //신규
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	this.dsAuthorAttend.addRow();
        	this.dsAuthorAttend.setColumn(this.dsAuthorAttend.rowposition, "COMPANY_KIND", "C");
        	this.dsAuthorAttend.setColumn(this.dsAuthorAttend.rowposition, "ATHR_IDENTITY", this.parent.identity);
        	this.dsAuthorAttend.setColumn(this.dsAuthorAttend.rowposition, "ATHR_JUMINNO", this.parent.juminNo);
        	this.dsAuthorAttend.setColumn(this.dsAuthorAttend.rowposition, "SECTION_CODE", "24000"); //sSection_Code);			//부서
        	this.dsAuthorAttend.setColumn(this.dsAuthorAttend.rowposition, "EMPLOYEE_ID", "C20141"); //trim(gv_SABUN));			//사번
        	this.dsAuthorAttend.setColumn(this.dsAuthorAttend.rowposition, "EMPLOYEE_NM", "최유빈"); //trim(sEmployee_Name));		//이름
        };

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var strArg = " ATHR_JUMINNO=" + this.parent.juminNo;
        	this.gfn_TransactionP("select","JSP/ed/ed121f_athrattend.jsp", "dsAuthorAttend=dsAuthorAttend", "dsAuthorAttend=dsAuthorAttend", strArg, "", true, "P", false, this);
        };

        //저장
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	var inds = "dsAuthorAttend=dsAuthorAttend:u";

        	if(this.dsAuthorAttend.getColumn(this.dsAuthorAttend.rowposition, "COMPANY_KIND") != "C"){
        		alert("소속이 천재교육이 아닐 경우 수정할 수 없습니다.");
        		Div00_btn_search_onclick();
        	}

        	if(this.dsAuthorAttend.getColumn(this.dsAuthorAttend.rowposition, "SECTION_CODE") == null){
        		alert("부서를 선택해주세요");
        		return false;;
        	}

        	if(this.dsAuthorAttend.getColumn(this.dsAuthorAttend.rowposition, "WORK_SDATE") == null){
        		alert("용역기간을 입력해주세요");
        		return false;;
        	}

        	if(this.dsAuthorAttend.getColumn(this.dsAuthorAttend.rowposition, "WORK_EDATE") == null){
        		alert("용역기간을 입력해주세요");
        		return false;;
        	}

        	if(flag == "delete")
        	{
        		this.dsAuthorAttend.setRowType(this.dsAuthorAttend.rowposition, "D");
        		this.dsAuthorAttend.deleteRow(this.dsAuthorAttend.rowposition);
        	}

        	this.gfn_TransactionP(this.dsAuthorAttend.getRowType(this.dsAuthorAttend.rowposition),"JSP/ed/ed121f_athrattend_dml.jsp", inds , "", "", "fnCallbackSave", true, "P", false, this);

        };

        //삭제
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	if(this.confirm("삭제하시겠습니까?"))
        	{
        		this.dsAuthorAttend.setColumn(this.dsAuthorAttend.rowposition, "ATHRATTEND_DELETE", "D");
        		flag = "delete";
        		this.Div00_btn_save_onclick();
        	}
        };

        this.fnCallbackSave = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else
        	{
        		alert("완료되었습니다");
        		flag = 'nomal';
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EDAuthor_Attendance_onload,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
        };
        this.loadIncludeScript("EDAuthor_Attendance.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
