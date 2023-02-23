<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"  %>
<%@ include file = "../dbconnect/dbconnect_cjtibero.jsp" %>

<%
	
	PreparedStatement ps		= null;
	ResultSet 		  rs		= null;

	String query = "";
  	String sql = "";
	
	//Integer	strgubun	= inVl.getInt("gubun");
	String strgubun		=  inVl.getString("gubun"); 
	String strsabun		=  inVl.getString("sabun");  
	String strPageNo	=  inVl.getString("PageNo");
	String strPageSize	=  inVl.getString("PageSize");
	
	String strSearch_id		=  inVl.getString("Search_id"); 
	String strSearch_text	=  inVl.getString("Search_text");
	String strSearch_id2		=  inVl.getString("Search_id2"); 
	String strSearch_text2	=  inVl.getString("Search_text2");
	String strSearch_text3	=  inVl.getString("Search_text3");
	String strCal_sdate		=  inVl.getString("Cal_sdate");
	String strCal_edate		=  inVl.getString("Cal_edate");

	String status_gb = inVl.getString("status_gb");			//���Ἥ ������ SORT
	String gb_status = inVl.getString("doc_status");        //���ڰ��� �����Ȳ(0 - ��ü, 1 - ����, 2 - �ϰ�, 3 - �Ⱒ) 
	
	try 
	{
	
	if (!strSearch_text3.equals("")){
		
			query =     "SELECT * FROM ( SELECT   \n";
	}else{
			query =     "SELECT  \n";
	}
			query +=	"		'0' AS CHK, B.TITLE, B.WDATE, B.CO_SEQ, E.JIKCHAK, E.BUSOR, A.SABUN, E.F_NAME,  \n";
			query +=	"		B.I_FLOW_ID, B.FILES, C.F_NAME AS FORM, C.F_CONTENT, C.F_FNUM, C.F_XML, '' AS OVERCHK, \n";
			query +=	"		C.F_OWNER OWNER, C.F_TABLE_NAME TABLENAME, C.F_DELETE_COLUMN_NAME COL_NAME  \n";
			query +=  "   , GROUPWARE.FCTN_LAST_FLOW_SABUN(B.I_FLOW_ID,'"+strsabun+"') AS LAST_FLOW_SABUN \n";
			query +=  "   , F.POSITION_COLUMN, F.POSITION_TABLE, F.RDTITLE\n";
			query +=  "   , C.F_PATH, C.F_OPTION, C.F_ARG, B.STATUS, COUNT(*) OVER() AS MI_CO, COUNT(B.TITLE) OVER() AS MAX_CO\n";
			query +=	" FROM GROUPWARE.I_FLOW_ORDER A INNER JOIN GROUPWARE.I_FLOW_HEADER B  \n";
			query +=	"		ON A.I_FLOW_ID=B.I_FLOW_ID  \n";
			query +=	"	INNER JOIN GROUPWARE.I_FLOW_ORDER E  \n";
			query +=	"		ON B.I_FLOW_ID=E.I_FLOW_ID AND E.KIND = '0' \n";
			query +=	"	INNER JOIN GROUPWARE.I_FLOW_FORM C  \n";
			query +=	"		ON B.F_TYPE=C.F_NUM  \n";
			query +=  " LEFT OUTER JOIN\n";
			query +=  " GROUPWARE.I_FLOW_FORM_ETC F ON B.F_TYPE = F.F_NUM\n";
			query +=	" WHERE B.GUBUN = '"+strgubun+"' \n";
			if ( strSearch_id.equals("1") )  //��������
			{
				query +=	"	AND B.TITLE LIKE '%" + strSearch_text + "%'	\n";
			}
			else if ( strSearch_id.equals("2") ) //�����
			{
				query +=	"	AND E.KIND = '0' \n";
				query +=	"   AND E.F_NAME LIKE '%" + strSearch_text + "%'	\n";
			}
			else if ( strSearch_id.equals("4") )  //������ȣ
			{
				query +=	"   AND B.CO_SEQ LIKE '%" + strSearch_text + "%'	\n";
			}
			else if ( strSearch_id.equals("5") )  //�μ���
			{
				query +=	"   AND E.BUSOR LIKE '%" + strSearch_text + "%'	\n";
			}
			
			if ( strSearch_id2.equals("1") )  //��������
			{
				query +=	"	AND B.TITLE LIKE '%" + strSearch_text2 + "%'	\n";
			}
			else if ( strSearch_id2.equals("2") ) //�����
			{
				query +=	"	AND E.KIND = '0' \n";
				query +=	"   AND E.F_NAME LIKE '%" + strSearch_text2 + "%'	\n";
			}
			else if ( strSearch_id2.equals("4") )  //������ȣ
			{
				query +=	"   AND B.CO_SEQ LIKE '%" + strSearch_text2 + "%'	\n";
			}
			else if ( strSearch_id2.equals("5") )  //�μ���
			{
				query +=	"   AND E.BUSOR LIKE '%" + strSearch_text2 + "%'	\n";
			}
			else if ( gb_status.equals("1") )   //���ڰ��� �����Ȳ(0 - ��ü, 1 - ����, 2 - �ϰ�, 3 - �Ⱒ) 
			{
				query +=	"   AND B.STATUS IS NULL	\n";
			}else if ( gb_status.equals("2") )   //���ڰ��� �����Ȳ(0 - ��ü, 1 - ����, 2 - �ϰ�, 3 - �Ⱒ) 
			{
				query +=	"   AND B.STATUS = '1'	\n";
			}else if ( gb_status.equals("3") )   //���ڰ��� �����Ȳ(0 - ��ü, 1 - ����, 2 - �ϰ�, 3 - �Ⱒ) 
			{
				query +=	"   AND B.STATUS = '0'	\n";
			}
			
			
			if ( 
			     strsabun.equals("C99990") || 
			     strsabun.equals("C99991") || 
			     strsabun.equals("C12225") || // ������ ȸ���
			     strsabun.equals("C17011") || // �̻���
			     strsabun.equals("C05013") || // ����ö �̻��
			     strsabun.equals("C05119") || // ��Ǹ� �����
			     strsabun.equals("C18388") || // ������
			     strsabun.equals("C18383") || // ������
			     strsabun.equals("C09055") || // ������
			     strsabun.equals("C16098") || // ������
			     strsabun.equals("C19203") || // ��Ɽ
			     strsabun.equals("C19220") || // �ڼҿ�
				 strsabun.equals("C04007") || // ������
				 strsabun.equals("C18377") || // ����ȯ��
			     strsabun.equals("C19244") || // �λ� ������
			     strsabun.equals("C16168") || // ������
			     strsabun.equals("C19246") || // �λ� �躸��
				 strsabun.equals("C19308") || // �λ� ������
				 strsabun.equals("C20001") || // �λ� �ְ���
				 strsabun.equals("C20100") || // �λ� ������
				 strsabun.equals("C20107") || // �ѹ� ������
				 strsabun.equals("C21007") || //�ѹ� ������
				 strsabun.equals("C21141") || //�ѹ� �̼���
				 strsabun.equals("C20148") || //�λ� ������
				 strsabun.equals("C21152")    //�λ� ������
				) 
			{				
				query +=	"	 AND A.KIND='0'  \n";
			}			
			else if ( strsabun.equals("C99015") ) //��ǰ�Ǳ��, ����� ��� �迬�澾 �����߰�
			{				
				if ( strSearch_text.equals("��ǰ")||strSearch_text.equals("��ǰ��") )
				{
					query +=	"	 AND A.KIND='0'  \n";
					query +=    "	 AND B.F_TYPE='78'   \n";
				}
				else if (strSearch_text.equals("����"))
				{
					query +=	"	 AND A.KIND='0'  \n";
					query +=    "	 AND B.F_TYPE='13'   \n";
				}
			}
			else if ( (strsabun.equals("C05106")||strsabun.equals("C07153")) && strSearch_text.equals("DB") ) //����������ȣ DB��û �պ�ö, ����� �����߰�
			{
				query +=	"	 AND A.KIND='0'  \n";
				query +=    "	 AND B.F_TYPE in ('81','82')   \n";
			}
			else if (strsabun.equals("C99992")) //�濵������ �λ���þ�� �� �� ������ ����
			{
				query +=	"	 AND A.KIND='0'  \n";
				query +=    "	 AND (B.F_TYPE NOT IN ('80') AND C.F_FNUM <> 2)    \n";
			}
			else if (strsabun.equals("C16168")||strsabun.equals("C16141"))   //�������� �������� �߰�
			{
			   query += " AND (A.SABUN = '"+strsabun+"' or ( A.KIND = '0' AND C.F_FNUM = 7))";
			}
			else
			{
				query +=	"	AND A.SABUN = '"+strsabun+"' \n";
			}

			if ( status_gb.equals("01") )
			{
				query +=" AND C.F_PAYGB = '1'    \n";
			}
			else if ( status_gb.equals("02") )
			{
				query +=" AND C.F_PAYGB = '0'    \n";
			}
			
			if  (!strCal_sdate.equals("") && !strCal_edate.equals(""))
			{
				query +=	"   AND B.WDATE BETWEEN '" + strCal_sdate + "' AND '" + strCal_edate + "'	\n";
			}
		
		if (!strSearch_text3.equals(""))
		{
			query +=	" ) AA WHERE AA.TITLE LIKE '%" + strSearch_text3 + "%'	\n";
		}
			query +=	" ORDER BY I_FLOW_ID DESC \n";
			
			

	        sql =	"SELECT * FROM	 \n";
			sql +=	"(	 \n";
			sql +=	"	SELECT  \n";
			sql +=	"		ROWNUM AS NO, CHK, TITLE, WDATE, CO_SEQ, JIKCHAK, BUSOR, SABUN, F_NAME, I_FLOW_ID, FILES  \n";
			sql +=	"		, FORM, F_CONTENT, F_FNUM, F_XML, OVERCHK , OWNER, TABLENAME, COL_NAME, MAX_CO \n";
			sql +=  "   , POSITION_COLUMN, POSITION_TABLE, RDTITLE\n";
			sql +=  "   , F_PATH, F_OPTION, F_ARG, MI_CO, STATUS \n";
			sql +=	"	FROM \n";
			sql +=	"	(  \n";
			sql +=	"	"	+ query + " \n";
			sql +=	"	)T  \n";
			sql +=	")T1   \n";
			sql += "WHERE NO BETWEEN '"+ strPageNo +"' AND '"+ strPageSize +"' \n";
			sql += "ORDER BY NO \n"; 
			
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