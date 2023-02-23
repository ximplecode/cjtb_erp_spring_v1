(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR720F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_usecd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">경조구분을 선택하세요</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">결혼</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">사망</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">회갑</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">고희</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">탈상</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">출산</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_relation", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND_1\" type=\"STRING\" size=\"256\"/><Column id=\"KIND_2\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOLIDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KIND_1\">01</Col><Col id=\"KIND_2\">01</Col><Col id=\"NAME\">본인</Col><Col id=\"HOLIDAY\">7</Col></Row><Row><Col id=\"KIND_1\">01</Col><Col id=\"KIND_2\">02</Col><Col id=\"NAME\">자녀</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">01</Col><Col id=\"KIND_2\">03</Col><Col id=\"NAME\">형제자매</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">01</Col><Col id=\"NAME\">본인</Col><Col id=\"HOLIDAY\">0</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">04</Col><Col id=\"NAME\">조부</Col><Col id=\"HOLIDAY\">3</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">05</Col><Col id=\"NAME\">조모</Col><Col id=\"HOLIDAY\">3</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">06</Col><Col id=\"NAME\">외조부</Col><Col id=\"HOLIDAY\">3</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">07</Col><Col id=\"NAME\">외조모</Col><Col id=\"HOLIDAY\">3</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">08</Col><Col id=\"NAME\">부</Col><Col id=\"HOLIDAY\">7</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">09</Col><Col id=\"NAME\">모</Col><Col id=\"HOLIDAY\">7</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">10</Col><Col id=\"NAME\">배우자</Col><Col id=\"HOLIDAY\">7</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">02</Col><Col id=\"NAME\">자녀</Col><Col id=\"HOLIDAY\">5</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">03</Col><Col id=\"NAME\">형제자매</Col><Col id=\"HOLIDAY\">3</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">11</Col><Col id=\"NAME\">백숙부</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">12</Col><Col id=\"NAME\">백숙모</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">13</Col><Col id=\"NAME\">고모</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">02</Col><Col id=\"KIND_2\">14</Col><Col id=\"NAME\">고모부</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">03</Col><Col id=\"KIND_2\">08</Col><Col id=\"NAME\">부</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">03</Col><Col id=\"KIND_2\">09</Col><Col id=\"NAME\">모</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">03</Col><Col id=\"KIND_2\">15</Col><Col id=\"NAME\">배우자부</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">03</Col><Col id=\"KIND_2\">16</Col><Col id=\"NAME\">배우자모</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">04</Col><Col id=\"KIND_2\">08</Col><Col id=\"NAME\">부</Col><Col id=\"HOLIDAY\">0</Col></Row><Row><Col id=\"KIND_1\">04</Col><Col id=\"KIND_2\">09</Col><Col id=\"NAME\">모</Col><Col id=\"HOLIDAY\">0</Col></Row><Row><Col id=\"KIND_1\">04</Col><Col id=\"KIND_2\">15</Col><Col id=\"NAME\">배우자부</Col><Col id=\"HOLIDAY\">0</Col></Row><Row><Col id=\"KIND_1\">04</Col><Col id=\"KIND_2\">16</Col><Col id=\"NAME\">배우자모</Col><Col id=\"HOLIDAY\">0</Col></Row><Row><Col id=\"KIND_1\">05</Col><Col id=\"KIND_2\">08</Col><Col id=\"NAME\">부</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">05</Col><Col id=\"KIND_2\">09</Col><Col id=\"NAME\">모</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">05</Col><Col id=\"KIND_2\">15</Col><Col id=\"NAME\">배우자부</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">05</Col><Col id=\"KIND_2\">16</Col><Col id=\"NAME\">배우자모</Col><Col id=\"HOLIDAY\">1</Col></Row><Row><Col id=\"KIND_1\">06</Col><Col id=\"KIND_2\">02</Col><Col id=\"NAME\">자녀</Col><Col id=\"HOLIDAY\">3</Col></Row><Row><Col id=\"KIND_1\">99</Col><Col id=\"KIND_2\">01</Col><Col id=\"NAME\">본인</Col><Col id=\"HOLIDAY\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">전체조회</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">경조금조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hr710", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TMSCD\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONCD\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"FLOWERCD\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DESTINATION\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_1\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_2\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"PAYDECIDE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FLOWERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">내부결재중</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">내부결재완료</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">주문건</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">화환준비건</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">배송완료건</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">기각건</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">화란방</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">굿펠로우</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">텔레플라워</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUploadFile", this);
            obj._setContents("<ColumnInfo><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_LOCALNAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_LOCALFULLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"M_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_smslist", this);
            obj._setContents("<ColumnInfo><Column id=\"DEST_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("F_Dialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("경조/휴가 신청관리(화환발주관리)");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","2","50","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("경조사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta00:0","50","818","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_tmscd","sta00:0","55","132","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_usecd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_enable("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","cb_tmscd:2","50","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("본인과의 관계");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_relation","sta01:0","55","132","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_relation");
            obj.set_codecolumn("KIND_2");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_enable("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","cb_relation:0","50","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("휴가일수");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_holiday","sta02:0","55","62","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","edt_holiday:0","50","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사유발생일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","Static01_00:0","50","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("증빙서류");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ymd","sta03:0","55",null,"20","sta04:10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_delete",null,"53","80","22","2",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("서류삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_add",null,"53","80","22","btn_file_delete:5",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("서류추가");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","2","sta00:0","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("신청자전화번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","sta10:0","sta02:0","818","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tel","sta10:0","85","132","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","edt_tel:2","sta01:0","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("화환업체");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_cust_kind","sta11:0","cb_relation:10","132","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_cust");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_enable("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","cb_cust_kind:0","sta02:0","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("환환선택");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_flower_code","sta12:2","85","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px solid #3cbcb8");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_flower_name","edt_flower_code:0","sta03:5","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid #3cbcb8");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_flower","edt_flower_name:9","85","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta20","2","sta10:0","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("시간(화환 도착)");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","sta20:0","sta12:0","818","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_arriveTime","sta20:0","edt_tel:10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            obj.set_type("string");
            obj.set_format("@@:@@");
            obj.set_textAlign("center");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta21","medt_arriveTime:2","110","167","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("화환받는분(이름,연락처)");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_flowerInfo","sta21:0","cb_cust_kind:10","309","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("이상인,010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","edt_flowerInfo:0","110","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("문서번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_i_flow_id","sta22:0","edt_flower_name:10","134","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("이상인,010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta40","2","sta20:0","197","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("장소(화환 받는 주소)");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","sta40:0","Static01_00_00_00:0","736","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchAddr","sta40:2","145","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","btn_searchAddr:2","145","706","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("이상인,010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta50","2","sta40:0","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("경조금(금액)");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","sta50:0","Static01_00_00_00_00:0","818","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_pay1","sta50:2","175","132","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_format("@,@@@");
            obj.set_type("number");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta51","medt_pay1:0","170","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("경조화환(금액)");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_pay2","sta51:0","Static01_00_00_00_00:5","132","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_format("@,@@0");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta52","medt_pay2:0","edt_address:5","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("관리자 전달사항");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bigo","sta52:0","175","312","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("이상인,010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","Static01_00_00_00:0","sta04:0",null,"120","2",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_binddataset("dsUploadFile");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"226\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:F_NO\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3","204","305",null,null,"2",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s00","5","210","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("자료검색");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s10","5","sta_s00:0","115","60",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("일자구간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print01","217","214","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","sta_s10:0","btn_print01:4","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_bymd","sta_s10:3","246","177","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_dateformat("yyyy-MM-dd 부터");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00","120","Static01_00_00_00_01_00:0","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_eymd","sta_s10:2","cald_s_bymd:10","178","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_dateformat("yyyy-MM-dd 까지");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s20","5","sta_s10:0","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("진행상태");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00","120","300","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_kind","sta_s20:2","305","168","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_enable("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s30","5","330","115","60",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("구분구간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00_00","sta_s30:0","330","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00_00_00","sta_s30:0","Static01_00_00_00_01_00_00_00_00:0","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_usecd1","sta_s30:2","335","138","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_relation");
            obj.set_codecolumn("KIND_2");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_enable("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_usecd2","sta_s30:2","365","138","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_relation");
            obj.set_codecolumn("KIND_2");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_enable("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","262","335","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("부터");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","262","365","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("까지");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s40","5","390","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("이름");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00_00_00_00","120","390","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","124","395","158","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s50","5","420","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("조회구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","Static00:2","204",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_binddataset("ds_hr710");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"99\"/><Column size=\"127\"/><Column size=\"71\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"122\"/><Column size=\"80\"/><Column size=\"138\"/><Column size=\"415\"/><Column size=\"103\"/><Column size=\"108\"/><Column size=\"202\"/><Column size=\"145\"/><Column size=\"417\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"39\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"발생일\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"경조사유\"/><Cell col=\"6\" text=\"관계\"/><Cell col=\"7\" text=\"경조휴가기간\"/><Cell col=\"8\" text=\"진행상태\"/><Cell col=\"9\" text=\"받는사람\"/><Cell col=\"10\" text=\"장소\"/><Cell col=\"11\" text=\"경조금\"/><Cell col=\"12\" text=\"화환금액\"/><Cell col=\"13\" text=\"지결번호\"/><Cell col=\"14\" text=\"업체명\"/><Cell col=\"15\" text=\"사유\"/><Cell col=\"16\" text=\"발송명의\"/></Band><Band id=\"body\"><Cell displaytype=\"none\" edittype=\"none\" imagestretch=\"none\" expandshow=\"hide\" background=\"url(&apos;Img::loupe.png&apos;) no-repeat center center\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"1\" text=\"bind:BYMD\" displaytype=\"date\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"2\" text=\"bind:BUSE\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"3\" text=\"bind:JIKWI\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"4\" text=\"bind:NAME\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"5\" text=\"bind:TMSCD\" displaytype=\"combotext\" combodataset=\"ds_usecd\" combocodecol=\"CODE\" combodatacol=\"NAME\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"6\" text=\"bind:RELATIONCD\" displaytype=\"combotext\" combodataset=\"ds_relation\" combocodecol=\"KIND_2\" combodatacol=\"NAME\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"7\" text=\"bind:BEGIN_YMD\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"8\" text=\"bind:DELIVERY\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"9\" text=\"bind:CELLPHONE\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"10\" text=\"bind:DESTINATION\" wordWrap=\"char\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"11\" text=\"bind:PAY_1\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"12\" text=\"bind:PAY_2\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"13\" text=\"bind:PAYDECIDE_NO\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"14\" text=\"bind:CUST_KIND\" displaytype=\"combotext\" combodataset=\"ds_cust\" combocodecol=\"CODE\" combodatacol=\"NAME\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"15\" text=\"bind:CAUSE\" autosizecol=\"limitmax\" wordWrap=\"char\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/><Cell col=\"16\" text=\"bind:OWNER_NM\" cssclass=\"expr:comp.parent.fn_setCssBackageground(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00_00_00_01","120","420","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_gb","120","420","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_fittocontents("none");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("normal 300 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_text("경조금조회");
            obj.set_value("01");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"16","120","22","270",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("엑셀변환");
            this.addChild(obj.name, obj);

            obj = new Button("btn_send",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("발송");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_holiday","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cald_ymd","value","ds_insa","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_tel","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_flower_code","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_flower_name","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_flowerInfo","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_i_flow_id","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_address","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_bigo","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cald_s_bymd","value","ds_insa","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cald_s_eymd","value","ds_insa","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_s_name","value","ds_insa","ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","rd_gb","value","ds_insa","IMPAIRMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR720F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR720F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("HR720F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var arr_rt;
        var urlFile = nexacro.getApplication().gv_urlNext;
        var vFileList = new Array();
        var urlXeni = nexacro.getApplication().gv_urlXeni;
        var sSabun;

        this.btn_print01_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	if (Eco.isEmpty(this.cald_s_bymd.value) == true || Eco.isEmpty(this.cald_s_eymd.value ) == true)
        	{
        		this.alert("날자구간을 확인하세요");
        		return false;
        	}

        	str_url = "JSP/hr/getData_hr720.jsp";
        	in_ds = "ds_hr710=ds_hr710";
        	out_ds = "ds_hr710=ds_hr710";
        	str_arg = "I_FLOW_ID='' "+
        	          "BEGIN_DATE='" + this.cald_s_bymd.value +"' "+
        			  "END_DATE='" + this.cald_s_eymd.value +"' "+
        			  "BEGIN_TMSCD='" + this.cb_s_usecd1.value +"' "+
        			  "END_TMSCD='" + this.cb_s_usecd2.value +"' "+
        			  "NAME='" + this.edt_s_name.value +"' "+
        			  "DELIVERY='" + this.cb_s_kind.value +"' ";
        	if ( this.rd_gb.value == "00" )
        	{
        		str_arg += "PAY1_CHK='1' PAY2_CHK = '' ";
        	}
        	else if ( this.rd_gb.value == "01" )
        	{
        		str_arg += "PAY1_CHK='' PAY2_CHK = '1' ";
        	}

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        };

        this.Callback_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        };

        this.HR720F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        	var dt = new Date();
        	this.cald_s_bymd.set_value(Eco.date.addMonth(dt,-1));
        	this.cald_s_eymd.set_value(dt);
        	this.cb_s_kind.set_index(0);
        };

        this.fn_setCssBackageground = function(nRow)
        {
        	var rt_css, delivery_cd;

        	delivery_cd = this.ds_hr710.getColumn(nRow,"DELIVERY_CD");

        	if (delivery_cd == "05")
        	{
        		rt_css = "CssBackground_red";
        	}
        	else
        	{
        		rt_css = "";
        	}

        	return rt_css;
        };

        this.Grid01_oncelldblclick = function(obj,e)
        {
        	this.edt_i_flow_id.set_value(this.ds_hr710.getColumn(e.row,"I_FLOW_ID"));
        	this.cb_tmscd.set_value(this.ds_hr710.getColumn(e.row,"TMSCD"));
        	this.cb_relation.set_value(this.ds_hr710.getColumn(e.row,"RELATIONCD"));
        	this.cald_ymd.set_value(this.ds_hr710.getColumn(e.row,"BYMD"));
        	this.edt_flower_code.set_value(this.ds_hr710.getColumn(e.row,"FLOWERCD"));
        	this.edt_flower_name.set_value(this.ds_hr710.getColumn(e.row,"FLOWERNAME"));
        	this.edt_holiday.set_value(this.ds_hr710.getColumn(e.row,"HOLIDAY"));
        	this.edt_tel.set_value(this.ds_hr710.getColumn(e.row,"PHONE"));
        	this.edt_flowerInfo.set_value(this.ds_hr710.getColumn(e.row,"CELLPHONE"));
        	this.edt_address.set_value(this.ds_hr710.getColumn(e.row,"DESTINATION"));
        	this.medt_arriveTime.set_value(this.ds_hr710.getColumn(e.row,"DELIVERY_TIME"));
        	this.medt_pay1.set_value(this.ds_hr710.getColumn(e.row,"PAY_1"));
        	this.medt_pay2.set_value(this.ds_hr710.getColumn(e.row,"PAY_2"));
        	this.edt_bigo.set_value(this.ds_hr710.getColumn(e.row,"MEMO"));
        	this.cb_cust_kind.set_value(this.ds_hr710.getColumn(e.row,"CUST_KIND"));

        	sSabun = this.ds_hr710.getColumn(e.row,"SABUN");

        	this.getData_attachedfile(this.ds_hr710.getColumn(e.row,"I_FLOW_ID"));

        };

        this.btn_searchAddr_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sAddress",0,0,237,440,null,null,"common::Address.xfdl");
        		this.addChild("sAddress",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sAddress",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_Address);
        };

        this.fn_Callback_Address = function(strID, vArgu)
        {
        	arr_rt = vArgu.split(":");
        	this.edt_address.set_value(arr_rt[1]);

        	this.removeChild("sAddress");
        };

        this.btn_s_flower = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sFlower",0,0,237,440,null,null,"hr::HR711F.xfdl");
        		this.addChild("sFlower",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sFlower",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_flower);
        };

        this.fn_Callback_flower = function(strID, vArgu)
        {
        	arr_rt = vArgu.split("^");
        	this.edt_flower_code.set_value(arr_rt[0]);
        	this.edt_flower_name.set_value(arr_rt[1]);

        	this.removeChild("sFlower");
        };

        this.grd_file_oncelldblclick = function(obj,e)
        {
        	this.lfn_FileDownload(this.FileDownTrans ,this.dsUploadFile, urlFile, e.row);
        };

        this.btn_file_add_onclick = function(obj,e)
        {
        	this.F_Dialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.F_Dialog_onclose = function(obj,e)
        {
        	this.FileUpTrans.clearFileList();
        	var filelist = e.virtualfiles;
        	var f_name, f_localname, f_loaclfullname, m_path;
        	var dt = new Date();
        	var nRow;

        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
        		var extension = vFile.filename.substr((vFile.filename).lastIndexOf('.'), (vFile.filename).length);
        		f_name = vFile.filename;
        		m_path = vFile.fullpath;
        		f_localname = Eco.date.getMaskFormatString(dt, "yyyyMMddHHmmddss")  + "C17011" + extension;
        		f_loaclfullname = "/hr/attachedfile/" + Eco.date.getMaskFormatString(dt, "yyyy/MM/") + f_localname;
        		this.alert(f_loaclfullname);
        		vFile.name = f_localname;
        		nRow = this.dsUploadFile.addRow();
        		this.dsUploadFile.setColumn(nRow,"F_NAME",f_name);
        		this.dsUploadFile.setColumn(nRow,"F_LOCALNAME",f_localname);
        		this.dsUploadFile.setColumn(nRow,"F_LOCALFULLNAME",f_loaclfullname);
        		this.dsUploadFile.setColumn(nRow,"M_PATH",m_path);

        		vFile.name = f_localname;
                vFile.addEventHandler("onsuccess", this.fn_FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.fn_FileList_onerror , this);
                vFile.open(null, 1);
            }
        };

        this.fn_FileList_onsuccess = function(obj, e)
        {
        	var dt = new Date();
        	switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
        			this.FileUpTrans.addFile(obj.name, obj);
        			this.FileUpTrans.upload(nexacro.getApplication().gv_urlNext + '/JSP/fileUpload.jsp?fileFolder=hr/attachedfile/' + Eco.date.getMaskFormatString(dt, "yyyy/MM"));
        			break;
            }
        };

        this.FileUpTrans_onsuccess = function(obj,e)
        {
        	this.setData_attachedfile(this.edt_i_flow_id.value);
        };

        this.setData_attachedfile = function(i_flow_id)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_ATTACHEDFILE.jsp";
        	in_ds = "dsUploadFile=dsUploadFile:U";
        	out_ds = "dsUploadFile=dsUploadFile";
        	str_arg = "I_FLOW_ID='" + i_flow_id + "' ";
        	this.gfn_TransactionP("setFile", str_url, in_ds, out_ds, str_arg, "Callback_setFile", true, "U", false,this);
        };

        this.Callback_setFile = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        			return false;
        		}
        	}

        	this.getData_attachedfile(this.edt_i_flow_id.value);
        };

        this.FileUpTrans_onerror = function(obj,e)
        {
        	this.alert("파일 업로드 실패");
        	this.getData_attachedfile(this.edt_i_flow_id.value);

        };

        this.getData_attachedfile = function(i_flow_id)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr710_file.jsp";
        	in_ds = "dsUploadFile=dsUploadFile";
        	out_ds = "dsUploadFile=dsUploadFile";
        	str_arg = "I_FLOW_ID='" + i_flow_id + "' ";
        	this.gfn_TransactionP("selectFile", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        };

        this.btn_file_delete_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var confirm_result = objApp.confirm("삭제된 데이터는 복원하실수 없습니다.\n" + "선택하시 첨부파일을 삭제하시겠습니까?","삭제","warning");

        	if (confirm_result == true)
        	{
        		if (Eco.isEmpty(this.dsUploadFile.getColumn(this.dsUploadFile.rowposition, "F_NO" )) == false)
        		{
        			this.gfn_TransactionP("delete", "JSP/fileDelete.jsp", "", "", "fileFolder=" + this.dsUploadFile.getColumn(this.dsUploadFile.rowposition,"F_PATH") +" deleteFile="+ this.dsUploadFile.getColumn(this.dsUploadFile.rowposition,"R_NAME")  , "Callback_none", true, "P", false, this);
        		}
        		this.dsUploadFile.deleteRow(this.dsUploadFile.rowposition);
        		this.setData_attachedfile(this.edt_i_flow_id.value);
        	}
        };

        this.Grid01_oncellclick = function(obj,e)
        {
        	if (e.col > 0)
        	{
        		return false;
        	}

        	var rdUrl = gv_svcUrl + "rpt/hr/HR710.mrd";
            var rdParam = "/rp [1][" + this.ds_hr710.getColumn(e.row,"I_FLOW_ID") + "]";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,100,100,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("경조/휴가 신청관리(화환발주관리)");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);

        };

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        };

        this.btn_send_onclick = function(obj,e)
        {
        	var nRow;

        	if (Eco.isEmpty(this.edt_i_flow_id.value) == true)
        	{
        		this.alert("조회된 데이터가 없습니다! 다시확인해보세요!");
        		return false;
        	}

        	nRow = this.ds_hr710.findRow("I_FLOW_ID",this.edt_i_flow_id.value);

        	if (nRow < 0)
        	{
        		this.alert("조회 후 다시 선택하여 주시기 바랍니다.");
        		return false;
        	}

        	var pDelivery = this.ds_hr710.getColumn(nRow,"DELIVERY_CD");

        	if (pDelivery != "00" && pDelivery != "01")
        	{
        		this.alert("이미배송진행된 건이거나 기각된 건입니다. 다시확인해보세요!");
        		return false;
        	}

        	this.ds_hr710.setColumn(nRow,"DELIVERY_CD","02");

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_Guntaeholiday_delivery.jsp";
        	in_ds = "ds_hr710=ds_hr710:U";
        	out_ds = "ds_hr710=ds_hr710";
        	str_arg = "I_FLOW_ID='" + this.edt_i_flow_id.value + "'";
        	this.gfn_TransactionP("delivery_dml", str_url, in_ds, out_ds, str_arg, "Callback_delivery", true, "U", false,this);
        };

        this.Callback_delivery = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	if (this.cb_tmscd.value == "02")
        	{
        		this.lms_send();
        	}
        	else
        	{
        		var objApp = nexacro.getApplication();
        		var confirm_result = objApp.confirm("담당자에게 SMS발송을 하시겠습니까?","확인","question");

        		if (confirm_result == true)
        		{
        			this.lms_send();
        		}
        	}
        }

        this.lms_send = function()
        {
        	var nRow;
        	var pMsg;
        	nRow = this.ds_hr710.findRow("I_FLOW_ID",this.edt_i_flow_id.value);

        	if (nRow < 0)
        	{
        		this.alert("문자발송 실패하였습니다.");
        		return false;
        	}

        	this.ds_smslist.clearData();
        	this.ds_smslist.addRow();
        	this.ds_smslist.setColumn(0,"DEST_PHONE","01088875037");
        	this.ds_smslist.setColumn(0,"DEST_NAME","경영지원부");

        	this.ds_hr710.getColumn(nRow, "NAME")

        	pMsg = "1.접수자명:"+ this.ds_hr710.getColumn(nRow, "NAME") +"\n";
        	pMsg += "2.연락처:"+this.edt_tel.value+"\n";
        	pMsg += "3.받는분:"+ this.edt_flowerInfo.value +"\n";
        	pMsg += "4.사유: 사망(" + this.cb_relation.text +")\n";
        	pMsg += "5.배송일시: "+ this.cald_ymd.value +"("+ this.medt_arriveTime.text +")\n";
        	pMsg += "6.배송지: "+ this.edt_address.text;

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_sms.jsp";
        	in_ds = "ds_smslist=ds_smslist:U";
        	out_ds = "ds_smslist=ds_smslist";
        	str_arg = "send_phone='0232821600' "+
        	          "MsgSubject='[천재교육]' "+
        			  "msg='"+pMsg + "'";
        	this.gfn_TransactionP("sms", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "U", false,this);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_HR720.jsp";
        	in_ds = "";
        	out_ds = "";
        	str_arg = "i_flow_id='"+ this.edt_i_flow_id.value +"' "+
        			  "memo='"+ this.edt_bigo.text +"' "+
        	          "cust_kind='"+ this.cb_cust_kind.value +"' "+
        			  "pay_1='"+ this.medt_pay1.value +"' "+
        			  "pay_2='"+ this.medt_pay2.value +"' ";
        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false,this);
        };

        this.Callback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.alert("수정 완료");
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var filename;
        	filename = "GridList";
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01 , "Sheet1!A1");

        	this.exportObj.set_exporturl(urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR720F_onload,this);
            this.btn_file_delete.addEventHandler("onclick",this.btn_file_delete_onclick,this);
            this.btn_file_add.addEventHandler("onclick",this.btn_file_add_onclick,this);
            this.btn_search_flower.addEventHandler("onclick",this.btn_s_flower,this);
            this.btn_searchAddr.addEventHandler("onclick",this.btn_searchAddr_onclick,this);
            this.grd_file.addEventHandler("oncelldblclick",this.grd_file_oncelldblclick,this);
            this.btn_print01.addEventHandler("onclick",this.btn_print01_onclick,this);
            this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.rd_gb.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_send.addEventHandler("onclick",this.btn_send_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.FileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.F_Dialog.addEventHandler("onclose",this.F_Dialog_onclose,this);
            this.FileUpTrans.addEventHandler("onsuccess",this.FileUpTrans_onsuccess,this);
            this.FileUpTrans.addEventHandler("onerror",this.FileUpTrans_onerror,this);
        };
        this.loadIncludeScript("HR720F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
