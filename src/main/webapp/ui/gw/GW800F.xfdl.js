(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW800F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(848,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","26","120","794","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("* 결재라인 설정(팀장(부서장)까지)하고 \'신규\'버튼 눌러 결재문서 생성 \r\n\r\n* 라벨출력 담당자는 결재라인(합의자, 담당자 등)에 올리지 않습니다,\r\n\r\n\t- 우편번호 : 5자리  \r\n\r\n\t- 도로명주소 : 우편번호 검색에서 주소 입력 후, 이어서 상세주소를 꼭 기입\r\n\t\r\n\t- 휴대폰번호(전화번호) : 배송시 연락받을 번호 기입\r\n\t\r\n\t- 품목 : 도서/서류/기타 중 선택하고 \'기타\'인 경우 오른쪽 칸에 상세내용 기입\r\n\t\r\n\t- 발송인 팀/성명 : 발송인 팀과 성명을 같이 기입 (추후 추적을 위함)\r\n\t\r\n\t- 휴대폰번호(전화번호) : 발송인이 연락받을 수 있는 번호 기입\r\n\t\r\n\r\n* 귀속부서 : 발신인(본인)의 소속 부서명을 찾아 추가하세요. (대리로 보내는 경우 실질적 귀속부서 기입)\r\n\r\n* 직과도서 : 보내는 도서 또는 서류와 관련된 자사도서를 찾아 추가하세요. (여러개 기입 가능, 연관된 도서 없으면 공란)\r\n\r\n* 대량접수 하는 방법 :  보내는 물량이 많은 경우 대량접수 할 수 있습니다.\r\n\r\n    ① 화면 상단 \'신규\' 버튼 눌러 결재문서 생성\r\n\r\n    ② 화면 중반 \'양식 내리기\'로 양식을 다운받아 서식에 따라 기입 \r\n\r\n    ③ 화면 상단 \'삭제\'-\'내용\' 눌러서 \'발송 리스트\'에 음영처리 된 1번 칸 삭제 (1번 칸이 남아있으면 업로드가 안됨)\r\n\r\n    ④ \'엑셀 업로드\' 버튼 눌러 기입한 양식 업로드\r\n   \r\n    ⑤ 결재자를 팀장(부서장)까지 설정하고 \'발송\'\r\n    \r\n\r\n* 라벨신청시간 : 매일 오전 8:30 ~ 오후 2:00\r\n\r\n* 라벨은 오후 2:20 ~ 3:00 사이에 자료실에서 수령\r\n\r\n* 오후 3시(택배차 픽업시간)전까지 경비실 앞에 내리시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","68","10","462","65",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("택배라벨 출력요청 절차");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","774","89","53","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",848,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GW800F.xfdl", function() {

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("GW800F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
