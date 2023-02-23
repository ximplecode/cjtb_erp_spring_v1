<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%!

	public boolean isNumeric(String s){ 
		return s.replaceAll("[+-]?\\d+", "").equals("") ? true : false; 
	} 

%>

<%
	/*************************************************************************
	 * I_FLOW_ORDER, I_FLOW_HEADER 테이블 inner join 하여 참조문서 데이터 가져오기.
	 * 참조문서 리스트
	 *************************************************************************/
	Statement 		stmt 		= null;
	ResultSet 		rs		= null;


	try {

		String strgubun =  inVl.getString("gubun");
		String strsabun =  inVl.getString("sabun");  	
		String strlistclass = inVl.getString("listclass").trim();

		String sql = "";

			

		if(isNumeric(strlistclass))
		{
				sql =  "SELECT B.I_FLOW_ID, B.TITLE, B.CO_SEQ, B.STATUS, A.F_NAME, C.F_FNUM   \n";
				sql += "FROM GROUPWARE.I_FLOW_HEADER B INNER JOIN GROUPWARE.I_FLOW_ORDER A    \n";
				sql += "ON A.I_FLOW_ID = B.I_FLOW_ID AND A.KIND NOT IN ('4','5') AND A.SABUN = '"+ strsabun +"'   \n";
				sql += "AND (A.STATUS IS NOT NULL AND A.STATUS <> '0') AND A.STORE = '"+ strlistclass +"'  \n";
				sql += "INNER JOIN GROUPWARE.I_FLOW_ORDER E    \n";
				sql += "ON B.I_FLOW_ID = E.I_FLOW_ID      \n";
				sql += "AND E.KIND = '0' AND B.SABUN = E.SABUN  \n";
				sql += "INNER JOIN GROUPWARE.I_FLOW_FORM C  \n";
				sql += "ON B.F_TYPE = C.F_NUM  \n";
				sql += "WHERE B.GUBUN = '01' AND B.STATUS IS NOT NULL AND B.SAVE = '1' AND C.F_FNUM NOT IN ('2', '6')     \n";
				sql += "GROUP BY B.I_FLOW_ID, B.TITLE, B.CO_SEQ, B.STATUS, A.F_NAME, C.F_FNUM   \n";
				sql += "ORDER BY B.I_FLOW_ID DESC   \n";
		}
		else
		{
			if(strlistclass.equals("R")) //수신문서함
			{
				sql =  "SELECT B.I_FLOW_ID, B.TITLE, B.CO_SEQ, B.STATUS, A.F_NAME, C.F_FNUM   \n";
				sql += "FROM GROUPWARE.I_FLOW_HEADER B INNER JOIN GROUPWARE.I_FLOW_ORDER A    \n";
				sql += "ON A.I_FLOW_ID = B.I_FLOW_ID AND A.KIND = '4' AND A.KIND  <> '5'  \n";
				sql += "AND A.SABUN = '"+ strsabun +"' AND A.STATUS IS NOT NULL \n"; //AND A.STORE = '0'    \n";
				sql += "INNER JOIN GROUPWARE.I_FLOW_FORM C    \n";
				sql += "ON B.F_TYPE = C.F_NUM    \n";
				sql += "WHERE B.GUBUN = '"+ strgubun +"' AND B.STATUS IS NOT NULL AND C.F_FNUM NOT IN ('2', '6')   \n";
				sql += "GROUP BY B.I_FLOW_ID, B.TITLE, B.CO_SEQ, B.STATUS, A.F_NAME, C.F_FNUM   \n";
				sql += "ORDER BY B.I_FLOW_ID DESC  \n";
			}
			else if (strlistclass.equals("C")) //완결문서함
			{
				sql =  "SELECT B.I_FLOW_ID, B.TITLE, B.CO_SEQ, B.STATUS, A.F_NAME, C.F_FNUM   \n";
				sql += "FROM GROUPWARE.I_FLOW_HEADER B INNER JOIN GROUPWARE.I_FLOW_ORDER A    \n";
				sql += "ON A.I_FLOW_ID = B.I_FLOW_ID AND A.KIND NOT IN ('4','5') AND A.SABUN = '"+ strsabun +"'   \n";
				sql += "AND (A.STATUS IS NOT NULL AND A.STATUS <> '0') \n";  //AND A.STORE = '0'  \n";
				sql += "INNER JOIN GROUPWARE.I_FLOW_ORDER E    \n";
				sql += "ON B.I_FLOW_ID = E.I_FLOW_ID      \n";
				sql += "AND E.KIND = '0' AND B.SABUN = E.SABUN  \n";
				sql += "INNER JOIN GROUPWARE.I_FLOW_FORM C  \n";
				sql += "ON B.F_TYPE = C.F_NUM  \n";
				sql += "WHERE B.GUBUN = '" + strgubun + "' AND B.STATUS IS NOT NULL AND B.SAVE = '1' AND C.F_FNUM NOT IN ('2', '6')     \n";
				sql += "GROUP BY B.I_FLOW_ID, B.TITLE, B.CO_SEQ, B.STATUS, A.F_NAME, C.F_FNUM   \n";
				sql += "ORDER BY B.I_FLOW_ID DESC   \n";
			}
		}
		
		//System.out.println(">>> DS_GW140_S : Select SQL <<<   \n" + sql);					 
					 
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