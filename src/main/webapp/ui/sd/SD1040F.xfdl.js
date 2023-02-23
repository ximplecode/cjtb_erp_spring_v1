(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1040F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">1</Col><Col id=\"name\">일자별반품현황</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"name\">도서별반품현황</Col></Row><Row><Col id=\"value\">3</Col><Col id=\"name\">거래처별반품현황</Col></Row><Row><Col id=\"value\">4</Col><Col id=\"name\">도서별반품집계</Col></Row><Row><Col id=\"value\">5</Col><Col id=\"name\">거래처별반품(집계</Col></Row><Row><Col id=\"value\">6</Col><Col id=\"name\">도서별반품집계1</Col></Row><Row><Col id=\"value\">7</Col><Col id=\"name\">거래처별반품집계1</Col></Row><Row><Col id=\"value\">8</Col><Col id=\"name\">일자별반품(2)현황</Col></Row><Row><Col id=\"value\">9</Col><Col id=\"name\">도서별반품(2)집계</Col></Row><Row><Col id=\"value\">10</Col><Col id=\"name\">연결업체별반품현황</Col></Row><Row><Col id=\"name\">도서별반품집계(차이</Col><Col id=\"value\">11</Col></Row><Row><Col id=\"name\">본사이체반품집계(서점수</Col><Col id=\"value\">12</Col></Row><Row><Col id=\"name\">50%추가반품현황</Col><Col id=\"value\">13</Col></Row><Row><Col id=\"name\">일자별반품현황(물류</Col><Col id=\"value\">14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubbook", this);
            obj._setContents("<ColumnInfo><Column id=\"code_key\" type=\"STRING\" size=\"10\"/><Column id=\"book_year\" type=\"STRING\" size=\"4\"/><Column id=\"book_name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIoyh", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"cd_key\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"index\">01</Col><Col id=\"cd_key\">[01] 반품</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">02</Col><Col id=\"cd_key\">[02] 본사이체</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">03</Col><Col id=\"cd_key\">[03] 파본이체</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">04</Col><Col id=\"cd_key\">[04] 총판이체</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">05</Col><Col id=\"cd_key\">[05] 출고율</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">06</Col><Col id=\"cd_key\">[06] 반품(2)</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">07</Col><Col id=\"cd_key\">[07] 인정이체</Col><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbr", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmd_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">판매용</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">교사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">타계정</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bpyh", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jang", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">인천</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">R&amp;D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1_2", this);
            obj.set_keystring("BYMD, NUM");
            obj._setContents("<ColumnInfo><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BPYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_YUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("BYMD, NUM");
            obj._setContents("<ColumnInfo><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BPYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_YUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj.set_keystring("CUST_GB+CUST_CD, BYMD+NUM");
            obj._setContents("<ColumnInfo><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KW_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"QTY4\" type=\"INT\" size=\"256\"/><Column id=\"QTY5\" type=\"INT\" size=\"256\"/><Column id=\"QTY6\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_5", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"QTY4\" type=\"INT\" size=\"256\"/><Column id=\"QTY5\" type=\"INT\" size=\"256\"/><Column id=\"QTY6\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_6", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"QTY4\" type=\"INT\" size=\"256\"/><Column id=\"QTY5\" type=\"INT\" size=\"256\"/><Column id=\"QTY6\" type=\"INT\" size=\"256\"/><Column id=\"QTY7\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_7", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"QTY4\" type=\"INT\" size=\"256\"/><Column id=\"QTY5\" type=\"INT\" size=\"256\"/><Column id=\"QTY6\" type=\"INT\" size=\"256\"/><Column id=\"QTY7\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_8", this);
            obj.set_keystring("BYMD, JPNO");
            obj._setContents("<ColumnInfo><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVG_PCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCOST_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_9", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVG_PCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCOST_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_10", this);
            obj.set_keystring("M_CUSTGB+M_CUSTCD, D_CUSTGB+D_CUSTCD");
            obj._setContents("<ColumnInfo><Column id=\"M_CUSTGB\" type=\"STRING\" size=\"256\"/><Column id=\"M_CUSTCD\" type=\"STRING\" size=\"256\"/><Column id=\"MCU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"D_CUSTGB\" type=\"STRING\" size=\"256\"/><Column id=\"D_CUSTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DCU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAN\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_11", this);
            obj.set_keystring("M_CUSTGB+M_CUSTCD, D_CUSTGB+D_CUSTCD");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KW_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"JAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_12", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BQTY\" type=\"INT\" size=\"256\"/><Column id=\"SIN_QTY\" type=\"INT\" size=\"256\"/><Column id=\"SC_QTY\" type=\"INT\" size=\"256\"/><Column id=\"BAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SIN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SC_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_13", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BPYH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BPYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"PRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOUNT_100P\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TARGET_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TARGET_QTY\" type=\"INT\" size=\"256\"/><Column id=\"TARGET_AMOUNT_50P\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TARGET_QTY_50P\" type=\"INT\" size=\"256\"/><Column id=\"CONNECT_JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECT_SEQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_14", this);
            obj.set_keystring("BYMD, BYMD+NUM");
            obj._setContents("<ColumnInfo><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BPYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"EXCESS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LIMIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_YUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00_00","40.79%","12",null,"40","38.00%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","41.29%","17",null,"30","50.71%",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10.50%","12",null,"40","68.00%",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","70.57%","12",null,"40","1.57%",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","10.5%","50",null,"40","68%",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","70.50%","50",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","10.50%","88",null,"86","64.50%",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00","40.36%","50",null,"40","38.00%",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00","10.50%","346",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00_00","80.93%","88",null,"32","1.50%",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bgbr","80.93%","120",null,"190","1.50%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_binddataset("ds_bgbr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select","14.29%","17",null,"30","78.57%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmd_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_edate","53.79%","17",null,"30","38.57%",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","51.21%","17",null,"30","47.07%",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sbook","11.07%","55",null,"30","82.93%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("0000000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20.57%","55",null,"30","78.5%",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ebook","23.93%","55",null,"30","70%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("9999999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ebookcode","30.07%","61",null,"19","68.64%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak","71.79%","60",null,"20","22.14%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("학년용");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak1","78.93%","60",null,"20","15.14%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("1학기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak2","86.07%","60",null,"20","8.64%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("2학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","14.07%","100",null,"26","81.86%",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("속성코드");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","14.00%","133",null,"26","81.86%",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("속성명");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_subbookcode","18.50%","98",null,"30","75.14%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new TextArea("ed_bookname","18.50%","131",null,"30","75.14%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_scrolltype("none");
            obj.set_font("11px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_select","25.14%","95",null,"20","70.86%",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("도서");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_use","25.14%","113",null,"20","70.36%",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("사용x");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_year","25.07%","131",null,"30","70.50%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_min("2009");
            obj.set_max("9999");
            obj.set_value("2012");
            this.addChild(obj.name, obj);

            obj = new Button("btn_attribute_search","30.93%","131",null,"30","64.93%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sbookcode","17.21%","61",null,"19","81.5%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","71.36%","17",null,"30","25.71%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","74.36%","17",null,"30","22.21%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scust","77.86%","23",null,"19","20.79%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","82.36%","17",null,"30","14.71%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","85.36%","17",null,"30","11.21%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ecust","88.86%","23",null,"19","9.79%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","80.64%","17",null,"30","18.43%",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","46.36%","56",null,"30","52.57%",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_syy","41.29%","55",null,"30","54.07%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_eyy","47.29%","55",null,"30","48.07%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new TextArea("E_gubn","11.07%","17",null,"30","85.93%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maxlength("1");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","425",null,"59.25%","1.50%",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","91.93%","390",null,"25","1.50%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_attribute","10.50%","166",null,"144","64.50%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("dsSubbook");
            obj.set_autofittype("none");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"177\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"도서코드\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:code_key\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:book_year\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:book_name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","11.00%","351",null,"30","73.36%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_select");
            obj.set_datacolumn("name");
            obj.set_codecolumn("value");
            obj.set_text("일자별 재생출고현황");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","83.50%","354",null,"25","9.50%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","91.00%","354",null,"25","3.00%",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_isbn","22.00%","23",null,"20","74.29%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Isbn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1.79%","12",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("선택");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1.79%","50",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("도서코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1.79%","88",null,"222","89.29%",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("속성코드 조회");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","31.86%","12",null,"40","59.00%",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","31.86%","50",null,"40","59.00%",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("도서년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","1.79%","346",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","61.86%","50",null,"40","29.07%",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("학년구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","61.86%","12",null,"40","29.07%",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00_00_00","61.86%","88",null,"32","18.86%",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("이체유형");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bpyh","61.79%","120",null,"190","18.86%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_bpyh");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00","44.36%","88",null,"32","38.07%",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("출고 유형");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00_00","10.50%","308",null,"40","64.29%",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_01","1.79%","308",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("M_bigo","11.00%","313",null,"30","65.29%",null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ioyh","44.36%","120",null,"190","38.14%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("dsIoyh");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"조건명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:cd_key\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_01_00","35.43%","308",null,"40","55.50%",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("관리");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00_00_00","44.36%","308",null,"40","30.43%",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("KW_bigo","45.00%","313",null,"30","31.07%",null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","35.43%","88",null,"222","55.50%",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("유형별출력조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_01_00_00","69.29%","308",null,"40","21.50%",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("장소");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00_00_00_00","78.29%","308",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("E_jang","79.00%","313",null,"30","17.57%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_maxlength("1");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Combo("jang_select","82.79%","313",null,"30","9.86%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_jang");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD1040F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD1040F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("SD1040F.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("SD1040F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        //--------------------------------------------------------------
        // 폼 전역변수 선언
        //--------------------------------------------------------------
        var F_ScreenName    = "";					// 화면명
        var	lovflag = true;
        var qryStr ="";								//쿼리
        var Fv_HeadChk1 = 0;                         //헤드 체크박스1.
        var Fv_HeadChk2 = 0;                         //헤드 체크박스2
        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var Find5_sw  = "N";
        var Gv_BookYear = this.lfn_sd_getBookYear(); // 영업관리 년판 세팅 얻어오기
        var bgbrnm;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        //----------------------------------------------------------------------------------------
        //
        //  사용자정의 함수..
        //
        //----------------------------------------------------------------------------------------
        this.optionGb = function()
        {
        	if (this.cmb_select.index == 3) return "";
        	else return this.cmb_select.value;
        }

        this.sqlCreate = function(event_id)
        {
        	//	 도서코드/도서코드 /기간 /기간 / 업체구간 /업체구간 /등급/학기/판매용구분/주/초/중/고/등록자/부수체크/ioyh/bgbr/custgb/속성코드/판매유형/도서구분
        	//rp [0000000000][9999999999][20061220][20061222][200000][299999][00,01][00,01][0][][][][][][busu][][][][][출고,증정][시험지,답안]
        	var s_jpno, e_jpno, s_cust, e_cust, p_yh;
        	var s_sql1, s_sql2, s_sql3, s_sql4, Hak_g;
            var Line_sw, rdopt;
        	bgbrnm    = "";
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";
        	Find5_sw  = "N";
        	var grid_chk1 = this.Gridcheck("dsIoyh");
        	var grid_chk2 = this.Gridcheck("dsBgbr");
        	var grid_chk3 = this.Gridcheck("dsbpyh");
        	var gb = this.optionGb();
        	var bookcode  = this.Gridcheck("dsSubbook");
        	var rdfile = this.selectfile(this.print_select.value);
        	var pSbookcode, pEbookcode, Cal_bigo;
        	pSbookcode     = this.ed_sbook.value + ")" + this.ed_syy.value;
        	pEbookcode     = this.ed_ebook.value + ")" + this.ed_eyy.value;
        	s_jpno     =  this.ed_sdate.value + "0000";
            e_jpno     =  this.ed_edate.value + "zzzz";
            s_cust     =  this.ed_sgb.value + this.ed_scode.value;
            e_cust     =  this.ed_egb.value + this.ed_ecode.value;
            p_yh       =  this.cmb_select.text;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
        	bgbrnm  = bgbrnm.substr(0,bgbrnm.length-1);
        	if ( Find2_sw  == "N" )
            	bgbrnm  = "전체";

            if (( this.print_select.value == 1 ) || ( this.print_select.value == 2 ) || ( this.print_select.value == 3 ) || ( this.print_select.value == 4 )
        		|| ( this.print_select.value == 5 ) || ( this.print_select.value == 6 )
                || ( this.print_select.value == 7 ) || ( this.print_select.value == 8 ) || ( this.print_select.value == 9 ) || ( this.print_select.value == 11 )
        		|| ( this.print_select.value == 13 )|| ( this.print_select.value == 14 ))
             {
              s_sql1     = "    AND  B.BOOK_CD >=  '" + this.ed_sbook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.BOOK_CD <=  '" + this.ed_ebook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy >=  '" + this.ed_syy.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy <=  '" + this.ed_eyy.value +"'";
              s_sql1     = s_sql1 + "    AND  a.bymd >=  '" + this.ed_sdate.value +"'";
              s_sql1     = s_sql1 + "    AND  a.bymd <=  '" + this.ed_edate.value +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";

              if (( Find1_sw == "Y" ) && (( this.print_select.value == 1 ) || ( this.print_select.value == 2 ) || ( this.print_select.value == 3 ) || ( this.print_select.value == 4 )
        		|| ( this.print_select.value == 5 ) || ( this.print_select.value == 11 )))
               {
                 s_sql1    = s_sql1 + "    and  b.ioyh_cd in ( " + grid_chk1 +" ) ";
               }
              else if (( Find1_sw == "N" ) && (( this.print_select.value == 1 ) || ( this.print_select.value == 2 ) || ( this.print_select.value == 3 ) || ( this.print_select.value ==	 4 )
        		|| ( this.print_select.value == 5 ) || ( this.print_select.value == 11 )))
               {
                 s_sql1    = s_sql1 + "    and  b.ioyh_cd >= '01' ";
                 s_sql1    = s_sql1 + "    and  b.ioyh_cd <= '07' ";
               }

              if ( this.E_jang.text   == "1" )
                {
                 s_sql1     =  s_sql1 + "  and  b.jang_cd2 <> '20'  ";
                 }
              else if ( this.E_jang.text   == "2" )
                {
                 s_sql1     =  s_sql1 + " and   b.jang_cd2 = '20'  ";
                 }

             if ( Find4_sw == "Y" )
               {
                 s_sql1    = s_sql1 + "   and (B.BOOK_CD || B.BYY) in ( " + bookcode +" ) ";
               }
             if ( Find5_sw == "Y" )
               {
                 s_sql1    = s_sql1 + "   and B.jyy in ( " + grid_chk3 +" ) ";
               }
        //======s_sql2
              if ( this.E_gubn.text   == "0" )
                {
                 s_sql2     =  s_sql2 + "  and  d.meip_c = '0'  ";
                 }
              else if ( this.E_gubn.text   == "1" )
                {
                 s_sql2     =  s_sql2 + " and   d.meip_c = '1'  ";
                 }
              else if ( this.E_gubn.text   == "2" )
                {
                 s_sql2     =  s_sql2 + " and   d.meip_c = '2'  ";
                 }

              Line_sw    =  "N";
              if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" ))
               {
                  s_sql2    = s_sql2 + "    and  d.book_hcode in (  ";
                  if ( this.C_hak.value == "1" )
                  {
                    Hak_g     = "학년용";
                    s_sql2    = s_sql2 + " '00' ";
                    Line_sw  = "Y";
                  }
                  if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  ))
                  {
                    Hak_g     = Hak_g + "/1학기";
                    s_sql2    = s_sql2 + ", '01' ";
                    Line_sw   = "Y";
                  }
                  else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  ))
                  {
                    Hak_g     = "1학기";
                    s_sql2    = s_sql2 + " '01' ";
                    Line_sw   = "Y";
                  }
                  if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  ))
                  {
                    Hak_g     = Hak_g + "/2학기";
                    s_sql2    = s_sql2 + ", '02' ";
                    Line_sw   = "Y";
                  }
                  else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  ))
                  {
                    Hak_g     = "2학기";
                    s_sql2    = s_sql2 + " '02' ";
                    Line_sw   = "Y";
                  }
                  s_sql2      = s_sql2 + "    )  ";
               }
               else
                   {
                    Hak_g     = "전체";
                   }
              if ( Find2_sw == "Y" )
               {
                 s_sql2    = s_sql2 + "    and  d.bgbr_cd in ( " + grid_chk2 +" ) ";
               }
              if ( Find3_sw == "Y" )
               {
                 s_sql2    = s_sql2 + "   and d.sgrp_code  in ( " + bookcode +" ) ";
               }
               //trace("M length " +nexacro.trim(this.M_bigo.text).length);
        	   //trace("KW length " +nexacro.trim(this.KW_bigo.text).length);
              if ( nexacro.trim(this.M_bigo.text).length != 0 )
               {
                 Cal_bigo  = this.M_bigo.text.toUpperCase();
                 s_sql2    = s_sql2 + " and REPLACE(UPPER(a.bigo),' ','') like '%" + Cal_bigo + "%' ";
               }

              if ( (this.print_select.value == 4 )  && ( nexacro.trim(this.KW_bigo.text).length != 0 ))
               {
                 Cal_bigo  = this.KW_bigo.text.toUpperCase();
                 s_sql2    = s_sql2 + " and REPLACE(UPPER(d.kw_bigo),' ','') like '%" + Cal_bigo + "%' ";
               }

             }
            else if ( this.print_select.value == 10 )
             {
              s_sql1     = "   where  ( AA.M_custgb || AA.M_CUSTCD ) >= '" + s_cust +"'";
              s_sql1     = s_sql1 + "    and  ( AA.M_custgb || AA.M_CUSTCD ) <= '" + e_cust +"'";
              s_sql1     = s_sql1 + "    AND  a.bymd >=  '" + this.ed_sdate.value +"'";
              s_sql1     = s_sql1 + "    AND  a.bymd <=  '" + this.ed_edate.value +"'";

              s_sql2     = "    AND  B.BOOK_CD >=  '" + this.ed_sbook.value +"'";
              s_sql2     = s_sql2 + "    AND  B.BOOK_CD <=  '" + this.ed_ebook.value +"'";
              s_sql2     = s_sql2 + "    AND  B.Byy >=  '" + this.ed_syy.value +"'";
              s_sql2     = s_sql2 + "    AND  B.Byy <=  '" + this.ed_eyy.value +"'";
              s_sql2     = s_sql2 + "    and  b.ioyh_cd >= '01' ";
              s_sql2     = s_sql2 + "    and  b.ioyh_cd <= '07' ";
              if ( this.E_jang.value   == "1" )
                {
                 s_sql2     =  s_sql2 + "  and  b.jang_cd2 <> '20'  ";
                 }
              else if ( this.E_jang.value   == "2" )
                {
                 s_sql2     =  s_sql2 + " and   b.jang_cd2 = '20'  ";
                 }

              if ( Find1_sw == "Y" )
               {
                 s_sql2    = s_sql2 + "    and  b.ioyh_cd in ( " + grid_chk1 +" ) ";
               }

             if ( Find5_sw == "Y" )
               {
                 s_sql2    = s_sql2 + "   and B.jyy in ( " + grid_chk3 +" ) ";
               }

             if ( Find4_sw == "Y" )
               {
                 s_sql2    = s_sql2 + "   and (B.BOOK_CD || B.BYY) in ( " + bookcode +" ) ";
               }
        //======s_sql2
              if ( this.E_gubn.text   == "0" )
                {
                 s_sql2     =  s_sql2 + "  and  d.meip_c = '0'  ";
                 }
              else if ( this.E_gubn.text   == "1" )
                {
                 s_sql2     =  s_sql2 + " and   d.meip_c = '1'  ";
                 }
              else if ( this.E_gubn.text   == "2" )
                {
                 s_sql2     =  s_sql2 + " and   d.meip_c = '2'  ";
                 }

              Line_sw    =  "N";
              if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" ))
               {
                  s_sql2    = s_sql2 + "    and  d.book_hcode in (  ";
                  if ( this.C_hak.value == "1" )
                  {
                    Hak_g     = "학년용";
                    s_sql2    = s_sql2 + " '00' ";
                    Line_sw  = "Y";
                  }
                  if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  ))
                  {
                    Hak_g     = Hak_g + "/1학기";
                    s_sql2    = s_sql2 + ", '01' ";
                    Line_sw   = "Y";
                  }
                  else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  ))
                  {
                    Hak_g     = "1학기";
                    s_sql2    = s_sql2 + " '01' ";
                    Line_sw   = "Y";
                  }
                  if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  ))
                  {
                    Hak_g     = Hak_g + "/2학기";
                    s_sql2    = s_sql2 + ", '02' ";
                    Line_sw   = "Y";
                  }
                  else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  ))
                  {
                    Hak_g     = "2학기";
                    s_sql2    = s_sql2 + " '02' ";
                    Line_sw   = "Y";
                  }
                  s_sql2      = s_sql2 + "    )  ";
               }
               else
                   {
                    Hak_g     = "전체";
                   }
              if ( Find2_sw == "Y" )
               {
                 s_sql2    = s_sql2 + "    and  d.bgbr_cd in ( " + grid_chk2 +" ) ";
               }
              if ( Find3_sw == "Y" )
               {
                 s_sql2    = s_sql2 + "   and d.sgrp_code  in ( " + bookcode +" ) ";
               }
             }
            else if ( this.print_select.value == 12 )
             {
              s_sql1     = "    AND  B.BOOK_CD >=  '" + this.ed_sbook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.BOOK_CD <=  '" + this.ed_ebook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy >=  '" + this.ed_syy.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy <=  '" + this.ed_eyy.value +"'";
              s_sql1     = s_sql1 + "    AND  a.bymd >=  '" + this.ed_sdate.value +"'";
              s_sql1     = s_sql1 + "    AND  a.bymd <=  '" + this.ed_edate.value +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
             if ( Find4_sw == "Y" )
               {
                 s_sql1    = s_sql1 + "   and (B.BOOK_CD || B.BYY) in ( " + bookcode +" ) ";
               }
              s_sql2     = "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
              s_sql2     = s_sql2 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
              s_sql2     = s_sql2 + "    AND  a.BOOK_CD >=  '" + this.ed_sbook.value +"'";
              s_sql2     = s_sql2 + "    AND  a.BOOK_CD <=  '" + this.ed_ebook.value +"'";
              s_sql2     = s_sql2 + "    AND  a.Byy >=  '" + this.ed_syy.value +"'";
              s_sql2     = s_sql2 + "    AND  a.Byy <=  '" + this.ed_eyy.value +"'";
             }

        	var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+this.ed_sdate.value+"]"+ // 1
        	"["+this.ed_edate.value+"]"+				  // 2
        	"["+pSbookcode+"]"+							  // 3
        	"["+pEbookcode+"]"+							  // 4
        	"["+this.ed_sgb.value + this.ed_scode.value+"]"+ // 5
        	"["+this.ed_egb.value + this.ed_ecode.value+"]"+ // 6
        	"["+p_yh+"]"+  // 7
        	"["+bgbrnm+"]"+  // 8
        	"["+s_sql1+"]"+  // 9
        	"["+s_sql2+"]";  // 10

        	trace(rdopt);
        	/* 미리 보기 OR 출력 버튼이벤트 시작 */
        	if(event_id == "btn_printview" ) // 미리보기 일때
        	{
        		switch(this.print_select.value)
        		{
        			case '1' : // 일자별 반품현황, 일자별 반품현황(ISBN)
        					if(this.C_isbn.value == false ) {
        						this.Div00.set_url("sd::SD1040F_GRID1.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2);
        						var outds = "ds_1=ds_1";
        						var inds = "ds_1=ds_1";
        						trace(strArg);

        						this.gfn_TransactionP("ds1_select","JSP/sd/SD1040F_DS1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}
        					else if(this.C_isbn.value == true)
        					{
        						this.Div00.set_url("sd::SD1040F_GRID1_2.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2);
        						var outds = "ds_1_2=ds_1_2";
        						var inds = "ds_1_2=ds_1_2";
        						trace(strArg);

        						this.gfn_TransactionP("ds1_select","JSP/sd/SD1040F_DS1_2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}

        					break;
        			case '2' : // 도서별반품현황
        					this.Div00.set_url("sd::SD1040F_GRID2.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_2=ds_2";
        					var inds = "ds_2=ds_2";
        					trace(strArg);

        					this.gfn_TransactionP("ds2_select","JSP/sd/SD1040F_DS2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '3' : // 거래처별반품현황
        					this.Div00.set_url("sd::SD1040F_GRID3.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_3=ds_3";
        					var inds = "ds_3=ds_3";
        					trace(strArg);

        					this.gfn_TransactionP("ds3_select","JSP/sd/SD1040F_DS3_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '4' : // 도서별반품집계
        					this.Div00.set_url("sd::SD1040F_GRID4.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_4=ds_4";
        					var inds = "ds_4=ds_4";
        					trace(strArg);

        					this.gfn_TransactionP("ds4_select","JSP/sd/SD1040F_DS4_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '5' : // 거래처별반품(집계
        					this.Div00.set_url("sd::SD1040F_GRID5.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_5=ds_5";
        					var inds = "ds_5=ds_5";
        					trace(strArg);

        					this.gfn_TransactionP("ds5_select","JSP/sd/SD1040F_DS5_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '6' : // 도서별반품집계1
        					this.Div00.set_url("sd::SD1040F_GRID6.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_6=ds_6";
        					var inds = "ds_6=ds_6";
        					trace(strArg);

        					this.gfn_TransactionP("ds6_select","JSP/sd/SD1040F_DS6_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '7' : // 거래처별반품집계1
        					this.Div00.set_url("sd::SD1040F_GRID7.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_7=ds_7";
        					var inds = "ds_7=ds_7";
        					trace(strArg);

        					this.gfn_TransactionP("ds7_select","JSP/sd/SD1040F_DS7_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '8' : // 일자별반품(2)현황
        					this.Div00.set_url("sd::SD1040F_GRID8.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_8=ds_8";
        					var inds = "ds_8=ds_8";
        					trace(strArg);

        					this.gfn_TransactionP("ds8_select","JSP/sd/SD1040F_DS8_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '9' : // 도서별반품(2)집계
        					this.Div00.set_url("sd::SD1040F_GRID9.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_9=ds_9";
        					var inds = "ds_9=ds_9";
        					trace(strArg);

        					this.gfn_TransactionP("ds9_select","JSP/sd/SD1040F_DS9_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '10' : // 연결업체별반품현황
        					this.Div00.set_url("sd::SD1040F_GRID10.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_10=ds_10";
        					var inds = "ds_10=ds_10";
        					trace(strArg);

        					this.gfn_TransactionP("ds10_select","JSP/sd/SD1040F_DS10_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '11' : // 도서별반품집계(차이
        					this.Div00.set_url("sd::SD1040F_GRID11.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_11=ds_11";
        					var inds = "ds_11=ds_11";
        					trace(strArg);

        					this.gfn_TransactionP("ds11_select","JSP/sd/SD1040F_DS11_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '12' : // 본사이체반품집계(서점수
        					this.Div00.set_url("sd::SD1040F_GRID12.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_12=ds_12";
        					var inds = "ds_12=ds_12";
        					trace(strArg);

        					this.gfn_TransactionP("ds12_select","JSP/sd/SD1040F_DS12_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '13' : // 50%추가반품현황
        					this.Div00.set_url("sd::SD1040F_GRID13.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_13=ds_13";
        					var inds = "ds_13=ds_13";
        					trace(strArg);

        					this.gfn_TransactionP("ds13_select","JSP/sd/SD1040F_DS13_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '14' : // 일자별반품현황(물류
        					this.Div00.set_url("sd::SD1040F_GRID14.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_14=ds_14";
        					var inds = "ds_14=ds_14";
        					trace(strArg);

        					this.gfn_TransactionP("ds14_select","JSP/sd/SD1040F_DS14_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        		}
        	}
        	else if ( event_id  == "btn_print" ) // 출력일때
        	{
        		this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        }

        this.btn_attribute_search_onclick = function(obj,e)
        {
        	this.search_bookcode();
        };


        this.search_bookcode = function()
        {
        	if( this.ed_subbookcode.value == undefined || this.ed_subbookcode.value.trim() == "" )
        		this.ed_subbookcode.set_value("");

        	var strArg;
        	var inds 	= "dsSubbook=dsSubbook";
        	var outds 	= "dsSubbook=dsSubbook";
        	var subbookcode = this.ed_subbookcode.value;
        	var bookname = this.ed_bookname.value;
        	var chk      = this.ck_select.value;
        	var pyear    = this.ed_year.value;
        	var c_use    = this.ck_use.value;

        	if (pyear == "") pyear = "NULL";
        	if (subbookcode == "          ") subbookcode = "NULL";

        	if (this.ck_select.value == true)
        	{
        		this.grd_attribute.setCellProperty("head",1,"text","도서코드");
        		this.grd_attribute.setCellProperty("head",2,"text","년판");
        	}
        	else
        	{
        		this.grd_attribute.setCellProperty("head",1,"text","속성코드");
        		this.grd_attribute.setCellProperty("head",2,"text","출판");
        	}
        	strArg = "values1="+nexacro.wrapQuote(subbookcode)
        	                   +"values2="+nexacro.wrapQuote(bookname)
        					   +"values3="+nexacro.wrapQuote(chk)
        					   +"values4="+nexacro.wrapQuote(pyear)
        					   +"values5="+nexacro.wrapQuote(c_use);

        	trace(strArg);
        	this.gfn_TransactionP("subbook_select","JSP/sd/select_subbookcode.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        }


        this.btn_scust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_scode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };

        this.btn_ecust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_ecode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };


        this.popupCallBack = function(sFormId, sArg)
        {
        	if(!this.lfn_sd_fnisNull(sArg)) // 리턴값이 널이 아니면 수행
        	{
        		if(sFormId=="popupBookCode_sbook") // 도서시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sbook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_ebook") // 도서 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ebook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupCustCode_scode") // 거래처 시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sgb.set_value(arry[0]);
        			this.ed_scode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupCustCode_ecode") // 거래처 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_egb.set_value(arry[0]);
        			this.ed_ecode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupBookCode_user") // 영업자 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ju.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_maker") // 등록자 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_adduser.set_value(arry[0]);
        		}
        	}
        };

        this.btn_sbookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_sbook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_ebookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_ebook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_s_saleuser_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_user", objParam, "sd::frmSaleUser.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_e_saleuser_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_maker", objParam, "sd::frmSaleUser.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.SD1040F_onload = function(obj,e)
        {
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		// 현재 hash 에 해당하는 data 를 얻어온다.
        		var hash = MyHistory.getLocationHash();
        		//var data = MyHistory.getData(hash);
        		//trace(hash);
        	}
        	//디폴드 div 셋팅
        	//this.Div00.set_url("sd::SD1020F_GRID1.xfdl")

        	//디폴트 오늘날자.
        	var today = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(today, "yyyyMMdd");
        	//nexacro.getApplication().Gv_BookYear = this.lfn_sd_getBookYear();

        	this.ed_sdate.set_value(strtoDay);
        	this.ed_edate.set_value(strtoDay);
        	this.cmb_select.set_index(3);
        	this.E_gubn.set_value("3");

        	this.ed_sgb.set_value("13");
        	this.ed_scode.set_value("0000");
        	this.ed_egb.set_value("37");
        	this.ed_ecode.set_value("9999");
        	this.ed_sbook.set_value("0000000000");
        	this.ed_ebook.set_value("9999999999");
        	this.ed_syy.set_value(this.lfn_sd_getBookYear("start"));
        	this.ed_eyy.set_value(this.lfn_sd_getBookYear("year"));
        	this.ck_use.set_value(true);
        	this.ed_year.set_value(this.lfn_sd_getBookYear("year"));

        	//도서구분 가져오기
        	strArg = "";
        	outds = "ds_bgbr=ds_bgbr";
        	inds = "ds_bgbr=ds_bgbr";

        	this.gfn_TransactionP("bgbr_select","JSP/sd/sel_bgbr.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	this.ed_sdate.setFocus();

        	//이체유형 가져오기
        	strArg = "";
        	outds = "ds_bpyh=ds_bpyh";
        	inds = "ds_bpyh=ds_bpyh";

        	this.gfn_TransactionP("bpyh_select","JSP/sd/sel_bpyh.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	this.ed_sdate.setFocus();
        };

        this.cmb_select_onitemchanged = function(obj,e)
        {
        	if( this.cmb_select.value == "0" )
        		this.E_gubn.set_value("0");
        	else if( this.cmb_select.value == "1" )
        		this.E_gubn.set_value("1");
        	else if( this.cmb_select.value == "2" )
        		this.E_gubn.set_value("2");
        	else if( this.cmb_select.value == "3" )
        		this.E_gubn.set_value("3");
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	trace(obj.id);
        	this.sqlCreate(obj.id);
        };


        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";
        	var loop = 0;
        	//trace("in Gridcheck" +this.dsIoyh.rowcount);

        	if (strdsname=="dsIoyh")
        	{
        		for (loop=0; loop < this.dsIoyh.rowcount; loop++)
        		{
        			if (this.dsIoyh.getColumn(loop,"chk")==1)
        			{
        			    Find1_sw  = "Y";
        				strReturn = strReturn +"'"+this.dsIoyh.getColumn(loop,"index")+"',";
        			}
        		}
        	}

        	if (strdsname=="dsBgbr")
        	{
        		trace("in dsBgbr ");
        		for (loop=0; loop< this.ds_bgbr.rowcount; loop++)
        		{
        			if ( this.ds_bgbr.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find2_sw  = "Y";
        			    bgbrnm    = bgbrnm + "'"+nexacro.trim(this.ds_bgbr.getColumn(loop,"name"))+"',";
        				strReturn = strReturn +"'"+this.ds_bgbr.getColumn(loop,"code")+"',";
        			}
        		}
        	}

        	if (strdsname=="dsbpyh")
        	{
        		trace("in dsbpyh ");
        		for (loop=0; loop< this.ds_bpyh.rowcount; loop++)
        		{
        			if ( this.ds_bpyh.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find5_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_bpyh.getColumn(loop,"code")+"',";
        			}
        		}
        	}

        	if ((strdsname=="dsSubbook") && (this.ck_select.value==false))
        	{
        		//trace("in dsSubbook -> ck_select.value = false ");
        		for (loop=0; loop<this.dsSubbook.rowcount; loop++)
        		{
        			if (this.dsSubbook.getColumn(loop,"chk")==1)
        			{
        			    Find3_sw  = "Y";
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,9)+ "',";
        			}
        		}
        	}

        	if ((strdsname=="dsSubbook") && (this.ck_select.value==true))
        	{
        		//trace("in dsSubbook -> ck_select.value = true ");
        		for (loop=0; loop<this.dsSubbook.rowcount; loop++)
        		{
        			if (this.dsSubbook.getColumn(loop,"chk")==1)
        			{
        			    Find4_sw  = "Y";
        				//strReturn = strReturn +"'"+this.left(this.dsSubbook.getColumn(loop,"code_key"),10)+ this.left(this.dsSubbook.getColumn(loop,"book_year"),4)+"',";
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,10)+ this.dsSubbook.getColumn(loop,"book_year").substr(0,4) +"',";
        			}
        		}
        	}

        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length-1);
        };


        this.selectfile = function(num)
        {
        	if ((num == 1) && ( this.C_isbn.value == false )) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1041r.mrd"; // 일자별반품현황
        	else if ((num == 1) && ( this.C_isbn.value == true )) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1041i.mrd"; // 일자별반품현황(isbn)
        	else if (num == 2) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1042r.mrd"; // 도서별반품현황
        	else if (num == 3) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1043r.mrd"; // 거래처별반품현황
        	else if (num == 4) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1044r.mrd"; // 도서별반품집계
        	else if (num == 5) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1045r.mrd"; // 거래처별반품(집계
        	else if (num == 6) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1046r.mrd"; // 도서별반품집계1
        	else if (num == 7) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1047r.mrd"; // 거래처별반품집계1
        	else if (num == 8) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1048r.mrd"; // 일자별반품(2)현황
        	else if (num == 9) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1049r.mrd"; // 도서별반품(2)집계
        	else if (num == 10) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1049_1r.mrd"; // 연결업체별반품현황
        	else if (num == 11) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1044_1r.mrd"; // 도서별반품집계(차이
        	else if (num == 12) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1049_2r.mrd"; // 본사이체반품집계(서점수
        	else if (num == 13) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1049_ADD50P.mrd"; // 50%추가반품현황
        	else if (num == 14) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1041r_deliver.mrd"; // 일자별반품현황(물류

        };

        this.btn_excel_onclick = function(obj,e)
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();
        	if ( this.Div00.url == "sd::SD1020F_GRID1.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID1, "Sheet1!A1");
        		filename = "일자별 출고현황"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID2, "Sheet1!A1");
        		filename = "거래처별 출고현황"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID3.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID3, "Sheet1!A1");
        		filename = "도서별 출고현황"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID4.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID4, "Sheet1!A1");
        		filename = "등록자별 출고현황"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID5.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID5, "Sheet1!A1");
        		filename = "도서 출고 집계"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID6.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID6, "Sheet1!A1");
        		filename = "총판도서 출고집계"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID7.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID7, "Sheet1!A1");
        		filename = "사이버넷 출고집계"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID8.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID7, "Sheet1!A1");
        		filename = "사이버넷 출고집계"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID9.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID9, "Sheet1!A1");
        		filename = "일자별 출고(차이)"; }
        	else if ( this.Div00.url == "sd::SD1020F_GRID10.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1020F_GRID10, "Sheet1!A1");
        		filename = "총판 출고(집계)"; }

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        this.grd_attribute_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk1 == 0)
        			Fv_HeadChk1 = 1;
        		else
        			Fv_HeadChk1 = 0;

        		this.grd_attribute.setCellProperty("head", 0, "text", Fv_HeadChk1);
        		for(var i = 0; i < this.dsSubbook.rowcount; i++)
        		{
        			this.dsSubbook.setColumn(i, "chk", Fv_HeadChk1);

        		}
        	}
        };



        this.gr_ioyh_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk1 == 0)
        			Fv_HeadChk1 = 1;
        		else
        			Fv_HeadChk1 = 0;

        		this.grd_ioyh.setCellProperty("head", 0, "text", Fv_HeadChk1);
        		for(var i = 0; i < this.dsIoyh.rowcount; i++)
        		{
        			this.dsIoyh.setColumn(i, "chk", Fv_HeadChk1);

        		}
        	}
        };

        this.grd_bgbr_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk2 == 0)
        			Fv_HeadChk2 = 1;
        		else
        			Fv_HeadChk2 = 0;

        		this.grd_bgbr.setCellProperty("head", 0, "text", Fv_HeadChk2);
        		for(var i = 0; i < this.ds_bgbr.rowcount; i++)
        		{
        			this.ds_bgbr.setColumn(i, "chk", Fv_HeadChk2);

        		}
        	}
        };


        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        		this.alert(ErrorMsg);
        	else if ( svcId == "ds13_select" )
        	{
        	}
        };

        this.jang_select_onitemchanged = function(obj,e)
        {
        	if( this.jang_select.value == "0" )
        		this.E_jang.set_value("0");
        	else if( this.jang_select.value == "1" )
        		this.E_jang.set_value("1");
        	else if( this.jang_select.value == "2" )
        		this.E_jang.set_value("2");
        	else if( this.jang_select.value == "3" )
        		this.E_jang.set_value("3");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD1040F_onload,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_bgbr.addEventHandler("onheadclick",this.grd_bgbr_onheadclick,this);
            this.cmb_select.addEventHandler("onitemchanged",this.cmb_select_onitemchanged,this);
            this.btn_ebookcode.addEventHandler("onclick",this.btn_ebookcode_onclick,this);
            this.btn_attribute_search.addEventHandler("onclick",this.btn_attribute_search_onclick,this);
            this.btn_sbookcode.addEventHandler("onclick",this.btn_sbookcode_onclick,this);
            this.btn_scust.addEventHandler("onclick",this.btn_scust_onclick,this);
            this.btn_ecust.addEventHandler("onclick",this.btn_ecust_onclick,this);
            this.E_gubn.addEventHandler("onkeydown",this.E_gubn_onkeydown,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.grd_attribute.addEventHandler("onheadclick",this.grd_attribute_onheadclick,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_bpyh.addEventHandler("onheadclick",this.grd_bgbr_onheadclick,this);
            this.Static00_00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_ioyh.addEventHandler("onheadclick",this.gr_ioyh_onheadclick,this);
            this.Static00_00_01_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.E_jang.addEventHandler("onkeydown",this.E_gubn_onkeydown,this);
            this.jang_select.addEventHandler("onitemchanged",this.jang_select_onitemchanged,this);
        };
        this.loadIncludeScript("SD1040F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
