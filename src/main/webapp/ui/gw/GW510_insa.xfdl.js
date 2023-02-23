(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW510_insa");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","15","12","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 선택");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"95","63","25","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","63","25","11",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","15","59","429","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_padding("5px");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">직원검색</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">입사예정자</Col><Col id=\"codecolumn\">999998</Col></Row><Row><Col id=\"datacolumn\">공용</Col><Col id=\"codecolumn\">999999</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("직원검색");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","15","95","12.83%","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","77","95","275","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","16","132","433","283",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_insa");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직위\"/><Cell col=\"2\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSE\"/><Cell col=\"1\" text=\"bind:JIKWI\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",460,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW510_insa.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW510_insa.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW510_insa.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sRow, formId;

        this.GW510_insa_onload = function(obj,e)
        {
        	sRow = this.parent.p_nRow;
        	formId = this.parent.p_Id;
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	if(this.edt_name.text.length == 0)
        	{
        		alert("검색할 직원 성명을 입력하세요.");
        		this.edt_name.setFocus();
        		return false;
        	}

        	var strUrl = "JSP/gw/SQL_GW510_INSA.jsp";
        	var inds = "ds_insa=ds_insa";
        	var outds = "ds_insa=ds_insa";
        	var strArg = "nm=" + nexacro.wrapQuote(this.edt_name.text);

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "fnSelectCallback", false, "P", false, this);
        };

        this.edt_name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.btn_clear_onclick();
        };

        this.Radio00_onitemchanged = function(obj,e)
        {
        	if(formId == "GW510" || formId == "GW511")
        	{
        		this.opener.ds_dtl.setColumn(sRow, "SABUN", e.postvalue);
        		this.opener.ds_dtl.setColumn(sRow, "NAME", e.posttext);

        		if(formId == "GW510")
        			this.opener.grd_dtl.setCellPos(1);

        		this.close();
        	}
        	else if(formId == "GW540" || formId == "GW560")
        	{
        		this.opener.ds_mst.setColumn(sRow, "SABUN", e.postvalue);
        		this.opener.ds_mst.setColumn(sRow, "NAME", e.posttext);

        		this.close();
        	}

        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	if(formId == "GW510" || formId == "GW511")
        	{
        		this.opener.ds_dtl.setColumn(sRow, "SABUN", this.ds_insa.getColumn(e.row,"SABUN"));
        		this.opener.ds_dtl.setColumn(sRow, "NAME", this.ds_insa.getColumn(e.row,"NAME"));

        		if(formId == "GW510")
        			this.opener.grd_dtl.setCellPos(8);

        		this.close();
        	}
        	else if(formId == "GW540" || formId == "GW560")
        	{
        		this.opener.ds_mst.setColumn(sRow, "SABUN", this.ds_insa.getColumn(e.row,"SABUN"));
        		this.opener.ds_mst.setColumn(sRow, "NAME", this.ds_insa.getColumn(e.row,"NAME"));

        		this.close();
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW510_insa_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("GW510_insa.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
