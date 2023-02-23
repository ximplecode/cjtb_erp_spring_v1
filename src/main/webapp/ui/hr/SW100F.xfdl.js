(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SW100F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_COMPANY", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSADT\" type=\"STRING\" size=\"8\"/><Column id=\"WORK_YEAR\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SW100_2", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BANK\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB2\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT_CH\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YEAR_CH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SW100_1", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_CHK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GIVE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SW100_4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_CAUSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">H01</Col><Col id=\"NAME\">본인결혼</Col></Row><Row><Col id=\"CODE\">H02</Col><Col id=\"NAME\">자녀결혼</Col></Row><Row><Col id=\"CODE\">H03</Col><Col id=\"NAME\">부모회갑</Col></Row><Row><Col id=\"CODE\">H04</Col><Col id=\"NAME\">부모칠순</Col></Row><Row><Col id=\"CODE\">H05</Col><Col id=\"NAME\">자녀돌</Col></Row><Row><Col id=\"CODE\">H06</Col><Col id=\"NAME\">배우자부모회갑</Col></Row><Row><Col id=\"CODE\">H07</Col><Col id=\"NAME\">배우자부모칠순</Col></Row><Row><Col id=\"CODE\">K01</Col><Col id=\"NAME\">본인사망</Col></Row><Row><Col id=\"CODE\">K02</Col><Col id=\"NAME\">배우자사망</Col></Row><Row><Col id=\"CODE\">K03</Col><Col id=\"NAME\">부모사망</Col></Row><Row><Col id=\"CODE\">K04</Col><Col id=\"NAME\">형제,자매사망</Col></Row><Row><Col id=\"CODE\">K05</Col><Col id=\"NAME\">조무보,외조부모사망</Col></Row><Row><Col id=\"CODE\">K06</Col><Col id=\"NAME\">자녀사망</Col></Row><Row><Col id=\"CODE\">K07</Col><Col id=\"NAME\">배우자부모사망</Col></Row><Row><Col id=\"CODE\">T01</Col><Col id=\"NAME\">퇴직</Col></Row><Row><Col id=\"CODE\">Z01</Col><Col id=\"NAME\">본인입원치료비</Col></Row><Row><Col id=\"CODE\">Z02</Col><Col id=\"NAME\">전적</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_BANK", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">우리은행</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">국민은행</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">신한은행</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">외환은행</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">기업은행</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">하나은행</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">씨티은행</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">SC제일은행</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">농협</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">수협</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">새마을금고</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">우체국</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">산업은행</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">HSBC은행</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">경남은행</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">프라임상호저축은행</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">카카오뱅크</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">케이뱅크</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">유안타증권</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">직접수령</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SEQ", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQENCE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_YearChange", this);
            obj._setContents("<ColumnInfo><Column id=\"CWORK_YEAR\" type=\"STRING\" size=\"5\"/><Column id=\"CWORK_YEAR_CH\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SW100_3", this);
            obj._setContents("<ColumnInfo><Column id=\"AMOUNT\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_RELATIONSHIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">본인</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">배우자</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">자녀</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">부</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">모</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">배우자부</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">배우자모</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">형제</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">자매</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">조부</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">조모</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">외조부</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">외조모</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FILE", this);
            obj._setContents("<ColumnInfo><Column id=\"F_ID\" type=\"STRING\" size=\"1\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"L_FNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("F_Dialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_delete",null,"11%","6.42%","4.3%","1%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭 제");
            obj.set_color("#ffffff");
            obj.set_borderRadius("0px");
            obj.set_textwidth("10");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"11%","6.42%","4.3%","btn_delete:8%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저 장");
            obj.set_color("#ffffff");
            obj.set_borderRadius("0px");
            obj.set_textwidth("10");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"11%","6.42%","4.3%","btn_save:8%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취 소");
            obj.set_color("#ffffff");
            obj.set_borderRadius("0px");
            obj.set_textwidth("10");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"11%","6.42%","4.3%","btn_cancel:8%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출 력");
            obj.set_color("#ffffff");
            obj.set_borderRadius("0px");
            obj.set_textwidth("10");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history",null,"11%","6.42%","4.3%","btn_print:76%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("내 역");
            obj.set_color("white");
            obj.set_borderRadius("0px");
            obj.set_textwidth("10");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"11%","6.42%","4.3%","btn_history:11%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도 움 말");
            obj.set_color("white");
            obj.set_borderRadius("0px");
            obj.set_textwidth("10");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grd1","0.93%",null,null,"44%","0.93%","1.72%",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("DS_SW100_1");
            obj.set_border("1px solid #b7b1b2");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/><Column size=\"350\"/><Column size=\"175\"/><Column size=\"190\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"175\"/><Column size=\"175\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell font=\"bold 16px/normal &quot;Gulim&quot;\" text=\"요청일자\" color=\"#ffffff\"/><Cell col=\"1\" font=\"bold 16px/normal &quot;Gulim&quot;\" color=\"#ffffff\" text=\"발생사유\"/><Cell col=\"2\" font=\"bold 16px/normal &quot;Gulim&quot;\" color=\"#ffffff\" text=\"발생일\"/><Cell col=\"3\" font=\"bold 16px/normal &quot;Gulim&quot;\" color=\"#ffffff\" text=\"발생자성명\"/><Cell col=\"4\" font=\"bold 16px/normal &quot;Gulim&quot;\" color=\"#ffffff\" text=\"근속연수\"/><Cell col=\"5\" font=\"bold 16px/normal &quot;Gulim&quot;\" color=\"#ffffff\" text=\"경조비\"/><Cell col=\"6\" font=\"bold 16px/normal &quot;Gulim&quot;\" color=\"#ffffff\" text=\"총무확인일\"/><Cell col=\"7\" font=\"bold 16px/normal &quot;Gulim&quot;\" color=\"#ffffff\" text=\"지급일자\"/></Band><Band id=\"body\"><Cell text=\"bind:REQUEST_DATE\" font=\"normal 16px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"bind:CAUSE_NAME\" font=\"normal 16px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:CAUSE_DATE\" font=\"normal 16px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"bind:NAME\" font=\"normal 16px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"bind:WORK_YEAR\" font=\"normal 16px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"bind:AMOUNT\" font=\"normal 16px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"bind:MANAGER_CHK_DATE\" font=\"normal 16px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"bind:GIVE_DATE\" font=\"normal 16px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grd_FileA",null,"20.69%","38.46%",null,"0.93%","Grd1:3.14%",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_scrollpixel("all");
            obj.set_binddataset("DS_FILE");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"393\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"사이즈\"/><Cell col=\"2\" text=\"보기\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\"/><Cell col=\"1\" text=\"bind:F_SIZE_TEXT\"/><Cell col=\"2\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"보기\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","68","10","214","65",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("경조비신청");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,null,"Grd_FileA:100.00%","4.37%","0.93%","Grd_FileA:-1",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("첨부파일");
            obj.set_background("#3cbcb8");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"굴림\"");
            obj.set_color("#ffffff");
            obj.set_border("1px solid #b7b1b2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileSelect",null,"Static03:-85.29%","5.49%","2.87%","Static03:-96.79%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("파일선택");
            obj.set_background("#FFFFFF");
            obj.set_color("black");
            obj.set_borderRadius("0px");
            obj.set_textwidth("10");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_edt","0.93%","16.44%","58.27%","36.67%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_border("1px solid #b7b1b2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","div_edt:1%","div_edt:15.46%","div_edt:11%","div_edt:8%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("0");
            obj.set_text("소    속");
            obj.set_font("normal 700 13px/normal \"굴림체\"");
            obj.set_textAlign("center");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_buse","Static01_00:4.5%","div_edt:14.20%","div_edt:16.05%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("1");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static01_01","div_edt:1%","div_edt:29.4%","div_edt:11%","div_edt:8%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("2");
            obj.set_text("직    위");
            obj.set_font("normal 700 13px/normal \"굴림체\"");
            obj.set_textAlign("center");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_jikwi","Static01_01:4.5%","div_edt:28.08%","div_edt:16.05%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("3");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static01_02","div_edt:1%","div_edt:43.85%","div_edt:11%","div_edt:8%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("4");
            obj.set_text("성    명");
            obj.set_font("normal 700 13px/normal \"굴림체\"");
            obj.set_textAlign("center");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_sawoo_name","Static01_02:4.5%","div_edt:42.59%","div_edt:16.05%","div_edt:9.78%",null,null,"75",null,"13",null,this.div_edt.form);
            obj.set_taborder("5");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static01_03","div_edt:1%","div_edt:58.3%","div_edt:11%","div_edt:8%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("6");
            obj.set_text("내선번호");
            obj.set_font("normal 700 13px/normal \"굴림체\"");
            obj.set_textAlign("center");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_tel","Static01_03:4.5%","div_edt:57.10%","div_edt:16.05%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("7");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static01_04","div_edt:1%","div_edt:73%","div_edt:11%","div_edt:8%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("8");
            obj.set_text("가입일자");
            obj.set_font("normal 700 13px/normal \"굴림체\"");
            obj.set_textAlign("center");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_ipsadt","Static01_04:4.5%","div_edt:71.61%","div_edt:16.05%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("9");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static01_05","div_edt:1%","div_edt:87.3%","div_edt:11%","div_edt:8%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("10");
            obj.set_text("근속년수");
            obj.set_font("normal 700 13px/normal \"굴림체\"");
            obj.set_textAlign("center");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_workyear","Static01_05:4.5%","div_edt:86.12%","div_edt:16.05%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("11");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static02_00","div_edt:32.5%","div_edt:18.30%","div_edt:15%","div_edt:9%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("12");
            obj.set_text("사유발생일자");
            obj.set_font("bold 13px/normal \"굴림체\"");
            obj.set_textAlign("left");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static02_01","div_edt:32.5%","div_edt:35.02%","div_edt:17%","div_edt:9%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("13");
            obj.set_text("사유발생자 성명");
            obj.set_font("bold 12px/normal \"굴림체\"");
            obj.set_textAlign("left");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_name","Static02_01:-14.5%","div_edt:34.07%","div_edt:12.86%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("14");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static02_03","div_edt:32.5%","div_edt:51.74%","div_edt:15%","div_edt:9%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("15");
            obj.set_text("참고사항");
            obj.set_font("bold 13px/normal \"굴림체\"");
            obj.set_textAlign("left");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_etc","Static02_03:-3.55%","div_edt:50.79%","div_edt:47.50%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("16");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static02_04","div_edt:32.5%","div_edt:68.14%","div_edt:15%","div_edt:9%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("17");
            obj.set_text("수령계좌번호");
            obj.set_font("bold 13px/normal \"굴림체\"");
            obj.set_textAlign("left");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static02_05","div_edt:32.5%","div_edt:84.86%","div_edt:15%","div_edt:9%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("18");
            obj.set_text("지급대상금액");
            obj.set_font("bold 13px/normal \"굴림체\"");
            obj.set_textAlign("left");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static02_07","div_edt:62.27%","div_edt:35.65%","div_edt:20%","div_edt:8.83%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("19");
            obj.set_text("사유발생자와의 관계");
            obj.set_font("bold 12px/normal \"굴림체\"");
            obj.set_textAlign("left");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static02_06","div_edt:62.27%","div_edt:18.30%","div_edt:14.98%","div_edt:8.83%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("20");
            obj.set_text("발생사유");
            obj.set_font("bold 13px/normal \"굴림체\"");
            obj.set_textAlign("left");
            this.div_edt.addChild(obj.name, obj);

            obj = new Combo("cb_bank","Static02_04:-3.55%","div_edt:67.51%","div_edt:12.86%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("22");
            obj.set_background("#fefce8");
            obj.set_color("black");
            obj.set_innerdataset("DS_BANK");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            this.div_edt.addChild(obj.name, obj);

            obj = new Edit("edt_account_number","cb_bank:12.40%","div_edt:67.51%","div_edt:32.94%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("21");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Combo("cb_cause_code","Static02_06:28%","div_edt:17.67%","div_edt:13.18%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("23");
            obj.set_background("#fefce8");
            obj.set_color("black");
            obj.set_innerdataset("DS_CAUSE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div_edt.addChild(obj.name, obj);

            obj = new Combo("cb_relationship","Static02_07:-5%","div_edt:35.02%","div_edt:13.18%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("24");
            obj.set_background("#fefce8");
            obj.set_color("black");
            obj.set_innerdataset("DS_RELATIONSHIP");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            this.div_edt.addChild(obj.name, obj);

            obj = new Calendar("cald_cause_date","Static02_00:-3.55%","div_edt:17.67%","div_edt:12.86%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("25");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amount","Static02_05:-3.55%","div_edt:84.23%","div_edt:12.86%","div_edt:9.78%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("26");
            obj.set_background("#fefce8");
            obj.set_color("black");
            this.div_edt.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","0","100%","11.4%",null,null,null,null,null,null,this.div_edt.form);
            obj.set_taborder("27");
            obj.set_text("입력");
            obj.set_background("#3cbcb8");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"굴림\"");
            obj.set_color("#ffffff");
            obj.set_border("1px solid #b7b1b2");
            this.div_edt.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,870,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SW100F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SW100F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SW100F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd + "/hr/";
        var str_url, str_outds, str_arg, work_year, work_year2;
        var work_month, target_row, row_status;
        var request_date, sequence;
        var ReIpsa_Msg = false;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.SW100F_onload = function(obj,e)
        {
        	this.fnInit();
        	this.clear_rtn();
        	this.get_junjuk();
        	this.get_person_info();
        	this.get_data();
        };

        this.fnInit = function()
        {
        	this.set_width(this.getOffsetWidth());
        	this.set_height(this.getOffsetHeight());
        }

        this.clear_rtn = function()
        {
        	this.div_edt.form.edt_buse.set_value("");
        	this.div_edt.form.edt_jikwi.set_value("");
        	this.div_edt.form.edt_sawoo_name.set_value("");
        	this.div_edt.form.edt_tel.set_value("");
        	this.div_edt.form.edt_ipsadt.set_value("");
        	this.div_edt.form.edt_workyear.set_value("");

        	this.div_edt.form.cald_cause_date.set_value("");
        	this.div_edt.form.cb_cause_code.set_value("");
        	this.div_edt.form.edt_name.set_value("");
        	this.div_edt.form.cb_relationship.set_value("");
        	this.div_edt.form.edt_etc.set_value("");
        	this.div_edt.form.cb_bank.set_value("");
            this.div_edt.form.edt_account_number.set_value("");
            this.div_edt.form.medt_amount.set_value("");
        	work_year = 0;
            work_month = 0;
            request_date = "";
        	sequence = "";

        	row_status        = "INSERT";
        	this.DS_FILE.clearData();
        	this.Grd_FileA.setFormatColProperty(3, "size", 40); //취소버튼 보이게
        }

        this.get_junjuk = function()
        {
        	//var strArg = "strSabun=" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        	var strArg = "strSabun="+ nexacro.wrapQuote(gv_sabun);
        	var strUrl = "JSP/sw/SQL_SW100_JUNJUK_SELECT.jsp";
        	var inDs = "DS_COMPANY=DS_COMPANY";
        	var outDs = "DS_COMPANY=DS_COMPANY";
        	trace('Transaction(get_junjuk) : SQL_SW100_JUNJUK_SELECT');
        	this.gfn_TransactionP("select_junjuk", strUrl, inDs, outDs, strArg, "Callback_junjuk", false, "P", false, this);
        }

        this.Callback_junjuk = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        }

        this.get_person_info = function()
        {
        	//var strArg = "strSabun=" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        	var strArg = "strSabun="+ nexacro.wrapQuote(gv_sabun);
        	var strUrl = "JSP/sw/SQL_SW100_02S.jsp";
        	var inDs = "DS_SW100_2=DS_SW100_2";
        	var outDs = "DS_SW100_2=DS_SW100_2";
        	trace('Transaction(get_person_info) : SQL_SW100_02S');
        	this.gfn_TransactionP("select", strUrl, inDs, outDs, strArg, "Callback_tr_result", false, "P", false, this);
        }

        this.Callback_tr_result = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        		this.alert(sErrorMsg);
        	else
        	{
        		this.div_edt.form.edt_buse.set_value(this.DS_SW100_2.getColumn(0,"BUSE"));
        		this.div_edt.form.edt_jikwi.set_value(this.DS_SW100_2.getColumn(0,"JIKWI"));
        		this.div_edt.form.edt_sawoo_name.set_value(this.DS_SW100_2.getColumn(0,"NAME"));

        		if ( this.DS_COMPANY.getCount() >= 1 ) // 천재교과서에서 전적을 왔을 경우
        		{
        			this.div_edt.form.edt_ipsadt.set_value((this.DS_COMPANY.getColumn(0,"IPSADT")).substr(0,4) + "-" +
        									(this.DS_COMPANY.getColumn(0,"IPSADT")).substr(4,2) + "-" +
        									(this.DS_COMPANY.getColumn(0,"IPSADT")).substr(6,2));

        			work_year2 = (this.DS_COMPANY.getColumn(0,"WORK_YEAR")).substr(0,2);
        			work_year = nexacro.toNumber((this.DS_COMPANY.getColumn(0,"WORK_YEAR")).substr(0,2));
        			work_month = nexacro.toNumber((this.DS_COMPANY.getColumn(0,"WORK_YEAR")).substr(3,2));
        			this.div_edt.form.edt_workyear.set_value(work_year + "년 " + work_month + "개월");
        		}
        		else // 처음부터 천재교육 소속인 경우
        		{
        			//계약후 정직원 전환 or 재입사의 경우
        			// 입사년도가 2018 이전 인 경우만 정직원 전환일로 계산
        			// 2018년도 부터 계약직 입사자도 자동으로 사우회 가입으로 전환되었기 때문
        			 if ( (this.DS_SW100_2.getColumn(0,"IPSADT_CH") > this.DS_SW100_2.getColumn(0,"IPSADT")) && ( nexacro.toNumber(this.DS_SW100_2.getColumn(0,"IPSADT"),0,8) < 20180100) )
        			 {
        				//alert(nexacro.toNumber(DS_SW100_2.getColumn(0,"IPSADT"),0,8));
        				ReIpsa_Msg = true;

        				this.div_edt.form.edt_ipsadt.set_value((this.DS_SW100_2.getColumn(0,"IPSADT_CH")).substr(0,4) + "-" +
        										(this.DS_SW100_2.getColumn(0,"IPSADT_CH")).substr(4,2) + "-" +
        										(this.DS_SW100_2.getColumn(0,"IPSADT_CH")).substr(6,2));

        				work_year2 = (this.DS_SW100_2.getColumn(0,"WORK_YEAR_CH")).substr(0,2);
        				work_year = nexacro.toNumber((this.DS_SW100_2.getColumn(0,"WORK_YEAR_CH")).substr(0,2));
        				work_month = nexacro.toNumber((this.DS_SW100_2.getColumn(0,"WORK_YEAR_CH")).substr(3,2));
        				this.div_edt.form.edt_workyear.set_value(work_year + "년 " + work_month + "개월");

        				//alert(work_year + " " + work_month);
        			 }
        			 else
        			 {
        				this.div_edt.form.edt_ipsadt.set_value((this.DS_SW100_2.getColumn(0,"IPSADT")).substr(0,4) + "-" +
        										(this.DS_SW100_2.getColumn(0,"IPSADT")).substr(4,2) + "-" +
        										(this.DS_SW100_2.getColumn(0,"IPSADT")).substr(6,2));


        				work_year2 = (this.DS_SW100_2.getColumn(0,"WORK_YEAR")).substr(0,2);
        				work_year = nexacro.toNumber((this.DS_SW100_2.getColumn(0,"WORK_YEAR")).substr(0,2));
        				work_month = nexacro.toNumber((this.DS_SW100_2.getColumn(0,"WORK_YEAR")).substr(3,2));
        				this.div_edt.form.edt_workyear.set_value(work_year + "년 " + work_month + "개월");
        			 }

        		}
        		this.div_edt.form.cb_bank.set_value(this.DS_SW100_2.getColumn(0,"BANK"));
        		this.div_edt.form.edt_account_number.set_value(this.DS_SW100_2.getColumn(0,"ACCOUNT_NO"));


        //		if(work_year == 0 && work_month < 6 && (gv_sabun != "C12182" && gv_sabun != "C12183") )
        		if (work_year == 0 && work_month < 6)
        		{

        			if (gv_sabun == "000000" || gv_sabun == "999999")
        			{
        			  alert("[예외대상] 전입자 입니다. 신청후 담당자에게 문의해 주세요.");
        			}
        		   /*
        		   else
        		   {
        			  alert("입사후 근무기간 6개월미만일 경우 경조비 신청 대상자가 아닙니다. ");
        			  close();
        		   }
        		   */
        		}

        		//정규직 검사 (1:정규직, 2:계약직)
        		if (this.DS_SW100_2.getColumn(0,"SA_GB2") != 1)
        		{
        			alert("신청가능 대상이 아닙니다.(gb :"+this.DS_SW100_2.getColumn(0,"SA_GB2")+")");
        			close();
        		}
        		this.div_edt.form.edt_tel.setFocus();
        	}
        }

        this.get_data = function()
        {
        	var strArg = "strSabun="+ nexacro.wrapQuote(gv_sabun);
        	var strUrl = "JSP/sw/SQL_SW100_01S.jsp";
        	var inDs = "DS_SW100_1=DS_SW100_1";
        	var outDs = "DS_SW100_1=DS_SW100_1";
        	trace('Transaction(get_data) : SQL_SW100_01S');
        	this.gfn_TransactionP("select_01s", strUrl, inDs, outDs, strArg, "fnCALLBACK", false, "P", false, this);
        }

        this.fnCALLBACK = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if(sTrid == "select_01s")
        	{
        		if(nErrorCode != 0 )
        			trace("[select_01s.fnCallBack] " + sTrid +"::"+ sErrorMsg );
        		else if (this.DS_SW100_1.rowcount == 0)
        		{
        			//alert("조회된 자료가 없습니다.");
        		}
        	}
        }

        this.btn_help_onclick = function(obj,e)
        {
        	this.lfn_showModal("help", '', "hr::SW103F.xfdl", "", this, 10, 58, 848, 608);
        };

        this.btn_history_onclick = function(obj,e)
        {
        	this.lfn_showModal("histoty", '', "hr::SW101F.xfdl", "", this, 10, 58, 530, 700);
        };

        this.btn_print_onclick = function(obj,e)
        {
        	if(sequence == '')
        	{
        		alert("출력 할 자료를 선택하세요");
        		return;
        	}

        	var rdopt, rdfile;

        	rdfile = gv_urlMrd + "SW100P_01.mrd";
        	rdopt  = "/rp [" + sequence + "]";

        	var rect;
        	if(system.navigatorname = 'nexacro')
        	{
        		if(system.monitorcount > 1)
        		{
        			var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        			rect = system.getScreenRect(monitor_index);
        		}
        		else
        			rect = system.getScreenRect(1);
        	}
        	else
        		rect = system.getScreenRect(1);

        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("print", "hr::HR_PRT_L.xfdl", this.getOwnerFrame(), {rdfile:rdfile, rdopt:rdopt}, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.clear_rtn();
        	this.get_person_info();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(row_status == "UPDATE" && this.DS_SW100_1.getColumn(this.target_row,"STATUS") != "00" )
        	{
        		alert("지급절차가 진행된 신청건은 내용을 수정하실 수 없습니다!");
        		return;
        	}
        	if(row_status == "INSERT")
        		this.duplicate_check();

        	this.Save_Data();
        };

        this.duplicate_check = function()
        {
        	var strUrl = "JSP/sw/SQL_SW100_04S.jsp";
        	var inDs = "DS_SW100_4=DS_SW100_4";
        	var outDs = "DS_SW100_4=DS_SW100_4";
        	var strArg = "strCause=" + nexacro.wrapQuote(this.div_edt.form.cb_cause_code.value);
        	//str_arg += " strSabun=" + nexacro.wrapQuote(gv_sabun);
        	strArg += " strSabun="+ nexacro.wrapQuote(gv_sabun);
        	trace('Transaction(duplicate_check) : SQL_SW100_04S');
        	this.gfn_TransactionP("select", strUrl, inDs, outDs, strArg, "", false, "P", false, this);
        }

        this.Save_Data = function()
        {
        	if (this.DS_SW100_4.getColumn(0,"REQUEST_DATE") != null)
        	{
        		alert( this.DS_SW100_4.getColumn(0,"REQUEST_DATE") + " 일자로 같은 사유를 \r\n 등록하신 건이 검색되었습니다 " +
        			"\r\n 중복신청건일 경우 지급이 거부될 수 있습니다.");
        		return;
        	}

        	if( this.div_edt.form.edt_tel.value.length == 0)
        	{
        		alert("내선번호를 입력하세요");
        		return;
        	}

        	if( this.div_edt.form.cald_cause_date.value.length == 0)
        	{
        		if( this.div_edt.form.cb_cause_code.value == 'Z02' )
        			alert("사유발생일에 전적일을 입력하세요");
        		else
        			alert("사유발생일을 입력하세요");
        		return;
        	}

        	if( this.div_edt.form.cb_cause_code.value.length == 0)
        	{
        		alert("발생사유를 입력하세요");
        		return;
        	}

        	if( this.div_edt.form.edt_name.value.length == 0)
        	{
        		alert("사유발생자 성명을 입력하세요");
        		return;
        	}

        	if( this.div_edt.form.cb_bank.value.length == 0 && this.div_edt.form.cb_cause_code.value != 'Z02' )
        	{
        		alert("수령은행을 선택하세요");
        		return;
        	}

        	if( this.div_edt.form.edt_account_number.value.length == 0 && this.div_edt.form.cb_cause_code.value != 'Z02' )
        	{
        		alert("수령계좌를 선택하세요");
        		return;
        	}

        	if( this.div_edt.form.medt_amount.value.length == 0 && this.div_edt.form.cb_cause_code.value != 'Z02' )
        	{
        		alert("금액 책정 오류. \r\n발생사유를 다시 선택해 주세요.");
        		return;
        	}

        	if ( this.div_edt.form.cb_cause_code.value == 'Z02' )
        	{
        		var i = this.DS_SW100_1.findRow("CAUSE_CODE", "Z02");

        		if( i != -1 )
        		{
        			alert("이미 전적신청을 하였습니다.");
        			return;
        		}
        	}

        	var strUrl 	= "JSP/sw/SQL_SW100_01U.jsp";
        	var inDs 	= "DS_SEQ=DS_SEQ";
        	var outDs 	= "DS_SEQ=DS_SEQ";
        	var strArg 	= "";

        	if (row_status == "INSERT")
        		strArg = "REQUEST_DATE="    + nexacro.wrapQuote("");
        	else
        		strArg = "REQUEST_DATE="    + nexacro.wrapQuote(request_date);
        	strArg   += " SEQUENCE="       + nexacro.wrapQuote(sequence);
        	strArg   += " SABUN="          + nexacro.wrapQuote(gv_sabun);
        	strArg   += " RELATIONSHIP="   + nexacro.wrapQuote(this.div_edt.form.cb_relationship.value);
        	strArg   += " CAUSE_CODE="     + nexacro.wrapQuote(this.div_edt.form.cb_cause_code.value);
        	strArg   += " CAUSE_DATE="     + nexacro.wrapQuote(this.div_edt.form.cald_cause_date.value);
        	strArg   += " NAME="           + nexacro.wrapQuote(this.div_edt.form.edt_name.value);
        	strArg   += " BANK_CODE="      + nexacro.wrapQuote(this.div_edt.form.cb_bank.value);
        	strArg   += " ACCOUNT_NUMBER=" + nexacro.wrapQuote(this.div_edt.form.edt_account_number.value);
        	strArg   += " WORK_YEAR="      + nexacro.wrapQuote(work_year);
        	strArg   += " AMOUNT="         + nexacro.wrapQuote(this.div_edt.form.medt_amount.value);

        	if (ReIpsa_Msg == true)
        	{
        		//str_arg   += " ETC="            + quote(edt_etc.value + " ( 전입/전출 확인! ) ");
        	}
        	else
        	{
        		strArg   += " ETC="	   	   + nexacro.wrapQuote(this.div_edt.form.edt_etc.value);
        	}

        	strArg   += " TELEPHONE="      + nexacro.wrapQuote(this.div_edt.form.edt_tel.value);
        	strArg   += " DELETE_USER="    + nexacro.wrapQuote(gv_sabun);
        	strArg   += " DMLTYPE="        + nexacro.wrapQuote(row_status);
        	strArg   += " IPSADT="         + nexacro.wrapQuote(this.div_edt.form.edt_ipsadt.value.replace("-",""));
        	strArg   += " SAWOO_NAME="	   + nexacro.wrapQuote(nexacro.trim(this.div_edt.form.edt_sawoo_name.value));

        	trace(strArg);
        	trace('Transaction(SELECT04_callback) : SQL_SW100_01U');
        	this.gfn_TransactionP("insert", strUrl, inDs, outDs, strArg, "save_callback", false, "P", false, this);
        }

        this.save_callback = function(trid, ErrorCode, ErrorMsg ){
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	} else {
        		if (row_status == "INSERT" && this.DS_FILE.rowcount >= 0){
        			this.InsAttachedfiles(this.DS_SEQ.getColumn(0,"SEQUENCE"),"1");
        		} else if (row_status == "UPDATE" && this.DS_FILE.rowcount >= 0){
        			this.InsAttachedfiles(sequence, "1");
        		}
        		this.btn_cancel.click();
        		this.get_data();
        		alert('저장되었습니다');
        	}
        }

        this.InsAttachedfiles = function (seq,reftype)
        {
        	var strUrl = "JSP/sw/SQL_SW100_FILE_DB.jsp";
        	var stroutds;
        	stroutds = " input_File=DS_FILE:A";
        	var out_ds = "out_ds=output";

        	var strArg = " ID="+ nexacro.wrapQuote(seq)+
        				  " REF_TYPE="+ nexacro.wrapQuote(reftype);

        	var urlSave = nexacro.getApplication().gv_urlNext+"/jsp";
        	var vFileSubUrl = "attachedfile_sawoo_chunjae";
        	this.FileUpload_Save(urlSave, vFileSubUrl);
        	trace('Transaction(InsAttachedfiles) : SQL_SW100_FILE_DB');
        	this.gfn_TransactionP("attachedfile_upload", strUrl, stroutds, out_ds, strArg, "FileCallBack", false, "P", false, this);
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	if(this.div_edt.form.cald_cause_date.value == '')
        	{
        		alert("삭제 할 자료가 없습니다\r\n자료를 선택해주세요!");
        		return;
        	}

        	if(this.DS_SW100_1.getColumn(target_row, "STATUS") != "00")
        	{
        		alert("지급절차가 진행된 신청건은 내용을 수정하실 수 없습니다!");
        		return;
        	}

        	if(this.DS_FILE.rowcount > 0)
        	{
        		this.DelAttachedfiles(sequence,"1");
        	}

        	var strUrl		 = "JSP/sw/SQL_SW100_01U.jsp";
        	var strArg		 = "SEQUENCE=" 			+ nexacro.wrapQuote(sequence);
        	strArg 			+= " REQUEST_DATE=" 	+ nexacro.wrapQuote("");
        	strArg 			+= " SABUN="          	+ nexacro.wrapQuote("");
        	strArg   		+= " RELATIONSHIP="   	+ nexacro.wrapQuote("");
        	strArg   		+= " CAUSE_CODE="     	+ nexacro.wrapQuote("");
        	strArg   		+= " CAUSE_DATE="	    + nexacro.wrapQuote("");
        	strArg   		+= " NAME="           	+ nexacro.wrapQuote("");
        	strArg   		+= " BANK_CODE="      	+ nexacro.wrapQuote("");
        	strArg   		+= " ACCOUNT_NUMBER=" 	+ nexacro.wrapQuote("");
        	strArg   		+= " WORK_YEAR="      	+ nexacro.wrapQuote("");
        	strArg   		+= " AMOUNT="         	+ nexacro.wrapQuote("");
        	strArg   		+= " ETC="            	+ nexacro.wrapQuote("");
        	strArg   		+= " TELEPHONE="      	+ nexacro.wrapQuote("");
        	strArg   		+= " DELETE_USER="    	+ nexacro.wrapQuote(gv_sabun);
        	strArg   		+= " DMLTYPE="        	+ nexacro.wrapQuote("DELETE");
        	strArg   		+= " IPSADT="        	+ nexacro.wrapQuote("");

        	trace('Transaction(btn_delete_onclick) : SQL_SW100_01U');
        	this.gfn_TransactionP("delete", strUrl, "", "", strArg, "delete_callback", true, "P", false, this);
        };

        // 첨부파일 DB삭제, 서버 실 데이터는 지우지 않음
        this.DelAttachedfiles = function(seq,reftype)
        {
        	var strUrl = "JSP/sw/SQL_SW100_FILE_DB.jsp";
        	var out_ds = "out_ds=output";
        	var str_arg = " ID=" + nexacro.wrapQuote(seq)+
        				  " REF_TYPE=" + nexacro.wrapQuote(reftype);

        	trace('Transaction(DelAttachedfiles) : SQL_SW100_FILE_DB');
        	this.gfn_TransactionP("attachedfile_upload", strUrl, "", out_ds, str_arg, "FileCallBack", false, "P", false, this);
        }

        this.FileCallBack = function (trid, ErrorCode, ErrorMsg)
        {
        	if (trid == 'attachedfile_upload')
        	{
        		  if (ErrorCode != 0)
        		   {alert(ErrorMsg);
        			return;}
        	}
        }

        this.delete_callback = function( trid, ErrorCode, ErrorMsg )
        {
        	if (ErrorCode != 0)
        	{alert(ErrorMsg);
        	return;}

        	this.DS_SW100_1.deleteRow(target_row);

        	alert("삭제되었습니다");
        	this.btn_cancel.click();
        }
        /* // 닫기 버튼 클릭 시
        this.btn_close_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	if(this.parent.parent.name == "WorkDetail"){
        		var nRow = this.parent.parent.ds_selectMenu.findRow("selectMenu_Div_id",this.parent.name);
        		var bClose_id = this.parent.parent.ds_selectMenu.getColumn(nRow,"selectButton_Div_id");
        		this.parent.parent.div_selectMenu.form.all[bClose_id].form.CloseButton.click();
        	}
        	else
        		this.close();
        };
        */
        this.btn_fileSelect_onclick = function(obj,e)
        {
        	this.F_Dialog.open('nexacro17', FileDialog.MULTILOAD);
        	this.F_Dialog.addEventHandler("onclose", this.FileDialog_onclose, this)
        	// lib_gw에서 쓰는 것. sw용으로 고쳐서 사용해보기
        	//this.lfn_FileUpload(this.F_Dialog, this.FileUpTrans, this.DS_FILE, vFileSubUrl);
        };

        this.FileDialog_onclose = function(objFD, e)
        {
        	this.FileUpTrans.clearFileList();
        	var filelist = e.virtualfiles;
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
        		var extension = vFile.filename.substr((vFile.filename).lastIndexOf('.'), (vFile.filename).length);
        		var objDate = new nexacro.Date();
        		var date = Eco.date.getMaskFormatString(objDate, "yyyy") + Eco.date.getMaskFormatString(objDate, "MM") + Eco.date.getMaskFormatString(objDate, "dd") + ((objDate.getTime()+i*1000).toString()).substr(0,10);
        		var r_name = date + gv_sabun + extension;

        		vFile.name = vFile.filename;
        		vFile.filename = r_name;
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror , this);
                vFile.open(null, 1);
            }
        };

        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
        			var dt = new Date();
        			var vFileSubUrl = "attachedfile_sawoo_chunjae";
        			var nRow = this.DS_FILE.addRow();
        			var F_NAME = obj.name + '[' + e.filesize + ']';

        			this.DS_FILE.setColumn(nRow, "F_NAME", F_NAME);
                    this.DS_FILE.setColumn(nRow, "F_SIZE", e.filesize);
        			this.DS_FILE.setColumn(nRow, "FILE_NAME", obj.name);
                    this.DS_FILE.setColumn(nRow, "R_NAME", obj.filename);
        			this.DS_FILE.setColumn(nRow, "F_PATH", "/hr/"+vFileSubUrl);
        			this.DS_FILE.setColumn(nRow, "L_FNAME", obj.fullpath);
        			this.DS_FILE.setColumn(nRow, "F_ID", "");

        			this.DS_FILE.addColumn( "F_SIZE_TEXT", "string" );
        			var div = 1024;
        			for(var i = 0; i < this.DS_FILE.rowcount; i++)
        			{
        				var size = this.DS_FILE.getColumn(i,"F_SIZE");
        				var count = 0;
        				while(size > 1024)
        				{
        					size = size / div;
        					count += 1;
        				}
        				switch(count)
        				{
        					case 0: size = size.toFixed(2).toString() + "byte"; break;
        					case 1: size = size.toFixed(2).toString() + "KB"; break;
        					case 2: size = size.toFixed(2).toString() + "MB"; break;
        					case 3: size = size.toFixed(2).toString() + "GB"; break;
        					case 4: size = size.toFixed(2).toString() + "TB"; break;
        					default : size = "";
        				}
        				this.DS_FILE.setColumn( i, "F_SIZE_TEXT", size);
        			}

        			this.FileUpTrans.addFile(obj.filename, obj);
        			this.FileUpTrans.addEventHandler("onerror", this.FileUpTrans_onerror, this);
        			break;
            }
        };

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };

        this.FileUpTrans_onerror = function(objFT, e)
        {
        	trace(e.loaded+"/"+e.total);
        };

        //파일 업로드 -> 저장
        this.FileUpload_Save = function(url, vfileSubUrl)
        {
        	trace(url);
        	trace(vfileSubUrl);
        	this.FileUpTrans.addEventHandler("onsuccess", this.FileUpSave_onsuccess, this);
        	this.FileUpTrans.addEventHandler("onerror", this.FileUpSave_onerror, this);
        	this.FileUpTrans.upload(url + '/sw/sawoo_fileUpload.jsp?fileFolder=hr/'+ vfileSubUrl);
        }

        this.FileUpSave_onsuccess = function(objFT,e)
        {
        	if(e.message == "Success")
        		alert("저장에 성공하였습니다.");
        	else
        		alert("첨부파일 저장에 실패하였습니다. 시스템개발팀으로 문의해주세요.");
        }

        this.FileUpSave_error = function(objFT,e)
        {
        	if(e.message == "Success")
        		alert("저장에 성공하였습니다.");
        	else{
        		alert("첨부파일 저장에 실패하였습니다. 시스템개발팀으로 문의해주세요.");
        		}
        }

        this.cald_cause_date_onchanged = function(obj,e)
        {
        	if (this.div_edt.form.cald_cause_date.value.length == 0)
            {
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMddHHmm");
        		this.div_edt.form.cald_cause_date.set_value(strtoDay);
        		this.Year_Change();
            }
            else
            {
        		this.Year_Change();
            }
        };

        this.Year_Change = function()
        {
        	if ( this.DS_COMPANY.getCount() >= 1 ) // 천재교과서에서 전적을 왔을 경우
        	{
        		var strUrl = "JSP/sw/SQL_SW100_06S_JUNJUK.jsp";
        		var strArg =  " strSabun=" + nexacro.wrapQuote(gv_sabun);
        		    strArg += " strCauseDate = " + nexacro.wrapQuote(this.div_edt.form.cald_cause_date.value);
        		var inds = "DS_YearChange=DS_YearChange";
        		var outds = "DS_YearChange=DS_YearChange";

        		trace('Transaction(Year_Change) : SQL_SW100_06S_JUNJUK');
        		this.gfn_TransactionP("YearSelect", strUrl, inds, outds, strArg, "CALLBACK_YEARCh", true, "P", false, this);
        	}
        	else // 천재교육 소속인 경우
        	{
        		var strUrl = "JSP/sw/SQL_SW100_06S.jsp";
        		var strArg =  " strSabun=" + nexacro.wrapQuote(gv_sabun);
        		    strArg += " strCauseDate=" + nexacro.wrapQuote(this.div_edt.form.cald_cause_date.value);
        		trace(strArg);
        		var inds = "DS_YearChange=DS_YearChange";
        		var outds = "DS_YearChange=DS_YearChange";

        		trace('Transaction(Year_Change) : SQL_SW100_06S');
        		this.gfn_TransactionP("YearSelect", strUrl, inds, outds, strArg, "CALLBACK_YEARCh", true, "P", false, this);
        	}
        }

        this.CALLBACK_YEARCh = function(svcid, errCode, errMsg)
        {
           if (errCode != 0)
           {
              alert(errMsg);
              return;
           }

           if ( this.DS_COMPANY.getCount() >= 1 ) // 천재교과서에서 전적을 왔을 경우
           {
        		work_year2 = this.DS_YearChange.getColumn(0,"CWORK_YEAR").substr(0,2);
        		work_year  = nexacro.toNumber(DS_YearChange.getColumn(0,"CWORK_YEAR").substr(0,2));
        		work_month = nexacro.toNumber(DS_YearChange.getColumn(0,"CWORK_YEAR").substr(3,2));
        		this.div_edt.form.edt_workyear.set_value(work_year + "년 " + work_month + "개월");
           }
           // 20180100 이후 입사자들은 사우회 가입처리 후 계산 추가
           else if ( nexacro.trim(this.DS_YearChange.getColumn(0,"CWORK_YEAR_CH")) == '.'  )  // 정직원
           {
        		work_year2 = this.DS_YearChange.getColumn(0,"CWORK_YEAR").substr(0,2);
        		work_year  = nexacro.toNumber(this.DS_YearChange.getColumn(0,"CWORK_YEAR").substr(0,2));
        		work_month = nexacro.toNumber(this.DS_YearChange.getColumn(0,"CWORK_YEAR").substr(3,2));
        		this.div_edt.form.edt_workyear.set_value(work_year + "년 " + work_month + "개월");
           }
           else if ( toNumber(this.DS_SW100_2.getColumn(0,"IPSADT"),0,8) > 20180100 ) // 2018년 이후 가입자들은 계약직도 정직원 처리
           {
        		work_year2 = this.DS_YearChange.getcolumn(0,"CWORK_YEAR").substr(0,2);
        		work_year  = nexacro.toNumber(this.DS_YearChange.getColumn(0,"CWORK_YEAR").substr(0,2));
        		work_month = nexacro.toNumber(this.DS_YearChange.getColumn(0,"CWORK_YEAR").substr(3,2));
        		this.div_edt.form.edt_workyear.set_value(work_year + "년 " + work_month + "개월");
           }
           else // 계약직 후 정직원 전환
           {
        		ReIpsa_Msg = true;

                work_year2 = this.DS_YearChange.getColumn(0,"CWORK_YEAR_CH").substr(0,2);
        	    work_year  = nexacro.toNumber(DS_YearChange.getColumn(0,"CWORK_YEAR_CH").substr(0,2));
                work_month = nexacro.toNumber(DS_YearChange.getColumn(0,"CWORK_YEAR_CH").substr(3,2));
        	    this.div_edt.form.edt_workyear.set_value(work_year + "년 " + work_month + "개월");
           }

           this.Cause_Change();
        }

        //경조사비 금액 계산
        this.Cause_Change = function()
        {
        //		if (toInteger(substr(DS_SW100_2.getColumn(0,"work_year"),0,2))  == 0 &&
        //			toInteger(substr(DS_SW100_2.getColumn(0,"work_year"),3,2)) < 6)

        	if (work_year == 0 && work_month < 6)
        	{
        		if (gv_sabun == "000000" || gv_sabun == "999999" )
        		{
        			alert("[예외대상] 전입자 입니다. 신청후 담당자에게 문의해 주세요.");
        		}
        		else
        		{
        			alert("근무기간이 6개월 이상 일 경우만 경조금을 신청하실 수 있습니다");
        			return;
        		}
        	}

        	if(this.div_edt.form.cb_cause_code.value == "T01")
        	{
        		if (work_year < 1)
        		{
        			alert("사우회 퇴직금 신청은 근속년수가 \r\n 1년이상 시에 신청가능합니다.");
        			this.div_edt.form.cb_cause_code.index = -1;
        			this.div_edt.form.medt_amount.value = 0;
        		}
        		else
        			this.div_edt.form.medt_amount.value = work_year * 50000;
        	}
        	else if(this.div_edt.form.cb_cause_code.value == "Z01")
        	{
        		alert("입원치료비는 본인만 신청가능하며,\r\n7일이상 입원시에만 신청하실 수 있습니다\r\n" +
        			"참고사항에 입원일수를 기재해주세요");

        		if (work_year >= 1)
        			this.div_edt.form.medt_amount.value = "100000";
        		else
        			this.div_edt.form.medt_amount.value = "50000";
        	}
        	else
        	{
        		var strUrl = "JSP/sw/SQL_SW100_03S.jsp";
        		var outds = "DS_SW100_3=DS_SW100_3";
        		var strArg = "strCause=" + nexacro.wrapQuote(this.div_edt.form.cb_cause_code.value);
        		strArg += " strWorkyear=" + nexacro.wrapQuote(work_year2);
        		trace('Transaction(Cause_Change) : SQL_SW100_03S');
        		this.gfn_TransactionP("select", strUrl, "", outds, strArg, "SELECT03_callback", true, "P", false, this);
        	}
        }

        this.SELECT03_callback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        		{alert(ErrorMsg);
        		return;}

        	this.div_edt.form.medt_amount.set_value(this.DS_SW100_3.getColumn(0,"AMOUNT"));
        	this.div_edt.form.edt_name.setFocus();
        }

        this.Grd1_oncelldblclick = function(obj,e)
        {
        	target_row = e.row;

        	if(this.DS_SW100_1.getColumn(e.row,"STATUS") != "00" )
        	{
        		alert("지급절차가 진행된 신청건은 내용을 수정하실 수 없습니다!");
        		this.Grd_FileA.setFormatColProperty(3,"size",0); // 삭제버튼 안보이게
        	}else{
        		this.Grd_FileA.setFormatColProperty(3,"size",50); // 삭제버튼 보이게
        	}

        	sequence = this.DS_SW100_1.getColumn(e.row,"SEQUENCE");

        	request_date = this.DS_SW100_1.getColumn(e.row,"REQUEST_DATE");

        	this.div_edt.form.edt_tel.set_value(this.DS_SW100_1.getColumn(e.row,"TELEPHONE"));
        	this.div_edt.form.edt_workyear.set_value((this.DS_SW100_1.getColumn(e.row,"WORK_YEAR").substr(0,2)) + "년 " +
        								(this.DS_SW100_1.getColumn(e.row,"WORK_YEAR").substr(2,2)) + "개월");

        	this.div_edt.form.cald_cause_date.set_value(this.DS_SW100_1.getColumn(e.row,"CAUSE_DATE"));
        	this.div_edt.form.cb_cause_code.set_value(this.DS_SW100_1.getColumn(e.row,"CAUSE_CODE"));
        	this.div_edt.form.edt_name.set_value(this.DS_SW100_1.getColumn(e.row,"NAME"));
        	this.div_edt.form.cb_relationship.set_value(this.DS_SW100_1.getColumn(e.row,"RELATIONSHIP"));
        	this.div_edt.form.edt_etc.set_value(this.DS_SW100_1.getColumn(e.row,"ETC"));
        	this.div_edt.form.cb_bank.set_value(this.DS_SW100_1.getColumn(e.row,"BANK_CODE"));
        	this.div_edt.form.edt_account_number.set_value(this.DS_SW100_1.getColumn(e.row,"ACCOUNT_NUMBER"));
        	this.div_edt.form.medt_amount.set_value(this.DS_SW100_1.getColumn(e.row,"AMOUNT"));
        	work_year  = nexacro.toNumber((this.DS_SW100_1.getColumn(e.row,"WORK_YEAR").substr(0,2)));
        	work_month = nexacro.toNumber((this.DS_SW100_1.getColumn(e.row,"WORK_YEAR").substr(2,2)));
        	row_status = "UPDATE";

        	//첨부파일 가져오기
        	var strUrl = "JSP/sw/sawoo_file_select.jsp";
        	var strArg = " ID="+ nexacro.wrapQuote(sequence)+
        				 " REF_TYPE="+ nexacro.wrapQuote("1"); // 1: 천재교육
        	var inds = "DS_FILE=DS_FILE";
        	var outds = "DS_FILE=DS_FILE";

        	trace('Transaction(Grd1_oncelldblclick) : sawoo_file_select');
        	this.gfn_TransactionP("sawoo_file_select", strUrl, inds, outds, strArg, "sawoo_file_select_callback", true, "P", false, this);

        	this.div_edt.form.edt_tel.setFocus();
        };

        this.sawoo_file_select_callback = function (trid, ErrorCode, ErrorMsg)
        {
        	this.DS_FILE.addColumn( "F_SIZE_TEXT", "string" );
        	trace(this.DS_FILE.getColumn(0, "F_ID"));
        	trace(this.DS_FILE.getColumn(0, "F_NAME"));
        	trace(this.DS_FILE.getColumn(0, "F_SIZE"));
        	trace(this.DS_FILE.getColumn(0, "FILE_NAME"));
        	trace(this.DS_FILE.getColumn(0, "R_NAME"));
        	trace(this.DS_FILE.getColumn(0, "F_PATH"));
        	trace(this.DS_FILE.getColumn(0, "L_FNAME"));
        	if(ErrorCode != 0){
        		trace(ErrorMsg);
        		alert("첨부파일 조회에 실패했습니다.");
        		return;
        	}
        	var div = 1024;
        	for(var i = 0; i < this.DS_FILE.rowcount; i++)
        	{
        		var size = this.DS_FILE.getColumn(i,"F_SIZE");
        		var count = 0;
        		while(size > 1024)
        		{
        			size = size / div;
        			count += 1;
        		}
        		switch(count)
        		{
        			case 0: size = size.toFixed(2).toString() + "byte"; break;
        			case 1: size = size.toFixed(2).toString() + "KB"; break;
        			case 2: size = size.toFixed(2).toString() + "MB"; break;
        			case 3: size = size.toFixed(2).toString() + "GB"; break;
        			case 4: size = size.toFixed(2).toString() + "TB"; break;
        			default : size = "";
        		}
        		this.DS_FILE.setColumn( i, "F_SIZE_TEXT", size);
        	}
        }

        this.edt_tel_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if (obj.id == "edt_ipsadt")          this.div_edt.form.cald_cause_date.setFocus();
        		if (obj.id == "cald_cause_date")     this.div_edt.form.cb_cause_code.setFocus();
        		if (obj.id == "cb_cause_code")       this.div_edt.form.edt_name.setFocus();
        		if (obj.id == "edt_name")            this.div_edt.form.cb_relationship.setFocus();
        		if (obj.id == "cb_relationship")     this.div_edt.form.edt_etc.setFocus();
        		if (obj.id == "edt_etc")             this.div_edt.form.cb_bank.setFocus();
        		if (obj.id == "cb_bank")             this.div_edt.form.edt_account_number.setFocus();
        		if (obj.id == "edt_account_number")  this.div_edt.form.medt_amount.setFocus();
        		if (obj.id == "medt_amount")         this.btn_save.setFocus();
        	}
        };

        this.cb_cause_code_onitemchanged = function(obj,e)
        {
        	if( (this.div_edt.form.cald_cause_date.value).length == 0)
            {
        		if( this.div_edt.form.cb_cause_code.value == 'Z02' )
        			alert("사유발생일에 전적일을 입력하세요.");
        		else
        			alert("사유발생일을 입력하세요");

        		this.div_edt.form.cb_cause_code.set_index(-1);
        		this.div_edt.form.cald_cause_date.setFocus();
        		return;
            }

        	this.Year_Change();
        };

        this.cb_relationship_onitemchanged = function(obj,e)
        {
        	switch(this.div_edt.form.cb_cause_code.value)
        	{
        		case "H01" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "01")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "H02" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "03")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "H03" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "04" && this.div_edt.form.cb_relationship.value != "05")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "H04" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "04" && this.div_edt.form.cb_relationship.value != "05")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "H05" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "03")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "H06" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "06" && this.div_edt.form.cb_relationship.value != "07")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "H07" :
        		{
        		if(this.div_edt.form.cb_relationship.value != "06" && this.div_edt.form.cb_relationship.value != "07")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "K01" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "01")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "K02" :
        		{
        		if(this.div_edt.form.cb_relationship.value != "02")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "K03" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "04" && this.div_edt.form.cb_relationship.value != "05")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "K04" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "08" && this.div_edt.form.cb_relationship.value != "09")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "K05" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "10" && this.div_edt.form.cb_relationship.value != "11" &&
        			this.div_edt.form.cb_relationship.value != "12" && this.div_edt.form.cb_relationship.value != "13")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "K06" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "03")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "K07" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "06" && this.div_edt.form.cb_relationship.value != "07")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "T01" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "01")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        		case "Z01" :
        		{
        			if(this.div_edt.form.cb_relationship.value != "01")
        			{
        				alert("관계 선택이 잘못됐습니다!");
        				this.div_edt.form.cb_relationship.set_index(-1);
        			}
        			break;
        		}
        	}
        };

        this.Grd_FileA_oncellclick = function(obj,e)
        {
        	if(e.cell == 2){ //미리보기 눌렀을때
        		if (this.DS_FILE.getColumn(e.row, "L_FNAME") == ""){

        			var file_path = this.DS_FILE.getColumn(e.row, "F_PATH");
        			var file_rname = this.DS_FILE.getColumn(e.row, "R_NAME");
        			var file_fname = this.DS_FILE.getColumn(e.row, "FILE_NAME");

        			this.FileDownload(file_path, file_rname, file_fname);

        		}else {
        			system.execShell(this.DS_FILE.getColumn(e.row,"L_FNAME"));
        		}

        	} else if(e.cell == 3) { //삭제버튼 눌렀을 때
        		var objApp = nexacro.getApplication();
        		if ( objApp.confirm("첨부문서를 삭제 합니다. 확인 후 꼭 저장을 하셔야 적용됩니다.") == true ){
        			this.DS_FILE.deleteRow(e.row);
        		}else
        			return;
        	}
        };

        this.FileDownload = function(path, rname, fname)
        {
        	this.FileDownTrans.clearPostDataList();
        	this.FileDownTrans.set_downloadfilename(fname);
        	this.FileDownTrans.download((gv_svraddr.substr(0, gv_svraddr.length - 1)) + path +'/'+ rname);

        	this.FileDownTrans.addEventHandler("onsuccess", this.FileDownTrans_onsuccess, this);
        	this.FileDownTrans.addEventHandler("onerror", this.FileDownTrans_onerror, this);
        }

        this.FileDownTrans_onsuccess = function(obj,e)
        {
        	system.execShell(e.targetfullpath);
        	this.FileDownTrans.clearPostDataList();
        };

        this.FileDownTrans_onerror = function(objFT, e)
        {
        	trace(e.loaded+"/"+e.total);
        };

        this.Button00_onclick = function(obj,e)
        {
        	alert("height = " + this.getOffsetHeight() + ' / width = ' + this.getOffsetWidth());
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SW100F_onload,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_history.addEventHandler("onclick",this.btn_history_onclick,this);
            this.btn_help.addEventHandler("onclick",this.btn_help_onclick,this);
            this.Grd1.addEventHandler("oncelldblclick",this.Grd1_oncelldblclick,this);
            this.Grd_FileA.addEventHandler("oncellclick",this.Grd_FileA_oncellclick,this);
            this.btn_fileSelect.addEventHandler("onclick",this.btn_fileSelect_onclick,this);
            this.div_edt.form.edt_tel.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.edt_name.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.edt_etc.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.cb_bank.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.edt_account_number.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.cb_cause_code.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.cb_cause_code.addEventHandler("onitemchanged",this.cb_cause_code_onitemchanged,this);
            this.div_edt.form.cb_relationship.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.cb_relationship.addEventHandler("onitemchanged",this.cb_relationship_onitemchanged,this);
            this.div_edt.form.cald_cause_date.addEventHandler("onchanged",this.cald_cause_date_onchanged,this);
            this.div_edt.form.cald_cause_date.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
            this.div_edt.form.medt_amount.addEventHandler("onkeydown",this.edt_tel_onkeydown,this);
        };
        this.loadIncludeScript("SW100F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
