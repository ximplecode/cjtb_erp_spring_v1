(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED188F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","15","14","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","100","14","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","215","14","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","15","49","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주민번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","100","49","225","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("###### - #######");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","15","84","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","100","83","225","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","15","120","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("발행구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","103","121","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_kind_innerdataset = new nexacro.NormalDataset("rdo_kind_innerdataset", obj);
            rdo_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">소득자보관용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발행자보관용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kind_innerdataset);
            obj.set_text("소득자보관용");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"161","63","28","179",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"161","63","28","110",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","medt_juminNo","value","dsAuthor","ATHR_JUMINNO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED188F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED188F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED188F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        //출력
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.cal_Sdate.value == null)
        	{
        		alert("조회일자를 입력해주세요.");
        		this.cal_Sdate.dropdown();
        		return false;
        	}

        	if(this.cal_Edate.value == null)
        	{
        		alert("조회일자를 입력해주세요.");
        		this.cal_Edate.dropdown();
        		return false;
        	}

        	var juminNo = '';

        	if(this.medt_juminNo.value != null)
        		juminNo = this.medt_juminNo.value;

        	rdUrl = gv_urlMrd + "/ed/ED188.mrd";

        	rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        			   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"]"
        			   + "[" + juminNo + "][" + this.edt_name.text + "][" + this.rdo_kind.value + "]";

        	this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);

        };

        //닫기
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED188F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
