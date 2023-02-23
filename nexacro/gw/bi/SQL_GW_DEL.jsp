<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%
  /****************************************
	문서 삭제하기  (I_FLOW_HEADER, I_FLOW_REFNO, I_FLOW_ORDER 같이 삭제됨)
  ****************************************/   

	CallableStatement Callstmt  = null;
	
	String	strstatus	=  inVl.getString("status");  
	Integer iI_FLOW_ID	=  inVl.getInt("i_flow_id");
	String	owner   	=  inVl.getString("owner");  
	String	tablename  	=  inVl.getString("tablename");  
	String	col_name   	=  inVl.getString("col_name");  

	try 
	{
		if ( strstatus.equals("update"))
		{
			String SQL  = "{call GROUPWARE.PKG_I_FLOW.PROC_I_FLOW_HEADER_DEL(?)}";

			Callstmt	= conn.prepareCall( SQL );
			Callstmt.setInt(1, iI_FLOW_ID);
			Callstmt.executeQuery();
			
			String sql3 = "{call GROUPWARE.PROC_I_FLOW_REJECT(?,?,?,?)}";

			Callstmt	= conn.prepareCall( sql3 );
			Callstmt.setString(1, owner);
			Callstmt.setString(2, tablename);
			Callstmt.setString(3, col_name);
			Callstmt.setInt(4, iI_FLOW_ID);
			Callstmt.executeQuery();

		}		

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
