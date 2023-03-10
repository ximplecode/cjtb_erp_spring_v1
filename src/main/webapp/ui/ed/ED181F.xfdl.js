(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED181F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_keystring("ATHR_NAME+ATHR_JUMINNO+ATHR_HOMEADDR");
            obj._setContents("<ColumnInfo><Column id=\"DOCUMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EDITPAYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"FINISHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_HOMEADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_QTY\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"EDIT_UNITCOST\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"EDIT_AMOUNT\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"INCOMETAX\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"RESIDENTTAX\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"EDITCONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","27","27","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("์กฐํ์ผ์");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","132","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","296","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","274","29","22","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"26","63","30","397",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("์กฐํ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","63","30","325",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("์ถ๋?ฅ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","553","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_format("###### - #@@@@@#");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_taxCalculater","690","27","109","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("์ธ๊ธ์ฌ๊ณ์ฐ");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","21","71","95%","629",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"์ฑ๋ช\"/><Cell col=\"1\" text=\"์ฃผ๋ฏผ๋ฑ๋ก๋ฒํธ\"/><Cell col=\"2\" text=\"์ฃผ์\"/><Cell col=\"3\" text=\"์ง๊ธ์ผ์\"/><Cell col=\"4\" text=\"๊ด๋ฆฌ์นด๋๋ฒํธ\"/><Cell col=\"5\" text=\"์๋์ฌํญ\"/><Cell col=\"6\" text=\"์๋\"/><Cell col=\"7\" text=\"๋จ๊ฐ\"/><Cell col=\"8\" text=\"๊ธ์ก\"/><Cell col=\"9\" text=\"์๋์ธ\"/><Cell col=\"10\" text=\"์ฃผ๋ฏผ์ธ\"/><Cell col=\"11\" text=\"์๋ฃ์ผ์\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_NAME\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ATHR_JUMINNO\" suppress=\"2\" textAlign=\"center\" edittype=\"mask\" maskeditmaskchar=\"_\" maskeditformat=\"######-#######\" displaytype=\"mask\" autosizerow=\"default\" maskeditlimitbymask=\"both\"/><Cell col=\"2\" text=\"bind:ATHR_HOMEADDR\" suppress=\"3\" wordWrap=\"char\" autosizerow=\"default\"/><Cell col=\"3\" text=\"bind:EDITPAYDATE\" displaytype=\"date\" subsumtext=\"      \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:DOCUMENT_ID\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:EDITCONTENT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"๊ฐ์ธํฉ๊ณ\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:EDIT_QTY\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:EDIT_UNITCOST\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:EDIT_AMOUNT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:INCOMETAX\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:RESIDENTTAX\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:FINISHDATE\" displaytype=\"date\" subsumtext=\"     \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell colspan=\"5\"/><Cell col=\"5\" text=\"์ง๊ธํฉ๊ณ\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;EDIT_QTY&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;EDIT_UNITCOST&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;EDIT_AMOUNT&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;INCOMETAX&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;RESIDENTTAX&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","450","27","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("์ฃผ๋ฏผ๋ฒํธ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","medt_juminNo","value","dsOutOrdDtl","ATHR_JUMINNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED181F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED181F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED181F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED181F_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        //์ฃผ๋ฏผ๋ฒํธ ์ฐพ๊ธฐ
        this.btn_name_onclick = function(obj,e)
        {
        	this.lfn_showModal("popuppAuthor", "", "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        };

        //์ฐพ์ ์?์ ๋ฐ์ดํฐ ๋ฃ์ด์ฃผ๊ธฐ
        this.fn_setAuthorValue = function(rtArray)
        {
        	this.medt_juminNo.set_value(rtArray[1]);
        }

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

        //์ธ๊ธ์ฌ๊ณ์ฐ
        this.taxCalculater = function()
        {
        	var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        			  + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value);

        	this.gfn_TransactionP("calculater","JSP/ed/ed180f_taxcalculater.jsp", "", "", strArg, "fnCallback", false, "P", false, this);
        }

        //์กฐํ
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		if(this.chk_taxCalculater.value == true)
        			this.taxCalculater();

        		var inds = "ds_list=ds_list";
        		var outds = "ds_list=ds_list";
        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value)
        				   + " JUMINNO=" + nexacro.wrapQuote(this.medt_juminNo.value);

        		this.gfn_TransactionP("calculater","JSP/ed/ed181f_list.jsp", inds, outds, strArg, "fnSearchCallback", true, "P", false, this);
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
        		if(this.chk_taxCalculater.value == true)
        			this.taxCalculater();

        		var juminNo = '';

        		if(this.medt_juminNo.value != null)
        			juminNo = this.medt_juminNo.value;

        		rdUrl = gv_urlMrd + "/ed/ED181.mrd";
        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"]["+ juminNo +"]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}
        };

        this.ED181F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED181F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED181F_onload,this);
            this.addEventHandler("onsize",this.ED181F_onsize,this);
            this.addEventHandler("ontimer",this.ED181F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.medt_juminNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_juminNo.addEventHandler("oneditclick",this.btn_name_onclick,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
        };
        this.loadIncludeScript("ED181F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
