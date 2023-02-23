(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW701");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_i_flow_seal", this);
            obj._setContents("<ColumnInfo><Column id=\"FS_ID\" type=\"INT\" size=\"256\"/><Column id=\"FS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_GUBN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_USE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"FS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FS_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","18","18","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","18","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("직인종류");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","18","81","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","99","81","245","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","18","112","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_status","99","112","245","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_status_innerdataset = new nexacro.NormalDataset("cb_status_innerdataset", obj);
            cb_status_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">미승인</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">기각</Col></Row></Rows>");
            obj.set_innerdataset(cb_status_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","18","143","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("작성자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_kind","99","50","245","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_kind_innerdataset = new nexacro.NormalDataset("cb_kind_innerdataset", obj);
            cb_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">법인인감(회장)</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">법인인감(사장)</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">사용인감</Col></Row></Rows>");
            obj.set_innerdataset(cb_kind_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","100","143","245","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","100","18","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","222","18","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","190","183",null,"29","110",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","110","183",null,"29","190",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW701.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW701.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW701.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_sabun, gv_name;

        this.GW701_onload = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	gv_sabun = this.parent.p_sabun;
        	gv_name = this.parent.p_name;

        	this.edt_name.set_value(gv_name);

        	this.cal_sDate.set_value(today.substr(0,6) + "01");
        	this.cal_eDate.set_value(today);

        	if(this.opener.name == "GW700")
        		this.edt_name.set_enable(false);
        	else if(this.opener.name == "GW710")
        		this.cb_status.set_value("9");
        };

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.cal_sDate.value == "")
        	{
        		alert("검색 시작일자를 입력하세요.");
        		this.cal_sDate.setFocus();
        		return false;
        	}

        	if(this.cal_eDate.value == "")
        	{
        		alert("검색 종료일자를 입력하세요.");
        		this.cal_eDate.setFocus();
        		return false;
        	}

        	var strUrl = "JSP/gw/GW700_select.jsp";
        	var inds = "ds_i_flow_seal=ds_i_flow_seal";
        	var outds = "ds_i_flow_seal=ds_i_flow_seal";
        	var strArg ="sabun=" + nexacro.wrapQuote(this.gv_sabun) +
        				" sdate="+ nexacro.wrapQuote(this.cal_sDate.value) +
        				" edate="+ nexacro.wrapQuote(this.cal_eDate.value) +
        				" gubn_code="+ nexacro.wrapQuote(this.cb_kind.value) +
        				" title="+ nexacro.wrapQuote(nexacro.trim(this.edt_title.text)) +
        				" status="+ nexacro.wrapQuote(this.cb_status.value) +
        				" name="+ nexacro.wrapQuote(nexacro.trim(this.edt_name.text)) +
        				" i_flow_id=''";

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectCallback", false, "P", false, this);
        };

        this.fnSelectCallback = function()
        {
        	this.opener.ds_i_flow_seal.copyData(this.ds_i_flow_seal);
        	this.close(1);
        }

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW701_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("GW701.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
