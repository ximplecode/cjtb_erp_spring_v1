<%@ page contentType="text/html; charset=euc-kr" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.tmax.tibero.TbTypes" %>
<%@ page import="com.tmax.tibero.jdbc.TbDriver" %>
<%@ page import="java.sql.*"%>
<%!
    public DataSet makeDataSet(ResultSet rs, String strDataSet)  throws ServletException, Exception
    {
        DataSet ds = new DataSet(strDataSet);

        /**select �� ����**/
        ResultSetMetaData rsmd = rs.getMetaData();

        /** select�� �÷� ��**/
        int numberOfColumns = rsmd.getColumnCount();

        int ColSize;

        for ( int j = 1 ; j <= numberOfColumns ; j++ )
        {
            String Colnm = rsmd.getColumnName(j);
            int    ColType = rsmd.getColumnType(j);
            ColSize = rsmd.getColumnDisplaySize(j);

            /** select�� �÷��� type�� �°� ����Ÿ�� �÷��� ���� **/
            if ( ColType == Types.NUMERIC || ColType == Types.DOUBLE )
            {
                ds.addColumn(Colnm, DataTypes.DECIMAL,ColSize);
            }
            else if ( ColType == Types.VARCHAR )
            {
                ds.addColumn(Colnm, DataTypes.STRING,ColSize);
            }
            else if ( ColType == Types.DATE )
            {
                ds.addColumn(Colnm, DataTypes.DATE,ColSize);
            }
            else if ( ColType == Types.INTEGER )
            {
                ds.addColumn(Colnm, DataTypes.INT,ColSize);
            }
            else
            {
                ds.addColumn(Colnm, DataTypes.STRING,ColSize);
            }
        }

        int Row = 0;
        int i;

        while(rs.next())
        {
            /** ����Ÿ�� row �߰� **/
            Row = ds.newRow();

            for ( i = 0 ; i < numberOfColumns ; i++ )
            {
                if ( ds.getColumn(i).getDataType() == DataTypes.DATE )
                {
                    ds.set(Row,ds.getColumn(i).getName(),rs.getDate(ds.getColumn(i).getName()));  // ����Ÿ����
                }
                else
                {
                    ds.set(Row,ds.getColumn(i).getName(),rs.getString(ds.getColumn(i).getName()));  // ����Ÿ����
                }
            }
        }
        return ds;
    }
%>

<%
    /** Nexacro �⺻��ü(PlatformData) �����ϱ� **/
    PlatformData pdata = new PlatformData();

/*********************************************************
 * request�� ���� ������ parsing�Ͽ�
 * input variable list, input dataset list�� �����Ѵ�.
 * (Nexacro ���� ������ �����͸� parsing�Ѵ�.)
 *********************************************************/
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, "UTF-8");
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();

/*
��ȸ ������ �޾ƿͼ� ����� ��
String selInfo = inVariableList.getString("Argument ID");

�ϴ� ������ �ۼ� ���� = "select * from Table�� where UID = " + selInfo;
*/


/** ErrorCode, ErrorMsg ����κ� **/
    int nErrorCode = 0;
    String strErrorMsg = "START";

/** Database ���� **/
    try {

        Connection con = null;
        Statement stmt = null;
        ResultSet rs   = null;

        try {
            String url="jdbc:tibero:thin:@116.121.230.104:8629:eruncjtb";
            Class.forName("com.tmax.tibero.jdbc.TbDriver");
            con = DriverManager.getConnection(url,"cjtb_groupware","^rmfnqdl4432");

            stmt = con.createStatement();

            /** ���� ����  **/
            StringBuffer sql = new StringBuffer();
            sql.append("/* LeftMenuMapper.getLeftMenuList */\n" +
                    "        SELECT * FROM cjtb_groupware.menulist\n" +
                    "        WHERE MLEVEL != 0\n" +
                    "        START WITH MLEVEL = '0' CONNECT BY NOCYCLE PRIOR CODE = UPCODE ORDER SIBLINGS BY SORT" );
            rs = stmt.executeQuery(sql.toString());
            pdata.addDataSet(makeDataSet(rs,"ds_Multi"));
            /** ErrorCode, ErrorMsg ó���ϱ� **/
            nErrorCode = 0;
            strErrorMsg = "SUCC";

        } catch (Exception e) {
            /** ErrorCode, ErrorMsg ó���ϱ� **/
            nErrorCode = -1;
            strErrorMsg = e.getMessage();
        }
        /** Database Close**/
        if(rs   != null){	try{rs.close();}  catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
        if(stmt != null){	try{stmt.close();}catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
        if(con  != null){	try{con.close();} catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
    }  catch (Throwable th) {
        /** ErrorCode, ErrorMsg ó���ϱ� **/
        nErrorCode = -1;
        strErrorMsg = th.getMessage();
    }
/** ErrorCode, ErrorMsg ó���ϱ� **/
    VariableList varList = pdata.getVariableList();
    varList.add("ErrorCode", nErrorCode);
    varList.add("ErrorMsg", strErrorMsg);

    out.clear();

/** XML output ��ü(PlatformResponse) ����� **/
    HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
    System.out.println("!@#!#!@#!@#!@#!@#@! JSP"+pdata.toString());
    res.setData(pdata);

    res.sendData();

%>