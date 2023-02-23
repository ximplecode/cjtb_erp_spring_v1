<%@ page language="java" pageEncoding="EUC-KR" contentType="text/html;charset=EUC-KR"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>

<%
	
	PreparedStatement ps		= null;
	ResultSet 		  rs		= null;

	String sql = "";
	String strI_Flow_Id		=  inVl.getString("i_flow_id"); 
	
	try 
	{
	
		sql =	"SELECT CASE WHEN O.KIND = '0' THEN '담당자' WHEN O.KIND = '1' THEN '결재자'	WHEN O.KIND = '2' THEN '합의자'  ELSE '최종결재자' END AS KIND \n";
		sql +=	",ROW_NUMBER() OVER(ORDER BY O.KIND, O.SEQ) AS SEQ, O.F_NEXT, DECODE(O.STATUS, '1', '승인', '0', '기각', '미결재') AS STATUS, O.F_DATE, O.JIKCHAK, O.BUSOR, O.F_NAME, O.I_FLOW_ID , S.SABUN AS KS_SIGN	 \n";
		sql +=	"FROM GROUPWARE.I_FLOW_ORDER O	 \n";
		sql +=	"LEFT JOIN GROUPWARE.I_FLOW_HEADER H ON O.I_FLOW_ID = H.I_FLOW_ID \n";
		sql +=	"LEFT JOIN GROUPWARE.I_FLOW_ORDER_DETAIL S ON S.I_FLOW_ID = O.I_FLOW_ID AND S.G_SABUN = O.SABUN	\n";
		sql +=	"WHERE H.GUBUN = '01' AND O.I_FLOW_ID = '" +strI_Flow_Id+ "' AND O.KIND <> '4' \n";
		sql +=  "ORDER BY O.KIND, O.SEQ, O.F_NEXT \n";
		
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