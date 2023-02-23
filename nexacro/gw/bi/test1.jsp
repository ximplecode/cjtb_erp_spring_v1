<%@ page import="java.io.File"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%

  /*file upload*/  
  //post방식으로 보내는 값이 한글인 경우 깨지지 않기 위한 설정
  request.setCharacterEncoding("cp949");
  
  //파일이 저장될 폴더명 (넥사크로플랫폼에서 전달)
  String folderName  = request.getParameter("fileFolder");

  //서버의 실제 파일이 저장될 서버의 절대 경로 (파일 시스템상의 위치)
  String filePath = "/www3/erp-next/" + folderName + "/";

  //실제 url 주소 : 서버의 절대 경로와 같은 위치 (자신의 환경에 맞게 조절해야 함)
  String fileUrl = "/www3/erp-next/" + folderName + "/";

  int maxSize = 1000 * 1024 * 1024;

  //폴더유무 확인 및 생성
  File extFolder = new File(filePath);

  //폴더 유무 확인
  if(!extFolder.exists())
  {
    //í´ëê° ìì¼ë©´ ìì±
    extFolder.mkdir();
  }

  //MultipartRequest 객체 생성 ( request객체, 파일이 저장될 경로, 파일 최대 크기, 인코딩 타입, 중복 파일명 방지 설정)
  MultipartRequest multi = new MultipartRequest(request, filePath, maxSize, "cp949", new DefaultFileRenamePolicy());

  //파일들의 이름을 Enumeration으로 반환
  Enumeration files = multi.getFileNames();

  String sVirtualName = "";

  //모든 객체를 반환할때 까지 반복문을 수행
  while (files.hasMoreElements())
  {
    sVirtualName  = (String)files.nextElement();

    //getFile() 파일 객체 반환
    File f = multi.getFile(sVirtualName);

    File newFile = new File(filePath + sVirtualName);
    f.renameTo(newFile);
  }

  //platform data 생성 및 전달
  PlatformData resData = new PlatformData();
  VariableList resVarList = resData.getVariableList();

  resVarList.add("ErrorCode", 0);
  resVarList.add("ErrorMsg", "Success");

  HttpPlatformResponse res = new HttpPlatformResponse(response, request);
  res.setContentType(PlatformType.CONTENT_TYPE_XML);
  res.setCharset("UTF-8");
  res.setData(resData);
  res.sendData();

%>