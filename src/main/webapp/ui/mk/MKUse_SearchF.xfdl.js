(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MKUse_SearchF");
            this.set_titletext("용도코드 조회(제작) POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mk_use", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SHEETPRNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","155","351",null,"29","1055",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","54","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("용도명");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","20","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("용도코드");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"50","40","38","898",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","93","420","247",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_mk_use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"298\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"용도코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"용도명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"28","46","44","27",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00","174","353",null,"29","190",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edUseNm","106","54","255","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edUseCd","106","20","45","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MKUse_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MKUse_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MKUse_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var vFormId;


        this.MKUse_SearchF_onload = function(obj,e)
        {

        	this.ds_mk_use.copyData(this.parent.dsParam1);
        	vFormId = this.parent.dsParam4;

        	this.edUseCd.setFocus();
        	this.btn_search_onclick();

        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_mk_use.set_rowposition(this.fctn_UseChangeSet(this.edUseCd.text, this.edUseNm.text));
        };


        //#######################################################
        // 용도 변경시 변경값 설정
        //#######################################################
        this.fctn_UseChangeSet = function(Use_Code, Use_Name)
        {
        	var iuse_idx;
        	var sCmpExpr;

        	// 용도코드 인덱스 찾기
        	if((Use_Code.length == 2) && (Use_Name.length != 0))
        	{
        		sCmpExpr = "USE_CODE=='" + Use_Code + "'&&USE_NAME='" + Use_Name + "'";

        	    iuse_idx  = this.ds_mk_use.findRowExpr(sCmpExpr);
        	    return iuse_idx;
        	}
        	else if(Use_Code.length == 2)
        	{
        		sCmpExpr = "USE_CODE=='" + Use_Code + "'";
        		iuse_idx  = this.ds_mk_use.findRowExpr(sCmpExpr);
        	    return iuse_idx;
        	}
        	else if(Use_Name.length != 0)
        	{
        	    iuse_idx  = this.ds_mk_use.findRow("USE_NAME", Use_Name);
        	    return iuse_idx;
        	}
        	else
        	    return -1;
        }


        this.Grid00_oncelldblclick = function(obj,e)
        {
        	//기타외주비 관리
        	if(vFormId == "MK139"){
        		this.opener.dsEtcCostDtl.setColumn(this.opener.dsEtcCostDtl.rowposition, "USE_CODE"
        										  ,this.ds_mk_use.getColumn(this.ds_mk_use.rowposition, "USE_CODE"));
        	}
        	else{
        		this.opener.edUseCd.set_value(this.ds_mk_use.getColumn(this.ds_mk_use.rowposition, "USE_CODE"));
        		this.opener.cbUseNm.set_value(this.ds_mk_use.getColumn(this.ds_mk_use.rowposition, "USE_CODE"));
        	}

        	this.close();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MKUse_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("MKUse_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
