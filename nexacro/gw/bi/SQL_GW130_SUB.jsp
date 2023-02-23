<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%
	PreparedStatement ps		= null;
	ResultSet 		  rs		= null;
	DataSet inDs = inPD.getDataSet("ds_substitute");
	
	Integer	RowStatus;
	String	qSql	= "";

	String Str_sdate =  inVl.getString("sdate");  
	String Str_edate =  inVl.getString("edate");  
  	String Str_tsabun  =  inVl.getString("t_sabun"); 
  	String Str_tname  =  inVl.getString("t_name"); 
	String Str_sabun =  inVl.getString("sabun"); 
	
	try 
	{
			Integer	RowCnt, i;
			RowCnt = inDs.getRemovedRowCount();
			
			System.out.println("DeleteRow => " + RowCnt);
			
			String SQL =  " DELETE FROM GROUPWARE.I_FLOW_ORDER_SUB \n";
				   SQL += " WHERE SABUN = '" +Str_sabun +"' \n";

			
			ps 	= conn.prepareStatement( SQL );
			rs	= ps.executeQuery();
			
			
			
			String sql =	" INSERT INTO GROUPWARE.I_FLOW_ORDER_SUB  VALUES\n";
					 sql +=	"	('" + Str_sabun + "',	  \n";  
					 sql +=	"  '" + Str_tsabun + "',	  \n";  
					 sql +=	"  '" + Str_tname + "',	  \n";  
					 sql +=	"  '" + Str_sdate + "',	  \n";  
					 sql +=	"  '" + Str_edate + "')	  \n";  

			ps 	= conn.prepareStatement(sql);
			rs	= ps.executeQuery();

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
