<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%

	/***********************************************************
	 * I_FLOW_STORE 테이블에 자기가 입력한 결재문서함명 데이터 가져오기.
	 * 개인결재문서함명 리스트
	 ***********************************************************/

	Statement 		stmt 		= null;
	ResultSet 		rs		= null;

	try {

  	String strgubun =  inVl.getString("gubun");
  	String strsabun =  inVl.getString("sabun");  	
	

	String sql =  "SELECT BD_ID, BD_NAME  \n";
		   sql += "FROM GROUPWARE.I_FLOW_STORE   \n";
		   sql += "WHERE GUBUN = '"+ strgubun +"' AND BD_SABUN = '"+ strsabun +"'  \n";
		   sql += "ORDER BY BD_ID  \n";
			  
				 
	//System.out.println(">>> DS_GW140_02S : Select SQL <<<   \n" + sql);					 
					 
		stmt 	= conn.createStatement();
	   	rs 		= stmt.executeQuery(sql);
		
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

	} catch (Exception e) {
		resVarList.add("ErrorCode", CODE_FAIL);
	  	resVarList.add("ErrorMsg", MSG_INSERT_FAIL + " : " +  e.getMessage());
	  	e.printStackTrace();
	} finally {
		if (conn != null) 	try { conn.close(); 	} catch (SQLException se) {}
	}

	HttpPlatformResponse pRes  = new HttpPlatformResponse(response);
	pRes.setData(resData);
	pRes.sendData();

%>