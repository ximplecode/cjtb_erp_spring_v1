(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED165_CopyF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRoyaltyacnt_Mst_Copy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyaltyacnt_Dtl1_Copy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyaltyacnt_Dtl2_Copy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Dtl2_MidAmount_All", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"RADTL2_MIDACNTAMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","6","26","77","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","6","60","77","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode_copy","87","26","100","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookSYear_copy","188","26","60","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookEYear_copy","250","26","60","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookTB_copy","87","60","60","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName_copy","149","60","241","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,"105","65","30","215",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"105","65","30","135",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED165_CopyF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED165_CopyF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED165_CopyF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED165_CopyF_onload = function(obj,e)
        {
        	this.edt_bookCode_copy.set_value(this.opener.edt_bookCode.value);
        	this.edt_bookTB_copy.set_value(this.opener.edt_bookTB.value);
        	this.edt_bookSYear_copy.set_value("");
        	this.edt_bookEYear_copy.set_value("");
        	this.edt_bookName_copy.set_value(this.opener.edt_bookName.value);
        	this.edt_bookSYear_copy.setFocus();
        };

        //확인
        this.btn_ok_onclick = function(obj,e)
        {
        	if(this.edt_bookCode_copy.value == "" ||  this.edt_bookSYear_copy.value == "" || this.edt_bookEYear_copy.value == "")
        	{
        		alert("도서정보를 정확히 입력하세요!");
        		return false;
        	}

        	this.dsRoyaltyacnt_Mst_Copy.copyData(this.parent.dsRoyaltyacnt_Mst);
        	this.dsRoyaltyacnt_Dtl1_Copy.copyData(this.parent.dsRoyaltyacnt_Dtl1);
        	this.dsRoyaltyacnt_Dtl2_Copy.copyData(this.parent.dsRoyaltyacnt_Dtl2);

        	this.parent.dsRoyaltyacnt_Mst.clearData();
        	this.parent.dsRoyaltyacnt_Dtl1.clearData();
        	this.parent.dsRoyaltyacnt_Dtl2.clearData();
        	this.parent.dsRoyaltyacnt_Mst.addRow();

        	this.opener.edt_bookCode.set_value(this.edt_bookCode_copy.value);
        	this.opener.edt_bookSYear.set_value(this.edt_bookSYear_copy.value);
        	this.opener.edt_bookEYear.set_value(this.edt_bookEYear_copy.value);
        	this.opener.edt_bookTB.set_value(this.edt_bookTB_copy.value);
        	this.opener.edt_bookName.set_value(this.edt_bookName_copy.value);

        	this.opener.txa_remark.value = this.dsRoyaltyacnt_Mst_Copy.getColumn(0, "RAMST_REMARK");

        	var str_url = "JSP/ed/ed165f_midamount_select_all.jsp";
        	var inds = "ds_Dtl2_MidAmount_All=ds_Dtl2_MidAmount_All";
        	var outds = "ds_Dtl2_MidAmount_All=ds_Dtl2_MidAmount_All";
        	var strArg = "BOOKMST_CODE=" + nexacro.wrapQuote(this.edt_bookCode_copy.value);

        	this.gfn_TransactionP("search" ,str_url, inds, outds, strArg, "fnMidAmountAllCallback", false, "P", false, this);
        };

        this.fnMidAmountAllCallback = function(svcId, errCode, errMsg)
        {
        	var vRate = this.dsRoyaltyacnt_Dtl1_Copy.getColumn(0, "RADTL1_ROYALTYRATE");

        	for(var i=0; i<this.dsRoyaltyacnt_Dtl2_Copy.rowcount; i++)
        	{
        		this.parent.dsRoyaltyacnt_Dtl2.addRow();
        		this.parent.dsRoyaltyacnt_Dtl2.setColumn(i, "ATHR_IDENTITY", this.dsRoyaltyacnt_Dtl2_Copy.getColumn(i, "ATHR_IDENTITY"));
        		this.parent.dsRoyaltyacnt_Dtl2.setColumn(i, "ATHR_NAME", this.dsRoyaltyacnt_Dtl2_Copy.getColumn(i, "ATHR_NAME"));
        		this.parent.dsRoyaltyacnt_Dtl2.setColumn(i, "ATHR_JUMINNO2", this.dsRoyaltyacnt_Dtl2_Copy.getColumn(i, "ATHR_JUMINNO2"));
        		this.parent.dsRoyaltyacnt_Dtl2.setColumn(i, "RADTL2_EDITRATE", this.dsRoyaltyacnt_Dtl2_Copy.getColumn(i, "RADTL2_EDITRATE"));
        		this.parent.dsRoyaltyacnt_Dtl2.setColumn(i, "RADTL2_PAYRATE", this.dsRoyaltyacnt_Dtl2_Copy.getColumn(i, "RADTL2_PAYRATE"));
        		this.parent.dsRoyaltyacnt_Dtl2.setColumn(i, "RADTL2_MIDACNTAMOUNT", this.ds_Dtl2_MidAmount_All.getColumn(
        														this.ds_Dtl2_MidAmount_All.findRow("ATHR_IDENTITY", this.dsRoyaltyacnt_Dtl2_Copy.getColumn(i,"ATHR_IDENTITY"))
        														, "RADTL2_MIDACNTAMOUNT"));
        	}

        	this.close(vRate);
        }

        this.fn_common_onkeydown = function(obj,e)
        {
        	var comObj;

        	if(e.keycode == 13)
        	{
        		comObj = this.getNextComponent(obj,true);
        		comObj.setFocus();
        	}
        }

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED165_CopyF_onload,this);
            this.edt_bookCode_copy.addEventHandler("onkeydown",this.fn_common_onkeydown,this);
            this.edt_bookSYear_copy.addEventHandler("onkeydown",this.fn_common_onkeydown,this);
            this.edt_bookEYear_copy.addEventHandler("onkeydown",this.fn_common_onkeydown,this);
            this.edt_bookTB_copy.addEventHandler("onkeydown",this.fn_common_onkeydown,this);
            this.edt_bookName_copy.addEventHandler("onkeydown",this.fn_common_onkeydown,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("ED165_CopyF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
