(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED121_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthor", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","145","210",null,"29","135",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","26","67","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","13","70","67","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주민번호");
            obj.set_background("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","13","114","67","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("관련부서");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_Univ","26","166","88","17",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("서울대출신");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_Permite","115","166","90","17",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("미승인저자");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"160","85","29","50",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","88","26","212","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("\\");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","88","114","212","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSection");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_jumin","88","70","212","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_format("###### - #######");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,250,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED121_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED121_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED121_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };


        this.ED121_SearchF_onload = function(obj,e)
        {
        	//관련부서 가져오기
        	this.dsSection.copyData(this.parent.dsParam1);
        	this.cb_section.set_innerdataset("dsSection");

        	//저자 정보
        	this.dsAuthor.copyData(this.parent.dsParam2);

        	this.edt_name.setFocus();

        };

        //조회버튼 클릭 시
        this.btn_search_onclick = function(obj,e)
        {
        	var chk1, chk2;
        	var textVal = this.edt_name.text.replace(/^\s+|\s+$/g, '');

        	if(textVal.length == 0)
        	{
        		this.alert("성명을 입력하세요");
        		this.edt_name.setFocus();
        	}

        	if(this.chk_Univ.value == true) chk1 = 1;
        	else chk1 = "";

        	if(this.chk_Permite.value == true) chk2 = 1;
        	else chk2 = "";

        	var str_url = "JSP/ed/ed121f_author.jsp";
        	var inds = "dsAuthor=dsAuthor";
        	var outds = "dsAuthor=dsAuthor";
        	var strArg = " ATHR_JUMINNO=" + this.edt_jumin.text +
        				 " ATHR_NAME=" + this.edt_name.text +
        				 " SECTION_CODE=" + this.cb_section.text +
        				 " CHECK1=" + chk1 +
        				 " CHECK2=" + chk2 +
        				 " COMPETENCE=1" +	//페이지권한
        				 " SABUN=C20141"

        	this.gfn_TransactionP("search",str_url, inds, outds, strArg, "Callback_search", true, "P", false, this);

        };

        this.Callback_search = function(id, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else
        	{
        		this.parent.dsParam2.copyData(this.dsAuthor);
        		this.close();
        	}
        }

        this.ED121_SearchF_onclose = function(obj,e)
        {
        	this.parent.dsParam2.copyData(this.dsAuthor);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED121_SearchF_onload,this);
            this.addEventHandler("onclose",this.ED121_SearchF_onclose,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("ED121_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
