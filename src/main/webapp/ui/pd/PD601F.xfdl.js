(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD601F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrderGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">부서운영비</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">업무시식비</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">사무용품비</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">일반접대비</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","4","226","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가항목 입력");
            obj.set_color("#7fb39d");
            obj.set_font("bold 26px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"8","52","22","66",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"8","51","22","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","78","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("년월");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","106","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("금액");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","134","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사유");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all","20","170","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("하위 월 일괄 적용");
            obj.set_value("false");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_section_name","90","50","320","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_ym","90","78","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_format("####-##");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","190","78","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("항목");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_order_gb","260","78","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsOrderGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amount","90","106","171","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bigo","90","134","320","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD601F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD601F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD601F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var section_code;
        var gv_sabun;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.PD601F_onload = function(obj,e)
        {
        	this.medt_ym.set_value(this.parent.yy + this.parent.mm);
        	this.cbo_order_gb.set_value(this.parent.order_gb);
        	this.edt_section_name.set_value(this.opener.dsData.getColumn(0,"SECTION_NAME"));
        	section_code = this.parent.section_code;
        	gv_sabun = this.parent.gv_sabun;

        	this.medt_amount.setFocus();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl, strArg, chk;
        	if (this.chk_all.value)
        		chk = 1;
        	else
        		chk = 0;
        	strUrl = "JSP/pd/PD600_etc_dml.jsp";
        	strArg = "yy="+nexacro.wrapQuote(this.medt_ym.value.substr(0,4)) + " mm="+nexacro.wrapQuote(this.medt_ym.value.substr(4,2)) +
        	          " section_code="+nexacro.wrapQuote(section_code) + " in_id="+nexacro.wrapQuote("") +
        	          " amount="+nexacro.wrapQuote(this.medt_amount.value) + " bigo="+nexacro.wrapQuote(this.edt_bigo.text)  +
        	          " ckb="+nexacro.wrapQuote(chk) + " order_gb="+nexacro.wrapQuote(this.cbo_order_gb.value) +
        	          " sabun="+nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("etc_dml", strUrl, "", "", strArg, "Callback_etc_dml", false, "P", false, this);
        };

        this.Callback_etc_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	this.close(0);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD601F_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("PD601F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
