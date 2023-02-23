(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW121");
            this.set_titletext("New Form");
            this.set_font("normal bold 10pt/normal \"Arial\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(670,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormpath", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"2\"/><Column id=\"F_NUM\" type=\"INT\" size=\"3\"/><Column id=\"F_SEQ\" type=\"INT\" size=\"2\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"APPROVAL_EMP\" type=\"STRING\" size=\"6\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPosition", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\"/></Row><Row><Col id=\"CODE\">53</Col><Col id=\"NAME\">부서장</Col></Row><Row><Col id=\"NAME\">부문장</Col><Col id=\"CODE\">52</Col></Row><Row><Col id=\"NAME\">본부장</Col><Col id=\"CODE\">51</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormpath_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"2\"/><Column id=\"F_NUM\" type=\"INT\" size=\"3\"/><Column id=\"F_SEQ\" type=\"INT\" size=\"2\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"APPROVAL_EMP\" type=\"STRING\" size=\"6\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_buse","9","11","268","690",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_buse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_insa","290","45","145","325",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_insa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\" band=\"left\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"직책\"/><Cell col=\"1\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:JIKWINM\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","415","10","55","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","471","10","135","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","608","9","49","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","352","711","83","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","259","710","83","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","290","22","46","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","296","400","361","300",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsFormpath");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1 + &quot;차&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:POSITION_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:POSITION_CODE2\" combodataset=\"dsPosition\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:POSITION_CODE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","347","376","259","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("결재라인(전결규정)");
            obj.set_color("#3cbcb8");
            obj.set_textAlign("center");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","450","70","210","74",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("1. 부서장 이상 결재라인은 자동으로\r\n   설정되며 부서장 직전까지의 \r\n   결재라인만 설정합니다.");
            obj.set_textAlign("left");
            obj.set_fittocontents("both");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("char");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","450","134","210","76",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("2. 결재라인 설정이 이상할 때에는\r\n    결재라인 초기화를 눌러 다시 \r\n    등록합니다.");
            obj.set_textAlign("left");
            obj.set_fittocontents("both");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("char");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok00","450","211","200","29",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("결재라인 초기화");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",670,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW121.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW121.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW121.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW121.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var f_num, f_fnum, f_EMPLOYEE_ID, f_SECTION_CODE;
        var gds_userinfo = nexacro.getApplication().gds_userinfo;

        this.GW121_onload = function(obj,e)
        {
        	f_num = this.parent.p_fnum;
        	f_fnum = this.parent.p_ffnum;
        	f_EMPLOYEE_ID = this.parent.p_EMPLOYEE_ID;
        	f_SECTION_CODE = this.parent.p_SECTION_CODE;

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_buse.jsp";
        	in_ds = "ds_buse=ds_buse";
        	out_ds = "ds_buse=ds_buse";
        	str_arg = "buse_nm=''" ;
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_buse_select", true, "P", false, this);

        };

        this.Callback_buse_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	//결재라인 가져오기
        	var str_url = "JSP/gw/SQL_GW121_Select1_v2.jsp";
        	var in_ds = "dsFormpath=dsFormpath";
        	var out_ds = "dsFormpath=dsFormpath";
        	var strArg = "GUBUN=01"
        			   + " F_NUM=" + 0
        			   + " SABUN=" + f_EMPLOYEE_ID;
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, strArg, "fnFormpathApprovalCallback", true, "P", false,this);
        };

        this.fnFormpathApprovalCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.dsFormpath.rowcount == 0)
        		this.fnEmployeeAdd(this.dsFormpath);	//정보가 없을 경우 개인정보 결재라인 추가
        }

        this.fnEmployeeAdd = function(obj)
        {
        	var nRow = obj.addRow();

        	obj.setColumn(nRow, "GUBUN" , "01");
        	obj.setColumn(nRow, "F_NUM" , 0);
        	obj.setColumn(nRow, "F_SEQ" , (this.dsFormpath.getMaxNF("F_SEQ").toString()).padLeft(2,"0"));
        	obj.setColumn(nRow, "SABUN" , f_EMPLOYEE_ID);
        	obj.setColumn(nRow, "SECTION_CODE" , gds_userinfo.getColumn(0,"BUSECD"));
        	obj.setColumn(nRow, "SECTION_NAME" , gds_userinfo.getColumn(0,"BUSENM"));
        	obj.setColumn(nRow, "POSITION_CODE" , gds_userinfo.getColumn(0,"JILWICD"));
        	obj.setColumn(nRow, "POSITION_NAME" , gds_userinfo.getColumn(0,"JIKWINM"));
        	obj.setColumn(nRow, "APPROVAL_EMP" , f_EMPLOYEE_ID);
        	obj.setColumn(nRow, "EMPLOYEE_NAME" , gds_userinfo.getColumn(0,"NAME"));

        	if(gds_userinfo.getColumn(0,"TEAM_MANAGER") == f_EMPLOYEE_ID)
        		obj.setColumn(nRow, "POSITION_CODE2", "54");							//부서승인자
        	else if(gds_userinfo.getColumn(0,"DEPARTMENT_MANAGER") == f_EMPLOYEE_ID)
        		obj.setColumn(nRow, "POSITION_CODE2", "53");							//부서장
        	else if(gds_userinfo.getColumn(0,"PART_DIRECTOR") == f_EMPLOYEE_ID)
        		obj.setColumn(nRow, "POSITION_CODE2", "52");							//부문장
        	else if(gds_userinfo.getColumn(0,"GENERAL_MANAGER") == f_EMPLOYEE_ID)
        		obj.setColumn(nRow, "POSITION_CODE2", "51");							//본부장
        }

        //부서선택시 직원 정보 가져오기
        this.getData_insa = function(sabun,name,busecd)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/common/getdata_insa.jsp";
        	in_ds = "ds_insa=ds_insa";
        	out_ds = "ds_insa=ds_insa";
        	str_arg = "sabun='"+sabun+"' name='"+name+"' busecd='"+busecd+"'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_insa", true, "P", false,this);
        };

        this.Callback_insa = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else
        	{
        		this.Static05.set_text('[' + this.ds_insa.rowcount + '명]');
        		trace(this.ds_insa.saveXML());
        	}

        };

        this.grd_buse_oncellclick = function(obj,e)
        {
        	this.getData_insa("","",this.ds_buse.getColumn(e.row,"CODE"));
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_name.value) == false)
        	{
        		this.getData_insa("",this.edt_name.value,"");
        	}
        };

        this.edt_name_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.btn_search_onclick(null,null);
        	}
        };

        //직원선택
        this.grd_insa_oncelldblclick = function(obj,e)
        {
        	if((this.ds_insa.getColumn(e.row, "JIKWICD") == "09")||
        		(this.ds_insa.getColumn(e.row, "JIKWICD") == "10"))
        	{
        		alert("선택할 수 없습니다");
        		return false;
        	}

        	if((!((f_SECTION_CODE == "28000") ||
                (f_SECTION_CODE == "28100") ||
                (f_SECTION_CODE == "28200") ||
                (f_SECTION_CODE == "28300") ||
                (f_SECTION_CODE == "28400") ||
                (f_SECTION_CODE == "28500") ||
                (f_SECTION_CODE == "91000"))) && (this.ds_insa.getColumn(e.row, "POSITION_CODE") == "03"))
        	{
        		alert("선택할 수 없습니다");
        		return false;
        	}

        	var i = this.dsFormpath.findRow("APPROVAL_EMP", this.ds_insa.getColumn(e.row, "SABUN"));
        	var fRow, tmp_nRow, tRow;

        	if(i != -1)
        	{
        		alert("결재자에 중복으로 선택 된 사람이 있습니다. \n확인해주세요.");
        		return false;
        	}

        	if(this.dsFormpath.findRow("POSITION_CODE2", "53") == -1)
        		fRow = this.dsFormpath.findRow("POSITION_CODE2", "51");
        	else
        		fRow = this.dsFormpath.findRow("POSITION_CODE2", "53");

        	if(fRow < 0)
        		fRow = this.dsFormpath.findRow("POSITION_CODE2", "60");
        	if(fRow < 0)
        		fRow = this.dsFormpath.findRow("EMPLOYEE_ID", "C12225");

        	this.dsFormpath_temp.copyData(this.dsFormpath);
        	this.dsFormpath.clearData();

        	tmp_nRow = 0;

        	for(var i=0; i<=this.dsFormpath_temp.rowcount; i++)
        	{
        		tRow = this.dsFormpath.addRow();

        		if(fRow == tRow)
        		{
        			this.dsFormpath.setColumn(tRow, "GUBUN", "01");
        			this.dsFormpath.setColumn(tRow, "F_NUM", 0);
        			this.dsFormpath.setColumn(tRow, "F_SEQ", i+1);
        			this.dsFormpath.setColumn(tRow, "SABUN", f_EMPLOYEE_ID);
        			this.dsFormpath.setColumn(tRow, "SECTION_CODE", this.ds_insa.getColumn(e.row, "BUSECD"));
        			this.dsFormpath.setColumn(tRow, "SECTION_NAME", this.ds_insa.getColumn(e.row, "BUSENM"));
        			this.dsFormpath.setColumn(tRow, "POSITION_CODE", this.ds_insa.getColumn(e.row, "JIKWICD"));
        			this.dsFormpath.setColumn(tRow, "POSITION_NAME", this.ds_insa.getColumn(e.row, "JIKWINM"));
        			this.dsFormpath.setColumn(tRow, "APPROVAL_EMP", this.ds_insa.getColumn(e.row, "SABUN"));
        			this.dsFormpath.setColumn(tRow, "EMPLOYEE_NAME", this.ds_insa.getColumn(e.row, "NAME"));
        			this.dsFormpath.setColumn(tRow, "POSITION_CODE2", "");
        		}else
        		{
        			this.dsFormpath.setColumn(tRow, "GUBUN", "01");
        			this.dsFormpath.setColumn(tRow, "F_NUM", 0);
        			this.dsFormpath.setColumn(tRow, "F_SEQ", i+1);
        			this.dsFormpath.setColumn(tRow, "SABUN", f_EMPLOYEE_ID);
        			this.dsFormpath.setColumn(tRow, "SECTION_CODE", this.dsFormpath_temp.getColumn(tmp_nRow, "SECTION_CODE"));
        			this.dsFormpath.setColumn(tRow, "SECTION_NAME", this.dsFormpath_temp.getColumn(tmp_nRow, "SECTION_NAME"));
        			this.dsFormpath.setColumn(tRow, "POSITION_CODE", this.dsFormpath_temp.getColumn(tmp_nRow, "POSITION_CODE"));
        			this.dsFormpath.setColumn(tRow, "POSITION_NAME", this.dsFormpath_temp.getColumn(tmp_nRow, "POSITION_NAME"));
        			this.dsFormpath.setColumn(tRow, "APPROVAL_EMP", this.dsFormpath_temp.getColumn(tmp_nRow, "APPROVAL_EMP"));
        			this.dsFormpath.setColumn(tRow, "EMPLOYEE_NAME", this.dsFormpath_temp.getColumn(tmp_nRow, "EMPLOYEE_NAME"));
        			this.dsFormpath.setColumn(tRow, "POSITION_CODE2", this.dsFormpath_temp.getColumn(tmp_nRow, "POSITION_CODE2"));
        			tmp_nRow += 1;
        		}

        	}
        };

        //결재라인 초기화
        this.btn_ok00_onclick = function(obj,e)
        {
        	var str_url = "JSP/gw/SQL_GW121_Delete.jsp";
        	var strArg = "GUBUN=01"
        				+ " SABUN=" + f_EMPLOYEE_ID;

        	this.gfn_TransactionP("delete", str_url, "", "", strArg, "fnDeleteCallback", true, "P", false,this);

        };

        this.fnDeleteCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		//결재라인 가져오기
        		var str_url = "JSP/gw/SQL_GW121_Select1_v2.jsp";
        		var in_ds = "dsFormpath=dsFormpath";
        		var out_ds = "dsFormpath=dsFormpath";
        		var strArg = "GUBUN=01"
        				   + " F_NUM=" + 0
        				   + " SABUN=" + f_EMPLOYEE_ID;
        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, strArg, "fnFormpathApprovalCallback", true, "P", false,this);
        	}

        }

        //결재자 제거
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	if(e.cell != 3)
        	{
        		if(f_EMPLOYEE_ID == this.dsFormpath.getColumn(e.row, "APPROVAL_EMP"))
        			alert("사용자 본인은 삭제할 수 없습니다.");
        		else if ( (this.dsFormpath.getColumn(e.row, "POSITION_CODE2") == "51") ||
        				 (this.dsFormpath.getColumn(e.row, "POSITION_CODE2") == "53") ||
        				 (this.dsFormpath.getColumn(e.row, "POSITION_NAME") == "부사장") ||
        				 (this.dsFormpath.getColumn(e.row, "POSITION_NAME") == "감사") ||
        				 (this.dsFormpath.getColumn(e.row, "POSITION_NAME") == "사장") ||
        				 (this.dsFormpath.getColumn(e.row, "POSITION_NAME") == "회장") )
        			alert("부서장 이상 결재자는 삭제할 수 없습니다.");
        		else if( this.confirm("삭제하시겠습니까?") )
        			this.dsFormpath.deleteRow(e.row);
        	}

        };

        //확인
        this.btn_ok_onclick = function(obj,e)
        {
        	var str_url = "JSP/gw/SQL_GW121_Insert.jsp";
        	var inds = "dsFormpath=dsFormpath:A";

        	this.gfn_TransactionP("select", str_url, inds, "", "", "fnFormpathSaveCallback", true, "P", false,this);
        };

        this.fnFormpathSaveCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.opener.dsFormpath.copyData(this.dsFormpath);

        		alert("결재라인이 지정되었습니다. 최종적으로 해당 결의서를 저장하셔야 적용됩니다.");
        		this.close("ok");
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
            this.addEventHandler("onload",this.GW121_onload,this);
            this.grd_buse.addEventHandler("oncellclick",this.grd_buse_oncellclick,this);
            this.grd_insa.addEventHandler("oncelldblclick",this.grd_insa_oncelldblclick,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_ok00.addEventHandler("onclick",this.btn_ok00_onclick,this);
        };
        this.loadIncludeScript("GW121.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
