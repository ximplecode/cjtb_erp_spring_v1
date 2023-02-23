(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MBO_ADMIN_JIKGUN");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hr301_01", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jikmu", this);
            obj._setContents("<ColumnInfo><Column id=\"JIKGUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUN_MU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">천재교육</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">천재교과서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jikgun", this);
            obj._setContents("<ColumnInfo><Column id=\"JIKGUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JIKGUN_CD\">L0001</Col><Col id=\"JIKGUN_NM\">경영관리</Col></Row><Row><Col id=\"JIKGUN_CD\">L0002</Col><Col id=\"JIKGUN_NM\">영업&amp;마케팅</Col></Row><Row><Col id=\"JIKGUN_CD\">L0003</Col><Col id=\"JIKGUN_NM\">연구개발</Col></Row><Row><Col id=\"JIKGUN_CD\">L0004</Col><Col id=\"JIKGUN_NM\">IT</Col></Row><Row><Col id=\"JIKGUN_CD\">L0005</Col><Col id=\"JIKGUN_NM\">디자인</Col></Row><Row><Col id=\"JIKGUN_CD\">L0006</Col><Col id=\"JIKGUN_NM\">특수/지원</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인별 직무/직군 등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","52",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_hr301_01");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"137\"/><Column size=\"80\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"대   상   자\"/><Cell col=\"6\" rowspan=\"2\" text=\"직무\"/><Cell col=\"7\" rowspan=\"2\" text=\"직군\"/><Cell row=\"1\" text=\"구 분\"/><Cell row=\"1\" col=\"1\" text=\"부서코드\"/><Cell row=\"1\" col=\"2\" text=\"부서명\"/><Cell row=\"1\" col=\"3\" text=\"직위\"/><Cell row=\"1\" col=\"4\" text=\"사번\"/><Cell row=\"1\" col=\"5\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:GB\" displaytype=\"combotext\" combodataset=\"ds_gubun\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"1\" text=\"bind:BUSECD\"/><Cell col=\"2\" text=\"bind:BUSE\"/><Cell col=\"3\" text=\"bind:JIKWI\"/><Cell col=\"4\" text=\"bind:SABUN\"/><Cell col=\"5\" text=\"bind:NAME\"/><Cell col=\"6\" text=\"bind:JIKGUN_CD\" displaytype=\"combotext\" edittype=\"combo\" combotype=\"dropdown\" combodataset=\"ds_jikgun\" combocodecol=\"JIKGUN_CD\" combodatacol=\"JIKGUN_NM\"/><Cell col=\"7\" text=\"bind:JIKMU_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_jikmu\" combocodecol=\"JIKMU_CD\" combodatacol=\"JIKMU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_Excel:10","16","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MBO_ADMIN_JIKGUN.xfdl","Lib::Lib_service.xjs");
        this.registerScript("MBO_ADMIN_JIKGUN.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        this.MBO_ADMIN_JIKGUN_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_jikmu.jsp";
        	in_ds = "ds_jikmu=ds_jikmu";
        	out_ds = "ds_jikmu=ds_jikmu";
        	str_arg = "";
        	this.gfn_TransactionP("select_jikmu", str_url, in_ds, out_ds, str_arg, "Callback_getData_list", true, "P", false, this);
        };

        this.Callback_getData_list = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0 && ErrorCode != -99)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_jikgunList.jsp";
        	in_ds = "ds_hr301_01=ds_hr301_01";
        	out_ds = "ds_hr301_01=ds_hr301_01";
        	str_arg = "";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false, this);
        }

        this.Callback_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0 && ErrorCode != -99)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }



        this.btn_save_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/setData_jikgun_dml.jsp";
        	in_ds = "ds_hr301_01=ds_hr301_01:U";
        	out_ds = "ds_hr301_01=ds_hr301_01";
        	str_arg = "strMRYEAR='2022'";
        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_end", true, "U", false, this);
        };

        this.Callback_end = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	this.alert("저장 완료")
        }

        this.btn_Excel_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var filename;
        	filename = "GridList";
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_list, "Sheet1!A1");

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MBO_ADMIN_JIKGUN_onload,this);
            this.btn_Excel.addEventHandler("onclick",this.btn_Excel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("MBO_ADMIN_JIKGUN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
