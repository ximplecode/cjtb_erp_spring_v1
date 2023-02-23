(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW710");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_i_flow_seal", this);
            obj._setContents("<ColumnInfo><Column id=\"FS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_GUBN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_USE\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"FS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_DATE2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_SABUN2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_ORDER_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"FS_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FS_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FS_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">법인인감(회장)</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">법인인감(사장)</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">사용인감</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","18","10","96.88%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","63","25","22",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","25","7","245","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("인감 사용 신청 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","18","60","97%","650",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_i_flow_seal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"직인종류\"/><Cell col=\"2\" text=\"제출처\"/><Cell col=\"3\" text=\"문서번호\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"사용용도\"/><Cell col=\"6\" text=\"사용부서\"/><Cell col=\"7\" text=\"사용자\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"인사관리팀\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:FS_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:FS_GUBN_CODE\" combodataset=\"ds_gubun\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" text=\"bind:CO_SEQ\"/><Cell col=\"4\" text=\"bind:FS_TITLE\"/><Cell col=\"5\" text=\"bind:FS_USE\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:FS_BUSENM\"/><Cell col=\"7\" text=\"bind:FS_NAME\"/><Cell col=\"8\" text=\"bind:FS_STATUS_NM\"/><Cell col=\"9\" text=\"bind:FS_ORDER_NAME1\"/><Cell col=\"10\" text=\"bind:FS_BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW710.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW710.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW710.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var nRow;

        var d = new Date();
        var today = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        this.GW710_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var strUrl = "JSP/gw/GW700_select.jsp";
        	var inds = "ds_i_flow_seal=ds_i_flow_seal";
        	var outds = "ds_i_flow_seal=ds_i_flow_seal";
        	var strArg = "sabun=''" +
        				" sdate=''" +
        				" edate=''" +
        				" gubn_code=''" +
        				" title=''" +
        				" status='9'" +
        				" name=''" +
        				" i_flow_id=''";

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        };

        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupSearch", "", "gw::GW701.xfdl", "", this, '', '', 370, 220);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	nRow = e.row;
        	var objParam = {p_nRow:e.row};

        	this.lfn_showModal("popupSearch", objParam, "gw::GW711.xfdl", "popupCallback", this, '', '', 970, 800);
        };

        this.popupCallback = function(svcId, rt_value)
        {
        	if(rt_value > 0)
        	{
        		this.ds_i_flow_seal.setColumn(nRow, "FS_STATUS", rt_value);
        		this.ds_i_flow_seal.setColumn(nRow, "FS_ORDER_SABUN1", gv_sabun);
        		this.ds_i_flow_seal.setColumn(nRow, "FS_ORDER_NAME1", gv_name);
        		this.ds_i_flow_seal.setColumn(nRow, "FS_ORDER_DATE1", today);

        		if(rt_value == 0)
        			this.ds_i_flow_seal.setColumn(nRow, "FS_STATUS_NM", "기각");
        		else if(rt_value == 1)
        			this.ds_i_flow_seal.setColumn(nRow, "FS_STATUS_NM", "승인");
        	}
        }

        this.GW710_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.GW710_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.GW710_onload,this);
            this.addEventHandler("onsize",this.GW710_onsize,this);
            this.addEventHandler("ontimer",this.GW710_ontimer,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("GW710.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
