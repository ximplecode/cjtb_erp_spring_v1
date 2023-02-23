(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW802");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPostDst", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BELONGING_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"APP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APP_BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PAYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoods", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">도서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">서류</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoc", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">매거진부</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">회원사업부</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">영업부 - 본사</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">자료실 - 본사</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">쇼핑몰팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static99_00","1.11%","8.92%",null,null,"1.73%","90.8%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#cfddea");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","1.11%","15.7%",null,null,"1.73%","83.98%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#cfddea");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2.10%","10.72%",null,null,"92.35%","85.66%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일자구간");
            obj.set_font("bold 14px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_begin_date","8.09%","10.72%",null,null,"81.54%","85.66%",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","19.32%","10.72%",null,null,"78.02%","85.66%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_font("bold 14px/normal \"굴림\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_end_date","22.84%","10.72%",null,null,"66.79%","85.66%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","35.8%","10.72%",null,null,"60.49%","85.66%",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","2.04%","15.8%",null,null,"90.19%","80%",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("신청 리스트");
            obj.set_font("bold 14px/normal \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dst","1.05%","20%",null,null,"1.73%","1.69%",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsPostDst");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"380\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"순번\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"문서번호\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"신청부서\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"신청자사번\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"신청자\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"우편번호\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"수취인\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"주소\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"휴대폰번호\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"품명\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"품명비고\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"위치\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"귀속부서코드\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"귀속부서\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"속성코드\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" text=\"속성이름\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" text=\"귀속도서코드\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"17\" text=\"귀속도서명\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" displaytype=\"text\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:DOC_NO\" textAlign=\"center\" displaytype=\"text\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:APP_BUSE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:APP_NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:POST_NUMBER\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PAYEE_NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:ADDR\"/><Cell col=\"8\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"9\" textAlign=\"center\" combodataset=\"dsGoods\" combodatacol=\"NAME\" combocodecol=\"CODE\" text=\"bind:GOODS_NAME\"/><Cell col=\"10\" text=\"bind:GOODS_ETC\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:LOCATION\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:BELONGING_DEPT_CODE\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:BELONGING_DEPT_NAME\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:ATT_CD\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:BOOK_CD\" textAlign=\"center\"/><Cell col=\"17\" textAlign=\"center\" text=\"bind:BOOKMST_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"3.61%","5.49%",null,"1.79%","92.65%",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀변환");
            obj.set_font("14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.20%","0.72%",null,null,"50%","89.64%",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("택배발송현황 조회 ( 관리자 )");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW802.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW802.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW802.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sResult, strArg, strSABUN, strSEQ = "", out_var, row_status, target_row;
        var i_flow_id,NEW_I_FLOW_ID;
        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_sabun = gds_userinfo.getColumn(0,"SABUN");
        this.GW802_onload = function(obj,e)
        {
        	if ( gv_sabun != 'C16141' && gv_sabun != 'C08148' && gv_sabun != 'C15008' && gv_sabun != 'C21158' ) // 김정국, 오창훈, 조윤제
        	{
        		alert("관리자만 접근 가능 합니다.");
        		if(this.parent.parent.name == "WorkDetail"){
        			var nRow = this.parent.parent.ds_selectMenu.findRow("selectMenu_Div_id",this.parent.name);
        			var bClose_id = this.parent.parent.ds_selectMenu.getColumn(nRow,"selectButton_Div_id");
        			this.parent.parent.div_selectMenu.form.all[bClose_id].form.CloseButton.click();
        		}
        		else
        			this.close();
        	}
        	var objDate = new nexacro.Date();
        	var today = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        	this.cald_begin_date.set_value(today);
        	this.cald_end_date.set_value(today);

        	this.btn_search.click();
        };

        this.btn_exceldown_onclick = function(obj,e)
        {
        	var k = 0; // 엑셀 데이터셋에 복사위치
            if ( this.dsPostDst.rowcount <= 0){
        		alert("변환가능한 신청리스트가 없습니다.");
        		return;
        	}

        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_dst, "배송리스트!A1");
        	this.exportObj.set_exportfilename( this.cald_end_date.value+"(Post_Label).xls" );
        	this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl   = "JSP/gw/SQL_GW802_SELECT.jsp";
        	var strDs = "dsPostDst=dsPostDst";

        	var strArg = " BEGIN_DATE =" + nexacro.wrapQuote(this.cald_begin_date.value);
        	strArg += " END_DATE =" + nexacro.wrapQuote(this.cald_end_date.value);

        	this.gfn_TransactionP("SelectIsDst", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
              {alert(ErrorMsg);
               return;}
        	else if (trid != null)
        	{
        		trid = trid.split("|");
        		trid = trid[0]
        	}

            if ( trid == "SelectIsDst")  // 조회 후 필터링 ( 자신의 위치만 가져옴 )
            {

            }
        }
        /* //닫기버튼 클릭 시
        this.btn_close_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	if(this.parent.parent.name == "WorkDetail"){
        		var nRow = this.parent.parent.ds_selectMenu.findRow("selectMenu_Div_id",this.parent.name);
        		var bClose_id = this.parent.parent.ds_selectMenu.getColumn(nRow,"selectButton_Div_id");
        		this.parent.parent.div_selectMenu.form.all[bClose_id].form.CloseButton.click();
        	}
        	else
        		this.close("ok");
        };
        */
        this.GW802_onsize = function(obj,e)
        {
        	if (this.width <= 1000 || this.height < 410)
        	{
        		this.Static00.set_font('bold 24px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 10px/normal "굴림"');
        		this.Static02.set_font('bold 10px/normal "굴림"');
        		this.Static03.set_font('bold 10px/normal "굴림"');

        		this.cald_begin_date.set_font('normal 10px/normal "Arial"');
        		this.cald_end_date.set_font('normal 10px/normal "Arial"');
        		this.btn_search.set_font('normal 10px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 10px/normal "Arial"');
        		this.btn_close.set_font('normal 10px/normal "Arial"');
        	}
        	else if ((this.width < 1260 || this.height < 580) && (this.width > 1000 || this.height > 410) )
        	{
        		this.Static00.set_font('bold 30px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 12px/normal "굴림"');
        		this.Static02.set_font('bold 12px/normal "굴림"');
        		this.Static03.set_font('bold 12px/normal "굴림"');

        		this.cald_begin_date.set_font('normal 12px/normal "Arial"');
        		this.cald_end_date.set_font('normal 12px/normal "Arial"');
        		this.btn_search.set_font('normal 12px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 12px/normal "Arial"');
        		this.btn_close.set_font('normal 12px/normal "Arial"');
        	}
        	else
        	{
        		this.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        		this.Static01.set_font('bold 14px/normal "굴림"');
        		this.Static02.set_font('bold 14px/normal "굴림"');
        		this.Static03.set_font('bold 14px/normal "굴림"');

        		this.cald_begin_date.set_font('normal 14px/normal "Arial"');
        		this.cald_end_date.set_font('normal 14px/normal "Arial"');
        		this.btn_search.set_font('normal 14px/normal "Arial"');
        		this.btn_exceldown.set_font('normal 14px/normal "Arial"');
        		this.btn_close.set_font('normal 14px/normal "Arial"');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW802_onload,this);
            this.addEventHandler("onsize",this.GW802_onsize,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_dst.addEventHandler("onheadclick",this.grd_dst_onheadclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
        };
        this.loadIncludeScript("GW802.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
