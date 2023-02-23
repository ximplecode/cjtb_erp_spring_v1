<%@ page language="java" pageEncoding="euc-kr" contentType="text/html;charset=euc-kr"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>
<%!
    public String  dsGet(DataSet ds, int rowno, String colid) throws Exception
    {
        String value;
        value = ds.getString(rowno,colid);
		
		if( value == null )
            return " ";
        else
            return value;
    }
%>

<%
	PreparedStatement	ps		= null;
	ResultSet 		    rs		= null;
	CallableStatement Callstmt = null;
  
	try {
    
	
	Integer	i;
	String	pI_FLOW_ID	=  inVl.getString("i_flow_id");
	String  r_name, r_f_path, filename, f_size;
	
	Integer u = 0;
	
	
		Callstmt = conn.prepareCall("{call GROUPWARE.PKG_I_FLOW_FILES.PROC_DML(?, ?, ?, ?, ?, ?, ?)}");
		Callstmt.setString(1, pI_FLOW_ID);
		Callstmt.setInt(2, 0);
		Callstmt.setString(3, " ");
		Callstmt.setInt(4, 0);
		Callstmt.setString(5, "del");
		Callstmt.setString(6, " ");
		Callstmt.setString(7, " ");
		Callstmt.execute();
		
		
		outDs.clearData();
		outDs = inDl.get("ds_file");
	
		
			
		if (outDs.getRowCount() > 0){
		
			for ( i = 0; i < outDs.getRowCount(); i++)
			{
			  
				u = u + 1;
				r_name 		= dsGet(outDs	,i,	"R_NAME");
				r_f_path 	= dsGet(outDs	,i,	"F_PATH");
				filename 	= dsGet(outDs	,i,	"F_NAME");
				filename 	= filename.replaceAll("&","_");
				f_size 		= dsGet(outDs	,i,	"F_SIZE");
				
				Callstmt = conn.prepareCall("{call GROUPWARE.PKG_I_FLOW_FILES.PROC_DML(?, ?, ?, ?, ?, ?, ?)}");
				Callstmt.setString(1, pI_FLOW_ID);
				Callstmt.setInt(2, u);
				Callstmt.setString(3, filename);
				Callstmt.setInt(4, Integer.parseInt(f_size));
				Callstmt.setString(5, "ins");
				Callstmt.setString(6, r_name);
				Callstmt.setString(7, r_f_path);
				Callstmt.execute();
				Callstmt.close();
			}
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