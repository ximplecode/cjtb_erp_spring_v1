(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW120");
            this.set_titletext("New Form");
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


            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"name\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">결재자</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">합의자</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">담당자</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">최종결재자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_K", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_H", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_D", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_C", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_insa","287","45","117","655",null,null,null,null,null,null,this);
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

            obj = new Radio("Radio","410","47","88","653",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_color("#7fb39d");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_text("결재자");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_K","528","80","120","123",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("DS_GW_K");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","528","53","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("결재자");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","530","210","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("합의자");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","530","370","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("담당자");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","530","535","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("최종결재자");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_H","530","240","120","123",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("DS_GW_H");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_D","530","400","120","100",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("DS_GW_D");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_C","531","567","120","123",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("DS_GW_C");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","259","710","83","29",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("확인");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","290","22","46","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","500","78","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","500","103","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","500","127","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","500","152","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03","500","178","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","502","239","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","502","264","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","502","288","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","502","313","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_00","502","339","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_05","503","398","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","503","423","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","503","447","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_01","503","472","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_06","505","566","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("1차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","505","591","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("2차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_02","505","615","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("3차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_02","505","640","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("4차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03_02","505","666","24","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("5차");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",670,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW120.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW120.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW120.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW120.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var f_num;
        var f_fnum;

        var gds_userinfo = nexacro.getApplication().gds_userinfo;

        this.GW120_onload = function(obj,e)
        {
        	f_num = this.parent.p_fnum;
        	f_fnum = this.parent.p_ffnum;

        	this.DS_GW_K.copyData(this.parent.p_DS_GW_K);
        	this.DS_GW_H.copyData(this.parent.p_DS_GW_H);
        	this.DS_GW_C.copyData(this.parent.p_DS_GW_C);
        	this.DS_GW_D.copyData(this.parent.p_DS_GW_D);
        	this.DS_GW_U.copyData(this.parent.p_DS_GW_U);

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

        	//gds_userinfo 이용해서 DS_GW_U (작성자 정보 넣어주기)
        	this.DS_GW_U.addRow();

        	this.DS_GW_U.setColumn(0, 'NO', '1');
        	this.DS_GW_U.setColumn(0, 'GUBUN', '01');
        	this.DS_GW_U.setColumn(0, 'BUSECD',  gds_userinfo.getColumn(0,"BUSECD"));
        	this.DS_GW_U.setColumn(0, 'BUSE', gds_userinfo.getColumn(0,"BUSENM"));
        	this.DS_GW_U.setColumn(0, 'JIKWI', gds_userinfo.getColumn(0,"JIKWINM"));
        	this.DS_GW_U.setColumn(0, 'SABUN', gds_userinfo.getColumn(0,"SABUN"));
        	this.DS_GW_U.setColumn(0, 'NAME', gds_userinfo.getColumn(0,"NAME"));

        	//결재라인 가져오기
        	if(f_num != null && f_fnum != "117")
        	{
        		this.lfn_I_FLOW_ORDER_LOAD("01", f_num,  gds_userinfo.getColumn(0,"SABUN"), this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        	}
        };

        this.chk_ds = function(svcId, errCode, errMsg)
        {

        	trace(this.DS_GW_K.saveXML());
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		trace(this.DS_GW_K.saveXML());
        		trace(this.DS_GW_H.saveXML());
        		trace(this.DS_GW_C.saveXML());
        		trace(this.DS_GW_D.saveXML());
        }

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


        this.btn_ok_onclick = function(obj,e)
        {
        	this.close_chk();

        	trace(this.DS_GW_K.saveXML());
        	trace(this.DS_GW_H.saveXML());
        	trace(this.DS_GW_C.saveXML());
        	trace(this.DS_GW_D.saveXML());

        	this.opener.DS_GW_K.copyData(this.DS_GW_K);
        	this.opener.DS_GW_H.copyData(this.DS_GW_H);
        	this.opener.DS_GW_C.copyData(this.DS_GW_C);
        	this.opener.DS_GW_D.copyData(this.DS_GW_D);

        	this.close("ok");
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close_chk();

        	trace(this.DS_GW_K.saveXML());
        	trace(this.DS_GW_H.saveXML());
        	trace(this.DS_GW_C.saveXML());
        	trace(this.DS_GW_D.saveXML());

        	this.opener.DS_GW_K.copyData(this.DS_GW_K);
        	this.opener.DS_GW_H.copyData(this.DS_GW_H);
        	this.opener.DS_GW_C.copyData(this.DS_GW_C);
        	this.opener.DS_GW_D.copyData(this.DS_GW_D);

        	this.close();
        };

        this.close_chk = function()
        {
        	for(var i=0; i <= this.DS_GW_K.rowcount -1; i++)
        	{
        		for(var j=0; j <= this.DS_GW_C.rowcount -1; j++)
        		{
        			if(this.DS_GW_K.getColumn(i, "SABUN") == this.DS_GW_C.getColumn(j,"SABUN"))
        			{
        				alert("결재자에 최종결재자와 중복으로 선택된 사람이 있습니다. \n 확인해주세요.");
        				this.DS_GW_K.ClearData();
        				return;
        			}
        		}
        	}
        }

        //결재라인 설정
        this.grd_insa_oncelldblclick = function(obj,e)
        {
        	if(this.Radio.value == "01") //결재자
        	{
        		if(gds_userinfo.getColumn(0, 'SABUN') == this.ds_insa.getColumn(e.row, 'SABUN'))
        		{
        			alert("본인은 결재라인에 설정하실 수 없습니다");
        			this.DS_GW_K.clearData();
        			return;
        		}

        		if(f_num == '1' || f_num == '78' || f_num == '80') //기안관련 문서
        		{
        			if( nexacro.trim(this.ds_insa.getColumn(e.row, 'SABUN')) == 'C81002' ||
        				nexacro.trim(this.ds_insa.getColumn(e.row, 'SABUN')) == 'C12225' )
        			{
        				alert("기안관련 문서에서는 사장님, 회장님은 '최종결제란'에 설정하셔야합니다. 결재라인을 재설정 해주십시오!");
        				return;
        			}

        		}

        		if(this.DS_GW_K.rowcount > 0)
        		{
        			for(var k=0; k<=this.DS_GW_K.rowcount -1; k++)
        			{
        				if(this.DS_GW_K.getColumn(k, "SABUN") == this.ds_insa.getColumn(e.row,"SABUN"))
        				{
        					alert("이미 선택하신 이름입니다.\n다른 사람을 선택하여 주세요.");
        					return;
        				}
        			}
        		}

        		if(this.DS_GW_K.rowcount != "5")
        		{
        			var irow = this.DS_GW_K.addRow();

        			//alert("irow ==> " + irow);

        			//var num = substr("0",0,1-length(tostring((DS_GW_K.RowCount())))) + tostring((DS_GW_K.RowCount()));

        			this.DS_GW_K.setColumn(this.DS_GW_K.rowcount-1,"NO", irow+1);
        			this.DS_GW_K.setColumn(this.DS_GW_K.rowposition,"BUSECD", this.ds_insa.getColumn(e.row,"BUSECD"));
        			this.DS_GW_K.setColumn(this.DS_GW_K.rowposition,"BUSE", this.ds_insa.getColumn(e.row,"BUSENM"));
        			this.DS_GW_K.setColumn(this.DS_GW_K.rowposition,"JIKWI", this.ds_insa.getColumn(e.row,"JIKWINM"));
        			this.DS_GW_K.setColumn(this.DS_GW_K.rowposition,"SABUN", this.ds_insa.getColumn(e.row,"SABUN"));
        			this.DS_GW_K.setColumn(this.DS_GW_K.rowposition,"NAME", this.ds_insa.getColumn(e.row,"NAME"));
        		}
        		else
        		{
        			alert("최대 5명까지 선택가능합니다.");
        		}

        		trace(this.DS_GW_K.saveXML());
        	}

        	else if(this.Radio.value == "02") //합의자
        	{
        		if(this.DS_GW_H.rowcount > 0)
        		{
        			for(var k=0; k<=this.DS_GW_H.rowcount -1; k++)
        			{
        				if(this.DS_GW_H.getColumn(k, "SABUN") == this.ds_insa.getColumn(e.row,"SABUN"))
        				{
        					alert("이미 선택하신 이름입니다.\n다른 사람을 선택하여 주세요.");
        					return;
        				}
        			}
        		}

        		if(this.DS_GW_H.rowcount != "5")
        		{
        			var irow = this.DS_GW_H.addRow();

        			this.DS_GW_H.setColumn(this.DS_GW_H.rowcount-1,"NO", irow+1);
        			this.DS_GW_H.setColumn(this.DS_GW_H.rowposition,"BUSECD", this.ds_insa.getColumn(e.row,"BUSECD"));
        			this.DS_GW_H.setColumn(this.DS_GW_H.rowposition,"BUSE", this.ds_insa.getColumn(e.row,"BUSENM"));
        			this.DS_GW_H.setColumn(this.DS_GW_H.rowposition,"JIKWI", this.ds_insa.getColumn(e.row,"JIKWINM"));
        			this.DS_GW_H.setColumn(this.DS_GW_H.rowposition,"SABUN", this.ds_insa.getColumn(e.row,"SABUN"));
        			this.DS_GW_H.setColumn(this.DS_GW_H.rowposition,"NAME", this.ds_insa.getColumn(e.row,"NAME"));
        		}
        		else
        		{
        			alert("최대 5명까지 선택가능합니다.");
        		}

        	}
        	else if(this.Radio.value == "03") //담당자
        	{
        		if(this.DS_GW_D.rowcount > 0)
        		{
        			for(var k=0; k<=this.DS_GW_D.rowcount -1; k++)
        			{
        				if(this.DS_GW_D.getColumn(k, "SABUN") == this.ds_insa.getColumn(e.row,"SABUN"))
        				{
        					alert("이미 선택하신 이름입니다.\n다른 사람을 선택하여 주세요.");
        					return;
        				}
        			}
        		}

        		if(this.DS_GW_D.rowcount != "4")
        		{
        			var irow = this.DS_GW_D.addRow();

        			this.DS_GW_D.setColumn(this.DS_GW_D.rowcount-1,"NO", irow+1);
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition,"BUSECD", this.ds_insa.getColumn(e.row,"BUSECD"));
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition,"BUSE", this.ds_insa.getColumn(e.row,"BUSENM"));
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition,"JIKWI", this.ds_insa.getColumn(e.row,"JIKWINM"));
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition,"SABUN", this.ds_insa.getColumn(e.row,"SABUN"));
        			this.DS_GW_D.setColumn(this.DS_GW_D.rowposition,"NAME", this.ds_insa.getColumn(e.row,"NAME"));
        		}
        		else
        		{
        			alert("최대 4명까지 선택가능합니다.");
        		}


        	}
        	else if(this.Radio.value == "04") //최종결재자
        	{
        		if(this.DS_GW_C.rowcount > 0)
        		{
        			for(var k=0; k<=this.DS_GW_C.rowcount -1; k++)
        			{
        				if(this.DS_GW_C.getColumn(k, "SABUN") == this.ds_insa.getColumn(e.row,"SABUN"))
        				{
        					alert("이미 선택하신 이름입니다.\n다른 사람을 선택하여 주세요.");
        					return;
        				}
        			}
        		}

        		if(f_num =='1' || f_num == '78' || f_num == '80') // 기안관련 문서, 전무님, 이사님, 정용환
        		{
        			if( nexacro.trim(this.ds_insa.getColumn(e.row, 'SABUN')) == 'C81001' &&
        				nexacro.trim(this.ds_insa.getColumn(e.row, 'SABUN')) == 'C12225' &&
        				nexacro.trim(this.ds_insa.getColumn(e.row, 'SABUN')) == 'C81002')
        			{
        				alert("기안관련 문서에서는 사장님, 회장님을 제외한 임원(이사,상무,전무,부사장)님은 '결재자란'에 설정하셔야합니다. 결재라인을 재설정 해주십시오!");
        				return;
        			}
        		}

        		if(f_num =='1' || f_num == '78' || f_num == '80') // 기안관련 문서, 전무님, 이사님, 정용환
        		{
        			if( nexacro.trim(this.ds_insa.getColumn(e.row, 'SABUN')) == 'C12225')
        			{
        				alert("계약관련 문서에서는 회장님을 '제외'하고 결재라인을 설정하셔야합니다. 결재라인을 재설정 해주십시오!");
        				return;
        			}
        		}

        		if(this.DS_GW_C.rowcount != "5")
        		{
        			var irow = this.DS_GW_C.addRow();

        			this.DS_GW_C.setColumn(this.DS_GW_C.rowcount-1,"NO", irow+1);
        			this.DS_GW_C.setColumn(this.DS_GW_C.rowposition,"BUSECD", this.ds_insa.getColumn(e.row,"BUSECD"));
        			this.DS_GW_C.setColumn(this.DS_GW_C.rowposition,"BUSE", this.ds_insa.getColumn(e.row,"BUSENM"));
        			this.DS_GW_C.setColumn(this.DS_GW_C.rowposition,"JIKWI", this.ds_insa.getColumn(e.row,"JIKWINM"));
        			this.DS_GW_C.setColumn(this.DS_GW_C.rowposition,"SABUN", this.ds_insa.getColumn(e.row,"SABUN"));
        			this.DS_GW_C.setColumn(this.DS_GW_C.rowposition,"NAME", this.ds_insa.getColumn(e.row,"NAME"));
        		}
        		else
        		{
        			alert("최대 5명까지 선택가능합니다.");
        		}
        	}

        };

        this.Grid_K_oncelldblclick = function(obj,e)
        {
        	this.DS_GW_K.deleteRow(e.row);
        };

        this.Grid_H_oncelldblclick = function(obj,e)
        {
        	if(f_fnum == '7' || f_fnum == '2') //편집관리, 근태관리
        	{
        		alert('합의자 : 관리자가 지정했으므로 더 이상 편집할 수 없습니다.');
        		return;
        	}
        	else
        	{
        		this.DS_GW_H.deleteRow(e.row);
        	}
        };

        this.Grid_D_oncelldblclick = function(obj,e)
        {
        	this.DS_GW_D.deleteRow(e.row);
        };

        this.Grid_C_oncelldblclick = function(obj,e)
        {
        	if(f_fnum == '2' || f_fnum == '7')
        	{
        		alert('최종결재자 : 관리자가 지정했으므로 더 이상 편집할 수 없습니다.');
        		return;
        	}
        	else
        	{
        		this.DS_GW_C.deleteRow(e.row);
        	}
        };

        this.Radio_canitemchange = function(obj,e)
        {
        	var strckName = "";

        	if (f_fnum == "6" ||f_fnum == "7" )
        	{
        		if (f_fnum == "6")
        			strckName = "지급결의서";
        		else if (f_fnum == "7")
        			strckName = "편집관리";

        		if(this.Radio.value === '02')
        		{
        			alert("죄송합니다.\n"+ strckName +"에서는 합의자를 선택하실 수 없습니다.");
        			this.Radio.value = "01";
        			return;
        		}
        	}

        	if (f_num == "13" ||f_num == "10"||f_num == "18"||f_num == "22"||f_num == "23"||f_num == "24"||f_num == "25")
        	{
        		if (f_num == "13")
        			strckName = "출장 비용 신청서 ";
        		else if (f_num == "10")
        			strckName = "경조금신청서 ";
        		else if (f_num == "18")
        			strckName = "사진구입신청서 ";
        		else if (f_num == "22")
        			strckName = "출고증 ";
        		else if (f_num == "23")
        			strckName = "물품구매신청서(사무)";
        		else if (f_num == "24")
        			strckName = "물품구매신청서(PC)";
        		else if (f_num == "25")
        			strckName = "물품구매신청서(수리)";

        		if(this.Radio.value == "04" )
        		{
        			alert("죄송합니다.\n"+ strckName +"에서는 최종결재자를 선택하실 수 없습니다.");
        			this.Radio.value = "01";
        			return;
        		}
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW120_onload,this);
            this.grd_buse.addEventHandler("oncellclick",this.grd_buse_oncellclick,this);
            this.grd_insa.addEventHandler("oncelldblclick",this.grd_insa_oncelldblclick,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Radio.addEventHandler("canitemchange",this.Radio_canitemchange,this);
            this.Grid_K.addEventHandler("oncelldblclick",this.Grid_K_oncelldblclick,this);
            this.Grid_H.addEventHandler("oncelldblclick",this.Grid_H_oncelldblclick,this);
            this.Grid_D.addEventHandler("oncelldblclick",this.Grid_D_oncelldblclick,this);
            this.Grid_C.addEventHandler("oncelldblclick",this.Grid_C_oncelldblclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };
        this.loadIncludeScript("GW120.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
