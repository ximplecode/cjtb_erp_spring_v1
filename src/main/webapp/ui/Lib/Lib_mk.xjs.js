//XJS=Lib_mk.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Lib::Lib_service.xjs");
        this.addIncludeScript(path,"Lib::Lib_gw.xjs");
        this.addIncludeScript(path,"Lib::Lib_etc.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var urlNext = nexacro.getApplication().gv_urlNext;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var l_dsApproval;

        //키보드 숫자 입력시 해당 업체명 들어가도록
        this.lfn_CustName = function(vGubn, vKeyCode)
        {
        	if (vGubn == "41")   //외주 작업처
        	{
        		switch(vKeyCode)
        		{
        		  case "1" :
        			  return "4810";  // 프린피아 -> 프린피아 북시티(20200213 변경요청)
        			  break;
        		  case "2" :
        			  return "3288";  // 프린피아(주안공장)
        			  break;
        		  case "3" :
        			  return "1753";  // 프린피아(파주공장)
        			  break;
        		  case "4" :
        			  return "5700";  // 천재교육
        			  break;
        		  case "5" :
        			  return "4676";  // 천재교육(출판단지)
        			  break;
        		  case "6" :
        			  //return "1288";  // 동진코라 (20140115 이상협대리 요청으로 프린피아문발공장으로 변경)
        			  return "3518";  // 프린피아문발공장
        			  break;
        		  case "7" :
        			  return "1349";  // 대아코팅(신규)
        			  break;
        		  case "8" :
        			  return "1346";  // 금성산업(신규)
        			  break;
        		  case "9" :
        			  return "1034";  // 프린피아(2공장) -> 프린피아(본사)
        			  break;

        		  default :
        			  return "";
        		}
        	} else if (vGubn == "40")   // 용지 매입처
        	{
        		switch(vKeyCode)
        		{
        		  case "1" :
        			  return "0002";  // 나이스페이퍼
        			  break;
        		  case "2" :
        			  return "0020";  // 서림물산
        			  break;
        		  case "3" :
        			  return "0021";  // 천재상사
        			  break;
        		  case "4" :
        			  return "0022";  // 천재상사(교과서)
        			  break;
        		  case "5" :
        			  return "0023";  //  이화지업
        			  break;
        		  default :
        			  return "";
        		}
        	}
        }


        //#######################################################
        //	쿼리로 순번 뽑기
        // sTblName : Table 명
        // sPKColName : Priamry Key Column 명
        // sSEQColName : 순번 Column 명
        // sPKValue : Priamry Key 값
        // sColLength : 순번 Column 길이
        //#######################################################
        this.lfn_Seq_Count = function(sTblName, sPKColName, sSEQColName, sPKValue, sColLength)
        {
        	var strArg  = "";

        	strArg 	= "pTblName=" + nexacro.wrapQuote( sTblName ) +
        	          " pPKColName=" + nexacro.wrapQuote( sPKColName ) +
        	          " pSEQColName=" + nexacro.wrapQuote( sSEQColName ) +
        	          " pPKValue=" + nexacro.wrapQuote( sPKValue ) +
        	          " pColLength=" + nexacro.wrapQuote( sColLength );

        	this.gfn_TransactionP("select", "JSP/mk/g_seqnum.jsp", "", "", strArg, "lfn_Seq_Count_CallBack", false, "S", false, this);
        }


        //#######################################################
        // 마스타 저장 콜백함수
        //#######################################################
        this.lfn_Seq_Count_CallBack = function(Trid, ErrorCode, ErrorMsg, gv_rt_value)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		var rtnSeqNo = nexacro.getApplication().gv_rt_value;
        	}
        }

        this.lfn_RD_Approval_Set_mk = function(vI_Flow_Id, dsApproval)
        {
        	var sSignUrl = urlNext+"/gw/sign/";
            var str_arg;

        	l_dsApproval = dsApproval;

        	// 기안 결재라인 가져오기
        	this.lfn_Approval_Select_One(vI_Flow_Id, l_dsApproval);

        	l_dsApproval.filter("KIND!='2'");

        	str_arg  =  " ["+ vI_Flow_Id + "]";

        	//담당자 셋팅
            str_arg +=  " [담당]";

        	if(Eco.isUndefined(l_dsApproval.getColumn(0, "KS_SIGN")) == false)
              str_arg += " [" + sSignUrl + l_dsApproval.getColumn(0, "KS_SIGN") + "]";
            else
              str_arg += " [" + sSignUrl + "si.jpg]";

        	str_arg += " [" + l_dsApproval.getColumn(0, "F_NAME") + "]";
            str_arg += " [" + l_dsApproval.getColumn(0, "F_DATE").substr(4,2) + "." +
                              l_dsApproval.getColumn(0, "F_DATE").substr(6,2) + "]";

        	for(var i = 1 ; i <= 6 ; i++ )
            {
        		if(Eco.isUndefined(l_dsApproval.getColumn(i, "JIKCHAK")) == false)
        			str_arg +=  " [" + l_dsApproval.getColumn(i, "JIKCHAK") + "]";
        		else
        			str_arg +=  " []";

        		//결재확인이면 이미지 보이기
        		if(l_dsApproval.getColumn(i, "STATUS") == "1")
        		{
                    if(Eco.isUndefined(l_dsApproval.getColumn(i, "KS_SIGN")) == false)
                      str_arg += " [" + sSignUrl + l_dsApproval.getColumn(i, "KS_SIGN") + "]";
                    else
                      str_arg += " [" + sSignUrl + "si.jpg]";

        			if(Eco.isUndefined(l_dsApproval.getColumn(i, "F_NAME")) == false)
                      str_arg += " [" + l_dsApproval.getColumn(i, "F_NAME") + "]";
                    else
                      str_arg += " []";

        			str_arg += " [" + l_dsApproval.getColumn(i, "F_DATE").substr(4,2) + "." +
        							  l_dsApproval.getColumn(i, "F_DATE").substr(6,2) + "]";
        		}

        		else if(l_dsApproval.getColumn(i, "STATUS") == "0")
        		{
        	         str_arg += " [" + sSignUrl + "gi.jpg]";

        			 if(Eco.isUndefined(l_dsApproval.getColumn(i, "F_NAME")) == false)
                      str_arg += " [" + l_dsApproval.getColumn(i, "F_NAME") + "]";
                    else
                      str_arg += " []";

        			 str_arg += " [" + l_dsApproval.getColumn(i, "F_DATE").substr(4,2) + "." +
                                       l_dsApproval.getColumn(i, "F_DATE").substr(6,2) + "]";
        		}else
        		{
        	         str_arg += " []";

        			 if(Eco.isUndefined(l_dsApproval.getColumn(i, "F_NAME")) == false)
                      str_arg += " [" + l_dsApproval.getColumn(i, "F_NAME") + "]";
                    else
                      str_arg += " []";

                     str_arg += " []";
        		}

        	}

        	l_dsApproval.filter("KIND=='2'");
        	//합의자 셋팅
            for(var i = 0 ; i <= 6 ; i++ )
            {
                if(Eco.isUndefined(l_dsApproval.getColumn(i, "JIKCHAK")) == false)
        			str_arg +=  " [" + l_dsApproval.getColumn(i, "JIKCHAK") + "]";
        		else
        			str_arg +=  " []";

        		//결재확인이면 이미지 보이기
        		if (l_dsApproval.getColumn(i, "STATUS") == "1")
        		{
                  if(Eco.isUndefined(l_dsApproval.getColumn(i, "KS_SIGN")) == false)
        			str_arg += " [" + sSignUrl + l_dsApproval.getColumn(i, "KS_SIGN") + "]";
                  else
        			str_arg += " [" + sSignUrl + "si.jpg]";


        		  if(Eco.isUndefined(l_dsApproval.getColumn(i, "F_NAME")) == false)
                    str_arg += " [" + l_dsApproval.getColumn(i, "F_NAME") + "]";
                  else
                    str_arg += " []";

                 str_arg += " [" + l_dsApproval.getColumn(i, "F_DATE").substr(4,2) + "." +
                                    l_dsApproval.getColumn(i, "F_DATE").substr(6,2) + "]";
        		}else if (l_dsApproval.getColumn(i, "STATUS") == "0")
        		{
        	      str_arg += " [" + sSignUrl + "gi.jpg]";

        		  if(Eco.isUndefined(l_dsApproval.getColumn(i, "F_NAME")) == false)
                    str_arg += " [" + l_dsApproval.getColumn(i, "F_NAME") + "]";
                  else
                    str_arg += " []";

        		  str_arg += " [" + l_dsApproval.getColumn(i, "F_DATE").substr(4,2) + "." +
                                    l_dsApproval.getColumn(i, "F_DATE").substr(6,2) + "]";
        		}else
        		{
        	      str_arg += " []";

        		  if(Eco.isUndefined(l_dsApproval.getColumn(i, "F_NAME")) == false)
                    str_arg += " [" + l_dsApproval.getColumn(i, "F_NAME") + "]";
                  else
                    str_arg += " []";

                  str_arg += " []";
        		}
        	}

        	l_dsApproval.filter("");
        	return str_arg;
        }








        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
