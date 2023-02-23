(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SelectTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_setData", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hr121_01", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB2\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","30","90","300","586",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("조직도");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","3","298","553",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dept_tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_border("1px solid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"bind:BU_NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treecheck=\"bind:BU_GRCODE\" treelevel=\"bind:BU_LEVEL\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("검색");
            this.Tab00.addChild(obj.name, obj);

            obj = new Edit("Edit00","50","51","102","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","50","80","102","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","16","50","39","19",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00","16","79","39","19",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("사번");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00","168","50","104","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","24","21","906","49",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인자료조회");
            obj.set_background("lightgray");
            obj.set_textAlign("center");
            obj.set_font("26px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","345","120","315","480",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_hr121_01");
            obj.set_autofittype("col");
            obj.set_border("1px solid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"BUSE\"/><Cell col=\"1\" text=\"JIKWI\"/><Cell col=\"2\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSE\"/><Cell col=\"1\" text=\"bind:JIKWI\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","343","95","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[ 0 명 ]");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","343","614","124","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("최종학력");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","343","647","124","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주소");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","675","367","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사번");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","675","396","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사원구분");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","675","425","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("성별");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","675","454","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("나이");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","675","483","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전화");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00","675","512","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("핸드폰");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00","675","541","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입사일");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00","675","338","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("성명");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00_00","675","309","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("직책");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00_00_00","675","570","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("퇴사일");
            obj.set_background("lightblue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","682","121","245","179",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","745","309","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","745","338","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","745","366","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","745","394","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","745","424","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","745","454","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","745","483","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00","745","513","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00","745","542","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00_00","745","572","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00_00_00","478","613","449","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00_00_00_00","478","647","449","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_hr121_01","JIKWI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00","value","ds_hr121_01","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00_00","value","ds_hr121_01","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_00_00_00","value","ds_hr121_01","SA_GB1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit00_00_00_00_00","value","ds_hr121_01","SEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit00_00_00_00_00_00","value","ds_hr121_01","AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit00_00_00_00_00_00_00","value","ds_hr121_01","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Edit00_00_00_00_00_00_00_00","value","ds_hr121_01","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Edit00_00_00_00_00_00_00_00_00","value","ds_hr121_01","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Edit00_00_00_00_00_00_00_00_00_00","value","ds_hr121_01","TOISADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Edit00_00_00_00_00_00_00_00_00_00_00","value","ds_hr121_01","SCHOOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Edit00_00_00_00_00_00_00_00_00_00_00_00","value","ds_hr121_01","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SelectTest_Mybatis.xfdl", function() {
        /***********************************************************/
        /* 작성&수정일자 : 2022/10/04
        /* 설명 : 넥사 컨버전 대비 테스트 공수체크
        /***********************************************************/

        var str_svcId, str_url, str_inDs, str_outDs, str_arg, str_callback;

        /** 부서 트리 조회 */
        this.SelectTest_onload = function(obj,e)
        {
        	str_svcId = "select_tree";
        	str_url = "testURL::selectTree";
        	str_inDs = "";
        	str_outDs = "ds_dept_tree=ds_dept_tree";
        	str_arg = "";
        	str_callback = "fn_callback";

        	this.transaction(str_svcId, str_url, str_inDs, str_outDs, str_arg, str_callback, 2);
        };

        /** 개인자료 조회 */
        this.Grid00_oncellclick = function(obj,e)
        {
        	var strBuse = "";
        	strBuse = this.ds_dept_tree.getColumn(obj.currentrow, "CODE");
        	this.ds_setData.setColumn(0,"BUSECD",strBuse);

        	if(strBuse != "") {
        		var option = {
        			  svcId    	: "select_list"
        			, svcUrl   	: "testURL::conversion"
        			, argument 	: ""
        			, inDs	 	: "ds_setData=ds_setData"
        			, outDs    	: "ds_hr121_01=ds_hr121_01"
        			, callback 	: "fn_callback"
        			, async    	: true
        		};

        		this.gfn_Transaction(this, option);
        	}
        };

        this.Tab00_Tabpage2_Button00_onclick = function(obj,e)
        {
        	var strName = this.Tab00.Tabpage2.form.Edit00.text;
        	var strSabun = this.Tab00.Tabpage2.form.Edit00_00.text;

        	str_svcId = "select_list";
        	str_url = "testURL::conversion";
        	str_inDs = "";
        	str_outDs = "ds_hr121_01=ds_hr121_01";
        	str_arg  = "strBuse=";
        	str_arg += " strSabun="+strSabun;
        	str_arg += " strName="+strName;
        	str_callback = "fn_callback";

        	this.transaction(str_svcId, str_url, str_inDs, str_outDs, str_arg, str_callback, 1);
        };

        this.Grid01_oncellclick = function(obj,e)
        {
        	this.ImageViewer00.set_image("http://cjtb-erp.chunjae.co.kr/erptextbook/hr/img/"+this.ds_hr121_01.getColumn(obj.currentrow, "IMG_NAME"));
        };

        this.fn_callback = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0) this.alert(eCode + " : " + eMsg);

        	switch (svcId)
        	{
        		case "select_tree" :
        		break;
        		case "select_list" :
        			this.ImageViewer00.set_image("http://cjtb-erp.chunjae.co.kr/erptextbook/hr/img/"+this.ds_hr121_01.getColumn(obj.currentrow, "IMG_NAME"));
        			this.Static01.set_text("[ " + this.ds_hr121_01.rowcount + " 명 ]");
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SelectTest_onload,this);
            this.addEventHandler("onkeydown",this.SelectTest_onkeydown,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Tab00.Tabpage2.form.Button00.addEventHandler("onclick",this.Tab00_Tabpage2_Button00_onclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
        };
        this.loadIncludeScript("SelectTest_Mybatis.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
