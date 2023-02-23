(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDAccountTitle_SearchF");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,392);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccountTitle", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTTIT_RN\" type=\"INT\" size=\"5\"/><Column id=\"ACNTTIT_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"40\"/><Column id=\"ACNTTIT_ENABLED\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_VISIBLE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_LVL\" type=\"INT\" size=\"2\"/><Column id=\"ACNTTIT_PNO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_REMARK\" type=\"STRING\" size=\"100\"/><Column id=\"ACNTTIT_DEVELOP\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_PRODUCT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","1","-1","279","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계정과목 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","290","12","59","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Radio("Rd_SectionKind","1","51","348","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_direction("vertical");
            obj.set_background("#ffffff");
            obj.set_border("1px solid silver");
            this.addChild(obj.name, obj);

            obj = new Grid("tvAccountTitle","1","90","350","301",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsAccountTitle");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj.set_scrolltype("both");
            obj.set_scrolldisplaymode("normal");
            obj.set_tooltiptype("hover");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"349\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" text=\"bind:ACNTTIT_NAME\" treelevel=\"bind:ACNTTIT_LVL\" edittype=\"tree\" treestartlevel=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,392,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PDAccountTitle_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PDAccountTitle_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PDAccountTitle_SearchF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PDAccountTitle_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        // 지급결의서 계정과목 찾기

        var iAcntTit_idx = -1;
        var sUserCompetence4 = "4";   // 일반승인권자

        var sSection_Code = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD"));

        var aQryReturn = new Array();
        this.parentForm = this.opener;
        var nDate = new Date();
        var today = Eco.date.getMaskFormatString(nDate, "yyyyMMdd");

        this.PDAccountTitle_SearchF_OnLoad = function(obj,e)
        {
        	var str_Arg  = "";
        	var COMPETENCE = this.parent.COMPETENCE;
        	var ACNTTIT_KIND = this.parent.ACNTTIT_KIND;

        	// 권한 있는 사람만 비용구분 보이기
        	this.Rd_SectionKind.visible = (COMPETENCE >= sUserCompetence4);

        	//이러닝사업부 초등마케팅팀(밀크티팀) , 미래전트략 스마트교육사업팀, IT 서비스 기획팀 임차료계정 보이게 처리
        	if (sSection_Code == "F2300" || sSection_Code == "2A200" ||
        	    sSection_Code == "F2200" || sSection_Code == "F2500")
        	{
        		COMPETENCE = "4";
        	}

        	if (COMPETENCE >= sUserCompetence4)
        	{
        		this.tvAccountTitle.set_top(72);
        		this.tvAccountTitle.set_height(318);

        		str_Arg	= "ACNTTIT_KIND=" + nexacro.wrapQuote( "2" ) +
        				" COMPETENCE=" + nexacro.wrapQuote( COMPETENCE ) +
        				" SECTION_CODE=" + sSection_Code;
        	}
        	else
        	{
        		this.tvAccountTitle.set_top(40);
        		this.tvAccountTitle.set_height(350);

        		str_Arg	= "ACNTTIT_KIND=" + ACNTTIT_KIND +
        				  " COMPETENCE=" +  COMPETENCE +
        				  " SECTION_CODE=" + sSection_Code;
        	}

        	this.gfn_TransactionP("search", "JSP/pd/accounttitile_select_etc.jsp", "dsAccountTitle=dsAccountTitle", "dsAccountTitle=dsAccountTitle", str_Arg, "fnCallback", false, "P", false, this);

        };

        //조회 콜백
        this.fnCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "search")
        	{
        		if(ErrorCode != 0 )
        			trace("[PDAccountTitle_SearchF.fnCallBack(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        }


        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        //	툴팁 보여주기
        this.tvAccountTitle_OnMouseMove = function(obj,e)
        {
        	this.tvAccountTitle.set_tooltiptext(this.dsAccountTitle.getColumn(e.row, "ACNTTIT_REMARK"));

        };

        // 계정 선택
        this.tvAccountTitle_OnDblClick = function(obj,e)
        {
        	if (this.opener.dsAccountTitle.getColumn(e.row, "ACNTTIT_ENABLED") == "0")
        	{
        	  alert("선택한 계정은 사용할 수 없는 계정이니 다른 계정이나 하위계정을 선택하여 주세요.");
        	  return false;
        	}
        	else
        	{
        		this.close(this.fnReturnValue(aQryReturn));
        	}

        }

        // 조회 값 반환
        this.fnReturnValue = function()
        {
        	var nRow = this.dsAccountTitle.rowposition;

        	aQryReturn[0] = this.dsAccountTitle.getColumn(nRow, "ACNTTIT_NO");
        	aQryReturn[1] = this.dsAccountTitle.getColumn(nRow, "ACNTTIT_CODE");
        	aQryReturn[2] = this.dsAccountTitle.getColumn(nRow, "ACNTTIT_NAME");
        	aQryReturn[3] = this.dsAccountTitle.getColumn(nRow, "ACNTTIT_PNO");
        	aQryReturn[4] = this.dsAccountTitle.getColumn(nRow, "ACNTTIT_DEVELOP");
        	aQryReturn[5] = this.dsAccountTitle.getColumn(nRow, "ACNTTIT_PRODUCT");

        	return aQryReturn;
        }

        this.PDAccountTitle_onbeforeclose = function(obj,e)
        {
        	this.opener.fn_PDAccountTitle_SearchF(aQryReturn);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PDAccountTitle_SearchF_OnLoad,this);
            this.addEventHandler("onbeforeclose",this.PDAccountTitle_onbeforeclose,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.tvAccountTitle.addEventHandler("oncelldblclick",this.tvAccountTitle_OnDblClick,this);
            this.tvAccountTitle.addEventHandler("onmousemove",this.tvAccountTitle_OnMouseMove,this);
        };
        this.loadIncludeScript("PDAccountTitle_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
