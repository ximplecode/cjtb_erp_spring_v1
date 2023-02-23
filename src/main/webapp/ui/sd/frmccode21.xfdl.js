(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmccode21");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ccode24", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","16","51","484","479",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ccode24");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"22\"/><Column size=\"50\"/><Column size=\"85\"/><Column size=\"22\"/><Column size=\"50\"/><Column size=\"85\"/><Column size=\"22\"/><Column size=\"50\"/><Column size=\"85\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"gold\"/><Cell col=\"1\" text=\"코드\" background=\"gold\" color=\"black\"/><Cell col=\"2\" text=\"대분류명\" background=\"gold\" color=\"black\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"aquamarine\" color=\"black\"/><Cell col=\"4\" text=\"코드\" background=\"aquamarine\" color=\"black\"/><Cell col=\"5\" text=\"중분류명\" background=\"aquamarine\" color=\"black\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"cornflowerblue\" color=\"black\"/><Cell col=\"7\" text=\"코드\" background=\"cornflowerblue\" color=\"black\"/><Cell col=\"8\" text=\"소분류명\" background=\"cornflowerblue\" color=\"black\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:dcd\"/><Cell col=\"2\" text=\"bind:dnm\"/><Cell col=\"3\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk1\"/><Cell col=\"4\" text=\"bind:jcd\"/><Cell col=\"5\" text=\"bind:jnm\"/><Cell col=\"6\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk2\"/><Cell col=\"7\" text=\"bind:scd\"/><Cell col=\"8\" text=\"bind:snm\"/><Cell col=\"9\" text=\"bind:dcd\"/><Cell col=\"10\" text=\"bind:jcd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","22","10","208","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사업구분 열람");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","436","19","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmccode21.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("frmccode21.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("frmccode21.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("frmccode21.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        var R_sw1  = "N";
        var R_sw2  = "N";
        var R_sw3  = "N";
        var Fv_HeadChk1 = 0;                         //체크박스2.
        var Fv_HeadChk2 = 0;                         //체크박스2.
        var Fv_HeadChk3 = 0;                         //체크박스2.

        this.frmccode21_onload = function(obj,e)
        {
        	this.ds_ccode24.copyData(this.opener.ds_ccode24);

        	if ( this.parent.PY_GB == "N")
        	{
        		strArg = "";
        		outds = "ds_ccode24=ds_ccode24";
        		inds = "ds_ccode24=ds_ccode24";

        		this.gfn_TransactionP("code_select","JSP/sd/help_ccode24.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	R_sw1     = "N";
        	R_sw2     = "N";
        	R_sw3     = "N";
        	this.parent.S_CUSTGB = this.Gridcheck("dsCcode21");
        	this.parent.S_CUSTCD = this.Gridcheck("dsCcode22");
        	this.parent.E_CUSTGB = this.Gridcheck("dsCcode23");
        	if (( R_sw1 == "N" ) && ( R_sw2 == "N" ) && ( R_sw3 == "N" ))
        	{
        		this.parent.S_CUSTGB = "";
        		this.parent.S_CUSTCD = "";
        		this.parent.E_CUSTGB = "";
        	}
        	this.opener.ds_ccode24.copyData(this.ds_ccode24); // 부모창 데이터셋에 자식창 데이터 복사
        	this.close(this.parent.S_CUSTGB+":"+this.parent.S_CUSTCD+":"+this.parent.E_CUSTGB);
        };

        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";
        	var loop = 0;

        	if (strdsname=="dsCcode21")
        	{
        		for (loop=0; loop < this.ds_ccode24.rowcount; loop++)
        		{
        			if (this.ds_ccode24.getColumn(loop,"chk")==1)
        			{
        			    R_sw1  = "Y";
        				strReturn = strReturn +"'"+this.ds_ccode24.getColumn(loop,"dcd")+"',";
        			}
        		}
        	}
        	if (strdsname=="dsCcode22")
        	{
        		for (loop=0; loop < this.ds_ccode24.rowcount; loop++)
        		{
        			if (this.ds_ccode24.getColumn(loop,"chk1")==1)
        			{
        			    R_sw2  = "Y";
        				strReturn = strReturn +"'"+this.ds_ccode24.getColumn(loop,"jcd")+"',";
        			}
        		}
        	}

        	if (strdsname=="dsCcode23")
        	{
        		for (loop=0; loop < this.ds_ccode24.rowcount; loop++)
        		{
        			if (this.ds_ccode24.getColumn(loop,"chk2")==1)
        			{
        			    R_sw3  = "Y";
        				strReturn = strReturn +"'"+this.ds_ccode24.getColumn(loop,"scd")+"',";
        			}
        		}
        	}

        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length-1);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmccode21_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("frmccode21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
