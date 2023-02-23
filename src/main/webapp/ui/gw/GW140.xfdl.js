(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW140");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_COLIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CB_ID\">C</Col><Col id=\"CB_NAME\">완결문서함</Col></Row><Row><Col id=\"CB_ID\">R</Col><Col id=\"CB_NAME\">수신문서함</Col></Row><Row><Col id=\"CB_ID\">-</Col><Col id=\"CB_NAME\">--------------------</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_CHAMJO_LIST", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_COADDLIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CB_ID\">C</Col><Col id=\"CB_NAME\">완결문서함</Col></Row><Row><Col id=\"CB_ID\">R</Col><Col id=\"CB_NAME\">수신문서함</Col></Row><Row><Col id=\"CB_ID\">-</Col><Col id=\"CB_NAME\">--------------------</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","30","12","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("참조문서 선택");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_list","350","58","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("DS_COLIST");
            obj.set_codecolumn("CB_ID");
            obj.set_datacolumn("CB_NAME");
            obj.set_text("완결문서함");
            obj.set_value("C");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_LIST","20","93","492","450",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("DS_CHAMJO_LIST");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"297\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"문서번호\"/><Cell col=\"1\" text=\"문서제목\"/><Cell col=\"2\" text=\"기안자\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","63","25","17",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("i_Empty","106","308","321","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색된 문서가 없습니다");
            obj.set_textAlign("center");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW140.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW140.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW140.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        //combo box list seleect
        this.GW140_onload = function(obj,e)
        {
        	var strArg;

        	strArg = "gubun='01'";
        	strArg += " sabun='C20141'"; //gv_sabun 가져와야함

        	var str_url = "JSP/gw/SQL_GW140_02S.jsp";
        	var in_ds = "DS_COADDLIST=DS_COADDLIST";
        	var out_ds = "DS_COADDLIST=DS_COADDLIST";

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, strArg, "Cb_List_Add", true, "P", false, this);
        };

        this.Cb_List_Add = function()
        {
        	if(this.DS_COADDLIST.rowcount > 0)
        	{
        		var iRow = 2;;

        		for(var i=0; i< this.DS_COADDLIST.rowcount; i++)
        		{
        			iRow += 1;

        			this.DS_COADDLIST.addRow();

        			this.DS_COLIST.setColumn(iRow, "CB_ID", this.DS_COADDLIST.getColumn(i, "CB_ID"));
        			this.DS_COLIST.setColumn(iRow, "CB_NAME", this.DS_COADDLIST.getColumn(i, "CB_NAME"));
        		}
        	}

        	this.cb_list.set_value("C");

        	this.Grid_cbList();
        }

        //참조문서 리스트 보여주기
        this.Grid_cbList = function()
        {
        	var strArg;

        	strArg = "gubun='01'"
        	strArg += " sabun='C20141'"	//gv_sabun 가져와야 함
        	strArg += " listclass=" + this.cb_list.value;

        	var str_url = "JSP/gw/SQL_GW140_01S.jsp";
        	var in_ds = "DS_CHAMJO_LIST=DS_CHAMJO_LIST";
        	var out_ds = "DS_CHAMJO_LIST=DS_CHAMJO_LIST";

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, strArg, "Select_CbList", true, "P", false, this);
        }

        //참조문서 select callbsck function
        this.Select_CbList = function()
        {
        	if(this.DS_CHAMJO_LIST.rowcount == 0)
        		this.i_Empty.set_visible(true);
        	else
        		this.i_Empty.set_visible(false);
        }

        //combo box 변경 시
        this.cb_list_onitemchanged = function(obj,e)
        {
        	if(this.cb_list.value != "-")
        		this.Grid_cbList();
        };

        //그리드 더블 클릭 시 추가
        this.Grid_LIST_oncelldblclick = function(obj,e)
        {
        	if(this.DS_CHAMJO_LIST.rowcount > 0 )
        	{
        		if(this.opener.DS_CHAMJO.rowcount > 0)
        		{
        			for(var i=0; i<this.opener.DS_CHAMJO.rowcount; i++)
        			{
        				if(nexacro.trim( this.opener.DS_CHAMJO.getColumn(i, "I_FLOW_ID" )) == nexacro.trim(this.DS_CHAMJO_LIST.getColumn(e.row, "I_FLOW_ID")) &&
        				 nexacro.trim(this.opener.DS_CHAMJO.getColumn(i, "CO_SEQ" )) == nexacro.trim(this.DS_CHAMJO_LIST.getColumn(e.row, "CO_SEQ") ))
        				{
        					alert("이미 추가한 참조문서 입니다.");
        					return;
        				}
        			}

        		}

        		if( this.opener.DS_CHAMJO.getColumn(e.row, "I_FLOW_ID" ) != this.DS_CHAMJO_LIST.getColumn(e.row, "I_FLOW_ID") )
        		{
        			this.opener.DS_CHAMJO.addRow();
        			this.opener.DS_CHAMJO.setColumn(this.opener.DS_CHAMJO.rowposition, "I_FLOW_ID",  nexacro.trim(this.DS_CHAMJO_LIST.getColumn(e.row, "I_FLOW_ID")));
        			this.opener.DS_CHAMJO.setColumn(this.opener.DS_CHAMJO.rowposition, "CO_SEQ",  nexacro.trim(this.DS_CHAMJO_LIST.getColumn(e.row, "CO_SEQ")));
        			this.opener.DS_CHAMJO.setColumn(this.opener.DS_CHAMJO.rowposition, "TITLE",   nexacro.trim(this.DS_CHAMJO_LIST.getColumn(e.row, "TITLE")));
        			this.opener.DS_CHAMJO.setColumn(this.opener.DS_CHAMJO.rowposition, "F_FNUM",  nexacro.trim(this.DS_CHAMJO_LIST.getColumn(e.row, "F_FNUM")));

        			alert("추가되었습니다");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW140_onload,this);
            this.cb_list.addEventHandler("onitemchanged",this.cb_list_onitemchanged,this);
            this.Grid_LIST.addEventHandler("oncelldblclick",this.Grid_LIST_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
        };
        this.loadIncludeScript("GW140.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
