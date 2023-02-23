<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>

<%
	/***********************************************************
	 * 2. Query 실행부분
	 ***********************************************************/
	CallableStatement Callstmt = null;
	
	String sql = "";

	String strsabun		=  inVl.getString("sabun");      //대결자 사번
	String g_sabun		=  inVl.getString("g_sabun");    //지정자 사번
	String strgubun		=  inVl.getString("gubun");
	String strf_id		=  inVl.getString("i_flow_id"); 
	String comment		=  inVl.getString("comment"); 
	String wdate		=  inVl.getString("wdate"); 
	String kind			=  inVl.getString("kind"); 
	String f_type		=  inVl.getString("type"); 
	String seq			=  inVl.getString("seq"); 
	
	try {

		sql = "{Call GROUPWARE.PKG_I_FLOW.PROC_GW_NONPASSUP_SUB(?,?,?,?,?,?,?,?,?)}";
		Callstmt = conn.prepareCall(sql);
		Callstmt.setString(1, strsabun);
		Callstmt.setString(2, g_sabun);
		Callstmt.setString(3, strgubun);
		Callstmt.setString(4, strf_id);
		Callstmt.setString(5, comment);
		Callstmt.setString(6, wdate);
		Callstmt.setString(7, kind);
		Callstmt.setString(8, f_type);
		Callstmt.setString(9, seq);
		Callstmt.execute();
		Callstmt.close();
	  
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
