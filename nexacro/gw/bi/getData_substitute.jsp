<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%
	PreparedStatement ps		= null;
	ResultSet 		  rs		= null;

	String sql = "";
	String strsabun =  inVl.getString("sabun");  

	try 
	{
			sql =  "SELECT  \n";
			sql += "T_SABUN, T_NAME, S_DATE, E_DATE  \n";
			sql += "FROM GROUPWARE.I_FLOW_ORDER_SUB   \n";
			sql += "WHERE SABUN = '" + strsabun + "' \n";
					 
					 
		ps 	= conn.prepareStatement( sql );
		rs	= ps.executeQuery();
		
		inDl.get(0).clearData();
			outDs = inDl.get(0);

			while (rs.next()) {
			int row = outDs.newRow();
			for(int col = 0; col < outDs.getColumnCount(); col++) { 
				outDs.set(row, col, rs.getString( outDs.getColumn(col).getName() ) );
				}
			}
			
			if(outDs!=null ) resData.addDataSet(outDs);

			
			resVarList.add("ErrorCode", CODE_SUCC);
			resVarList.add("ErrorMsg",  MSG_INSERT_SUCC);

	}catch (Exception e) 
	{
		resVarList.add("ErrorCode", CODE_FAIL);
	  	resVarList.add("ErrorMsg", MSG_INSERT_FAIL + " : " +  e.getMessage());
	  	e.printStackTrace();
	}finally 
	{
		if (conn != null) 	try { conn.close(); 	} catch (SQLException se) {}
	}

	HttpPlatformResponse pRes  = new HttpPlatformResponse(response);
	pRes.setData(resData);
	pRes.sendData();

%>