(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR110F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSEO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSEO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GENERAL_BUSEO\" type=\"STRING\" size=\"256\"/><Column id=\"GENERAL_JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"GENERAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GENERAL_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTOR_BUSEO\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTOR_JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PART_DIRECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_BUSEO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서별 본부장/부문장/부서장 등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","Static02:5",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"155\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"부서명\"/><Cell col=\"2\" colspan=\"4\" text=\"본부장\"/><Cell col=\"6\" colspan=\"4\" text=\"부서장\"/><Cell col=\"10\" colspan=\"4\" text=\"팀장\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSEO_CODE\"/><Cell col=\"1\" text=\"bind:BUSEO_NAME\"/><Cell col=\"2\" text=\"bind:GENERAL_JIKWI\"/><Cell col=\"3\" text=\"bind:GENERAL_NAME\"/><Cell col=\"4\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"변경\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/><Cell col=\"6\" text=\"bind:DIRECTOR_JIKWI\"/><Cell col=\"7\" text=\"bind:DIRECTOR_NAME\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"변경\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/><Cell col=\"10\" text=\"bind:DEPARTMENT_JIKWI\"/><Cell col=\"11\" text=\"bind:DEPARTMENT_NAME\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"변경\"/><Cell col=\"13\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_search:10","16","120","22",null,null,null,null,null,null,this);
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
        this.addIncludeScript("HR110F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR110F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var sCol, sRow;
        var arr_rt;

        this.btn_search_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_HR110.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = "";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "P", false, this);
        };

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

        this.grd_list_oncellclick = function(obj,e)
        {
        	switch (e.col)
        	{
        		case 4 :
        			this.setData_list(e.col, e.row);
        			break;
        		case 8 :
        			this.setData_list(e.col, e.row);
        			break;
        		case 12 :
        			this.setData_list(e.col, e.row);
        			break;
        		case 5 :
        			this.setData_delete(e.col, e.row);
        			break;
        		case 9 :
        			this.setData_delete(e.col, e.row);
        			break;
        		case 13 :
        			this.setData_delete(e.col, e.row);
        			break;
        	}

        };

        this.setData_list = function(nCol, nRow)
        {
        	sRow = nRow;
        	sCol = nCol;

        	var objNew = new ChildFrame();
        	objNew.init("sInsa",0,0,237,440,null,null,"common::Insa.xfdl");
        	this.addChild("sInsa",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_showtitlebar(false);
        	objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_insa);

        }

        this.fn_Callback_insa = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		//this.setData_clearData();
        		//this.getData_insa101(arr_rt[0]);
        		switch (sCol)
        		{
        			case 4 :
        				this.ds_list.setColumn(sRow,"GENERAL_JIKWI",arr_rt[2]);
        				this.ds_list.setColumn(sRow,"GENERAL_NAME",arr_rt[1]);
        				this.ds_list.setColumn(sRow,"GENERAL_MANAGER",arr_rt[0]);
        				break;
        			case 8 :
        				this.ds_list.setColumn(sRow,"DIRECTOR_JIKWI",arr_rt[2]);
        				this.ds_list.setColumn(sRow,"DIRECTOR_NAME",arr_rt[1]);
        				this.ds_list.setColumn(sRow,"PART_DIRECTOR",arr_rt[0]);
        				break;
        			case 12 :
        				this.ds_list.setColumn(sRow,"DEPARTMENT_JIKWI",arr_rt[2]);
        				this.ds_list.setColumn(sRow,"DEPARTMENT_NAME",arr_rt[1]);
        				this.ds_list.setColumn(sRow,"DEPARTMENT_MANAGER",arr_rt[0]);
        				break;


        		}
        	}
        	this.removeChild("sInsa");

        };

        this.setData_delete = function(nCol, nRow)
        {
        	switch (nCol)
        	{
        		case 5 :
        			this.ds_list.setColumn(nRow,"GENERAL_JIKWI","");
        			this.ds_list.setColumn(nRow,"GENERAL_NAME","");
        			this.ds_list.setColumn(nRow,"GENERAL_MANAGER","");
        			break;
        		case 9 :
        			this.ds_list.setColumn(nRow,"DIRECTOR_JIKWI","");
        			this.ds_list.setColumn(nRow,"DIRECTOR_NAME","");
        			this.ds_list.setColumn(nRow,"PART_DIRECTOR","");
        			break;
        		case 13 :
        			this.ds_list.setColumn(nRow,"DEPARTMENT_JIKWI","");
        			this.ds_list.setColumn(nRow,"DEPARTMENT_NAME","");
        			this.ds_list.setColumn(nRow,"DEPARTMENT_MANAGER","");
        			break;
        	}


        };

        this.HR110F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	str_url = "JSP/hr/setData_HR110.jsp";
        	in_ds = "ds_list=ds_list:U";
        	out_ds = "ds_list=ds_list";
        	str_arg = "insert_user='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") + "'";
        	this.gfn_TransactionP("setData", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false, this);
        };

        this.Callback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        			return false;
        		}
        	}

        	this.alert("완료");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR110F_onload,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("HR110F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
