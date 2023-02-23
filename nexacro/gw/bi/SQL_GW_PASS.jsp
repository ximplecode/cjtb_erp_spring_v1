<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%
	PreparedStatement ps		= null;
	ResultSet 		  rs		= null;
	
	try 
	{

  	String strgubun =  inVl.getString("gubun");
	String strsabun =  inVl.getString("sabun");
  	String strf_id =  inVl.getString("i_flow_id");  	
	String flowis =  inVl.getString("flowis");  	
	String  sql;
	
		if ( flowis.equals("D") )   //´ë°á
		{
			sql =  " select h.f_type, o.kind, o.seq, o.f_next, '' as position_code2, a.sabun \n";
			sql += " from groupware.i_flow_header h join groupware.i_flow_order o  \n";
			sql += " on h.i_flow_id=o.i_flow_id , \n";
			sql += " 			groupware.i_flow_order_sub a  \n";
			sql += " where o.sabun=a.sabun 		\n";
			sql += " 	and h.gubun = '" +strgubun+ "' and h.i_flow_id = '"+strf_id+"' and o.kind <> '0'  \n";
			sql += "		and a.sabun = '"+strsabun+"' \n";
			sql += "     and (ltrim(rtrim(o.status)) is null or o.status='9') and rownum=1  \n";
			sql += " order by o.kind, o.seq  \n";
		}
		else
		{
			 sql =  " select h.f_type, o.kind, o.seq, o.f_next, nvl(a.position_code2, b.position_code2) as position_code2, '' as sabun \n";
				sql += " from groupware.i_flow_header h join groupware.i_flow_order o  \n";
				sql += " on h.i_flow_id=o.i_flow_id , \n";
				sql += " 			(select approval_emp, position_code2 from groupware.i_flow_formpath_approval where approval_emp =  '"+strsabun+"' order by position_code2) a, \n";
				sql += " 			groupware.i_flow_formpath2 b  \n";
				sql += " where o.sabun=a.approval_emp(+) and o.sabun=b.approval_emp(+) and h.gubun = '" +strgubun+ "' and h.i_flow_id = '"+strf_id+"' and o.kind <> '0' and o.sabun = '"+strsabun+"' \n";
				sql += "      and (ltrim(rtrim(o.status)) is null or o.status='9') and rownum=1  \n";
				sql += " order by o.kind, o.seq, nvl(a.position_code2, b.position_code2)  \n";
		}

		//System.out.println("SQL_GW_PASS : Select SQL <<<   \n" + sql);					 
					 
		ps 		= conn.prepareStatement( sql );
		rs	= ps.executeQuery();

		inDl.get(0).clearData();
		outDs = inDl.get(0);

		while (rs.next()) {
			
			int row = outDs.newRow();
			
			for(int col = 0; col < outDs.getColumnCount(); col++) { 
				
				String nVal = rs.getString( outDs.getColumn(col).getName() ); 
				
				if(nVal == null){ 
					nVal = ""; 
				}
				
				outDs.set(row, col, nVal );
				
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