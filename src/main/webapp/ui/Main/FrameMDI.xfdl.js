(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameMDI");
            this.set_titletext("");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_OpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MDI_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Left","0","0","30","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_MDI","40","0",null,"29","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_MDI);
            this.tab_MDI.addChild(obj.name, obj);

            obj = new Button("btn_CloseAll",null,"2","24","20","6",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_viewClose");
            obj.set_text("X");
            obj.set_tooltiptext("전체닫기");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_OpenList","820","55","198","244",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","0","0",null,null,"0","0",null,null,null,null,this.pdv_OpenList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_OpenList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" cssclass=\"cell_left\"/></Band></Format></Formats>");
            this.pdv_OpenList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1020,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameMDI.xfdl", function() {
        /************************************************************************************************
         * 1. FORM 변수 선언 영역
         ************************************************************************************************/
        var objApp = nexacro.getApplication();
        this.fv_flag = false;
        this.fv_btn_flag = false;
        /************************************************************************************************
         * 2. FORM EVENT 영역(onload)
         ************************************************************************************************/
        /**
        * @description onload 이벤트
         */
        this.form_onload = function(obj,e)
        {
        	this.fn_Init(obj);
        };

        /**
         * @class  화면 초기화 정의 <br>
         * @param  {Object} obj - nexacro.Form
         * @return N/A
         */
        this.fn_Init = function(obj)
        {
        	this._gfn_AddLoadFrame(obj.name);
        	// Tabpage 초기화
        	while (this.tab_MDI.getTabpageCount() > 0) {
        		this.tab_MDI.removeTabpage(0);
        	}

        	// 전용 브라우저
        	if (system.navigatorname == "nexacro") {
        		this.tab_MDI.set_top(2);
        	}
        };

        /************************************************************************************************
         * 3. TRANSACTION 서비스 호출 처리
         ************************************************************************************************/


        /************************************************************************************************
         * 4. CALLBACK 함수 처리부분
         ************************************************************************************************/


        /************************************************************************************************
         * 5. 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @class  기본정보 설정 <br>
         */
        this.fn_SetInfo = function()
        {
        	//workFrame갯수 0인 경우 main 보여지도록 설정
        	var objApp   = this.gfn_GetApp();
        	var frameLen = objApp.gv_WorkFrame.frames.length;

        	if(frameLen < 2){
        		this.btn_Left.set_visible(false);
        		this.btn_CloseAll.set_visible(false);

        		var objChild = new ChildFrame;
        		objApp.gv_WorkFrame.addChild("", objChild);
        		objChild.arguments = [];
        		objChild.set_dragmovetype("all");
        		objChild.set_showtitlebar(false);
        		objChild.set_resizable(true);
        		objChild.set_openstatus("maximize");
        		objChild.arguments["winId"] 		= "";
        		objChild.arguments["menuId"] 		= "";
        		objChild.arguments["menuNm"] 		= "";
        		objChild.arguments["prefix"] 		= "";
        		objChild.arguments["formId"] 		= "";
        		objChild.arguments["formUrl"] 		= "Main::WorkBody.xfdl";
        		objChild.set_formurl("Main::FrameWork.xfdl");

        		objChild.addEventHandler("onsyscommand", this._onsyscommand, this);
        		objChild.show();
        	}
        };

        /**
         * @class  Tab에 tabpage(MDI) 추가 <br>
         * @param  N/A
         * @param  {String} winId - window ID
         * @param  {String} menuNm - 메뉴명
         * @param  {String} menuId - 메뉴ID
         * @return N/A
         */
        this.fn_AddTab = function(winId, menuNm, menuId)
        {
        	if(winId !=""){
        		this.btn_Left.set_visible(true);
        		this.btn_CloseAll.set_visible(true);
        	}

        	var idx = this.tab_MDI.insertTabpage(winId, -1, "", menuNm);
        	this.tab_MDI.tabpages[idx].set_tooltiptext(menuNm);

        	var row = this.ds_OpenList.addRow();
        	this.ds_OpenList.setColumn(row, "WIN_ID", winId);
        	this.ds_OpenList.setColumn(row, "MENU_ID", menuId);
        	this.ds_OpenList.setColumn(row, "MENU_NM", menuNm);
        };

        /**
         * @class  Tab의 tabpage(MDI) 삭제 <br>
         * @param  {Number | String} idx - tabpage index | window ID
         * @return N/A
         */
        this.fn_DeleteTabpage = function(idx)
        {
        	var objApp = this.gfn_GetApp();
        	if (this.gfn_IsNull(idx)) {
        		// LeftFrame 접음
        		this.tab_MDI.set_visible(false);
        		objApp.gv_WorkFrame.set_visible(false);

        		// 1. fn_Close 확인
        		var len = objApp.gv_WorkFrame.frames.length;
        		var ret = true;

        		for (var i = 0; i < len; i++) {
        			var objFrame = objApp.gv_WorkFrame.frames[i];
        			var objFnc = objFrame.form.div_Work.form["fn_Close"];

        			// 함수 있는 경우
        			if (!this.gfn_IsNull(objFnc)) {
        				this.fn_SetTabIndex(objFrame.name);
        				objFrame.setFocus();
        				objFrame.form.div_CommBtn.form.btn_Close.setFocus();
        				ret = objFnc.call(objFrame.form.div_Work.form);

        				if (ret == false) {
        					this.tab_MDI.set_visible(true);
        					objApp.gv_WorkFrame.set_visible(true);
        					objFrame.setFocus();
        					return false;
        				}
        			}
        		}

        		// 2. Tabpage 초기화
        		while (this.tab_MDI.getTabpageCount() > 0) {
        			this.tab_MDI.removeTabpage(0);
        		}

        		// 3. Dataset 초기화
        		this.ds_OpenList.clearData();

        		// 4. 화면 닫기
        		for (var i = len - 1; i > -1 ; i--) {
        			objApp.gv_WorkFrame.frames[i].form.close();
        		}

        		this.tab_MDI.set_visible(true);
        		objApp.gv_WorkFrame.set_visible(true);
        	} else {
        		// 1. winId / idx 확인
        		var winId = "";
        		if (this.gfn_IsNumber(idx)) {
        			var objTabpage = this.tab_MDI.tabpages[idx];
        			winId = objTabpage.name;
        		} else {
        			winId = idx;

        			for (var i = 0; i < this.tab_MDI.getTabpageCount(); i++) {
        				if (winId == this.tab_MDI.tabpages[i].name) {
        					idx = i;
        					break;
        				}
        			}
        		}

        		// 2. fn_Close 확인
        		var objFrame = objApp.gv_WorkFrame.frames[winId];
        		var objFnc = objFrame.form.div_Work.form["fn_Close"];
        		var ret = true;

        		// 3. 함수 있는 경우
        		if (!this.gfn_IsNull(objFnc)) {
        			this.fn_SetTabIndex(objFrame.name);
        			objFrame.form.div_CommBtn.form.btn_Close.setFocus();
        			ret = objFnc.call(objFrame.form.div_Work.form);
        		}

        		if (ret != false) {
        			// 5. Dataset 삭제
        			var row = this.ds_OpenList.findRow("WIN_ID", winId);
        			this.ds_OpenList.deleteRow(row);

        			// 6. 화면 닫기
        			objFrame.form.close();

        			// 7. 삭제 후 다음 tabpage 설정
        			var objApp = this.gfn_GetApp();
        			var activeFrame = objApp.gv_WorkFrame.getActiveFrame();
        			if (!this.gfn_IsNull(activeFrame)) {
        				for (var i = 0; i < this.tab_MDI.getTabpageCount(); i++) {
        					if (activeFrame.name == this.tab_MDI.tabpages[i].name) {
        						this.fv_flag = true;
        						//this.fv_flag = false;
        						this.tab_MDI.set_tabindex(i);
        						break;
        					}
        				}
        			}

        			// remove 시 mdi onchange 이벤트 발생하여 2번 수행됨
        			// 이를위해 4 - 7번의 순서 변경

        			// 4. Tabpage 삭제
        			this.tab_MDI.removeTabpage(idx);
        		}
        	}

        	if( this.fv_flag != true && this.tab_MDI.tabindex != -1 ) {
        		var objTabpage = this.tab_MDI.tabpages[this.tab_MDI.tabindex];
        		this.fn_SetFocusForm(objTabpage.name);
        	}
        	this.fv_flag = false;

        };

        /**
         * @class  Left Frame 접고 / 펼치기 <br>
         * @param  {String} type - 접기 / 펼치기 / 자동
         *                  expand : 펼치기
         *                  collapse : 접기
         *                  null : 자동
         * @return N/A
         */
        this.fn_SetLeftFrameSize = function(type)
        {
        	var objApp = this.gfn_GetApp();
        	if (this.gfn_IsNull(type)) {
        		if (this.btn_Left.cssclass == "btn_MDI_collapseLF") { // ◀
        			objApp.gv_HFrameSet.set_separatesize("0,*");
        			this.btn_Left.set_cssclass("btn_MDI_expandLF"); // ▶
        		} else {
        			objApp.gv_HFrameSet.set_separatesize("260,*");
        			this.btn_Left.set_cssclass("btn_MDI_collapseLF"); // ◀
        		}
        	} else if (type == "expand") {
        		objApp.gv_HFrameSet.set_separatesize("260,*");
        		this.btn_Left.set_cssclass("btn_MDI_collapseLF"); // ◀
        	} else if (type == "collapse") {
        		objApp.gv_HFrameSet.set_separatesize("0,*");
        		this.btn_Left.set_cssclass("btn_MDI_expandLF"); // ▶
        	}
        };

        /**
         * @class  화면 Set Focus <br>
         * @param  {String} winId - window ID
         * @return N/A
         */
        this.fn_SetFocusForm = function(winId)
        {
        	var objApp = this.gfn_GetApp();
        	var objFrame = objApp.gv_WorkFrame.frames[winId];
        	objFrame.form.fn_SetMenuPosition();
        	objFrame.setFocus();
        };

        /**
         * @class  Tabpage Set Index <br>
         * @param  {String} winId - window ID
         * @return N/A
         */
        this.fn_SetTabIndex = function(winId, flag)
        {
        	var objApp = this.gfn_GetApp();
        	var objFrame = objApp.gv_WorkFrame.frames[winId];
        	objFrame.setFocus();

        	for (var i = 0; i < this.tab_MDI.getTabpageCount(); i++) {
        		if (winId == this.tab_MDI.tabpages[i].name) {
        			this.tab_MDI.set_tabindex(i);
        			break;
        		}
        	}
        };

        /**
         * @class  Tabpage Set Index <br>
         * @param  {String} winId - window ID
         * @return N/A
         */
        this.fn_SetTabIndex2 = function(winId)
        {
        	this.fv_Flag = true;

        	for (var i = 0; i < this.tab_MDI.getTabpageCount(); i++) {
        		if (winId == this.tab_MDI.tabpages[i].name) {
        			this.tab_MDI.set_tabindex(i);
        			break;
        		}
        	}
        };

        /**
         * @class  FrameSet의 자식 Frame을 정렬 <br>
         * @param  {Object} obj - Button
         * @param  {Event} e - ClickEventInfo
         * @return N/A
         */
        this.fn_Arrange = function(obj,e)
        {
        	var arrTmp = obj.name.split("_");
        	var type = arrTmp[1].toLowerCase();
        	var objApp = this.gfn_GetApp();

        	switch (type) {
        		case "maximize" :
        			for (var i = 0; i < objApp.gv_WorkFrame.frames.length; i++) {
        				var objFrame = objApp.gv_WorkFrame.frames[i];

        				// FrameWork >> child_onsyscommand 에서 처리
        				objFrame.set_openstatus("maximize");
        			}

        			break;

        		case "horizontal" :
        		case "vertical" :
        			for (var i = 0; i < objApp.gv_WorkFrame.frames.length; i++) {
        				var objFrame = objApp.gv_WorkFrame.frames[i];
        				objFrame.set_showtitlebar(true);
        				objFrame.set_border("1px solid #000000");
        				objFrame.set_openstatus("normal");
        				objFrame.titlebar.closebutton.set_enable(false);
        			}

        			objApp.gv_WorkFrame.arrange(type);
        			break;

        		default :
        			break;
        	}
        };

        /**
         * @description flag 초기화 <br>
         */
        this.fn_InitFalg = function()
        {
        	this.fv_flag = false;
        };

        this.fn_InitFalg2 = function()
        {
        	this.fv_flag = true;
        };
        /************************************************************************************************
         * 6. 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // Left Frame 접고 / 펼치기
        this.btn_Left_onclick = function(obj,e)
        {

        	if(this.fv_btn_flag == false){
        		this.btn_Left.set_text(">>");
        		this.fv_btn_flag = true;
        	}
        	else{
        		this.btn_Left.set_text("<<");
        		this.fv_btn_flag = false;
        	}
        	this.fn_SetLeftFrameSize();
        };

        // 화면닫기
        this.tab_MDI_onextrabuttonclick = function(obj,e)
        {
        	this.fn_DeleteTabpage(e.index);
        	this.fn_SetInfo();

        };

        // 전체닫기
        this.btn_CloseAll_onclick = function(obj,e)
        {
        	if(confirm("전체창을 닫으시겠습니까?")) {
        		this.fn_DeleteTabpage();
        		this.fn_SetInfo();
        	}
        };

        // 열린화면목록
        this.btn_OpenList_onclick = function(obj,e)
        {
        	if (this.ds_OpenList.getRowCount() > 0) {
        		var left = obj.getOffsetWidth() + this.pdv_OpenList.getOffsetWidth() * -1;
        		var top = obj.getOffsetHeight();
        		this.pdv_OpenList.trackPopupByComponent(obj, left, top);
        	}
        };

        // 열린화면 선택
        this.pdv_OpenList_grd_List_oncelldblclick = function(obj,e)
        {
        	var winId = this.ds_OpenList.getColumn(e.row, "WIN_ID");

        	for (var i = 0; i < this.tab_MDI.getTabpageCount(); i++) {
        		if (winId == this.tab_MDI.tabpages[i].name) {
        			this.tab_MDI.set_tabindex(i);
        			break;
        		}
        	}

        	this.ds_OpenList.set_rowposition(-1);
        	this.pdv_OpenList.closePopup();
        };

        // 화면 전환
        this.tab_MDI_onchanged = function(obj,e)
        {
        	if (this.fv_flag != true) {
        		var objTabpage = obj.tabpages[e.postindex];
        		this.fn_SetFocusForm(objTabpage.name);
        	}
        	this.fv_flag = false;
        };

        // TO-DO : 임시 삭제
        this.btn_OpenList_ondblclick = function(obj,e)
        {
        	trace(this.ds_OpenList.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_Left.addEventHandler("onclick",this.btn_Left_onclick,this);
            this.tab_MDI.addEventHandler("onextrabuttonclick",this.tab_MDI_onextrabuttonclick,this);
            this.tab_MDI.addEventHandler("onchanged",this.tab_MDI_onchanged,this);
            this.btn_CloseAll.addEventHandler("onclick",this.btn_CloseAll_onclick,this);
            this.pdv_OpenList.form.grd_List.addEventHandler("oncelldblclick",this.pdv_OpenList_grd_List_oncelldblclick,this);
        };
        this.loadIncludeScript("FrameMDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
