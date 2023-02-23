(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SW103F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(848,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","30","110","790","470",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("* 부서, 직위, 성명, 입사일, 근속년수는 인사관리에 등록된 내용으로 자동 등록됩니다.\r\n\r\n1. 신청자의 내선번호를 입력합니다.\r\n\r\n2. 사유발생일을 입력합니다.(자녀돌일경우 돌일자, 부모회갑일 경우는 부모님 생년일을 입력합니다)\r\n\r\n\r\n3. 발생사유를 선택합니다. 발생사유를 선택하시면 근속년수에 따라 해당 경조금이 자동 표기됩니다.\r\n\r\n4. 사유발생자성명을 입력합니다.(자녀 돌 일 경우 자녀 이름을, 부모회갑인 해당 부모님 성명을 입력합니다.)\r\n\r\n5. 본인과 사유발생자와의 관계를 선택합니다. 선택하신 발생사유에 따라 선택 하실 수 있는 관계 코드가 제한 \r\n\r\n    됩니다.\r\n\r\n6. 총무에게 특별히 전달하고자 하는 내용을 참고사항에 입력합니다.\r\n\r\n7. 수령계좌번호는 급여계좌로 자동 셋팅되며, 다른 계좌로 변경을 원하는 경우 직접 변경 등록하시면 됩니다.\r\n\r\n8. 내용을 모두 입력하신 후 저장 버튼을 눌러 입력 하신 내용을 저장 합니다.\r\n\r\n9. 출력 버튼을 눌러 신청서를 출력 한 후 첨부서류와 같이 총무(전산팀 심임주 내선-8566)에게 제출합니다.\r\n\r\n* 총무 결재전의 등록건은 수정 가능하나, 결재가 진행된 건은 수정 하실수 없으니 참고하시기 바랍니다.\r\n\r\n수정 방법은 아래 리스트 중 수정하고저 하는 건을 더블 클릭하여, 내용 수정후 저장 버튼을 누르시면 됩니다.\r\n\r\n\r\n\r\n\r\n ");
            obj.set_font("12px/normal \"굴림체\"");
            obj.set_border("1px solid black");
            obj.set_padding("0px 0px 0px 20px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","760","70","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","68","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("경조비 신청절차");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",848,608,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SW103F.xfdl", function() {

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
        this.loadIncludeScript("SW103F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
