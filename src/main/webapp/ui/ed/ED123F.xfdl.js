(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED123F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAthrSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_UNIVSTUDY\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDDTL_PAYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDDTL_BOOKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDDTL_WORKCONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_search",null,"19","100","30","270",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","20","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도서명");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","448","19","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전공");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","122","20","298","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_study","550","19","317","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","100","55","312","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("예) 셀파, 우등생 등과 같이 단어를 입력하여 검색합니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","530","55","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("예) 국어, 수학, 영어 등과 같이 단어를 입력하여 검색합니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","889","55","361","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("아래 리스트 제목을 클릭 하시면 클릭된 항목 기준으로 정렬됩니다.");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","101","1245","601",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsAthrSearch");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"400\"/><Column size=\"250\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"저자명\"/><Cell col=\"1\" text=\"생년월일\"/><Cell col=\"2\" text=\"전공\"/><Cell col=\"3\" text=\"작업도서명\"/><Cell col=\"4\" text=\"작업내용\"/><Cell col=\"5\" text=\"작업일자\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_NAME\"/><Cell col=\"1\" text=\"bind:BIRTH\" displaytype=\"mask\" maskeditformat=\"##-##-##\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:ATHR_UNIVSTUDY\"/><Cell col=\"3\" text=\"bind:WITHHOLDDTL_BOOKNAME\"/><Cell col=\"4\" text=\"bind:WITHHOLDDTL_WORKCONTENT\"/><Cell col=\"5\" text=\"bind:WITHHOLDDTL_PAYDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED123F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED123F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED123F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED123F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	this.Grid00.ascMarker = "▼";
        	this.Grid00.descMarker = "▲";
        	this.Grid00.arrSort = new Array();
        	this.edt_bookName.setFocus();
        };

        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.edt_bookName.text.trim() == "" && this.edt_study.text.trim() == "")
        	{
        		alert("하나 이상의 검색 조건을 입력해주세요.");
        		this.edt_bookName.setFocus();
        		return false;
        	}

        	var inds = "dsAthrSearch=dsAthrSearch";
        	var outds = "dsAthrSearch=dsAthrSearch";
        	var strArg= "BOOK_NAME=" + nexacro.wrapQuote(this.edt_bookName.text.trim())
        			  +" UNIVSTUDY=" + nexacro.wrapQuote(this.edt_study.text.trim());

        	this.gfn_TransactionP("search","JSP/ed/author_search.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
        };

        this.fnSearchCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if (this.dsAthrSearch.rowcount == 0)
        		alert("조회된 자료가 없습니다.");
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	this.fn_sort(obj, e.cell);
        };


        this.fn_sort = function(obj, nCell)
        {
        	var i, nCellIdx, sCellText, sColumnId, sSortType, arrSortData;

            var sSortString = "";

        	//정렬 리스트 Array 변수
            var arrSortList = new Array();

            //최종 정렬리스트를 저장하기 위한 Array 변수
            var arrSortList_new = new Array();

            var objDs = obj.getBindDataset();

            var sHeadText = obj.getCellProperty("head", nCell, "text");

            //오름차순이 설정되어있을 경우 내림차순으로 변경
            if(sHeadText.toString().indexOf(obj.ascMarker)>-1)        sSortType = obj.descMarker;

            //내림차순으로 설정되어있을 경우 정렬해제로 변경
            else if(sHeadText.toString().indexOf(obj.descMarker)>-1)  sSortType = "";

            //정렬이 되어있지 않은 경우 오름차순으로 변경
            else                                                      sSortType = obj.ascMarker;

            //현재 선택된 Cell에 대한 정렬정보만 설정
        	arrSortList[0] = nCell+"|"+sSortType;

        	//헤더에 설정된 정렬정보 초기화
            for(i=0;i<obj.getCellCount("head");i++)
            {
                sHeadText = obj.getCellProperty("head", i, "text");
                obj.setCellProperty("head", i, "text", sHeadText.replace(obj.ascMarker, "").replace(obj.descMarker, ""));
            }

            //정렬리스트 만큼 For
            for(i=0;i<arrSortList.length;i++)
            {
                //정렬리스트에서 Cell Index/타입 추출
                arrSortData = arrSortList[i].split("|");

                //Cell Index 변수에 설정
                nCellIdx = arrSortData[0];

                //정렬 타입 변수에 설정
                sSortType = arrSortData[1];

                //해더 Text에 정렬마커 추가
                sHeadText = obj.getCellProperty("head", nCellIdx, "text")+sSortType;
                obj.setCellProperty("head", nCellIdx, "text", sHeadText);

                //데이터 Cell Text 가져오기
                sCellText = obj.getCellProperty("body", nCellIdx, "text");

                //Bind된 컬럼일 경우 정렬 정보 만들기
                if(sCellText.toString().indexOf("bind:")>-1)
                {
                    //데이터 Cell Text에서 Dataset Column Id 추출
                    sColumnId = sCellText.toString().replace("bind:", "");

                    //정렬타입에 맞게 Keystring 변수에 추가
                    if(sSortType==obj.ascMarker)        sSortString += "-"+sColumnId;
                    else if(sSortType==obj.descMarker)  sSortString += "+"+sColumnId;

                    //변경된 정렬리스트 정보 만들기
                    arrSortList_new[arrSortList_new.length] = nCellIdx+"|"+sSortType;
                }
            }

            //현재 그리드에 변경된 정렬리스트 UserProperty 설정
            obj.arrSort = arrSortList_new;

            //keystring 변수에 값이 있을 경우 keystring 설정
            if(sSortString.length>0)
            {
                objDs.set_keystring("S:"+sSortString);
        		objDs.set_rowposition(0);
            }
            //keystring 변수에 값이 없을 경우 keystring 설정 해제
            else
            {
                objDs.set_keystring(null);
        		objDs.set_rowposition(0);
            }
        }
        this.ED123F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED123F_ontimer = function(obj,e)
        {
        	var l;
        	if (obj.getOffsetWidth() < 1300)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 1300) / 2;
        	}

        	trace(l);
        	this.killTimer(0);
        	this.lfn_grdAutofit(this.Grid00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED123F_onload,this);
            this.addEventHandler("onsize",this.ED123F_onsize,this);
            this.addEventHandler("ontimer",this.ED123F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
        };
        this.loadIncludeScript("ED123F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
