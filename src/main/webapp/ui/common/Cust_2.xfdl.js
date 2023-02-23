(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SDBook_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_custcode", this);
            obj._setContents("<ColumnInfo><Column id=\"gubn\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"f_dpnm\" type=\"STRING\" size=\"256\"/><Column id=\"f_saupno\" type=\"STRING\" size=\"256\"/><Column id=\"o_ddd\" type=\"STRING\" size=\"256\"/><Column id=\"o_tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"post_cd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">학습(01)</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">주간(12)</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">개인(20)</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">교판(21)</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"data\">속셈(22)</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"data\">학원(23)</Col></Row><Row><Col id=\"code\">24</Col><Col id=\"data\">서점(24)</Col></Row><Row><Col id=\"code\">25</Col><Col id=\"data\">유치(25)</Col></Row><Row><Col id=\"code\">26</Col><Col id=\"data\">스쿨(26)</Col></Row><Row><Col id=\"code\">27</Col><Col id=\"data\">외주(27)</Col></Row><Row><Col id=\"code\">28</Col><Col id=\"data\">기타(28)</Col></Row><Row><Col id=\"code\">29</Col><Col id=\"data\">NET(29)</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"data\">GGE(30)</Col></Row><Row><Col id=\"code\">31</Col><Col id=\"data\">해법(31)</Col></Row><Row><Col id=\"code\">32</Col><Col id=\"data\">영어(32)</Col></Row><Row><Col id=\"code\">33</Col><Col id=\"data\">고등(33)</Col></Row><Row><Col id=\"code\">34</Col><Col id=\"data\">과학(34)</Col></Row><Row><Col id=\"code\">35</Col><Col id=\"data\">독서(35)</Col></Row><Row><Col id=\"code\">36</Col><Col id=\"data\">논술(36)</Col></Row><Row><Col id=\"code\">37</Col><Col id=\"data\">학력(37)</Col></Row><Row><Col id=\"code\">38</Col><Col id=\"data\">교원(38)</Col></Row><Row><Col id=\"code\">39</Col><Col id=\"data\">쇼핑(39)</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">캐릭(13)</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">저작(14)</Col></Row><Row><Col id=\"code\">40</Col><Col id=\"data\">매입(40)</Col></Row><Row><Col id=\"code\">41</Col><Col id=\"data\">외주(41)</Col></Row><Row><Col id=\"code\">42</Col><Col id=\"data\">상품(42)</Col></Row><Row><Col id=\"code\">47</Col><Col id=\"data\">은행(47)</Col></Row><Row><Col id=\"code\">48</Col><Col id=\"data\">부서(48)</Col></Row><Row><Col id=\"code\">00</Col><Col id=\"data\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","16","66","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","16","140","560","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_custcode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"51\"/><Column size=\"242\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"50\"/><Column size=\"98\"/><Column size=\"292\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"상호\"/><Cell col=\"3\" text=\"대표자\"/><Cell col=\"4\" text=\"사업자번호\"/><Cell col=\"5\" text=\"국번\"/><Cell col=\"6\" text=\"전화\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell text=\"bind:gubn\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/><Cell col=\"3\" text=\"bind:f_dpnm\"/><Cell col=\"4\" text=\"bind:f_saupno\"/><Cell col=\"5\" text=\"bind:o_ddd\"/><Cell col=\"6\" text=\"bind:o_tel\"/><Cell col=\"7\" text=\"bind:addr\"/><Cell col=\"8\" text=\"bind:post_cd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_code","266","66","45","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","187","66","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","16","100","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_sangho","95","100","168","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","470","66","107","64",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","22","20","248","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("거래처 코드 리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_all","446","28","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전체목록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","516","29","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun","95","66","91","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_gubun");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("전체");
            obj.set_value("00");
            obj.set_index("29");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_custend","318","70","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("거래중지업체 포함");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","264","100","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("사업자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_saup","342","100","118","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",590,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Cust_2.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("Cust_2.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("Cust_2.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("Cust_2.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        var F_gubun = "" ; //구분 코드.


        this.btn_close_onclick = function(obj,e)
        {
        	this.close(null);
        };


        this.btn_search_onclick = function(obj,e)
        {
        	var strArg;
        	var code, old_code;
        	var inds 	= "ds_custcode=ds_custcode";
        	var outds 	= "ds_custcode=ds_custcode";
        	var gubn, chkstop;

        	if (this.cmb_gubun.value =="00") gubn = "null";
        	else gubn = this.cmb_gubun.value;

        	if (this.chk_custend.value == true) chkstop = "";
        	else chkstop = "null";

        	//strArg = "gubun= null Code= null old_Code= null Names= null Saup= null chkstop="+chkstop;
        	if (obj.id =="btn_search_all") strArg = "gubun="+nexacro.wrapQuote("null")+
        											"Code="+nexacro.wrapQuote("null")+
        											"Names="+nexacro.wrapQuote("null")+
        											"Saup="+nexacro.wrapQuote("null")+
        											"chkstop="+nexacro.wrapQuote(chkstop);
        	else strArg = "gubun="+nexacro.wrapQuote(gubn)+
        				  "Code="+nexacro.wrapQuote(this.ed_code.value)+
        				  "Names="+nexacro.wrapQuote(this.ed_sangho.value)+
        				  "Saup="+nexacro.wrapQuote(this.ed_saup.value)+
        				  "chkstop="+nexacro.wrapQuote(chkstop);

        	this.gfn_TransactionP("select_custcode","JSP/sd/select_cust_ac.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        	//Transaction("select_custcode", "ac_bl::select_cust_ac.jsp", inds, outds, strArg, "fnCallback");
        };

        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(svcId == "select_custcode"){
        		this.grd_list.setFocus();
        	}
        }

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	/*
        	리턴값을 close()에 담아서 전달
            예1) 21:1006 -> 부모창 팝업콜백 함수에서 : 로 스플릿하여 사용하세요.
        	에2) this.popupCallBack = function(sFormId, sArg) -> sArg 를 split
        	*/
        	if( this.ds_custcode.getColumn(this.ds_custcode.rowposition, "code").length == 4 )
        		this.close(this.ds_custcode.getColumn(this.ds_custcode.rowposition, "gubn")+":"
        					+this.ds_custcode.getColumn(this.ds_custcode.rowposition, "code"));
        	else
        		this.close(null);
        };

        this.ed_code_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        		this.btn_search_onclick(obj);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SDBook_SearchF_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.ed_code.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.ed_sangho.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_search_all.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ed_saup.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
        };
        this.loadIncludeScript("Cust_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
