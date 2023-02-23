<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%
	CallableStatement Callstmt = null;	
	ResultSet 			  rs		= null;
	PreparedStatement ps	= null;
	
	String strf_id		  =  inVl.getString("i_flow_id");
    
	try {
	  
		Callstmt = conn.prepareCall("{Call GROUPWARE.PKG_I_FLOW.PROC_GW_ISDEL(?,?)}");
		Callstmt.registerOutParameter(1, TbTypes.CURSOR);
		Callstmt.setString(2, strf_id);
		Callstmt.execute();
	  
	   rs = (ResultSet)Callstmt.getObject(1);
	  
	   inDl.get(0).clearData(); 
	   outDs = inDl.get(0);
		
	    while (rs.next()) {
			int row = outDs.newRow();
			for(int col = 0; col < outDs.getColumnCount(); col++) { 
			
				outDs.set(row, col, rs.getString( outDs.getColumn(col).getName() ) );
			}
		}
		
	  if(outDs != null ) resData.addDataSet(outDs);
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
