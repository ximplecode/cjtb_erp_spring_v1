//XJS=Lib_sd.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Lib::Lib_service.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        // 영업관리 현황조회 년판 값 세팅
        this.lfn_sd_getBookYear = function(param)
        {
        	var Gv_BookYear = 2022;
        	var startBookYear = nexacro.toNumber(Gv_BookYear)-2; // 도서코드 시작 년판
        	var endBookYear = nexacro.toNumber(Gv_BookYear)+1; // 도서코드 끝 년판

        	if(param == "start") // 도서코드 시작 년판
        		return startBookYear;
        	else if(param == "end")  // 도서코드 끝 년판
        		return endBookYear;
        	else if(param == "year") // 당해년도
        		return Gv_BookYear;
        }

        // 영업관리 현황조회 개인별 부서코드 얻어오기 ( 사용안함 )
        this.lfn_sd_getBuseCode = function(l_ds_buse)
        {

        }

        // 널체크
        this.lfn_sd_fnisNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
