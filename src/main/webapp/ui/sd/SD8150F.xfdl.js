(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8150F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"DD\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_AMT1\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_AMT2\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_AMT3\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_1\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_YY\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_MM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXlsSheetName", this);
            obj._setContents("<ColumnInfo><Column id=\"IDX\" type=\"INT\" size=\"2\"/><Column id=\"SHEETNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelLoad", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_view","25","130","1534","615",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_data");
            obj.set_border("2px solid #10aea9");
            obj.set_font("11px/normal \"Gulim\"");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"총판명\"/><Cell col=\"3\" text=\"년\"/><Cell col=\"4\" text=\"월\"/><Cell col=\"5\" text=\"일\"/><Cell col=\"6\" text=\"이월금액\"/><Cell col=\"7\" text=\"전월통보액\"/><Cell col=\"8\" text=\"추가수금기준\"/><Cell col=\"9\" text=\"담당자조정\"/><Cell col=\"10\" text=\"CHK\"/><Cell col=\"11\" text=\"OLD_YY\"/><Cell col=\"12\" text=\"OLD_MM\"/><Cell col=\"13\" text=\"OLD_DD\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_GB\"/><Cell col=\"1\" text=\"bind:CUST_CD\"/><Cell col=\"2\" text=\"bind:CUST_NM\"/><Cell col=\"3\" text=\"bind:YY\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:MM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:DD\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:AMT_MT\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"7\" text=\"bind:AMT_AMT1\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"8\" text=\"bind:AMT_AMT2\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"9\" text=\"bind:AMT_AMT3\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"10\" text=\"bind:AMT_1\" edittype=\"mask\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:OLD_YY\"/><Cell col=\"12\" text=\"bind:OLD_MM\"/><Cell col=\"13\" text=\"bind:OLD_DD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3.46%","1.45%","40.49%","9.08%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("추가수금기준안등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","82","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("작업구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","150","82","310","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","458","82","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","294","87","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","583","82","230","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","590","87","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_e","669","92","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("거래종료총판제외");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","811","82","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("복사일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","936","82","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"36","75","31","62",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("복사");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"36","75","31","236",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"36","75","31","149",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,"36","115","31","326",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("데이터 업로드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"36","95","31","456",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀변환");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("cald_symd","157","87","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("####-##-##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("cald_eymd","321","87","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("####-##-##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("cald_cymd","943","87","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_type("string");
            obj.set_format("####-##-##");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD8150F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD8150F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8150F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;


        this.SD8150F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var U_yy = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        	this.cald_symd.set_value(U_yy.substr(0,6) + "00");
        	this.cald_eymd.set_value(U_yy);
        	U_yy = Eco.date.addMonth(U_yy, 1);
        	this.cald_cymd.set_value(U_yy.substr(0,6) + "00");
            this.ed_sgb.set_value("21");
            this.chk_e.set_value(true);
            this.cald_symd.setFocus();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl, strDs, strArg, eChk;

        	strUrl = "JSP/sd/SD8150_select.jsp";
        	strDs = "ds_data=ds_data";
            if (this.chk_e.value == true )  eChk = "1";
        	else eChk = "0";

        	strArg = "sdate="+nexacro.wrapQuote(this.cald_symd.value) +
        			 " edate="+nexacro.wrapQuote(this.cald_eymd.value) +
        			 " cust_gb="+nexacro.wrapQuote(this.ed_sgb.value) +
        			 " e_chk="+nexacro.wrapQuote(eChk);

        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback_select", false, "P", false, this);
        };

        this.fnCallback_select = function(Trid, ErroCode, ErrorMsg)
        {
        	if(ErroCode != 0)
        	return;
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.setWaitCursor(true);
        	this.setTimer(0, 10);
        };

        this.SD8150F_ontimer = function(obj,e)
        {
        	if(e.timerid==0)
        	{
        		this.fnExcellExport();
        		this.killTimer(e.timerid);
        	}
        };

        this.fnExcellExport = function()
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();

        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grid_view, "Sheet1!A1");
        	filename = "Excel_1";

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        	this.setWaitCursor(false);
        }

        this.btn_upload_onclick = function(obj,e)
        {
        	this.importObj = new ExcelImportObject("Import00",this);
            this.importObj.addEventHandler("onsuccess", this.Import_onsuccess, this);
            this.importObj.set_importurl(gv_urlXeni);
            var ret = this.importObj.importData("","output=ds","dsExcelLoad=ds");
        	if(!ret){
        		this.alert("업로드에 실패하셨습니다.");
        		return;
        	}
        };

        this.Import_onsuccess = function(obj,e)
        {
        	if(e.id == "onsuccess")
        	{
        		this.dsExcelLoad.deleteRow(0);

        		for(var i=this.dsExcelLoad.rowcount;i>=1; i--) // 비어있는 행들 삭제
        		{
        			if(this.dsExcelLoad.getColumn(i, "Column0") == null &&
        			   this.dsExcelLoad.getColumn(i, "Column1") == null)
        			{
        				this.dsExcelLoad.deleteRow(i);
        			}
        		}
        		this.ds_data.clearData();
        		for(var i=0; i < this.dsExcelLoad.rowcount; i++)
        		{
        			this.ds_data.addRow();
        			this.ds_data.setColumn(i, "CUST_GB", this.dsExcelLoad.getColumn(i,"Column0"));
        			this.ds_data.setColumn(i, "CUST_CD", this.dsExcelLoad.getColumn(i,"Column1"));
        			this.ds_data.setColumn(i, "CUST_NM", this.dsExcelLoad.getColumn(i,"Column2"));
        			this.ds_data.setColumn(i, "YY", this.dsExcelLoad.getColumn(i,"Column3"));
        			this.ds_data.setColumn(i, "MM", this.dsExcelLoad.getColumn(i,"Column4"));
        			this.ds_data.setColumn(i, "DD", this.dsExcelLoad.getColumn(i,"Column5"));
        			this.ds_data.setColumn(i, "AMT_MT", this.dsExcelLoad.getColumn(i,"Column6"));
        			this.ds_data.setColumn(i, "AMT_AMT1", this.dsExcelLoad.getColumn(i,"Column7"));
        			this.ds_data.setColumn(i, "AMT_AMT2", this.dsExcelLoad.getColumn(i,"Column8"));
        			this.ds_data.setColumn(i, "AMT_AMT3", this.dsExcelLoad.getColumn(i,"Column9"));
        			this.ds_data.setColumn(i, "AMT_1", this.dsExcelLoad.getColumn(i,"Column10"));
        			this.ds_data.setColumn(i, "OLD_YY", this.dsExcelLoad.getColumn(i,"Column11"));
        			this.ds_data.setColumn(i, "OLD_MM", this.dsExcelLoad.getColumn(i,"Column12"));
        			this.ds_data.setColumn(i, "OLD_DD", this.dsExcelLoad.getColumn(i,"Column13"));
        		}
        	}
        }

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl, inDs;

        	strUrl = "JSP/sd/SD8150_dml.jsp";
        	inDs = "ds_data=ds_data:U";

        	this.gfn_TransactionP("sdmlelect", strUrl, inDs, "", "", "fnCallback_dml", false, "P", false, this);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD8150F_onload,this);
            this.addEventHandler("ontimer",this.SD8150F_ontimer,this);
            this.grid_view.addEventHandler("oncelldblclick",this.grid_view_oncelldblclick,this);
            this.Static01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_sgb.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_sgb.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.Static01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SD8150F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
