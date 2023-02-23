<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%
	/***********************************************************
	 * 문서양식함 오른쪽 리스트
	 ***********************************************************/
	Statement 		stmt 		= null;
	ResultSet 		rs		= null;
	CallableStatement Callstmt = null;
	
	String strgubun =  inVl.getString("gubun");
	String Strsabun =  inVl.getString("sabun");
	String strf_fnum =  inVl.getString("f_fnum");  
	String StrForm_path =  inVl.getString("Form_path");


	String sql;

	try 
	{
					
		sql = "{Call GROUPWARE.PKG_I_FLOW.PROC_GW170_01S(?,?,?,?,?)}";
		Callstmt = conn.prepareCall(sql);
		Callstmt.registerOutParameter(1, TbTypes.CURSOR);
		Callstmt.setString(2, strgubun);
		Callstmt.setString(3, Strsabun);
		Callstmt.setString(4, strf_fnum);
		Callstmt.setString(5, StrForm_path);
		Callstmt.execute();
		
		rs = (ResultSet)Callstmt.getObject(1);
		
		
		inDl.get(0).clearData();
		outDs = inDl.get(0);

		while (rs.next()) 
		{
			int row = outDs.newRow();
			
			String Ap = "";
		
			
			for(int col = 0; col < outDs.getColumnCount(); col++) 
			{ 
				String nVal = rs.getString( outDs.getColumn(col).getName() ); 
				
				if(nVal == null)
					nVal = "";
				
				if(col == 2)
				{
					outDs.set(row, col, nVal.trim() + "년" );	
				}
				else if (col == 7)
				{
					if(	nVal == "")
						outDs.set(row, col, "작성" );
					else
						outDs.set(row, col, "Yes" );
				}
				else
				{
					outDs.set(row, col, nVal );
				}
				//outDs.set(row, col, rs.getString( outDs.getColumn(col).getName() ) );
			}

		}
	
		if(outDs!=null ) resData.addDataSet(outDs);

		resVarList.add("ErrorCode", CODE_SUCC);
		resVarList.add("ErrorMsg",  MSG_INSERT_SUCC);

	} catch (Exception e) {
		resVarList.add("ErrorCode", CODE_FAIL);
	  	resVarList.add("ErrorMsg", MSG_INSERT_FAIL + " : " +  e.getMessage());
	  	e.printStackTrace();
	} finally {
		if (Callstmt != null) 	try { Callstmt.close(); 		} catch (SQLException se) {}
		if (conn != null) 	try { conn.close(); 	} catch (SQLException se) {}
	}

	HttpPlatformResponse pRes  = new HttpPlatformResponse(response);
	pRes.setData(resData);
	pRes.sendData();
%>