(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR203P_03");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ipsa", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toisa", this);
            obj._setContents("<ColumnInfo><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","50%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입사자");
            obj.set_background("#9ee0de");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","sta00:0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("퇴사자");
            obj.set_background("#9ee0de");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ipsa","0","sta00:0","50%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ipsa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"132\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입사일자\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"주민번호\"/><Cell col=\"5\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:IPSADT\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JUMIN\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SEX\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_toisa","grd_ipsa:0","sta00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_toisa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"132\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"퇴사일자\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"직위\" suppressalign=\"first\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"주민번호\"/><Cell col=\"5\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:TOISADT\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JUMIN\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SEX\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,543,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR203P_03.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR203P_03.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.fn_getData_list = function(ymd, gb)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr203_03.jsp";
        	in_ds = "ds_ipsa=ds_ipsa ds_toisa=ds_toisa";
        	out_ds = "ds_ipsa=ds_ipsa ds_toisa=ds_toisa";
        	str_arg = " ymd='" + ymd + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        }

        this.Callback_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        }

        this.fn_print = function(ymd, gb)
        {
        	var rdUrl = gv_svcUrl + "rpt/hr/HR203P_03.mrd";


        	var rdParam = "/rp [" + ymd + "]";
        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("입/퇴사자 명단");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("HR203P_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
