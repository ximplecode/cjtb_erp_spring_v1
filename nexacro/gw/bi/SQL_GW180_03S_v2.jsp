<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%
	String	char_set	= "euc-kr";
	String	returnStr	= "";	

	/***********************************************************
	 * 1. In, Out Service API 초기화
	 ***********************************************************/
	PlatformRequest 	pReq	= new PlatformRequest(request, char_set);
	pReq.receiveData();

	VariableList 	inVl 		= pReq.getVariableList();
	DatasetList  	inDl 		= pReq.getDatasetList();

	PlatformResponse 	pRes 	= new PlatformResponse(response, PlatformRequest.XML, char_set);

	VariableList 	outVl 	= new VariableList();
	DatasetList  	outDl 	= new DatasetList();
	Dataset		    outDs   = new Dataset(char_set);

	ResultSet 		rs		= null;
	ResultSet 		rs1		= null;
	CallableStatement Callstmt  = null;

  /****************************************
   Title :  I_FLOW_FORMPATH 테이블에 있는 결재사원정보 Split 하여 가져오기
   최초코딩 : 2010.05.20 
   작성자   : 강동길 이희준
   수정내용 :  밑으로 번호를 입력하여 수정내용 및 일자 넣을 것 
   1) Package로 수정 및 Insa00으로 작성되어 있는 부분 수정    ( 2010.05.20  18:07 )
      CallableStatement 으로 변환
   2) OracleCallableStatement ocstmt 버그 수정 (2010.05.24 15:30)
   3) 
   
  ****************************************/   


	Dataset		    outDs1	= new Dataset(char_set);
	Dataset		    outDs2	= new Dataset(char_set);
	Dataset		    outDs3	= new Dataset(char_set);
	Dataset		    outDs4	= new Dataset(char_set);

	DatasetList  	outDl1 	= new DatasetList();
	DatasetList  	outDl2 	= new DatasetList();
	DatasetList  	outDl3 	= new DatasetList();
	DatasetList  	outDl4 	= new DatasetList();


	try 
	{

		String strgubun =  inVl.getString("gubun");
		String strf_num =  inVl.getString("f_num");  	
		String strsabun =  inVl.getString("sabun");  	
		String  qSql	= "";
			
		// PACKAGE  CURSOR 로 가져오기
		qSql  = "{call GROUPWARE.PKG_I_FLOW.PROC_FLOW_FORMPATH_SEL(?, ?, ?, ?)}";

		Callstmt	= conn.prepareCall( qSql );

		Callstmt.registerOutParameter (1, TbTypes.CURSOR);  // ORACLE CURSOR 선언
		Callstmt.setString(2, strgubun);
		Callstmt.setString(3, strf_num);
		Callstmt.setString(4, strsabun);

		////System.out.println(">>> DS_GW180_03S : SQL <<<  " + qSql + "," + strgubun +","+ strf_num +","+ strsabun);

		// 실행
		Callstmt.executeQuery();

		rs = (ResultSet)Callstmt.getObject(1);
		
		outDs.addColumn("GUBUN"		, ColumnInfo.CY_COLINFO_STRING, (short)2);
		outDs.addColumn("F_NUM"		, ColumnInfo.CY_COLINFO_INT, (short)3);
		outDs.addColumn("SABUN"		, ColumnInfo.CY_COLINFO_STRING, (short)10);
		outDs.addColumn("F_PATH1"	, ColumnInfo.CY_COLINFO_STRING, (short)150);
		outDs.addColumn("F_PATH2"	, ColumnInfo.CY_COLINFO_STRING, (short)150);
		outDs.addColumn("F_PATH3"	, ColumnInfo.CY_COLINFO_STRING, (short)150);
		outDs.addColumn("F_PATH4"	, ColumnInfo.CY_COLINFO_STRING, (short)150);

	   	while (rs.next())
		{
			int row = outDs.appendRow();

			////System.out.println(">>> DS_GW180_03S : outDs <<<  " + (String)rs.getString("SABUN") );

			outDs.setColumn(row, "GUBUN"	, (String)rs.getString("GUBUN"));	
			outDs.setColumn(row, "F_NUM"	, (Integer)rs.getInt("F_NUM"));
			outDs.setColumn(row, "SABUN"	, (String)rs.getString("SABUN"));
			outDs.setColumn(row, "F_PATH1"	, (String)rs.getString("F_PATH1"));	
			outDs.setColumn(row, "F_PATH2"	, (String)rs.getString("F_PATH2"));	
			outDs.setColumn(row, "F_PATH3"	, (String)rs.getString("F_PATH3"));	
			outDs.setColumn(row, "F_PATH4"	, (String)rs.getString("F_PATH4"));	
			////System.out.println(">>> DS_GW180_03S : SABUN <<<  " + (String)rs.getString("SABUN") );

			
		}

		Callstmt.close();

		////System.out.println(">>> DS_GW180_03S : outDs <<<  " + outDs );
		////System.out.println(">>> DS_GW180_03S : outDs <<<  " + outDs.getRowCount() );

		if ( outDs.getRowCount() != 0 )
		{
			////System.out.println(">>> DS_GW180_03S : outDs <<<  outDs Not Null \n");
			////System.out.println(">>> DS_GW180_03S : outDs <<<  outDs Not Null \n" + outDs.getColumn(0, "F_PATH1").toString());


			if(outDs.getColumn(0, "F_PATH1").toString().trim() != "")
			{
				
				String[] arrpath1 = outDs.getColumn(0, "F_PATH1").toString().trim().split("/");
				
				for(Integer i=0; i < arrpath1.length; i++)
				{
					qSql  = "{call GROUPWARE.PKG_I_FLOW.PROC_EMPLOYEE_SELECT_V2(?, ?)}";

					////System.out.println(">>> DS_GW180_03S : arrpath1 <<<  " + arrpath1 );

					Callstmt	= conn.prepareCall( qSql );

					Callstmt.registerOutParameter (1, TbTypes.CURSOR);  // TbTypes CURSOR 선언
					Callstmt.setString(2, arrpath1[i]);

					// 실행
					Callstmt.executeQuery();

					rs1 = (ResultSet)Callstmt.getObject(1);

					outDs1.addColumn("SABUN"	, ColumnInfo.CY_COLINFO_STRING, (short)6);
					outDs1.addColumn("NAME"		, ColumnInfo.CY_COLINFO_STRING, (short)10);
					outDs1.addColumn("BUSECD"	, ColumnInfo.CY_COLINFO_STRING, (short)5);
					outDs1.addColumn("BUSE"		, ColumnInfo.CY_COLINFO_STRING, (short)50);
					outDs1.addColumn("JIKWI"	, ColumnInfo.CY_COLINFO_STRING, (short)20);

					while (rs1.next())
					{
						int row = outDs1.appendRow();

						outDs1.setColumn(row, "SABUN"	, (String)rs1.getString("SABUN"));	
						outDs1.setColumn(row, "NAME"	, (String)rs1.getString("NAME"));
						outDs1.setColumn(row, "BUSECD"	, (String)rs1.getString("BUSECD"));	
						outDs1.setColumn(row, "BUSE"	, (String)rs1.getString("BUSE"));
						outDs1.setColumn(row, "JIKWI"	, (String)rs1.getString("JIKWI"));	
					}

					if ( outDl1 != null )
					{
						outDl1.addDataset("DS_GW_K", outDs1);
					}

					rs1.close();
					Callstmt.close();
				}
			}

			if(outDs.getColumn(0, "F_PATH2").toString().trim() != "")
			{
				////System.out.println(">>> DS_GW180_03S : outDs <<<  outDs Not Null \n");

				String[] arrpath2 = outDs.getColumn(0, "F_PATH2").toString().trim().split("/");

				for(Integer i=0; i < arrpath2.length; i++)
				{
					qSql  = "{call GROUPWARE.PKG_I_FLOW.PROC_EMPLOYEE_SELECT_V2(?, ?)}";

					Callstmt	= conn.prepareCall( qSql );

					Callstmt.registerOutParameter (1, TbTypes.CURSOR);  // TbTypes CURSOR 선언
					Callstmt.setString(2, arrpath2[i]);

					// 실행
					Callstmt.executeQuery();

					rs1 = (ResultSet)Callstmt.getObject(1);

					outDs2.addColumn("SABUN"	, ColumnInfo.CY_COLINFO_STRING, (short)6);
					outDs2.addColumn("NAME"		, ColumnInfo.CY_COLINFO_STRING, (short)10);
					outDs2.addColumn("BUSECD"	, ColumnInfo.CY_COLINFO_STRING, (short)5);
					outDs2.addColumn("BUSE"		, ColumnInfo.CY_COLINFO_STRING, (short)50);
					outDs2.addColumn("JIKWI"	, ColumnInfo.CY_COLINFO_STRING, (short)20);


					while (rs1.next())
					{
						int row = outDs2.appendRow();

						outDs2.setColumn(row, "SABUN"	, (String)rs1.getString("SABUN"));	
						outDs2.setColumn(row, "NAME"	, (String)rs1.getString("NAME"));
						outDs2.setColumn(row, "BUSECD"	, (String)rs1.getString("BUSECD"));	
						outDs2.setColumn(row, "BUSE"	, (String)rs1.getString("BUSE"));
						outDs2.setColumn(row, "JIKWI"	, (String)rs1.getString("JIKWI"));	
					}

					if ( outDl2 != null )
					{
						outDl2.addDataset("DS_GW_H", outDs2);
					}

					rs1.close();
					Callstmt.close();
				}
			}

			if(outDs.getColumn(0, "F_PATH3").toString().trim() != "")
			{
				String[] arrpath3 = outDs.getColumn(0, "F_PATH3").toString().trim().split("/");

				for(Integer i=0; i < arrpath3.length; i++)
				{
					qSql  = "{call GROUPWARE.PKG_I_FLOW.PROC_EMPLOYEE_SELECT_V2(?, ?)}";

					Callstmt	= conn.prepareCall( qSql );

					Callstmt.registerOutParameter (1, TbTypes.CURSOR);  // TbTypes CURSOR 선언
					Callstmt.setString(2, arrpath3[i]);

					// 실행
					Callstmt.executeQuery();

					rs1 = (ResultSet)Callstmt.getObject(1);

					outDs3.addColumn("SABUN"	, ColumnInfo.CY_COLINFO_STRING, (short)6);
					outDs3.addColumn("NAME"		, ColumnInfo.CY_COLINFO_STRING, (short)10);
					outDs3.addColumn("BUSECD"	, ColumnInfo.CY_COLINFO_STRING, (short)5);
					outDs3.addColumn("BUSE"		, ColumnInfo.CY_COLINFO_STRING, (short)50);
					outDs3.addColumn("JIKWI"	, ColumnInfo.CY_COLINFO_STRING, (short)20);

					while (rs1.next())
					{
						int row = outDs3.appendRow();

						outDs3.setColumn(row, "SABUN"	, (String)rs1.getString("SABUN"));	
						outDs3.setColumn(row, "NAME"	, (String)rs1.getString("NAME"));
						outDs3.setColumn(row, "BUSECD"	, (String)rs1.getString("BUSECD"));	
						outDs3.setColumn(row, "BUSE"	, (String)rs1.getString("BUSE"));
						outDs3.setColumn(row, "JIKWI"	, (String)rs1.getString("JIKWI"));
					}

					if ( outDl3 != null )
					{
						outDl3.addDataset("DS_GW_C", outDs3);
					}

					rs1.close();
					Callstmt.close();
				}
			}

			if(outDs.getColumn(0, "F_PATH4").toString().trim() != "")
			{
				String[] arrpath4 = outDs.getColumn(0, "F_PATH4").toString().trim().split("/");

				for(Integer i=0; i < arrpath4.length; i++)
				{
					qSql  = "{call GROUPWARE.PKG_I_FLOW.PROC_EMPLOYEE_SELECT_V2(?, ?)}";

					Callstmt	= conn.prepareCall( qSql );

					Callstmt.registerOutParameter (1, TbTypes.CURSOR);  // TbTypes CURSOR 선언
					Callstmt.setString(2, arrpath4[i]);

					// 실행
					Callstmt.executeQuery();

					rs1 = (ResultSet)Callstmt.getObject(1);

					outDs4.addColumn("SABUN"	, ColumnInfo.CY_COLINFO_STRING, (short)6);
					outDs4.addColumn("NAME"		, ColumnInfo.CY_COLINFO_STRING, (short)10);
					outDs4.addColumn("BUSECD"	, ColumnInfo.CY_COLINFO_STRING, (short)5);
					outDs4.addColumn("BUSE"		, ColumnInfo.CY_COLINFO_STRING, (short)50);
					outDs4.addColumn("JIKWI"	, ColumnInfo.CY_COLINFO_STRING, (short)20);

					while (rs1.next())
					{
						int row = outDs4.appendRow();

						outDs4.setColumn(row, "SABUN"	, (String)rs1.getString("SABUN"));	
						outDs4.setColumn(row, "NAME"	, (String)rs1.getString("NAME"));
						outDs4.setColumn(row, "BUSECD"	, (String)rs1.getString("BUSECD"));	
						outDs4.setColumn(row, "BUSE"	, (String)rs1.getString("BUSE"));
						outDs4.setColumn(row, "JIKWI"	, (String)rs1.getString("JIKWI"));
					}

					if ( outDl4 != null )
					{
						outDl4.addDataset("DS_GW_D", outDs4);
					}

					rs1.close();
					Callstmt.close();
				}
			}

		}
		
		outVl.addStr("ErrorCode"	, "0");
		outVl.addStr("ErrorMsg"		, "SUCC");		
		outVl.addStr("returnStr"	, "정상적으로 처리되었습니다.");
			
	} catch (SQLException se) {
		// error handling
		outVl.addStr("ErrorCode"	, "-1");
		outVl.addStr("ErrorMsg"	, se.getMessage());
		outVl.addStr("returnStr"	, "비정상적으로 종료되었습니다.");
	} finally {
		if (rs != null) 		try { rs.close(); 		} catch (SQLException se) {}
		if (rs1 != null) 		try { rs1.close(); 		} catch (SQLException se) {}
		if (Callstmt != null) 	try { Callstmt.close(); } catch (SQLException se) {}
		if (conn != null) 		try { conn.close(); 	} catch (SQLException se) {}
	}

	/***********************************************************
	 * 3. 결과 XML Write
	 ***********************************************************/
	new PlatformResponse(response, PlatformRequest.XML, char_set).sendData(outVl, outDl1);
	new PlatformResponse(response, PlatformRequest.XML, char_set).sendData(outVl, outDl2);
	new PlatformResponse(response, PlatformRequest.XML, char_set).sendData(outVl, outDl3);
	new PlatformResponse(response, PlatformRequest.XML, char_set).sendData(outVl, outDl4);
%>