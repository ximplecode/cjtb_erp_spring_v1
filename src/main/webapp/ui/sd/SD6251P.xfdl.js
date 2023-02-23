(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6251P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(690,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">개인</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">속셈</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">학원</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">서점</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">유치</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"NAME\">스쿨</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"NAME\">외주</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"NAME\">기타</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">NET</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","5","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("출고율 년판복사");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","53","604","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","152","81","202","58",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","245","115","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3","159","114","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","265","114","81","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"95","55","22","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("복사하기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","152","81","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("코드구간");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","352","81","62","58",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","352","81","62","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("년판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values5","358","114","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","544","81","72","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("복사년판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_background("#dffff8");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","12","81","82","58",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","12","81","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("총판구분");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02","92","81","62","58",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_03","92","81","62","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("총판코드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","98","114","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","412","81","134","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("복사총판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_background("#dffff8");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values1","18","114","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","544","81","72","58",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01_00","412","81","134","58",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","45","22","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values6","418","114","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_code");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values7","489","114","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values8","550","114","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",690,160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6251P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6251P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6251P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var Rcount    = "";

        this.SD6251P_onload = function(obj,e)
        {
        	this.ed_values1.setFocus();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key 처리
            if (e.keycode == 13)
            {
                if (obj.name == "ed_values1") this.ed_values2.setFocus();
                else if (obj.name == "ed_values2") this.ed_values3.setFocus();
                else if (obj.name == "ed_values3") this.ed_values4.setFocus();
                else if (obj.name == "ed_values4") this.ed_values5.setFocus();
                else if (obj.name == "ed_values5") this.ed_values6.setFocus();
                else if (obj.name == "ed_values6") this.ed_values7.setFocus();
                else if (obj.name == "ed_values7") this.ed_values8.setFocus();
            }//ESC key 처리
            else if (e.keycode == 27)
            {
                if (obj.name == "ed_values2") this.ed_values1.setFocus();
                else if (obj.name == "ed_values3") this.ed_values2.setFocus();
                else if (obj.name == "ed_values4") this.ed_values3.setFocus();
                else if (obj.name == "ed_values5") this.ed_values4.setFocus();
                else if (obj.name == "ed_values6") this.ed_values5.setFocus();
                else if (obj.name == "ed_values7") this.ed_values6.setFocus();
                else if (obj.name == "ed_values8") this.ed_values7.setFocus();
            }
        };

        this.btn_copy_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/copy_bookcust.jsp";
        	var strArg = "";

        	if (this.NullCheck() == "False")
        	{
        		alert("데이터를 정확하게 넣어주세요!");
        		return;
        	}

        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value)+
        			 " Values2="+nexacro.wrapQuote(this.ed_values2.value)+
        			 " Values3="+nexacro.wrapQuote(this.ed_values3.value)+
        			 " Values4="+nexacro.wrapQuote(this.ed_values4.value)+
        			 " Values5="+nexacro.wrapQuote(this.ed_values5.value)+
        			 " Values6="+nexacro.wrapQuote(this.ed_values6.value)+
        			 " Values7="+nexacro.wrapQuote(this.ed_values7.value)+
        			 " Values8="+nexacro.wrapQuote(this.ed_values8.value)+
        			 " user_id=test";
        	this.gfn_TransactionP("codesearch", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "codesearch" )
        	{
        		alert(strErrorMag+"건의 데이터를 신규 추가하였습니다.");
        	}
        }


        this.NullCheck = function()
        {
        	if (this.ed_values1.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values2.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values3.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values4.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values5.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values6.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values7.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values8.value=="")
        	{
        		return "False";
        	}
        	return "True";
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6251P_onload,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
        };
        this.loadIncludeScript("SD6251P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
