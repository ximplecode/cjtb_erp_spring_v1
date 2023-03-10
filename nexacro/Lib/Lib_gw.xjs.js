//XJS=Lib_gw.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Lib::Lib_service.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var l_FD, l_FT, l_FDT, l_dsF, lv_I_Flow_Id, l_fileSubUrl, l_Grid;
        var i;
        var l_dsApproval, l_DS_GW_U, l_DS_GW_K, l_DS_GW_H, l_DS_GW_C, l_DS_GW_D, l_ds_flow_order, l_dsFormpath, l_ds_flow_order2;
        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var signFile;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");

        //파일 업로드
        this.lfn_FileUpload = function(objFD, objFT, dsF, vfileSubUrl)
        {
        	l_FD = objFD;    //FileDialog
        	l_FT = objFT;    //FileUpTransfer
        	l_dsF = dsF;     //ds_file
        	l_fileSubUrl = vfileSubUrl;  //첨부파일 서브주소

        	objFD.open('nexacro17', FileDialog.MULTILOAD);
        	//fileDialog 선택 후 창을 닫을 때 연결하는 func
        	objFD.addEventHandler("onclose", this.lfn_FileDialog_onclose, this)
        }

        this.lfn_FileDialog_onclose = function(objFD, e)
        {
        	l_FT.clearFileList();
        	var filelist = e.virtualfiles;

        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
        		var extension = vFile.filename.substr((vFile.filename).lastIndexOf('.'), (vFile.filename).length);
        		var objDate = new nexacro.Date();
        		var date = Eco.date.getMaskFormatString(objDate, "yyyy") + Eco.date.getMaskFormatString(objDate, "MM") + Eco.date.getMaskFormatString(objDate, "dd") + ((objDate.getTime()+i*1000).toString()).substr(0,10);
        		var r_name = date + gv_sabun + extension;
        		signFile = gv_sabun + extension; // 저장할 사진 파일 이름

        		vFile.name = vFile.filename;
        		vFile.filename = r_name;
                vFile.addEventHandler("onsuccess", this.lfn_FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.lfn_FileList_onerror , this);
                vFile.open(null, 1);
            }
        };

        this.lfn_FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
        			var dt = new Date();
        			var nRow = l_dsF.addRow();
        			l_dsF.setColumn(nRow, "GB", 0);
        			l_dsF.setColumn(nRow, "F_NAME", obj.name);
                    l_dsF.setColumn(nRow, "F_SIZE", e.filesize);
        			l_dsF.setColumn(nRow, "R_NAME", obj.filename);
        			l_dsF.setColumn(nRow, "F_PATH", "/gw/"+l_fileSubUrl);
        			l_dsF.setColumn(nRow, "F_NO", "");
        			if (l_fileSubUrl == "sign/")
        				l_FT.addFile(signFile, obj);
        			else
        				l_FT.addFile(obj.filename, obj);
        			l_FT.addEventHandler("onerror", this.lfn_FileUpTrans_onerror, this);
        			break;
            }
        };

        this.lfn_FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };

        this.lfn_FileUpTrans_onerror = function(objFT, e)
        {
        	trace(e.loaded+"/"+e.total);
        };

        //파일 업로드 -> 저장
        this.lfn_FileUpload_Save = function(url, vI_Flow_Id, vfileSubUrl)
        {
        	lv_I_Flow_Id = vI_Flow_Id;
        	l_fileSubUrl = vfileSubUrl;

        	l_FT.upload(url + '/fileUpload.jsp?fileFolder=gw/'+l_fileSubUrl);
        	l_FT.addEventHandler("onsuccess", this.lfn_FileUpSave_onsuccess, this);
        }

        this.lfn_FileUpSave_onsuccess = function(objFT,e)
        {

        	if(e.message == "Success")
        		this.lfn_FileDB_Save();
        	else
        		alert("첨부파일 저장에 실패하였습니다. 시스템개발팀으로 문의해주세요.");
        }


        this.lfn_FileDB_Save = function(){

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/gw/SQL_GW110_FILE_V2.jsp";
        	in_ds = "ds_file=ds_file";					//첨부파일 INSERT할 경우 ds_file 데이터셋으로만 가능
        	out_ds = "ds_file=ds_file";
        	str_arg  = " i_flow_id="+nexacro.wrapQuote(lv_I_Flow_Id);

        	this.gfn_TransactionP("insert", str_url, in_ds, out_ds, str_arg, "lfn_FileDbSaveOk_Callback", true, "P", false, this);
        }

        this.lfn_FileDbSaveOk_Callback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        	alert('파일 저장 성공!');
        }

        //파일삭제
        this.lfn_FileDelete = function(dsF, vI_Flow_Id, vfileSubUrl)
        {

        	l_dsF = dsF;     //ds_file
        	lv_I_Flow_Id = vI_Flow_Id; // i_flow_id
        	l_fileSubUrl = vfileSubUrl;  //첨부파일 서브주소

        	var deleteFile = new Array();
        	var deleteFileName;

        	if(	l_dsF.getCaseCount("GB == 1") == 0 )
        	{
        		alert('선택된 파일이 없습니다');
        	}else
        	{
        		for(var i=0; i<l_dsF.getRowCount(); i++)
        		{
        			if(l_dsF.getColumn(i, "GB") == 1)
        			{
        				if(l_dsF.getCaseCount("GB == 1") == 1){
        					deleteFileName = l_dsF.getColumn(i,"R_NAME");
        				}else{
        					if(i == 0){
        						deleteFileName = l_dsF.getColumn(i,"R_NAME");
        					}else{
        						deleteFileName = deleteFileName + "," + l_dsF.getColumn(i,"R_NAME");
        					}
        				}
        				deleteFile = nexacro.wrapQuote(deleteFileName);
        			}
        		}

        		var dt = new Date();
        		this.gfn_TransactionP("delete", "JSP/fileDelete.jsp", "", "", "fileFolder=gw/"+l_fileSubUrl+" deleteFile="+ deleteFile, "lfn_FileDelete_Callback", true, "P", false, this);
        	}
        }

        this.lfn_FileDelete_Callback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	var cnt = l_dsF.getRowCount();
        	for(var i=cnt; i!=0; i--)
        	{
        		if(l_dsF.getColumn(i-1, "GB") == "1"){
        			l_dsF.deleteRow(i-1);
        		}
        	}

        	this.lfn_FileDB_Save(sTrid);
        }

        //파일 다운로드
        this.lfn_FileDownload = function(objFDT, dsF, urlFile, i)
        {
        	l_FDT = objFDT;    	 		 //FileDownTransfer
        	l_dsF = dsF;    			 //ds_file

        	var file_path = l_dsF.getColumn(i, "F_PATH");
        	var file_rname = l_dsF.getColumn(i, "R_NAME");
        	var file_fname = l_dsF.getColumn(i, "F_NAME");

        	objFDT.clearPostDataList();
        	objFDT.setPostData("path", urlFile+file_path);
        	objFDT.setPostData("filename", file_rname);
        	objFDT.setPostData("fileRname", l_dsF.getColumn(i,"F_NAME"));
        	objFDT.download(urlFile+"/JSP/downloadFile_url.jsp");

        	objFDT.addEventHandler("onsuccess", this.lfn_FileDownTrans_onsuccess, this);
        }

        this.lfn_FileDownTrans_onsuccess = function(obj,e)
        {
        	system.execShell(e.targetfullpath);
        };

        this.lfn_File_GridDragEnter = function(objG, e, dsF, objFT)
        {
        	l_dsF = dsF;     //ds_file
        	l_FT = objFT;    //FileUpTransfer
        	if(e.datatype == "file")
            {
               objG.set_opacity(0.5);
            }
        }

        this.lfn_File_GridDragLeave = function(objG)
        {
        	objG.set_opacity(1);
        }

        this.lfn_File_GridOnDrop = function(objG, e, dsF, objFT)
        {
        	l_dsF = dsF;     //ds_file
        	l_FT = objFT;    //FileUpTransfer
        	objG.set_opacity(1);
            if(e.datatype == "file")
            {
                this.lfn_addFileList(e.filelist);
            }
        }

        this.lfn_addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
        		var gv_sabun = 'C16168';
        		var extension = vFile.filename.substr((vFile.filename).lastIndexOf('.'), (vFile.filename).length);
        		var objDate = new nexacro.Date();
        		var date = Eco.date.getMaskFormatString(objDate, "yyyy") + Eco.date.getMaskFormatString(objDate, "MM") + Eco.date.getMaskFormatString(objDate, "dd") + ((objDate.getTime()+i*1000).toString()).substr(0,10);
        		var r_name = date + gv_sabun + extension;

        		vFile.name = vFile.filename;
        		vFile.filename = r_name;
                vFile.addEventHandler("onsuccess", this.lfn_FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.lfn_FileList_onerror , this);
                vFile.open(null, 1);
            }
        }

        //기안 HWP 파일명 생성
        this.lfn_create_NewFile = function()
        {
        	var rnd = Math.random().toString(10).slice(-5);
        	var objDate = new nexacro.Date();
        	var ndatetime = objDate.toString().substr(0,12);
        	var fileName = ndatetime + rnd + 'C20141' + '.hwp';
        	return fileName;
        }


        //리포트 결재라인 저장하기
        this.lfn_I_FLOW_ORDER_CallBack = function(strSvcId, nErrorCode, strErrorMsg, ds_flow_order, DS_GW_K, DS_GW_H, DS_GW_C, DS_GW_D)
        {
        	//기안자 본인 결재라인 입력
        	if(nErrorCode != 0)
        		alert(strErrorMsg);
        	else
        	{
        		var seqCnt;
        		ds_flow_order.clearData();
        		ds_flow_order.addRow();
        		ds_flow_order.setColumn(0, "KIND", "0"); //본인
        		ds_flow_order.setColumn(0, "SEQ", "1"); //본인1
        		ds_flow_order.setColumn(0, "SABUN", "C20141");	//사번 넣어주기
        		//F_COMMENT : GW110 -> GW_CHCK_NAME 에서 setColumn 해줌
        		ds_flow_order.setColumn(0, "F_NEXT", "");
        		ds_flow_order.setColumn(0, "STATUS", "1");
        		ds_flow_order.setColumn(0, "STORE", "0");
        		ds_flow_order.setColumn(0, "F_DATE", objDate.toString().substr(0,12));
        		ds_flow_order.setColumn(0, "JIKCHAK", "사원");			//직위
        		ds_flow_order.setColumn(0, "BUSOR", "시스쳄개발팀");	//부서명
        		ds_flow_order.setColumn(0, "F_NAME", "최유빈");		//이름
        		if(DS_GW_K.getRowCount() != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<=DS_GW_K.getRowCount() -1; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				ds_flow_order.addRow();
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "KIND", "1");	//결재자
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SEQ",  seqCnt);
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SABUN", DS_GW_K.getColumn(iRow,"SABUN"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_COMMENT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NEXT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STATUS", "9");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STORE", "0");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_DATE", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "JIKCHAK", DS_GW_K.getColumn(iRow,"JIKWI"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "BUSOR", DS_GW_K.getColumn(iRow,"BUSE"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NAME", DS_GW_K.getColumn(iRow,"NAME"));
        			}
        		}
        		if(DS_GW_H.getRowCount() != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<=DS_GW_H.getRowCount() -1; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				ds_flow_order.addRow();
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "KIND", "2");	//합의자
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SEQ",  seqCnt);
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SABUN", DS_GW_K.getColumn(iRow,"SABUN"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_COMMENT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NEXT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STATUS", "9");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STORE", "0");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_DATE", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "JIKCHAK", DS_GW_H.getColumn(iRow,"JIKWI"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "BUSOR", DS_GW_H.getColumn(iRow,"BUSE"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NAME", DS_GW_H.getColumn(iRow,"NAME"));
        			}
        		}
        		if(DS_GW_C.getRowCount() != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<=DS_GW_C.getRowCount() -1; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				ds_flow_order.addRow();
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "KIND", "3");	//최종결재자
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SEQ",  seqCnt);
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SABUN", DS_GW_K.getColumn(iRow,"SABUN"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_COMMENT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NEXT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STATUS", "9");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STORE", "0");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_DATE", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "JIKCHAK", DS_GW_C.getColumn(iRow,"JIKWI"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "BUSOR", DS_GW_C.getColumn(iRow,"BUSE"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NAME", DS_GW_C.getColumn(iRow,"NAME"));
        			}
        		}
        		if(DS_GW_D.getRowCount() != 0)
        		{
        			seqCnt = 0;
        			for(var iRow=0; iRow<=DS_GW_D.getRowCount() -1; iRow++)
        			{
        				seqCnt = seqCnt + 1;
        				ds_flow_order.addRow();
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "KIND", "4");	//담당자
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SEQ",  seqCnt);
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "SABUN", DS_GW_K.getColumn(iRow,"SABUN"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_COMMENT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NEXT", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STATUS", "9");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "STORE", "0");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_DATE", "");
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "JIKCHAK", DS_GW_D.getColumn(iRow,"JIKWI"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "BUSOR", DS_GW_D.getColumn(iRow,"BUSE"));
        				ds_flow_order.setColumn(ds_flow_order.rowposition, "F_NAME", DS_GW_D.getColumn(iRow,"NAME"));
        			}
        		}
        		var str_url = "JSP/gw/SQL_GW110_01SO.jsp";
        		var in_ds = "input=ds_flow_order:u";
        		var str_arg = " gubun='01'";

        		this.gfn_TransactionP("insert", str_url, in_ds, "", str_arg, "lfn_saveOk", true, "P", false, this);
        	}
        }

        this.lfn_saveOk = function(strSvcId, nErrorCode, strErrorMsg)
        {
        	if(nErrorCode == "0")
        	{
        		alert("성공적으로 처리 되었습니다.");
        	}
        	else
        	{
        		alert(strErrorMsg);
        	}
        }

        //문서 결재라인 가져오기
        this.lfn_Approval_Select = function(iI_Flow_id, dsApproval, DS_GW_U, DS_GW_K, DS_GW_H, DS_GW_C, DS_GW_D)
        {
        	l_dsApproval = dsApproval;
        	l_DS_GW_U = DS_GW_U;
        	l_DS_GW_K = DS_GW_K;
        	l_DS_GW_H = DS_GW_H;
        	l_DS_GW_C = DS_GW_C;
        	l_DS_GW_D = DS_GW_D;

        	var str_url = "JSP/gw/GW_Approval.jsp";
        	var inds = "dsApproval=dsApproval";
        	var outds = "dsApproval=dsApproval";
        	var strArg = "I_FLOW_ID=" + iI_Flow_id +
        				 " GUBUN=01";

        	this.gfn_TransactionP("search", str_url, inds, outds, strArg, "lfn_Approval_CallBack", true, "P", false, this);
        }

        this.lfn_Approval_CallBack = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert( svcId + "::" + errMsg );
        	else
        	{
        		l_DS_GW_U.clearData();
        		l_DS_GW_K.clearData();
        		l_DS_GW_H.clearData();
        		l_DS_GW_C.clearData();
        		l_DS_GW_D.clearData();

        		this.lfn_Approval_Setting(l_dsApproval);
        	}
        }

        //결재라인 설정
        this.lfn_Approval_Setting = function(dsObj)
        {
        	if( dsObj.rowcount != 0)
        	{
        		for(var iRow = 0; iRow < dsObj.rowcount ; iRow++)
        		{
        			var nRow;

        			if( dsObj.getColumn(iRow, "KIND") == "0")
        			{
        				nRow = l_DS_GW_U.addRow();

        				l_DS_GW_U.setColumn(nRow, "GUBUN", "01");
        				l_DS_GW_U.setColumn(nRow, "NO", "0");
        				l_DS_GW_U.setColumn(nRow, "BUSECD", "");
        				l_DS_GW_U.setColumn(nRow, "BUSE", dsObj.getColumn(iRow, "BUSOR"));
        				l_DS_GW_U.setColumn(nRow, "JIKWI", dsObj.getColumn(iRow, "JIKCHAK"));
        				l_DS_GW_U.setColumn(nRow, "SABUN", dsObj.getColumn(iRow, "SABUN"));
        				l_DS_GW_U.setColumn(nRow, "NAME", dsObj.getColumn(iRow, "F_NAME"));
        			}

        			if( dsObj.getColumn(iRow, "KIND") == "1")
        			{
        				nRow = l_DS_GW_K.addRow();

        				l_DS_GW_K.setColumn(nRow, "NO", "1");
        				l_DS_GW_K.setColumn(nRow, "BUSECD", "");
        				l_DS_GW_K.setColumn(nRow, "BUSE", dsObj.getColumn(iRow, "BUSOR"));
        				l_DS_GW_K.setColumn(nRow, "JIKWI", dsObj.getColumn(iRow, "JIKCHAK"));
        				l_DS_GW_K.setColumn(nRow, "SABUN", dsObj.getColumn(iRow, "SABUN"));
        				l_DS_GW_K.setColumn(nRow, "NAME", dsObj.getColumn(iRow, "F_NAME"));
        			}

        			if( dsObj.getColumn(iRow, "KIND") == "2")
        			{
        				nRow = l_DS_GW_H.addRow();

        				l_DS_GW_H.setColumn(nRow, "NO", "2");
        				l_DS_GW_H.setColumn(nRow, "BUSECD", "");
        				l_DS_GW_H.setColumn(nRow, "BUSE", dsObj.getColumn(iRow, "BUSOR"));
        				l_DS_GW_H.setColumn(nRow, "JIKWI", dsObj.getColumn(iRow, "JIKCHAK"));
        				l_DS_GW_H.setColumn(nRow, "SABUN", dsObj.getColumn(iRow, "SABUN"));
        				l_DS_GW_H.setColumn(nRow, "NAME", dsObj.getColumn(iRow, "F_NAME"));
        			}

        			if( dsObj.getColumn(iRow, "KIND") == "3")
        			{
        				nRow = l_DS_GW_C.addRow();

        				l_DS_GW_C.setColumn(nRow, "NO", "3");
        				l_DS_GW_C.setColumn(nRow, "BUSECD", "");
        				l_DS_GW_C.setColumn(nRow, "BUSE", dsObj.getColumn(iRow, "BUSOR"));
        				l_DS_GW_C.setColumn(nRow, "JIKWI", dsObj.getColumn(iRow, "JIKCHAK"));
        				l_DS_GW_C.setColumn(nRow, "SABUN", dsObj.getColumn(iRow, "SABUN"));
        				l_DS_GW_C.setColumn(nRow, "NAME", dsObj.getColumn(iRow, "F_NAME"));
        			}

        			if( dsObj.getColumn(iRow, "KIND") == "4")
        			{
        				nRow = l_DS_GW_D.addRow();

        				l_DS_GW_D.setColumn(nRow, "NO", "4");
        				l_DS_GW_D.setColumn(nRow, "BUSECD", "");
        				l_DS_GW_D.setColumn(nRow, "BUSE", dsObj.getColumn(iRow, "BUSOR"));
        				l_DS_GW_D.setColumn(nRow, "JIKWI", dsObj.getColumn(iRow, "JIKCHAK"));
        				l_DS_GW_D.setColumn(nRow, "SABUN", dsObj.getColumn(iRow, "SABUN"));
        				l_DS_GW_D.setColumn(nRow, "NAME", dsObj.getColumn(iRow, "F_NAME"));
        			}
        		}
        	}
        }

        this.lfn_I_FLOW_ORDER_SAVE = function(i_flow_id, l_ds_flow_order, l_DS_GW_K, l_DS_GW_H, l_DS_GW_C, l_DS_GW_D)
        {
        	var seqCnt;
        	var objDate = new nexacro.Date();

        	l_ds_flow_order.clearData();
        	var nRow = l_ds_flow_order.addRow();

        	l_ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        	l_ds_flow_order.setColumn(nRow, "KIND", "0");	//본인
        	l_ds_flow_order.setColumn(nRow, "SEQ", "1");
        	l_ds_flow_order.setColumn(nRow, "SABUN", gds_userinfo.getColumn(0,"SABUN"));
        	l_ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        	l_ds_flow_order.setColumn(nRow, "F_NEXT", null);
        	l_ds_flow_order.setColumn(nRow, "STATUS", "1");
        	l_ds_flow_order.setColumn(nRow, "STORE", "0");
        	l_ds_flow_order.setColumn(nRow, "F_DATE", objDate.toString().substr(0,12));
        	l_ds_flow_order.setColumn(nRow, "JIKCHAK", gds_userinfo.getColumn(0,"JIKWINM"));
        	l_ds_flow_order.setColumn(nRow, "BUSOR", gds_userinfo.getColumn(0,"BUSENM"));
        	l_ds_flow_order.setColumn(nRow, "F_NAME", gds_userinfo.getColumn(0,"NAME"));

        	if(l_DS_GW_K.rowcount != 0)
        	{
        		seqCnt = 0;
        		for(var iRow = 0; iRow < l_DS_GW_K.rowcount; iRow++)
        		{
        			seqCnt = seqCnt + 1;
        			nRow = l_ds_flow_order.addRow();
        			l_ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			l_ds_flow_order.setColumn(nRow, "KIND", "1");	//결재자
        			l_ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        			l_ds_flow_order.setColumn(nRow, "SABUN", l_DS_GW_K.getColumn(iRow,"SABUN"));
        			l_ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        			l_ds_flow_order.setColumn(nRow, "F_NEXT", null);
        			l_ds_flow_order.setColumn(nRow, "STATUS", null);
        			l_ds_flow_order.setColumn(nRow, "STORE", "0");
        			l_ds_flow_order.setColumn(nRow, "F_DATE", null);
        			l_ds_flow_order.setColumn(nRow, "JIKCHAK", l_DS_GW_K.getColumn(iRow,"JIKWI"));
        			l_ds_flow_order.setColumn(nRow, "BUSOR", l_DS_GW_K.getColumn(iRow,"BUSE"));
        			l_ds_flow_order.setColumn(nRow, "F_NAME", l_DS_GW_K.getColumn(iRow,"NAME"));
        		}
        	}

        	if(l_DS_GW_H.rowcount != 0)
        	{
        		seqCnt = 0;
        		for(var iRow = 0; iRow < l_DS_GW_H.rowcount; iRow++)
        		{
        			seqCnt = seqCnt + 1;
        			nRow = l_ds_flow_order.addRow();
        			l_ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			l_ds_flow_order.setColumn(nRow, "KIND", "2");	//합의자
        			l_ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        			l_ds_flow_order.setColumn(nRow, "SABUN", l_DS_GW_H.getColumn(iRow,"SABUN"));
        			l_ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        			l_ds_flow_order.setColumn(nRow, "F_NEXT", null);
        			l_ds_flow_order.setColumn(nRow, "STATUS", null);
        			l_ds_flow_order.setColumn(nRow, "STORE", "0");
        			l_ds_flow_order.setColumn(nRow, "F_DATE", null);
        			l_ds_flow_order.setColumn(nRow, "JIKCHAK", l_DS_GW_H.getColumn(iRow,"JIKWI"));
        			l_ds_flow_order.setColumn(nRow, "BUSOR", l_DS_GW_H.getColumn(iRow,"BUSE"));
        			l_ds_flow_order.setColumn(nRow, "F_NAME", l_DS_GW_H.getColumn(iRow,"NAME"));
        		}
        	}

        	if(l_DS_GW_C.rowcount != 0)
        	{
        		seqCnt = 0;
        		for(var iRow = 0; iRow < l_DS_GW_C.rowcount; iRow++)
        		{
        			seqCnt = seqCnt + 1;
        			nRow = l_ds_flow_order.addRow();
        			l_ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			l_ds_flow_order.setColumn(nRow, "KIND", "3");	//최종결재자
        			l_ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        			l_ds_flow_order.setColumn(nRow, "SABUN", l_DS_GW_C.getColumn(iRow,"SABUN"));
        			l_ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        			l_ds_flow_order.setColumn(nRow, "F_NEXT", null);
        			l_ds_flow_order.setColumn(nRow, "STATUS", null);
        			l_ds_flow_order.setColumn(nRow, "STORE", "0");
        			l_ds_flow_order.setColumn(nRow, "F_DATE", null);
        			l_ds_flow_order.setColumn(nRow, "JIKCHAK", l_DS_GW_C.getColumn(iRow,"JIKWI"));
        			l_ds_flow_order.setColumn(nRow, "BUSOR", l_DS_GW_C.getColumn(iRow,"BUSE"));
        			l_ds_flow_order.setColumn(nRow, "F_NAME", l_DS_GW_C.getColumn(iRow,"NAME"));
        		}
        	}

        	if(l_DS_GW_D.rowcount != 0)
        	{
        		seqCnt = 0;
        		for(var iRow = 0; iRow < l_DS_GW_D.rowcount; iRow++)
        		{
        			seqCnt = seqCnt + 1;
        			nRow = l_ds_flow_order.addRow();
        			l_ds_flow_order.setColumn(nRow, "I_FLOW_ID", i_flow_id);
        			l_ds_flow_order.setColumn(nRow, "KIND", "4");	//담당자
        			l_ds_flow_order.setColumn(nRow, "SEQ", seqCnt);
        			l_ds_flow_order.setColumn(nRow, "SABUN", l_DS_GW_D.getColumn(iRow,"SABUN"));
        			l_ds_flow_order.setColumn(nRow, "F_COMMENT", null);
        			l_ds_flow_order.setColumn(nRow, "F_NEXT", null);
        			l_ds_flow_order.setColumn(nRow, "STATUS", null);
        			l_ds_flow_order.setColumn(nRow, "STORE", "0");
        			l_ds_flow_order.setColumn(nRow, "F_DATE", null);
        			l_ds_flow_order.setColumn(nRow, "JIKCHAK", l_DS_GW_D.getColumn(iRow,"JIKWI"));
        			l_ds_flow_order.setColumn(nRow, "BUSOR", l_DS_GW_D.getColumn(iRow,"BUSE"));
        			l_ds_flow_order.setColumn(nRow, "F_NAME", l_DS_GW_D.getColumn(iRow,"NAME"));
        		}
        	}

        	var str_url = "JSP/gw/SQL_GW110_ORDER_INSERT.jsp";
        	var in_ds = "input=ds_flow_order:u";

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "lfn_saveOk", false, "P", false, this);
        }

        //기존 저장된 결재라인 가져오기
        this.lfn_I_FLOW_ORDER_LOAD = function(gubun, f_num, sabun, DS_FORMPATH, DS_GW_K, DS_GW_H, DS_GW_C, DS_GW_D) //GW120 Dataset 참고
        {
        	var str_url = "JSP/gw/SQL_GW180_03S_v2.jsp";
        	var strArg ="gubun=" + gubun
        			   +" f_num=" + f_num
        			   +" sabun=" + sabun;

        	var in_ds = "DS_FORMPATH=DS_FORMPATH"
        			  +" DS_GW_K=DS_GW_K"
        			  +" DS_GW_H=DS_GW_H"
        			  +" DS_GW_C=DS_GW_C"
        			  +" DS_GW_D=DS_GW_D";

        	var out_ds = "DS_FORMPATH=DS_FORMPATH"
        			  +" DS_GW_K=DS_GW_K"
        			  +" DS_GW_H=DS_GW_H"
        			  +" DS_GW_C=DS_GW_C"
        			  +" DS_GW_D=DS_GW_D";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, strArg, "", false, "P", false, this);
        }

        //I_FLOW_FORMPATH2에 저장된 결재라인 가져오기
        this.lfn_I_FLOW_FOMPAHT2_LOAD = function(sabun, dsFormPath)
        {
        	var str_url = "JSP/gw/SQL_GW121_Select1_v2.jsp";
        	var in_ds = "dsFormPath=dsFormPath";
        	var out_ds = "dsFormPath=dsFormPath";
        	var strArg = "GUBUN=01"
        			   + " F_NUM=" + 0
        			   + " SABUN=" + sabun;
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, strArg, "", false, "P", false, this);
        }

        //##########################################################################
        // 금액에 따른 결재라인 저장
        // I_FlOW_ID : 전자결재 ID
        // totalAmount : 총금액
        // setAmountCode : 금액에 따른 결재라인 코드
        // deptMnge : 부서장 여부 ("1" 부서장, "0" 일반)
        // elecAprv : 전자결재 여부 (1 : 수기결재)
        // sectionExpenses : 부서운영비 체크  ("1" 부서운영비, "0, null" 일반비용)
        // sectionCode : 부서코드 (교판/학판 영업부 별도 결재라인 적용)
        //##########################################################################
        this.lfn_Set_Approval = function( I_FLOW_ID, totalAmount, setAmountCode, deptMnge, elecAprv, sectionExpenses, sectionCode, dsFormpath, ds_flow_order, ds_flow_order2)
        {
        	l_ds_flow_order = ds_flow_order;
        	l_dsFormpath = dsFormpath;
        	l_ds_flow_order2 = ds_flow_order2;

        	if(I_FLOW_ID != null)
        	{
        		//금액변경에 따른 결재라인 변경 체크
        		var rtSetCode = this.lfn_Amount_Approval(totalAmount, sectionCode, deptMnge, sectionExpenses);

        		if(elecAprv == "1") //수기결재인 경우
        		{
        			if(setAmountCode != rtSetCode)	//결재라인 변경 시
        			{
        				this.lfn_I_FLOW_ORDER_SAVE_AMOUNT(I_FLOW_ID);

        				this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT(I_FLOW_ID, sectionCode, rtSetCode);

        				setAmountCode = rtSetCode;
        			}
        		}
        		else
        		{
        			if(setAmountCode != rtSetCode)	//결재라인 변경 시
        			{
        				this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT_2(I_FLOW_ID, sectionCode, rtSetCode);

        				this.lfn_I_FLOW_ORDER_SAVE_AMOUNT_2(I_FLOW_ID);
        			}
        		}
        	}
        }

        //##########################################################################
        // 금액에 따른 결재라인 설정
        //totalAmount : 총금액
        //sectionCode : 부서코드
        //deptMnge : 부서장 여부 ("1" 부서장, "0" 일반)
        //sectionExpenses : 부서운영비 체크 ("1" 부서운영비, "0, null" 일반비용)
        //##########################################################################
        this.lfn_Amount_Approval = function(totalAmount, sectionCode, deptMnge, sectionExpenses)
        {
        	var rtCode = 1;

        	if(sectionExpenses == "1") 			// 부서운영비 or  업무시식비
        	{
        		if(deptMnge != "1")
        			rtCode = 1;
        		else
        			rtCode = 2;	//부서장이면 본부장 결재
        	}
        	else if(sectionExpenses == "3")		// 기부금
        	{
        		if(totalAmount <= 100000) //10만원이하 부서장 결재
        		{
        			if(deptMnge != "1")
        				rtCode = 1;
        			else
        				rtCode = 2;	//부서장이면 본부장 결재
        		}
        		else if((totalAmount > 100000) && (totalAmount <= 300000))	//10만원 초과 30만원 이하 본부장 결재
        			rtCode = 2;
        		else if((totalAmount > 300000) && (totalAmount <= 500000))	//30만원 초과 50만원 이하 부사장 결재
        			rtCode = 4;
        		else														//회장 결재
        			rtCode = 5;
        	}
        	else								//일반비용
        	{
        		this.lfn_Check_Buse(sectionCode);				//PAYDECIDE.PAYKIND_BUSE 에 포함되는 부서인지

        		if(nexacro.getApplication().gv_rt_value > 0 )	//this.lfn_Check_Buse(sectionCode) 함수paykind_select.jsp 에서 받은 값
        		{
        			if(totalAmount <= 300000)										//30만원 이하 부서장 결재
        			{
        				if(deptMnge != "1")
        					rtCode = 1;
        				else
        					rtCode = 2;	//부서장이면 본부장 결재
        			}
        			else if ((totalAmount > 300000) && (totalAmount <=3000000))		//30만원 초과 300만원 이하 부사장 결재
        				rtCode = 4;
        			else															//300만원 초과 회장 결재
        				rtCode = 5;
        		}
        		else
        		{
        			if(totalAmount <= 100000) 										//10만원 이하 부서장 결재
        			{
        				if(deptMnge != "1")
        					rtCode = 1;
        				else
        					rtCode = 2;	//부서장이면 본부장 결재
        			}
        			else if((totalAmount > 100000) && (totalAmount <=300000))		//10만원 초과 30만원 이하 본부장 결재
        				rtCode = 2;
        			else if((totalAmount > 300000) && (totalAmount <=3000000))		//30만원 초과 300만원 이하 부사장 결재
        				rtCode = 4;
        			else															//300만원 초과 회장 결재
        				rtCode = 5;
        		}
        	}

        	return rtCode;
        }

        this.lfn_Check_Buse = function(sectionCode)
        {
        	strArg = "Section_Code=" + sectionCode;
        	this.gfn_TransactionP("search","JSP/gw/paykind_select.jsp", "", "", strArg, "fnSectionPayCallback", false, "P", false, this);
        }

        //##########################################################################
        // 금액에 따른 결재라인 저장 [EDIT]
        // I_FlOW_ID : 전자결재 ID
        // totalAmount : 총금액
        // setAmountCode : 금액에 따른 결재라인 코드
        // deptMnge : 부서장 여부 ("1" 부서장, "0" 일반)
        // elecAprv : 전자결재 여부 (1 : 수기결재 0 : 전자결재 3 : 외주작업)
        // sectionExpenses : 부서운영비 체크  ("1" 부서운영비, "0, null" 일반비용)
        // sectionCode : 부서코드 (교판/학판 영업부 별도 결재라인 적용)
        //##########################################################################
        this.lfn_Set_Approval_Edit = function( I_FLOW_ID, totalAmount, setAmountCode, deptMnge, elecAprv, sectionExpenses, sectionCode, dsFormpath, ds_flow_order, ds_flow_order2)
        {
        	l_ds_flow_order = ds_flow_order;
        	l_dsFormpath = dsFormpath;
        	l_ds_flow_order2 = ds_flow_order2;

        	if(I_FLOW_ID != null)
        	{
        		//금액변경에 따른 결재라인 변경 체크
        		var rtSetCode = this.lfn_Amount_Approval_Edit(totalAmount, sectionCode, deptMnge, sectionExpenses);

        		if(elecAprv == "1") //수기결재인 경우
        		{
        			if(setAmountCode != rtSetCode)	//결재라인 변경 시
        			{
        				this.lfn_I_FLOW_ORDER_SAVE_AMOUNT(I_FLOW_ID);

        				this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT(I_FLOW_ID, sectionCode, rtSetCode);

        				setAmountCode = rtSetCode;
        			}
        		}
        		else if(elecAprv == "0") //전자결재인 경우
        		{
        			if(setAmountCode != rtSetCode)	//결재라인 변경 시
        			{
        				this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT_Edit(I_FLOW_ID, sectionCode, rtSetCode);

        				this.lfn_I_FLOW_ORDER_SAVE_AMOUNT_2(I_FLOW_ID);

        				setAmountCode = rtSetCode;
        			}
        		}
        		else
        		{
        			this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT_Edit2(I_FLOW_ID, sectionCode, rtSetCode);

        			this.lfn_I_FLOW_ORDER_SAVE_AMOUNT_2(I_FLOW_ID);

        			setAmountCode = rtSetCode;
        		}
        	}
        }

        //##########################################################################
        // 금액에 따른 결재라인 설정 [EDIT]
        //totalAmount : 총금액
        //sectionCode : 부서코드
        //deptMnge : 부서장 여부 ("1" 부서장, "0" 일반)
        //sectionExpenses : 부서운영비 체크 ("1" 부서운영비, "0, null" 일반비용)
        //##########################################################################
        this.lfn_Amount_Approval_Edit = function(totalAmount, sectionCode, deptMnge, sectionExpenses)
        {
        	var rtCode = 1;

        	if(sectionExpenses == "1")		//부서운영비
        	{
        		if(deptMnge != "1")
        			rtCode = 1;
        		else
        			rtCode = 2;							//부서장이면 본부장 결재
        	}
        	else							//일반비용
        	{
        		if(totalAmount <= 100000)				//10만원 이하 부서장 결재
        		{
        			if(sectionCode == "99000")			//중등교과서는 부서장 처리
        				rtCode = 2;
        			else if(deptMnge != "1")
        				rtCode = 1;
        			else
        				rtCode = 2;						//10만원 이하라도 부서장이 결재하면 본부장 결재
        		}
        		else
        			rtCode = 2;							//10만원 초과 본부장 결재
        	}
        	 return rtCode;
        }

        //수기결재 시 저장될 I_FLOW_ORDER(부서승인까지만)
        this.lfn_I_FLOW_ORDER_SAVE_AMOUNT = function(I_FlOW_ID)
        {
        	l_ds_flow_order.clearData();

        	var isPosition = false;	//팀장인지 아닌지 구분 변수
        	//팀장(53)이 있는지 확인 후 있으면 팀장님까지 결재
        	//없거나 자신이 팀장이면 본부장까지 결재
        	for( var i=0; i < l_dsFormpath.rowcount; i++)
        	{
        		if(l_dsFormpath.getColumn(i, "POSITION_CODE2") == '53')
        		{
        			l_dsFormpath.filter(" POSITION_CODE >='50' ");
        			isPosition = true;
        			break;
        		}
        	}

        	if(isPosition == false)
        		l_dsFormpath.filter(" POSITION_CODE >='40' ");

        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        	for( var i=0; i < l_dsFormpath.rowcount; i++)
        	{
        		var nRow = l_ds_flow_order.addRow();

        		l_ds_flow_order.setColumn(nRow, "I_FLOW_ID" , I_FlOW_ID);
        		l_ds_flow_order.setColumn(nRow, "KIND" , Eco.decode(i, 0, "0", "1"));
        		l_ds_flow_order.setColumn(nRow, "SEQ" , i+1);
        		l_ds_flow_order.setColumn(nRow, "SABUN" , l_dsFormpath.getColumn(i, "APPROVAL_EMP"));
        		l_ds_flow_order.setColumn(nRow, "F_COMMENT" , null);
        		l_ds_flow_order.setColumn(nRow, "F_NEXT" , null);
        		l_ds_flow_order.setColumn(nRow, "STATUS" , Eco.decode(i, 0, "1", "9"));
        		l_ds_flow_order.setColumn(nRow, "STORE" , "0");
        		l_ds_flow_order.setColumn(nRow, "F_DATE" ,  Eco.decode(i, 0, today, ""));
        		l_ds_flow_order.setColumn(nRow, "JIKCHAK" ,  l_dsFormpath.getColumn(i, "POSITION_NAME"));
        		l_ds_flow_order.setColumn(nRow, "BUSOR" ,  l_dsFormpath.getColumn(i, "SECTION_NAME"));
        		l_ds_flow_order.setColumn(nRow, "F_NAME" ,  l_dsFormpath.getColumn(i, "EMPLOYEE_NAME"));
        		l_ds_flow_order.setColumn(nRow, "POSITION_CODE2" ,  l_dsFormpath.getColumn(i, "POSITION_CODE2"));
        	}

        	var str_url = "JSP/gw/SQL_GW110_ORDER_INSERT.jsp";
        	var in_ds = "input=ds_flow_order:A";

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "", false, "P", false, this);
        }

        //수기결재 시 저장될 I_FLOW_ORDER2
        this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT = function(I_FlOW_ID, sectionCode, rtSetCode)
        {
        	l_ds_flow_order2.clearData();
        	var iRow, nRow;

        	//본부장이 오사장님인 경우 변수처리
        	var strPosition = l_dsFormpath.getColumn(l_dsFormpath.findRow("POSITION_CODE2","51"), "APPROVAL_EMP");

        	switch(rtSetCode)
        	{
        		case 1: 	//10만원 이하 부서장 결재 ( 없으면 본부장 결재)
        			if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        			{
        				if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        				{
        					if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        						iRow = l_dsFormpath.findRow("POSITION_CODE2","60") - 1;
        					else
        						iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        				}
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        			}
        			else
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","52");
        			break;

        		case 2:		//10만원 초과 30만원 이하 본부장 결재
        			if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","60");
        			else
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        			break;

        		case 3:		//30만원 초과 50만원 이하 부사장 결재
        			 if( strPosition == "C81002" )
        			 {
        			   for(var i = 0 ;  i < dsFormpath.rowcount() ; i++ )
        			   {
        				 if ( l_dsFormpath.getColumn(i,"POSITION_CODE") ==  "30" && l_dsFormpath.getColumn(i,"POSITION_CODE2") !=  "51")
        				   iRow = i;
        			   }
        			}
        			else
        				 iRow = l_dsFormpath.findRow("POSITION_CODE2","30");	//사장
        			break;

        		case 4:		//50만원초과 300만원이하 감사, 사장결재
        			if( strPosition == "C81002" )
        			{
        			   for(var i = 0 ;  i < dsFormpath.rowcount() ; i++ )
        			   {
        				 if ( l_dsFormpath.getColumn(i,"POSITION_CODE") ==  "30" && l_dsFormpath.getColumn(i,"POSITION_CODE2") !=  "51")
        				   iRow = i;
        			   }
        			}
        			else
        				 iRow = l_dsFormpath.findRow("POSITION_CODE2","30");
        			break;
        		default:	//300만원 초과 회장결재
        			iRow = l_dsFormpath.rowcount;
        	}

        	for(var i=0; i<=iRow; i++)
        	{
        		nRow = l_ds_flow_order2.addRow();

        		l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow, "F_SEQ", i+1);
        		l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", l_dsFormpath.getColumn(i, "SECTION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", l_dsFormpath.getColumn(i, "POSITION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", l_dsFormpath.getColumn(i, "APPROVAL_EMP") );
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", l_dsFormpath.getColumn(i, "POSITION_CODE2") );
        	}

        	//영유아컨텐츠 유신형 이사님 선택 추가
        	if(sectionCode == "9A510" || sectionCode == "")
        	{
        		var rtn = this.confirm("유신형 전무님을\r\n결재선에 추가 하시겠습니까?", "결재선추가");

        		if(rtn)
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "51");
        			l_ds_flow_order2.insertRow(nRow);

        			l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        			l_ds_flow_order2.setColumn(nRow, "F_SEQ", nRow+1);
        			l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", "10000");
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", "35");
        			l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", "C16133" );
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", "");

        			for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        				l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        		}

        	}

        	//본부장이 사장님인 경우 30만원 초과시 사장님 자리에서 오사장님 삭제
        	if(strPosition == "C81002" && rtSetCode >= 3)
        	{
        		nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "60")
        		l_ds_flow_order2.deleteRow(nRow);

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        	}

        	var str_url = "JSP/gw/SQL_GW110_ORDER2_INSERT_V2.jsp";
        	var inds = "input=ds_flow_order2:A";
        	this.gfn_TransactionP("insert", str_url, inds, "", "", "", false, "P", false, this);

        }

        //전자결재 시 저장될 I_FLOW_ORDER2
        this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT_2 = function(I_FLOW_ID, sectionCode, rtSetCode)
        {
        	var nRow, iRow;
        	l_ds_flow_order2.clearData();

        	//본부장이 오사장님일 경우 변수처리
        	var strPosition = l_dsFormpath.getColumn(l_dsFormpath.findRow("POSITION_CODE2","51"), "APPROVAL_EMP");

        	switch(rtSetCode) {
        	case 1:		//10만원 이하 부서장 결재
        		if(sectionCode == "9A610" //아동마케팅팀
        	         || sectionCode == "9A620" //회원사업팀
        	         || sectionCode == "9A621" //회원사업파트
        	         || sectionCode == "9A622" //회원상담파트
        	         || sectionCode == "9A630" //유치사업팀
        	         || sectionCode == "9A631" //유치사업팀 R&BD파트
        	         || sectionCode == "9A632" //유치사업팀 영업파트
        	         || sectionCode == "9A633") //유치사업팀 전략파트
        			 {
        				if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        				{
        					if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        					{
        						if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        							iRow = l_dsFormpath.findRow("POSITION_CODE2","60") - 1;
        						else
        							iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        					}
        					else
        						iRow = l_dsFormpath.findRow("POSITION_CODE2","52");
        				}
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        			 }else
        			 {
        				if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        				{
        					if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        					{
        						if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        							iRow = l_dsFormpath.findRow("POSITION_CODE2","60") - 1;
        						else
        							iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        					}
        					else
        						iRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        				}
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","52");
        			}
        		break;
        	case 2:		//10만원 초과 30만원 이하 본부장 결재
        		if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","60") == -1)
        			{
        				if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","52");
        			}else
        			{
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","60");
        			}
        		}else
        			iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        		break;
        	case 3:		//30만원 초과 50만원 이하 부사장 결재
        		if( strPosition == "C81002" )
        		{
        			for(var i = 0 ;  i < l_dsFormpath.rowcount() ; i++ )
        			{
        				if ( l_dsFormpath.getColumn(i,"POSITION_CODE") ==  "30" && l_dsFormpath.getColumn(i,"POSITION_CODE2") !=  "51")
        					iRow = i;
        			}
        		}
        		else
        			iRow = l_dsFormpath.findRow("POSITION_CODE2","30");
        		break;
        	case 4:		//50만원 초과 300만원 이하까지 감사,사장 결재
        		if( strPosition == "C81002" )
        		{
        			for(var i = 0 ;  i < l_dsFormpath.rowcount; i++ )
        			{
        				if ( l_dsFormpath.getColumn(i,"POSITION_CODE") ==  "30" && l_dsFormpath.getColumn(i,"POSITION_CODE2") !=  "51")
        					iRow = i;
        			}
        		}
        		else
        			iRow = l_dsFormpath.findRow("POSITION_CODE","30");
        		break;
        	default:	//300만원 초과 회장 결재
        		iRow = l_dsFormpath.findRow("POSITION_CODE","10");
        	}

        	for(var i=0; i <= iRow; i++)
        	{
        		nRow = l_ds_flow_order2.addRow();

        		l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow, "F_SEQ", i+1);
        		l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", l_dsFormpath.getColumn(i, "SECTION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", l_dsFormpath.getColumn(i, "POSITION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", l_dsFormpath.getColumn(i, "APPROVAL_EMP") );
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", l_dsFormpath.getColumn(i, "POSITION_CODE2") );
        	}

        	if(rtSetCode == 1)
        	{
        		if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        				nRow = l_ds_flow_order2.findRow("POSITION_CODE2","51");
        			else
        				nRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        		}
        		else
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","52");

        		if(nRow < 0 )
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","60");
        			nRow = nRow - 1;
        		}

        		if(nRow < 0 )
        			nRow = l_ds_flow_order2.rowcount - 1;

        		l_ds_flow_order2.insertRow(nRow+1);

        		l_ds_flow_order2.setColumn(nRow+1, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow+1, "F_SEQ", nRow+1);
        		l_ds_flow_order2.setColumn(nRow+1, "SECTION_CODE", "92000");
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE", "99");
        		l_ds_flow_order2.setColumn(nRow+1, "EMPLOYEE_ID", "C99994" );	//세무
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE2", "00");

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);

        	}else if(rtSetCode == 2 || rtSetCode == 3)
        	{
        		if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        				nRow = l_ds_flow_order2.findRow("POSITION_CODE2","53");
        			else
        				nRow = l_ds_flow_order2.findRow("POSITION_CODE2","52");
        		}
        		else
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","51");

        		if(nRow < 0 )
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","60");
        			nRow = nRow - 1;
        		}

        		if(nRow < 0 )
        			nRow = l_ds_flow_order2.rowcount - 1;

        		l_ds_flow_order2.insertRow(nRow+1);

        		l_ds_flow_order2.setColumn(nRow+1, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow+1, "F_SEQ", nRow+1);
        		l_ds_flow_order2.setColumn(nRow+1, "SECTION_CODE", "92000");
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE", "99");
        		l_ds_flow_order2.setColumn(nRow+1, "EMPLOYEE_ID", "C99994" );	//세무
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE2", "00");

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);

        	}else if(rtSetCode == 5)
        	{
        		nRow = l_ds_flow_order2.findRow("POSITION_CODE2","51");	//본부장 뒤

        		if(nRow < 0)
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","60");
        			nRow = nRow -1;
        		}

        		if(nRow < 0)
        		{
        			nRow = l_ds_flow_order2.findRow("EMPLOYEE_ID","C12225");
        			nRow = nRow -1;
        		}

        		l_ds_flow_order2.insertRow(nRow+1);

        		l_ds_flow_order2.setColumn(nRow+1, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow+1, "F_SEQ", nRow+1);
        		l_ds_flow_order2.setColumn(nRow+1, "SECTION_CODE", "92000");
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE", "99");
        		l_ds_flow_order2.setColumn(nRow+1, "EMPLOYEE_ID", "C99994" );	//세무
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE2", "00");

        		l_ds_flow_order2.insertRow(nRow+2);

        		l_ds_flow_order2.setColumn(nRow+2, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow+2, "F_SEQ", nRow+1);
        		l_ds_flow_order2.setColumn(nRow+2, "SECTION_CODE", "92000");
        		l_ds_flow_order2.setColumn(nRow+2, "POSITION_CODE", "99");
        		l_ds_flow_order2.setColumn(nRow+2, "EMPLOYEE_ID", "C99990" );	//감사
        		l_ds_flow_order2.setColumn(nRow+2, "POSITION_CODE2", "00");


        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);

        	}else	//사장님일 경우
        	{
        		nRow = l_ds_flow_order2.findRow("POSITION_CODE2","51");	//본부장 뒤

        		if(nRow < 0)
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","60");
        			nRow = nRow -1;
        		}

        		if(nRow < 0)
        		{
        			nRow = l_ds_flow_order2.findRow("EMPLOYEE_ID","C12225");
        			nRow = nRow -1;
        		}

        		l_ds_flow_order2.insertRow(nRow+1);

        		l_ds_flow_order2.setColumn(nRow+1, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow+1, "F_SEQ", nRow+1);
        		l_ds_flow_order2.setColumn(nRow+1, "SECTION_CODE", "92000");
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE", "99");
        		l_ds_flow_order2.setColumn(nRow+1, "EMPLOYEE_ID", "C99994" );	//세무
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE2", "00");

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        	}


        	//영유아컨텐츠 유신형 이사님 선택 추가
        	if(sectionCode == "9A510" || sectionCode == "")
        	{
        		var rtn = this.confirm("유신형 전무님을\r\n결재선에 추가 하시겠습니까?", "결재선추가");

        		if(rtn)
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "51");

        			if(nRow < 0)
        				nRow = l_ds_flow_order2.rowcount - 1;

        			l_ds_flow_order2.insertRow(nRow);

        			l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        			l_ds_flow_order2.setColumn(nRow, "F_SEQ", nRow+1);
        			l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", "10000");
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", "35");
        			l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", "C16133" );
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", "");

        			for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        				l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        		}

        	}

        	//본부장이 사장님인 경우 30만원 초과시 사장님 자리에서 오사장님 삭제
        	if(strPosition == "C81002" && rtSetCode >= 3)
        	{
        		nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "60")
        		l_ds_flow_order2.deleteRow(nRow);

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        	}

        	var str_url = "JSP/gw/SQL_GW110_ORDER2_INSERT_V2.jsp";
        	var inds = "input=ds_flow_order2:A";
        	this.gfn_TransactionP("insert", str_url, inds, "", "", "", false, "P", false, this);

        }

        //전자결재 시 저장될 I_FLOW_ORDER
        this.lfn_I_FLOW_ORDER_SAVE_AMOUNT_2 = function(I_FLOW_ID)
        {
        	l_ds_flow_order.clearData();

        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");

        	for(var i=0; i< l_ds_flow_order2.rowcount; i++)
        	{
        		var nRow = l_ds_flow_order.addRow();

        		l_ds_flow_order.setColumn(nRow, "I_FLOW_ID" , I_FLOW_ID);
        		l_ds_flow_order.setColumn(nRow, "KIND" , Eco.decode(i, 0, "0", "1"));
        		l_ds_flow_order.setColumn(nRow, "SEQ" , i+1);
        		l_ds_flow_order.setColumn(nRow, "SABUN" , l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID"));
        		l_ds_flow_order.setColumn(nRow, "F_COMMENT" , null); // g_f_name 어떻게 처리,,
        		l_ds_flow_order.setColumn(nRow, "F_NEXT" , null);
        		l_ds_flow_order.setColumn(nRow, "STATUS" , Eco.decode(i, 0, "1", "9"));
        		l_ds_flow_order.setColumn(nRow, "STORE" , "0");
        		l_ds_flow_order.setColumn(nRow, "F_DATE" ,  Eco.decode(i, 0, today, ""));
        	/***** 출력용으로 추가된 결재자의 경우도 결재 할 수 있게 이곳에 추가해 준다		***********/
        	/***** 20150714기준  감사실, 감사, 이복선이사, 최영인부장, 최정민사장           ***********/
        		l_ds_flow_order.setColumn(nRow, "JIKCHAK" ,  Eco.decode(l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID"), "C16133","전무", "C01005","상무", "C15071","이사","C99994", " ","C99990", " ", "C07067", "감사", l_dsFormpath.getColumn(l_dsFormpath.findRow("APPROVAL_EMP", l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID")), "POSITION_NAME")));
        		l_ds_flow_order.setColumn(nRow, "BUSOR" ,  Eco.decode(l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID"), "C16133","임원", "C01005","임원", "C15071","임원", "C99994", "확인1", "C99990", "확인2", "C07067", "임원", l_dsFormpath.getColumn(l_dsFormpath.findRow("APPROVAL_EMP", l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID")), "SECTION_NAME")));
        		l_ds_flow_order.setColumn(nRow, "F_NAME" ,  Eco.decode(l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID"), "C16133","유신형", "C01005","이복선", "C15071","한종설", "C99994", "확인1", "C99990", "확인2", "C07067", "최성호", l_dsFormpath.getColumn(l_dsFormpath.findRow("APPROVAL_EMP", l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID")), "EMPLOYEE_NAME")));
        		l_ds_flow_order.setColumn(nRow, "POSITION_CODE2" , Eco.decode(l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID"), "C16133","07", "C01005","07", "C15071","07", "C99994", "00", "C99990", "00", "C07067", "01", l_dsFormpath.getColumn(l_dsFormpath.findRow("APPROVAL_EMP", l_ds_flow_order2.getColumn(i, "EMPLOYEE_ID")), "POSITION_CODE2")));
        	}

        	var str_url = "JSP/gw/SQL_GW110_ORDER_INSERT.jsp";
        	var inds = "input=ds_flow_order:A";
        	this.gfn_TransactionP("insert", str_url, inds, "", "", "", false, "P", false, this);
        }

        //전자결재 시 저장될 I_FLOW_ORDER2 [Edit] 감사부 포함
        this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT_Edit = function(I_FLOW_ID, sectionCode, rtSetCode)
        {
        	var nRow, iRow;
        	l_ds_flow_order2.clearData();

        	//본부장이 오사장님일 경우 변수처리
        	var strPosition = l_dsFormpath.getColumn(l_dsFormpath.findRow("POSITION_CODE2","51"), "APPROVAL_EMP");

        	switch(rtSetCode) {
        	case 1:		//10만원 이하 부서장 결재
        		if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        			{
        				if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","60") - 1;
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        			}
        			else
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        			}
        		else
        			iRow = l_dsFormpath.findRow("POSITION_CODE2","52");

        		break;
        	case 2:
        		if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        			{
        				if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","60")-1;
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        			}else
        			{
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","52");
        			}
        		}else
        			iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        		break;
        	default:
        		iRow = l_dsFormpath.rowcount;
        	}

        	for(var i=0; i <= iRow; i++)
        	{
        		nRow = l_ds_flow_order2.addRow();

        		l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow, "F_SEQ", i+1);
        		l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", l_dsFormpath.getColumn(i, "SECTION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", l_dsFormpath.getColumn(i, "POSITION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", l_dsFormpath.getColumn(i, "APPROVAL_EMP") );
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", l_dsFormpath.getColumn(i, "POSITION_CODE2") );
        	}

        	if(rtSetCode == 1)
        	{
        		if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        				nRow = l_ds_flow_order2.findRow("POSITION_CODE2","53");
        			else
        				nRow = l_dsFormpath.findRow("POSITION_CODE2","52");
        		}
        		else
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","51");

        		if(nRow < 0 )
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","60");
        			nRow = nRow - 1;
        		}

        		if(nRow < 0 )
        			nRow = l_ds_flow_order2.rowcount - 1;

        		l_ds_flow_order2.insertRow(nRow+1);

        		l_ds_flow_order2.setColumn(nRow+1, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow+1, "F_SEQ", nRow+1);
        		l_ds_flow_order2.setColumn(nRow+1, "SECTION_CODE", "92000");
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE", "99");
        		l_ds_flow_order2.setColumn(nRow+1, "EMPLOYEE_ID", "C99994" );	//세무
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE2", "00");

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);

        	}else if(rtSetCode == 2)
        	{
        		if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        				nRow = l_ds_flow_order2.findRow("POSITION_CODE2","53");
        			else
        				nRow = l_ds_flow_order2.findRow("POSITION_CODE2","52");
        		}
        		else
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","51");

        		if(nRow < 0 )
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2","60");
        			nRow = nRow - 1;
        		}

        		if(nRow < 0 )
        			nRow = l_ds_flow_order2.rowcount - 1;

        		l_ds_flow_order2.insertRow(nRow+1);

        		l_ds_flow_order2.setColumn(nRow+1, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow+1, "F_SEQ", nRow+1);
        		l_ds_flow_order2.setColumn(nRow+1, "SECTION_CODE", "92000");
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE", "99");
        		l_ds_flow_order2.setColumn(nRow+1, "EMPLOYEE_ID", "C99994" );	//세무 무조건 넣음
        		l_ds_flow_order2.setColumn(nRow+1, "POSITION_CODE2", "00");

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);

        	}


        	//영유아컨텐츠 유신형 이사님 선택 추가
        	if(sectionCode == "9A510" || sectionCode == "")
        	{
        		var rtn = this.confirm("유신형 전무님을\r\n결재선에 추가 하시겠습니까?", "결재선추가");

        		if(rtn)
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "51");

        			if(nRow < 0)
        				nRow = l_ds_flow_order2.rowcount - 1;

        			l_ds_flow_order2.insertRow(nRow);

        			l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        			l_ds_flow_order2.setColumn(nRow, "F_SEQ", nRow+1);
        			l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", "10000");
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", "35");
        			l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", "C16133" );
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", "");

        			for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        				l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        		}

        	}

        	//본부장이 사장님인 경우 30만원 초과시 사장님 자리에서 오사장님 삭제
        	if(strPosition == "C81002" && rtSetCode >= 2)
        	{
        		nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "51")
        		l_ds_flow_order2.deleteRow(nRow);

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        	}

        	var str_url = "JSP/gw/SQL_GW110_ORDER2_INSERT_V2.jsp";
        	var inds = "input=ds_flow_order2:A";
        	this.gfn_TransactionP("insert", str_url, inds, "", "", "", false, "P", false, this);
        }

        //전자결재 시 저장될 I_FLOW_ORDER2 [Edit] 감사부 제외
        this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT_Edit2 = function(I_FLOW_ID, sectionCode, rtSetCode)
        {
        	var nRow, iRow;
        	l_ds_flow_order2.clearData();

        	//본부장이 오사장님일 경우 변수처리
        	var strPosition = l_dsFormpath.getColumn(l_dsFormpath.findRow("POSITION_CODE2","51"), "APPROVAL_EMP");

        	switch(rtSetCode) {
        	case 1:		//10만원 이하 부서장 결재
        		if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        			{
        				if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","60") - 1;
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        			}
        			else
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        			}
        		else
        			iRow = l_dsFormpath.findRow("POSITION_CODE2","52");

        		break;
        	case 2:
        		if(l_dsFormpath.findRow("POSITION_CODE2","51") == -1)
        		{
        			if(l_dsFormpath.findRow("POSITION_CODE2","52") == -1)
        			{
        				if(l_dsFormpath.findRow("POSITION_CODE2","53") == -1)
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","60")-1;
        				else
        					iRow = l_dsFormpath.findRow("POSITION_CODE2","53");
        			}else
        			{
        				iRow = l_dsFormpath.findRow("POSITION_CODE2","52");
        			}
        		}else
        			iRow = l_dsFormpath.findRow("POSITION_CODE2","51");
        		break;
        	default:
        		iRow = l_dsFormpath.rowcount;
        	}

        	for(var i=0; i <= iRow; i++)
        	{
        		nRow = l_ds_flow_order2.addRow();

        		l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        		l_ds_flow_order2.setColumn(nRow, "F_SEQ", i+1);
        		l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", l_dsFormpath.getColumn(i, "SECTION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", l_dsFormpath.getColumn(i, "POSITION_CODE"));
        		l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", l_dsFormpath.getColumn(i, "APPROVAL_EMP") );
        		l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", l_dsFormpath.getColumn(i, "POSITION_CODE2") );
        	}

        	//영유아컨텐츠 유신형 이사님 선택 추가
        	if(sectionCode == "9A510" || sectionCode == "")
        	{
        		var rtn = this.confirm("유신형 전무님을\r\n결재선에 추가 하시겠습니까?", "결재선추가");

        		if(rtn)
        		{
        			nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "30");

        			if(nRow >= 0)
        				nRow = l_ds_flow_order2.rowcount - 1;
        			else
        				nRow = l_ds_flow_order2.rowcount;

        			l_ds_flow_order2.insertRow(nRow);

        			l_ds_flow_order2.setColumn(nRow, "I_FLOW_ID", I_FLOW_ID);
        			l_ds_flow_order2.setColumn(nRow, "F_SEQ", nRow+1);
        			l_ds_flow_order2.setColumn(nRow, "SECTION_CODE", "10000");
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE", "35");
        			l_ds_flow_order2.setColumn(nRow, "EMPLOYEE_ID", "C16133" );
        			l_ds_flow_order2.setColumn(nRow, "POSITION_CODE2", "");

        			for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        				l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        		}
        	}

        	//본부장이 사장님인 경우 30만원 초과시 사장님 자리에서 오사장님 삭제
        	if(strPosition == "C81002" && rtSetCode >= 2)
        	{
        		nRow = l_ds_flow_order2.findRow("POSITION_CODE2", "60")
        		l_ds_flow_order2.deleteRow(nRow);

        		for(var i=0; i<l_ds_flow_order2.rowcount; i++)
        			l_ds_flow_order2.setColumn(i, "F_SEQ", i+1);
        	}

        	var str_url = "JSP/gw/SQL_GW110_ORDER2_INSERT_V2.jsp";
        	var inds = "input=ds_flow_order2:A";
        	this.gfn_TransactionP("insert", str_url, inds, "", "", "", false, "P", false, this);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
