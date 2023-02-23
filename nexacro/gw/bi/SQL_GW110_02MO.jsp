<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%

	Statement 		stmt 		= null;
	ResultSet 		rs		= null;
	CallableStatement Callstmt = null;
	
	String strgubun =  inVl.getString("GUBUN");
  	String strf_id =  inVl.getString("I_FLOW_ID");  
	
	System.out.println(">>> GW_110 : Select SQL <<<   \n" + strf_id);

	try {	
		String  sql =  "{Call GROUPWARE.PKG_I_FLOW.PROC_GW110_02MO(?,?,?)}";
		Callstmt = conn.prepareCall(sql);
		Callstmt.registerOutParameter(1,TbTypes.CURSOR);
		Callstmt.setString(2,strgubun);
		Callstmt.setString(3,strf_id);
		Callstmt.executeQuery();
	
		rs = (ResultSet)Callstmt.getObject(1);
		
		inDl.get(0).clearData(); //Ds_flow_order
		outDs = inDl.get(0);

	   	while (rs.next()) {
			int row = outDs.newRow();
			for(int col = 0; col < outDs.getColumnCount(); col++) { 
				outDs.set(row, col, rs.getString( outDs.getColumn(col).getName() ) );
			}
		}
		
		if(outDs != null ) resData.addDataSet(outDs);
		rs.close();

		
		String  sql2 =  " select BUSOR, JIKCHAK, SABUN, F_NAME \n"; 
			sql2 += " from groupware.I_FLOW_DAMDANG \n";
			sql2 += " where i_flow_id = '" +strf_id+ "' \n";
			sql2 += " order by seq asc \n";


		stmt 	= conn.createStatement();
	   	rs 		= stmt.executeQuery(sql2);
		
		inDl.get(1).clearData(); //Ds_Damdang
		outDs = inDl.get(1);

		while (rs.next()) {
			int row = outDs.newRow();
			for(int col = 0; col < outDs.getColumnCount(); col++) { 
				outDs.set(row, col, rs.getString(outDs.getColumn(col).getName() ) );
			}
		}
		
		if(outDs!=null ) resData.addDataSet(outDs);
		rs.close();

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