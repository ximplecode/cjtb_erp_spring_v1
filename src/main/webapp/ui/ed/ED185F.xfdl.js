(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED185F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_keystring("S:+SECTION_CODE, G:SECTION_NAME");
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUMQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"SUMAMOUNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","17","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("์กฐํ์ผ์");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","100","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","224","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"27","63","30","96",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("์กฐํ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"27","63","30","27",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("์ถ๋?ฅ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","18","61","1249","639",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"400\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"๋์์ฝ๋\"/><Cell col=\"1\" text=\"๋ํ\"/><Cell col=\"2\" text=\"๋์๋ช\"/><Cell col=\"3\" text=\"ํ์ด์ง\"/><Cell col=\"4\" text=\"๊ธ์ก\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"bind:SECTION_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BOOKMST_YEAR\" displaytype=\"normal\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"์ ๊ณ\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BOOKMST_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:SUMQTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SUMAMOUNT\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("ED185F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED185F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED185F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED185F_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.chk_value = function()
        {
        	if(this.cal_Sdate.value == null)
        	{
        		alert("์กฐํ์ผ์๋ฅผ ์๋?ฅํด์ฃผ์ธ์.");
        		this.cal_Sdate.dropdown();
        		return false;
        	}

        	if(this.cal_Edate.value == null)
        	{
        		alert("์กฐํ์ผ์๋ฅผ ์๋?ฅํด์ฃผ์ธ์.");
        		this.cal_Edate.dropdown();
        		return false;
        	}

        	return true;
        }

        //์กฐํ
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		var inds = "ds_list=ds_list";
        		var outds = "ds_list=ds_list";

        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value);

        		this.gfn_TransactionP("select","JSP/ed/ed185f_list.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
        	}
        };

        this.fnSearchCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.ds_list.rowcount < 1)
        		alert("์กฐํ๋ ๋ฐ์ดํฐ๊ฐ ์์ต๋๋ค.");
        }

        //์ถ๋?ฅ
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		rdUrl = gv_urlMrd + "/ed/ED185.mrd";

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}

        };

        this.ED185F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED185F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED185F_onload,this);
            this.addEventHandler("onsize",this.ED185F_onsize,this);
            this.addEventHandler("ontimer",this.ED185F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED185F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
