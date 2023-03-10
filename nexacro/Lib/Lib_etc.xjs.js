//XJS=Lib_etc.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
          lfn_setYY : 지정한 년도 부터 다음년도 까지 데이터셋 세팅
          lfn_grdAutofit : 그리드 화면이 커질경우 사이즈 구해서 autofit 셋팅
          lfn_showModal : form을 showmodal창으로 띠우기
          lfn_CheckBox_Return : 체크박스 value를 true:"1" false:"0" 리턴
          lfn_CheckBox_Return_var : 체크박스 value를 true:2번째 파라미터 false: 3번째 파라미터 값으로 리턴
        */

        this.lfn_setYY = function(ds, syy)
        {
        	var nRow;
        	var dt = new Date();
        	var eyy = nexacro.toNumber( Eco.date.getMaskFormatString(dt,"yyyy") ) + 1;
        	var arrColname = []
        	arrColname[0] = ds.getColumnInfo(0).name;
        	if (ds.colcount > 1)
        	{
        		arrColname[1] = ds.getColumnInfo(1).name;
        	}
        	ds.clearData();
        	for ( i = eyy; i >= nexacro.toNumber(syy); i--)
        	{
        		nRow = ds.addRow();
        		ds.setColumn(nRow,arrColname[0],i);
        		if (ds.colcount > 1)
        		{
        			ds.setColumn(nRow,arrColname[1],i.toString() + "년");
        		}

        	}

        	return eyy - 1;
        }

        //그리드 화면이 커질때 col의 width값 합산보다 클경우 autofit

        this.lfn_grdAutofit = function(obj)
        {
        	var total_l = 0, i;
        	for (i = 0; i < obj.getFormatColCount() - 1; i++)
        	{
        		total_l =total_l + obj.getFormatColSize(i);
        	}

        	if (obj.getOffsetWidth() > total_l)
        	{
        		obj.set_autofittype("col");
        	}
        	else
        	{
        		obj.set_autofittype("none");
        	}
        }

        //옵션 간소화 팝업
        this.lfn_showModal = function (sPopupId, arrArguments, sPopupUrl, popupCallback, obj, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight)
        {
        	// child frame 생성
        	var childFrame = new ChildFrame();

        	// parent frame 정의
        	var parentFrame = obj.getOwnerFrame();

        	//child frame 초기화
        	childFrame.init(sPopupId, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight, null, null, sPopupUrl);

        	// Modal Dialog 추가 옵션
        	//autosize default true
        	childFrame.set_autosize(false);
        	//statusbar default true
        	childFrame.set_showtitlebar(false);
        	childFrame.set_openalign("center middle");

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, arrArguments, obj, popupCallback, true);
        };

        //체크박스 컴포넌트 값 리턴:string
        //체크박스 : true = "1"
        //체크박스 : false = "0"
        this.lfn_CheckBox_Return = function(obj)
        {
        	var rt;
        	if (obj.value == true)
        	{
        		rt = "1";
        	}
        	else
        	{
        		rt = "0";
        	}

        	return rt;
        }

        //체크박스 컴포넌트 값 리턴:string
        //체크박스 : true = var1
        //체크박스 : false = var2
        this.lfn_CheckBox_Return_var = function(obj, var1, var2)
        {
        	var rt;
        	if (obj.value == true)
        	{
        		rt = var1
        	}
        	else
        	{
        		rt = var2
        	}

        	return rt;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
