(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW200");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_flow_form", this);
            obj._setContents("<ColumnInfo><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"f_num\" type=\"STRING\" size=\"256\"/><Column id=\"f_fnum\" type=\"STRING\" size=\"256\"/><Column id=\"f__name\" type=\"STRING\" size=\"256\"/><Column id=\"f_prior\" type=\"STRING\" size=\"256\"/><Column id=\"f_content\" type=\"STRING\" size=\"256\"/><Column id=\"f_date\" type=\"STRING\" size=\"256\"/><Column id=\"f_during\" type=\"STRING\" size=\"256\"/><Column id=\"f_idNo\" type=\"STRING\" size=\"256\"/><Column id=\"f_acnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FLIST", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DURING\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_PRIOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AP\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"F_PAYGB\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"F_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"F_ARG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_K", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_H", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_C", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_D", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","68","10","167","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"??????????????? ??????B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Substitute",null,"7.50%","78","24","6.11%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("??????");
            obj.set_font("bold 14px/normal \"??????????????? ??????\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","70","105","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1. ??????????????????");
            obj.set_background("#fffff");
            obj.set_color("#213a2c");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","70","155","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2. ??????????????????");
            obj.set_background("#fffff");
            obj.set_color("#213a2c");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","70","205","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3. ??????????????????");
            obj.set_background("#fffff");
            obj.set_color("#213a2c");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","70","255","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4. ?????????????????????");
            obj.set_background("#fffff");
            obj.set_color("#213a2c");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","70","305","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5. ??????????????????");
            obj.set_background("#fffff");
            obj.set_color("#213a2c");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","72","355","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6. ??? ??? ??? ??????");
            obj.set_background("#fffff");
            obj.set_color("#213a2c");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","71","405","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7. ??????????????????");
            obj.set_background("#fffff");
            obj.set_color("#213a2c");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #7fb39d");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_list","273","95",null,null,"60","100",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("DS_FLIST");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"84\"/><Column size=\"86\"/><Column size=\"96\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"?????????\"/><Cell col=\"1\" text=\"????????????\"/><Cell col=\"2\" text=\"???????????????\"/><Cell col=\"3\" text=\"?????????\"/></Band><Band id=\"body\"><Cell text=\"bind:F_NAME\"/><Cell col=\"1\" text=\"bind:F_DURING\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"bind:AP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("isEmpty","540","290","220","63",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("????????? ?????????????????? ????????? ????????????.");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",950,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW200.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW200.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("GW200.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("GW200.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var f_num = "";
        var gv_sabun = "C20141";//nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.btn_Substitute_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.GW200_onload = function(obj,e)
        {
        	this.Static00_onclick("1. ??????????????????");
        };

        this.clear_Ok = function()
        {
        	this.DS_GW_K.clearData();
        	this.DS_GW_H.clearData();
        	this.DS_GW_C.clearData();
        	this.DS_GW_D.clearData();

        	this.DS_FORMPATH.clearData();
        }

        this.Static00_onclick = function(obj,e)
        {
        	var str_arg = "gubun ='01'";

        	if(obj.text == "1. ??????????????????")
        		str_arg += " f_fnum ='1'";
        	else if(obj.text == "2. ??????????????????")
        		str_arg += " f_fnum ='2'";
        	else if(obj.text == "3. ??????????????????")
        		str_arg += " f_fnum ='3'";
        	else if(obj.text == "4. ?????????????????????")
        		str_arg += " f_fnum ='4'";
        	else if(obj.text == "5. ??????????????????")
        		str_arg += " f_fnum ='5'";
        	else if(obj.text == "6. ??? ??? ??? ??????")
        		str_arg += " f_fnum ='6'";
        	else if(obj.text == "7. ??????????????????")
        		str_arg += " f_fnum ='7'";
        	else
        		str_arg += " f_fnum ='1'";

        	str_arg += " Form_path ='Defualt'";
        	str_arg += " sabun =" + gv_sabun;

        	var str_url = "JSP/gw/SQL_GW170_01S.jsp";
        	var in_ds = "DS_FLIST=DS_FLIST";
        	var out_ds = "DS_FLIST=DS_FLIST";

        	this.gfn_TransactionP("Select", str_url, in_ds, out_ds, str_arg, "Empty_visi", true, "P", false, this);
        };

        this.Empty_visi = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if(this.DS_FLIST.rowcount > 0)
        		this.isEmpty.set_visible(false);
        	else
        		this.isEmpty.set_visible(true);

        		trace(this.DS_FLIST.saveXML());
        }

        this.Grid_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 3)
        	{
        		if(this.DS_FLIST.getColumn(e.row, "F_FNUM") == "6")
        		{
        			alert("????????? ?????? ???????????? ????????? ?????? ??????????????? ????????????????????? ????????????.");
        			return;
        		}else if(this.DS_FLIST.getColumn(e.row, "F_FNUM") == "7")
        		{
        			alert("???????????? ??? ????????? ?????? ???????????? ????????? ?????? ???????????? ????????????????????? ????????????.");
        			return;
        		}else
        		{
        			var objParam = {p_fnum : this.DS_FLIST.getColumn(e.row, "F_NUM"),
        							p_ffnum : this.DS_FLIST.getColumn(e.row, "F_FNUM") };

        			f_num = this.DS_FLIST.getColumn(e.row, "F_NUM");

        			this.lfn_showModal("popupTemp", objParam, "gw::GW120.xfdl", "Insert_Path", this, '', '', 670, 750);
        		}
        	}
        };


        //???????????? ??????
        this.Insert_Path = function(strSvcId, sResult)
        {
        	if(f_num > 0 && sResult == "ok")
        	{
        		var strf_path1 = "";
        		var strf_path2 = "";
        		var strf_path3 = "";
        		var strf_path4 = "";

        		if(this.DS_GW_K.rowcount > 0)
        		{
        			for(var iRow=0; iRow <= this.DS_GW_K.rowcount-1; iRow++)
        			{
        				strf_path1 += this.DS_GW_K.getColumn(iRow, "SABUN");

        				if(iRow != this.DS_GW_K.rowcount-1)
        					strf_path1 += "/";
        			}
        		}

        		if(this.DS_GW_H.rowcount > 0)
        		{
        			for(var iRow=0; iRow <= this.DS_GW_H.rowcount-1; iRow++)
        			{
        				strf_path2 += this.DS_GW_H.getColumn(iRow, "SABUN");

        				if(iRow != this.DS_GW_H.rowcount-1)
        					strf_path2 += "/";
        			}
        		}

        		if(this.DS_GW_C.rowcount > 0)
        		{
        			for(var iRow=0; iRow <= this.DS_GW_C.rowcount-1; iRow++)
        			{
        				strf_path3 += this.DS_GW_C.getColumn(iRow, "SABUN");

        				if(iRow != this.DS_GW_C.rowcount-1)
        					strf_path3 += "/";
        			}
        		}

        		if(this.DS_GW_D.rowcount > 0)
        		{
        			for(var iRow=0; iRow <= this.DS_GW_D.rowcount-1; iRow++)
        			{
        				strf_path4 += this.DS_GW_D.getColumn(iRow, "SABUN");

        				if(iRow != this.DS_GW_D.rowcount-1)
        					strf_path4 += "/";
        			}
        		}

        		if(strf_path1 != "" || strf_path2 != "" || strf_path3 != "" || strf_path4 != "")
        		{
        			this.DS_FORMPATH.addRow();

        			this.DS_FORMPATH.setColumn(0, "GUBUN", "01");
        			this.DS_FORMPATH.setColumn(0, "F_NUM", f_num);
        			this.DS_FORMPATH.setColumn(0, "SABUN", gv_sabun);
        			this.DS_FORMPATH.setColumn(0, "F_PATH1", nexacro.trim(strf_path1));
        			this.DS_FORMPATH.setColumn(0, "F_PATH2", nexacro.trim(strf_path2));
        			this.DS_FORMPATH.setColumn(0, "F_PATH3", nexacro.trim(strf_path3));
        			this.DS_FORMPATH.setColumn(0, "F_PATH4", nexacro.trim(strf_path4));

        			var str_arg = " Form_path ='Defualt'";
        			var str_url = "JSP/gw/SQL_GW180_OrderInS.jsp";
        			var in_ds = "input=DS_FORMPATH";

        			trace(this.DS_FORMPATH.saveXML());

        			//this.gfn_TransactionP("insert", str_url, in_ds, "", str_arg, "save_Ok", true, "P", false, this);
        		}
        		else
        			this.save_Ok("",0,"");
        	}
        	else
        		this.clear_Ok();
        }

        this.save_Ok = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode == "0")
        		alert("??????????????? ?????????????????????");
        	else
        		alert(sErrorMsg);

        	this.clear_Ok();
        }

        this.Grid_list_oncelldblclick = function(obj,e)
        {
        	var strUrl;

        	if(this.DS_FLIST.getColumn(e.row, "F_NUM") == '1' || this.DS_FLIST.getColumn(e.row, "F_NUM") == '78')
        		alert(" - ??????????????? ????????? \n\n 10?????? ??????-????????? ?????? \n 10?????? ??????-????????? ??????  \n 30?????? ??????-????????? ?????? \n 300?????? ??????-????????? ?????? \n\n - ???????????? ???????????? ?????????, ???????????? '???????????????'??? ????????? ????????????.\n\n ");
        	else if(this.DS_FLIST.getColumn(e.row, "F_NUM") == '19' ) //book
        		alert(" - ??????????????? ????????? \n\n 10?????? ??????-????????? ?????? \n 10?????? ??????-????????? ??????  \n 30?????? ??????-????????? ?????? \n\n - ???????????? ?????? ????????? ????????? '?????????'??? ??????????????????.");
        	else if(this.DS_FLIST.getColumn(e.row, "F_NUM") == '18') //picture
        		alert("??????????????? ??????????????? ??????????????? ???????????? ?????? ????????????.\n(?????? ?????? ????????? ????????? ??????????????? ??????????????? ????????? ???????????????. ??????????????? ???????????? ??????????????? - ???????????? ?????? ?????????????????????.)\n??????????????? ???????????? ????????????????????? ??????????????? ????????????. ");
        	else if(this.DS_FLIST.getColumn(e.row, "F_NUM") == '122')
        		alert("???????????? ?????? ?????? ???????????? ?????? ??? ??????????????? ???????????????. \n\n??????????????? ?????? ?????? ?????? ???????????? ?????? ???????????? ????????? ?????? ????????? ?????????. \n\n???????????? ?????? ???????????? ??????????????? ?????? ????????? ????????? ????????????.\n\n?????? ??? ?????????????????? ?????? ??? ????????? ????????? ?????? ??? ???????????? ????????? ????????? ?????? ?????? ??? ????????? ????????????.");


        	if(this.DS_FLIST.getColumn(e.row, "F_XML") == "")
        	{
        		var gubun = this.DS_FLIST.getColumn(e.row,"GUBUN");
        		var	f_num = this.DS_FLIST.getColumn(e.row,"F_NUM");
        		var	f_fnum = this.DS_FLIST.getColumn(e.row,"F_FNUM");
        		var	f_name = this.DS_FLIST.getColumn(e.row,"F_NAME");
        		var	ap = this.DS_FLIST.getColumn(e.row,"AP");

        		var objParam = { p_gubun:gubun,
        						 p_fnum:f_num,
        						 p_ffnum:f_fnum,
        						 p_fname:f_name,
        						 p_ap:ap };

        		this.lfn_showModal("popupWrite", objParam, "gw::GW110.xfdl", "popupCallBack", this, '', '', 810, 780);
        	}else
        	{
        		if(this.DS_FLIST.getColumn(e.row, "F_ARG") == 1)
        		{


        		}else
        		{
        			var gubun = this.DS_FLIST.getColumn(e.row,"GUBUN");
        			var	f_num = this.DS_FLIST.getColumn(e.row,"F_NUM");
        			var	f_fnum = this.DS_FLIST.getColumn(e.row,"F_FNUM");
        			var	f_name = this.DS_FLIST.getColumn(e.row,"F_NAME");
        			var	ap = this.DS_FLIST.getColumn(e.row,"AP");

        			var objParam = { p_gubun:gubun,
        						 p_fnum:f_num,
        						 p_ffnum:f_fnum,
        						 p_fname:f_name,
        						 p_ap:ap };

        			var f_xfdl = nexacro.replaceAll(this.DS_FLIST.getColumn(e.row, "F_XML"), ".xml", ".xfdl");
        			var path = this.DS_FLIST.getColumn(e.row, "F_PATH") + '::' + f_xfdl;

        			this.lfn_showModal("popupWrite", objParam, path , "popupCallBack", this, '', '', 810, 780);

        		}
        	}
        };

        this.Static00_onmouseenter = function(obj,e)
        {
        	obj.set_background("#7fb39d");
        	obj.set_color("#ffffff");
        };

        this.Static00_onmouseleave = function(obj,e)
        {
        	obj.set_background("#ffffff");
        	obj.set_color("#213a2c");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW200_onload,this);
            this.btn_Substitute.addEventHandler("onclick",this.btn_Substitute_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Static00.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
            this.Static00_00.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Static00_01.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Static00_02.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
            this.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_03.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
            this.Static00_03.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Static00_04.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_04.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Static00_04.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
            this.Static00_05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_05.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
            this.Static00_05.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Grid_list.addEventHandler("oncelldblclick",this.Grid_list_oncelldblclick,this);
            this.Grid_list.addEventHandler("oncellclick",this.Grid_list_oncellclick,this);
        };
        this.loadIncludeScript("GW200.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
