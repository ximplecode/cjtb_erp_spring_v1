(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDAuthor_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAuthor", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_HP\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_HP2\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PERMITE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERMITE\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_COMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_UNIVSTUDY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_ABODEGB\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPermite", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">승인</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","16","26","77","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","97","26","304","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","36","46","444","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찾고자 하는 저자의 이름을 입력하세요.  저자 확인 후 더블클릭하여 적용하세요.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","183","510",null,"29","193",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","13","100","477","400",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsAuthor");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"105\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"주민번호\"/><Cell col=\"2\" text=\"핸드폰\"/><Cell col=\"3\" text=\"승인여부\"/><Cell col=\"4\" text=\"약정만료일\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_NAME\"/><Cell col=\"1\" text=\"bind:ATHR_JUMINNO\"/><Cell col=\"2\" text=\"bind:ATHR_HP\"/><Cell col=\"3\" text=\"bind:PERMITE_NAME\" displaytype=\"normal\" combodataset=\"dsPermite\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:ATHR_CLOSEDATE\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","409","26","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("EDAuthor_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("EDAuthor_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("EDAuthor_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var chk_btn;
        var aReturn = new Array();

        var param, athr_close, athr_permite;

        this.EDAuthor_SearchF_onload = function(obj,e)
        {
        	this.edt_name.setFocus();
        	param = this.parent.param;
        	athr_close = this.parent.athr_close;
            athr_permite = this.parent.athr_permite;
        }

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var strArg = "ATHR_NAME=" + this.edt_name.value;
        	var outds = "dsAuthor=dsAuthor";
        	var inds = "dsAuthor=dsAuthor";

        	this.gfn_TransactionP("select","JSP/ed/author_select.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        };

        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}else
        	{
        		if(this.dsAuthor.rowcount == 0)
        			alert("찾고자하는 저자가 없습니다");
        		else
        			this.Grid00.set_binddataset("dsAuthor");
        	}
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        	var openRow;

        	if((athr_permite == "Permite") && (this.dsAuthor.getColumn(this.dsAuthor.rowposition, "PERMITE") == "0"))
        	{
        		alert("미승인 저자 입니다. 경리부에 문의하여 승인을 받으시기 바랍니다.");
        		this.edt_name.value = "";
        		return false;
        	}

        	if(athr_close == "Close")
        	{
        		var sCloseDate = this.dsAuthor.getColumn(this.dsAuthor.rowposition, "ATHR_CLOSEDATE");

        		if(this.dsAuthor.rowcount > 0 && ((sCloseDate == null) || (sCloseDate < today) ))
        		{
        			alert("약정만료일이 지정되지 않거나, 종료 되어 저자를 선택할 수 없습니다. \n" +
        				 "외주작업관리카드 등을 작성하실때 약정만료일이 지정되지 않거나 약정만료일이 종료된 저자는 저자등록을 하신 경우에도 나타나지 않는 경우가 있습니다.\n" +
        				 "계약 등 품의(편집외주약정서)사본을 재경팀 담당자에게 메일 보내셔서 약정일 지정 승인 요청하시기바랍니다. ");
        			this.edt_name.value = "";
        			return false;
        		}
        	}

        	if(param == "ED126_1")
        	{
        		this.opener.edt_athrIdentity.set_value(this.dsAuthor.getColumn(e.row, "ATHR_IDENTITY"));
        		this.opener.edt_athrName.set_value(this.dsAuthor.getColumn(e.row, "ATHR_NAME"));
        	}
        	else if (param == "ED126_2")
        	{
        		this.opener.Tab00.Tabpage1.form.edt_athrIdentity2.set_value(this.dsAuthor.getColumn(e.row, "ATHR_IDENTITY"));
        		this.opener.Tab00.Tabpage1.form.edt_athrName2.set_value(this.dsAuthor.getColumn(e.row, "ATHR_NAME"));
        	}

        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_NAME"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_JUMINNO"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_COMNAME"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_UNIVSTUDY"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "UNIV_CODE"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "UNIV_NAME"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_JUMINNO2"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "BANK_CODE"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_ACNTNO"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_ABODEGB"));
        	aReturn.push(this.dsAuthor.getColumn(e.row, "ATHR_IDENTITY"));

        	this.close();
        };

        this.EDAuthor_SearchF_onbeforeclose = function(obj,e)
        {
        	if( (param != "ED126_1") && (param != "ED126_2") )
        		this.opener.fn_setAuthorValue(aReturn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EDAuthor_SearchF_onload,this);
            this.addEventHandler("onbeforeclose",this.EDAuthor_SearchF_onbeforeclose,this);
            this.edt_name.addEventHandler("onkeyup",this.edt_univ_onkeyup,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("onenterdown",this.Grid00_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
        };
        this.loadIncludeScript("EDAuthor_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
